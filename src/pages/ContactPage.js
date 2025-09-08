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
import Logo from '../components/Logo';

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
      const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
      const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
      const userId = process.env.REACT_APP_EMAILJS_USER_ID;

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
              Ready to discuss your process engineering challenges? Connect with our PhD-led engineering 
              consultancy for expert advice on chemical processes, bioprocess systems, water treatment, 
              and regulatory compliance. We provide research-informed, practical solutions tailored 
              to your specific requirements and New Zealand conditions.
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
                Our engineering consultancy is ready to assist with your process engineering 
                needs. Contact us to discuss your project requirements, and we'll provide 
                professional guidance and technical solutions tailored to your specific 
                applications and regulatory requirements.
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

            {/* Why Choose Us - Enhanced with Branding */}
            <div className="mt-12 p-8 bg-gradient-to-br from-teal-50 to-blue-50 rounded-xl border border-teal-200 shadow-lg">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-slate-800">Why Choose RMES?</h3>
                <Logo size="small" variant="icon" animated={true} />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <FaCheckCircle className="text-teal-600 flex-shrink-0" />
                    <span>Professional engineering consultation and technical assessment</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <FaCheckCircle className="text-teal-600 flex-shrink-0" />
                    <span>New Zealand-based consultancy with local regulatory knowledge</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <FaCheckCircle className="text-teal-600 flex-shrink-0" />
                    <span>Solutions designed for NZ regulations and operating conditions</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <FaCheckCircle className="text-teal-600 flex-shrink-0" />
                    <span>Transparent project approach and professional service</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <FaCheckCircle className="text-teal-600 flex-shrink-0" />
                    <span>Technical documentation and engineering support</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <FaCheckCircle className="text-teal-600 flex-shrink-0" />
                    <span>Focus on practical, implementable engineering solutions</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Consultation Process */}
      <section className="section" style={{backgroundColor: 'var(--gray-100)'}}>
        <div className="container">
          <div className="section-header">
            <h2>Our Engineering Consultation Process</h2>
            <p className="section-description">
              Structured approach to delivering professional engineering solutions with clear deliverables and timelines
            </p>
          </div>
          
          <div className="space-y-8">
            <div className="card">
              <h3 className="text-xl font-bold text-teal-700 mb-6">Phase 1: Initial Consultation & Project Scoping</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">Activities & Approach</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• <strong>Free initial consultation</strong> to understand project requirements</li>
                    <li>• Review existing documentation, process data, and regulatory requirements</li>
                    <li>• Site visit and existing system assessment (if applicable)</li>
                    <li>• Stakeholder interviews to understand constraints and objectives</li>
                    <li>• Preliminary technical feasibility assessment</li>
                    <li>• Definition of project scope, boundaries, and success criteria</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Deliverables & Timeline</h4>
                  <div className="bg-teal-50 p-4 rounded-lg">
                    <div className="space-y-2 text-sm">
                      <div><strong>Timeline:</strong> 1-2 weeks</div>
                      <div><strong>Deliverables:</strong></div>
                      <ul className="ml-4 space-y-1">
                        <li>• Project scoping document</li>
                        <li>• Preliminary assessment report</li>
                        <li>• Regulatory requirements summary</li>
                        <li>• Detailed proposal with work breakdown</li>
                        <li>• Cost estimate and project timeline</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="card">
              <h3 className="text-xl font-bold text-teal-700 mb-6">Phase 2: Technical Analysis & Design Development</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">Engineering Activities</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Detailed process analysis and mass/energy balance calculations</li>
                    <li>• Technology evaluation and selection with trade-off analysis</li>
                    <li>• Process modeling and simulation using industry software</li>
                    <li>• Equipment sizing and specification development</li>
                    <li>• P&ID development and process control strategy</li>
                    <li>• Risk assessment and safety analysis (HAZOP, FMEA)</li>
                    <li>• Environmental impact assessment and compliance verification</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Technical Deliverables</h4>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <div className="space-y-2 text-sm">
                      <div><strong>Timeline:</strong> 2-6 weeks (project dependent)</div>
                      <div><strong>Technical Documents:</strong></div>
                      <ul className="ml-4 space-y-1">
                        <li>• Process flow diagrams (PFDs)</li>
                        <li>• Piping and instrumentation diagrams (P&IDs)</li>
                        <li>• Mass and energy balance calculations</li>
                        <li>• Equipment specification sheets</li>
                        <li>• Design basis document</li>
                        <li>• Safety and risk analysis report</li>
                        <li>• Regulatory compliance documentation</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="card">
              <h3 className="text-xl font-bold text-teal-700 mb-6">Phase 3: Implementation Support & Project Management</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">Implementation Services</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Detailed engineering and construction documentation</li>
                    <li>• Tender specification preparation and vendor evaluation</li>
                    <li>• Construction oversight and quality assurance</li>
                    <li>• Commissioning support and performance testing</li>
                    <li>• Operator training and procedure development</li>
                    <li>• Regulatory approval support and consent applications</li>
                    <li>• Project coordination with contractors and suppliers</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Support Deliverables</h4>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <div className="space-y-2 text-sm">
                      <div><strong>Timeline:</strong> Throughout implementation phase</div>
                      <div><strong>Documentation:</strong></div>
                      <ul className="ml-4 space-y-1">
                        <li>• Detailed engineering drawings</li>
                        <li>• Construction specifications</li>
                        <li>• Commissioning procedures</li>
                        <li>• Operations and maintenance manuals</li>
                        <li>• Training materials and procedures</li>
                        <li>• Performance testing protocols</li>
                        <li>• Regulatory submission documents</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="card">
              <h3 className="text-xl font-bold text-teal-700 mb-6">Phase 4: Performance Validation & Ongoing Support</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">Validation & Optimization</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Performance testing and system validation</li>
                    <li>• Process optimization and fine-tuning</li>
                    <li>• Compliance verification and regulatory reporting</li>
                    <li>• Troubleshooting support and issue resolution</li>
                    <li>• Knowledge transfer to operational staff</li>
                    <li>• Continuous improvement recommendations</li>
                    <li>• Long-term technical support availability</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Final Deliverables</h4>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <div className="space-y-2 text-sm">
                      <div><strong>Timeline:</strong> 2-4 weeks post-commissioning</div>
                      <div><strong>Completion Package:</strong></div>
                      <ul className="ml-4 space-y-1">
                        <li>• Performance validation report</li>
                        <li>• As-built documentation package</li>
                        <li>• Compliance certification</li>
                        <li>• Optimization recommendations</li>
                        <li>• Maintenance schedule and procedures</li>
                        <li>• Project closure report</li>
                        <li>• Ongoing support agreement (optional)</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-8 p-6 bg-gradient-to-r from-teal-600 to-blue-600 text-white rounded-xl text-center">
            <h3 className="text-xl font-bold mb-4">Quality Assurance & Professional Standards</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
              <div>
                <h4 className="font-semibold mb-2">Technical Excellence</h4>
                <p>All calculations and designs undergo peer review and verification to ensure accuracy and compliance with engineering standards.</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Regulatory Compliance</h4>
                <p>Projects designed to meet New Zealand environmental regulations, WorkSafe requirements, and relevant industry standards.</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Documentation Standards</h4>
                <p>Comprehensive documentation following engineering best practices with clear traceability and professional certification.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;