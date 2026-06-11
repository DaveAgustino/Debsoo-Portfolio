import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useHeaderScroll } from '../../hooks/useHeaderScroll';
import { Button } from '../common/Button';

export const Navbar: React.FC = () => {
  const { isScrolled, isHidden } = useHeaderScroll(600);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Sync body overflow to prevent scroll when mobile menu is open
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  // Helper to handle smooth scroll to anchors if on homepage, or normal routing
  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, anchor: string) => {
    closeMobileMenu();
    if (location.pathname === '/') {
      e.preventDefault();
      const element = document.querySelector(anchor);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header 
      className={`site-header ${isScrolled ? 'scrolled' : ''} ${isHidden ? 'hidden' : ''}`}
      role="banner"
    >
      <nav className="site-nav" aria-label="Main navigation">
        <Link to="/" className="site-logo" aria-label="debsoo — Home" onClick={closeMobileMenu}>
          <img src="/images/logo.png" alt="debsoo" className="header-logo-img" />
        </Link>
        
        <button 
          className="nav-toggle" 
          aria-expanded={mobileMenuOpen} 
          aria-controls="nav-menu" 
          aria-label="Toggle navigation" 
          type="button"
          onClick={toggleMobileMenu}
        >
          <span className="nav-toggle-bar"></span>
          <span className="nav-toggle-bar"></span>
          <span className="nav-toggle-bar"></span>
        </button>
 
        <ul 
          className="site-nav-links" 
          id="nav-menu" 
          role="list"
          data-open={mobileMenuOpen}
        >
          <li><Link to="/#about" onClick={(e) => handleAnchorClick(e, '#about')}>About</Link></li>
          <li><Link to="/portfolio" onClick={closeMobileMenu}>Portfolio</Link></li>
          <li><Link to="/figma" onClick={closeMobileMenu}>Figma</Link></li>
          <li><Link to="/graphics" onClick={closeMobileMenu}>Graphics</Link></li>
          <li><Link to="/#skills" onClick={(e) => handleAnchorClick(e, '#skills')}>Skills</Link></li>
          <li><Link to="/#contact" onClick={(e) => handleAnchorClick(e, '#contact')}>Contact</Link></li>
          <li>
            <Button 
              id="nav-cta-btn" 
              href="https://t.me/Debsoopump" 
              target="_blank" 
              rel="noopener noreferrer" 
              variant="dark"
              className="site-nav-cta"
              onClick={closeMobileMenu}
            >
              Telegram
            </Button>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Navbar;
