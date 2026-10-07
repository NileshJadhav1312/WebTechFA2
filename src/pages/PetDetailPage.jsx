import React, { useState, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  ArrowLeft,
  BookOpen,
  Syringe,
  Utensils,
  Sparkles,
  Home,
  Activity,
  AlertCircle,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';
import VaccinationSchedule from '../components/VaccinationSchedule';
import NutritionTips from '../components/NutritionTips';
import GroomingTips from '../components/GroomingTips';
import { usePets } from '../context/PetContext';

export default function PetDetailPage() {
  const { id } = useParams();
  const { getPetById } = usePets();

  const [activeTab, setActiveTab] = useState('overview');

  // Memoize found pet
  const pet = useMemo(() => getPetById(id), [getPetById, id]);

  // Error Handling: Pet Not Found
  if (!pet) {
    return (
      <div className="empty-state-card" style={{ marginTop: '40px' }}>
        <div className="empty-icon-wrap" style={{ background: '#fee2e2' }}>
          <AlertCircle size={36} color="#dc2626" />
        </div>
        <h3>Pet Profile Not Found</h3>
        <p>
          We couldn't find a pet profile matching ID <code>"{id}"</code>. It may have been deleted or the link is invalid.
        </p>
        <div className="empty-actions">
          <Link to="/pets" className="btn-primary">
            <ArrowLeft size={16} /> Back to Directory
          </Link>
        </div>
      </div>
    );
  }

  const getCareBadgeClass = (level = '') => {
    const l = level.toLowerCase();
    if (l.includes('easy')) return 'care-easy';
    if (l.includes('moderate')) return 'care-moderate';
    return 'care-high';
  };

  return (
    <div className="pet-detail-page">
      {/* Breadcrumb Navigation */}
      <nav className="breadcrumb-nav" aria-label="Breadcrumb">
        <Link to="/" className="breadcrumb-link">Home</Link>
        <span className="breadcrumb-separator">/</span>
        <Link to="/pets" className="breadcrumb-link">Pet Directory</Link>
        <span className="breadcrumb-separator">/</span>
        <span className="breadcrumb-current">{pet.name}</span>
      </nav>

      {/* Hero Profile Header Card */}
      <div className="pet-detail-hero-card">
        <div className="hero-pet-image-wrap">
          <img
            src={pet.image}
            alt={pet.name}
            className="hero-pet-img"
            onError={(e) => {
              e.currentTarget.src = 'https://images.unsplash.com/photo-1548767797-d8c844163c4c?auto=format&fit=crop&w=800&q=80';
            }}
          />
        </div>

        <div className="hero-pet-details">
          <div className="hero-badges-row">
            <span className="pet-category-badge" style={{ position: 'static' }}>
              {pet.category?.toUpperCase()}
            </span>
            <span className={`pet-care-level-badge ${getCareBadgeClass(pet.careLevel)}`} style={{ position: 'static' }}>
              {pet.careLevel} Care
            </span>
          </div>

          <h1 className="hero-pet-title">{pet.name}</h1>
          <p className="hero-pet-tagline">{pet.tagline}</p>

          {/* Quick Specs Grid */}
          <div className="hero-specs-row">
            <div className="hero-spec-item">
              <span className="spec-label">Lifespan</span>
              <span className="spec-value">{pet.lifespan}</span>
            </div>
            <div className="hero-spec-item">
              <span className="spec-label">Temperament</span>
              <span className="spec-value">{pet.temperament}</span>
            </div>
            <div className="hero-spec-item">
              <span className="spec-label">Diet Classification</span>
              <span className="spec-value">{pet.dietType}</span>
            </div>
            <div className="hero-spec-item">
              <span className="spec-label">Activity Level</span>
              <span className="spec-value">{pet.activityLevel}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs Navigation */}
      <div className="detail-tabs-bar">
        <button
          type="button"
          className={`detail-tab-btn ${activeTab === 'overview' ? 'active' : ''}`}
          onClick={() => setActiveTab('overview')}
        >
          <BookOpen size={16} /> Overview & Habitat
        </button>
        <button
          type="button"
          className={`detail-tab-btn ${activeTab === 'vaccination' ? 'active' : ''}`}
          onClick={() => setActiveTab('vaccination')}
        >
          <Syringe size={16} /> Vaccination & Immunization
        </button>
        <button
          type="button"
          className={`detail-tab-btn ${activeTab === 'nutrition' ? 'active' : ''}`}
          onClick={() => setActiveTab('nutrition')}
        >
          <Utensils size={16} /> Nutrition & Diet Plan
        </button>
        <button
          type="button"
          className={`detail-tab-btn ${activeTab === 'grooming' ? 'active' : ''}`}
          onClick={() => setActiveTab('grooming')}
        >
          <Sparkles size={16} /> Grooming & Hygiene
        </button>
      </div>

      {/* Tab Panels */}
      <div className="detail-panel-card">
        {activeTab === 'overview' && (
          <div className="tab-pane-content">
            <h3 className="pane-section-title">Breed Summary & Overview</h3>
            <p className="pet-full-description">{pet.description}</p>

            <div className="care-guide-callouts-grid">
              <div className="care-callout">
                <div className="care-callout-title">
                  <Home size={17} style={{ verticalAlign: '-2px', marginRight: '6px' }} />
                  Housing & Environment Requirements
                </div>
                <div className="care-callout-text">
                  {pet.careGuide?.housing || 'Clean, safe, comfortable shelter suitable for the species.'}
                </div>
              </div>

              <div className="care-callout" style={{ background: '#f8fafc', borderColor: '#3b82f6' }}>
                <div className="care-callout-title" style={{ color: '#1d4ed8' }}>
                  <Activity size={17} style={{ verticalAlign: '-2px', marginRight: '6px' }} />
                  Exercise & Physical Fitness Needs
                </div>
                <div className="care-callout-text" style={{ color: '#1e3a8a' }}>
                  {pet.careGuide?.exercise || 'Regular daily physical activity matching energy level.'}
                </div>
              </div>

              {pet.careGuide?.mentalStimulation && (
                <div className="care-callout" style={{ background: '#fdf4ff', borderColor: '#c084fc' }}>
                  <div className="care-callout-title" style={{ color: '#7e22ce' }}>
                    <Sparkles size={17} style={{ verticalAlign: '-2px', marginRight: '6px' }} />
                    Enrichment & Mental Stimulation
                  </div>
                  <div className="care-callout-text" style={{ color: '#6b21a8' }}>
                    {pet.careGuide.mentalStimulation}
                  </div>
                </div>
              )}
            </div>

            {/* Health Tips List */}
            {pet.commonHealthTips && pet.commonHealthTips.length > 0 && (
              <div className="health-tips-box">
                <h4 className="health-tips-title">
                  <ShieldCheck size={18} color="#059669" />
                  Key Health Recommendations & Preventative Care
                </h4>
                <ul className="health-tips-list">
                  {pet.commonHealthTips.map((tip, idx) => (
                    <li key={idx}>
                      <CheckCircle2 size={16} color="#059669" className="tip-bullet-icon" />
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}

        {activeTab === 'vaccination' && (
          <div className="tab-pane-content">
            <VaccinationSchedule pet={pet} />
          </div>
        )}

        {activeTab === 'nutrition' && (
          <div className="tab-pane-content">
            <NutritionTips pet={pet} />
          </div>
        )}

        {activeTab === 'grooming' && (
          <div className="tab-pane-content">
            <GroomingTips pet={pet} />
          </div>
        )}
      </div>
    </div>
  );
}
