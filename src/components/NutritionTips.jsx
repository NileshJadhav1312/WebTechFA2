import React from 'react';
import { Utensils, Info } from 'lucide-react';

export default function NutritionTips({ pet }) {
  const lifeStages = pet.lifeStageNutrition || [];

  return (
    <div className="nutrition-tips-container" role="region" aria-label="Nutrition & Diet">
      <div className="tab-pane-heading">
        <div className="tab-heading-icon-badge badge-amber" aria-hidden="true">
          <Utensils size={18} />
        </div>
        <h4 className="tab-heading-text">
          Stage-by-Stage Nutrition & Diet Plan ({pet.dietType})
        </h4>
      </div>

      <div className="nutrition-grid">
        {lifeStages.map((stage, idx) => (
          <div key={idx} className="nutrition-card">
            <div className="nutrition-stage-header">
              <span className="nutrition-stage-name">{stage.stage}</span>
              <span className="nutrition-frequency">{stage.frequency}</span>
            </div>
            <p className="nutrition-diet-text">{stage.diet}</p>
            <div className="nutrition-portion">
              <strong>Serving Size:</strong> {stage.portion}
            </div>
          </div>
        ))}
      </div>

      <div className="nutrition-notice-box">
        <Info size={16} className="notice-icon" color="#d97706" aria-hidden="true" />
        <p className="notice-text">
          Keep feeding bowls clean. Fresh drinking water should always be accessible.
        </p>
      </div>
    </div>
  );
}
