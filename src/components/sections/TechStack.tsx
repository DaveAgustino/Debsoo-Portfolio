import React from 'react';
import { Badge } from '../common/Badge';
import { techCategories } from '../../data/portfolioData';

export const TechStack: React.FC = () => {
  const badgeIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none">
      <path d="M11 11h2v2h-2zM15 7h2v2h-2zM7 7h2v2H7zM7 15h2v2H7zM15 15h2v2h-2zM17 5h2v2h-2zM17 17h2v2h-2zM5 5h2v2H5zM5 17h2v2H5z" fill="var(--red)"/>
    </svg>
  );

  return (
    <section className="techstack-section" id="skills">
      <div className="container">
        {/* Header */}
        <div className="techstack-header reveal">
          <Badge label="Capabilities" icon={badgeIcon} />
          <h2>
            Tech Stack &
            <br />
            Design Tools.
          </h2>
        </div>

        {/* 6-Card Grid */}
        <div className="techstack-grid">
          {techCategories.map((tech, index) => (
            <div 
              key={tech.id} 
              className={`techstack-card reveal reveal-delay-${(index % 3) + 1}`}
            >
              <div className="techstack-card-index">{tech.number}</div>
              <h3>{tech.title}</h3>
              <p>{tech.description}</p>
              
              {/* Tags */}
              <div className="techstack-tags">
                {tech.tags.map((tag, tagIndex) => (
                  <span key={`tag-${tagIndex}`} className="techstack-tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default TechStack;
