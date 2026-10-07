/**
 * Generic API Client with error handling, offline detection, and timeout.
 * Follows Rule 8 (API Rules) & Rule 10 (Error UI Rules).
 */

const DEFAULT_TIMEOUT_MS = 10000;

export class ApiError extends Error {
  constructor({ message, status = 500, isOffline = false, isUnauthorized = false, title = 'Request Failed' }) {
    super(message);
    this.name = 'ApiError';
    this.status = status;
    this.isOffline = isOffline;
    this.isUnauthorized = isUnauthorized;
    this.title = title;
  }
}

/**
 * Executes a fetch request with timeout, offline detection, and sanitized errors.
 * @param {string} url
 * @param {RequestInit} [options]
 * @returns {Promise<any>}
 */
export async function apiRequest(url, options = {}) {
  // 1. Offline Check
  if (typeof navigator !== 'undefined' && !navigator.onLine) {
    throw new ApiError({
      title: 'You Are Offline',
      message: 'Network connection is currently unavailable. Please check your internet connection.',
      status: 0,
      isOffline: true
    });
  }

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), options.timeoutMs || DEFAULT_TIMEOUT_MS);

  try {
    const response = await fetch(url, {
      ...options,
      signal: controller.signal
    });

    clearTimeout(timeoutId);

    // 2. Unauthorized Check
    if (response.status === 401 || response.status === 403) {
      throw new ApiError({
        title: 'Access Restricted',
        message: 'You are not authorized to access this resource.',
        status: response.status,
        isUnauthorized: true
      });
    }

    // 3. Not Found
    if (response.status === 404) {
      throw new ApiError({
        title: 'Resource Not Found',
        message: 'The requested breed or information could not be located.',
        status: 404
      });
    }

    // 4. Server or other HTTP Error
    if (!response.ok) {
      throw new ApiError({
        title: 'Service Unavailable',
        message: 'The pet database service is temporarily unavailable. Please try again shortly.',
        status: response.status
      });
    }

    const data = await response.json();
    return data;
  } catch (err) {
    clearTimeout(timeoutId);

    if (err instanceof ApiError) {
      throw err;
    }

    if (err.name === 'AbortError') {
      throw new ApiError({
        title: 'Request Timed Out',
        message: 'The server took too long to respond. Please check your connection and try again.',
        status: 408
      });
    }

    // Sanitized general network error (never expose raw internal errors)
    throw new ApiError({
      title: 'Connection Error',
      message: 'Unable to connect to the external pet database. Please verify your internet connection.',
      status: 500,
      isOffline: typeof navigator !== 'undefined' && !navigator.onLine
    });
  }
}
