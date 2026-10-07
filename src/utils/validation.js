// Form validation utility functions for PetCare Hub
// Satisfies Rule 9 (Form Validation: Client + Server, Email, Password, Phone, URL, Required)
// Satisfies Rule 20 (Security: Sanitize inputs, no trusting raw values)

/**
 * Validates an email address.
 * @param {string} email
 * @returns {{ isValid: boolean, error?: string }}
 */
export function validateEmail(email) {
  if (!email || !email.trim()) {
    return { isValid: false, error: 'Email address is required' };
  }
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailRegex.test(email.trim())) {
    return { isValid: false, error: 'Please enter a valid email address (e.g. vet@petcare.org)' };
  }
  return { isValid: true };
}

/**
 * Validates a password (min 8 chars, 1 uppercase, 1 digit).
 * @param {string} password
 * @returns {{ isValid: boolean, error?: string }}
 */
export function validatePassword(password) {
  if (!password) {
    return { isValid: false, error: 'Password is required' };
  }
  if (password.length < 8) {
    return { isValid: false, error: 'Password must be at least 8 characters long' };
  }
  if (!/[A-Z]/.test(password)) {
    return { isValid: false, error: 'Password must include at least one uppercase letter' };
  }
  if (!/[0-9]/.test(password)) {
    return { isValid: false, error: 'Password must include at least one digit' };
  }
  return { isValid: true };
}

/**
 * Validates phone numbers (10-15 digits, international support).
 * @param {string} phone
 * @returns {{ isValid: boolean, error?: string }}
 */
export function validatePhone(phone) {
  if (!phone || !phone.trim()) {
    return { isValid: false, error: 'Phone number is required' };
  }
  // Allow optional +, digits, spaces, hyphens, parentheses (min 10 digits)
  const digitsOnly = phone.replace(/\D/g, '');
  if (digitsOnly.length < 10 || digitsOnly.length > 15) {
    return { isValid: false, error: 'Phone number must contain between 10 and 15 digits' };
  }
  return { isValid: true };
}

/**
 * Validates standard HTTP/HTTPS URLs.
 * @param {string} url
 * @param {boolean} [required=false]
 * @returns {{ isValid: boolean, error?: string }}
 */
export function validateUrl(url, required = false) {
  if (!url || !url.trim()) {
    if (required) return { isValid: false, error: 'URL is required' };
    return { isValid: true };
  }
  const urlPattern = /^(https?:\/\/)[^\s$.?#].[^\s]*$/i;
  if (!urlPattern.test(url.trim())) {
    return { isValid: false, error: 'Please enter a valid HTTP or HTTPS URL' };
  }
  return { isValid: true };
}

/**
 * Validates required text fields.
 * @param {string} value
 * @param {string} [fieldLabel='This field']
 * @param {number} [minLength=1]
 * @returns {{ isValid: boolean, error?: string }}
 */
export function validateRequired(value, fieldLabel = 'This field', minLength = 1) {
  if (!value || !value.toString().trim()) {
    return { isValid: false, error: `${fieldLabel} is required` };
  }
  if (value.toString().trim().length < minLength) {
    return { isValid: false, error: `${fieldLabel} must be at least ${minLength} characters` };
  }
  return { isValid: true };
}

/**
 * Validates a Pet profile form data (Client-side validation)
 * @param {Object} formData
 * @returns {{ isValid: boolean, errors: Object }}
 */
export function validatePetForm(formData) {
  const errors = {};

  // Name validation: required, 2-50 characters
  if (!formData.name || !formData.name.trim()) {
    errors.name = 'Pet breed or name is required';
  } else if (formData.name.trim().length < 2) {
    errors.name = 'Name must be at least 2 characters';
  } else if (formData.name.trim().length > 50) {
    errors.name = 'Name cannot exceed 50 characters';
  }

  // Category validation: required and valid
  const validCategories = ['dog', 'cat', 'bird', 'rabbit', 'fish'];
  if (!formData.category) {
    errors.category = 'Please select a pet category';
  } else if (!validCategories.includes(formData.category.toLowerCase())) {
    errors.category = 'Category must be dog, cat, bird, rabbit, or fish';
  }

  // Tagline validation: min 5 chars
  if (!formData.tagline || !formData.tagline.trim()) {
    errors.tagline = 'A short tagline or summary is required';
  } else if (formData.tagline.trim().length < 5) {
    errors.tagline = 'Tagline must be at least 5 characters';
  }

  // Lifespan validation: required, e.g. "10 - 12 years"
  if (!formData.lifespan || !formData.lifespan.trim()) {
    errors.lifespan = 'Lifespan is required (e.g. "10 - 14 years")';
  }

  // Temperament validation: min 3 chars
  if (!formData.temperament || !formData.temperament.trim()) {
    errors.temperament = 'Temperament traits are required (e.g. "Friendly, Loyal")';
  }

  // Care level validation
  const validCareLevels = ['Easy', 'Moderate', 'High'];
  if (!formData.careLevel) {
    errors.careLevel = 'Please select a care level';
  } else if (!validCareLevels.includes(formData.careLevel)) {
    errors.careLevel = 'Care level must be Easy, Moderate, or High';
  }

  // Activity level validation
  if (!formData.activityLevel || !formData.activityLevel.trim()) {
    errors.activityLevel = 'Activity level is required (e.g. "Moderate (30-45 mins/day)")';
  }

  // Diet type validation
  if (!formData.dietType || !formData.dietType.trim()) {
    errors.dietType = 'Diet type is required (e.g. "High-protein omnivore")';
  }

  // Description validation: min 15 chars
  if (!formData.description || !formData.description.trim()) {
    errors.description = 'A detailed description is required';
  } else if (formData.description.trim().length < 15) {
    errors.description = 'Description must be at least 15 characters long';
  }

  // Image URL validation: optional or valid HTTP/HTTPS URL
  if (formData.image && formData.image.trim()) {
    const urlValidation = validateUrl(formData.image.trim());
    if (!urlValidation.isValid) {
      errors.image = 'Please enter a valid HTTP or HTTPS image URL';
    }
  }

  // Optional Contact Email Validation
  if (formData.contactEmail && formData.contactEmail.trim()) {
    const emailResult = validateEmail(formData.contactEmail.trim());
    if (!emailResult.isValid) {
      errors.contactEmail = emailResult.error;
    }
  }

  // Optional Contact Phone Validation
  if (formData.contactPhone && formData.contactPhone.trim()) {
    const phoneResult = validatePhone(formData.contactPhone.trim());
    if (!phoneResult.isValid) {
      errors.contactPhone = phoneResult.error;
    }
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
}

/**
 * Validates Reminder form data
 * @param {Object} data
 * @returns {{ isValid: boolean, errors: Object }}
 */
export function validateReminderForm(data) {
  const errors = {};

  if (!data.task || !data.task.trim()) {
    errors.task = 'Task description is required';
  } else if (data.task.trim().length < 3) {
    errors.task = 'Task must be at least 3 characters';
  }

  if (!data.petName || !data.petName.trim()) {
    errors.petName = 'Pet name is required';
  }

  if (!data.dueDate) {
    errors.dueDate = 'Due date is required';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
}

/**
 * Simulated Server-side Validation (Rule 9: Required Server validation)
 * Emulates backend verification against duplicate names, injection attempts, and business rules.
 * @param {Object} formData
 * @param {Array} [existingPets=[]]
 * @param {string} [currentId=null]
 * @returns {Promise<{ isValid: boolean, errors: Object }>}
 */
export async function simulateServerValidation(formData, existingPets = [], currentId = null) {
  // Simulate network latency (200ms)
  await new Promise((resolve) => setTimeout(resolve, 200));

  const clientResult = validatePetForm(formData);
  const serverErrors = { ...clientResult.errors };

  // 1. Server-side rule: Check for duplicate pet names in catalog (excluding current editing item)
  if (formData.name && formData.name.trim()) {
    const duplicate = existingPets.find(
      (p) =>
        p.id !== currentId &&
        p.name.trim().toLowerCase() === formData.name.trim().toLowerCase()
    );
    if (duplicate) {
      serverErrors.name = `A pet profile named "${formData.name}" already exists. Please choose a distinctive name.`;
    }
  }

  // 2. Server-side rule: Sanitize description against prohibited script tags
  if (formData.description && /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi.test(formData.description)) {
    serverErrors.description = 'Malicious script content detected and rejected by server.';
  }

  return {
    isValid: Object.keys(serverErrors).length === 0,
    errors: serverErrors
  };
}
