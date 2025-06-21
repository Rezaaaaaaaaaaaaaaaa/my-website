import React from 'react';
import './ProjectsPage.css'; // Import page-specific styles
import { FaSeedling, FaDatabase, FaGlobe, FaFlask } from 'react-icons/fa';

const ProjectsPage = () => {
  return (
    <div className="projects-page container"> {/* Added container class */}
      <nav className="dropdown-menu">
        <ul>
          <li>
            <a href="#bioreactors">Woodchip Bioreactors</a>
          </li>
          <li>
            <a href="#digital-twin">Digital Twin Systems</a>
          </li>
          <li>
            <a href="#watershed">Watershed Modeling</a>
          </li>
          <li>
            <a href="#nature-based">Nature-Based Solutions</a>
          </li>
        </ul>
      </nav>
      <section id="bioreactors" className="project-category">
        <h2>Woodchip Bioreactors</h2>
        <p>Optimizing nitrate removal efficiency in agricultural drainage systems.</p>
        <div className="project-grid">
          <div className="project-card">
            <FaSeedling className="project-icon" />
            <h3>Enhanced Nitrate Removal</h3>
            <p>Implementation of carbon dosing techniques for improved efficiency.</p>
          </div>
        </div>
      </section>
      <section id="digital-twin" className="project-category">
        <h2>Digital Twin Systems</h2>
        <p>Revolutionary technology for predictive maintenance and optimization.</p>
        <div className="project-grid">
          <div className="project-card">
            <FaDatabase className="project-icon" />
            <h3>Water Systems Development</h3>
            <p>Comprehensive digital replicas for real-time optimization.</p>
          </div>
        </div>
      </section>
      <section id="watershed" className="project-category">
        <h2>Watershed Modeling</h2>
        <p>Comprehensive framework for sustainable water resource management.</p>
        <div className="project-grid">
          <div className="project-card">
            <FaGlobe className="project-icon" />
            <h3>Integrated Simulation</h3>
            <p>Advanced modeling integrating environmental factors.</p>
          </div>
        </div>
      </section>
      <section id="nature-based" className="project-category">
        <h2>Nature-Based Solutions</h2>
        <p>Innovative networks for sustainable environmental management.</p>
        <div className="project-grid">
          <div className="project-card">
            <FaFlask className="project-icon" />
            <h3>Solution Networks</h3>
            <p>Development of cost-effective mitigation systems.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectsPage;
