import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export const Footer: React.FC = () => {
  const location = useLocation();

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, anchor: string) => {
    if (location.pathname === '/') {
      e.preventDefault();
      const element = document.querySelector(anchor);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer>
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <span className="footer-logo">
              <img src="/images/logo.png" alt="debsoo" className="footer-logo-img" />
            </span>
            <p>Singapore-based developer, graphics artist, and designer building high-performance web solutions, dApps, and modern digital interfaces.</p>
          </div>
          <div className="footer-col">
            <h3>Navigate</h3>
            <Link to="/#about" onClick={(e) => handleAnchorClick(e, '#about')}>About</Link>
            <Link to="/portfolio">Portfolio</Link>
            <Link to="/figma">Figma</Link>
            <Link to="/graphics">Graphics</Link>
            <Link to="/#skills" onClick={(e) => handleAnchorClick(e, '#skills')}>Skills</Link>
            <Link to="/#contact" onClick={(e) => handleAnchorClick(e, '#contact')}>Contact</Link>
          </div>
          <div className="footer-col">
            <h3>Connect</h3>
            <a href="https://t.me/Debsoopump" target="_blank" rel="noopener noreferrer">Telegram</a>
            <a href="mailto:debsoodevsoft@gmail.com">Email</a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>&copy; {new Date().getFullYear()} debsoo. All rights reserved.</span>
          <div className="footer-status">
            <span className="footer-status-dot"></span>
            Available for work
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
