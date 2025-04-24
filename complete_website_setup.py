#!/usr/bin/env python3
"""
Enhanced Portfolio Website Setup Script with Professional Resume Integration

This script creates a complete React-based portfolio website for Dr. Reza Moghaddam,
Environmental & Bioprocess Engineer, incorporating details from his professional
resume and expanded consulting services.

Usage:
1. Save this script as 'enhanced_portfolio_setup.py'
2. Run: python enhanced_portfolio_setup.py
3. After running, install dependencies: npm install
4. Start the development server: npm start
5. Push to GitHub and deploy on Netlify
"""

import os
import sys
import shutil
import base64

def create_directories():
    """Create the necessary directory structure"""
    print("Creating directory structure...")
    
    # Define directories to create
    directories = [
        'src',
        'src/components',
        'src/pages',
        'src/assets',
        'public',
        'public/images'
    ]
    
    # Create directories
    for directory in directories:
        os.makedirs(directory, exist_ok=True)
        print(f"Created directory: {directory}")

def create_app_js():
    """Create the main App.js file with enhanced routing"""
    content = """import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import PublicationsPage from './pages/PublicationsPage';
import ConsultingPage from './pages/ConsultingPage';
import ResumePage from './pages/ResumePage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/publications" element={<PublicationsPage />} />
            <Route path="/consulting" element={<ConsultingPage />} />
            <Route path="/resume" element={<ResumePage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
"""
    with open('src/App.js', 'w', encoding='utf-8') as f:
        f.write(content)
    print("Created App.js with resume route")

def create_navbar_component():
    """Create the Navbar component with consulting link"""
    content = """import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  
  // Detect if we're on a mobile device
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  // Check if a link is active based on current location
  const isActive = (path) => {
    return location.pathname === path;
  };
  
  // Toggle mobile menu
  const toggleMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          RMES
        </Link>
        
        {isMobile ? (
          <>
            <button 
              className="mobile-menu-button" 
              onClick={toggleMenu}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? 'Close' : 'Menu'}
            </button>
            
            {mobileMenuOpen && (
              <ul className="nav-menu mobile-menu">
                <li className="nav-item">
                  <Link 
                    to="/" 
                    className={`nav-link ${isActive('/') ? 'active' : ''}`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link 
                    to="/projects" 
                    className={`nav-link ${isActive('/projects') ? 'active' : ''}`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Projects
                  </Link>
                </li>
                <li className="nav-item">
                  <Link 
                    to="/consulting" 
                    className={`nav-link ${isActive('/consulting') ? 'active' : ''}`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Consulting
                  </Link>
                </li>
                <li className="nav-item">
                  <Link 
                    to="/publications" 
                    className={`nav-link ${isActive('/publications') ? 'active' : ''}`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Publications
                  </Link>
                </li>
                <li className="nav-item">
                  <Link 
                    to="/resume" 
                    className={`nav-link ${isActive('/resume') ? 'active' : ''}`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Resume
                  </Link>
                </li>
                <li className="nav-item">
                  <Link 
                    to="/contact" 
                    className={`nav-link ${isActive('/contact') ? 'active' : ''}`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            )}
          </>
        ) : (
          <ul className="nav-menu">
            <li className="nav-item">
              <Link to="/" className={`nav-link ${isActive('/') ? 'active' : ''}`}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/projects" className={`nav-link ${isActive('/projects') ? 'active' : ''}`}>
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/consulting" className={`nav-link ${isActive('/consulting') ? 'active' : ''}`}>
                Consulting
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/publications" className={`nav-link ${isActive('/publications') ? 'active' : ''}`}>
                Publications
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/resume" className={`nav-link ${isActive('/resume') ? 'active' : ''}`}>
                Resume
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className={`nav-link ${isActive('/contact') ? 'active' : ''}`}>
                Contact
              </Link>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
"""
    with open('src/components/Navbar.js', 'w', encoding='utf-8') as f:
        f.write(content)
    print("Created Navbar.js component with resume link")

def create_footer_component():
    """Create the Footer component with all links"""
    content = """import React from 'react';
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
"""
    with open('src/components/Footer.js', 'w', encoding='utf-8') as f:
        f.write(content)
    print("Created Footer.js component with all links")

def create_home_page():
    """Create the HomePage component with updated expertise sections"""
    content = """import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import heroImage from '../assets/hero-bg.jpg';

const HomePage = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  
  useEffect(() => {
    // Check if the hero image exists by trying to load it
    const img = new Image();
    img.onload = () => setImageLoaded(true);
    img.onerror = () => setImageLoaded(false);
    img.src = heroImage;
    
    return () => {
      img.onload = null;
      img.onerror = null;
    };
  }, []);

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className={`hero ${imageLoaded ? 'hero-with-image' : ''}`}>
        <div className="hero-content">
          <h1>Dr. Reza Moghaddam</h1>
          <h2>Environmental & Bioprocess Engineer</h2>
          <p>Specializing in innovative water treatment solutions, catchment modeling, and sustainable technology design with proven experience in research and industry.</p>
          <div className="hero-buttons">
            <Link to="/projects" className="btn primary-btn">View Projects</Link>
            <Link to="/consulting" className="btn primary-btn">Consulting Services</Link>
            <Link to="/contact" className="btn secondary-btn">Contact Me</Link>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="expertise">
        <h2>Areas of Expertise</h2>
        <div className="expertise-grid">
          <div className="expertise-card">
            <h3>Environmental Engineering</h3>
            <ul>
              <li>Water & Wastewater Treatment</li>
              <li>Denitrifying Bioreactors</li>
              <li>Agricultural Impact Mitigation</li>
              <li>NZ Environmental Regulations</li>
              <li>Catchment Modeling & Analysis</li>
              <li>Resource Consent Applications</li>
            </ul>
          </div>
          <div className="expertise-card">
            <h3>Bioprocess Engineering</h3>
            <ul>
              <li>Bioreactor Design & Optimization</li>
              <li>Bioethanol Production</li>
              <li>Fermentation Process Control</li>
              <li>Scale-up Methodology</li>
              <li>Advanced Process Optimization</li>
              <li>Waste Recovery & Repurposing</li>
            </ul>
          </div>
          <div className="expertise-card">
            <h3>Analysis & Research</h3>
            <ul>
              <li>Techno-Economic Analysis</li>
              <li>Life Cycle Assessment</li>
              <li>Data Analysis (Python, R)</li>
              <li>Scientific Publication</li>
              <li>Groundwater & Surface Water Modeling</li>
              <li>GIS & Spatial Analysis</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="featured-projects">
        <h2>Featured Projects</h2>
        <div className="project-grid">
          <div className="project-card">
            <h3>Enhanced Nitrate Removal in Woodchip Bioreactors</h3>
            <p>Implementation of carbon dosing techniques to improve nitrate removal efficiency in agricultural drainage systems.</p>
            <div className="project-metrics">
              <span>Efficiency Improvement: 30%</span>
              <span>Cost Reduction: 25%</span>
            </div>
            <Link to="/projects" className="project-link">Learn More</Link>
          </div>
          <div className="project-card">
            <h3>Aquatic Mitigation Systems for NES-F Compliance</h3>
            <p>Development of cost-effective mitigation systems for agricultural runoff treatment compliant with NZ regulations.</p>
            <div className="project-metrics">
              <span>Implementation Cost: 20% lower than alternatives</span>
              <span>Treatment Efficiency: 85% contaminant removal</span>
            </div>
            <Link to="/projects" className="project-link">Learn More</Link>
          </div>
          <div className="project-card">
            <h3>Catchment Water Quality & Quantity Modeling</h3>
            <p>Comprehensive modeling and analysis of agricultural catchments with calibration of hydrological models.</p>
            <div className="project-metrics">
              <span>Data Points: Over 10,000 collected</span>
              <span>Model Accuracy: 95% prediction rate</span>
            </div>
            <Link to="/projects" className="project-link">Learn More</Link>
          </div>
        </div>
        <div className="section-cta">
          <Link to="/projects" className="btn primary-btn">View All Projects</Link>
        </div>
      </section>

      {/* Publications Preview */}
      <section className="publications-preview">
        <h2>Recent Publications</h2>
        <div className="publication-list">
          <div className="publication-item">
            <h3>Flow analysis and hydraulic performance of denitrifying bioreactors under different carbon dosing treatments</h3>
            <p>Journal of Environmental Management, 2023</p>
          </div>
          <div className="publication-item">
            <h3>Constant carbon dosing of a pilot-scale denitrifying bioreactor to improve nitrate removal from agricultural tile drainage</h3>
            <p>Ecological Engineering, 2023</p>
          </div>
        </div>
        <div className="section-cta">
          <Link to="/publications" className="btn primary-btn">View All Publications</Link>
        </div>
      </section>

      {/* Consulting Services Preview */}
      <section className="featured-projects">
        <h2>Consulting Services</h2>
        <div className="project-grid">
          <div className="project-card">
            <h3>Groundwater & Surface Water Modeling</h3>
            <p>Expert analysis and modeling of groundwater flow, solute transport, and surface water systems for sustainable water resource management.</p>
            <div className="project-metrics">
              <span>Compliance: NPS-FM 2020 & NES-F</span>
              <span>Advanced Tools: HEC-HMS, HEC-RAS, GIS</span>
            </div>
            <Link to="/consulting" className="project-link">Learn More</Link>
          </div>
          <div className="project-card">
            <h3>Wastewater Treatment Design</h3>
            <p>Custom designs for municipal and agricultural wastewater treatment systems with aerobic and anaerobic processes tailored to specific needs.</p>
            <div className="project-metrics">
              <span>Efficiency: Optimized for local conditions</span>
              <span>Cost-Benefit: Full lifecycle analysis</span>
            </div>
            <Link to="/consulting" className="project-link">Learn More</Link>
          </div>
          <div className="project-card">
            <h3>Environmental Impact Assessment</h3>
            <p>Comprehensive assessment of environmental impacts with regulatory compliance for water resource projects and infrastructure.</p>
            <div className="project-metrics">
              <span>Regulatory Framework: RMA, NPS-FM, NES-F</span>
              <span>Stakeholder Engagement: Multi-level approach</span>
            </div>
            <Link to="/consulting" className="project-link">Learn More</Link>
          </div>
        </div>
        <div className="section-cta">
          <Link to="/consulting" className="btn primary-btn">View All Services</Link>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="contact-cta">
        <h2>Interested in Collaboration?</h2>
        <p>I'm always open to discussing research projects, consulting opportunities, or innovative solutions for environmental challenges.</p>
        <Link to="/contact" className="btn primary-btn">Get in Touch</Link>
      </section>
    </div>
  );
};

export default HomePage;
"""
    with open('src/pages/HomePage.js', 'w', encoding='utf-8') as f:
        f.write(content)
    print("Created HomePage.js with enhanced expertise sections")

def create_consulting_page():
    """Create the new ConsultingPage component with detailed service descriptions"""
    content = """import React from 'react';
import { Link } from 'react-router-dom';

const ConsultingPage = () => {
  return (
    <div className="consulting-page">
      <section className="page-header">
        <h1>Consulting Services</h1>
        <p>Specialized environmental engineering services for municipalities, agriculture, and industry</p>
      </section>

      <div className="consulting-container">
        {/* Hydrogeology Section */}
        <section className="service-category">
          <h2>Hydrogeology Analysis & Modeling</h2>
          <div className="service-grid">
            <div className="service-card">
              <h3>Groundwater Flow Modeling</h3>
              <p>
                Comprehensive groundwater flow modeling and analysis using advanced numerical methods to understand aquifer systems and water resource sustainability.
              </p>
              <p>
                These models provide crucial information for water allocation decisions, environmental impact assessments, and long-term resource planning.
              </p>
              <ul className="service-features">
                <li>3D aquifer characterization and modeling</li>
                <li>Calibration with field measurements</li>
                <li>Pumping test analysis and interpretation</li>
                <li>Sustainable yield assessment</li>
              </ul>
            </div>

            <div className="service-card">
              <h3>Solute Transport & Contamination</h3>
              <p>
                Modeling the fate and transport of contaminants in groundwater systems to assess risks and develop remediation strategies.
              </p>
              <p>
                Understanding contaminant movement is essential for protecting drinking water sources, meeting regulatory requirements, and designing effective cleanup approaches.
              </p>
              <ul className="service-features">
                <li>Nitrate transport and attenuation</li>
                <li>Agricultural contaminant migration</li>
                <li>Risk assessment for sensitive receptors</li>
                <li>Compliance with NPS-FM and NES-F</li>
              </ul>
            </div>

            <div className="service-card">
              <h3>Groundwater-Surface Water Interaction</h3>
              <p>
                Analysis of the complex relationship between groundwater and surface water systems, including stream depletion effects and recharge processes.
              </p>
              <p>
                This integrated approach is vital for holistic water resource management and understanding cumulative environmental impacts.
              </p>
              <ul className="service-features">
                <li>Stream depletion assessment</li>
                <li>Baseflow contribution analysis</li>
                <li>Wetland hydrology</li>
                <li>Water balance modeling</li>
              </ul>
            </div>

            <div className="service-card">
              <h3>Dewatering & Interference Effects</h3>
              <p>
                Assessment of dewatering requirements for construction projects and potential interference effects on existing groundwater users and ecosystems.
              </p>
              <p>
                Proper dewatering design ensures construction project success while minimizing environmental impacts and conflicts with other water users.
              </p>
              <ul className="service-features">
                <li>Dewatering system design</li>
                <li>Impact assessment on neighboring bores</li>
                <li>Monitoring program development</li>
                <li>Mitigation strategy planning</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Catchment Hydrology Section */}
        <section className="service-category">
          <h2>Catchment Hydrology Analysis & Modeling</h2>
          <div className="service-grid">
            <div className="service-card">
              <h3>Rainfall-Runoff Modeling</h3>
              <p>
                Development of rainfall-runoff models to simulate catchment response to precipitation events and assess water resource availability.
              </p>
              <p>
                These models are essential for flood prediction, water allocation planning, and evaluating the impacts of land use changes on water resources.
              </p>
              <ul className="service-features">
                <li>HEC-HMS and SWMM implementation</li>
                <li>Calibration with measured flow data</li>
                <li>Event-based and continuous simulation</li>
                <li>Climate change scenario analysis</li>
              </ul>
            </div>

            <div className="service-card">
              <h3>Water Quality Modeling</h3>
              <p>
                Comprehensive modeling of water quality parameters in catchments to identify pollution sources and evaluate mitigation strategies.
              </p>
              <p>
                Water quality models help in developing targeted interventions to improve stream health and meet regulatory requirements for freshwater management.
              </p>
              <ul className="service-features">
                <li>CLUES model calibration and application</li>
                <li>Nutrient loading and transport</li>
                <li>Sediment erosion and deposition</li>
                <li>Point and non-point source analysis</li>
              </ul>
            </div>

            <div className="service-card">
              <h3>Flood Assessment</h3>
              <p>
                Detailed flood modeling and risk assessment to identify vulnerable areas and evaluate mitigation options for flood protection.
              </p>
              <p>
                Flood studies provide critical information for infrastructure planning, emergency management, and land use decision-making to enhance community resilience.
              </p>
              <ul className="service-features">
                <li>Hydraulic modeling (HEC-RAS)</li>
                <li>Flood extent and depth mapping</li>
                <li>Climate change impact assessment</li>
                <li>Mitigation option evaluation</li>
              </ul>
            </div>

            <div className="service-card">
              <h3>Agricultural Systems Analysis</h3>
              <p>
                Modeling and analysis of agricultural systems to optimize productivity while minimizing environmental impacts on water resources.
              </p>
              <p>
                This integrated approach helps farmers and regulators balance production goals with environmental protection requirements.
              </p>
              <ul className="service-features">
                <li>Irrigation efficiency assessment</li>
                <li>Nutrient leaching modeling</li>
                <li>Farm system optimization</li>
                <li>NES-F compliance evaluation</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Wastewater Treatment Section */}
        <section className="service-category">
          <h2>Municipal & Agricultural Wastewater Treatment</h2>
          <div className="service-grid">
            <div className="service-card">
              <h3>Activated Sludge Systems</h3>
              <p>
                Complete design and optimization of activated sludge systems, the most common aerobic biological treatment process for municipal wastewater.
              </p>
              <p>
                These systems use microorganisms to break down organic matter in the presence of oxygen, making them highly effective for BOD removal and nitrification.
              </p>
              <ul className="service-features">
                <li>Conventional, extended aeration, and sequencing batch reactor (SBR) variants</li>
                <li>Optimized aeration systems for energy efficiency</li>
                <li>Sludge management and digestion planning</li>
                <li>Nitrification and denitrification process enhancement</li>
              </ul>
            </div>

            <div className="service-card">
              <h3>MBBR (Moving Bed Biofilm Reactor)</h3>
              <p>
                Design and implementation of MBBR systems that utilize biofilm carriers to maximize treatment capacity in a smaller footprint.
              </p>
              <p>
                MBBR technology combines the benefits of both activated sludge and biofilm processes, allowing for higher removal rates per unit volume and more stability against shock loads.
              </p>
              <ul className="service-features">
                <li>Carrier selection and loading optimization</li>
                <li>Hybrid MBBR-activated sludge designs</li>
                <li>Retrofit solutions for existing plants</li>
                <li>Multi-stage configurations for enhanced nutrient removal</li>
              </ul>
            </div>

            <div className="service-card">
              <h3>Membrane Bioreactors (MBR)</h3>
              <p>
                Advanced MBR system design that combines biological treatment with membrane filtration for superior effluent quality.
              </p>
              <p>
                MBRs produce exceptionally clean effluent suitable for reuse applications, while operating at higher biomass concentrations in a smaller footprint than conventional systems.
              </p>
              <ul className="service-features">
                <li>Hollow fiber, flat sheet, and tubular membrane selection</li>
                <li>Fouling control and cleaning regimen development</li>
                <li>Energy optimization strategies</li>
                <li>Water reuse integration planning</li>
              </ul>
            </div>

            <div className="service-card">
              <h3>UASB (Upflow Anaerobic Sludge Blanket)</h3>
              <p>
                Specialized design of anaerobic treatment systems that convert organic pollutants to biogas while consuming minimal energy.
              </p>
              <p>
                UASB reactors are particularly effective for high-strength wastewater and operate without aeration, generating valuable biogas and producing minimal sludge compared to aerobic systems.
              </p>
              <ul className="service-features">
                <li>Granular sludge development strategies</li>
                <li>Biogas collection and utilization systems</li>
                <li>Process stability enhancement</li>
                <li>Integration with aerobic polishing stages</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Agricultural Solutions Section */}
        <section className="service-category">
          <h2>Agricultural Wastewater Solutions</h2>
          <div className="service-grid">
            <div className="service-card">
              <h3>Anaerobic Digesters for Farm Waste</h3>
              <p>
                Custom-designed anaerobic digestion systems specifically for agricultural waste streams including manure and crop residues.
              </p>
              <p>
                These systems convert agricultural waste into biogas for energy production while stabilizing waste and reducing odor, creating multiple value streams from waste materials.
              </p>
              <ul className="service-features">
                <li>Complete mix, plug flow, and covered lagoon designs</li>
                <li>Co-digestion optimization for enhanced biogas production</li>
                <li>Digestate management and nutrient recovery</li>
                <li>Farm-scale energy integration planning</li>
              </ul>
            </div>

            <div className="service-card">
              <h3>Woodchip Bioreactors with Carbon Enhancement</h3>
              <p>
                Innovative denitrifying bioreactors specialized for removing nitrate from agricultural drainage, with carbon enhancement systems.
              </p>
              <p>
                These passive treatment systems intercept tile drainage and use woodchips as a carbon source for denitrifying bacteria, with supplemental carbon dosing for performance enhancement.
              </p>
              <ul className="service-features">
                <li>Site-specific sizing and hydraulic design</li>
                <li>Carbon dosing system integration</li>
                <li>Performance monitoring setup</li>
                <li>Maintenance and renewal planning</li>
              </ul>
            </div>

            <div className="service-card">
              <h3>Constructed Wetlands</h3>
              <p>
                Design of natural treatment systems using engineered wetlands for sustainable wastewater treatment, particularly suitable for farm settings.
              </p>
              <p>
                Constructed wetlands leverage natural processes to treat wastewater with minimal energy input, creating valuable habitat while providing effective treatment.
              </p>
              <ul className="service-features">
                <li>Horizontal and vertical flow wetland design</li>
                <li>Plant species selection for local climate</li>
                <li>Hybrid systems for enhanced performance</li>
                <li>Seasonal operation optimization</li>
              </ul>
            </div>

            <div className="service-card">
              <h3>NES-F Compliance Solutions</h3>
              <p>
                Comprehensive solutions for agricultural operations to achieve compliance with New Zealand's National Environmental Standards for Freshwater (NES-F).
              </p>
              <p>
                These tailored approaches help farmers meet regulatory requirements while maintaining agricultural productivity and efficiency.
              </p>
              <ul className="service-features">
                <li>Farm environmental plan development</li>
                <li>Mitigation system selection and design</li>
                <li>Cost-benefit analysis for compliance options</li>
                <li>Consent application support</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Water Reticulation Section */}
        <section className="service-category">
          <h2>Water & Wastewater Reticulation Design</h2>
          <div className="full-service-card">
            <p>
              Comprehensive design services for water and wastewater collection, distribution, and transmission systems. Our reticulation design services incorporate hydraulic modeling, material selection, pump station design, and maintenance planning to ensure efficient, reliable, and sustainable water infrastructure.
            </p>
            <div className="service-grid">
              <div className="service-card">
                <h3>Gravity Sewer Systems</h3>
                <p>
                  Design of efficient gravity collection systems with proper sizing, slope, and materials for reliable long-term operation.
                </p>
                <ul className="service-features">
                  <li>Hydraulic capacity analysis</li>
                  <li>Material selection for corrosion resistance</li>
                  <li>Infiltration/inflow minimization</li>
                  <li>Maintenance access optimization</li>
                </ul>
              </div>

              <div className="service-card">
                <h3>Pressure Sewer Systems</h3>
                <p>
                  Planning and design of pressure sewer networks for challenging terrain or low-density service areas.
                </p>
                <ul className="service-features">
                  <li>Grinder pump selection and sizing</li>
                  <li>System pressure management</li>
                  <li>Air/vacuum release valve placement</li>
                  <li>SCADA and monitoring integration</li>
                </ul>
              </div>

              <div className="service-card">
                <h3>Water Distribution Networks</h3>
                <p>
                  Design of efficient water supply networks with proper pressure management, looping, and water quality maintenance.
                </p>
                <ul className="service-features">
                  <li>Pressure zone design</li>
                  <li>Fire protection integration</li>
                  <li>Water age and quality modeling</li>
                  <li>Energy-efficient pumping systems</li>
                </ul>
              </div>

              <div className="service-card">
                <h3>Pump Station Design</h3>
                <p>
                  Complete design of water and wastewater pumping facilities with energy efficiency and reliability as core principles.
                </p>
                <ul className="service-features">
                  <li>Pump selection and system curve analysis</li>
                  <li>Variable frequency drive implementation</li>
                  <li>Wet well design and modeling</li>
                  <li>Backup power and redundancy systems</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Environmental Management Section */}
        <section className="service-category">
          <h2>Environmental Management & Compliance</h2>
          <div className="full-service-card">
            <p>
              Expert guidance on environmental compliance and management for water resource projects, with in-depth knowledge of New Zealand's regulatory framework including the Resource Management Act (RMA), National Policy Statement for Freshwater Management (NPS-FM), and National Environmental Standards for Freshwater (NES-F).
            </p>
            <div className="service-grid">
              <div className="service-card">
                <h3>Resource Consent Applications</h3>
                <p>
                  Preparation and management of resource consent applications for water takes, discharges, and land use activities under the RMA.
                </p>
                <ul className="service-features">
                  <li>Assessment of Environmental Effects (AEE)</li>
                  <li>Stakeholder consultation management</li>
                  <li>Technical reporting and expert evidence</li>
                  <li>Consent condition negotiation</li>
                </ul>
              </div>

              <div className="service-card">
                <h3>Compliance Monitoring & Reporting</h3>
                <p>
                  Development and implementation of monitoring programs to ensure ongoing compliance with consent conditions and regulatory requirements.
                </p>
                <ul className="service-features">
                  <li>Water quality monitoring design</li>
                  <li>Data analysis and interpretation</li>
                  <li>Compliance reporting</li>
                  <li>Non-compliance mitigation planning</li>
                </ul>
              </div>

              <div className="service-card">
                <h3>Erosion & Sediment Control</h3>
                <p>
                  Design of effective erosion and sediment control measures for construction and land development projects to protect water resources.
                </p>
                <ul className="service-features">
                  <li>Erosion and Sediment Control Plans (ESCP)</li>
                  <li>Chemical treatment design</li>
                  <li>Site monitoring and maintenance planning</li>
                  <li>Staff training and capacity building</li>
                </ul>
              </div>

              <div className="service-card">
                <h3>Strategic Environmental Planning</h3>
                <p>
                  Development of long-term environmental strategies that balance development goals with sustainability objectives and regulatory compliance.
                </p>
                <ul className="service-features">
                  <li>Policy and plan development</li>
                  <li>Environmental risk assessment</li>
                  <li>Climate change adaptation planning</li>
                  <li>Stakeholder engagement facilitation</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Process Modeling Section */}
        <section className="service-category">
          <h2>Chemical & Food Processing Optimization</h2>
          <div className="full-service-card">
            <p>
              Specialized process modeling and optimization services for chemical and food processing operations. We leverage advanced computational approaches to improve efficiency, product quality, and sustainability across various industrial processes.
            </p>
            <div className="service-grid">
              <div className="service-card">
                <h3>Bioethanol Production Optimization</h3>
                <p>
                  Process optimization for bioethanol production facilities to maximize yield and efficiency while minimizing costs and environmental impacts.
                </p>
                <ul className="service-features">
                  <li>Fermentation kinetics modeling</li>
                  <li>Yeast strain selection and evaluation</li>
                  <li>Process parameter optimization</li>
                  <li>Scale-up strategy development</li>
                </ul>
              </div>

              <div className="service-card">
                <h3>Process Simulation & Digital Twins</h3>
                <p>
                  Comprehensive flowsheet models for process design, troubleshooting, and real-time optimization.
                </p>
                <ul className="service-features">
                  <li>Steady-state and dynamic simulation</li>
                  <li>Economic optimization and scenario analysis</li>
                  <li>Digital twin development and implementation</li>
                  <li>Operator training simulations</li>
                </ul>
              </div>

              <div className="service-card">
                <h3>Statistical Process Optimization</h3>
                <p>
                  Data-driven approaches to identify optimal operating conditions and control strategies for improved process performance.
                </p>
                <ul className="service-features">
                  <li>Design of Experiments (DOE)</li>
                  <li>Response surface methodology</li>
                  <li>Multivariate statistical process control</li>
                  <li>Robustness and sensitivity analysis</li>
                </ul>
              </div>

              <div className="service-card">
                <h3>Waste Valorization & Circular Economy</h3>
                <p>
                  Development of innovative approaches to convert process waste streams into valuable products, improving economic and environmental sustainability.
                </p>
                <ul className="service-features">
                  <li>Waste characterization and opportunity assessment</li>
                  <li>Process development for waste conversion</li>
                  <li>Techno-economic analysis</li>
                  <li>Market analysis for derived products</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <div className="consulting-cta">
          <h3>Need Specialized Environmental Engineering Solutions?</h3>
          <p>I provide customized consulting services tailored to your specific challenges and requirements. With expertise spanning hydrogeology, catchment modeling, wastewater treatment, and process optimization, I can develop efficient, sustainable solutions for your water and environmental needs.</p>
          <Link to="/contact" className="btn primary-btn">Request a Consultation</Link>
        </div>
      </div>
    </div>
  );
};

export default ConsultingPage;
"""
    with open('src/pages/ConsultingPage.js', 'w', encoding='utf-8') as f:
        f.write(content)
    print("Created ConsultingPage.js with updated service categories")

def create_resume_page():
    """Create the ResumePage component with professional resume details"""
    content = """import React from 'react';
import { Link } from 'react-router-dom';

const ResumePage = () => {
  return (
    <div className="resume-page">
      <section className="page-header">
        <h1>Professional Resume</h1>
        <p>Experience, education, and qualifications in environmental engineering</p>
      </section>

      <div className="resume-container">
        {/* Professional Experience Section */}
        <section className="resume-section">
          <h2>Professional Experience</h2>
          
          <div className="experience-item">
            <div className="experience-header">
              <h3>Environmental Engineer</h3>
              <p className="experience-company">National Institute of Water and Atmospheric Research (NIWA), New Zealand</p>
              <p className="experience-date">March 2023 - Present</p>
            </div>
            <ul className="experience-responsibilities">
              <li>Spearhead development of innovative Aquatic Mitigation Systems, compliant with NES-F regulations</li>
              <li>Conducted comprehensive economic analyses of constructed wetlands and woodchip bioreactors, including capital costs, operational expenses, and long-term maintenance requirements</li>
              <li>Developed cost-benefit models for various mitigation systems, incorporating factors such as land value, construction costs, and treatment efficiency</li>
              <li>Lead multidisciplinary teams in MBIE endeavor fund grant applications, including detailed financial projections</li>
              <li>Ensure compliance with RMA requirements in environmental assessments</li>
              <li>Conducted catchment studies following NPS-FM 2020 guidelines, including economic feasibility assessments</li>
              <li>Experience in catchment water quality and quantity modeling at NIWA, including CLUES model calibration, and am familiar with hydrological modeling using HEC-HMS, HEC-RAS, and groundwater modeling</li>
            </ul>
            <div className="experience-achievements">
              <h4>Key Achievements:</h4>
              <ul>
                <li>Authored high-impact technical reports influencing national environmental policy and funding allocation</li>
                <li>Developed novel prediction models improving system efficiency by 30% while reducing operational costs</li>
                <li>Created comprehensive lifecycle cost analysis framework for mitigation systems</li>
              </ul>
            </div>
          </div>
          
          <div className="experience-item">
            <div className="experience-header">
              <h3>Environmental Engineer</h3>
              <p className="experience-company">Williamson Water and Land Advisory, New Zealand</p>
              <p className="experience-date">Sep 2022 - Dec 2022</p>
            </div>
            <ul className="experience-responsibilities">
              <li>Designed water and wastewater systems compliant with Drinking Water Standards NZ</li>
              <li>Developed client proposals incorporating comprehensive cost-benefit analyses</li>
              <li>Conducted economic feasibility studies for water infrastructure projects</li>
            </ul>
          </div>
          
          <div className="experience-item">
            <div className="experience-header">
              <h3>Chemical Engineer</h3>
              <p className="experience-company">Bidestan Alcohol and Foodstuff Co, Iran</p>
              <p className="experience-date">2016 - 2019</p>
            </div>
            <ul className="experience-responsibilities">
              <li>Optimized bioethanol production processes, achieving 25% yield increase</li>
              <li>Designed and implemented advanced wastewater treatment systems</li>
            </ul>
            <div className="experience-achievements">
              <h4>Key Achievements:</h4>
              <ul>
                <li>Pioneered novel rotary drum dryer design for waste repurposing</li>
                <li>Reduced operational costs by 30% through process optimization</li>
              </ul>
            </div>
          </div>
        </section>
        
        {/* Education Section */}
        <section className="resume-section">
          <h2>Education</h2>
          
          <div className="education-item">
            <div className="education-header">
              <h3>PhD in Environmental Engineering</h3>
              <p className="education-institution">University of Waikato, New Zealand</p>
              <p className="education-date">2019 - 2022</p>
            </div>
            <div className="education-details">
              <p><strong>Thesis:</strong> "Enhanced Nitrate Removal via Carbon Dosing in Woodchip Bioreactors"</p>
              <p><strong>Focus:</strong> Cost-effective solutions for agricultural water treatment</p>
              <ul className="education-achievements">
                <li>Published 3 peer-reviewed articles in high-impact journals</li>
                <li>Awarded university research excellence scholarship</li>
              </ul>
            </div>
          </div>
          
          <div className="education-item">
            <div className="education-header">
              <h3>MSc in Chemical Engineering</h3>
              <p className="education-institution">Sahand University of Technology, Iran</p>
              <p className="education-date">2015 - 2017</p>
            </div>
            <div className="education-details">
              <p><strong>Thesis:</strong> "Optimizing Bioethanol Production in Fed-Batch Bioreactors"</p>
              <ul className="education-achievements">
                <li>Achieved 20% improvement in bioethanol production efficiency</li>
              </ul>
            </div>
          </div>
          
          <div className="education-item">
            <div className="education-header">
              <h3>BSc in Chemical Engineering</h3>
              <p className="education-institution">University of Zanjan, Iran</p>
              <p className="education-date">2011 - 2015</p>
            </div>
          </div>
        </section>
        
        {/* Skills Section */}
        <section className="resume-section">
          <h2>Core Competencies & Technical Expertise</h2>
          
          <div className="skills-container">
            <div className="skills-category">
              <h3>Core Competencies</h3>
              <ul className="skills-list">
                <li>Advanced data analysis & modeling</li>
                <li>Environmental impact assessment</li>
                <li>Economic feasibility analysis</li>
                <li>Sustainable technology design</li>
                <li>Project management & leadership</li>
                <li>Research & development</li>
              </ul>
            </div>
            
            <div className="skills-category">
              <h3>Engineering & Analysis</h3>
              <ul className="skills-list">
                <li>Advanced (Bio)process Engineering</li>
                <li>Environmental Impact Assessment</li>
                <li>Life Cycle Assessment (LCA)</li>
                <li>Techno-Economic Analysis</li>
                <li>Risk Assessment & Management</li>
                <li>Cost-Benefit Analysis</li>
                <li>RMA Assessment of Effects</li>
              </ul>
            </div>
            
            <div className="skills-category">
              <h3>Software & Tools</h3>
              <ul className="skills-list">
                <li>Python, R (Data Analysis)</li>
                <li>Machine Learning Frameworks</li>
                <li>FreeCAD (3D Modeling)</li>
                <li>QGIS (Geospatial Analysis)</li>
                <li>EPANET (Water Distribution)</li>
                <li>Microsoft Office</li>
                <li>LaTeX</li>
              </ul>
            </div>
            
            <div className="skills-category">
              <h3>Regulatory Knowledge</h3>
              <ul className="skills-list">
                <li>Resource Management Act 1991 (RMA) and amendments</li>
                <li>National Environmental Standards for Freshwater (NES-F)</li>
                <li>National Policy Statement for Freshwater Management 2020 (NPS-FM)</li>
                <li>Health and Safety at Work Act 2015 (HSWA)</li>
                <li>Regional and District Plan requirements</li>
                <li>Te Mana o te Wai framework implementation</li>
                <li>Climate Change Response Act 2002 and amendments</li>
              </ul>
            </div>
          </div>
        </section>
        
        {/* Publications Section */}
        <section className="resume-section">
          <h2>Selected Publications</h2>
          
          <div className="publications-container">
            <h3>Journal Articles</h3>
            <ol className="publications-list">
              <li>Moghaddam, R., et al. (2023). "Flow analysis and hydraulic performance of denitrifying bioreactors under different carbon dosing treatments." Journal of Environmental Management, 328, 116926.</li>
              <li>Moghaddam, R., et al. (2023). "Constant carbon dosing of a pilot-scale denitrifying bioreactor to improve nitrate removal from agricultural tile drainage." Ecological Engineering, 187, 106851.</li>
              <li>Moghaddam, R., et al. (2022). "Enhanced nitrate removal and side effects of methanol dosing in denitrifying bioreactors." Ecological Engineering, 185, 106818.</li>
              <li>Moghaddam, R., et al. (2019). "Optimization of submerged fermentation conditions to overproduce bioethanol using two industrial and traditional Saccharomyces cerevisiae strains." Green Processing and Synthesis, 8(1), 157-162.</li>
              <li>Moghaddam, R., et al. (2018). "Screening of the five different wild, traditional and industrial Saccharomyces cerevisiae strains to overproduce bioethanol in the batch submerged fermentation." Zeitschrift für Naturforschung C, 73(9-10), 361-366.</li>
            </ol>
            
            <h3>Conference Papers</h3>
            <ul className="publications-list">
              <li>Moghaddam, R., et al. (2022). "Carbon dosing enhances nitrate removal effectiveness in denitrifying bioreactors: A field trial in New Zealand." Diverse Solutions for Efficient Land, Water and Nutrient Use Conference, Massey University, NZ.</li>
              <li>Moghaddam, R., et al. (2023). "Enhanced Nitrate Removal with Methanol Dosing in Woodchip Bioreactors: Laboratory and Field Evidence." Farmed Landscapes Research Centre Conference, Massey University, NZ.</li>
            </ul>
            
            <h3>Technical Reports</h3>
            <ul className="publications-list">
              <li>Hughes, A., Moghaddam, R. (2024). "Kaiate Stream: assessment of changes in faecal contaminants and turbidity after the implementation of mitigation measures." NIWA Client Report, 2024008HN: 30.</li>
              <li>Stott, R., Wood, D., Moghaddam, R. (2023). "New Plymouth WWTP: wastewater characterisation and assessment of microbiological effects." NIWA Client Report, 2023366HN: 56.</li>
              <li>Hudson, N., Semadeni-Davies, A., Moghaddam, R. (2023). "Estimation of contaminant losses Mill Creek catchment, Lake Hayes." Prepared for Otago Regional Council, June 2023.</li>
            </ul>
            
            <h3>PhD Thesis</h3>
            <ul className="publications-list">
              <li>Moghaddam, R. (2023). "Carbon Dosing of Denitrifying Bioreactors to Remove Nitrate from Agricultural Drainage." DOI:10.13140/RG.2.2.30515.09760</li>
            </ul>
          </div>
        </section>
        
        {/* Professional Development Section */}
        <section className="resume-section">
          <h2>Professional Development & Recognition</h2>
          
          <ul className="professional-development-list">
            <li>Washington Accord Recognition - Engineering Knowledge Assessment 2024</li>
            <li>Project Management Certification 2023</li>
            <li>Member, Engineering New Zealand</li>
            <li>Pursuing Chartered Professional Engineer (CPEng) status</li>
          </ul>
        </section>
        
        {/* Languages Section */}
        <section className="resume-section">
          <h2>Languages</h2>
          
          <ul className="languages-list">
            <li><strong>English:</strong> Professional working proficiency</li>
            <li><strong>Persian:</strong> Native proficiency</li>
          </ul>
        </section>
        
        {/* Download Resume */}
        <div className="resume-download">
          <h3>Need a printable version?</h3>
          <p>You can download my complete resume as a PDF for your records.</p>
          <a href="/download-resume" className="btn primary-btn">Download Resume (PDF)</a>
        </div>
        
        {/* Contact CTA */}
        <div className="consulting-cta">
          <h3>Interested in Working Together?</h3>
          <p>If you're looking for expertise in environmental engineering, water treatment, or bioprocess optimization, I'd be happy to discuss how I can contribute to your projects.</p>
          <Link to="/contact" className="btn primary-btn">Get in Touch</Link>
        </div>
      </div>
    </div>
  );
};

export default ResumePage;
"""
    with open('src/pages/ResumePage.js', 'w', encoding='utf-8') as f:
        f.write(content)
    print("Created ResumePage.js with professional resume details")

def create_contact_page():
    """Create the ContactPage component with updated service listings"""
    content = """import React, { useState } from 'react';

const ContactPage = () => {
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  // Validation state
  const [formErrors, setFormErrors] = useState({});
  
  // Form submission state
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');
  
  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Clear errors when user starts typing
    if (formErrors[name]) {
      setFormErrors({
        ...formErrors,
        [name]: ''
      });
    }
  };
  
  // Validate form
  const validateForm = () => {
    const errors = {};
    
    if (!formData.name.trim()) {
      errors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
      errors.email = 'Please enter a valid email address';
    }
    
    if (!formData.subject.trim()) {
      errors.subject = 'Subject is required';
    }
    
    if (!formData.message.trim()) {
      errors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      errors.message = 'Message must be at least 10 characters';
    }
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };
  
  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate form
    if (!validateForm()) {
      return;
    }
    
    // Set submitting state
    setIsSubmitting(true);
    // Clear any previous error message
    setSubmitError('');
    
    // Simulate form submission (would be replaced with actual API call)
    setTimeout(() => {
      try {
        setIsSubmitting(false);
        setSubmitSuccess(true);
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
        
        // Reset success message after 5 seconds
        setTimeout(() => {
          setSubmitSuccess(false);
        }, 5000);
      } catch (error) {
        // Handle any potential errors
        setIsSubmitting(false);
        setSubmitError('Failed to send message. Please try again later.');
      }
    }, 1500);
  };

  return (
    <div className="contact-page">
      <section className="page-header">
        <h1>Contact Me</h1>
        <p>Get in touch for collaborations, consultations, or inquiries</p>
      </section>

      <section className="contact-container">
        <div className="contact-info">
          <h2>Contact Information</h2>
          <div className="contact-details">
            <div className="contact-item">
              <span className="contact-label">Email:</span>
              <span className="contact-value">che.eng@live.com</span>
            </div>
            <div className="contact-item">
              <span className="contact-label">Phone:</span>
              <span className="contact-value">+642108052489</span>
            </div>
            <div className="contact-item">
              <span className="contact-label">Based in:</span>
              <span className="contact-value">New Zealand</span>
            </div>
          </div>

          <div className="social-links">
            <h3>Professional Profiles</h3>
            <div className="social-grid">
              <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="social-link">
                LinkedIn
              </a>
              <a href="https://www.researchgate.net/" target="_blank" rel="noopener noreferrer" className="social-link">
                ResearchGate
              </a>
              <a href="https://scholar.google.com/" target="_blank" rel="noopener noreferrer" className="social-link">
                Google Scholar
              </a>
              <a href="https://niwa.co.nz/profile" target="_blank" rel="noopener noreferrer" className="social-link">
                NIWA Profile
              </a>
            </div>
          </div>
          
          <div className="consulting-services">
            <h3>Consulting Services</h3>
            <p>I offer expert consulting in:</p>
            <ul className="service-features">
              <li>Hydrogeology Analysis & Modeling</li>
              <li>Catchment Hydrology & Water Quality</li>
              <li>Municipal & Agricultural Wastewater Treatment</li>
              <li>Water & Wastewater Reticulation Design</li>
              <li>Environmental Management & Compliance</li>
              <li>Chemical & Food Processing Optimization</li>
              <li>Resource Consent Applications (RMA, NES-F)</li>
            </ul>
            <p className="mt-3">Request a consultation by filling out the form.</p>
          </div>
        </div>

        <div className="contact-form-container">
          <h2>Send Me a Message</h2>
          
          {submitSuccess && (
            <div className="form-success">
              Thank you for your message! I'll get back to you as soon as possible.
            </div>
          )}
          
          {submitError && (
            <div className="form-error">
              {submitError}
            </div>
          )}
          
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                value={formData.name}
                onChange={handleChange}
              />
              {formErrors.name && <span className="form-error">{formErrors.name}</span>}
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                value={formData.email}
                onChange={handleChange}
              />
              {formErrors.email && <span className="form-error">{formErrors.email}</span>}
            </div>
            
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input 
                type="text" 
                id="subject" 
                name="subject" 
                value={formData.subject}
                onChange={handleChange}
              />
              {formErrors.subject && <span className="form-error">{formErrors.subject}</span>}
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea 
                id="message" 
                name="message" 
                rows="5" 
                value={formData.message}
                onChange={handleChange}
              ></textarea>
              {formErrors.message && <span className="form-error">{formErrors.message}</span>}
            </div>
            
            <button 
              type="submit" 
              className="btn primary-btn"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
"""
    with open('src/pages/ContactPage.js', 'w', encoding='utf-8') as f:
        f.write(content)
    print("Created ContactPage.js with updated service listings")

def create_app_css():
    """Create the App.css file with styles including resume styles"""
    content = """/* App.css - Main styling for the portfolio website */

/* Reset & Base Styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  line-height: 1.6;
  color: #333;
  background-color: #f9f9f9;
}

.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.main-content {
  flex: 1;
}

h1, h2, h3 {
  margin-bottom: 1rem;
}

a {
  text-decoration: none;
  color: inherit;
}

ul {
  list-style: none;
}

.btn {
  display: inline-block;
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.primary-btn {
  background-color: #1a5276;
  color: white;
}

.primary-btn:hover {
  background-color: #154360;
}

.secondary-btn {
  background-color: transparent;
  color: #1a5276;
  border: 2px solid #1a5276;
}

.secondary-btn:hover {
  background-color: rgba(26, 82, 118, 0.1);
}

section {
  padding: 4rem 2rem;
}

section h2 {
  text-align: center;
  font-size: 2rem;
  margin-bottom: 2rem;
  color: #1a5276;
}

.section-cta {
  text-align: center;
  margin-top: 2rem;
}

/* Navbar Styles */
.navbar {
  background-color: white;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 100;
}

.navbar-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 2rem;
}

.navbar-logo {
  font-size: 1.5rem;
  font-weight: 700;
  color: #1a5276;
}

.nav-menu {
  display: flex;
}

.nav-item {
  margin-left: 1.5rem;
}

.nav-link {
  font-weight: 500;
  color: #333;
  transition: color 0.3s ease;
}

.nav-link:hover {
  color: #1a5276;
}

.nav-link.active {
  color: #1a5276;
  border-bottom: 2px solid #1a5276;
}

.mobile-menu-button {
  display: none;
  background: none;
  border: none;
  font-size: 1rem;
  cursor: pointer;
  color: #1a5276;
}

@media (max-width: 768px) {
  .mobile-menu-button {
    display: block;
  }
  
  .nav-menu {
    display: none;
  }
  
  .mobile-menu {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background-color: white;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
    padding: 1rem;
  }
  
  .mobile-menu .nav-item {
    margin: 0.5rem 0;
  }
}

/* Hero Section */
.hero {
  /* Use a gradient fallback if image is not available */
  background: linear-gradient(135deg, #1a5276, #2980b9);
  background-size: cover;
  background-position: center;
  color: white;
  text-align: center;
  padding: 6rem 2rem;
}

/* Only load the hero image if it exists */
.hero-with-image {
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), 
              url('./assets/hero-bg.jpg');
}

.hero-content {
  max-width: 800px;
  margin: 0 auto;
}

.hero h1 {
  font-size: 3rem;
  margin-bottom: 0.5rem;
}

.hero h2 {
  font-size: 1.5rem;
  font-weight: 400;
  margin-bottom: 1.5rem;
  color: white;
}

.hero p {
  font-size: 1.2rem;
  margin-bottom: 2rem;
}

.hero-buttons {
  display: flex;
  justify-content: center;
  gap: 1rem;
}

/* Expertise Section */
.expertise {
  background-color: white;
}

.expertise-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.expertise-card {
  background-color: #f5f5f5;
  padding: 2rem;
  border-radius: 8px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.expertise-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

.expertise-card h3 {
  color: #1a5276;
  font-size: 1.3rem;
}

.expertise-card ul {
  margin-top: 1rem;
}

.expertise-card li {
  margin-bottom: 0.5rem;
  position: relative;
  padding-left: 1.5rem;
}

.expertise-card li:before {
  content: "✓";
  position: absolute;
  left: 0;
  color: #27ae60;
}

/* Projects Section */
.featured-projects {
  background-color: #f5f9fc;
}

.project-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.project-card {
  background-color: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;
}

.project-card:hover {
  transform: translateY(-5px);
}

.project-card h3 {
  color: #1a5276;
}

.project-metrics {
  margin: 1rem 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.project-metrics span {
  background-color: #e1f5fe;
  padding: 0.5rem;
  border-radius: 4px;
  font-size: 0.9rem;
}

.project-link {
  display: inline-block;
  margin-top: 1rem;
  color: #1a5276;
  font-weight: 600;
}

.project-link:hover {
  text-decoration: underline;
}

/* Publications Section */
.publications-preview {
  background-color: white;
}

.publication-list {
  max-width: 900px;
  margin: 0 auto;
}

.publication-item {
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  border-left: 4px solid #1a5276;
  background-color: #f9f9f9;
}

.publication-item h3 {
  font-size: 1.2rem;
  color: #333;
}

.publication-item p {
  color: #666;
}

/* Contact CTA */
.contact-cta {
  background: linear-gradient(135deg, #1a5276, #2980b9);
  color: white;
  text-align: center;
}

.contact-cta h2 {
  color: white;
}

.contact-cta p {
  max-width: 700px;
  margin: 0 auto 2rem auto;
  font-size: 1.1rem;
}

.contact-cta .btn {
  background-color: white;
  color: #1a5276;
}

.contact-cta .btn:hover {
  background-color: #f5f5f5;
}

/* Page Header */
.page-header {
  background-color: #1a5276;
  color: white;
  text-align: center;
  padding: 4rem 2rem;
}

.page-header h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.page-header p {
  font-size: 1.2rem;
  max-width: 700px;
  margin: 0 auto;
}

/* Projects Page */
.projects-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 3rem 2rem;
}

.project-full-card {
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  padding: 2rem;
  margin-bottom: 2rem;
}

.project-description {
  font-size: 1.2rem;
  color: #555;
  margin-bottom: 1.5rem;
}

.metrics-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin-top: 1rem;
}

.metric-item {
  background-color: #f5f9fc;
  padding: 1rem;
  border-radius: 4px;
}

.tech-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 1rem;
}

.tech-tag {
  background-color: #e1f5fe;
  color: #0277bd;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
}

/* Publications Page */
.publications-container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 3rem 2rem;
}

.publication-card {
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  border-left: 4px solid #1a5276;
  background-color: #f9f9f9;
}

/* Contact Page */
.contact-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 3rem 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.form-group {
  display: flex;
  flex-direction: column;
}

.form-group label {
  margin-bottom: 0.5rem;
  font-weight: 500;
}

.form-group input,
.form-group textarea {
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-family: inherit;
  font-size: 1rem;
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: #1a5276;
  box-shadow: 0 0 0 2px rgba(26, 82, 118, 0.2);
}

.form-error {
  color: #e74c3c;
  font-size: 0.9rem;
  margin-top: 0.3rem;
}

.form-success {
  background-color: #d4edda;
  color: #155724;
  padding: 1rem;
  border-radius: 4px;
  margin-bottom: 1rem;
}

/* Footer */
.footer {
  background-color: #1a5276;
  color: white;
  padding: 2rem;
  text-align: center;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
}

.footer-links {
  display: flex;
  justify-content: center;
  margin: 1rem 0;
  gap: 1.5rem;
}

.footer-link {
  color: white;
  transition: opacity 0.3s ease;
}

.footer-link:hover {
  opacity: 0.8;
}

.footer-bottom {
  margin-top: 1rem;
  font-size: 0.9rem;
  opacity: 0.8;
}

/* Not Found Page */
.not-found {
  text-align: center;
  padding: 6rem 2rem;
}

.not-found h1 {
  font-size: 4rem;
  color: #1a5276;
}

.not-found p {
  font-size: 1.2rem;
  margin-bottom: 2rem;
}

/* Consulting Page Styles */
.consulting-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 3rem 2rem;
}

.service-category {
  margin-bottom: 4rem;
}

.service-category h2 {
  color: #1a5276;
  margin-bottom: 2rem;
  text-align: left;
  border-bottom: 2px solid #1a5276;
  padding-bottom: 0.5rem;
}

.service-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
}

.service-card {
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  padding: 2rem;
  transition: transform 0.3s ease;
}

.service-card:hover {
  transform: translateY(-5px);
}

.service-card h3 {
  color: #1a5276;
  margin-bottom: 1rem;
}

.service-card p {
  color: #555;
  margin-bottom: 1.5rem;
}

.service-features {
  margin-top: 1rem;
}

.service-features li {
  margin-bottom: 0.5rem;
  position: relative;
  padding-left: 1.5rem;
}

.service-features li:before {
  content: "✓";
  position: absolute;
  left: 0;
  color: #27ae60;
}

.full-service-card {
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  padding: 2rem;
  margin-bottom: 2rem;
}

.consulting-cta {
  background-color: #f5f9fc;
  padding: 3rem;
  text-align: center;
  margin-top: 2rem;
  border-radius: 8px;
}

.consulting-cta h3 {
  margin-bottom: 1rem;
}

.consulting-cta p {
  max-width: 800px;
  margin: 0 auto 2rem auto;
}

/* Resume Page Styles */
.resume-container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 3rem 2rem;
}

.resume-section {
  margin-bottom: 3rem;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  padding: 2rem;
}

.resume-section h2 {
  color: #1a5276;
  margin-bottom: 1.5rem;
  text-align: left;
  border-bottom: 2px solid #1a5276;
  padding-bottom: 0.5rem;
}

.experience-item, .education-item {
  margin-bottom: 2.5rem;
}

.experience-header, .education-header {
  margin-bottom: 1rem;
}

.experience-header h3, .education-header h3 {
  color: #333;
  margin-bottom: 0.5rem;
}

.experience-company, .education-institution, .experience-date, .education-date {
  color: #666;
  font-style: italic;
}

.experience-date, .education-date {
  font-weight: 600;
  color: #1a5276;
}

.experience-responsibilities, .education-details {
  margin-bottom: 1.5rem;
}

.experience-responsibilities li, .education-details li {
  margin-bottom: 0.5rem;
  position: relative;
  padding-left: 1.5rem;
}

.experience-responsibilities li:before, .education-details li:before {
  content: "•";
  position: absolute;
  left: 0;
  color: #1a5276;
}

.experience-achievements h4, .education-details strong {
  color: #1a5276;
  margin-bottom: 0.5rem;
}

.experience-achievements ul {
  margin-left: 1rem;
}

.experience-achievements li {
  margin-bottom: 0.5rem;
  position: relative;
  padding-left: 1.5rem;
}

.experience-achievements li:before {
  content: "★";
  position: absolute;
  left: 0;
  color: #27ae60;
}

.skills-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.skills-category h3 {
  color: #1a5276;
  margin-bottom: 1rem;
  font-size: 1.2rem;
}

.skills-list li {
  margin-bottom: 0.5rem;
  position: relative;
  padding-left: 1.5rem;
}

.skills-list li:before {
  content: "✓";
  position: absolute;
  left: 0;
  color: #27ae60;
}

.publications-container h3 {
  color: #1a5276;
  margin: 1.5rem 0 1rem 0;
}

.publications-list {
  margin-left: 1.5rem;
}

.publications-list li {
  margin-bottom: 0.75rem;
  line-height: 1.6;
}

.professional-development-list li, .languages-list li {
  margin-bottom: 0.75rem;
  position: relative;
  padding-left: 1.5rem;
}

.professional-development-list li:before, .languages-list li:before {
  content: "•";
  position: absolute;
  left: 0;
  color: #1a5276;
}

.resume-download {
  text-align: center;
  margin: 2rem 0;
}

.resume-download h3 {
  margin-bottom: 0.5rem;
}

.resume-download p {
  margin-bottom: 1.5rem;
}

/* Responsive Design */
@media (max-width: 768px) {
  .contact-container {
    grid-template-columns: 1fr;
  }
  
  .hero-buttons {
    flex-direction: column;
  }
  
  .service-grid {
    grid-template-columns: 1fr;
  }
  
  .skills-container {
    grid-template-columns: 1fr;
  }
  
  .project-grid {
    grid-template-columns: 1fr;
  }
  
  .hero h1 {
    font-size: 2.5rem;
  }
}
"""
    with open('src/App.css', 'w', encoding='utf-8') as f:
        f.write(content)
    print("Created App.css with resume styles")

def create_index_html():
    """Create the index.html file with enhanced metadata"""
    content = """<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#1a5276" />
    <meta
      name="description"
      content="Dr. Reza Moghaddam - Environmental & Bioprocess Engineer Portfolio | Expert consulting in Hydrogeology, Catchment Modeling, Wastewater Treatment, and Environmental Compliance"
    />
    <meta name="keywords" content="Environmental Engineering, Hydrogeology, Catchment Modeling, Water Quality, Wastewater Treatment, Bioreactors, Nitrate Removal, Municipal Wastewater, Agricultural Wastewater, NES-F Compliance, Resource Management Act, RMA, NPS-FM, GIS, Process Optimization, New Zealand" />
    <meta name="author" content="Dr. Reza Moghaddam" />
    <title>Dr. Reza Moghaddam | Environmental Engineer & Consultant</title>
  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
  </body>
</html>
"""
    with open('public/index.html', 'w', encoding='utf-8') as f:
        f.write(content)
    print("Created index.html with enhanced metadata")

def main():
    """Main function that orchestrates the website creation"""
    print("\n=== Creating Enhanced Professional Portfolio Website ===\n")
    
    # Create directory structure
    create_directories()
    
    # Create core React files
    create_app_js()
    create_app_css()
    
    # Create components
    create_navbar_component()
    create_footer_component()
    
    # Create pages
    create_home_page()
    create_consulting_page()
    create_resume_page()
    create_contact_page()
    
    # Create HTML and config files
    create_index_html()
    
    print("\n=== Enhanced Professional Portfolio Website Structure Created Successfully! ===\n")
    print("Next steps:")
    print("1. Run 'npm install' to install dependencies")
    print("2. Run 'npm start' to preview the website locally")
    print("3. Deploy to Netlify or your preferred hosting platform")
    print("\nEnhancements in this version:")
    print("1. Added comprehensive Resume page with professional experience and qualifications")
    print("2. Expanded Consulting Services with detailed service categories:")
    print("   - Hydrogeology Analysis & Modeling (groundwater flow, solute transport)")
    print("   - Catchment Hydrology Analysis & Modeling (rainfall-runoff, water quality)")
    print("   - Municipal & Agricultural Wastewater Treatment (advanced systems)")
    print("   - Water & Wastewater Reticulation Design")
    print("   - Environmental Management & Compliance (RMA, NES-F)")
    print("   - Chemical & Food Processing Optimization")
    print("3. Updated content to reflect actual experience from the provided resume")
    print("4. Improved site metadata and SEO elements")
    print("5. Enhanced mobile responsiveness")

if __name__ == "__main__":
    main()