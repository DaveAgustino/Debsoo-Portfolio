import React from 'react';
import { Link } from 'react-router-dom';
import { Badge } from '../common/Badge';

export const Projects: React.FC = () => {
  const badgeIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none">
      <path d="M11 11h2v2h-2zM15 7h2v2h-2zM7 7h2v2H7zM7 15h2v2H7zM15 15h2v2h-2z" fill="var(--red)"/>
    </svg>
  );

  const showcaseCategories = [
    {
      id: 'systems',
      title: 'Systems & Engineering',
      category: 'Full-Stack & Web3',
      description: 'Production-ready web applications, backend architectures, APIs, and Solana/Ethereum decentralized platforms.',
      tags: ['React', 'Node.js', 'Solana', 'Web3.js', 'MongoDB'],
      imageUrl: '/images/pumpseeker.png',
      link: '/portfolio'
    },
    {
      id: 'figma',
      title: 'UI/UX Prototypes',
      category: 'Figma Showcase',
      description: 'High-fidelity wireframes, interactive user flows, design systems, and responsive interface mockups.',
      tags: ['Figma', 'UI Design', 'UX Research', 'Prototyping'],
      imageUrl: '/images/byd_car.png',
      link: '/figma'
    },
    {
      id: 'graphics',
      title: 'Graphics & Identity',
      category: 'Digital Art & Vector',
      description: 'Brand identity guidelines, logos, cyberpunk HUD elements, vector illustrations, and digital poster designs.',
      tags: ['Illustrator', 'Photoshop', 'Branding', 'Vector Art'],
      imageUrl: '/images/nft_character.png',
      link: '/graphics'
    }
  ];

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
    <section className="projects-section" id="projects">
      <div className="container">
        <div className="projects-header reveal">
          <Badge label="Showcase" icon={badgeIcon} />
          <h2>Portfolio Showcases.</h2>
          <p>Explore dedicated galleries of full-stack engineering, Figma UI/UX prototypes, and graphics art.</p>
        </div>

        <div className="projects-grid">
          {showcaseCategories.map((showcase, index) => (
            <Link
              key={showcase.id}
              to={showcase.link}
              className={`project-card reveal reveal-delay-${(index % 3) + 1}`}
              style={{ display: 'block' }}
            >
              <div 
                className="project-card-interactive-wrapper"
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
              >
                <div className="project-card-img">
                  <img
                    src={showcase.imageUrl}
                    alt={showcase.title}
                    loading="lazy"
                  />
                </div>
                <div className="project-card-body">
                  <div className="project-card-category">{showcase.category}</div>
                  <h3>{showcase.title}</h3>
                  <p>{showcase.description}</p>
                  <div className="project-card-tags">
                    {showcase.tags.map((tag, tagIndex) => (
                      <span key={`${showcase.id}-tag-${tagIndex}`} className="project-card-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <span className="project-explore-btn">
                    Explore Gallery
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
