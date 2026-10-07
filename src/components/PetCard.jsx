import React, { memo } from 'react';
import { ArrowRight, Clock, HeartHandshake, Zap } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

/**
 * Optimized PetCard component using React.memo for high rendering performance.
 * Adheres to:
 * - Equal height flexbox layout
 * - Minimum touch target 44x44 for action buttons
 * - Minimum readable typography >= 14px
 * - Accessible keyboard navigation and ARIA attributes
 */
const PetCard = memo(function PetCard({ pet }) {
  const navigate = useNavigate();

  const getCareBadgeClass = (level = '') => {
    const l = level.toLowerCase();
    if (l.includes('easy')) return 'care-easy';
    if (l.includes('moderate')) return 'care-moderate';
    return 'care-high';
  };

  const handleCardClick = () => {
    navigate(`/pets/${pet.id}`);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      navigate(`/pets/${pet.id}`);
    }
  };

  return (
    <article
      className="pet-card"
      onClick={handleCardClick}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="article"
      aria-label={`${pet.name}, ${pet.category} breed`}
    >
      <div className="pet-card-image-wrapper">
        <img
          src={pet.image}
          alt={`Photograph of ${pet.name}`}
          className="pet-card-image"
          loading="lazy"
          onError={(e) => {
            e.currentTarget.src = 'https://images.unsplash.com/photo-1548767797-d8c844163c4c?auto=format&fit=crop&w=800&q=80';
          }}
        />
        <span className="pet-category-badge">{pet.category}</span>
        <span className={`pet-care-level-badge ${getCareBadgeClass(pet.careLevel)}`}>
          {pet.careLevel}
        </span>
      </div>

      <div className="pet-card-body">
        <h3 className="pet-card-name">{pet.name}</h3>
        <p className="pet-card-tagline">{pet.tagline}</p>

        <div className="pet-card-meta">
          <div className="meta-row">
            <span>
              <Clock size={14} className="meta-icon" aria-hidden="true" /> Lifespan:
            </span>
            <strong>{pet.lifespan}</strong>
          </div>
          <div className="meta-row">
            <span>
              <HeartHandshake size={14} className="meta-icon" aria-hidden="true" /> Temperament:
            </span>
            <strong>{pet.temperament ? pet.temperament.split(',').slice(0, 2).join(',') : 'Friendly'}</strong>
          </div>
          <div className="meta-row">
            <span>
              <Zap size={14} className="meta-icon" aria-hidden="true" /> Activity:
            </span>
            <strong>{pet.activityLevel ? pet.activityLevel.split('(')[0] : 'Normal'}</strong>
          </div>
        </div>

        <div className="pet-card-footer">
          <Link
            to={`/pets/${pet.id}`}
            className="view-details-btn"
            onClick={(e) => e.stopPropagation()}
            aria-label={`View complete care guide for ${pet.name}`}
          >
            <span>View Guide</span>
            <ArrowRight size={15} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </article>
  );
});

export default PetCard;
