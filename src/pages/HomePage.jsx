import React from 'react';
import { Link } from 'react-router-dom';
import {
  Heart,
  Search,
  ShieldCheck,
  Utensils,
  Syringe,
  Bell,
  Compass,
  PlusCircle,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  PawPrint,
  Star,
  Brain
} from 'lucide-react';
import QuickCareTips from '../components/QuickCareTips';

export default function HomePage() {

  return (
    <div className="home-product-page">
      {/* 1. Full-Screen Unboxed Hero Section (User Requested: Remove box, full-screen, custom generated asset) */}
      <section className="product-hero-fullscreen" aria-label="Hero Introduction">
        <div className="hero-fullscreen-container">
          <div className="hero-text-container">
            <div className="hero-pill-badge">
              <Sparkles size={14} color="#2563eb" aria-hidden="true" />
              <span>Dedicated to Happy, Healthy Pets</span>
            </div>

            <h1 className="hero-headline">
              Everything Your Pet Needs, <br />
              <span className="hero-gradient-text">All in One Place</span>
            </h1>

            <p className="hero-subtext">
              Manage your pet's health, nutrition, daily care routines, and important reminders with a simple, personalized pet-care experience.
            </p>

            <div className="hero-button-group">
              <Link to="/pets" className="btn-primary btn-lg" aria-label="Explore Pet Care Breeds">
                <Search size={18} aria-hidden="true" />
                <span>Explore Pet Care</span>
              </Link>
            </div>

            {/* Quick Trust Highlights */}
            <div className="hero-trust-row" role="list">
              <div className="trust-item" role="listitem">
                <CheckCircle2 size={16} color="#059669" aria-hidden="true" />
                <span>Evidence-Based Nutrition</span>
              </div>
              <div className="trust-item" role="listitem">
                <CheckCircle2 size={16} color="#059669" aria-hidden="true" />
                <span>Timely Vaccine Trackers</span>
              </div>
              <div className="trust-item" role="listitem">
                <CheckCircle2 size={16} color="#059669" aria-hidden="true" />
                <span>Custom Health Profiles</span>
              </div>
            </div>
          </div>

          {/* Hero Visual Card with High-Res Generated Asset */}
          <div className="hero-visual-card">
            <div className="hero-pet-image-showcase">
              <img
                src="/images/hero-pets-wellness.jpg"
                alt="Golden retriever dog and fluffy kitten together in a green garden"
                className="hero-main-photo"
                loading="eager"
              />
              <div className="floating-stat-pill stat-pill-top">
                <Heart size={16} color="#e11d48" fill="#e11d48" aria-hidden="true" />
                <div>
                  <strong>10,000+</strong>
                  <span>Pets Supported</span>
                </div>
              </div>
              <div className="floating-stat-pill stat-pill-bottom">
                <ShieldCheck size={16} color="#059669" aria-hidden="true" />
                <div>
                  <strong>Verified</strong>
                  <span>Care Guidelines</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. About Showcase Section - Matching Design Exactly */}
      <section className="about-showcase-section" aria-label="About PetCare Hub">
        <div className="about-showcase-container">
          {/* Left Column: Heading, Subtitle & Stats */}
          <div className="about-showcase-left">
            <div className="about-pill-badge">
              <PawPrint size={14} aria-hidden="true" />
              <span>About Us</span>
            </div>

            <h2 className="about-showcase-heading">
              Dedicated to Healthier,<br />
              <span className="text-olive">Happier Pets</span>
            </h2>

            <p className="about-showcase-desc">
              PetCare Hub is your all-in-one companion for better care, healthier lives, and stronger bonds.
            </p>

            <div className="about-showcase-stats">
              <div className="showcase-stat-item">
                <div className="stat-circle-icon">
                  <PawPrint size={16} color="#556b2f" />
                </div>
                <div className="stat-num-val">10K+</div>
                <div className="stat-label-text">Happy Pets</div>
              </div>

              <div className="stat-divider-line" aria-hidden="true" />

              <div className="showcase-stat-item">
                <div className="stat-circle-icon">
                  <Heart size={16} color="#556b2f" />
                </div>
                <div className="stat-num-val">99%</div>
                <div className="stat-label-text">Pet Parent Trust</div>
              </div>

              <div className="stat-divider-line" aria-hidden="true" />

              <div className="showcase-stat-item">
                <div className="stat-circle-icon">
                  <Star size={16} color="#556b2f" />
                </div>
                <div className="stat-num-val">5+</div>
                <div className="stat-label-text">Years of Care</div>
              </div>
            </div>
          </div>

          {/* Center Column: Golden Retriever and Cat Duo with Doodles */}
          <div className="about-showcase-center">
            <div className="about-pet-backdrop-blob" aria-hidden="true" />
            <img
              src="/images/about-pets-duo.jpg"
              alt="Happy Golden Retriever dog and tabby cat sitting together"
              className="about-pet-duo-photo"
            />
            {/* Playful Accent Doodles */}
            <div className="doodle-burst-rays" aria-hidden="true">
              <span></span><span></span><span></span>
            </div>
            <div className="doodle-heart-float" aria-hidden="true">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#ea580c" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
              </svg>
            </div>
            <div className="doodle-paw-subtle" aria-hidden="true">
              <PawPrint size={22} color="#7c9055" />
            </div>
          </div>

          {/* Right Column: 4 Rounded Feature Pill Cards */}
          <div className="about-showcase-right">
            <div className="showcase-feature-cards-wrap">
              <div className="showcase-feature-item">
                <div className="feature-item-icon bg-olive-soft">
                  <Heart size={20} color="#4d612b" />
                </div>
                <div className="feature-item-content">
                  <strong>Better Health</strong>
                  <span>Preventive care & wellness</span>
                </div>
                <div className="feature-item-arrow" aria-hidden="true">
                  <ArrowRight size={14} />
                </div>
              </div>

              <div className="showcase-feature-item">
                <div className="feature-item-icon bg-peach-soft">
                  <Utensils size={20} color="#c25e2e" />
                </div>
                <div className="feature-item-content">
                  <strong>Proper Nutrition</strong>
                  <span>Healthy food & diet guides</span>
                </div>
                <div className="feature-item-arrow" aria-hidden="true">
                  <ArrowRight size={14} />
                </div>
              </div>

              <div className="showcase-feature-item">
                <div className="feature-item-icon bg-sage-soft">
                  <Brain size={20} color="#3d6648" />
                </div>
                <div className="feature-item-content">
                  <strong>Training & Behavior</strong>
                  <span>Build a stronger bond</span>
                </div>
                <div className="feature-item-arrow" aria-hidden="true">
                  <ArrowRight size={14} />
                </div>
              </div>

              <div className="showcase-feature-item">
                <div className="feature-item-icon bg-coral-soft">
                  <ShieldCheck size={20} color="#c04b38" />
                </div>
                <div className="feature-item-content">
                  <strong>Safety & Support</strong>
                  <span>Be prepared, always</span>
                </div>
                <div className="feature-item-arrow" aria-hidden="true">
                  <ArrowRight size={14} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Six Core Feature Cards */}
      <section className="portal-cards-section" aria-label="Platform Features">
        <div className="section-title-wrap text-center">
          <span className="section-eyebrow">Comprehensive Pet Care</span>
          <h2 className="section-title-lg">Everything to Keep Your Companion Thriving</h2>
          <p className="section-desc centered">
            From breed characteristics and diet requirements to vaccination dates and daily wellness tracking.
          </p>
        </div>

        <div className="product-cards-grid">
          {/* Card 1: Pet Breed Guide */}
          <div className="product-feature-card">
            <div className="card-top-icon icon-blue" aria-hidden="true">
              <Search size={22} />
            </div>
            <h3 className="feature-card-title">Pet Breed Guide</h3>
            <p className="feature-card-desc">
              Explore detailed breed profiles with information about temperament, size, activity levels, grooming needs, lifespan, and everyday care.
            </p>
            <Link to="/pets" className="card-action-btn" aria-label="Explore pet breeds guide">
              <span>Explore Breeds</span>
              <ArrowRight size={15} aria-hidden="true" />
            </Link>
          </div>

          {/* Card 2: Personalized Nutrition */}
          <div className="product-feature-card">
            <div className="card-top-icon icon-amber" aria-hidden="true">
              <Utensils size={22} />
            </div>
            <h3 className="feature-card-title">Personalized Nutrition</h3>
            <p className="feature-card-desc">
              Discover age-appropriate nutrition guidance for puppies, kittens, adults, and senior pets, including feeding routines, portion guidance, and hydration tips.
            </p>
            <Link to="/pets" className="card-action-btn" aria-label="View nutrition guides">
              <span>View Nutrition Guide</span>
              <ArrowRight size={15} aria-hidden="true" />
            </Link>
          </div>

          {/* Card 3: Vaccination & Wellness */}
          <div className="product-feature-card">
            <div className="card-top-icon icon-emerald" aria-hidden="true">
              <Syringe size={22} />
            </div>
            <h3 className="feature-card-title">Vaccination & Wellness</h3>
            <p className="feature-card-desc">
              Stay on top of essential vaccinations, deworming, preventive treatments, and routine wellness care to help keep your pet healthy.
            </p>
            <Link to="/reminders" className="card-action-btn" aria-label="View vaccination and health schedules">
              <span>View Health Schedule</span>
              <ArrowRight size={15} aria-hidden="true" />
            </Link>
          </div>

          {/* Card 4: Care Reminders */}
          <div className="product-feature-card">
            <div className="card-top-icon icon-purple" aria-hidden="true">
              <Bell size={22} />
            </div>
            <h3 className="feature-card-title">Care Reminders</h3>
            <p className="feature-card-desc">
              Never miss an important pet-care task. Keep track of vaccinations, grooming, medications, checkups, and other routine care.
            </p>
            <Link to="/reminders" className="card-action-btn" aria-label="Manage pet care reminders">
              <span>Manage Reminders</span>
              <ArrowRight size={15} aria-hidden="true" />
            </Link>
          </div>

          {/* Card 5: Discover Dog Breeds */}
          <div className="product-feature-card">
            <div className="card-top-icon icon-sky" aria-hidden="true">
              <Compass size={22} />
            </div>
            <h3 className="feature-card-title">Discover Dog Breeds</h3>
            <p className="feature-card-desc">
              Browse popular dog breeds and discover their characteristics, appearance, personality, exercise needs, and care requirements.
            </p>
            <Link to="/api-explorer" className="card-action-btn" aria-label="Discover dog breeds gallery">
              <span>Discover Breeds</span>
              <ArrowRight size={15} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. Universal Pet Care Tips Section (ReminderBox removed from homepage as requested) */}
      <section className="care-standards-section" aria-label="Universal Health Guidelines">
        <QuickCareTips />
      </section>

      {/* 5. Call To Action Banner */}
      <section className="cta-banner-card" aria-label="Call to action">
        <div className="cta-content">
          <h2 className="cta-title">Give Your Pet the Best Care Possible</h2>
          <p className="cta-text">
            Join thousands of loving pet owners who use PetCare Hub to stay on top of vaccinations, nutrition, and routine wellness.
          </p>
          <div className="cta-buttons">
            <Link to="/pets" className="btn-primary btn-lg" aria-label="Explore breeds directory">
              <span>Explore Breeds Directory</span>
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
