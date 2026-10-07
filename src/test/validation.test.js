import { describe, it, expect } from 'vitest';
import {
  validatePetForm,
  validateReminderForm,
  validateEmail,
  validatePassword,
  validatePhone,
  validateUrl,
  validateRequired,
  simulateServerValidation
} from '../utils/validation';

describe('Form Validation Utilities', () => {
  describe('validatePetForm', () => {
    it('should validate a complete and valid pet profile', () => {
      const validData = {
        name: 'Golden Retriever',
        category: 'dog',
        tagline: 'Friendly and loyal canine companion',
        lifespan: '10 - 12 years',
        temperament: 'Gentle, Friendly, Devoted',
        careLevel: 'Moderate',
        activityLevel: 'High (60-90 mins/day)',
        dietType: 'High-protein omnivore',
        description: 'Golden Retrievers are exceptionally loving dogs suitable for active families.',
        image: 'https://images.unsplash.com/photo-1552053831-71594a27632d'
      };

      const result = validatePetForm(validData);
      expect(result.isValid).toBe(true);
      expect(Object.keys(result.errors).length).toBe(0);
    });

    it('should fail when name is empty or too short', () => {
      const invalidData = {
        name: 'A',
        category: 'dog',
        tagline: 'Short description',
        lifespan: '10 years',
        temperament: 'Friendly',
        careLevel: 'Easy',
        activityLevel: 'Normal',
        dietType: 'Omnivore',
        description: 'A sufficiently long description for validation.'
      };

      const result = validatePetForm(invalidData);
      expect(result.isValid).toBe(false);
      expect(result.errors.name).toBeDefined();
    });

    it('should fail when category is invalid', () => {
      const invalidData = {
        name: 'Dragon',
        category: 'mythical',
        tagline: 'Fire-breathing creature',
        lifespan: '100 years',
        temperament: 'Fierce',
        careLevel: 'High',
        activityLevel: 'High',
        dietType: 'Carnivore',
        description: 'A mythical creature description that is long enough.'
      };

      const result = validatePetForm(invalidData);
      expect(result.isValid).toBe(false);
      expect(result.errors.category).toBeDefined();
    });

    it('should fail when description is too short (under 15 characters)', () => {
      const invalidData = {
        name: 'Beagle',
        category: 'dog',
        tagline: 'Curious hunter',
        lifespan: '12 - 15 years',
        temperament: 'Gentle',
        careLevel: 'Easy',
        activityLevel: 'Moderate',
        dietType: 'Standard',
        description: 'Too short'
      };

      const result = validatePetForm(invalidData);
      expect(result.isValid).toBe(false);
      expect(result.errors.description).toBeDefined();
    });

    it('should flag malformed image URLs', () => {
      const invalidData = {
        name: 'Persian Cat',
        category: 'cat',
        tagline: 'Calm and quiet indoor pet',
        lifespan: '12 - 17 years',
        temperament: 'Docile, Sweet',
        careLevel: 'Moderate',
        activityLevel: 'Low',
        dietType: 'Carnivore',
        description: 'Persian cats have long flowing coats and calm personalities.',
        image: 'not-a-valid-http-url'
      };

      const result = validatePetForm(invalidData);
      expect(result.isValid).toBe(false);
      expect(result.errors.image).toBeDefined();
    });
  });

  describe('validateReminderForm', () => {
    it('should validate complete reminder', () => {
      const valid = {
        task: 'Annual Rabies Vaccination',
        petName: 'Rocky',
        dueDate: '2026-12-01'
      };

      const result = validateReminderForm(valid);
      expect(result.isValid).toBe(true);
    });

    it('should reject empty tasks', () => {
      const invalid = {
        task: '',
        petName: 'Rocky',
        dueDate: '2026-12-01'
      };

      const result = validateReminderForm(invalid);
      expect(result.isValid).toBe(false);
      expect(result.errors.task).toBeDefined();
    });
  });

  describe('Rule 9 Specific Field Validators', () => {
    it('validates email correctly', () => {
      expect(validateEmail('vet@petcare.org').isValid).toBe(true);
      expect(validateEmail('invalid-email').isValid).toBe(false);
      expect(validateEmail('').isValid).toBe(false);
    });

    it('validates password correctly (min 8 chars, 1 uppercase, 1 digit)', () => {
      expect(validatePassword('PetPass123').isValid).toBe(true);
      expect(validatePassword('short1').isValid).toBe(false);
      expect(validatePassword('nouppercase123').isValid).toBe(false);
      expect(validatePassword('NoDigitsHere').isValid).toBe(false);
    });

    it('validates phone numbers correctly (10-15 digits)', () => {
      expect(validatePhone('+1 (555) 123-4567').isValid).toBe(true);
      expect(validatePhone('9876543210').isValid).toBe(true);
      expect(validatePhone('12345').isValid).toBe(false);
    });

    it('validates URLs correctly', () => {
      expect(validateUrl('https://petcare.org/guide').isValid).toBe(true);
      expect(validateUrl('http://example.com').isValid).toBe(true);
      expect(validateUrl('ftp://invalid-scheme').isValid).toBe(false);
    });

    it('validates required fields', () => {
      expect(validateRequired('Present').isValid).toBe(true);
      expect(validateRequired('   ').isValid).toBe(false);
    });

    it('performs simulated server-side validation against duplicates', async () => {
      const mockExisting = [{ id: 'p1', name: 'Golden Retriever' }];
      const duplicateData = {
        name: 'Golden Retriever',
        category: 'dog',
        tagline: 'Another retriever',
        lifespan: '10 years',
        temperament: 'Friendly',
        careLevel: 'Easy',
        activityLevel: 'High',
        dietType: 'Omnivore',
        description: 'A sufficiently long description for valid test.'
      };

      const result = await simulateServerValidation(duplicateData, mockExisting);
      expect(result.isValid).toBe(false);
      expect(result.errors.name).toContain('already exists');
    });
  });
});
