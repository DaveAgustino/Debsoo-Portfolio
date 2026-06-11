import React, { useState, useEffect } from 'react';
import { Button } from '../common/Button';

export const Hero: React.FC = () => {
  const [parallaxStyle, setParallaxStyle] = useState<React.CSSProperties>({
    transform: 'translate(-50%, -50%) scale(1)',
    opacity: 0.65
  });

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const heroHeight = window.innerHeight || 600;
      
      if (scrollY < heroHeight) {
        const progress = scrollY / heroHeight;
        setParallaxStyle({
          transform: `translate(-50%, calc(-50% + ${progress * 40}px)) scale(${1 + progress * 0.08})`,
          opacity: Math.max(0, 0.65 - progress * 0.65)
        });
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const tickerItems = [
    'React', 'Node.js', 'MongoDB', 'TypeScript', 'Web3', 'Figma', 
    'UI/UX Design', 'Next.js', 'Solana', 'MERN Stack', 'Vue.js', 'Supabase'
  ];

  return (
    <section className="hero" id="hero">
      {/* Hero profile image watermark overlay */}
      <div 
        className="hero-bg-profile" 
        aria-hidden="true"
        style={parallaxStyle}
      />

      <div className="hero-content">
        <h1 style={{ marginTop: '2rem' }}>
          Full Stack Developer.
          <br />
          Creative Designer.
        </h1>
        <p className="hero-sub">
          Singapore-based developer, graphics artist, and designer building high-performance web systems, Web3 platforms, and interactive interfaces.
        </p>
        <div className="hero-actions">
          <Button href="#contact" variant="red" id="hero-contact-btn">
            Get in Touch
          </Button>
          <Button href="#about" variant="outline">
            Learn More
          </Button>
        </div>
      </div>

      {/* Skills Ticker */}
      <div className="hero-ticker">
        <div className="hero-ticker-inner">
          {/* First iteration */}
          {tickerItems.map((item, index) => (
            <React.Fragment key={`ticker-1-${index}`}>
              <span>{item}</span>
              <span>&bull;</span>
            </React.Fragment>
          ))}
          {/* Second iteration for seamless loop */}
          {tickerItems.map((item, index) => (
            <React.Fragment key={`ticker-2-${index}`}>
              <span>{item}</span>
              <span>&bull;</span>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Hero;
