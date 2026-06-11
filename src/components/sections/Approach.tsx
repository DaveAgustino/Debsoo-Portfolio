import React from 'react';
import { Badge } from '../common/Badge';
import { approachItems } from '../../data/portfolioData';

export const Approach: React.FC = () => {
  const badgeIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none">
      <path d="M11 11h2v2h-2zM15 7h2v2h-2zM7 7h2v2H7zM7 15h2v2H7zM15 15h2v2h-2z" fill="var(--red)"/>
    </svg>
  );

  return (
    <section className="approach-section">
      <div className="approach-layout">
        {/* Left Column: Flow Diagram Visual */}
        <div className="approach-visual">
          <div className="approach-flow reveal">
            {/* Card 1 */}
            <div className="approach-flow-card">Requirements</div>
            
            {/* Connector 1 */}
            <div className="approach-connector">
              <svg width="2" height="20" viewBox="0 0 2 20">
                <line x1="1" y1="0" x2="1" y2="20" stroke="var(--green)" strokeWidth="1" strokeDasharray="2 3"/>
              </svg>
              <div className="connector-label">Research</div>
              <svg width="2" height="20" viewBox="0 0 2 20">
                <line x1="1" y1="0" x2="1" y2="20" stroke="var(--green)" strokeWidth="1" strokeDasharray="2 3"/>
              </svg>
            </div>

            {/* Card 2 (Highlight) */}
            <div className="approach-flow-card highlight" style={{ textAlign: 'center' }}>
              <div className="card-title">DEBSOO</div>
              <div className="card-accent">
                <span>✓</span> Design & Development Active
              </div>
            </div>

            {/* Connector 2 */}
            <div className="approach-connector">
              <svg width="2" height="20" viewBox="0 0 2 20">
                <line x1="1" y1="0" x2="1" y2="20" stroke="var(--green)" strokeWidth="1" strokeDasharray="2 3"/>
              </svg>
              <div className="connector-label">Deploy</div>
              <svg width="2" height="20" viewBox="0 0 2 20">
                <line x1="1" y1="0" x2="1" y2="20" stroke="var(--green)" strokeWidth="1" strokeDasharray="2 3"/>
              </svg>
            </div>

            {/* Card 3 */}
            <div className="approach-flow-card">Production Ready</div>
          </div>
        </div>

        {/* Right Column: Text Content Grid */}
        <div className="approach-items">
          <Badge label="My Approach" icon={badgeIcon} className="reveal" />
          <h2 className="reveal">
            End-to-end.
            <br />
            From idea to deployment.
          </h2>
          <div className="approach-grid">
            {approachItems.map((item, index) => (
              <div 
                key={`approach-${index}`} 
                className={`approach-item reveal reveal-delay-${index + 1}`}
              >
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Approach;
