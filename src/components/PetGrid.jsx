import React from 'react';
import { AlertCircle, RotateCcw, ChevronDown, ChevronUp, ChevronLeft, ChevronRight } from 'lucide-react';
import PetCard from './PetCard';
import LoadingSpinner from './LoadingSpinner';
import { usePagination } from '../hooks/usePagination';

/**
 * PetGrid Component
 * Fully satisfies:
 * - Rule 6: Loading State, Error State, Empty State, Success State, Responsive State
 * - View More Rule (1-6 display all, 7-8 show View More, 9-20 expand on demand, 20+ pagination)
 * - Accessibility (ARIA roles, keyboard friendly)
 */
export default function PetGrid({
  pets = [],
  isLoading = false,
  errorMessage = null,
  onResetFilters,
  onRetry,
  enablePagination = true,
  pageSize = 6
}) {
  // 1. Loading State
  if (isLoading) {
    return (
      <div className="pet-grid-loading-wrap" role="status" aria-live="polite">
        <LoadingSpinner message="Loading available pet guides..." />
      </div>
    );
  }

  // 2. Error State (Rule 10: Clear title, Clear description, Retry action)
  if (errorMessage) {
    return (
      <div className="pet-grid-error-card" role="alert">
        <div className="error-icon-circle">
          <AlertCircle size={36} color="#dc2626" />
        </div>
        <h3 className="error-title">Unable to Load Pet Directory</h3>
        <p className="error-desc">{errorMessage}</p>
        {onRetry && (
          <button
            type="button"
            className="btn-primary"
            onClick={onRetry}
            aria-label="Retry loading pet directory"
          >
            <RotateCcw size={16} /> Try Again
          </button>
        )}
      </div>
    );
  }

  // 3. Empty State (Rule 6: Empty state with action)
  if (!pets || pets.length === 0) {
    return (
      <div className="empty-state-card" role="status">
        <div className="empty-icon-wrap">
          <AlertCircle size={36} color="#64748b" />
        </div>
        <h3>No Pet Breeds Found</h3>
        <p>
          No pet matches your current search or filter criteria. Try adjusting keywords or clearing active filters.
        </p>
        {onResetFilters && (
          <div className="empty-actions">
            <button
              type="button"
              className="btn-primary"
              onClick={onResetFilters}
              aria-label="Reset all search filters"
            >
              <RotateCcw size={16} /> Reset Filters
            </button>
          </div>
        )}
      </div>
    );
  }

  // 4. Success State with View More & Pagination logic
  return (
    <PetGridContent
      pets={pets}
      enablePagination={enablePagination}
      pageSize={pageSize}
    />
  );
}

function PetGridContent({ pets, enablePagination, pageSize }) {
  const pagination = usePagination(pets, { pageSize });
  const displayItems = enablePagination ? pagination.items : pets;

  return (
    <div className="pet-grid-container">
      {/* Cards Grid: Responsive rules applied via CSS */}
      <div className="pets-grid" role="region" aria-label="Pet Breed Cards">
        {displayItems.map((pet) => (
          <PetCard
            key={pet.id}
            pet={pet}
          />
        ))}
      </div>

      {/* View More Rule: 7-8 and 9-20 Items Expand on demand */}
      {enablePagination && pagination.isViewMoreMode && (
        <div className="view-more-container">
          {pagination.hasMoreToView ? (
            <button
              type="button"
              className="btn-secondary btn-view-more"
              onClick={pagination.handleViewMore}
              aria-label={`View more pet breeds, showing ${pagination.items.length} of ${pets.length}`}
            >
              <span>View More ({pets.length - pagination.items.length} remaining)</span>
              <ChevronDown size={16} />
            </button>
          ) : pagination.isExpanded ? (
            <button
              type="button"
              className="btn-ghost btn-view-more"
              onClick={pagination.handleCollapse}
              aria-label="Show fewer pet breeds"
            >
              <span>Show Less</span>
              <ChevronUp size={16} />
            </button>
          ) : null}
        </div>
      )}

      {/* Large Dataset Rule: > 20 Items Pagination */}
      {enablePagination && pagination.isPaginationMode && (
        <nav className="pagination-bar" aria-label="Catalog pages">
          <button
            type="button"
            className="pagination-btn"
            onClick={pagination.prevPage}
            disabled={!pagination.canPrev}
            aria-label="Previous page"
          >
            <ChevronLeft size={16} />
            <span>Previous</span>
          </button>

          <span className="pagination-page-indicator">
            Page <strong>{pagination.currentPage}</strong> of {pagination.totalPages}
          </span>

          <button
            type="button"
            className="pagination-btn"
            onClick={pagination.nextPage}
            disabled={!pagination.canNext}
            aria-label="Next page"
          >
            <span>Next</span>
            <ChevronRight size={16} />
          </button>
        </nav>
      )}
    </div>
  );
}
