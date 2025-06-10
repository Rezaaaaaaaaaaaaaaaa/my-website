import React, { useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGoogleScholar, FaGlobe, FaPaperPlane } from 'react-icons/fa';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    subject: '',
    message: '',
    projectType: ''
  });
  
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');
  
  const projectTypes = [
    'Environmental Consulting',
    'Water Treatment Design',
    'Watershed Modeling',
    'Research Collaboration',
    'Technical Assessment',
    'Policy Development',
    'Other'
  ];
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    if (formErrors[name]) {
      setFormErrors({
        ...formErrors,
        [name]: ''
      });
    }
  };
  
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
    } else if (formData.message.trim().length < 20) {
      errors.message = 'Message must be at least 20 characters';
    }
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    setSubmitError('');
    
    // Simulate form submission
    setTimeout(() => {
      try {
        setIsSubmitting(false);
        setSubmitSuccess(true);
        setFormData({
          name: '',
          email: '',
          organization: '',
          subject: '',
          message: '',
          projectType: ''
        });
        
        setTimeout(() => {
          setSubmitSuccess(false);
        }, 5000);
      } catch (error) {
        setIsSubmitting(false);
        setSubmitError('Failed to send message. Please try again later.');
      }
    }, 2000);
  };

  return (
    <div className="contact-page">
      <section className="page-header enhanced-header">
        <div className="header-content">
          <h1>Contact & Collaboration</h1>
          <p>Ready to tackle your environmental challenges together? Let's discuss how we can create sustainable solutions.</p>
        </div>
      </section>

      <section className="contact-container">
        <div className="contact-info-section modern-section">
          <div className="section-header">
            <h2>Get in Touch</h2>
            <p className="section-subtitle">Multiple ways to connect and start your project</p>
          </div>
          
          <div className="contact-methods">
            <div className="contact-method enhanced-card">
              <div className="contact-icon">
                <FaEnvelope />
              </div>
              <div className="contact-details">
                <h3>Email</h3>
                <p>reza.moghaddam@niwa.co.nz</p>
                <span className="contact-note">Primary contact for project inquiries</span>
              </div>
            </div>
            
            <div className="contact-method enhanced-card">
              <div className="contact-icon">
                <FaPhone />
              </div>
              <div className="contact-details">
                <h3>Phone</h3>
                <p>+64 21 0805 2489</p>
                <span className="contact-note">Available for consultations</span>
              </div>
            </div>
            
            <div className="contact-method enhanced-card">
              <div className="contact-icon">
                <FaMapMarkerAlt />
              </div>
              <div className="contact-details">
                <h3>Location</h3>
                <p>New Zealand</p>
                <span className="contact-note">Available for projects nationwide</span>
              </div>
            </div>
          </div>

          <div className="professional-links-section">
            <h3>Professional Profiles</h3>
            <div className="professional-links">
              <a href="https://nz.linkedin.com/in/reza-moghaddam" target="_blank" rel="noopener noreferrer" className="social-link enhanced-card">
                <FaLinkedin className="social-icon" />
                <div>
                  <h4>LinkedIn</h4>
                  <p>Professional network & updates</p>
                </div>
              </a>
              
              <a href="https://scholar.google.com/citations" target="_blank" rel="noopener noreferrer" className="social-link enhanced-card">
                <FaGoogleScholar className="social-icon" />
                <div>
                  <h4>Google Scholar</h4>
                  <p>Research publications & citations</p>
                </div>
              </a>
              
              <a href="https://niwa.co.nz/staff-profile" target="_blank" rel="noopener noreferrer" className="social-link enhanced-card">
                <FaGlobe className="social-icon" />
                <div>
                  <h4>NIWA Profile</h4>
                  <p>Institutional affiliation & research</p>
                </div>
              </a>
            </div>
          </div>
          
          <div className="consultation-info enhanced-card">
            <h3>Consultation Services</h3>
            <p>I offer expert consulting in these key areas:</p>
            <ul className="service-list">
              <li>Environmental Systems Modeling & Digital Twins</li>
              <li>Water Treatment Technology & Process Engineering</li>
              <li>Nature-Based Solutions & Green Infrastructure</li>
              <li>Geospatial Analysis & Data Science</li>
              <li>Regulatory Compliance & Environmental Assessment</li>
              <li>Research & Development Collaboration</li>
            </ul>
          </div>
        </div>

        <div className="contact-form-section modern-section">
          <div className="section-header">
            <h2>Send a Message</h2>
            <p className="section-subtitle">Start the conversation about your project</p>
          </div>
          
          {submitSuccess && (
            <div className="form-success enhanced-card">
              <FaPaperPlane className="success-icon" />
              <h3>Message Sent Successfully!</h3>
              <p>Thank you for reaching out. I'll get back to you within 24 hours to discuss your project.</p>
            </div>
          )}
          
          {submitError && (
            <div className="form-error enhanced-card">
              <h3>Message Failed</h3>
              <p>{submitError}</p>
            </div>
          )}
          
          <form className="contact-form enhanced-card" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Full Name *</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                />
                {formErrors.name && <span className="error-message">{formErrors.name}</span>}
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email Address *</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                />
                {formErrors.email && <span className="error-message">{formErrors.email}</span>}
              </div>
            </div>
            
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="organization">Organization</label>
                <input 
                  type="text" 
                  id="organization" 
                  name="organization" 
                  value={formData.organization}
                  onChange={handleChange}
                  placeholder="Your organization or company"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="projectType">Project Type</label>
                <select 
                  id="projectType" 
                  name="projectType" 
                  value={formData.projectType}
                  onChange={handleChange}
                >
                  <option value="">Select project type</option>
                  {projectTypes.map((type, index) => (
                    <option key={index} value={type}>{type}</option>
                  ))}
                </select>
              </div>
            </div>
            
            <div className="form-group">
              <label htmlFor="subject">Subject *</label>
              <input 
                type="text" 
                id="subject" 
                name="subject" 
                value={formData.subject}
                onChange={handleChange}
                placeholder="Brief description of your project or inquiry"
              />
              {formErrors.subject && <span className="error-message">{formErrors.subject}</span>}
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Project Details *</label>
              <textarea 
                id="message" 
                name="message" 
                rows="6" 
                value={formData.message}
                onChange={handleChange}
                placeholder="Please provide details about your project, timeline, specific requirements, and any questions you have. The more information you provide, the better I can assist you."
              ></textarea>
              {formErrors.message && <span className="error-message">{formErrors.message}</span>}
            </div>
            
            <button 
              type="submit" 
              className="btn primary-btn enhanced-btn submit-btn"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <div className="loading-spinner"></div>
                  Sending Message...
                </>
              ) : (
                <>
                  <FaPaperPlane />
                  Send Message
                </>
              )}
            </button>
          </form>
        </div>
      </section>
      
      <div className="consultation-cta enhanced-cta">
        <div className="cta-content">
          <h3>Ready to Start Your Environmental Project?</h3>
          <p>
            Whether you need innovative water treatment solutions, comprehensive environmental modeling, 
            or sustainable engineering design, I'm here to help transform your challenges into opportunities. 
            Let's collaborate to create solutions that benefit both your objectives and the environment.
          </p>
          <div className="cta-features">
            <div className="feature-item">
              <h4>Expert Consultation</h4>
              <p>Comprehensive analysis and strategic planning</p>
            </div>
            <div className="feature-item">
              <h4>Innovative Solutions</h4>
              <p>Cutting-edge technology and sustainable approaches</p>
            </div>
            <div className="feature-item">
              <h4>Proven Results</h4>
              <p>Track record of successful project delivery</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
