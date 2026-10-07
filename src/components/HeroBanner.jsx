import React from 'react';
import { Sparkles, Calendar, BookOpen, Activity } from 'lucide-react';

export default function HeroBanner() {
  return (
    <div className="hero-banner" role="banner">
      <div className="hero-header-row">
        <div>
          <h1 className="hero-title">Essential Care Guides for Your Beloved Pets</h1>
          <p className="hero-description">
            Find structured vaccination timelines, life-stage nutrition guidance, daily grooming
            routines, and custom care schedules all in one centralized hub.
          </p>
        </div>
      </div>

      <div className="hero-stats-row">
        <div className="hero-stat-card">
          <BookOpen size={16} color="#2563eb" aria-hidden="true" />
          <span>Stage-by-Stage Nutrition</span>
        </div>
        <div className="hero-stat-card">
          <Calendar size={16} color="#059669" aria-hidden="true" />
          <span>Core Vaccination Timelines</span>
        </div>
        <div className="hero-stat-card">
          <Activity size={16} color="#d97706" aria-hidden="true" />
          <span>Grooming & Health Tips</span>
        </div>
        <div className="hero-stat-card">
          <Sparkles size={16} color="#7c3aed" aria-hidden="true" />
          <span>Interactive Reminders</span>
        </div>
      </div>
    </div>
  );
}
