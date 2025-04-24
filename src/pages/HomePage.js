import React, { useEffect, useState } from 'react';
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
