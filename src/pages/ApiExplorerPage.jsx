import React, { useState, useEffect, useCallback, useMemo } from 'react';
import {
  Search,
  ExternalLink,
  ArrowRight,
  Maximize2,
  X,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  Layers,
  Activity,
  Clock,
  ShieldCheck,
  Utensils
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { PET_DATA, PET_CATEGORIES } from '../data/petData';

export default function ApiExplorerPage() {
  const navigate = useNavigate();

  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedPetId, setSelectedPetId] = useState('dog-golden-retriever');
  const [searchQuery, setSearchQuery] = useState('');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  // 1. Filter available pets based on category and search query
  const filteredPets = useMemo(() => {
    return PET_DATA.filter((pet) => {
      const matchesCategory =
        selectedCategory === 'all' || pet.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        pet.name.toLowerCase().includes(q) ||
        pet.category.toLowerCase().includes(q) ||
        pet.temperament.toLowerCase().includes(q) ||
        pet.tagline.toLowerCase().includes(q);
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  // 2. Ensure selected pet is valid within filtered list or fallback
  const activePet = useMemo(() => {
    const found = PET_DATA.find((p) => p.id === selectedPetId);
    if (found) return found;
    return filteredPets.length > 0 ? filteredPets[0] : PET_DATA[0];
  }, [selectedPetId, filteredPets]);

  // 3. Handle Animal Category Switch
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    // Auto-select the first pet belonging to this category
    const petInCategory = PET_DATA.find(
      (p) => category === 'all' || p.category === category
    );
    if (petInCategory) {
      setSelectedPetId(petInCategory.id);
    }
  };

  // 4. Handle Breed Select
  const handleBreedChange = (petId) => {
    setSelectedPetId(petId);
    const pet = PET_DATA.find((p) => p.id === petId);
    if (pet && selectedCategory !== 'all' && pet.category !== selectedCategory) {
      setSelectedCategory('all');
    }
  };

  // 5. Lightbox Navigation
  const openLightbox = (index) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const nextLightboxPhoto = useCallback(() => {
    if (!activePet?.gallery) return;
    setLightboxIndex((prev) =>
      prev === null ? 0 : (prev + 1) % activePet.gallery.length
    );
  }, [activePet]);

  const prevLightboxPhoto = useCallback(() => {
    if (!activePet?.gallery) return;
    setLightboxIndex((prev) =>
      prev === null ? 0 : (prev - 1 + activePet.gallery.length) % activePet.gallery.length
    );
  }, [activePet]);

  // Keyboard navigation for lightbox
  useEffect(() => {
    if (lightboxIndex === null) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextLightboxPhoto();
      if (e.key === 'ArrowLeft') prevLightboxPhoto();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, nextLightboxPhoto, prevLightboxPhoto]);

  // Related pets from same animal category
  const relatedPets = useMemo(() => {
    if (!activePet) return [];
    return PET_DATA.filter(
      (p) => p.category === activePet.category && p.id !== activePet.id
    );
  }, [activePet]);

  // Gallery images of the active pet
  const galleryItems = activePet?.gallery || [
    { url: activePet?.image, title: `${activePet?.name} Portrait`, tag: 'Primary Portrait' }
  ];

  return (
    <div className="api-explorer-page">
      {/* Page Header: Clean large heading only */}
      <div className="catalog-header-bar">
        <div>
          <h1 className="page-heading">Discover Animals & Breed Photo Gallery</h1>
        </div>
      </div>

      {/* Control Card: Animal Type Tabs & Breed Selectors */}
      <div className="catalog-controls-card" role="search" aria-label="Animal and breed gallery filters">
        {/* 1. Animal Category Tabs */}
        <div className="gallery-category-tabs" role="tablist" aria-label="Select animal species">
          {PET_CATEGORIES.map((cat) => {
            const count =
              cat.id === 'all'
                ? PET_DATA.length
                : PET_DATA.filter((p) => p.category === cat.id).length;
            const isActive = selectedCategory === cat.id;

            return (
              <button
                key={cat.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                className={`gallery-cat-btn ${isActive ? 'active' : ''}`}
                onClick={() => handleCategoryChange(cat.id)}
              >
                <span className="cat-btn-icon">{cat.icon}</span>
                <span className="cat-btn-label">{cat.label}</span>
                <span className="cat-btn-count">{count}</span>
              </button>
            );
          })}
        </div>

        {/* 2. Search & Select Controls Row */}
        <div className="controls-search-row">
          {/* Quick Search Field */}
          <div className="filter-select-group filter-search-group">
            <label htmlFor="gallery-search-input" className="filter-label">
              Search Gallery
            </label>
            <div className="search-bar-wrap">
              <Search size={18} className="search-icon" aria-hidden="true" />
              <input
                id="gallery-search-input"
                type="text"
                className="search-input-field"
                placeholder="Search breed, name, trait..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                aria-label="Search animal name or breed"
              />
              {searchQuery && (
                <button
                  type="button"
                  className="search-clear-btn"
                  onClick={() => setSearchQuery('')}
                  aria-label="Clear search query"
                >
                  <X size={14} />
                </button>
              )}
            </div>
          </div>

          {/* Animal Name Dropdown */}
          <div className="filter-select-group">
            <label htmlFor="animal-select" className="filter-label">
              Animal Name
            </label>
            <div className="select-wrapper">
              <select
                id="animal-select"
                className="custom-select"
                value={selectedCategory}
                onChange={(e) => handleCategoryChange(e.target.value)}
                aria-label="Select animal name"
              >
                {PET_CATEGORIES.map((cat) => (
                  <option key={cat.id} value={cat.id}>
                    {cat.icon} {cat.label}
                  </option>
                ))}
              </select>
              <ChevronDown size={17} className="select-chevron" aria-hidden="true" />
            </div>
          </div>

          {/* Breed Dropdown */}
          <div className="filter-select-group filter-select-stretch">
            <label htmlFor="breed-select" className="filter-label">
              Select Breed ({filteredPets.length} available)
            </label>
            <div className="select-wrapper">
              <select
                id="breed-select"
                className="custom-select"
                value={activePet.id}
                onChange={(e) => handleBreedChange(e.target.value)}
                aria-label="Select breed to view gallery photos"
              >
                {filteredPets.map((pet) => (
                  <option key={pet.id} value={pet.id}>
                    {pet.name} ({pet.category.toUpperCase()})
                  </option>
                ))}
              </select>
              <ChevronDown size={17} className="select-chevron" aria-hidden="true" />
            </div>
          </div>
        </div>
      </div>

      {/* Active Pet Header & Profile Card */}
      <div className="gallery-active-banner">
        <div className="active-pet-info">
          <div className="active-pet-badge-row">
            <span className="platform-pill-badge">
              <Layers size={13} color="#2563eb" />
              <span>{activePet.category.toUpperCase()} BREED</span>
            </span>
            <span className="badge-photos-count">
              {galleryItems.length} Verified Photos in Project
            </span>
          </div>

          <h2 className="active-pet-title">{activePet.name}</h2>
          <p className="active-pet-tagline">{activePet.tagline}</p>

          {/* Trait Pills */}
          <div className="active-traits-pills">
            <span className="trait-pill">
              <Clock size={13} className="trait-icon" />
              <strong>Lifespan:</strong> {activePet.lifespan}
            </span>
            <span className="trait-pill">
              <ShieldCheck size={13} className="trait-icon" />
              <strong>Care Level:</strong> {activePet.careLevel}
            </span>
            <span className="trait-pill">
              <Activity size={13} className="trait-icon" />
              <strong>Activity:</strong> {activePet.activityLevel}
            </span>
            <span className="trait-pill">
              <Utensils size={13} className="trait-icon" />
              <strong>Diet:</strong> {activePet.dietType}
            </span>
          </div>
        </div>

        <div className="active-pet-action-box">
          <button
            type="button"
            className="btn-primary"
            onClick={() => navigate(`/pets/${activePet.id}`)}
          >
            <span>Complete Care Guide</span>
            <ArrowRight size={15} />
          </button>
        </div>
      </div>

      {/* Photo Gallery Grid */}
      <section className="gallery-section" aria-label={`Photo gallery for ${activePet.name}`}>
        <div className="gallery-section-header">
          <h3 className="gallery-heading">
            📸 Gallery Photos for {activePet.name}
          </h3>
          <span className="gallery-subheading">
            Click any image to enlarge and preview full-screen
          </span>
        </div>

        <div className="api-images-grid">
          {galleryItems.map((item, idx) => (
            <div
              key={idx}
              className="api-image-card gallery-photo-card"
              onClick={() => openLightbox(idx)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && openLightbox(idx)}
              aria-label={`Enlarge photo: ${item.title}`}
            >
              <img
                src={item.url}
                alt={`${activePet.name} - ${item.title}`}
                className="api-live-img"
                loading="lazy"
              />

              {/* Tag Chip */}
              {item.tag && (
                <div className="gallery-photo-tag">
                  <span>{item.tag}</span>
                </div>
              )}

              {/* Overlay with Title & Enlarge Action */}
              <div className="api-card-overlay">
                <span className="api-overlay-title">{item.title}</span>
                <span className="api-overlay-btn" title="View Fullscreen">
                  <Maximize2 size={13} aria-hidden="true" />
                  <span>Enlarge</span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Related Breeds in same Animal Species */}
      {relatedPets.length > 0 && (
        <section className="related-breeds-section" aria-label={`Other ${activePet.category} breeds`}>
          <div className="gallery-section-header">
            <h3 className="gallery-heading">
              🐾 Other {activePet.category.charAt(0).toUpperCase() + activePet.category.slice(1)} Breeds Available in Project
            </h3>
            <span className="gallery-subheading">
              Quickly switch gallery to another breed in this category
            </span>
          </div>

          <div className="related-breeds-grid">
            {relatedPets.map((p) => (
              <div
                key={p.id}
                className="related-breed-card"
                onClick={() => handleBreedChange(p.id)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && handleBreedChange(p.id)}
              >
                <img
                  src={p.image}
                  alt={p.name}
                  className="related-breed-thumb"
                  loading="lazy"
                />
                <div className="related-breed-body">
                  <h4 className="related-breed-name">{p.name}</h4>
                  <p className="related-breed-tagline">{p.tagline}</p>
                  <span className="related-view-link">View Gallery &rarr;</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Lightbox / Fullscreen Modal */}
      {lightboxIndex !== null && activePet.gallery && (
        <div
          className="gallery-lightbox-backdrop"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label="Enlarged photo preview"
        >
          <div
            className="gallery-lightbox-content"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Bar: Title & Close Button */}
            <div className="lightbox-top-bar">
              <div className="lightbox-title-wrap">
                <h4 className="lightbox-title">
                  {galleryItems[lightboxIndex]?.title}
                </h4>
                <span className="lightbox-counter">
                  Photo {lightboxIndex + 1} of {galleryItems.length}
                </span>
              </div>
              <button
                type="button"
                className="lightbox-close-btn"
                onClick={closeLightbox}
                aria-label="Close photo preview"
              >
                <X size={20} />
              </button>
            </div>

            {/* Main Image Container */}
            <div className="lightbox-img-wrapper">
              <img
                src={galleryItems[lightboxIndex]?.url}
                alt={galleryItems[lightboxIndex]?.title}
                className="lightbox-img"
              />

              {/* Prev / Next Buttons */}
              {galleryItems.length > 1 && (
                <>
                  <button
                    type="button"
                    className="lightbox-nav-btn btn-prev"
                    onClick={prevLightboxPhoto}
                    aria-label="Previous photograph"
                  >
                    <ChevronLeft size={28} />
                  </button>
                  <button
                    type="button"
                    className="lightbox-nav-btn btn-next"
                    onClick={nextLightboxPhoto}
                    aria-label="Next photograph"
                  >
                    <ChevronRight size={28} />
                  </button>
                </>
              )}
            </div>

            {/* Bottom Caption Bar */}
            <div className="lightbox-bottom-bar">
              <div className="lightbox-meta">
                <span className="lightbox-breed-tag">
                  {activePet.name} &bull; {galleryItems[lightboxIndex]?.tag || 'Project Photo'}
                </span>
              </div>
              <a
                href={galleryItems[lightboxIndex]?.url}
                target="_blank"
                rel="noopener noreferrer"
                className="lightbox-external-link"
              >
                <ExternalLink size={14} />
                <span>Open Original File</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
