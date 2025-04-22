import React, { useState } from 'react';
import logo from '../assets/logos/small-logo.svg';

const ContactPage = () => {
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    service: '',
    message: ''
  });
  
  // Validation state
  const [formErrors, setFormErrors] = useState({});
  
  // Form submission state
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');
  
  // Services list for dropdown
  const services = [
    'Municipal Wastewater Treatment',
    'Agricultural Wastewater Treatment',
    'Water & Wastewater Reticulation Design',
    'Catchment & Water Resource Modeling',
    'Chemical & Food Processing Optimization',
    'Other/Multiple Services'
  ];
  
  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Clear errors when user starts typing
    if (formErrors[name]) {
      setFormErrors({
        ...formErrors,
        [name]: ''
      });
    }
  };
  
  // Validate form
  const validateForm = () => {
    const errors = {};
    
    if (!formData.name.trim()) {
      errors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
      errors.email = 'Please enter a valid email address';
    }
    
    if (!formData.subject.trim()) {
      errors.subject = 'Subject is required';
    }
    
    if (!formData.message.trim()) {
      errors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      errors.message = 'Message must be at least 10 characters';
    }
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };
  
  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate form
    if (!validateForm()) {
      return;
    }
    
    // Set submitting state
    setIsSubmitting(true);
    
    // Simulate form submission (would be replaced with actual API call)
    setTimeout(() => {
      try {
        // Simulating successful submission
        setIsSubmitting(false);
        setSubmitSuccess(true);
        setFormData({
          name: '',
          email: '',
          subject: '',
          service: '',
          message: ''
        });
        
        // Reset success message after 5 seconds
        setTimeout(() => {
          setSubmitSuccess(false);
        }, 5000);
      } catch (error) {
        // This uses the setSubmitError function to fix the ESLint error
        setIsSubmitting(false);
        setSubmitError('There was a problem submitting your inquiry. Please try again or contact us directly.');
        
        // Reset error message after 5 seconds
        setTimeout(() => {
          setSubmitError('');
        }, 5000);
      }
    }, 1500);
  };

  return (
    <div className="contact-page">
      <section className="page-header">
        <h1>Contact Me</h1>
        <p>Get in touch for collaborations, consultations, or inquiries about my services</p>
      </section>

      <section className="contact-container">
        <div className="contact-info">
          <div className="contact-logo" style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <img src={logo} alt="RMES Logo" style={{ width: '60px', height: '60px' }} />
            <h2 style={{ marginTop: '1rem' }}>Contact Information</h2>
          </div>
          
          <div className="contact-details">
            <div className="contact-item" style={{ 
              display: 'flex', 
              alignItems: 'center', 
              marginBottom: '1rem',
              background: 'white',
              padding: '1rem',
              borderRadius: '8px',
              boxShadow: '0 3px 10px rgba(0,0,0,0.08)'
            }}>
              <div style={{ marginRight: '1rem', color: '#1a5276' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </div>
              <div>
                <span className="contact-label" style={{ fontWeight: 'bold', display: 'block' }}>Email:</span>
                <span className="contact-value">che.eng@live.com</span>
              </div>
            </div>
            
            <div className="contact-item" style={{ 
              display: 'flex', 
              alignItems: 'center', 
              marginBottom: '1rem',
              background: 'white',
              padding: '1rem',
              borderRadius: '8px',
              boxShadow: '0 3px 10px rgba(0,0,0,0.08)'
            }}>
              <div style={{ marginRight: '1rem', color: '#1a5276' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </div>
              <div>
                <span className="contact-label" style={{ fontWeight: 'bold', display: 'block' }}>Phone:</span>
                <span className="contact-value">+642108052489</span>
              </div>
            </div>
            
            <div className="contact-item" style={{ 
              display: 'flex', 
              alignItems: 'center', 
              marginBottom: '1rem',
              background: 'white',
              padding: '1rem',
              borderRadius: '8px',
              boxShadow: '0 3px 10px rgba(0,0,0,0.08)'
            }}>
              <div style={{ marginRight: '1rem', color: '#1a5276' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </div>
              <div>
                <span className="contact-label" style={{ fontWeight: 'bold', display: 'block' }}>Based in:</span>
                <span className="contact-value">New Zealand</span>
              </div>
            </div>
          </div>

          <div className="services-info" style={{ margin: '2rem 0' }}>
            <h3 style={{ color: '#1a5276', marginBottom: '1rem' }}>Consultancy Services</h3>
            <ul style={{ listStyleType: 'disc', marginLeft: '1.5rem' }}>
              <li>Wastewater Treatment Design & Optimization</li>
              <li>Water & Wastewater Reticulation Design</li>
              <li>Catchment & Water Resource Modeling</li>
              <li>Chemical & Food Processing Optimization</li>
              <li>Environmental Compliance & Assessment</li>
            </ul>
          </div>

          <div className="social-links" style={{ margin: '2rem 0' }}>
            <h3 style={{ color: '#1a5276', marginBottom: '1rem' }}>Professional Profiles</h3>
            <div className="social-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer" 
                style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  background: 'white', 
                  padding: '0.75rem', 
                  borderRadius: '8px',
                  color: '#0077B5',
                  boxShadow: '0 3px 10px rgba(0,0,0,0.08)',
                  transition: 'transform 0.3s ease'
                }}
                className="social-link hover-transform"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '0.5rem' }}>
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
                LinkedIn
              </a>
              <a href="https://www.researchgate.net/profile/your-profile" target="_blank" rel="noopener noreferrer" 
                style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  background: 'white', 
                  padding: '0.75rem', 
                  borderRadius: '8px',
                  color: '#00CCBB',
                  boxShadow: '0 3px 10px rgba(0,0,0,0.08)',
                  transition: 'transform 0.3s ease'
                }}
                className="social-link hover-transform"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '0.5rem' }}>
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                </svg>
                ResearchGate
              </a>
              <a href="https://scholar.google.com/citations?user=your-id" target="_blank" rel="noopener noreferrer" 
                style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  background: 'white', 
                  padding: '0.75rem', 
                  borderRadius: '8px',
                  color: '#4285F4',
                  boxShadow: '0 3px 10px rgba(0,0,0,0.08)',
                  transition: 'transform 0.3s ease'
                }}
                className="social-link hover-transform"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '0.5rem' }}>
                  <circle cx="12" cy="12" r="10"></circle>
                  <circle cx="12" cy="12" r="4"></circle>
                  <line x1="4.93" y1="4.93" x2="9.17" y2="9.17"></line>
                  <line x1="14.83" y1="14.83" x2="19.07" y2="19.07"></line>
                  <line x1="14.83" y1="9.17" x2="19.07" y2="4.93"></line>
                  <line x1="14.83" y1="9.17" x2="18.36" y2="5.64"></line>
                  <line x1="4.93" y1="19.07" x2="9.17" y2="14.83"></line>
                </svg>
                Google Scholar
              </a>
              <a href="https://niwa.co.nz/profile" target="_blank" rel="noopener noreferrer" 
                style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  background: 'white', 
                  padding: '0.75rem', 
                  borderRadius: '8px',
                  color: '#0070C0',
                  boxShadow: '0 3px 10px rgba(0,0,0,0.08)',
                  transition: 'transform 0.3s ease'
                }}
                className="social-link hover-transform"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '0.5rem' }}>
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
                NIWA Profile
              </a>
            </div>
          </div>
        </div>

        <div className="contact-form-container">
          <h2 style={{ color: '#1a5276', marginBottom: '1.5rem' }}>Send Me a Message</h2>
          
          {submitSuccess && (
            <div className="form-success">
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '0.5rem', color: '#155724' }}>
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
                Thank you for your message! I'll get back to you as soon as possible.
              </div>
            </div>
          )}
          
          {submitError && (
            <div className="form-error" style={{ background: '#f8d7da', color: '#721c24', padding: '1rem', borderRadius: '4px', marginBottom: '1rem' }}>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '0.5rem', color: '#721c24' }}>
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" y1="8" x2="12" y2="12"></line>
                  <line x1="12" y1="16" x2="12.01" y2="16"></line>
                </svg>
                {submitError}
              </div>
            </div>
          )}
          
          <form className="contact-form" onSubmit={handleSubmit} style={{ background: 'white', padding: '2rem', borderRadius: '8px', boxShadow: '0 5px 15px rgba(0,0,0,0.1)' }}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                value={formData.name}
                onChange={handleChange}
              />
              {formErrors.name && <span className="form-error">{formErrors.name}</span>}
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                value={formData.email}
                onChange={handleChange}
              />
              {formErrors.email && <span className="form-error">{formErrors.email}</span>}
            </div>
            
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input 
                type="text" 
                id="subject" 
                name="subject" 
                value={formData.subject}
                onChange={handleChange}
              />
              {formErrors.subject && <span className="form-error">{formErrors.subject}</span>}
            </div>
            
            <div className="form-group">
              <label htmlFor="service">Service of Interest (Optional)</label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                style={{ background: 'white' }}
              >
                <option value="">-- Select a service --</option>
                {services.map((service, index) => (
                  <option key={index} value={service}>{service}</option>
                ))}
              </select>
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea 
                id="message" 
                name="message" 
                rows="5" 
                value={formData.message}
                onChange={handleChange}
                placeholder="Please describe your project or inquiry. Include any specific details about your requirements or questions."
              ></textarea>
              {formErrors.message && <span className="form-error">{formErrors.message}</span>}
            </div>
            
            <button 
              type="submit" 
              className="btn primary-btn"
              disabled={isSubmitting}
              style={{ width: '100%', marginTop: '1rem' }}
            >
              {isSubmitting ? (
                <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '0.5rem', animation: 'rotate 2s linear infinite' }}>
                    <line x1="12" y1="2" x2="12" y2="6"></line>
                    <line x1="12" y1="18" x2="12" y2="22"></line>
                    <line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line>
                    <line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></line>
                    <line x1="2" y1="12" x2="6" y2="12"></line>
                    <line x1="18" y1="12" x2="22" y2="12"></line>
                    <line x1="4.93" y1="19.07" x2="7.76" y2="16.24"></line>
                    <line x1="16.24" y1="7.76" x2="19.07" y2="4.93"></line>
                  </svg>
                  Sending...
                </span>
              ) : 'Send Message'}
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
