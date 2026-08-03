import { useState, useEffect } from 'react';
import './MainLayout.css';
import { ObservabilityBackground } from './ObservabilityBackground';
import { Navigation } from './Navigation';
import { Experience } from '../pages/Experience';
import { Projects } from '../pages/Projects';
import { Contact } from '../pages/Contact';
import { TerminalModal } from './TerminalModal';

export const MainLayout = () => {
  const [activeTab, setActiveTab] = useState('projects');
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey && e.key === '\\') || (e.metaKey && e.key === 'k')) {
        e.preventDefault();
        setIsTerminalOpen(prev => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const renderContent = () => {
    switch (activeTab) {
      case 'experience':
        return <Experience />;
      case 'projects':
        return <Projects />;
      case 'contact':
        return <Contact />;
      default:
        return <Projects />;
    }
  };

  return (
    <div className="main-layout">
      <ObservabilityBackground />
      <div className="portfolio-content">
        <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />
        <main className="main-content-area">
          <header className="main-header">
            <div className="header-info">
              <h1 className="name-bold">AniruddhRaam Srinivasan</h1>
              <div className="contact-links">
                <a href="https://github.com/Aniruddhraam" target="_blank" rel="noopener noreferrer">GitHub</a>
                <span className="separator">|</span>
                <a href="https://www.linkedin.com/in/aniruddhraam-srinivasan" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <span className="separator">|</span>
                <a href="mailto:aniruddhraam07@gmail.com">aniruddhraam07@gmail.com</a>
                <span className="separator">|</span>
                <a href="https://drive.google.com/file/d/1JX0Jo2SfehX0bBuXEWvYI89AuH54s84K/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="cv-btn">View CV</a>
              </div>
            </div>
            <button className="terminal-btn" onClick={() => setIsTerminalOpen(true)} title="Open Terminal (Ctrl + \ or Cmd + K)">
              <span className="icon">›_</span> <span className="btn-text">Terminal</span>
            </button>
          </header>
          
          <div className="content-wrapper">
            {renderContent()}
          </div>

          <footer className="main-footer">
            <div className="footer-content">
              <p>System Architecture & Strategy • High-Performance Computing • AI Agents</p>
              <p className="copyright">© {new Date().getFullYear()} AniruddhRaam Srinivasan. All systems operational.</p>
            </div>
          </footer>
        </main>
      </div>
      <TerminalModal isOpen={isTerminalOpen} onClose={() => setIsTerminalOpen(false)} />
    </div>
  );
};
