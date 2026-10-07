import React, { useState, useEffect, useCallback } from 'react';
import { X, BookOpen, Syringe, Utensils, Sparkles, Home, Activity } from 'lucide-react';
import VaccinationSchedule from './VaccinationSchedule';
import NutritionTips from './NutritionTips';
import GroomingTips from './GroomingTips';

/**
 * PetDetailModal Component
 * Accessible dialog with tab panels, body scroll lock, and Escape key listener.
 */
export default function PetDetailModal({ pet, onClose }) {
  const [activeTab, setActiveTab] = useState('overview');

  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    if (pet) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [pet, handleKeyDown]);

  if (!pet) return null;

  return (
    <div className="modal-overlay" onClick={onClose} role="presentation">
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="pet-modal-title"
      >
        {/* Modal Header */}
        <div className="modal-header">
          <div className="modal-title-wrap">
            <img
              src={pet.image}
              alt={pet.name}
              className="modal-pet-img"
              onError={(e) => {
                e.currentTarget.src = 'https://images.unsplash.com/photo-1548767797-d8c844163c4c?auto=format&fit=crop&w=800&q=80';
              }}
            />
            <div>
              <h2 id="pet-modal-title" className="modal-title">{pet.name}</h2>
              <div className="modal-subtitle">{pet.tagline}</div>
            </div>
          </div>
          <button
            type="button"
            className="modal-close-btn"
            onClick={onClose}
            aria-label="Close modal dialog"
          >
            <X size={18} aria-hidden="true" />
          </button>
        </div>

        {/* Modal Navigation Tabs */}
        <div className="modal-tabs" role="tablist" aria-label="Pet details tabs">
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === 'overview'}
            className={`modal-tab-btn ${activeTab === 'overview' ? 'active' : ''}`}
            onClick={() => setActiveTab('overview')}
          >
            <BookOpen size={15} aria-hidden="true" />
            <span>Overview & Care</span>
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === 'vaccination'}
            className={`modal-tab-btn ${activeTab === 'vaccination' ? 'active' : ''}`}
            onClick={() => setActiveTab('vaccination')}
          >
            <Syringe size={15} aria-hidden="true" />
            <span>Vaccinations</span>
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === 'nutrition'}
            className={`modal-tab-btn ${activeTab === 'nutrition' ? 'active' : ''}`}
            onClick={() => setActiveTab('nutrition')}
          >
            <Utensils size={15} aria-hidden="true" />
            <span>Nutrition & Diet</span>
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === 'grooming'}
            className={`modal-tab-btn ${activeTab === 'grooming' ? 'active' : ''}`}
            onClick={() => setActiveTab('grooming')}
          >
            <Sparkles size={15} aria-hidden="true" />
            <span>Grooming</span>
          </button>
        </div>

        {/* Modal Content Body */}
        <div className="modal-body" role="tabpanel">
          {activeTab === 'overview' && (
            <div>
              <div className="info-box-grid">
                <div className="info-box">
                  <div className="info-box-label">Lifespan</div>
                  <div className="info-box-value">{pet.lifespan}</div>
                </div>
                <div className="info-box">
                  <div className="info-box-label">Care Level</div>
                  <div className="info-box-value">{pet.careLevel}</div>
                </div>
                <div className="info-box">
                  <div className="info-box-label">Activity Level</div>
                  <div className="info-box-value">{pet.activityLevel}</div>
                </div>
                <div className="info-box">
                  <div className="info-box-label">Diet Classification</div>
                  <div className="info-box-value">{pet.dietType}</div>
                </div>
              </div>

              <p className="modal-overview-desc">
                {pet.description}
              </p>

              <div className="care-callout">
                <div className="care-callout-title">
                  <Home size={16} aria-hidden="true" />
                  <span>Housing & Environment</span>
                </div>
                <div className="care-callout-text">{pet.careGuide?.housing}</div>
              </div>

              <div className="care-callout callout-exercise">
                <div className="care-callout-title title-exercise">
                  <Activity size={16} aria-hidden="true" />
                  <span>Exercise & Physical Needs</span>
                </div>
                <div className="care-callout-text text-exercise">{pet.careGuide?.exercise}</div>
              </div>

              {pet.careGuide?.mentalStimulation && (
                <div className="care-callout callout-mental">
                  <div className="care-callout-title title-mental">
                    <Sparkles size={16} aria-hidden="true" />
                    <span>Mental Stimulation</span>
                  </div>
                  <div className="care-callout-text text-mental">{pet.careGuide.mentalStimulation}</div>
                </div>
              )}
            </div>
          )}

          {activeTab === 'vaccination' && (
            <VaccinationSchedule pet={pet} />
          )}

          {activeTab === 'nutrition' && (
            <NutritionTips pet={pet} />
          )}

          {activeTab === 'grooming' && (
            <GroomingTips pet={pet} />
          )}
        </div>

        {/* Modal Footer */}
        <div className="modal-footer">
          <button
            type="button"
            className="btn-secondary"
            onClick={onClose}
            aria-label="Close dialog"
          >
            Close Window
          </button>
        </div>
      </div>
    </div>
  );
}
