import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Dr. Reza Moghaddam</h1>
          <h2>Environmental & Bioprocess Engineer</h2>
          <p>Specializing in innovative water treatment solutions, sustainable technology design, and environmental impact assessment.</p>
          <div className="hero-buttons">
            <Link to="/projects" className="btn primary-btn">View Projects</Link>
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
            </ul>
          </div>
          <div className="expertise-card">
            <h3>Bioprocess Engineering</h3>
            <ul>
              <li>Bioreactor Design & Optimization</li>
              <li>Bioethanol Production</li>
              <li>Fermentation Process Control</li>
              <li>Scale-up Methodology</li>
            </ul>
          </div>
          <div className="expertise-card">
            <h3>Analysis & Research</h3>
            <ul>
              <li>Techno-Economic Analysis</li>
              <li>Life Cycle Assessment</li>
              <li>Data Analysis (Python, R)</li>
              <li>Scientific Publication</li>
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
