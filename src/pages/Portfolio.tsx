import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { projects } from '../data/portfolioData';
import { Badge } from '../components/common/Badge';

export const Portfolio: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const badgeIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none">
      <path d="M11 11h2v2h-2zM15 7h2v2h-2zM7 7h2v2H7zM7 15h2v2H7zM15 15h2v2h-2z" fill="var(--red)"/>
    </svg>
  );

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    card.style.transform = `perspective(600px) rotateY(${x * 4}deg) rotateX(${-y * 4}deg)`;
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    e.currentTarget.style.transform = '';
  };

  return (
    <div className="subpage-wrapper">
      <div className="container">
        {/* Navigation & Header */}
        <div className="subpage-nav">
          <Link to="/" className="back-link">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
            Back to Home
          </Link>
        </div>

        <header className="subpage-header reveal">
          <Badge label="Engineering" icon={badgeIcon} />
          <h1 className="display">Systems Portfolio.</h1>
          <p className="subpage-lead">
            Full-stack web applications, decentralized platforms, and enterprise solutions engineered with precision.
          </p>
        </header>

        {/* Grid */}
        <div className="projects-grid reveal reveal-delay-2">
          {projects.map((project) => (
            <div
              key={project.id}
              className="project-card"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              <div className="project-card-img">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  loading="lazy"
                />
              </div>
              <div className="project-card-body">
                <div className="project-card-category">{project.category}</div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-card-tags">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={`${project.id}-tag-${tagIndex}`} className="project-card-tag">
                      {tag}
                    </span>
                  ))}
                </div>
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-live-btn"
                  >
                    View Project
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="7" y1="17" x2="17" y2="7"></line>
                      <polyline points="7 7 17 7 17 17"></polyline>
                    </svg>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
