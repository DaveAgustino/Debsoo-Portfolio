import React from 'react';
import { Badge } from '../common/Badge';
import { diagramCells } from '../../data/portfolioData';

export const About: React.FC = () => {
  const badgeIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none">
      <path d="M14 11h2v2h-2zM18 7h2v2h-2zM4 13h2v2H4zM10 15h2v2h-2zM8 17h2v2H8zM12 13h2v2h-2zM16 9h2v2h-2zM6 15h2v2H6z" fill="var(--red)"/>
    </svg>
  );

  return (
    <section className="about-section" id="about">
      <div className="container about-container">
        <div className="about-flex">
          {/* Top row: Profile & Text */}
          <div className="about-top-row">
            {/* Profile Image */}
            <div className="about-image-wrap reveal">
              <div className="about-image-frame">
                <img src="/images/profile.jpg" alt="Profile" className="about-profile-img" />
                <div className="about-image-border"></div>
              </div>
            </div>

            {/* About Text */}
            <div className="about-headline-wrap reveal reveal-delay-1">
              <Badge label="About Me" icon={badgeIcon} />
              <h2 className="display about-title">
                Everything crafted.
                <br />
                Own your experience.
              </h2>
              <p className="about-desc">
                I am DEBSOO — a Singapore-based developer, graphics artist, and designer specialized in crafting visually compelling, high-performance digital experiences. With a keen eye for aesthetics and a deep understanding of user behavior, I design and build interfaces that deliver real value, scalable backend architectures, and Web3 integrations.
              </p>
            </div>
          </div>

          {/* Tech Diagram Cell Grid */}
          <div className="about-diagram-wrap reveal reveal-delay-2">
            <div className="about-diagram">
              {diagramCells.map((cell, index) => (
                <div key={`cell-${index}`} className="about-diagram-cell">
                  <span className="cell-icon">{cell.icon}</span>
                  <div className="cell-title">{cell.title}</div>
                  <div className="cell-sub">{cell.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
