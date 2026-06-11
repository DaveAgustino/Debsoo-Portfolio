import React, { useRef } from 'react';
import { Badge } from '../common/Badge';
import { useTerminalLog, type TerminalLineData } from '../../hooks/useTerminalLog';

export const TerminalSection: React.FC = () => {
  const terminalRef = useRef<HTMLDivElement>(null);

  const terminalLines: TerminalLineData[] = [
    { type: 'cmd', text: 'npm run dev' },
    { type: 'muted', text: '› Starting development server...' },
    { type: 'muted', text: '› Compiling React components & Tailwind styles...' },
    { type: 'bright', text: 'Server running on port 5173' },
    { type: 'empty', text: '' },
    { type: 'cmd', text: 'solana-web3-client connect' },
    { type: 'bright', text: 'Active RPC: mainnet-beta.solana.com' },
    { type: 'empty', text: '' },
    { type: 'cmd', text: 'cargo test-bpf' },
    { type: 'muted', text: '› Running Smart Contract unit tests...' },
    { type: 'bright', text: 'Test results: 12 passed, 0 failed' },
    { type: 'empty', text: '' },
    { type: 'cmd', text: 'git log --oneline -5' },
    { type: 'muted', text: 'a7f3c2d feat: solana wallet integration' },
    { type: 'muted', text: 'e1b9d4f feat: real-time websocket price charts' },
    { type: 'muted', text: 'c8e2a1b fix: connection fallback logic' },
    { type: 'muted', text: 'd4f7e3a feat: smart contract transaction layout' },
    { type: 'muted', text: 'b2c1f8d init: workspace layout' },
    { type: 'empty', text: '' },
    { type: 'cmd', text: '', isCursor: true }
  ];

  const visibleCount = useTerminalLog(terminalLines, terminalRef);

  const badgeIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none">
      <path d="M11 11h2v2h-2zM13 9h2v2h-2zM15 7h2v2h-2zM9 13h2v2H9zM7 15h2v2H7z" fill="var(--red)"/>
    </svg>
  );

  const renderTerminalLine = (line: TerminalLineData, isLast: boolean) => {
    if (line.type === 'empty') {
      return <div className="terminal-line">&nbsp;</div>;
    }
    if (line.isCursor) {
      return (
        <div className="terminal-line">
          <span className="cmd">$</span> <span className="terminal-cursor"></span>
        </div>
      );
    }
    
    if (line.text.startsWith('› ')) {
      return (
        <div className="terminal-line">
          <span className="muted">{line.text}</span>
        </div>
      );
    }
    
    if (line.text === 'Server running on port 5173') {
      return (
        <div className="terminal-line">
          <span className="cmd">✓</span> <span className="bright">Server running on port 5173</span>
        </div>
      );
    }

    if (line.text === 'Active RPC: mainnet-beta.solana.com') {
      return (
        <div className="terminal-line">
          <span className="accent">→</span> <span className="bright">Active RPC: mainnet-beta.solana.com</span>
        </div>
      );
    }

    if (line.text === 'Test results: 12 passed, 0 failed') {
      return (
        <div className="terminal-line">
          <span className="cmd">✓</span> <span className="bright">Test results: 12 passed, 0 failed</span>
        </div>
      );
    }

    // Git logs parser: "a7f3c2d feat: message"
    const gitLogMatch = line.text.match(/^([a-z0-9]{7})\s+(.*)$/);
    if (gitLogMatch) {
      return (
        <div className="terminal-line">
          <span className="accent">{gitLogMatch[1]}</span> <span className="muted">{gitLogMatch[2]}</span>
        </div>
      );
    }

    if (line.type === 'cmd') {
      return (
        <div className="terminal-line">
          <span className="cmd">$</span> <span className="bright">{line.text}</span>
          {isLast && <span className="terminal-cursor"></span>}
        </div>
      );
    }

    return (
      <div className="terminal-line">
        <span className="bright">{line.text}</span>
      </div>
    );
  };

  return (
    <section className="terminal-section">
      <div className="container">
        <div className="terminal-layout reveal">
          {/* Left Column: Project Info */}
          <div className="terminal-info">
            <Badge label="Featured Project" icon={badgeIcon} />
            <h2>
              PumpSeeker Web3
              <br />
              Analytics Platform
            </h2>
            <p>
              High-performance analytics landing page and dashboard for Solana-based DeFi projects. Built with real-time websocket integration, automated RPC connection fallbacks, and premium interactive visualizations.
            </p>
            <div className="terminal-features-grid">
              <div className="terminal-feature">
                <div className="terminal-feature-label">Stack</div>
                <div className="terminal-feature-value">React · TypeScript</div>
              </div>
              <div className="terminal-feature">
                <div className="terminal-feature-label">Protocol</div>
                <div className="terminal-feature-value">Solana Web3</div>
              </div>
              <div className="terminal-feature">
                <div className="terminal-feature-label">Type</div>
                <div className="terminal-feature-value">DeFi Platform</div>
              </div>
              <div className="terminal-feature">
                <div className="terminal-feature-label">Status</div>
                <div className="terminal-feature-value" style={{ color: 'var(--green)' }}>
                  ✓ Live &amp; Operational
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Terminal Mockup */}
          <div ref={terminalRef} className="terminal-mockup">
            <div className="terminal-header">
              <span className="terminal-dot red"></span>
              <span className="terminal-dot yellow"></span>
              <span className="terminal-dot green"></span>
              <span style={{ marginLeft: '0.5rem' }}>debsoo@portfolio ~ /pumpseeker-platform</span>
            </div>

            {terminalLines.slice(0, visibleCount).map((line, index) => (
              <React.Fragment key={`term-line-${index}`}>
                {renderTerminalLine(line, index === visibleCount - 1)}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default TerminalSection;
