import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FaPhone, 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaBuilding,
  FaGraduationCap,
  FaAward,
  FaUserTie,
  FaExternalLinkAlt,
  FaHeart,
  FaCopyright
} from 'react-icons/fa';

import { 
  SiLinkedin, 
  SiGooglescholar 
} from 'react-icons/si';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-background">
        <div className="footer-pattern"></div>
      </div>
      
      <div className="footer-content">
        <div className="footer-grid">
          {/* Professional Profile Section */}
          <div className="footer-section">
            <div className="footer-logo">
              <h3>Dr. Reza Moghaddam</h3>
              <p className="tagline">Environmental Engineer & Research Scientist</p>
            </div>
            <p className="footer-description">
              Transforming environmental challenges into innovative solutions through cutting-edge 
              research, sustainable engineering practices, and advanced technology integration.
            </p>
            <div className="credentials-badges">
              <div className="credential-badge">
                <FaGraduationCap />
                <span>PhD Qualified</span>
              </div>
              <div className="credential-badge">
                <FaBuilding />
                <span>NIWA Scientist</span>
              </div>
              <div className="credential-badge">
                <FaAward />
                <span>Published Researcher</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h4>Explore</h4>
            <nav className="footer-nav">
              <Link to="/" className="footer-link">Home</Link>
              <Link to="/consulting" className="footer-link">Consulting Services</Link>
              <Link to="/projects" className="footer-link">Projects & Innovation</Link>
              <Link to="/publications" className="footer-link">Research Publications</Link>
              <Link to="/resume" className="footer-link">Professional Resume</Link>
              <Link to="/contact" className="footer-link">Contact & Collaboration</Link>
            </nav>
          </div>

          {/* Services Overview */}
          <div className="footer-section">
            <h4>Services</h4>
            <ul className="services-list">
              <li>Environmental Systems Modeling</li>
              <li>Digital Twin Development</li>
              <li>Water Treatment Technology</li>
              <li>Nature-Based Solutions</li>
              <li>Geospatial Analysis</li>
              <li>Research Collaboration</li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="footer-section">
            <h4>Get In Touch</h4>
            <div className="contact-info">
              <div className="contact-item">
                <FaEnvelope className="contact-icon" />
                <div>
                  <span className="contact-label">Email</span>
                  <a href="mailto:reza.moghaddam@niwa.co.nz" className="contact-value">
                    reza.moghaddam@niwa.co.nz
                  </a>
                </div>
              </div>
              
              <div className="contact-item">
                <FaPhone className="contact-icon" />
                <div>
                  <span className="contact-label">Phone</span>
                  <a href="tel:+642108052489" className="contact-value">
                    +64 21 080 52489
                  </a>
                </div>
              </div>
              
              <div className="contact-item">
                <FaBuilding className="contact-icon" />
                <div>
                  <span className="contact-label">Organization</span>
                  <span className="contact-value">NIWA, New Zealand</span>
                </div>
              </div>
              
              <div className="contact-item">
                <FaMapMarkerAlt className="contact-icon" />
                <div>
                  <span className="contact-label">Location</span>
                  <span className="contact-value">New Zealand</span>
                </div>
              </div>
            </div>

            {/* Professional Networks */}
            <div className="professional-networks">
              <h5>Professional Networks</h5>
              <div className="network-links">
                <a 
                  href="https://nz.linkedin.com/in/reza-moghaddam" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="network-link linkedin"
                  aria-label="LinkedIn Profile"
                >
                  <SiLinkedin />
                  <span>LinkedIn</span>
                  <FaExternalLinkAlt className="external-icon" />
                </a>
                
                <a 
                  href="https://scholar.google.com/citations" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="network-link scholar"
                  aria-label="Google Scholar Profile"
                >
                  <SiGooglescholar />
                  <span>Google Scholar</span>
                  <FaExternalLinkAlt className="external-icon" />
                </a>
                
                <a 
                  href="https://niwa.co.nz/staff-profile" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="network-link niwa"
                  aria-label="NIWA Profile"
                >
                  <FaBuilding />
                  <span>NIWA Profile</span>
                  <FaExternalLinkAlt className="external-icon" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Professional Affiliations */}
        <div className="affiliations-section">
          <h4>Professional Affiliations & Recognition</h4>
          <div className="affiliations-grid">
            <div className="affiliation-item">
              <FaUserTie className="affiliation-icon" />
              <div>
                <span className="affiliation-title">Engineering New Zealand</span>
                <span className="affiliation-status">Professional Member</span>
              </div>
            </div>
            
            <div className="affiliation-item">
              <FaAward className="affiliation-icon" />
              <div>
                <span className="affiliation-title">Chartered Professional Engineer</span>
                <span className="affiliation-status">CPEng Candidate</span>
              </div>
            </div>
            
            <div className="affiliation-item">
              <FaBuilding className="affiliation-icon" />
              <div>
                <span className="affiliation-title">International Water Quality Forums</span>
                <span className="affiliation-status">Active Participant</span>
              </div>
            </div>
            
            <div className="affiliation-item">
              <SiGooglescholar className="affiliation-icon" />
              <div>
                <span className="affiliation-title">Published Researcher</span>
                <span className="affiliation-status">10+ Peer-Reviewed Publications</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <div className="copyright">
              <FaCopyright className="copyright-icon" />
              <span>{currentYear} Dr. Reza Moghaddam. All rights reserved.</span>
            </div>
            
            <div className="footer-meta">
              <span>Environmental Engineer | Research Scientist | Innovation Leader</span>
            </div>
            
            <div className="made-with">
              <span>Built with</span>
              <FaHeart className="heart-icon" />
              <span>for sustainable innovation</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;