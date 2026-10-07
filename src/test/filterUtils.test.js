import { describe, it, expect } from 'vitest';
import { filterAndSortPets } from '../utils/filterUtils';

const mockPets = [
  {
    id: 'dog-golden',
    name: 'Golden Retriever',
    category: 'dog',
    careLevel: 'Moderate',
    tagline: 'Friendly and loyal companion',
    temperament: 'Friendly, Playful'
  },
  {
    id: 'cat-persian',
    name: 'Persian Cat',
    category: 'cat',
    careLevel: 'High',
    tagline: 'Fluffy feline companion',
    temperament: 'Quiet, Calm'
  },
  {
    id: 'bird-budgie',
    name: 'Budgerigar',
    category: 'bird',
    careLevel: 'Easy',
    tagline: 'Playful parakeet',
    temperament: 'Social, Active'
  }
];

describe('Filter and Sort Utilities', () => {
  it('should return all pets when no filters applied', () => {
    const result = filterAndSortPets(mockPets);
    expect(result.length).toBe(3);
  });

  it('should filter pets strictly by category', () => {
    const dogs = filterAndSortPets(mockPets, { category: 'dog' });
    expect(dogs.length).toBe(1);
    expect(dogs[0].name).toBe('Golden Retriever');

    const cats = filterAndSortPets(mockPets, { category: 'cat' });
    expect(cats.length).toBe(1);
    expect(cats[0].name).toBe('Persian Cat');
  });

  it('should filter pets by care level', () => {
    const easy = filterAndSortPets(mockPets, { careLevel: 'easy' });
    expect(easy.length).toBe(1);
    expect(easy[0].name).toBe('Budgerigar');
  });

  it('should filter pets by multi-field search term', () => {
    const result = filterAndSortPets(mockPets, { searchTerm: 'fluffy' });
    expect(result.length).toBe(1);
    expect(result[0].name).toBe('Persian Cat');

    const temperamentSearch = filterAndSortPets(mockPets, { searchTerm: 'playful' });
    expect(temperamentSearch.length).toBe(2);
  });

  it('should sort alphabetically ascending and descending', () => {
    const asc = filterAndSortPets(mockPets, { sortBy: 'name-asc' });
    expect(asc[0].name).toBe('Budgerigar');
    expect(asc[2].name).toBe('Persian Cat');

    const desc = filterAndSortPets(mockPets, { sortBy: 'name-desc' });
    expect(desc[0].name).toBe('Persian Cat');
    expect(desc[2].name).toBe('Budgerigar');
  });

  it('should sort by care level', () => {
    const careAsc = filterAndSortPets(mockPets, { sortBy: 'care-asc' });
    expect(careAsc[0].careLevel).toBe('Easy');
    expect(careAsc[2].careLevel).toBe('High');
  });
});
