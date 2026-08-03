import { useState } from 'react';
import './Contact.css';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [response, setResponse] = useState<null | {
    status: number;
    statusText: string;
    body: any;
  }>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate network request
    setTimeout(() => {
      setIsSubmitting(false);
      setResponse({
        status: 201,
        statusText: 'Created',
        body: {
          success: true,
          message: "Message queued for delivery.",
          ticketId: `REQ-${Math.floor(Math.random() * 10000)}`,
          timestamp: new Date().toISOString()
        }
      });
    }, 1200);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="page-container">
      <div className="api-header">
        <h2>POST /api/v1/contact</h2>
        <span className="status-badge pending">AWAITING PAYLOAD</span>
      </div>

      <div className="contact-container">
        {!response ? (
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">"name":</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder='"John Doe"'
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">"email":</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder='"john@example.com"'
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="message">"message":</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder='"Hello, I would like to connect..."'
                required
                rows={5}
              />
            </div>
            
            <button type="submit" className="submit-btn" disabled={isSubmitting}>
              {isSubmitting ? (
                <span className="btn-content">
                  <span className="spinner"></span> SENDING...
                </span>
              ) : (
                <span className="btn-content">EXECUTE REQUEST</span>
              )}
            </button>
          </form>
        ) : (
          <div className="response-container">
            <div className="http-response-header">
              HTTP/1.1 <span className="http-status">{response.status} {response.statusText}</span>
              <br />
              Date: {new Date().toUTCString()}
              <br />
              Content-Type: application/json
              <br />
              Connection: keep-alive
            </div>
            <pre className="http-response-body">
              {JSON.stringify(response.body, null, 2)}
            </pre>
            <button className="reset-btn" onClick={() => setResponse(null)}>
              NEW REQUEST
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
