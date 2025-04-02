import React from 'react';

const ContactPage = () => {
  return (
    <div className="contact-page">
      <section className="page-header">
        <h1>Contact Me</h1>
        <p>Get in touch for collaborations, consultations, or inquiries</p>
      </section>

      <section className="contact-container">
        <div className="contact-info">
          <h2>Contact Information</h2>
          <div className="contact-details">
            <div className="contact-item">
              <span className="contact-label">Email:</span>
              <span className="contact-value">che.eng@live.com</span>
            </div>
            <div className="contact-item">
              <span className="contact-label">Phone:</span>
              <span className="contact-value">+642108052489</span>
            </div>
            <div className="contact-item">
              <span className="contact-label">Based in:</span>
              <span className="contact-value">New Zealand</span>
            </div>
          </div>

          <div className="social-links">
            <h3>Professional Profiles</h3>
            <div className="social-grid">
              <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer" className="social-link">
                LinkedIn
              </a>
              <a href="https://www.researchgate.net/profile/your-profile" target="_blank" rel="noopener noreferrer" className="social-link">
                ResearchGate
              </a>
              <a href="https://scholar.google.com/citations?user=your-id" target="_blank" rel="noopener noreferrer" className="social-link">
                Google Scholar
              </a>
              <a href="https://niwa.co.nz/profile" target="_blank" rel="noopener noreferrer" className="social-link">
                NIWA Profile
              </a>
            </div>
          </div>
        </div>

        <div className="contact-form-container">
          <h2>Send Me a Message</h2>
          <form className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input type="text" id="subject" name="subject" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="5" required></textarea>
            </div>
            <button type="submit" className="btn primary-btn">Send Message</button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
