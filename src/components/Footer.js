import React from 'react';
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
            <a href="/services" className="footer-link">Chemical Process Engineering</a>
            <a href="/services" className="footer-link">Bioprocess Engineering</a>
            <a href="/services" className="footer-link">Environmental Consulting</a>
            <a href="/services" className="footer-link">Process Optimization</a>
            <a href="/services" className="footer-link">Sustainability Solutions</a>
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
            <a href="/services" className="footer-link">Food & Beverage</a>
            <a href="/services" className="footer-link">Water Treatment</a>
            <a href="/services" className="footer-link">Chemical Manufacturing</a>
            <a href="/services" className="footer-link">Agricultural Technology</a>
            <a href="/services" className="footer-link">Research & Development</a>
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