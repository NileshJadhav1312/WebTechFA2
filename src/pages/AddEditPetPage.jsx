import React, { useState, useEffect, useMemo } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import {
  Save,
  RotateCcw,
  ArrowLeft,
  CheckCircle2,
  Eye,
  Sparkles,
  Image as ImageIcon,
  Phone,
  Mail,
  ShieldCheck
} from 'lucide-react';
import { usePets } from '../context/PetContext';
import { useToast } from '../context/ToastContext';
import { validatePetForm, simulateServerValidation } from '../utils/validation';

const INITIAL_FORM = {
  name: '',
  category: 'dog',
  tagline: '',
  lifespan: '',
  temperament: '',
  careLevel: 'Moderate',
  activityLevel: 'Moderate (30-45 mins/day)',
  dietType: 'High-protein balanced diet',
  image: '',
  description: '',
  careGuideHousing: 'Indoor home with moderate temperature control and comfortable bed.',
  careGuideExercise: 'Daily walks and engaging interactive playtime.',
  contactEmail: '',
  contactPhone: ''
};

export default function AddEditPetPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { getPetById, addPet, updatePet, pets } = usePets();
  const { success, error: toastError } = useToast();

  const isEditMode = Boolean(id);

  const [formData, setFormData] = useState(INITIAL_FORM);
  const [touched, setTouched] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [serverErrors, setServerErrors] = useState({});

  // If in edit mode, populate form with existing pet data
  useEffect(() => {
    if (isEditMode) {
      const existing = getPetById(id);
      if (existing) {
        setFormData({
          name: existing.name || '',
          category: existing.category || 'dog',
          tagline: existing.tagline || '',
          lifespan: existing.lifespan || '',
          temperament: existing.temperament || '',
          careLevel: existing.careLevel || 'Moderate',
          activityLevel: existing.activityLevel || '',
          dietType: existing.dietType || '',
          image: existing.image || '',
          description: existing.description || '',
          careGuideHousing: existing.careGuide?.housing || '',
          careGuideExercise: existing.careGuide?.exercise || '',
          contactEmail: existing.contactEmail || '',
          contactPhone: existing.contactPhone || ''
        });
      } else {
        toastError(`Could not find pet with ID: ${id}`);
        navigate('/pets');
      }
    }
  }, [id, isEditMode, getPetById, navigate, toastError]);

  // Real-time client-side validation computation
  const clientValidation = useMemo(() => {
    return validatePetForm(formData);
  }, [formData]);

  const activeErrors = useMemo(() => {
    return { ...clientValidation.errors, ...serverErrors };
  }, [clientValidation.errors, serverErrors]);

  const handleBlur = (field) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear field-specific server error when user modifies it
    if (serverErrors[name]) {
      setServerErrors((prev) => {
        const copy = { ...prev };
        delete copy[name];
        return copy;
      });
    }
  };

  const handleResetForm = () => {
    if (window.confirm('Are you sure you want to reset all form fields?')) {
      setFormData(INITIAL_FORM);
      setTouched({});
      setServerErrors({});
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Mark all fields touched
    const allTouched = Object.keys(formData).reduce((acc, k) => {
      acc[k] = true;
      return acc;
    }, {});
    setTouched(allTouched);

    if (!clientValidation.isValid) {
      toastError('Please resolve all highlighted validation errors.');
      return;
    }

    setIsSubmitting(true);
    setServerErrors({});

    try {
      // Rule 9: Required Server-Side Validation step
      const serverResult = await simulateServerValidation(formData, pets, id);
      if (!serverResult.isValid) {
        setServerErrors(serverResult.errors);
        toastError('Server verification rejected submission. Please check flagged fields.');
        setIsSubmitting(false);
        return;
      }

      const payload = {
        name: formData.name.trim(),
        category: formData.category,
        tagline: formData.tagline.trim(),
        lifespan: formData.lifespan.trim(),
        temperament: formData.temperament.trim(),
        careLevel: formData.careLevel,
        activityLevel: formData.activityLevel.trim(),
        dietType: formData.dietType.trim(),
        image: formData.image.trim() || 'https://images.unsplash.com/photo-1548767797-d8c844163c4c?auto=format&fit=crop&w=800&q=80',
        description: formData.description.trim(),
        careGuide: {
          housing: formData.careGuideHousing.trim(),
          exercise: formData.careGuideExercise.trim(),
          mentalStimulation: 'Daily play sessions and stimulating puzzle toys.'
        },
        contactEmail: formData.contactEmail.trim(),
        contactPhone: formData.contactPhone.trim()
      };

      if (isEditMode) {
        updatePet(id, payload);
        success(`Successfully updated profile for "${payload.name}"!`);
        navigate(`/pets/${id}`);
      } else {
        const created = addPet(payload);
        success(`New pet "${created.name}" created successfully!`);
        navigate(`/pets/${created.id}`);
      }
    } catch (err) {
      console.error(err);
      toastError('An unexpected server error occurred while saving.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Field helpers
  const hasError = (field) => touched[field] && activeErrors[field];
  const isValidField = (field) => touched[field] && !activeErrors[field] && formData[field];

  const previewImage = formData.image.trim() || 'https://images.unsplash.com/photo-1548767797-d8c844163c4c?auto=format&fit=crop&w=800&q=80';

  return (
    <div className="add-edit-page-container">
      {/* Page Header */}
      <div className="catalog-header-bar">
        <div>
          <nav className="breadcrumb-nav" aria-label="Breadcrumb navigation">
            <Link to="/pets" className="breadcrumb-link">
              <ArrowLeft size={14} style={{ verticalAlign: '-2px', marginRight: '4px' }} aria-hidden="true" />
              Pet Directory
            </Link>
            <span className="breadcrumb-separator" aria-hidden="true">/</span>
            <span className="breadcrumb-current">
              {isEditMode ? `Edit Profile` : `Create Pet Profile`}
            </span>
          </nav>
          <h1 className="page-heading">
            {isEditMode ? `Edit Pet Profile: ${formData.name || 'Pet'}` : 'Create Your Pet Profile'}
          </h1>
          <p className="page-subheading">
            Add your companion's details to organize personalized care guides, nutrition plans, and vaccination tracking in one place.
          </p>
        </div>
      </div>

      <div className="form-preview-grid">
        {/* Main Form Card */}
        <div className="portal-card form-main-card">
          <form onSubmit={handleSubmit} noValidate aria-label="Pet profile editor">
            {/* General Info Section */}
            <div className="form-section-block">
              <h3 className="form-section-title">
                <Sparkles size={17} color="#2563eb" aria-hidden="true" />
                <span>1. Pet Identity & Breed Details</span>
              </h3>

              <div className="form-row-2">
                {/* Pet Name */}
                <div className="form-group">
                  <label htmlFor="pet-name" className="form-label required">
                    Pet / Breed Name
                  </label>
                  <div className="input-feedback-wrap">
                    <input
                      id="pet-name"
                      type="text"
                      name="name"
                      className={`form-input ${hasError('name') ? 'input-error' : isValidField('name') ? 'input-valid' : ''}`}
                      placeholder="e.g. Siberian Husky or Ragdoll"
                      value={formData.name}
                      onChange={handleChange}
                      onBlur={() => handleBlur('name')}
                      required
                      aria-required="true"
                      aria-invalid={Boolean(hasError('name'))}
                      aria-describedby={hasError('name') ? 'err-name' : undefined}
                    />
                    {isValidField('name') && <CheckCircle2 size={16} className="valid-icon" aria-hidden="true" />}
                  </div>
                  {hasError('name') && <span id="err-name" className="field-error-msg">{activeErrors.name}</span>}
                </div>

                {/* Category Selection */}
                <div className="form-group">
                  <label htmlFor="pet-category" className="form-label required">
                    Species Category
                  </label>
                  <select
                    id="pet-category"
                    name="category"
                    className="form-input"
                    value={formData.category}
                    onChange={handleChange}
                    onBlur={() => handleBlur('category')}
                    aria-label="Select species category"
                  >
                    <option value="dog">Dog (Canine)</option>
                    <option value="cat">Cat (Feline)</option>
                    <option value="bird">Bird (Avian)</option>
                    <option value="rabbit">Rabbit (Small Mammal)</option>
                    <option value="fish">Fish (Aquatic)</option>
                  </select>
                </div>
              </div>

              {/* Tagline */}
              <div className="form-group">
                <label htmlFor="pet-tagline" className="form-label required">
                  Tagline / Short Summary
                </label>
                <div className="input-feedback-wrap">
                  <input
                    id="pet-tagline"
                    type="text"
                    name="tagline"
                    className={`form-input ${hasError('tagline') ? 'input-error' : isValidField('tagline') ? 'input-valid' : ''}`}
                    placeholder="e.g. Energetic, affectionate, and resilient Arctic breed"
                    value={formData.tagline}
                    onChange={handleChange}
                    onBlur={() => handleBlur('tagline')}
                    required
                    aria-required="true"
                    aria-invalid={Boolean(hasError('tagline'))}
                    aria-describedby={hasError('tagline') ? 'err-tagline' : undefined}
                  />
                  {isValidField('tagline') && <CheckCircle2 size={16} className="valid-icon" aria-hidden="true" />}
                </div>
                {hasError('tagline') && <span id="err-tagline" className="field-error-msg">{activeErrors.tagline}</span>}
              </div>

              <div className="form-row-2">
                {/* Lifespan */}
                <div className="form-group">
                  <label htmlFor="pet-lifespan" className="form-label required">
                    Expected Lifespan
                  </label>
                  <div className="input-feedback-wrap">
                    <input
                      id="pet-lifespan"
                      type="text"
                      name="lifespan"
                      className={`form-input ${hasError('lifespan') ? 'input-error' : isValidField('lifespan') ? 'input-valid' : ''}`}
                      placeholder="e.g. 12 - 15 years"
                      value={formData.lifespan}
                      onChange={handleChange}
                      onBlur={() => handleBlur('lifespan')}
                      required
                      aria-required="true"
                      aria-invalid={Boolean(hasError('lifespan'))}
                      aria-describedby={hasError('lifespan') ? 'err-lifespan' : undefined}
                    />
                    {isValidField('lifespan') && <CheckCircle2 size={16} className="valid-icon" aria-hidden="true" />}
                  </div>
                  {hasError('lifespan') && <span id="err-lifespan" className="field-error-msg">{activeErrors.lifespan}</span>}
                </div>

                {/* Temperament */}
                <div className="form-group">
                  <label htmlFor="pet-temperament" className="form-label required">
                    Temperament & Behavior
                  </label>
                  <div className="input-feedback-wrap">
                    <input
                      id="pet-temperament"
                      type="text"
                      name="temperament"
                      className={`form-input ${hasError('temperament') ? 'input-error' : isValidField('temperament') ? 'input-valid' : ''}`}
                      placeholder="e.g. Playful, Loyal, Independent, Alert"
                      value={formData.temperament}
                      onChange={handleChange}
                      onBlur={() => handleBlur('temperament')}
                      required
                      aria-required="true"
                      aria-invalid={Boolean(hasError('temperament'))}
                      aria-describedby={hasError('temperament') ? 'err-temperament' : undefined}
                    />
                    {isValidField('temperament') && <CheckCircle2 size={16} className="valid-icon" aria-hidden="true" />}
                  </div>
                  {hasError('temperament') && <span id="err-temperament" className="field-error-msg">{activeErrors.temperament}</span>}
                </div>
              </div>
            </div>

            {/* Care & Diet Section */}
            <div className="form-section-block">
              <h3 className="form-section-title">
                <Sparkles size={17} color="#059669" aria-hidden="true" />
                <span>2. Care Requirements & Nutrition</span>
              </h3>

              <div className="form-row-3">
                {/* Care Level */}
                <div className="form-group">
                  <label htmlFor="pet-careLevel" className="form-label required">
                    
                  </label>
                  <select
                    id="pet-careLevel"
                    name="careLevel"
                    className="form-input"
                    value={formData.careLevel}
                    onChange={handleChange}
                    aria-label="Care level"
                  >
                    <option value="Easy">Easy (Low Maintenance)</option>
                    <option value="Moderate">Moderate</option>
                    <option value="High">High (Demanding)</option>
                  </select>
                </div>

                {/* Activity Level */}
                <div className="form-group">
                  <label htmlFor="pet-activity" className="form-label required">
                    Activity Need
                  </label>
                  <input
                    id="pet-activity"
                    type="text"
                    name="activityLevel"
                    className={`form-input ${hasError('activityLevel') ? 'input-error' : ''}`}
                    placeholder="e.g. High (60 mins/day)"
                    value={formData.activityLevel}
                    onChange={handleChange}
                    onBlur={() => handleBlur('activityLevel')}
                    required
                  />
                  {hasError('activityLevel') && <span className="field-error-msg">{activeErrors.activityLevel}</span>}
                </div>

                {/* Diet Type */}
                <div className="form-group">
                  <label htmlFor="pet-diet" className="form-label required">
                    Diet Classification
                  </label>
                  <input
                    id="pet-diet"
                    type="text"
                    name="dietType"
                    className={`form-input ${hasError('dietType') ? 'input-error' : ''}`}
                    placeholder="e.g. Carnivore / High-Protein"
                    value={formData.dietType}
                    onChange={handleChange}
                    onBlur={() => handleBlur('dietType')}
                    required
                  />
                  {hasError('dietType') && <span className="field-error-msg">{activeErrors.dietType}</span>}
                </div>
              </div>

              {/* Housing */}
              <div className="form-group">
                <label htmlFor="pet-housing" className="form-label">
                  Housing & Shelter Requirements
                </label>
                <input
                  id="pet-housing"
                  type="text"
                  name="careGuideHousing"
                  className="form-input"
                  placeholder="e.g. Needs fenced yard and temperature-controlled indoor area"
                  value={formData.careGuideHousing}
                  onChange={handleChange}
                />
              </div>

              {/* Exercise */}
              <div className="form-group">
                <label htmlFor="pet-exercise" className="form-label">
                  Exercise & Fitness Recommendations
                </label>
                <input
                  id="pet-exercise"
                  type="text"
                  name="careGuideExercise"
                  className="form-input"
                  placeholder="e.g. Daily walking, fetching, and agility drills"
                  value={formData.careGuideExercise}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Rule 9 Validation: Veterinary Contact & Media */}
            <div className="form-section-block">
              <h3 className="form-section-title">
                <ShieldCheck size={17} color="#2563eb" aria-hidden="true" />
                <span>3. Veterinary Contact & Emergency Contacts (Rule 9 Validation)</span>
              </h3>

              <div className="form-row-2">
                {/* Contact Email */}
                <div className="form-group">
                  <label htmlFor="pet-email" className="form-label">
                    <Mail size={14} style={{ verticalAlign: '-1px', marginRight: '4px' }} aria-hidden="true" />
                    Vet Contact Email
                  </label>
                  <div className="input-feedback-wrap">
                    <input
                      id="pet-email"
                      type="email"
                      name="contactEmail"
                      className={`form-input ${hasError('contactEmail') ? 'input-error' : isValidField('contactEmail') ? 'input-valid' : ''}`}
                      placeholder="vet@petcareclinic.com"
                      value={formData.contactEmail}
                      onChange={handleChange}
                      onBlur={() => handleBlur('contactEmail')}
                      aria-invalid={Boolean(hasError('contactEmail'))}
                    />
                    {isValidField('contactEmail') && <CheckCircle2 size={16} className="valid-icon" aria-hidden="true" />}
                  </div>
                  {hasError('contactEmail') && <span className="field-error-msg">{activeErrors.contactEmail}</span>}
                </div>

                {/* Contact Phone */}
                <div className="form-group">
                  <label htmlFor="pet-phone" className="form-label">
                    <Phone size={14} style={{ verticalAlign: '-1px', marginRight: '4px' }} aria-hidden="true" />
                    Vet Emergency Phone
                  </label>
                  <div className="input-feedback-wrap">
                    <input
                      id="pet-phone"
                      type="tel"
                      name="contactPhone"
                      className={`form-input ${hasError('contactPhone') ? 'input-error' : isValidField('contactPhone') ? 'input-valid' : ''}`}
                      placeholder="+1 (555) 234-5678"
                      value={formData.contactPhone}
                      onChange={handleChange}
                      onBlur={() => handleBlur('contactPhone')}
                      aria-invalid={Boolean(hasError('contactPhone'))}
                    />
                    {isValidField('contactPhone') && <CheckCircle2 size={16} className="valid-icon" aria-hidden="true" />}
                  </div>
                  {hasError('contactPhone') && <span className="field-error-msg">{activeErrors.contactPhone}</span>}
                </div>
              </div>
            </div>

            {/* Media & In-depth Story */}
            <div className="form-section-block">
              <h3 className="form-section-title">
                <ImageIcon size={17} color="#7c3aed" aria-hidden="true" />
                <span>4. Media & Full Description</span>
              </h3>

              {/* Image URL */}
              <div className="form-group">
                <label htmlFor="pet-image" className="form-label">
                  Image URL (HTTP/HTTPS)
                </label>
                <div className="input-feedback-wrap">
                  <input
                    id="pet-image"
                    type="url"
                    name="image"
                    className={`form-input ${hasError('image') ? 'input-error' : ''}`}
                    placeholder="https://images.unsplash.com/..."
                    value={formData.image}
                    onChange={handleChange}
                    onBlur={() => handleBlur('image')}
                    aria-invalid={Boolean(hasError('image'))}
                  />
                  {isValidField('image') && <CheckCircle2 size={16} className="valid-icon" aria-hidden="true" />}
                </div>
                {hasError('image') ? (
                  <span className="field-error-msg">{activeErrors.image}</span>
                ) : (
                  <span className="field-help-text">Leave blank to use a default high-quality animal photo.</span>
                )}
              </div>

              {/* Full Description */}
              <div className="form-group">
                <label htmlFor="pet-description" className="form-label required">
                  Comprehensive Breed Description (min. 15 characters)
                </label>
                <textarea
                  id="pet-description"
                  name="description"
                  rows={4}
                  className={`form-textarea ${hasError('description') ? 'input-error' : isValidField('description') ? 'input-valid' : ''}`}
                  placeholder="Describe breed history, personality, traits, and behavior..."
                  value={formData.description}
                  onChange={handleChange}
                  onBlur={() => handleBlur('description')}
                  aria-invalid={Boolean(hasError('description'))}
                  required
                ></textarea>
                <div className="char-counter-row">
                  {hasError('description') && (
                    <span className="field-error-msg">{activeErrors.description}</span>
                  )}
                  <span className="char-counter">
                    {formData.description.length} characters
                  </span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="form-actions-bar">
              <button
                type="submit"
                className="btn-primary btn-lg"
                disabled={isSubmitting}
                aria-label={isSubmitting ? 'Validating and saving profile...' : 'Save Profile'}
              >
                <Save size={18} aria-hidden="true" />
                <span>{isSubmitting ? 'Verifying & Saving...' : isEditMode ? 'Save Profile Changes' : 'Create Pet Profile'}</span>
              </button>

              <button
                type="button"
                className="btn-secondary"
                onClick={handleResetForm}
                disabled={isSubmitting}
                aria-label="Reset form fields"
              >
                <RotateCcw size={16} aria-hidden="true" />
                <span>Reset Form</span>
              </button>

              <button
                type="button"
                className="btn-ghost"
                onClick={() => navigate(-1)}
                aria-label="Cancel editing"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>

        {/* Live Preview Sidebar */}
        <aside className="preview-sidebar" aria-label="Live card preview">
          <div className="preview-sticky-card">
            <div className="preview-header">
              <Eye size={16} color="#2563eb" aria-hidden="true" />
              <h4>Live Card Preview</h4>
            </div>
            <p className="preview-sub">This is how your pet card will look in the public directory:</p>

            <div className="pet-card preview-card-box">
              <div className="pet-card-image-wrapper">
                <img
                  src={previewImage}
                  alt={formData.name || 'Pet Preview'}
                  className="pet-card-image"
                  onError={(e) => {
                    e.currentTarget.src = 'https://images.unsplash.com/photo-1548767797-d8c844163c4c?auto=format&fit=crop&w=800&q=80';
                  }}
                />
                <span className="pet-category-badge">{formData.category}</span>
                <span className={`pet-care-level-badge care-${(formData.careLevel || 'moderate').toLowerCase()}`}>
                  {formData.careLevel}
                </span>
              </div>
              <div className="pet-card-body">
                <h3 className="pet-card-name">{formData.name || 'Sample Pet Name'}</h3>
                <p className="pet-card-tagline">{formData.tagline || 'Short summary of the breed will show up here.'}</p>
                <div className="pet-card-meta">
                  <div className="meta-row">
                    <span>Lifespan:</span>
                    <strong>{formData.lifespan || 'N/A'}</strong>
                  </div>
                  <div className="meta-row">
                    <span>Temperament:</span>
                    <strong>{formData.temperament || 'Friendly'}</strong>
                  </div>
                  <div className="meta-row">
                    <span>Diet:</span>
                    <strong>{formData.dietType || 'Omnivore'}</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
