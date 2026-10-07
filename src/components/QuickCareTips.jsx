import React from 'react';
import { GENERAL_CARE_TIPS } from '../data/petData';
import { Lightbulb } from 'lucide-react';

export default function QuickCareTips() {
  return (
    <div className="portal-card" role="region" aria-label="Universal Care Standards">
      <div className="portal-card-header">
        <div className="card-title-group">
          <div className="card-icon-badge badge-amber" aria-hidden="true">
            <Lightbulb size={18} />
          </div>
          <div>
            <h3 className="card-header-title">Universal Pet Care Standards</h3>
            <span className="card-header-sub">Fundamental health, safety and hygiene advice</span>
          </div>
        </div>
      </div>

      <div className="quick-tips-zigzag-list" role="list">
        {GENERAL_CARE_TIPS.map((tip, index) => {
          const isLeft = index % 2 === 0;
          return (
            <div
              key={tip.id}
              className={`quick-tip-zigzag-item ${isLeft ? 'tip-item-left' : 'tip-item-right'}`}
              role="listitem"
            >
              {/* Vertical timeline node indicator */}
              <div className="zigzag-step-node" aria-hidden="true">
                <span className="step-number">{index + 1}</span>
              </div>

              {/* Step Card */}
              <div className="quick-tip-card">
                <div className="tip-icon" aria-hidden="true">{tip.icon}</div>
                <div className="tip-content">
                  <div className="tip-category-badge">{tip.category}</div>
                  <h4 className="tip-title">{tip.title}</h4>
                  <p className="tip-desc">{tip.description}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
