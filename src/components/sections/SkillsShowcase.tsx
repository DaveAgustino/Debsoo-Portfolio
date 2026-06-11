import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { skills } from '../../data/portfolioData';
import { Badge } from '../common/Badge';

gsap.registerPlugin(ScrollTrigger);

export const SkillsShowcase: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const [activeCategory, setActiveCategory] = useState<'all' | 'frontend' | 'backend' | 'design' | 'web3' | 'devops'>('all');

  const categories = [
    { id: 'all', label: 'All Skills' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'design', label: 'UI/UX & Design' },
    { id: 'web3', label: 'Web3 & Blockchain' },
    { id: 'devops', label: 'DevOps & Tooling' },
  ];

  const filteredSkills = activeCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate progress bars on scroll
      const progressFills = sectionRef.current?.querySelectorAll('.skill-progress-fill');
      if (progressFills && progressFills.length > 0) {
        progressFills.forEach((fill) => {
          const targetWidth = fill.getAttribute('data-level') + '%';
          gsap.fromTo(fill,
            { width: '0%' },
            {
              width: targetWidth,
              duration: 1.2,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: fill,
                start: 'top 90%',
                toggleActions: 'play none none none',
              }
            }
          );
        });
      }

      // Animate skill cards entering
      const cards = cardsRef.current?.querySelectorAll('.skill-showcase-card');
      if (cards && cards.length > 0) {
        gsap.fromTo(cards,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.05,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: cardsRef.current,
              start: 'top 85%',
              toggleActions: 'play none none none',
            }
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, [activeCategory]); // Re-run animations when category changes

  const badgeIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none">
      <path d="M12 2L2 22h20L12 2zm0 4l6.5 13H5.5L12 6z" fill="var(--red)"/>
    </svg>
  );

  return (
    <section ref={sectionRef} className="skills-showcase-section" id="skills">
      <div className="container">
        <div className="skills-showcase-header reveal">
          <Badge label="Abilities" icon={badgeIcon} />
          <h2>Skills &amp; Mastery.</h2>
          <p>Technical competencies mapped across engineering, interface design, and decentralized systems.</p>
        </div>

        {/* Category Filter Tabs */}
        <div className="skills-category-tabs reveal">
          {categories.map((cat) => (
            <button
              key={cat.id}
              className={`skills-category-tab ${activeCategory === cat.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat.id as any)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div ref={cardsRef} className="skills-showcase-grid">
          {filteredSkills.map((skill) => (
            <div
              key={skill.name}
              className="skill-showcase-card"
            >
              <div className="skill-info">
                <span className="skill-name">{skill.name}</span>
                <span className="skill-percentage">{skill.level}%</span>
              </div>
              <div className="skill-progress-track">
                <div 
                  className="skill-progress-fill" 
                  data-level={skill.level}
                  style={{ width: `${skill.level}%` }} // fallback width
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsShowcase;
