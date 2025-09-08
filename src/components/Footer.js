import React from 'react';
import { Link } from 'react-router-dom';
import { FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaPhone } from 'react-icons/fa';
import Logo from './Logo';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div>
            <div className="mb-4">
              <Logo size="default" variant="compact" />
            </div>
            <p>RMES (Reza Moghaddam Engineering Solutions) is a PhD-led professional engineering consultancy specializing in advanced chemical processes, bioprocess systems, water treatment, and environmental compliance solutions for New Zealand industries.</p>
            <div className="mt-4 p-3 bg-gradient-to-r from-teal-600/10 to-blue-600/10 rounded-lg">
              <p className="text-sm font-semibold text-teal-700 italic">Professional Process Engineering</p>
              <p className="text-xs text-slate-600 mt-1">Chemical, biological, and water treatment engineering solutions</p>
            </div>
          </div>

          <div>
            <h4>Core Services</h4>
            <Link to="/services" className="footer-link">Chemical Process Engineering</Link>
            <Link to="/services" className="footer-link">Bioprocess Engineering</Link>
            <Link to="/services" className="footer-link">Environmental Consulting</Link>
            <Link to="/services" className="footer-link">Food Engineering</Link>
            <Link to="/services" className="footer-link">Process Optimization</Link>
          </div>

          <div>
            <h4>Contact Information</h4>
            <div className="flex items-center gap-4 mb-2">
              <FaEnvelope />
              <span>che.eng@live.com</span>
            </div>
            <div className="flex items-center gap-4 mb-2">
              <FaMapMarkerAlt />
              <span>Aotearoa New Zealand</span>
            </div>
            <div className="flex items-center gap-4 mb-2">
              <FaLinkedin />
              <span>Professional Network</span>
            </div>
            <div className="flex items-center gap-4">
              <FaPhone />
              <span>Available by appointment</span>
            </div>
          </div>

          <div>
            <h4>NZ Industries</h4>
            <Link to="/services" className="footer-link">Dairy & Food Processing</Link>
            <Link to="/services" className="footer-link">Water & Marine Systems</Link>
            <Link to="/services" className="footer-link">Agricultural Technology</Link>
            <Link to="/services" className="footer-link">Environmental Compliance</Link>
            <Link to="/services" className="footer-link">Research & Development</Link>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} RMES. All rights reserved. | Serving New Zealand businesses nationwide</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;