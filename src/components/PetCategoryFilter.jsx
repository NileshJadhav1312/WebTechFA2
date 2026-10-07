import React from 'react';
import { PET_CATEGORIES } from '../data/petData';

/**
 * Reusable PetCategoryFilter component.
 * Displays category pills with active states, counts, and accessible ARIA attributes.
 */
export default function PetCategoryFilter({
  selectedCategory,
  onSelectCategory,
  categoryCounts = {},
  totalCount = 0
}) {
  return (
    <div className="species-chips-row" role="group" aria-label="Filter pets by species category">
      {PET_CATEGORIES.map((cat) => {
        const isActive = selectedCategory === cat.id;
        const count = cat.id === 'all'
          ? (totalCount || undefined)
          : (categoryCounts[cat.id] ?? undefined);

        return (
          <button
            key={cat.id}
            type="button"
            className={`species-chip ${isActive ? 'active' : ''}`}
            onClick={() => onSelectCategory(cat.id)}
            aria-pressed={isActive}
            aria-label={`Filter by ${cat.label}${count !== undefined ? ` (${count} available)` : ''}`}
          >
            <span className="chip-icon" aria-hidden="true">{cat.icon}</span>
            <span className="chip-label">{cat.label}</span>
            {count !== undefined && <span className="chip-count">({count})</span>}
          </button>
        );
      })}
    </div>
  );
}
