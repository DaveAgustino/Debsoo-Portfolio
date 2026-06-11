import { useState, useEffect, useRef } from 'react';

interface HeaderScrollState {
  isScrolled: boolean;
  isHidden: boolean;
}

export function useHeaderScroll(heroHeight: number = 600): HeaderScrollState {
  const [state, setState] = useState<HeaderScrollState>({
    isScrolled: false,
    isHidden: false,
  });

  const lastScrollY = useRef(0);
  const ticking = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!ticking.current) {
        requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;

          // Add scrolled style once past header area
          const scrolled = currentScrollY > 100;
          
          // Hide on scroll down past hero, show on scroll up
          let hidden = false;
          if (currentScrollY > heroHeight) {
            hidden = currentScrollY > lastScrollY.current;
          }

          setState({
            isScrolled: scrolled,
            isHidden: hidden,
          });

          lastScrollY.current = currentScrollY;
          ticking.current = false;
        });
        ticking.current = true;
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial run

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [heroHeight]);

  return state;
}
