import { useState, useEffect } from 'react';
import './BootSequence.css';

interface BootSequenceProps {
  onComplete: () => void;
}

const BOOT_LINES = [
  "Initializing portfolio...",
  "✓ Loading kernel",
  "✓ Mounting filesystems",
  "✓ Starting postgres.service",
  "✓ Starting redis.service",
  "✓ Starting api.service",
  "✓ Starting portfolio.service",
  "Portfolio ready.",
  "",
  "ssh guest@aniruddh.dev"
];

export const BootSequence = ({ onComplete }: BootSequenceProps) => {
  const [lines, setLines] = useState<string[]>([]);
  const [showPrompt, setShowPrompt] = useState(false);

  useEffect(() => {
    let delay = 0;
    
    BOOT_LINES.forEach((line, index) => {
      // Last line (ssh) happens after a longer pause
      const isLast = index === BOOT_LINES.length - 1;
      const addedDelay = isLast ? 1000 : Math.random() * 200 + 100;
      delay += addedDelay;

      setTimeout(() => {
        setLines(prev => [...prev, line]);
        
        if (isLast) {
          setTimeout(() => {
            setShowPrompt(true);
            setTimeout(() => {
              onComplete();
            }, 1500); // Wait a bit after showing the prompt before transitioning
          }, 500);
        }
      }, delay);
    });
  }, [onComplete]);

  return (
    <div className="boot-sequence">
      <div className="terminal-content">
        {lines.map((line, i) => (
          <div key={i} className="terminal-line">{line}</div>
        ))}
        {showPrompt && (
          <>
            <div className="terminal-line">Welcome to PortfolioOS 2.0</div>
            <div className="terminal-line">Authenticated via Public Key</div>
            <div className="terminal-line">Last login: {new Date().toLocaleString()}</div>
            <div className="terminal-line prompt">
              <span className="user-host">guest@portfolio:~$</span> <span className="cursor"></span>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
