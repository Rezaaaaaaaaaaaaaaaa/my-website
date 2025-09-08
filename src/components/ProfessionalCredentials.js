import React from 'react';
import { 
  FaAward, 
  FaCertificate, 
  FaGlobe, 
  FaMedal,
  FaUsers,
  FaBook,
  FaMicrophone,
  FaShieldAlt,
  FaLeaf
} from 'react-icons/fa';

const ProfessionalCredentials = () => {
  return (
    <section className="section" style={{ backgroundColor: '#f8fafc' }}>
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Professional Credentials & Expertise</h2>
          <p className="section-description">
            Professional credentials and qualifications will be displayed here once verified.
          </p>
        </div>

        {/* Placeholder Content */}
        <div style={{
          background: 'white',
          borderRadius: '12px',
          boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
          padding: '3rem',
          textAlign: 'center',
          color: 'var(--text-medium)'
        }}>
          <FaCertificate style={{ fontSize: '3rem', color: '#e2e8f0', marginBottom: '1rem' }} />
          <h3 style={{ color: 'var(--text-dark)', marginBottom: '1rem' }}>
            Professional Qualifications
          </h3>
          <p>
            Professional memberships, certifications, and academic credentials will be added here.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProfessionalCredentials;