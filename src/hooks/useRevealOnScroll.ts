import { useEffect } from 'react';

export function useRevealOnScroll(dependencies: any[] = []): void {
  useEffect(() => {
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const elements = document.querySelectorAll('.reveal, .reveal-left');
    elements.forEach((el) => {
      revealObserver.observe(el);
    });

    return () => {
      elements.forEach((el) => {
        revealObserver.unobserve(el);
      });
    };
  }, dependencies);
}
