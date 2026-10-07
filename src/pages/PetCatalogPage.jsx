import React, { useState, useMemo, useCallback } from 'react';
import { Link } from 'react-router-dom';
import {
  RotateCcw,
  LayoutGrid,
  List,
  ArrowRight,
  PawPrint,
  Heart,
  ArrowUpDown,
  ChevronDown
} from 'lucide-react';
import PetGrid from '../components/PetGrid';
import SearchBar from '../components/SearchBar';
import PetCategoryFilter from '../components/PetCategoryFilter';
import ConfirmModal from '../components/ConfirmModal';
import { usePets } from '../context/PetContext';
import { useToast } from '../context/ToastContext';
import { useDebounce } from '../hooks/useDebounce';
import { filterAndSortPets } from '../utils/filterUtils';

export default function PetCatalogPage() {
  const { pets, resetPets, stats } = usePets();
  const { success } = useToast();

  const [rawSearch, setRawSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedCareLevel, setSelectedCareLevel] = useState('all');
  const [sortBy, setSortBy] = useState('name-asc');
  const [viewMode, setViewMode] = useState('grid'); // 'grid' | 'table'
  const [showResetConfirm, setShowResetConfirm] = useState(false);

  // Debounced search adhering to Rule 11 (300-500ms debounce)
  const debouncedSearch = useDebounce(rawSearch, 350);

  // Memoized filtered and sorted pet list
  const filteredPets = useMemo(() => {
    return filterAndSortPets(pets, {
      searchTerm: debouncedSearch,
      category: selectedCategory,
      careLevel: selectedCareLevel,
      sortBy
    });
  }, [pets, debouncedSearch, selectedCategory, selectedCareLevel, sortBy]);

  const handleClearFilters = useCallback(() => {
    setRawSearch('');
    setSelectedCategory('all');
    setSelectedCareLevel('all');
    setSortBy('name-asc');
  }, []);

  const handleResetData = useCallback(() => {
    resetPets();
    setShowResetConfirm(false);
    success('All sample pets restored to default state.');
  }, [resetPets, success]);

  const isFiltered = rawSearch !== '' || selectedCategory !== 'all' || selectedCareLevel !== 'all' || sortBy !== 'name-asc';

  const careLevelLabels = {
    all: 'All Care Levels',
    easy: 'Easy Care',
    moderate: 'Moderate Care',
    high: 'High Care'
  };

  const sortLabels = {
    'name-asc': 'Breed Name (A → Z)',
    'name-desc': 'Breed Name (Z → A)',
    'care-asc': 'Care Level (Easy → High)',
    'care-desc': 'Care Level (High → Easy)'
  };

  return (
    <div className="pet-catalog-container">
      {/* Directory Header Banner Matching Requested UI */}
      <div className="catalog-header-bar">
        <div className="catalog-header-intro">
          <div className="breed-dir-badge">
            <span className="badge-paw-circle" aria-hidden="true">
              <PawPrint size={13} />
            </span>
            <span>Verified Breed & Care Directory</span>
          </div>
          <h1 className="page-heading">Pet Breed & Care Directory</h1>
          <p className="page-subheading">
            Explore in-depth breed profiles, life-stage nutrition requirements, temperament traits, and everyday care guides for companion pets.
          </p>
        </div>

        {/* Center Illustration Graphic */}
        <div className="breed-header-art-wrapper" aria-hidden="true">
          <img
            src="/images/directory-pets-banner.jpg"
            alt=""
            className="breed-header-art-img"
          />
        </div>

      </div>

      {/* Filter and Control Bar Card */}
      <div className="catalog-controls-card" role="search" aria-label="Breed filter controls">
        {/* Top Controls Row */}
        <div className="controls-search-row">
          <SearchBar
            searchTerm={rawSearch}
            onSearchChange={setRawSearch}
            onClearSearch={() => setRawSearch('')}
            placeholder="Search by breed, temperament, diet or care needs..."
            id="catalog-search"
          />

          {/* Care Level Dropdown Pill */}
          <div className="filter-pill-select" title="Filter by Care Level">
            <Heart size={18} className="pill-icon" aria-hidden="true" />
            <div className="pill-text-stack">
             
              <span className="pill-bottom-val">{careLevelLabels[selectedCareLevel] || 'All Care Levels'}</span>
            </div>
            <ChevronDown size={15} className="pill-chevron" aria-hidden="true" />
            <select
              id="careLevelSelect"
              className="pill-overlay-select"
              value={selectedCareLevel}
              onChange={(e) => setSelectedCareLevel(e.target.value)}
              aria-label="Filter by Care Level"
            >
              <option value="all">All Care Levels</option>
              <option value="easy">Easy Care</option>
              <option value="moderate">Moderate Care</option>
              <option value="high">High Care</option>
            </select>
          </div>

          {/* Sort Dropdown Pill */}
          <div className="filter-pill-select" title="Sort Breeds">
            <ArrowUpDown size={17} className="pill-icon" aria-hidden="true" />
            <div className="pill-text-stack">
              <span className="pill-top-label"></span>
              <span className="pill-bottom-val">{sortLabels[sortBy] || 'Breed Name (A → Z)'}</span>
            </div>
            <ChevronDown size={15} className="pill-chevron" aria-hidden="true" />
            <select
              id="sortBySelect"
              className="pill-overlay-select"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              aria-label="Sort by breed property"
            >
              <option value="name-asc">Breed Name (A &rarr; Z)</option>
              <option value="name-desc">Breed Name (Z &rarr; A)</option>
              <option value="care-asc">Care Level (Easy &rarr; High)</option>
              <option value="care-desc">Care Level (High &rarr; Easy)</option>
            </select>
          </div>

          {/* View Mode Toggle Switcher */}
          <div className="catalog-view-toggle" role="group" aria-label="Layout view switcher">
            <button
              type="button"
              className={`view-toggle-icon-btn ${viewMode === 'grid' ? 'active' : ''}`}
              onClick={() => setViewMode('grid')}
              title="Grid Card View"
              aria-label="Grid card view"
              aria-pressed={viewMode === 'grid'}
            >
              <LayoutGrid size={17} aria-hidden="true" />
            </button>
            <button
              type="button"
              className={`view-toggle-icon-btn ${viewMode === 'table' ? 'active' : ''}`}
              onClick={() => setViewMode('table')}
              title="Table List View"
              aria-label="Table list view"
              aria-pressed={viewMode === 'table'}
            >
              <List size={17} aria-hidden="true" />
            </button>
          </div>
        </div>

        {/* Species Category Filter Chips */}
        <div className="species-filter-container">
          <PetCategoryFilter
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
            categoryCounts={stats.categoryCounts}
            totalCount={pets.length}
          />

          {isFiltered && (
            <button
              type="button"
              className="chip-reset-btn"
              onClick={handleClearFilters}
              aria-label="Reset all search and species filters"
            >
              <RotateCcw size={14} aria-hidden="true" />
              <span>Reset Filters</span>
            </button>
          )}
        </div>
      </div>

      {/* Results Status Header */}
      <div className="results-status-bar" role="status" aria-live="polite">
        <span className="results-count">
          Showing <strong>{filteredPets.length}</strong> of {pets.length} available pet profiles
        </span>
        {debouncedSearch && (
          <span className="search-active-pill">
            Matching "{debouncedSearch}"
          </span>
        )}
      </div>

      {/* Results Content: Reusing PetGrid component for grid mode */}
      {viewMode === 'grid' ? (
        <PetGrid
          pets={filteredPets}
          onResetFilters={handleClearFilters}
          enablePagination={true}
          pageSize={6}
        />
      ) : (
        /* Table View Mode adhering to Rule 13 (Desktop: Data Table, Mobile: Cards/Accordion) */
        <div className="table-view-container">
          {filteredPets.length === 0 ? (
            <PetGrid pets={[]} onResetFilters={handleClearFilters} />
          ) : (
            <div className="responsive-table-module">
              {/* Desktop Table View */}
              <div className="desktop-table-scroll">
                <table className="pets-table" aria-label="Pet Breed Catalog Table">
                  <thead>
                    <tr>
                      <th scope="col">Pet</th>
                      <th scope="col">Category</th>
                      <th scope="col">Care Level</th>
                      <th scope="col">Lifespan</th>
                      <th scope="col">Activity Need</th>
                      <th scope="col">Diet Type</th>
                      <th scope="col" style={{ textAlign: 'right' }}>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredPets.map((pet) => (
                      <tr key={pet.id}>
                        <td>
                          <div className="table-pet-cell">
                            <img
                              src={pet.image}
                              alt={pet.name}
                              className="table-pet-thumb"
                              onError={(e) => {
                                e.currentTarget.src = 'https://images.unsplash.com/photo-1548767797-d8c844163c4c?auto=format&fit=crop&w=800&q=80';
                              }}
                            />
                            <div>
                              <Link to={`/pets/${pet.id}`} className="table-pet-name">
                                {pet.name}
                              </Link>
                              <div className="table-pet-sub">{pet.tagline}</div>
                            </div>
                          </div>
                        </td>
                        <td>
                          <span className="pet-category-badge badge-inline">
                            {pet.category}
                          </span>
                        </td>
                        <td>
                          <span className={`table-badge badge-${(pet.careLevel || '').toLowerCase()}`}>
                            {pet.careLevel}
                          </span>
                        </td>
                        <td>{pet.lifespan}</td>
                        <td>{pet.activityLevel?.split('(')[0] || 'Standard'}</td>
                        <td>{pet.dietType}</td>
                        <td>
                          <div className="table-actions">
                            <Link
                              to={`/pets/${pet.id}`}
                              className="table-action-btn"
                              title={`View ${pet.name} details`}
                              aria-label={`View ${pet.name} details`}
                            >
                              <ArrowRight size={15} aria-hidden="true" />
                            </Link>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Mobile Table Replacement: Card Layout per Rule 13 */}
              <div className="mobile-table-cards" role="list" aria-label="Pet breed cards">
                {filteredPets.map((pet) => (
                  <div key={pet.id} className="mobile-table-card" role="listitem">
                    <div className="mobile-card-header">
                      <img
                        src={pet.image}
                        alt={pet.name}
                        className="mobile-card-thumb"
                        onError={(e) => {
                          e.currentTarget.src = 'https://images.unsplash.com/photo-1548767797-d8c844163c4c?auto=format&fit=crop&w=800&q=80';
                        }}
                      />
                      <div className="mobile-card-title-wrap">
                        <Link to={`/pets/${pet.id}`} className="mobile-card-title">
                          {pet.name}
                        </Link>
                        <span className="pet-category-badge badge-inline">
                          {pet.category}
                        </span>
                      </div>
                    </div>

                    <div className="mobile-card-specs">
                      <div className="mobile-spec-row">
                        <span className="spec-label">Care Level:</span>
                        <span className={`table-badge badge-${(pet.careLevel || '').toLowerCase()}`}>
                          {pet.careLevel}
                        </span>
                      </div>
                      <div className="mobile-spec-row">
                        <span className="spec-label">Lifespan:</span>
                        <span>{pet.lifespan}</span>
                      </div>
                      <div className="mobile-spec-row">
                        <span className="spec-label">Diet:</span>
                        <span>{pet.dietType}</span>
                      </div>
                    </div>

                    <div className="mobile-card-actions">
                      <Link to={`/pets/${pet.id}`} className="btn-secondary btn-sm" style={{ width: '100%', justifyContent: 'center' }}>
                        <span>View Guide</span>
                        <ArrowRight size={14} aria-hidden="true" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Restore Defaults Confirm Modal */}
      <ConfirmModal
        isOpen={showResetConfirm}
        title="Restore Default Pets"
        message="This will reset your pets catalog to the initial core breeds. Any custom pets you added will be overwritten."
        confirmText="Restore Defaults"
        danger={false}
        onConfirm={handleResetData}
        onCancel={() => setShowResetConfirm(false)}
      />
    </div>
  );
}
