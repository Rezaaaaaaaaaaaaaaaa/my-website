import React, { useState } from 'react';
import { 
  FaUser, 
  FaEnvelope, 
  FaPhone, 
  FaBuilding,
  FaMapMarkerAlt,
  FaCheckCircle,
  FaArrowRight,
  FaArrowLeft
} from 'react-icons/fa';
import Modal from './Modal';
import LoadingSpinner from './LoadingSpinner';

const ConsultationBooking = ({ isOpen, onClose }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const [formData, setFormData] = useState({
    // Step 1: Basic Information
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    organization: '',
    position: '',
    location: '',
    
    // Step 2: Project Details
    serviceType: '',
    projectScope: '',
    projectDescription: '',
    timeline: '',
    budget: '',
    
    // Step 3: Compliance & Requirements
    complianceRequirements: [],
    regulatoryFrameworks: [],
    currentChallenges: '',
    successCriteria: '',
    
    // Step 4: Scheduling
    preferredDate: '',
    preferredTime: '',
    meetingType: 'virtual',
    urgency: 'standard'
  });

  const [errors, setErrors] = useState({});

  const serviceTypes = [
    { value: 'water-treatment', label: 'Water & Wastewater Treatment', icon: '💧' },
    { value: 'chemical-process', label: 'Chemical Process Engineering', icon: '⚗️' },
    { value: 'bioprocess', label: 'Bioprocess Engineering', icon: '🧬' },
    { value: 'food-engineering', label: 'Food Engineering', icon: '🥛' },
    { value: 'environmental', label: 'Environmental Consulting', icon: '🌱' },
    { value: 'analysis-digital', label: 'Analysis & Digital Services', icon: '📊' }
  ];

  const projectScopes = [
    { value: 'feasibility', label: 'Feasibility Study', description: 'Initial assessment and viability analysis' },
    { value: 'design', label: 'Process Design', description: 'Detailed engineering design and specifications' },
    { value: 'optimization', label: 'Process Optimization', description: 'Improving existing systems and processes' },
    { value: 'troubleshooting', label: 'Troubleshooting', description: 'Problem-solving for operational issues' },
    { value: 'compliance', label: 'Regulatory Compliance', description: 'Meeting NZ environmental standards' },
    { value: 'full-project', label: 'Complete Project Delivery', description: 'End-to-end project management' }
  ];

  const complianceOptions = [
    { value: 'rma', label: 'Resource Management Act (RMA)' },
    { value: 'nes', label: 'National Environmental Standards (NES)' },
    { value: 'nps-fw', label: 'National Policy Statement - Freshwater' },
    { value: 'drinking-water', label: 'Drinking Water Standards' },
    { value: 'food-safety', label: 'Food Safety Standards' },
    { value: 'health-safety', label: 'Health & Safety Regulations' },
    { value: 'building-consent', label: 'Building Consent Requirements' }
  ];

  const timeSlots = [
    { value: '09:00', label: '9:00 AM' },
    { value: '10:00', label: '10:00 AM' },
    { value: '11:00', label: '11:00 AM' },
    { value: '13:00', label: '1:00 PM' },
    { value: '14:00', label: '2:00 PM' },
    { value: '15:00', label: '3:00 PM' },
    { value: '16:00', label: '4:00 PM' }
  ];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
    
    // Clear error for this field
    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: null
      }));
    }
  };

  const handleArrayChange = (field, value, checked) => {
    setFormData(prev => ({
      ...prev,
      [field]: checked 
        ? [...prev[field], value]
        : prev[field].filter(item => item !== value)
    }));
  };

  const validateStep = (step) => {
    const newErrors = {};
    
    switch (step) {
      case 1:
        if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
        if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
        if (!formData.email.trim()) newErrors.email = 'Email is required';
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
          newErrors.email = 'Please enter a valid email address';
        }
        if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
        if (!formData.organization.trim()) newErrors.organization = 'Organization is required';
        if (!formData.location.trim()) newErrors.location = 'Location is required';
        break;
        
      case 2:
        if (!formData.serviceType) newErrors.serviceType = 'Please select a service type';
        if (!formData.projectScope) newErrors.projectScope = 'Please select project scope';
        if (!formData.projectDescription.trim()) {
          newErrors.projectDescription = 'Project description is required';
        } else if (formData.projectDescription.trim().length < 50) {
          newErrors.projectDescription = 'Please provide more detail (minimum 50 characters)';
        }
        if (!formData.timeline) newErrors.timeline = 'Please select a timeline';
        break;
        
      case 3:
        if (formData.complianceRequirements.length === 0) {
          newErrors.complianceRequirements = 'Please select at least one compliance requirement';
        }
        if (!formData.currentChallenges.trim()) {
          newErrors.currentChallenges = 'Please describe your current challenges';
        }
        break;
        
      case 4:
        if (!formData.preferredDate) newErrors.preferredDate = 'Please select a preferred date';
        if (!formData.preferredTime) newErrors.preferredTime = 'Please select a preferred time';
        break;
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => Math.min(prev + 1, 4));
    }
  };

  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const handleSubmit = async () => {
    if (!validateStep(4)) return;
    
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Here you would typically send the data to your backend
      console.log('Consultation booking data:', formData);
      
      setIsSubmitted(true);
    } catch (error) {
      console.error('Error submitting consultation booking:', error);
      // Handle error appropriately
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setCurrentStep(1);
    setIsSubmitted(false);
    setFormData({
      firstName: '', lastName: '', email: '', phone: '', organization: '',
      position: '', location: '', serviceType: '', projectScope: '',
      projectDescription: '', timeline: '', budget: '', complianceRequirements: [],
      regulatoryFrameworks: [], currentChallenges: '', successCriteria: '',
      preferredDate: '', preferredTime: '', meetingType: 'virtual', urgency: 'standard'
    });
    setErrors({});
  };

  if (isSubmitted) {
    return (
      <Modal isOpen={isOpen} onClose={onClose} title="Consultation Booked!" size="medium">
        <div style={{ textAlign: 'center', padding: '2rem 0' }}>
          <div style={{ fontSize: '4rem', color: 'var(--primary-green)', marginBottom: '1.5rem' }}>
            <FaCheckCircle />
          </div>
          <h3 style={{ color: 'var(--text-dark)', marginBottom: '1rem' }}>
            Thank you, {formData.firstName}!
          </h3>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-medium)', marginBottom: '1.5rem' }}>
            Your consultation has been scheduled for{' '}
            <strong>{new Date(formData.preferredDate).toLocaleDateString('en-NZ')}</strong>{' '}
            at <strong>{formData.preferredTime}</strong>.
          </p>
          <div style={{ 
            background: '#f0fdff', 
            border: '1px solid #b3e5fc',
            borderRadius: '8px',
            padding: '1.5rem',
            marginBottom: '2rem'
          }}>
            <h4 style={{ color: 'var(--accent-teal)', marginTop: 0 }}>What happens next?</h4>
            <ul style={{ textAlign: 'left', color: 'var(--text-medium)' }}>
              <li>You'll receive a confirmation email within 15 minutes</li>
              <li>Our team will review your project details</li>
              <li>We'll send calendar invite and meeting details 24 hours before</li>
              <li>Prepare any relevant documents or drawings to share</li>
            </ul>
          </div>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
            <button
              onClick={() => {
                resetForm();
                onClose();
              }}
              style={{
                background: 'linear-gradient(135deg, var(--accent-teal) 0%, var(--primary-blue) 100%)',
                color: 'white',
                border: 'none',
                padding: '0.75rem 2rem',
                borderRadius: '6px',
                fontWeight: '600',
                cursor: 'pointer'
              }}
            >
              Close
            </button>
            <button
              onClick={resetForm}
              style={{
                background: 'transparent',
                color: 'var(--accent-teal)',
                border: '2px solid var(--accent-teal)',
                padding: '0.75rem 2rem',
                borderRadius: '6px',
                fontWeight: '600',
                cursor: 'pointer'
              }}
            >
              Book Another
            </button>
          </div>
        </div>
      </Modal>
    );
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Book Your Engineering Consultation" size="large">
      {isSubmitting && (
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 10 }}>
          <LoadingSpinner 
            overlay={true} 
            text="Scheduling your consultation..." 
            size="large" 
          />
        </div>
      )}
      
      {/* Progress Bar */}
      <div style={{ marginBottom: '2rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
          {[1, 2, 3, 4].map(step => (
            <div 
              key={step}
              style={{ 
                fontSize: '0.8rem',
                color: currentStep >= step ? 'var(--accent-teal)' : 'var(--text-light)',
                fontWeight: currentStep >= step ? '600' : '400'
              }}
            >
              Step {step}
            </div>
          ))}
        </div>
        <div style={{ 
          height: '4px', 
          background: '#e2e8f0', 
          borderRadius: '2px',
          position: 'relative'
        }}>
          <div style={{ 
            height: '100%',
            background: 'linear-gradient(135deg, var(--accent-teal) 0%, var(--primary-blue) 100%)',
            borderRadius: '2px',
            width: `${(currentStep / 4) * 100}%`,
            transition: 'width 0.3s ease'
          }} />
        </div>
      </div>

      {/* Step Content */}
      <div style={{ minHeight: '400px' }}>
        {/* Step 1: Basic Information */}
        {currentStep === 1 && (
          <div>
            <h3 style={{ color: 'var(--text-dark)', marginBottom: '1.5rem' }}>
              Tell us about yourself
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>
                  <FaUser style={{ marginRight: '0.5rem', color: 'var(--accent-teal)' }} />
                  First Name *
                </label>
                <input
                  type="text"
                  value={formData.firstName}
                  onChange={(e) => handleInputChange('firstName', e.target.value)}
                  style={{ 
                    width: '100%', 
                    padding: '0.75rem',
                    border: errors.firstName ? '2px solid #ef4444' : '2px solid #e2e8f0',
                    borderRadius: '6px',
                    fontSize: '1rem'
                  }}
                />
                {errors.firstName && (
                  <div style={{ color: '#ef4444', fontSize: '0.8rem', marginTop: '0.25rem' }}>
                    {errors.firstName}
                  </div>
                )}
              </div>
              
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>
                  Last Name *
                </label>
                <input
                  type="text"
                  value={formData.lastName}
                  onChange={(e) => handleInputChange('lastName', e.target.value)}
                  style={{ 
                    width: '100%', 
                    padding: '0.75rem',
                    border: errors.lastName ? '2px solid #ef4444' : '2px solid #e2e8f0',
                    borderRadius: '6px',
                    fontSize: '1rem'
                  }}
                />
                {errors.lastName && (
                  <div style={{ color: '#ef4444', fontSize: '0.8rem', marginTop: '0.25rem' }}>
                    {errors.lastName}
                  </div>
                )}
              </div>
            </div>
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginTop: '1rem' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>
                  <FaEnvelope style={{ marginRight: '0.5rem', color: 'var(--accent-teal)' }} />
                  Email Address *
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  style={{ 
                    width: '100%', 
                    padding: '0.75rem',
                    border: errors.email ? '2px solid #ef4444' : '2px solid #e2e8f0',
                    borderRadius: '6px',
                    fontSize: '1rem'
                  }}
                />
                {errors.email && (
                  <div style={{ color: '#ef4444', fontSize: '0.8rem', marginTop: '0.25rem' }}>
                    {errors.email}
                  </div>
                )}
              </div>
              
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>
                  <FaPhone style={{ marginRight: '0.5rem', color: 'var(--accent-teal)' }} />
                  Phone Number *
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  style={{ 
                    width: '100%', 
                    padding: '0.75rem',
                    border: errors.phone ? '2px solid #ef4444' : '2px solid #e2e8f0',
                    borderRadius: '6px',
                    fontSize: '1rem'
                  }}
                />
                {errors.phone && (
                  <div style={{ color: '#ef4444', fontSize: '0.8rem', marginTop: '0.25rem' }}>
                    {errors.phone}
                  </div>
                )}
              </div>
            </div>
            
            <div style={{ marginTop: '1rem' }}>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>
                <FaBuilding style={{ marginRight: '0.5rem', color: 'var(--accent-teal)' }} />
                Organization *
              </label>
              <input
                type="text"
                value={formData.organization}
                onChange={(e) => handleInputChange('organization', e.target.value)}
                style={{ 
                  width: '100%', 
                  padding: '0.75rem',
                  border: errors.organization ? '2px solid #ef4444' : '2px solid #e2e8f0',
                  borderRadius: '6px',
                  fontSize: '1rem'
                }}
              />
              {errors.organization && (
                <div style={{ color: '#ef4444', fontSize: '0.8rem', marginTop: '0.25rem' }}>
                  {errors.organization}
                </div>
              )}
            </div>
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginTop: '1rem' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>
                  Position/Title
                </label>
                <input
                  type="text"
                  value={formData.position}
                  onChange={(e) => handleInputChange('position', e.target.value)}
                  style={{ 
                    width: '100%', 
                    padding: '0.75rem',
                    border: '2px solid #e2e8f0',
                    borderRadius: '6px',
                    fontSize: '1rem'
                  }}
                />
              </div>
              
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>
                  <FaMapMarkerAlt style={{ marginRight: '0.5rem', color: 'var(--accent-teal)' }} />
                  Location (City/Region) *
                </label>
                <input
                  type="text"
                  value={formData.location}
                  onChange={(e) => handleInputChange('location', e.target.value)}
                  placeholder="e.g., Auckland, Canterbury"
                  style={{ 
                    width: '100%', 
                    padding: '0.75rem',
                    border: errors.location ? '2px solid #ef4444' : '2px solid #e2e8f0',
                    borderRadius: '6px',
                    fontSize: '1rem'
                  }}
                />
                {errors.location && (
                  <div style={{ color: '#ef4444', fontSize: '0.8rem', marginTop: '0.25rem' }}>
                    {errors.location}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Add other steps here - Step 2, 3, 4 would follow similar patterns */}
        {/* For brevity, I'll include just Step 2 as an example */}

        {/* Step 2: Project Details */}
        {currentStep === 2 && (
          <div>
            <h3 style={{ color: 'var(--text-dark)', marginBottom: '1.5rem' }}>
              Project Details
            </h3>
            
            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{ display: 'block', marginBottom: '0.75rem', fontWeight: '600' }}>
                Service Type Required *
              </label>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.75rem' }}>
                {serviceTypes.map((service) => (
                  <button
                    key={service.value}
                    type="button"
                    onClick={() => handleInputChange('serviceType', service.value)}
                    style={{
                      padding: '1rem',
                      border: formData.serviceType === service.value 
                        ? '2px solid var(--accent-teal)' 
                        : '2px solid #e2e8f0',
                      borderRadius: '8px',
                      background: formData.serviceType === service.value 
                        ? '#f0fdff' 
                        : 'white',
                      cursor: 'pointer',
                      textAlign: 'left',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>
                      {service.icon}
                    </div>
                    <div style={{ fontWeight: '600', color: 'var(--text-dark)' }}>
                      {service.label}
                    </div>
                  </button>
                ))}
              </div>
              {errors.serviceType && (
                <div style={{ color: '#ef4444', fontSize: '0.8rem', marginTop: '0.5rem' }}>
                  {errors.serviceType}
                </div>
              )}
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{ display: 'block', marginBottom: '0.75rem', fontWeight: '600' }}>
                Project Scope *
              </label>
              <div style={{ display: 'grid', gap: '0.5rem' }}>
                {projectScopes.map((scope) => (
                  <button
                    key={scope.value}
                    type="button"
                    onClick={() => handleInputChange('projectScope', scope.value)}
                    style={{
                      padding: '1rem',
                      border: formData.projectScope === scope.value 
                        ? '2px solid var(--accent-teal)' 
                        : '1px solid #e2e8f0',
                      borderRadius: '6px',
                      background: formData.projectScope === scope.value 
                        ? '#f0fdff' 
                        : 'white',
                      cursor: 'pointer',
                      textAlign: 'left',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    <div style={{ fontWeight: '600', color: 'var(--text-dark)', marginBottom: '0.25rem' }}>
                      {scope.label}
                    </div>
                    <div style={{ fontSize: '0.9rem', color: 'var(--text-medium)' }}>
                      {scope.description}
                    </div>
                  </button>
                ))}
              </div>
              {errors.projectScope && (
                <div style={{ color: '#ef4444', fontSize: '0.8rem', marginTop: '0.5rem' }}>
                  {errors.projectScope}
                </div>
              )}
            </div>
            
            {/* Continue with other Step 2 fields... */}
          </div>
        )}

        {/* Steps 3 and 4 would be implemented similarly */}
      </div>

      {/* Navigation Buttons */}
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        marginTop: '2rem',
        paddingTop: '1.5rem',
        borderTop: '1px solid #e2e8f0'
      }}>
        <button
          onClick={prevStep}
          disabled={currentStep === 1}
          style={{
            background: 'transparent',
            color: currentStep === 1 ? '#cbd5e1' : 'var(--text-medium)',
            border: 'none',
            padding: '0.75rem 1.5rem',
            borderRadius: '6px',
            cursor: currentStep === 1 ? 'not-allowed' : 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            fontWeight: '600'
          }}
        >
          <FaArrowLeft /> Previous
        </button>

        <div style={{ fontSize: '0.9rem', color: 'var(--text-medium)' }}>
          Step {currentStep} of 4
        </div>

        {currentStep < 4 ? (
          <button
            onClick={nextStep}
            style={{
              background: 'linear-gradient(135deg, var(--accent-teal) 0%, var(--primary-blue) 100%)',
              color: 'white',
              border: 'none',
              padding: '0.75rem 1.5rem',
              borderRadius: '6px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              fontWeight: '600'
            }}
          >
            Next <FaArrowRight />
          </button>
        ) : (
          <button
            onClick={handleSubmit}
            disabled={isSubmitting}
            style={{
              background: 'linear-gradient(135deg, var(--primary-green) 0%, #059669 100%)',
              color: 'white',
              border: 'none',
              padding: '0.75rem 2rem',
              borderRadius: '6px',
              cursor: isSubmitting ? 'not-allowed' : 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              fontWeight: '600',
              opacity: isSubmitting ? 0.7 : 1
            }}
          >
            {isSubmitting ? 'Booking...' : 'Book Consultation'} <FaCheckCircle />
          </button>
        )}
      </div>
    </Modal>
  );
};

export default ConsultationBooking;