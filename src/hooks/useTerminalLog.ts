import { useState, useEffect } from 'react';
import type { RefObject } from 'react';

export interface TerminalLineData {
  type: 'cmd' | 'output' | 'accent' | 'muted' | 'bright' | 'empty';
  text: string;
  accentChar?: string;
  isCursor?: boolean;
}

export function useTerminalLog(
  lines: TerminalLineData[],
  ref: RefObject<HTMLElement | null>
): number {
  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    let started = false;
    let observer: IntersectionObserver | null = null;
    let timeoutId: number | null = null;

    const startTyping = () => {
      let index = 0;

      const printNext = () => {
        if (index <= lines.length) {
          setVisibleCount(index);
          const currentLine = lines[index];
          index++;

          // Command lines simulate a typing delay, output lines print faster
          const delay = currentLine?.type === 'cmd' ? 500 : 150;
          timeoutId = window.setTimeout(printNext, delay);
        }
      };

      printNext();
    };

    observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !started) {
          started = true;
          startTyping();
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
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [lines, ref]);

  return visibleCount;
}
