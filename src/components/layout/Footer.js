import React from 'react';
import { Link } from 'react-router-dom';
import { FiLinkedin, FiTwitter, FiGithub, FiMail } from 'react-icons/fi';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="footer-logo">RMES</div>
            <p className="footer-description">
              Environmental & Bioprocess Engineer specializing in innovative water treatment solutions, 
              sustainable technology design, and environmental impact assessment.
            </p>
            <div className="footer-social">
              <a 
                href="https://www.linkedin.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
              >
                <FiLinkedin />
              </a>
              <a 
                href="https://twitter.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Twitter Profile"
              >
                <FiTwitter />
              </a>
              <a 
                href="https://github.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
              >
                <FiGithub />
              </a>
              <a 
                href="mailto:che.eng@live.com" 
                aria-label="Email Contact"
              >
                <FiMail />
              </a>
            </div>
          </div>
          
          <div className="footer-nav">
            <h4 className="footer-heading">Navigation</h4>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/projects">Projects</Link></li>
              <li><Link to="/publications">Publications</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          
          <div className="footer-resources">
            <h4 className="footer-heading">Resources</h4>
            <ul className="footer-links">
              <li><a href="/research">Research</a></li>
              <li><a href="/case-studies">Case Studies</a></li>
              <li><a href="/presentations">Presentations</a></li>
              <li><a href="/media">Media</a></li>
            </ul>
          </div>
          
          <div className="footer-contact">
            <h4 className="footer-heading">Contact</h4>
            <ul className="footer-links">
              <li>che.eng@live.com</li>
              <li>+642108052489</li>
              <li>New Zealand</li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-copyright">
            &copy; {currentYear} Dr. Reza Moghaddam. All rights reserved.
          </div>
          <div className="footer-legal">
            <a href="/privacy-policy">Privacy Policy</a>
            <a href="/terms-of-service">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
