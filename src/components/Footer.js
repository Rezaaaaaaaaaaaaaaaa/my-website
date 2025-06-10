import React from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedin, FaGoogleScholar, FaResearchgate, FaGlobe, FaEnvelope, FaPhone } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-main">
          <div className="footer-brand">
            <h3>Dr. Reza Moghaddam</h3>
            <p>Environmental & Water Systems Engineer</p>
            <p>Pioneering sustainable solutions through innovative technology</p>
          </div>
          
          <div className="footer-links-section">
            <h4>Navigation</h4>
            <div className="footer-links">
              <Link to="/" className="footer-link">Home</Link>
              <Link to="/projects" className="footer-link">Projects</Link>
              <Link to="/consulting" className="footer-link">Consulting</Link>
              <Link to="/publications" className="footer-link">Publications</Link>
              <Link to="/resume" className="footer-link">Resume</Link>
              <Link to="/contact" className="footer-link">Contact</Link>
            </div>
          </div>
          
          <div className="footer-contact">
            <h4>Contact Information</h4>
            <div className="contact-info">
              <div className="contact-item">
                <FaEnvelope />
                <span>reza.moghaddam@niwa.co.nz</span>
              </div>
              <div className="contact-item">
                <FaPhone />
                <span>+64 21 0805 2489</span>
              </div>
            </div>
          </div>
          
          <div className="footer-social">
            <h4>Professional Profiles</h4>
            <div className="social-links">
              <a 
                href="https://nz.linkedin.com/in/reza-moghaddam" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-link"
                aria-label="LinkedIn Profile"
              >
                <FaLinkedin />
                <span>LinkedIn</span>
              </a>
              <a 
                href="https://scholar.google.com/citations" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-link"
                aria-label="Google Scholar Profile"
              >
                <FaGoogleScholar />
                <span>Google Scholar</span>
              </a>
              <a 
                href="https://www.researchgate.net/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-link"
                aria-label="ResearchGate Profile"
              >
                <FaResearchgate />
                <span>ResearchGate</span>
              </a>
              <a 
                href="https://niwa.co.nz/staff-profile" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-link"
                aria-label="NIWA Profile"
              >
                <FaGlobe />
                <span>NIWA Profile</span>
              </a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {currentYear} Dr. Reza Moghaddam. All rights reserved.</p>
          <p>Environmental Engineering Solutions | Water Systems Specialist | Sustainable Technology Expert</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
