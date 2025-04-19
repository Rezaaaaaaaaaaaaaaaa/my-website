import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../assets/logo.svg';
import { ReactComponent as LinkedInIcon } from '../assets/icons/linkedin-social-icon.svg';
import { ReactComponent as TwitterIcon } from '../assets/icons/twitter-icon.svg';
import { ReactComponent as ResearchGateIcon } from '../assets/icons/researchgate-social-icon.svg';
import { ReactComponent as EmailIcon } from '../assets/icons/email-social-icon.svg';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-main">
          <div className="footer-about">
            <div className="footer-logo logo">
              <Logo className="logo-icon" />
              <span className="logo-text" style={{ color: 'white' }}>RMES</span>
            </div>
            <p>Specializing in innovative water treatment solutions, sustainable technology design, environmental impact assessment, and advanced process optimization.</p>
          </div>
          
          <div className="footer-nav">
            <h3 className="footer-heading">Navigation</h3>
            <div className="footer-links-group">
              <Link to="/" className="footer-link">Home</Link>
              <Link to="/services" className="footer-link">Services</Link>
              <Link to="/projects" className="footer-link">Projects</Link>
              <Link to="/publications" className="footer-link">Publications</Link>
              <Link to="/contact" className="footer-link">Contact</Link>
            </div>
          </div>
          
          <div className="footer-services">
            <h3 className="footer-heading">Services</h3>
            <div className="footer-links-group">
              <Link to="/services" className="footer-link">Wastewater Treatment</Link>
              <Link to="/services" className="footer-link">Water Reticulation</Link>
              <Link to="/services" className="footer-link">Catchment Modeling</Link>
              <Link to="/services" className="footer-link">Process Optimization</Link>
            </div>
          </div>
          
          <div className="footer-contact">
            <h3 className="footer-heading">Contact</h3>
            <div className="footer-contact-item">
              <EmailIcon className="footer-contact-icon" />
              <span>che.eng@live.com</span>
            </div>
            <div className="footer-contact-item">
              <span>+642108052489</span>
            </div>
            <div className="footer-contact-item">
              <span>New Zealand</span>
            </div>
          </div>
        </div>
        
        <div className="footer-divider"></div>
        
        <div className="footer-bottom">
          <p className="footer-copyright">&copy; {currentYear} Dr. Reza Moghaddam. All rights reserved.</p>
          
          <div className="footer-social">
            <a 
              href="https://www.linkedin.com/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="footer-social-link"
              aria-label="LinkedIn Profile"
            >
              <LinkedInIcon />
            </a>
            <a 
              href="https://twitter.com/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="footer-social-link"
              aria-label="Twitter Profile"
            >
              <TwitterIcon />
            </a>
            <a 
              href="https://www.researchgate.net/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="footer-social-link"
              aria-label="ResearchGate Profile"
            >
              <ResearchGateIcon />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
