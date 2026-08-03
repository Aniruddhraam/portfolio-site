import './Navigation.css';

interface NavigationProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const Navigation = ({ activeTab, setActiveTab }: NavigationProps) => {
  const tabs = [
    { id: 'projects', method: 'GET', path: '/projects' },
    { id: 'experience', method: 'GET', path: '/experience' },
    { id: 'contact', method: 'POST', path: '/contact' }
  ];

  return (
    <nav className="navigation-sidebar">
      <div className="nav-header">
        <span className="server-status">
          <span className="status-dot"></span> Portfolio API v1.0
        </span>
      </div>
      <div className="nav-links">
        {tabs.map(tab => (
          <button
            key={tab.id}
            className={`nav-link ${activeTab === tab.id ? 'active' : ''}`}
            onClick={() => setActiveTab(tab.id)}
          >
            <span className={`method ${tab.method.toLowerCase()}`}>{tab.method}</span>
            <span className="path">{tab.path}</span>
          </button>
        ))}
      </div>
    </nav>
  );
};
