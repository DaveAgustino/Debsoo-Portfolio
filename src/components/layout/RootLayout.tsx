import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../sections/Navbar';
import Footer from '../sections/Footer';
import Preloader from '../common/Preloader';
import { useRevealOnScroll } from '../../hooks/useRevealOnScroll';

export const RootLayout: React.FC = () => {
  const location = useLocation();
  
  // Re-run intersection observer reveal when route pathname changes
  useRevealOnScroll([location.pathname]);

  return (
    <div className="portfolio-app-container">
      {/* ═══ PRELOADER ═══ */}
      <Preloader key={location.pathname} pathname={location.pathname} />

      {/* ═══ OVERLAYS ═══ */}
      <div className="scanlines" aria-hidden="true"></div>
      <div className="noise" aria-hidden="true"></div>
      <div className="rgb-fringe" aria-hidden="true"></div>

      {/* ═══ NAVIGATION ═══ */}
      <Navbar />

      {/* ═══ CONTENT LINES (vertical border layout) ═══ */}
      <div className="content-lines"></div>

      {/* ═══ MAIN CONTENT ═══ */}
      <main className="content">
        <Outlet />
      </main>

      {/* ═══ FOOTER ═══ */}
      <Footer />
    </div>
  );
};
export default RootLayout;
