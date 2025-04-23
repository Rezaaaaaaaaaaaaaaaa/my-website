import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <img src="images/logos/main-logo.svg" alt="RMES Environmental Engineering" />
        </div>
        
        <div className="footer-links">
          <Link to="/" className="footer-link">Home</Link>
          <Link to="/services" className="footer-link">Services</Link>
          <Link to="/projects" className="footer-link">Projects</Link>
          <Link to="/publications" className="footer-link">Publications</Link>
          <Link to="/contact" className="footer-link">Contact</Link>
        </div>
        
        <div className="social-icons">
          <a 
            href="https://www.linkedin.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
          </a>
          <a 
            href="https://www.researchgate.net/" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="ResearchGate Profile"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19.586 0c-2.123 0-3.359 1.265-3.359 2.981v1.017h3.869v1.023h-3.869v10.34c1.14-.908 2.009-1.316 3.273-1.316 2.688 0 4.5 2.1 4.5 5.274 0 2.73-2.328 4.681-5.172 4.681-2.565 0-4.428-1.559-4.428-3.828 0-1.467.633-2.475 2.331-3.729v-11.371h-2.364v-1.074h2.364v-1.017c0-2.922 1.978-3.981 5.379-3.981h1.335v1h-.859zm-13.814 12.591c-3.022 0-5.772 2.19-5.772 5.473 0 3.147 2.35 5.136 5.772 5.136 2.819 0 5.266-1.74 5.266-5.136 0-3.333-2.85-5.473-5.266-5.473zm-.329 2.581c1.013 0 1.914.901 1.914 2.892s-.901 2.867-1.914 2.867c-1.264 0-2.074-.776-2.074-2.867 0-2.116.81-2.892 2.074-2.892z"/>
            </svg>
          </a>
          <a 
            href="https://scholar.google.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Google Scholar Profile"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path d="M5.242 13.769L0 9.5 12 0l12 9.5-5.242 4.269C17.548 11.249 14.978 9.5 12 9.5c-2.977 0-5.548 1.748-6.758 4.269zM12 10a7 7 0 1 0 0 14 7 7 0 0 0 0-14z"/>
            </svg>
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
