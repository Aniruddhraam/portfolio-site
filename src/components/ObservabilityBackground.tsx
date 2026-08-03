import { useEffect, useState } from 'react';
import './ObservabilityBackground.css';

export const ObservabilityBackground = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="observability-bg">
      <div className="grid-overlay"></div>
      
      {/* Moving Traces */}
      <div className="traces-container" style={{ transform: `translateY(${scrollY * -0.2}px)` }}>
        {[...Array(10)].map((_, i) => (
          <div 
            key={i} 
            className="trace-line" 
            style={{ 
              top: `${i * 10}%`,
              animationDelay: `${Math.random() * 5}s`,
              opacity: Math.random() * 0.3 + 0.1
            }}
          />
        ))}
      </div>

      {/* Simulated Logs reacting to scroll */}
      <div className="logs-container" style={{ transform: `translateY(${scrollY * 0.1}px)` }}>
        <div className="log-line">[INFO] Request received from 192.168.1.{Math.floor(Math.random() * 255)}</div>
        <div className="log-line">[DEBUG] Parsing payload...</div>
        <div className="log-line">[INFO] Authenticated user session</div>
        <div className="log-line success">[SUCCESS] 200 OK - 45ms</div>
        <div className="log-line">[INFO] Fetching metrics from Prometheus</div>
        <div className="log-line warning">[WARN] High CPU load detected on node-3</div>
        <div className="log-line">[INFO] Auto-scaling cluster...</div>
        <div className="log-line">[INFO] Deployed new instance pod-xyz</div>
      </div>
    </div>
  );
};
