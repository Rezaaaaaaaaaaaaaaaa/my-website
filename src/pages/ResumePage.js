import React from 'react';
import './ResumePage.css'; // Import page-specific styles
import CV from '../CV.pdf'; // Assuming CV.pdf is in src
import { FaDownload, FaEye } from 'react-icons/fa';

const ResumePage = () => {
  return (
    <div className="resume-page container">
      <section className="page-header enhanced-header">
        {/* Using enhanced-header for consistency, but could be simpler */}
        <div className="header-content">
          <h1>Curriculum Vitae</h1>
          <p>Download my detailed CV or view key sections below.</p>
        </div>
      </section>

      <section className="resume-page-content">
        <h2>Dr. Reza Moghaddam, PhD</h2>
        <p className="section-subtitle">Environmental Engineer & Research Scientist</p>

        <p>
          My detailed Curriculum Vitae is available for download.
          This document provides a comprehensive overview of my academic qualifications,
          professional experience, research publications, skills, and awards.
        </p>

        <a
          href={CV}
          download="Reza_Moghaddam_CV.pdf"
          className="btn primary-btn download-link"
          aria-label="Download CV as PDF"
        >
          <FaDownload style={{ marginRight: '8px' }} />
          Download CV (PDF)
        </a>

        {/* Placeholder for future embedded resume content or key sections */}
        {/*
        <div className="resume-sections-placeholder" style={{marginTop: '40px', fontStyle: 'italic', color: 'var(--text-light)'}}>
          <p>(Key sections of the CV will be displayed here in a future update.)</p>
        </div>
        */}
      </section>
    </div>
  );
};

export default ResumePage;
