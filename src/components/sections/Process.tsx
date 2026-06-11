import React, { useState } from 'react';
import { Badge } from '../common/Badge';
import { processSteps } from '../../data/portfolioData';

export const Process: React.FC = () => {
  const [activeStepId, setActiveStepId] = useState(1);

  const activeStep = processSteps.find((step) => step.id === activeStepId) || processSteps[0];

  const badgeIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none">
      <path d="M11 11h2v2h-2zM13 9h2v2h-2zM9 13h2v2H9zM15 7h2v2h-2zM7 15h2v2H7z" fill="var(--red)"/>
    </svg>
  );

  return (
    <section className="process-section" id="process">
      <div className="container">
        <Badge label="My Process" icon={badgeIcon} className="reveal" />
        
        <div className="process-layout reveal">
          {/* Left: Step Tabs */}
          <div className="process-steps">
            {processSteps.map((step) => (
              <button
                key={step.id}
                className={`process-step-tab ${step.id === activeStepId ? 'active' : ''}`}
                onClick={() => setActiveStepId(step.id)}
                type="button"
              >
                <div className="process-step-number">{step.stepNumber}</div>
                <div className="process-step-title">{step.title}</div>
              </button>
            ))}
          </div>

          {/* Right: Step Details */}
          <div className="process-detail active">
            <h3>{activeStep.headline}</h3>
            <p>{activeStep.description}</p>
            
            {/* Visual Bar Chart */}
            <div className="process-detail-visual">
              <div className="process-bar-chart">
                {activeStep.visualData.map((bar, index) => (
                  <div key={`bar-${index}`} className="process-bar">
                    <span className="process-bar-label">{bar.label}</span>
                    <div className="process-bar-track">
                      <div 
                        className={`process-bar-fill ${bar.colorClass}`} 
                        style={{ width: `${bar.percentage}%` }}
                      />
                    </div>
                    <span className="process-bar-value">{bar.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Process;
