import React from 'react';
import { Syringe, AlertCircle, CheckCircle2 } from 'lucide-react';

/**
 * VaccinationSchedule Component
 * Strictly complies with Rule 13 (Table Rules):
 * - Desktop: Clean Data Table
 * - Mobile: Responsive Cards
 * And Rule 6 (Empty State & Responsive State)
 */
export default function VaccinationSchedule({ pet }) {
  if (!pet.vaccinations || pet.vaccinations.length === 0) {
    return (
      <div className="care-callout" role="status">
        <p className="care-callout-text">
          No regular vaccination protocol required for {pet.name}. Maintain standard habitat hygiene, clean diet, and routine health checks.
        </p>
      </div>
    );
  }

  return (
    <div className="vax-schedule-wrapper" role="region" aria-label="Vaccination Schedule">
      <div className="vax-section-header">
        <div className="tab-heading-icon-badge badge-blue" aria-hidden="true">
          <Syringe size={18} />
        </div>
        <h4 className="vax-title">
          Recommended Vaccination & Health Timeline for {pet.name}
        </h4>
      </div>

      {/* Desktop View: Data Table */}
      <div className="vax-desktop-table">
        <table className="vax-table" aria-label="Vaccine Schedule Table">
          <thead>
            <tr>
              <th scope="col" style={{ width: '25%' }}>Age Milestone</th>
              <th scope="col" style={{ width: '55%' }}>Vaccine / Course</th>
              <th scope="col" style={{ width: '20%' }}>Requirement</th>
            </tr>
          </thead>
          <tbody>
            {pet.vaccinations.map((vax, idx) => (
              <tr key={idx}>
                <td><strong>{vax.age}</strong></td>
                <td>{vax.vaccine}</td>
                <td>
                  <span className={vax.mandatory ? 'badge-mandatory' : 'badge-optional'}>
                    {vax.mandatory ? 'Mandatory' : 'Routine'}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile View: Responsive Cards (Rule 13) */}
      <div className="vax-mobile-cards" role="list" aria-label="Vaccine milestones">
        {pet.vaccinations.map((vax, idx) => (
          <div key={idx} className="vax-mobile-card" role="listitem">
            <div className="vax-card-top">
              <span className="vax-card-age">{vax.age}</span>
              <span className={vax.mandatory ? 'badge-mandatory' : 'badge-optional'}>
                {vax.mandatory ? 'Mandatory' : 'Routine'}
              </span>
            </div>
            <div className="vax-card-name">
              <CheckCircle2 size={15} color="#2563eb" aria-hidden="true" />
              <span>{vax.vaccine}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="vax-disclaimer-note">
        <AlertCircle size={16} className="vax-note-icon" color="#2563eb" aria-hidden="true" />
        <p className="vax-note-text">
          Always consult a certified veterinarian for exact regional disease protocols and batch timings.
        </p>
      </div>
    </div>
  );
}
