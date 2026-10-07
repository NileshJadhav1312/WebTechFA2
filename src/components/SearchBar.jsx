import React from 'react';
import { Search, X } from 'lucide-react';

/**
 * Reusable SearchBar component adhering to accessibility, min 44px input height, and clean design.
 */
export default function SearchBar({
  searchTerm,
  onSearchChange,
  onClearSearch,
  placeholder = 'Search by breed, temperament, diet, or care needs...',
  id = 'pet-search-input'
}) {
  return (
    <div className="search-bar-wrap">
      <label htmlFor={id} className="sr-only">
        Search Pet Profiles
      </label>
      <Search size={18} className="search-icon" aria-hidden="true" />
      <input
        id={id}
        type="text"
        className="search-input-field"
        placeholder={placeholder}
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        aria-label="Search pet profiles"
      />
      {searchTerm && (
        <button
          type="button"
          className="clear-search-btn"
          onClick={onClearSearch}
          title="Clear search input"
          aria-label="Clear search input"
        >
          <X size={15} aria-hidden="true" />
          <span>Clear</span>
        </button>
      )}
    </div>
  );
}
