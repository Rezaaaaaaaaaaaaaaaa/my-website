import React from 'react';
import { Link } from 'react-router-dom';
import { FaEnvelope, FaMapMarkerAlt, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div>
            <h4>AquaTech Solutions NZ</h4>
            <p>Leading environmental engineering consultancy specializing in chemical processes, bioprocess engineering, and sustainable solutions across New Zealand.</p>
          </div>

          <div>
            <h4>Services</h4>
            <Link to="/services" className="footer-link">Chemical Process Engineering</Link>
            <Link to="/services" className="footer-link">Bioprocess Engineering</Link>
            <Link to="/services" className="footer-link">Environmental Consulting</Link>
            <Link to="/services" className="footer-link">Process Optimization</Link>
            <Link to="/services" className="footer-link">Sustainability Solutions</Link>
          </div>

          <div>
            <h4>Contact</h4>
            <div className="flex items-center gap-4 mb-2">
              <FaEnvelope />
              <span>che.eng@live.com</span>
            </div>
            <div className="flex items-center gap-4 mb-2">
              <FaMapMarkerAlt />
              <span>New Zealand</span>
            </div>
            <div className="flex items-center gap-4">
              <FaLinkedin />
              <span>Professional Network</span>
            </div>
          </div>

          <div>
            <h4>Industries</h4>
            <Link to="/services" className="footer-link">Food & Beverage</Link>
            <Link to="/services" className="footer-link">Water Treatment</Link>
            <Link to="/services" className="footer-link">Chemical Manufacturing</Link>
            <Link to="/services" className="footer-link">Agricultural Technology</Link>
            <Link to="/services" className="footer-link">Research & Development</Link>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} AquaTech Solutions NZ. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;