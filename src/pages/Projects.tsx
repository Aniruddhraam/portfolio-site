import { portfolioData } from '../data/portfolioData';
import './Projects.css';

export const Projects = () => {
  return (
    <div className="page-container">
      <div className="api-header">
        <h2>GET /api/v1/projects</h2>
        <span className="status-badge">200 OK</span>
        <span className="time-badge">34ms</span>
      </div>

      <div className="services-grid">
        {portfolioData.projects.map((project) => (
          <div key={project.id} className="service-card">
            <div className="service-header">
              <h3>{project.name}</h3>
              <div className="service-status">
                <span className="status-dot pulsing"></span>
                {project.metrics.status}
              </div>
            </div>
            
            <p className="service-desc">{project.description}</p>
            
            <div className="metrics-grid">
              <div className="metric">
                <span className="metric-label">Latency</span>
                <span className="metric-value">{project.metrics.latency}</span>
              </div>
              <div className="metric">
                <span className="metric-label">Uptime</span>
                <span className="metric-value">{project.metrics.uptime}</span>
              </div>
            </div>

            <div className="tech-stack">
              {project.stack.map(tech => (
                <span key={tech} className="tech-tag">{tech}</span>
              ))}
            </div>

            {project.points.length > 0 && (
              <div className="service-logs">
                <div className="log-header">Deployment Logs</div>
                {project.points.map((point, i) => (
                  <div key={i} className="log-entry">
                    <span className="log-timestamp">{project.date}</span>
                    <span className="log-message">{point}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
