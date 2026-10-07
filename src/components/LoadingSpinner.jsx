import React from 'react';

export default function LoadingSpinner({ message = 'Loading content...' }) {
  return (
    <div className="loading-spinner-wrapper" role="status" aria-live="polite">
      <div className="spinner-ring"></div>
      <p className="spinner-message">{message}</p>
    </div>
  );
}
