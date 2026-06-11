import React, { useEffect, useState, useRef } from 'react';
import gsap from 'gsap';

interface PreloaderProps {
  pathname: string;
}

export const Preloader: React.FC<PreloaderProps> = ({ pathname }) => {
  const [visible, setVisible] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const textContainerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  // Get custom messages based on the current pathname
  const getPreloaderDetails = (path: string) => {
    switch (path) {
      case '/figma':
        return {
          logs: [
            'RETRIEVING UI/UX SCHEMATICS...',
            'DESIGN SYSTEM: PARSING WIREFRAMES... OK',
            'INTERACTIVE PROTOTYPES: ONLINE'
          ],
          title: 'DEBSOO FIGMA',
          welcome: 'LOADING FIGMA DESIGN SYSTEMS'
        };
      case '/graphics':
        return {
          logs: [
            'RETRIEVING GRAPHIC PORTFOLIO...',
            'VECTOR DESIGN: PARSING VECTORS... OK',
            'IDENTITY ARCHIVES: MOUNTED'
          ],
          title: 'DEBSOO GRAPHICS',
          welcome: 'LOADING BRANDING & VECTOR ARCHIVES'
        };
      case '/portfolio':
        return {
          logs: [
            'ESTABLISHING WEB3 NODE CONNECTION...',
            'SOLANA RPC MODULES: CONNECTING... OK',
            'DAPP STACK METRICS: SYSTEM ONLINE'
          ],
          title: 'DEBSOO SYSTEMS',
          welcome: 'LOADING FULL-STACK & WEB3 ARCHIVES'
        };
      case '/':
      default:
        return {
          logs: [
            'SYSTEM STATUS: INIT',
            'DEBSOO ENGINE: INJECTING... OK',
            'COGNITIVE CORE: ONLINE'
          ],
          title: 'DEBSOO',
          welcome: 'WELCOME TO THE MAIN PORTFOLIO'
        };
    }
  };

  const details = getPreloaderDetails(pathname);

  useEffect(() => {
    // Prevent scrolling during preloader
    document.body.style.overflow = 'hidden';
    setVisible(true);

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          // Slide up preloader screen
          gsap.to(containerRef.current, {
            yPercent: -100,
            duration: 0.8,
            ease: 'power4.inOut',
            onComplete: () => {
              setVisible(false);
              document.body.style.overflow = '';
            }
          });
        }
      });

      // Terminal text lines typing/revealing
      const lines = containerRef.current?.querySelectorAll('.preloader-log-line');
      if (lines && lines.length > 0) {
        tl.fromTo(lines, 
          { opacity: 0, x: -10 },
          { opacity: 1, x: 0, duration: 0.3, stagger: 0.25, ease: 'power2.out' }
        );
      }

      // Glitch effect on the DEBSOO title
      if (titleRef.current) {
        tl.fromTo(titleRef.current,
          { scale: 0.8, opacity: 0 },
          { scale: 1, opacity: 1, duration: 0.4, ease: 'back.out(1.7)' },
          '-=0.2'
        );

        // Glitch timeline
        const glitchTl = gsap.timeline({ repeat: 6, repeatDelay: 0.1 });
        glitchTl.to(titleRef.current, { skewX: 20, duration: 0.05, ease: 'power1.inOut' })
                .to(titleRef.current, { skewX: -20, duration: 0.05, ease: 'power1.inOut' })
                .to(titleRef.current, { skewX: 0, duration: 0.04 })
                .to(titleRef.current, { x: 5, duration: 0.02, color: 'var(--red)' })
                .to(titleRef.current, { x: -5, duration: 0.02, color: '#00ffff' })
                .to(titleRef.current, { x: 0, duration: 0.02, color: 'var(--text-primary)' });
        
        tl.add(glitchTl, '-=0.5');
      }

      // Final fade/shrink of contents before sliding screen up
      tl.to(textContainerRef.current, {
        opacity: 0,
        y: -30,
        duration: 0.4,
        ease: 'power3.in'
      }, 2.2); // total preloader screen duration is exactly 3 seconds

    }, containerRef);

    return () => {
      ctx.revert();
      document.body.style.overflow = '';
    };
  }, [pathname]);

  if (!visible) return null;

  return (
    <div ref={containerRef} className="preloader-container">
      <div ref={textContainerRef} className="preloader-content">
        <div className="preloader-terminal-logs">
          {details.logs.map((log, index) => (
            <div key={`log-${index}`} className="preloader-log-line">
              <span className="accent">&gt;</span> {log}
            </div>
          ))}
        </div>
        <h1 ref={titleRef} className="preloader-title glitch-text" data-text={details.title}>
          {details.title}
        </h1>
        <div className="preloader-welcome">{details.welcome}</div>
        <div className="preloader-cursor">_</div>
      </div>
    </div>
  );
};

export default Preloader;
