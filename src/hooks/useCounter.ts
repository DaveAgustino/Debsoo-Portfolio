import { useState, useEffect } from 'react';
import type { RefObject } from 'react';

export function useCounter(
  target: number,
  ref: RefObject<HTMLElement | null>,
  duration: number = 1500
): number {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    let started = false;
    let observer: IntersectionObserver | null = null;

    const animate = () => {
      const startTime = performance.now();

      const step = (now: number) => {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Ease out cubic: f(t) = 1 - (1 - t)^3
        const eased = 1 - Math.pow(1 - progress, 3);
        const nextCount = Math.round(eased * target);
        
        setCount(nextCount);

        if (progress < 1) {
          requestAnimationFrame(step);
        }
      };

      requestAnimationFrame(step);
    };

    observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !started) {
          started = true;
          animate();
          if (observer && element) {
            observer.unobserve(element);
          }
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(element);

    return () => {
      if (observer && element) {
        observer.unobserve(element);
      }
    };
  }, [target, ref, duration]);

  return count;
}
