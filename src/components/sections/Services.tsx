import React from 'react';
import { Badge } from '../common/Badge';
import { Card } from '../common/Card';
import { services } from '../../data/portfolioData';

export const Services: React.FC = () => {
  const badgeIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none">
      <path d="M11 11h2v2h-2zM15 7h2v2h-2zM7 7h2v2H7zM7 15h2v2H7zM15 15h2v2h-2zM5 17h2v2H5zM5 5h2v2H5zM9 13h2v2H9zM13 13h2v2h-2zM13 9h2v2h-2zM9 9h2v2H9zM17 5h2v2h-2zM17 17h2v2h-2z" fill="var(--red)"/>
    </svg>
  );

  return (
    <section className="services-section" id="services">
      <div className="container">
        <div className="services-outer reveal">
          {/* Top Header */}
          <div className="services-top">
            <Badge label="What I Do" icon={badgeIcon} />
            <h2 className="display services-headline">
              Crafting meaningful
              <br />
              digital experiences.
            </h2>
          </div>

          <div className="services-divider" />

          {/* 2x2 Grid */}
          <div className="services-grid">
            {services.map((service, index) => (
              <Card 
                key={service.id} 
                className={`service-card reveal reveal-delay-${index + 1}`}
                index={service.number}
                label={service.label}
              >
                <h3 className="display-heavy">{service.title}</h3>
                <p>{service.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Services;
