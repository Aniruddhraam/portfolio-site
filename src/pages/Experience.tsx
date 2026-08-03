import { portfolioData } from '../data/portfolioData';
import './Experience.css';

export const Experience = () => {
  return (
    <div className="page-container">
      <div className="api-header">
        <h2>GET /api/v1/experience</h2>
        <span className="status-badge">200 OK</span>
        <span className="time-badge">12ms</span>
      </div>
      
      <div className="json-container">
        <pre>
          <code className="json-code">
            {`{
  "status": "success",
  "data": {
    "experience": [`}
            {portfolioData.experience.map((exp, i) => (
              <div key={exp.id} className="json-item">
                {`      {
        "role": "${exp.role}",
        "company": "${exp.company}",
        "period": "${exp.date}",
        "highlights": [
${exp.points.map(p => `          "${p}"`).join(',\n')}
        ]
      }${i < portfolioData.experience.length - 1 ? ',' : ''}`}
              </div>
            ))}
            {`    ],
    "education": {
      "degree": "B.Tech, Artificial Intelligence & Data Science",
      "institution": "Amrita Vishwa Vidyapeetham",
      "period": "Aug 2024 – Present",
      "cgpa": "8.44/10.00"
    }
  }
}`}
          </code>
        </pre>
      </div>
    </div>
  );
};
