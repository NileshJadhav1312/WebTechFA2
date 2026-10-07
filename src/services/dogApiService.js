/**
 * Dog API Service Layer
 * Encapsulates external API interactions, data transformations, and fallback caching.
 * Follows Rule 8 (Services layer) and Rule 6 (Loading, Success, Error, Empty, Offline, Unauthorized).
 */

import { apiRequest, ApiError } from './apiClient';

const FALLBACK_BREEDS = [
  'retriever/golden',
  'husky',
  'labrador',
  'beagle',
  'poodle',
  'boxer',
  'rottweiler',
  'germanshepherd',
  'dalmatian',
  'pug'
];

const CURATED_FACTS = [
  'Dogs have an exceptional sense of time and predict routine events like walks and feeding times.',
  'A dog’s sense of smell is between 10,000 to 100,000 times more acute than that of humans.',
  'Cats spend roughly 70% of their lives resting and 15% keeping themselves meticulously groomed.',
  'A cat has 32 muscles in each outer ear, allowing 180-degree independent rotation to pinpoint sound.',
  'Each dog’s nose pattern is entirely unique, similar to human fingerprints.',
  'Golden Retrievers have water-repellent double coats that keep them insulated during outdoor play.',
  'Rabbits can swivel their ears 270 degrees to detect sounds from over 2 miles away.'
];

export const dogApiService = {
  /**
   * Fetches the full list of recognized dog breeds.
   * @returns {Promise<string[]>}
   */
  async getBreedsList() {
    try {
      const data = await apiRequest('https://dog.ceo/api/breeds/list/all');
      if (data && data.status === 'success' && data.message) {
        const flatList = [];
        Object.entries(data.message).forEach(([breed, subBreeds]) => {
          if (Array.isArray(subBreeds) && subBreeds.length > 0) {
            subBreeds.forEach((sub) => flatList.push(`${breed}/${sub}`));
          } else {
            flatList.push(breed);
          }
        });
        if (flatList.length > 0) return flatList;
      }
      return FALLBACK_BREEDS;
    } catch (err) {
      // In offline mode or service disruption, provide curated fallback so UX remains functional
      console.warn('Using curated fallback breeds due to service status:', err.message);
      return FALLBACK_BREEDS;
    }
  },

  /**
   * Fetches photos for a specific breed.
   * @param {string} breed - e.g. "retriever/golden" or "husky"
   * @param {number} [count=4]
   * @returns {Promise<{ images: string[], isEmpty: boolean }>}
   */
  async getBreedImages(breed, count = 4) {
    if (!breed) {
      throw new ApiError({
        title: 'Missing Breed',
        message: 'Please choose a breed to view gallery photos.',
        status: 400
      });
    }

    const sanitizedBreed = encodeURIComponent(breed.trim().toLowerCase());
    const data = await apiRequest(`https://dog.ceo/api/breed/${sanitizedBreed}/images/random/${count}`);

    if (data && data.status === 'success' && data.message) {
      const images = Array.isArray(data.message) ? data.message : [data.message];
      return {
        images,
        isEmpty: images.length === 0
      };
    }

    return {
      images: [],
      isEmpty: true
    };
  },

  /**
   * Generates a random animal wellness / behavioral fact.
   * @returns {string}
   */
  getRandomFact() {
    const randomIndex = Math.floor(Math.random() * CURATED_FACTS.length);
    return CURATED_FACTS[randomIndex];
  }
};
