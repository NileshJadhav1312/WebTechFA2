import React from 'react';
import { Sparkles, HeartHandshake } from 'lucide-react';

export default function GroomingTips({ pet }) {
  const groomingEntries = Object.entries(pet.grooming || {});

  return (
    <div className="grooming-tips-container" role="region" aria-label="Grooming & Hygiene">
      <div className="tab-pane-heading">
        <div className="tab-heading-icon-badge badge-purple" aria-hidden="true">
          <Sparkles size={18} />
        </div>
        <h4 className="tab-heading-text">Grooming & Hygiene Maintenance</h4>
      </div>

      <div className="grooming-list">
        {groomingEntries.map(([key, value], idx) => (
          <div key={idx} className="grooming-item">
            <div className="grooming-label">{key.replace(/([A-Z])/g, ' $1')}</div>
            <div className="grooming-value">{value}</div>
          </div>
        ))}
      </div>

      {pet.commonHealthTips && pet.commonHealthTips.length > 0 && (
        <div className="grooming-notes-box">
          <h5 className="grooming-notes-title">
            <HeartHandshake size={18} className="notes-icon" color="#059669" aria-hidden="true" />
            <span>Important Health & Wellness Notes:</span>
          </h5>
          <ul className="grooming-notes-list">
            {pet.commonHealthTips.map((tip, idx) => (
              <li key={idx}>{tip}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
