import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaCheckCircle,
  FaExclamationTriangle,
  FaPhone,
  FaClock
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
      // EmailJS configuration
      const serviceId = 'service_rmes_nz';
      const templateId = 'template_rmes_contact';
      const userId = 'your_emailjs_user_id';

      const templateParams1 = {
        from_name: formData.name,
        from_email: formData.email,
        company: formData.company || 'Not specified',
        service: formData.service || 'Not specified',
        message: formData.message,
        to_email: 'che.eng@live.com',
        reply_to: formData.email
      };

      const templateParams2 = {
        from_name: formData.name,
        from_email: formData.email,
        company: formData.company || 'Not specified',
        service: formData.service || 'Not specified',
        message: formData.message,
        to_email: 'reza.moghaddam.nz@gmail.com',
        reply_to: formData.email
      };

      // Try EmailJS first - send to both recipients
      try {
        await Promise.all([
          emailjs.send(serviceId, templateId, templateParams1, userId),
          emailjs.send(serviceId, templateId, templateParams2, userId)
        ]);
        
        setStatus({
          type: 'success',
          message: 'Thank you! Your message has been sent successfully to che.eng@live.com and reza.moghaddam.nz@gmail.com. We will get back to you within 24 hours.'
        });

        // Reset form on success
        setFormData({
          name: '',
          email: '',
          company: '',
          service: '',
          message: ''
        });

      } catch (emailError) {
        console.log('EmailJS failed, trying fallback method:', emailError);
        
        // Fallback: Create mailto link and show instructions
        const subject = `RMES Contact Form: ${formData.service || 'General Inquiry'}`;
        const body = `Name: ${formData.name}\nEmail: ${formData.email}\nCompany: ${formData.company || 'Not specified'}\nService: ${formData.service || 'Not specified'}\n\nMessage:\n${formData.message}`;
        const mailtoLink = `mailto:che.eng@live.com,reza.moghaddam.nz@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        
        // Open default email client
        window.location.href = mailtoLink;
        
        setStatus({
          type: 'success',
          message: 'Your default email client should now open with a pre-filled message to che.eng@live.com and reza.moghaddam.nz@gmail.com. Please send the email to complete your inquiry.'
        });

        // Reset form
        setFormData({
          name: '',
          email: '',
          company: '',
          service: '',
          message: ''
        });
      }

    } catch (error) {
      console.error('Contact form error:', error);
      setStatus({
        type: 'error',
        message: 'Sorry, there was an error. Please contact us directly at che.eng@live.com or reza.moghaddam.nz@gmail.com or try again.'
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
            <h1>Contact RMES</h1>
            <p className="description">
              Ready to transform your engineering challenges into innovative, sustainable solutions? 
              Connect with our Kiwi engineering experts for a comprehensive consultation that 
              respects both your commercial objectives and New Zealand's environmental values.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info - Single Column Layout */}
      <section className="section">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            {/* Contact Information */}
            <div className="mb-12">
              <h2>Get In Touch</h2>
              <p className="mb-8">
                Our Kiwi engineering experts are ready to collaborate on your next project. 
                Contact us through any of the methods below, and we'll respond with a 
                tailored approach aligned with New Zealand's sustainability standards within 24 hours.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="card">
                  <div className="flex items-center gap-4">
                    <FaEnvelope className="text-2xl" style={{ color: 'var(--primary-green)' }} />
                    <div>
                      <h4>Email</h4>
                      <p>che.eng@live.com</p>
                      <small>We typically respond within 24 hours</small>
                    </div>
                  </div>
                </div>

                <div className="card">
                  <div className="flex items-center gap-4">
                    <FaMapMarkerAlt className="text-2xl" style={{ color: 'var(--primary-green)' }} />
                    <div>
                      <h4>Location</h4>
                      <p>Aotearoa New Zealand</p>
                      <small>Serving clients nationwide</small>
                    </div>
                  </div>
                </div>

                <div className="card">
                  <div className="flex items-center gap-4">
                    <FaPhone className="text-2xl" style={{ color: 'var(--primary-green)' }} />
                    <div>
                      <h4>Consultation</h4>
                      <p>Available by appointment</p>
                      <small>Free initial consultation</small>
                    </div>
                  </div>
                </div>

                <div className="card">
                  <div className="flex items-center gap-4">
                    <FaClock className="text-2xl" style={{ color: 'var(--primary-green)' }} />
                    <div>
                      <h4>Response Time</h4>
                      <p>Within 24 hours</p>
                      <small>Business days</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2>Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
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
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
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
                </div>

                <div className="form-group mb-6">
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
                  className="btn btn-primary w-full md:w-auto"
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
                <div 
                  className={`mt-6 p-4 rounded-lg border flex items-start gap-3 ${
                    status.type === 'success' 
                      ? 'bg-green-50 border-green-200 text-green-800' 
                      : 'bg-red-50 border-red-200 text-red-800'
                  }`}
                >
                  <div className="flex-shrink-0 mt-0.5">
                    {status.type === 'success' ? 
                      <FaCheckCircle className="text-green-600" /> : 
                      <FaExclamationTriangle className="text-red-600" />
                    }
                  </div>
                  <div className="text-sm">
                    {status.message}
                  </div>
                </div>
              )}
            </div>

            {/* Why Choose Us - Streamlined */}
            <div className="mt-12 p-6 bg-gray-50 rounded-lg">
              <h3>Why Choose RMES?</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <ul className="space-y-2">
                  <li>• Free initial consultation</li>
                  <li>• Expert Kiwi technical guidance</li>
                  <li>• Solutions tailored to NZ regulations</li>
                </ul>
                <ul className="space-y-2">
                  <li>• Competitive local pricing</li>
                  <li>• Professional project management</li>
                  <li>• Environmental compliance expertise</li>
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