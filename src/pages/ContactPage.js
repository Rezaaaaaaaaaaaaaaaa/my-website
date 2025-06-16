import React, { useState } from 'react';
import { 
  FaPhone, 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaBuilding,
  FaPaperPlane,
  FaUser,
  FaSubject,
  FaComments,
  FaClock,
  FaCheckCircle,
  FaGraduationCap,
  FaUserTie,
  FaAward
} from 'react-icons/fa';

import { 
  SiLinkedin, 
  SiGooglescholar 
} from 'react-icons/si';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 2000);
  };

  return (
    <div className="contact-page">
      {/* Enhanced Header */}
      <section className="contact-header enhanced-header">
        <div className="header-background">
          <div className="floating-icons">
            <FaEnvelope className="floating-icon icon-1" />
            <FaPhone className="floating-icon icon-2" />
            <SiLinkedin className="floating-icon icon-3" />
            <FaBuilding className="floating-icon icon-4" />
            <SiGooglescholar className="floating-icon icon-5" />
            <FaUserTie className="floating-icon icon-6" />
          </div>
        </div>
        <div className="header-content">
          <h1>Get In Touch</h1>
          <h2>Dr. Reza Moghaddam, PhD</h2>
          <p>Ready to collaborate on innovative environmental engineering solutions? Let's discuss how we can transform your environmental challenges into sustainable opportunities.</p>
          
          <div className="contact-credentials">
            <div className="credential-item">
              <FaGraduationCap className="credential-icon" />
              <span>PhD Environmental Engineering</span>
            </div>
            <div className="credential-item">
              <FaBuilding className="credential-icon" />
              <span>NIWA Research Scientist</span>
            </div>
            <div className="credential-item">
              <FaAward className="credential-icon" />
              <span>Engineering New Zealand Member</span>
            </div>
          </div>
        </div>
      </section>

      <div className="contact-container">
        {/* Contact Information & Form Section */}
        <section className="contact-main modern-section">
          <div className="contact-grid">
            {/* Contact Information Card */}
            <div className="contact-info-card enhanced-card">
              <div className="card-header">
                <FaUserTie className="section-icon" />
                <h3>Professional Contact Information</h3>
                <p>Multiple ways to connect and collaborate</p>
              </div>
              
              <div className="contact-methods">
                <div className="contact-method">
                  <div className="method-icon">
                    <FaPhone />
                  </div>
                  <div className="method-details">
                    <h4>Phone</h4>
                    <p>+64 21 080 52489</p>
                    <span className="availability">Available during NZ business hours</span>
                  </div>
                </div>

                <div className="contact-method">
                  <div className="method-icon">
                    <FaEnvelope />
                  </div>
                  <div className="method-details">
                    <h4>Email</h4>
                    <p>reza.moghaddam@niwa.co.nz</p>
                    <span className="availability">Response within 24-48 hours</span>
                  </div>
                </div>

                <div className="contact-method">
                  <div className="method-icon">
                    <FaBuilding />
                  </div>
                  <div className="method-details">
                    <h4>Organization</h4>
                    <p>National Institute of Water and Atmospheric Research (NIWA)</p>
                    <span className="availability">New Zealand</span>
                  </div>
                </div>

                <div className="contact-method">
                  <div className="method-icon">
                    <FaMapMarkerAlt />
                  </div>
                  <div className="method-details">
                    <h4>Location</h4>
                    <p>New Zealand</p>
                    <span className="availability">New Zealand Resident</span>
                  </div>
                </div>
              </div>

              <div className="professional-networks">
                <h4>Professional Networks</h4>
                <div className="network-links">
                  <a href="https://nz.linkedin.com/in/reza-moghaddam" target="_blank" rel="noopener noreferrer" className="network-link">
                    <SiLinkedin />
                    <span>LinkedIn Professional Profile</span>
                  </a>
                  <a href="https://scholar.google.com/citations" target="_blank" rel="noopener noreferrer" className="network-link">
                    <SiGooglescholar />
                    <span>Google Scholar Publications</span>
                  </a>
                  <a href="https://niwa.co.nz/staff-profile" target="_blank" rel="noopener noreferrer" className="network-link">
                    <FaBuilding />
                    <span>NIWA Research Profile</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="contact-form-card enhanced-card">
              <div className="card-header">
                <FaPaperPlane className="section-icon" />
                <h3>Send a Message</h3>
                <p>Start the conversation about your project</p>
              </div>

              {isSubmitted ? (
                <div className="success-message">
                  <FaCheckCircle className="success-icon" />
                  <h4>Message Sent Successfully!</h4>
                  <p>Thank you for reaching out. I'll get back to you within 24-48 hours to discuss your project.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="form-group">
                    <label htmlFor="name">
                      <FaUser className="form-icon" />
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      placeholder="Your full name"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">
                      <FaEnvelope className="form-icon" />
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="your.email@company.com"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="subject">
                      <FaSubject className="form-icon" />
                      Project Subject
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="">Select project type</option>
                      <option value="environmental-modeling">Environmental Systems Modeling</option>
                      <option value="water-treatment">Water Treatment Technology</option>
                      <option value="digital-twins">Digital Twin Development</option>
                      <option value="nature-based-solutions">Nature-Based Solutions</option>
                      <option value="geospatial-analysis">Geospatial Analysis</option>
                      <option value="research-collaboration">Research Collaboration</option>
                      <option value="consulting-services">General Consulting</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">
                      <FaComments className="form-icon" />
                      Project Details
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows="6"
                      placeholder="Please describe your project, timeline, and specific requirements..."
                    ></textarea>
                  </div>

                  <button 
                    type="submit" 
                    className="submit-btn enhanced-btn"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <FaClock className="btn-icon" />
                        Sending Message...
                      </>
                    ) : (
                      <>
                        <FaPaperPlane className="btn-icon" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="contact-services modern-section">
          <div className="section-header">
            <FaBuilding className="section-icon" />
            <h2>How Can I Help Your Organization?</h2>
            <p className="section-subtitle">Comprehensive environmental engineering solutions tailored to your needs</p>
          </div>
          
          <div className="services-grid">
            <div className="service-overview enhanced-card">
              <h4>Consulting Services</h4>
              <ul>
                <li>Environmental systems modeling and analysis</li>
                <li>Water treatment system design and optimization</li>
                <li>Digital twin development for infrastructure</li>
                <li>Nature-based solution implementation</li>
              </ul>
            </div>

            <div className="service-overview enhanced-card">
              <h4>Research Collaboration</h4>
              <ul>
                <li>Joint research projects and publications</li>
                <li>Grant proposal development and support</li>
                <li>Technical peer review and validation</li>
                <li>Academic-industry partnerships</li>
              </ul>
            </div>

            <div className="service-overview enhanced-card">
              <h4>Training & Workshops</h4>
              <ul>
                <li>Environmental modeling software training</li>
                <li>Water treatment technology workshops</li>
                <li>Sustainability assessment methods</li>
                <li>Professional development programs</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="contact-cta enhanced-cta">
          <div className="cta-content">
            <h3>Ready to Start Your Project?</h3>
            <p>
              Whether you need cutting-edge environmental modeling, innovative water treatment solutions, 
              or sustainable engineering consultancy, I'm here to help transform your challenges into opportunities.
            </p>
            <div className="cta-stats">
              <div className="stat">
                <span className="stat-number">24-48h</span>
                <span className="stat-label">Response Time</span>
              </div>
              <div className="stat">
                <span className="stat-number">10+</span>
                <span className="stat-label">Years Experience</span>
              </div>
              <div className="stat">
                <span className="stat-number">100%</span>
                <span className="stat-label">Confidential</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ContactPage;