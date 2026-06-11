import React from 'react';
import Hero from '../components/sections/Hero';
import Services from '../components/sections/Services';
import AnimationShowcase from '../components/sections/AnimationShowcase';
import About from '../components/sections/About';
import Approach from '../components/sections/Approach';
import Process from '../components/sections/Process';
import TechStack from '../components/sections/TechStack';
import SkillsShowcase from '../components/sections/SkillsShowcase';
import MetricsSection from '../components/sections/MetricsSection';
import TerminalSection from '../components/sections/TerminalSection';
import Projects from '../components/sections/Projects';
import Contact from '../components/sections/Contact';
import FAQ from '../components/sections/FAQ';
import FinalCTA from '../components/sections/FinalCTA';

export const Home: React.FC = () => {
  return (
    <>
      <Hero />
      
      <div style={{ paddingBottom: '4rem' }}>
        <div className="section-divider" style={{ position: 'relative', top: '4rem' }}></div>
      </div>
      <Services />
      
      <div className="section-divider"></div>
      <AnimationShowcase />
      
      <div className="section-divider"></div>
      <About />
      
      <div className="section-divider"></div>
      <Approach />
      
      <div className="section-divider"></div>
      <Process />
      
      <div className="section-divider"></div>
      <TechStack />
      
      <div className="section-divider"></div>
      <SkillsShowcase />
      
      <MetricsSection />
      
      <TerminalSection />
      
      <div className="section-divider"></div>
      <Projects />
      
      <div className="section-divider"></div>
      <Contact />
      
      <div className="section-divider"></div>
      <FAQ />
      
      <div className="section-divider"></div>
      <FinalCTA />
    </>
  );
};

export default Home;
