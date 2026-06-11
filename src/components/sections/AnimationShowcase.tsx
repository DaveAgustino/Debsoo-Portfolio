import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Node positions for the vector network
const NODES = [
  { x: 100, y: 80, label: 'React', icon: 'react', size: 18 },
  { x: 280, y: 50, label: 'Node.js', icon: 'nodedotjs', size: 16 },
  { x: 460, y: 90, label: 'TypeScript', icon: 'typescript', size: 17 },
  { x: 640, y: 60, label: 'MongoDB', icon: 'mongodb', size: 15 },
  { x: 820, y: 85, label: 'Figma', icon: 'figma', size: 16 },
  { x: 190, y: 200, label: 'Next.js', icon: 'nextdotjs', size: 14 },
  { x: 370, y: 220, label: 'Web3', icon: 'ethereum', size: 15 },
  { x: 550, y: 190, label: 'Solana', icon: 'solana', size: 13 },
  { x: 730, y: 210, label: 'Vue.js', icon: 'vuedotjs', size: 14 },
  { x: 150, y: 320, label: 'Express', icon: 'express', size: 13 },
  { x: 340, y: 340, label: 'Tailwind', icon: 'tailwindcss', size: 14 },
  { x: 520, y: 310, label: 'Supabase', icon: 'supabase', size: 13 },
  { x: 700, y: 330, label: 'Docker', icon: 'docker', size: 12 },
  { x: 460, y: 400, label: 'Design', icon: 'adobecreativecloud', size: 15 },
];

// Connections between nodes (indices)
const EDGES: [number, number][] = [
  [0, 1], [1, 2], [2, 3], [3, 4],
  [0, 5], [1, 6], [2, 7], [3, 8],
  [5, 6], [6, 7], [7, 8],
  [5, 9], [6, 10], [7, 11], [8, 12],
  [9, 10], [10, 11], [11, 12],
  [10, 13], [11, 13], [6, 13],
];

export const AnimationShowcase: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate headline characters
      if (headlineRef.current) {
        const chars = headlineRef.current.querySelectorAll('.anim-char');
        gsap.fromTo(chars,
          { opacity: 0, y: 60, rotateX: -90 },
          {
            opacity: 1, y: 0, rotateX: 0,
            duration: 0.8,
            stagger: 0.03,
            ease: 'back.out(1.7)',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 80%',
              toggleActions: 'play none none none',
            }
          }
        );
      }

      // Animate subtitle
      if (subRef.current) {
        gsap.fromTo(subRef.current,
          { opacity: 0, y: 30 },
          {
            opacity: 1, y: 0,
            duration: 1,
            delay: 0.5,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 80%',
              toggleActions: 'play none none none',
            }
          }
        );
      }

      // Animate SVG edges (draw on)
      const paths = svgRef.current?.querySelectorAll('.network-edge');
      if (paths) {
        paths.forEach((path) => {
          const svgPath = path as SVGLineElement;
          gsap.fromTo(svgPath,
            { opacity: 0 },
            {
              opacity: 0.3,
              duration: 0.6,
              stagger: 0.05,
              ease: 'power2.inOut',
              scrollTrigger: {
                trigger: sectionRef.current,
                start: 'top 70%',
                toggleActions: 'play none none none',
              }
            }
          );
        });
      }

      // Animate SVG nodes
      const nodes = svgRef.current?.querySelectorAll('.network-node');
      if (nodes) {
        gsap.fromTo(nodes,
          { scale: 0, transformOrigin: 'center' },
          {
            scale: 1,
            duration: 0.6,
            stagger: 0.08,
            ease: 'elastic.out(1, 0.5)',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 70%',
              toggleActions: 'play none none none',
            }
          }
        );
      }

      // Animate node labels
      const labels = svgRef.current?.querySelectorAll('.network-label');
      if (labels) {
        gsap.fromTo(labels,
          { opacity: 0 },
          {
            opacity: 1,
            duration: 0.4,
            stagger: 0.08,
            delay: 0.3,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 70%',
              toggleActions: 'play none none none',
            }
          }
        );
      }

      // Pulse animation on nodes (infinite)
      const pulseNodes = svgRef.current?.querySelectorAll('.node-pulse');
      if (pulseNodes) {
        pulseNodes.forEach((pulse, i) => {
          gsap.to(pulse, {
            scale: 2.5,
            opacity: 0,
            duration: 2 + (i % 3) * 0.5,
            repeat: -1,
            ease: 'power1.out',
            transformOrigin: 'center',
            delay: i * 0.2,
          });
        });
      }

      // Floating animation on nodes (x and y drift for organic movement)
      const nodeGroups = svgRef.current?.querySelectorAll('.node-group');
      if (nodeGroups) {
        nodeGroups.forEach((group, i) => {
          gsap.to(group, {
            y: `+=${5 + (i % 4) * 2}`,
            duration: 2 + (i % 3),
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut',
            delay: i * 0.15,
          });
          gsap.to(group, {
            x: `+=${3 + (i % 3) * 1.5}`,
            duration: 2.5 + (i % 4),
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut',
            delay: i * 0.2,
          });
        });
      }

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleNodeMouseEnter = (e: React.MouseEvent<SVGGElement>) => {
    const group = e.currentTarget;
    const elements = group.querySelectorAll('.network-node, image, .node-pulse');
    gsap.to(elements, {
      scale: 1.35,
      transformOrigin: 'center',
      duration: 0.3,
      ease: 'power2.out',
      overwrite: 'auto',
    });
    const label = group.querySelector('.network-label');
    if (label) {
      gsap.to(label, {
        fill: 'var(--text-primary)',
        duration: 0.3,
      });
    }
  };

  const handleNodeMouseLeave = (e: React.MouseEvent<SVGGElement>) => {
    const group = e.currentTarget;
    const elements = group.querySelectorAll('.network-node, image, .node-pulse');
    gsap.to(elements, {
      scale: 1,
      transformOrigin: 'center',
      duration: 0.3,
      ease: 'power2.out',
      overwrite: 'auto',
    });
    const label = group.querySelector('.network-label');
    if (label) {
      gsap.to(label, {
        fill: 'var(--text-muted)',
        duration: 0.3,
      });
    }
  };

  const headlineText = 'Built with precision.';
  const chars = headlineText.split('');

  return (
    <section ref={sectionRef} className="animation-showcase" id="animation-showcase">
      <div className="container">
        <div className="animation-showcase-content">
          <div className="badge reveal">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M11 11h2v2h-2zM15 7h2v2h-2zM7 7h2v2H7zM7 15h2v2H7zM15 15h2v2h-2z" fill="var(--red)"/>
            </svg>
            Tech Network
          </div>
          <h2 ref={headlineRef} className="animation-showcase-headline" style={{ perspective: '800px' }}>
            {chars.map((char, i) => (
              <span
                key={i}
                className="anim-char"
                style={{ display: char === ' ' ? 'inline' : 'inline-block' }}
              >
                {char === ' ' ? '\u00A0' : char}
              </span>
            ))}
          </h2>
          <p ref={subRef} className="animation-showcase-sub">
            A connected ecosystem of technologies working together to deliver exceptional digital experiences.
          </p>
        </div>

        {/* Interactive SVG Network */}
        <div className="animation-showcase-visual">
          <svg
            ref={svgRef}
            viewBox="0 0 920 450"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="network-svg"
          >
            {/* Gradient definitions */}
            <defs>
              <radialGradient id="node-glow-red" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="var(--red)" stopOpacity="0.6" />
                <stop offset="100%" stopColor="var(--red)" stopOpacity="0" />
              </radialGradient>
              <radialGradient id="node-glow-green" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="var(--green)" stopOpacity="0.5" />
                <stop offset="100%" stopColor="var(--green)" stopOpacity="0" />
              </radialGradient>
              <linearGradient id="edge-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="var(--red)" stopOpacity="0.4" />
                <stop offset="100%" stopColor="var(--green)" stopOpacity="0.2" />
              </linearGradient>
            </defs>

            {/* Edges */}
            {EDGES.map(([from, to], i) => (
              <line
                key={`edge-${i}`}
                className="network-edge"
                x1={NODES[from].x}
                y1={NODES[from].y}
                x2={NODES[to].x}
                y2={NODES[to].y}
                stroke="url(#edge-gradient)"
                strokeWidth="1"
                strokeDasharray="4 6"
                opacity="0"
              />
            ))}

            {/* Nodes */}
            {NODES.map((node, i) => (
              <g
                key={`node-${i}`}
                className="node-group"
                style={{ cursor: 'pointer' }}
                onMouseEnter={handleNodeMouseEnter}
                onMouseLeave={handleNodeMouseLeave}
              >
                {/* Pulse ring */}
                <circle
                  className="node-pulse"
                  cx={node.x}
                  cy={node.y}
                  r={22}
                  fill="none"
                  stroke={i % 3 === 0 ? 'var(--red)' : 'var(--green)'}
                  strokeWidth="1"
                  opacity="0.4"
                />
                {/* Glow */}
                <circle
                  cx={node.x}
                  cy={node.y}
                  r={32}
                  fill={i % 3 === 0 ? 'url(#node-glow-red)' : 'url(#node-glow-green)'}
                  opacity="0.4"
                />
                {/* Core node container */}
                <circle
                  className="network-node"
                  cx={node.x}
                  cy={node.y}
                  r={18}
                  fill="var(--bg-card)"
                  stroke={i % 3 === 0 ? 'var(--red)' : i % 3 === 1 ? 'var(--green)' : 'var(--text-muted)'}
                  strokeWidth="1"
                  opacity="0.9"
                />
                {/* Icon Image */}
                <image
                  className="network-node"
                  href={`https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/${node.icon}.svg`}
                  x={node.x - 9}
                  y={node.y - 9}
                  width="18"
                  height="18"
                  style={{ filter: 'brightness(0) invert(1)', opacity: 0.85, pointerEvents: 'none' }}
                />
                {/* Label */}
                <text
                  className="network-label"
                  x={node.x}
                  y={node.y + 30}
                  textAnchor="middle"
                  fill="var(--text-muted)"
                  fontSize="10"
                  fontFamily="var(--font-mono)"
                  letterSpacing="0.05em"
                  opacity="0"
                >
                  {node.label}
                </text>
              </g>
            ))}
          </svg>
        </div>
      </div>
    </section>
  );
};

export default AnimationShowcase;
