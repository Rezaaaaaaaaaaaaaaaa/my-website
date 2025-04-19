import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import heroImage from '../assets/hero-bg.jpg';
import { ReactComponent as EnvironmentalIcon } from '../assets/icons/environmental-icon.svg';
import { ReactComponent as BioprocessIcon } from '../assets/icons/bioprocess-icon.svg';
import { ReactComponent as ModelingIcon } from '../assets/icons/modeling-icon.svg';
import { ReactComponent as NitrateIcon } from '../assets/icons/nitrate-icon.svg';
import { ReactComponent as UasbIcon } from '../assets/icons/uasb-icon.svg';
import { ReactComponent as CatchmentModelIcon } from '../assets/icons/catchment-model-icon.svg';

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
          <p>Specializing in innovative water treatment solutions, sustainable technology design, environmental impact assessment, and advanced process optimization.</p>
          <div className="hero-buttons">
            <Link to="/services" className="btn primary-btn">Our Services</Link>
            <Link to="/contact" className="btn secondary-btn">Contact Me</Link>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="expertise">
        <h2>Areas of Expertise</h2>
        <div className="expertise-grid">
          <div className="expertise-card">
            <EnvironmentalIcon className="expertise-card-icon" />
            <h3>Environmental Engineering</h3>
            <ul>
              <li>Municipal & Agricultural Wastewater Treatment</li>
              <li>Denitrifying Bioreactors</li>
              <li>Agricultural Impact Mitigation</li>
              <li>Water & Wastewater Reticulation Design</li>
            </ul>
          </div>
          <div className="expertise-card">
            <BioprocessIcon className="expertise-card-icon" />
            <h3>Bioprocess Engineering</h3>
            <ul>
              <li>Aerobic & Anaerobic Treatment Systems</li>
              <li>Bioreactor Design & Optimization</li>
              <li>Fermentation Process Control</li>
              <li>Scale-up Methodology</li>
            </ul>
          </div>
          <div className="expertise-card">
            <ModelingIcon className="expertise-card-icon" />
            <h3>Modeling & Analysis</h3>
            <ul>
              <li>Catchment & Water Resource Modeling</li>
              <li>Chemical & Food Processing Optimization</li>
              <li>Life Cycle Assessment</li>
              <li>Advanced Data Analysis (Python, R)</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="featured-projects">
        <h2>Featured Projects</h2>
        <div className="project-grid">
          <div className="project-card">
            <NitrateIcon className="project-card-icon" />
            <h3>Enhanced Nitrate Removal in Woodchip Bioreactors</h3>
            <p>Implementation of carbon dosing techniques to improve nitrate removal efficiency in agricultural drainage systems.</p>
            <div className="project-metrics">
              <span>Efficiency Improvement: 30%</span>
              <span>Cost Reduction: 25%</span>
            </div>
            <Link to="/projects" className="project-link">Learn More</Link>
          </div>
          <div className="project-card">
            <UasbIcon className="project-card-icon" />
            <h3>Municipal WWTP Optimization Using UASB Technology</h3>
            <p>Implementation of Upflow Anaerobic Sludge Blanket (UASB) reactors for enhanced energy efficiency in wastewater treatment.</p>
            <div className="project-metrics">
              <span>Energy Production: 40% increase</span>
              <span>Operational Cost: 35% reduction</span>
            </div>
            <Link to="/projects" className="project-link">Learn More</Link>
          </div>
          <div className="project-card">
            <CatchmentModelIcon className="project-card-icon" />
            <h3>Catchment Modeling for Agricultural Runoff Mitigation</h3>
            <p>Comprehensive modeling of surface and groundwater interactions to optimize placement of water quality interventions.</p>
            <div className="project-metrics">
              <span>Contaminant Reduction: 45%</span>
              <span>Implementation Efficiency: 60% improvement</span>
            </div>
            <Link to="/projects" className="project-link">Learn More</Link>
          </div>
        </div>
        <div className="section-cta">
          <Link to="/projects" className="btn primary-btn">View All Projects</Link>
        </div>
      </section>

      {/* Services Preview */}
      <section className="publications-preview">
        <h2>Consultancy Services</h2>
        <div className="publication-list">
          <div className="publication-item">
            <h3>Advanced Wastewater Treatment Design & Optimization</h3>
            <p>Specialized consulting for municipal and agricultural wastewater systems using innovative aerobic and anaerobic technologies.</p>
            <Link to="/services" className="project-link">Learn More</Link>
          </div>
          <div className="publication-item">
            <h3>Catchment Modeling & Water Resource Management</h3>
            <p>Comprehensive surface and groundwater quality/quantity modeling for sustainable resource planning and regulatory compliance.</p>
            <Link to="/services" className="project-link">Learn More</Link>
          </div>
        </div>
        <div className="section-cta">
          <Link to="/services" className="btn primary-btn">Explore All Services</Link>
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

      {/* Contact CTA */}
      <section className="contact-cta">
        <div className="contact-cta-content">
          <h2>Interested in Collaboration?</h2>
          <p>I'm always open to discussing research projects, consulting opportunities, or innovative solutions for environmental challenges.</p>
          <Link to="/contact" className="btn primary-btn">Get in Touch</Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
