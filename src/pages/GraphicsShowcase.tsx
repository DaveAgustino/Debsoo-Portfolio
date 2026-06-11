import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { graphicsProjects } from '../data/portfolioData';
import { Badge } from '../components/common/Badge';

export const GraphicsShowcase: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const badgeIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" fill="var(--red)"/>
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
          <Badge label="Brand &amp; Identity" icon={badgeIcon} />
          <h1 className="display">Graphics Showcase.</h1>
          <p className="subpage-lead">
            Visual systems, brand marks, digital illustrations, and artistic direction built with clean vectors and balanced styling.
          </p>
        </header>

        {/* Grid */}
        <div className="projects-grid reveal reveal-delay-2">
          {graphicsProjects.map((project) => (
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
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GraphicsShowcase;
