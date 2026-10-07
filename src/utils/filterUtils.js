// Filtering and sorting utilities for Pets

/**
 * Filter and sort pets based on search query, category, care level, and sort options
 * @param {Array} pets - List of pet objects
 * @param {Object} options - Filter and sort options
 * @returns {Array} - Filtered and sorted pet array
 */
export function filterAndSortPets(pets = [], options = {}) {
  const {
    searchTerm = '',
    category = 'all',
    careLevel = 'all',
    sortBy = 'name-asc'
  } = options;

  const normalizedSearch = searchTerm.toLowerCase().trim();

  // 1. Filter
  const filtered = pets.filter((pet) => {
    // Category match
    const matchesCategory =
      category === 'all' || pet.category?.toLowerCase() === category.toLowerCase();

    // Care level match
    const matchesCare =
      careLevel === 'all' || pet.careLevel?.toLowerCase() === careLevel.toLowerCase();

    // Search query match across multiple attributes
    const matchesSearch =
      !normalizedSearch ||
      pet.name?.toLowerCase().includes(normalizedSearch) ||
      pet.tagline?.toLowerCase().includes(normalizedSearch) ||
      pet.temperament?.toLowerCase().includes(normalizedSearch) ||
      pet.dietType?.toLowerCase().includes(normalizedSearch) ||
      pet.category?.toLowerCase().includes(normalizedSearch);

    return matchesCategory && matchesCare && matchesSearch;
  });

  // 2. Sort
  return filtered.sort((a, b) => {
    switch (sortBy) {
      case 'name-asc':
        return (a.name || '').localeCompare(b.name || '');
      case 'name-desc':
        return (b.name || '').localeCompare(a.name || '');
      case 'care-asc': {
        const careOrder = { easy: 1, moderate: 2, high: 3 };
        const careA = careOrder[a.careLevel?.toLowerCase()] || 99;
        const careB = careOrder[b.careLevel?.toLowerCase()] || 99;
        return careA - careB;
      }
      case 'care-desc': {
        const careOrder = { easy: 1, moderate: 2, high: 3 };
        const careA = careOrder[a.careLevel?.toLowerCase()] || 99;
        const careB = careOrder[b.careLevel?.toLowerCase()] || 99;
        return careB - careA;
      }
      default:
        return 0;
    }
  });
}
