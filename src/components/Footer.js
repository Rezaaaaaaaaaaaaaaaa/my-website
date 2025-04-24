import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-links">
          <Link to="/" className="footer-link">Home</Link>
          <Link to="/projects" className="footer-link">Projects</Link>
          <Link to="/consulting" className="footer-link">Consulting</Link>
          <Link to="/publications" className="footer-link">Publications</Link>
          <Link to="/resume" className="footer-link">Resume</Link>
          <Link to="/contact" className="footer-link">Contact</Link>
        </div>
        
        <div className="social-links">
          <a 
            href="https://www.linkedin.com/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="footer-link"
            aria-label="LinkedIn Profile"
          >
            LinkedIn
          </a>
          <a 
            href="https://www.researchgate.net/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="footer-link"
            aria-label="ResearchGate Profile"
          >
            ResearchGate
          </a>
          <a 
            href="https://scholar.google.com/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="footer-link"
            aria-label="Google Scholar Profile"
          >
            Google Scholar
          </a>
          <a 
            href="https://niwa.co.nz/profile" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="footer-link"
            aria-label="NIWA Profile"
          >
            NIWA Profile
          </a>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {currentYear} Dr. Reza Moghaddam. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
