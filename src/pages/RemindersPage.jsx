import React, { useState, useMemo } from 'react';
import {
  Calendar,
  Syringe,
  Utensils,
  Scissors,
  Activity,
  PawPrint,
  Clock,
  Heart,
  ShieldCheck
} from 'lucide-react';
import { usePets } from '../context/PetContext';
import { calculatePetCarePlan } from '../data/petCarePlans';
import { PET_CATEGORIES } from '../data/petData';

export default function RemindersPage() {
  const { pets } = usePets();

  // 1. Pet Care Plan State (User selection: Category -> Breed -> Age in Days)
  const [selectedCategory, setSelectedCategory] = useState(() => {
    const current = pets.find((p) => p.id === (pets[0]?.id || 'dog-golden-retriever'));
    return current?.category || 'dog';
  });
  const [selectedPetId, setSelectedPetId] = useState(pets[0]?.id || 'dog-golden-retriever');
  const [petAgeDays, setPetAgeDays] = useState(75);
  const [activePlanTab, setActivePlanTab] = useState('vaccines'); // 'vaccines' | 'nutrition' | 'grooming' | 'exercise'

  // Filter available breeds dynamically on the basis of selected category
  const availableBreeds = useMemo(() => {
    if (selectedCategory === 'all') return pets;
    return pets.filter((p) => p.category === selectedCategory);
  }, [pets, selectedCategory]);

  const handleCategoryChange = (catId) => {
    setSelectedCategory(catId);
    const matching = pets.filter((p) => catId === 'all' || p.category === catId);
    if (matching.length > 0) {
      const stillMatches = matching.some((p) => p.id === selectedPetId);
      if (!stillMatches) {
        setSelectedPetId(matching[0].id);
      }
    }
  };

  const handleBreedChange = (petId) => {
    setSelectedPetId(petId);
    const found = pets.find((p) => p.id === petId);
    if (found && selectedCategory !== 'all' && found.category !== selectedCategory) {
      setSelectedCategory(found.category);
    }
  };

  // Calculate Care Plan dynamically based on selected Pet and Age in Days
  const carePlan = useMemo(() => {
    return calculatePetCarePlan(selectedPetId, petAgeDays);
  }, [selectedPetId, petAgeDays]);

  // Quick Age Preset options
  const agePresets = [
    { label: '45 Days (6 Wks)', days: 45 },
    { label: '75 Days (2.5 Mo)', days: 75 },
    { label: '110 Days (3.5 Mo)', days: 110 },
    { label: '180 Days (6 Mo)', days: 180 },
    { label: '365 Days (1 Yr)', days: 365 },
    { label: '730 Days (2 Yrs)', days: 730 },
    { label: '2500 Days (Senior)', days: 2500 }
  ];

  // Calculated metrics
  const dueVaccinesCount = useMemo(() => {
    return carePlan.vaccinations.filter((v) => v.status === 'due-now').length;
  }, [carePlan.vaccinations]);

  const upcomingVaccinesCount = useMemo(() => {
    return carePlan.vaccinations.filter((v) => v.status === 'upcoming').length;
  }, [carePlan.vaccinations]);

  return (
    <div className="reminders-page-container">
      {/* 1. Page Header */}
      <div className="catalog-header-bar">
        <div>
          <h1 className="page-heading">Pet Care Schedule & Age-Based Planner</h1>
          <p className="page-subheading">
            Select any pet category, breed, and age in days to calculate tailored vaccination timelines, grooming intervals, and daily feeding guidelines.
          </p>
        </div>
      </div>

      {/* 2. Age-Plan Summary Metrics Bar */}
      <div className="reminder-stats-grid" role="region" aria-label="Care plan metrics summary">
        <div className="reminder-stat-card">
          <div className="reminder-stat-num">
            {carePlan.petName}
          </div>
          <div className="reminder-stat-label">
            {carePlan.speciesLabel}
          </div>
        </div>

        <div className="reminder-stat-card border-warning">
          <div className="reminder-stat-num text-warning">
            {dueVaccinesCount} Due
          </div>
          <div className="reminder-stat-label">
            {dueVaccinesCount > 0 ? 'Milestones Due Around This Age' : 'All Milestones Up-to-Date'}
          </div>
        </div>

        <div className="reminder-stat-card border-success">
          <div className="reminder-stat-num text-success">
            {carePlan.equivalentAgeText.split('(')[0].trim()}
          </div>
          <div className="reminder-stat-label">
            Est. Birth: {carePlan.birthDateString}
          </div>
        </div>
      </div>

      {/* 3. DYNAMIC AGE-BASED CARE PLAN CALCULATOR */}
      <section className="age-care-planner-card" aria-label="Personalized Age Care Calculator">
        <div className="planner-header-strip">
          <div className="planner-title-group">
            <div className="planner-icon-circle">
              <Calendar size={22} color="#5c6e3b" aria-hidden="true" />
            </div>
            <div>
              <h2 className="planner-main-title">Personalized Care Plan by Age</h2>
              <p className="planner-subtitle">
                Configure pet category, breed, and age in days to display calculated calendar dates and routine intervals.
              </p>
            </div>
          </div>
        </div>

        {/* Input Selector Row: 1. Category -> 2. Breed -> 3. Age in Days */}
        <div className="planner-inputs-grid">
          {/* Filter 1: Pet Category */}
          <div className="planner-field-box">
            <label htmlFor="planner-category-select" className="planner-label">
              1. Pet Category
            </label>
            <select
              id="planner-category-select"
              className="planner-select"
              value={selectedCategory}
              onChange={(e) => handleCategoryChange(e.target.value)}
              aria-label="Select pet category"
            >
              {PET_CATEGORIES.map((cat) => (
                <option key={cat.id} value={cat.id}>
                  {cat.icon} {cat.label}
                </option>
              ))}
            </select>
          </div>

          {/* Filter 2: Pet Breed (Fetched on the basis of Category) */}
          <div className="planner-field-box">
            <label htmlFor="planner-pet-select" className="planner-label">
              2. Pet Breed ({availableBreeds.length})
            </label>
            <select
              id="planner-pet-select"
              className="planner-select"
              value={selectedPetId}
              onChange={(e) => handleBreedChange(e.target.value)}
              aria-label="Select pet breed on the basis of category"
            >
              {availableBreeds.map((p) => (
                <option key={p.id} value={p.id}>
                  {p.name}
                </option>
              ))}
            </select>
          </div>

          {/* Filter 3: Pet Age in Days Number Input */}
          <div className="planner-field-box">
            <label htmlFor="planner-age-input" className="planner-label">
              3. Pet Age in Days
            </label>
            <div className="age-input-stepper-wrap">
              <input
                id="planner-age-input"
                type="number"
                min="1"
                max="8000"
                className="planner-age-input"
                value={petAgeDays}
                onChange={(e) => setPetAgeDays(Math.max(1, parseInt(e.target.value, 10) || 1))}
                aria-label="Enter pet age in days"
              />
              <span className="age-input-suffix">Days</span>
            </div>
          </div>

          {/* Computed Life Stage Pill Box */}
          <div className="planner-field-box stage-result-box">
            <span className="planner-label">Calculated Life Stage</span>
            <div className="stage-result-content">
              <strong>{carePlan.currentStage.stage}</strong>
              <span>Equivalent: {carePlan.equivalentAgeText}</span>
            </div>
          </div>
        </div>

        {/* Quick Age Presets */}
        <div className="planner-presets-row" role="group" aria-label="Quick age presets in days">
          <span className="presets-label">Quick Age Presets:</span>
          {agePresets.map((preset) => (
            <button
              key={preset.days}
              type="button"
              className={`preset-pill-btn ${petAgeDays === preset.days ? 'active' : ''}`}
              onClick={() => setPetAgeDays(preset.days)}
            >
              {preset.label}
            </button>
          ))}
        </div>

        {/* Stage Overview Banner */}
        <div className="stage-overview-banner">
          <div className="stage-banner-icon">
            <Activity size={20} color="#2563eb" aria-hidden="true" />
          </div>
          <div className="stage-banner-text">
            <h4>{carePlan.petName} &bull; {carePlan.speciesLabel}</h4>
            <p>{carePlan.currentStage.description}</p>
          </div>
        </div>

        {/* Care Plan Navigation Tabs */}
        <div className="planner-tabs-bar" role="tablist" aria-label="Care plan categories">
          <button
            type="button"
            role="tab"
            aria-selected={activePlanTab === 'vaccines'}
            className={`planner-tab-btn ${activePlanTab === 'vaccines' ? 'active' : ''}`}
            onClick={() => setActivePlanTab('vaccines')}
          >
            <Syringe size={16} aria-hidden="true" />
            <span>Vaccinations & Medical ({carePlan.vaccinations.length})</span>
          </button>

          <button
            type="button"
            role="tab"
            aria-selected={activePlanTab === 'nutrition'}
            className={`planner-tab-btn ${activePlanTab === 'nutrition' ? 'active' : ''}`}
            onClick={() => setActivePlanTab('nutrition')}
          >
            <Utensils size={16} aria-hidden="true" />
            <span>Daily Nutrition & Feeding</span>
          </button>

          <button
            type="button"
            role="tab"
            aria-selected={activePlanTab === 'grooming'}
            className={`planner-tab-btn ${activePlanTab === 'grooming' ? 'active' : ''}`}
            onClick={() => setActivePlanTab('grooming')}
          >
            <Scissors size={16} aria-hidden="true" />
            <span>Grooming & Hygiene ({carePlan.grooming.length})</span>
          </button>

          <button
            type="button"
            role="tab"
            aria-selected={activePlanTab === 'exercise'}
            className={`planner-tab-btn ${activePlanTab === 'exercise' ? 'active' : ''}`}
            onClick={() => setActivePlanTab('exercise')}
          >
            <Activity size={16} aria-hidden="true" />
            <span>Exercise & Activity</span>
          </button>
        </div>

        {/* Tab 1: Vaccination Schedule by Age in Days */}
        {activePlanTab === 'vaccines' && (
          <div className="planner-tab-panel" role="tabpanel" aria-label="Vaccinations and preventative medical schedule">
            <div className="plan-items-grid">
              {carePlan.vaccinations.map((vac) => (
                <div key={vac.id} className={`plan-card-item ${vac.badgeClass}`}>
                  <div className="plan-card-top">
                    <div>
                      <span className={`plan-status-badge ${vac.badgeClass}`}>
                        {vac.statusLabel}
                      </span>
                      <h4 className="plan-card-title">{vac.name}</h4>
                      <span className="plan-target-days">
                        Milestone: Day {vac.targetDays} &bull; Projected Date: <strong>{vac.projectedDate}</strong>
                      </span>
                    </div>
                  </div>

                  <p className="plan-card-desc">{vac.description}</p>
                </div>
              ))}
            </div>

            {/* Deworming & Parasite Routine Sub-section */}
            <div className="deworming-sub-panel">
              <h4 className="sub-panel-title">
                <ShieldCheck size={16} color="#059669" />
                Parasite & Deworming Protocols for Day {petAgeDays}
              </h4>
              <div className="deworming-chips-grid">
                {carePlan.deworming.map((d) => (
                  <div key={d.id} className="deworm-chip">
                    <div className="deworm-info">
                      <strong>{d.task}</strong>
                      <span>Target Milestone Date: <strong>{d.projectedDate}</strong></span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Nutrition by Age in Days */}
        {activePlanTab === 'nutrition' && (
          <div className="planner-tab-panel" role="tabpanel" aria-label="Nutrition and daily feeding plan">
            <div className="nutrition-cards-grid">
              <div className="nutrition-metric-card">
                <span className="metric-label">Meal Frequency</span>
                <strong className="metric-val">{carePlan.currentStage.mealsPerDay}</strong>
                <span className="metric-desc">Optimal metabolic division for age {petAgeDays} days</span>
              </div>

              <div className="nutrition-metric-card">
                <span className="metric-label">Daily Portion</span>
                <strong className="metric-val">{carePlan.currentStage.portion}</strong>
                <span className="metric-desc">Adjust slightly based on daily activity level</span>
              </div>

              <div className="nutrition-metric-card">
                <span className="metric-label">Target Stage Formula</span>
                <strong className="metric-val">{carePlan.currentStage.stage}</strong>
                <span className="metric-desc">Formulated for life stage at {carePlan.equivalentAgeText}</span>
              </div>
            </div>

            <div className="nutrition-detail-card">
              <h4>Dietary Guidelines & Ingredient Focus</h4>
              <p>{carePlan.currentStage.diet}</p>
            </div>
          </div>
        )}

        {/* Tab 3: Grooming Schedule by Age in Days */}
        {activePlanTab === 'grooming' && (
          <div className="planner-tab-panel" role="tabpanel" aria-label="Grooming and hygiene routine">
            <div className="grooming-stage-summary">
              <strong>Age-Stage Grooming Advice:</strong> {carePlan.currentStage.grooming}
            </div>

            <div className="plan-items-grid">
              {carePlan.grooming.map((g) => (
                <div key={g.id} className="plan-card-item badge-upcoming">
                  <div className="plan-card-top">
                    <div>
                      <span className="plan-status-badge badge-upcoming">
                        Every {g.intervalDays} {g.intervalDays === 1 ? 'Day' : 'Days'}
                      </span>
                      <h4 className="plan-card-title">{g.task}</h4>
                      <span className="plan-target-days">
                        Next Due: <strong>{g.nextDueDate}</strong> (in {g.daysUntilNext} days) &bull; Est. Duration: {g.duration}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 4: Exercise & Mental Activity */}
        {activePlanTab === 'exercise' && (
          <div className="planner-tab-panel" role="tabpanel" aria-label="Exercise, activity, and socialization plan">
            <div className="exercise-plan-card">
              <div className="exercise-card-header">
                <Activity size={24} color="#059669" />
                <div>
                  <h4>Daily Activity Recommendation for Day {petAgeDays}</h4>
                  <span>Tailored for {carePlan.petName} ({carePlan.speciesLabel})</span>
                </div>
              </div>
              <p className="exercise-card-text">{carePlan.currentStage.exercise}</p>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
