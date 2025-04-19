import React, { useState } from 'react';
import { ReactComponent as EmailIcon } from '../assets/icons/email-icon.svg';
import { ReactComponent as PhoneIcon } from '../assets/icons/phone-icon.svg';
import { ReactComponent as LocationIcon } from '../assets/icons/location-icon.svg';
import { ReactComponent as LinkedInIcon } from '../assets/icons/linkedin-icon.svg';
import { ReactComponent as ResearchGateIcon } from '../assets/icons/researchgate-icon.svg';
import { ReactComponent as ScholarIcon } from '../assets/icons/scholar-icon.svg';

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
        <div className="page-header-content">
          <h1>Contact Me</h1>
          <p>Get in touch for collaborations, consultations, or inquiries about my services</p>
        </div>
      </section>

      <section className="contact-container">
        <div className="contact-info">
          <h2>Contact Information</h2>
          <div className="contact-details">
            <div className="contact-item">
              <EmailIcon className="contact-icon" />
              <div>
                <span className="contact-label">Email:</span>
                <span className="contact-value">che.eng@live.com</span>
              </div>
            </div>
            <div className="contact-item">
              <PhoneIcon className="contact-icon" />
              <div>
                <span className="contact-label">Phone:</span>
                <span className="contact-value">+642108052489</span>
              </div>
            </div>
            <div className="contact-item">
              <LocationIcon className="contact-icon" />
              <div>
                <span className="contact-label">Based in:</span>
                <span className="contact-value">New Zealand</span>
              </div>
            </div>
          </div>

          <div className="services-info">
            <h3>Consultancy Services</h3>
            <ul>
              <li>Wastewater Treatment Design & Optimization</li>
              <li>Water & Wastewater Reticulation Design</li>
              <li>Catchment & Water Resource Modeling</li>
              <li>Chemical & Food Processing Optimization</li>
              <li>Environmental Compliance & Assessment</li>
            </ul>
            <p>For detailed information about specific services, please visit the <a href="/services">Services</a> page.</p>
          </div>

          <div className="social-links">
            <h3>Professional Profiles</h3>
            <div className="social-grid">
              <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer" className="social-link">
                <LinkedInIcon />
                LinkedIn
              </a>
              <a href="https://www.researchgate.net/profile/your-profile" target="_blank" rel="noopener noreferrer" className="social-link">
                <ResearchGateIcon />
                ResearchGate
              </a>
              <a href="https://scholar.google.com/citations?user=your-id" target="_blank" rel="noopener noreferrer" className="social-link">
                <ScholarIcon />
                Google Scholar
              </a>
            </div>
          </div>
        </div>

        <div className="contact-form-container">
          <h2>Send Me a Message</h2>
          
          {submitSuccess && (
            <div className="form-success">
              Thank you for your message! I'll get back to you as soon as possible.
            </div>
          )}
          
          {submitError && (
            <div className="form-error">
              {submitError}
            </div>
          )}
          
          <form className="contact-form" onSubmit={handleSubmit}>
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
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
