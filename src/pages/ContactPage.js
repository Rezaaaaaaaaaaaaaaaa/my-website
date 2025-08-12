import React, { useState } from 'react';
// import emailjs from 'emailjs-com';
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaCheckCircle,
  FaExclamationTriangle
} from 'react-icons/fa';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: ''
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    try {
      // EmailJS configuration - you'll need to set these up
      // Removed unused variables: serviceId, templateId, userId, templateParams

      // For now, simulate successful submission
      // Uncomment the line below when EmailJS is configured
      // await emailjs.send(serviceId, templateId, templateParams, userId);

      // Simulate delay
      await new Promise(resolve => setTimeout(resolve, 1000));

      setStatus({
        type: 'success',
        message: 'Thank you! Your message has been sent successfully. We will get back to you within 24 hours.'
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        company: '',
        service: '',
        message: ''
      });

    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Sorry, there was an error sending your message. Please try again or contact us directly.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      {/* Page Header */}
      <section className="hero" style={{ padding: 'var(--space-16) 0' }}>
        <div className="container">
          <div className="hero-content">
            <h1>Contact Us</h1>
            <p className="description">
              Ready to discuss your engineering challenges? Get in touch with our expert team
              for a consultation tailored to your specific needs.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section">
        <div className="container">
          <div className="grid grid-cols-2" style={{ gap: 'var(--space-12)' }}>
            {/* Contact Form */}
            <div>
              <h2>Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="mt-6">
                <div className="form-group">
                  <label className="form-label">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="form-input"
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-input"
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Company/Organization</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Service Interest</label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="form-select"
                  >
                    <option value="">Select a service...</option>
                    <option value="chemical-process">Chemical Process Engineering</option>
                    <option value="bioprocess">Bioprocess Engineering</option>
                    <option value="environmental">Environmental Solutions</option>
                    <option value="food-engineering">Food Engineering</option>
                    <option value="consulting">General Consulting</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="form-textarea"
                    rows="5"
                    placeholder="Please describe your project requirements, timeline, or any specific questions you have..."
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    'Sending...'
                  ) : (
                    <>
                      Send Message <FaPaperPlane />
                    </>
                  )}
                </button>
              </form>

              {/* Status Messages */}
              {status.message && (
                <div className={status.type === 'success' ? 'success-message' : 'error-message'}>
                  {status.type === 'success' ? <FaCheckCircle /> : <FaExclamationTriangle />}
                  {status.message}
                </div>
              )}
            </div>

            {/* Contact Information */}
            <div>
              <h2>Get In Touch</h2>
              <p className="mb-8">
                We're here to help with your engineering challenges. Contact us through
                any of the methods below, and we'll respond promptly.
              </p>

              <div className="card mb-6">
                <div className="flex items-center gap-4">
                  <FaEnvelope className="text-2xl" style={{ color: 'var(--primary-green)' }} />
                  <div>
                    <h4>Email</h4>
                    <p>che.eng@live.com</p>
                    <small>We typically respond within 24 hours</small>
                  </div>
                </div>
              </div>

              <div className="card mb-6">
                <div className="flex items-center gap-4">
                  <FaMapMarkerAlt className="text-2xl" style={{ color: 'var(--primary-green)' }} />
                  <div>
                    <h4>Location</h4>
                    <p>New Zealand</p>
                    <small>Serving clients nationwide</small>
                  </div>
                </div>
              </div>

              <div className="card">
                <h4>Why Contact Us?</h4>
                <ul>
                  <li className="mb-2">• Free initial consultation</li>
                  <li className="mb-2">• Expert technical guidance</li>
                  <li className="mb-2">• Tailored solutions for your industry</li>
                  <li className="mb-2">• Competitive pricing</li>
                  <li className="mb-2">• Professional project management</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;