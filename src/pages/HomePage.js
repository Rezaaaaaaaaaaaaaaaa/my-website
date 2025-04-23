import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import heroImage from '../assets/backgrounds/hero-bg.svg';

// Import service icons
import { ReactComponent as WastewaterIcon } from '../assets/icons/wastewater-treatment.svg';
import { ReactComponent as ReticulationIcon } from '../assets/icons/water-reticulation.svg';
import { ReactComponent as CatchmentIcon } from '../assets/icons/catchment-modeling.svg';
import { ReactComponent as ProcessIcon } from '../assets/icons/process-optimization.svg';
import { ReactComponent as BioprocessIcon } from '../assets/icons/bioprocess-engineering.svg';

const HomePage = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [animatedElements, setAnimatedElements] = useState({
    hero: false,
    expertise: false,
    projects: false,
    services: false,
    publications: false
  });
  
  useEffect(() => {
    // Check if the hero image exists by trying to load it
    const img = new Image();
    img.onload = () => setImageLoaded(true);
    img.onerror = () => setImageLoaded(false);
    img.src = heroImage;
    
    // Add scroll animation observer
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setAnimatedElements(prev => ({
            ...prev,
            [entry.target.id]: true
          }));
        }
      });
    }, { threshold: 0.2 });
    
    // Observe sections
    const sections = document.querySelectorAll('.animate-on-scroll');
    sections.forEach(section => {
      observer.observe(section);
    });
    
    // Set hero animation immediately
    setTimeout(() => {
      setAnimatedElements(prev => ({
        ...prev,
        hero: true
      }));
    }, 300);
    
    return () => {
      img.onload = null;
      img.onerror = null;
      sections.forEach(section => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className={`hero ${imageLoaded ? 'hero-with-image' : ''}`}>
        <div className={`hero-content ${animatedElements.hero ? 'fade-in' : ''}`}>
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
      <section id="expertise" className="expertise animate-on-scroll">
        <h2 className={animatedElements.expertise ? 'slide-up' : ''}>Areas of Expertise</h2>
        <div className="expertise-grid">
          <div className={`expertise-card ${animatedElements.expertise ? 'slide-in-left' : ''}`}>
            <h3><WastewaterIcon /> Environmental Engineering</h3>
            <ul>
              <li>Municipal & Agricultural Wastewater Treatment</li>
              <li>Denitrifying Bioreactors</li>
              <li>Agricultural Impact Mitigation</li>
              <li>Water & Wastewater Reticulation Design</li>
            </ul>
          </div>
          <div className={`expertise-card ${animatedElements.expertise ? 'slide-up' : ''}`}>
            <h3><BioprocessIcon /> Bioprocess Engineering</h3>
            <ul>
              <li>Aerobic & Anaerobic Treatment Systems</li>
              <li>Bioreactor Design & Optimization</li>
              <li>Fermentation Process Control</li>
              <li>Scale-up Methodology</li>
            </ul>
          </div>
          <div className={`expertise-card ${animatedElements.expertise ? 'slide-in-right' : ''}`}>
            <h3><CatchmentIcon /> Modeling & Analysis</h3>
            <ul>
              <li>Catchment & Water Resource Modeling</li>
              <li>Chemical & Food Processing Optimization</li>
              <li>Life Cycle Assessment</li>
              <li>Advanced Data Analysis (Python, R)</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section id="services" className="services-preview animate-on-scroll">
        <h2 className={animatedElements.services ? 'slide-up' : ''}>Consultancy Services</h2>
        <div className="services-grid">
          <div className={`service-preview-card ${animatedElements.services ? 'slide-in-left' : ''}`}>
            <WastewaterIcon className="service-icon" />
            <h3>Wastewater Treatment</h3>
            <p>Comprehensive design and optimization services for municipal and agricultural wastewater systems including innovative aerobic and anaerobic technologies.</p>
            <Link to="/services" className="service-link">Learn More</Link>
          </div>
          <div className={`service-preview-card ${animatedElements.services ? 'slide-up' : ''}`}>
            <ReticulationIcon className="service-icon" />
            <h3>Water Reticulation</h3>
            <p>Expert design services for water distribution and wastewater collection networks from small-scale developments to municipal systems.</p>
            <Link to="/services" className="service-link">Learn More</Link>
          </div>
          <div className={`service-preview-card ${animatedElements.services ? 'slide-in-right' : ''}`}>
            <CatchmentIcon className="service-icon" />
            <h3>Catchment Modeling</h3>
            <p>Advanced surface and groundwater modeling services for water resource management, water quality assessment, and regulatory compliance.</p>
            <Link to="/services" className="service-link">Learn More</Link>
          </div>
          <div className={`service-preview-card ${animatedElements.services ? 'slide-in-left' : ''}`}>
            <ProcessIcon className="service-icon" />
            <h3>Process Optimization</h3>
            <p>Systematic optimization of processing operations to enhance efficiency, reduce costs, and improve sustainability metrics.</p>
            <Link to="/services" className="service-link">Learn More</Link>
          </div>
        </div>
        <div className="section-cta">
          <Link to="/services" className="btn primary-btn">Explore All Services</Link>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section id="projects" className="featured-projects animate-on-scroll">
        <h2 className={animatedElements.projects ? 'slide-up' : ''}>Featured Projects</h2>
        <div className="project-grid">
          <div className={`project-card ${animatedElements.projects ? 'slide-in-left' : ''}`}>
            <h3>Enhanced Nitrate Removal in Woodchip Bioreactors</h3>
            <p>Implementation of carbon dosing techniques to improve nitrate removal efficiency in agricultural drainage systems.</p>
            <div className="project-metrics">
              <span>Efficiency Improvement: 30%</span>
              <span>Cost Reduction: 25%</span>
            </div>
            <Link to="/projects" className="project-link">Learn More</Link>
          </div>
          <div className={`project-card ${animatedElements.projects ? 'slide-up' : ''}`}>
            <h3>Municipal WWTP Optimization Using UASB Technology</h3>
            <p>Implementation of Upflow Anaerobic Sludge Blanket (UASB) reactors for enhanced energy efficiency in wastewater treatment.</p>
            <div className="project-metrics">
              <span>Energy Production: 40% increase</span>
              <span>Operational Cost: 35% reduction</span>
            </div>
            <Link to="/projects" className="project-link">Learn More</Link>
          </div>
          <div className={`project-card ${animatedElements.projects ? 'slide-in-right' : ''}`}>
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

      {/* Publications Preview */}
      <section id="publications" className="publications-preview animate-on-scroll">
        <h2 className={animatedElements.publications ? 'slide-up' : ''}>Recent Publications</h2>
        <div className="publication-list">
          <div className={`publication-item ${animatedElements.publications ? 'slide-in-left' : ''}`}>
            <h3>Flow analysis and hydraulic performance of denitrifying bioreactors under different carbon dosing treatments</h3>
            <p>Journal of Environmental Management, 2023</p>
          </div>
          <div className={`publication-item ${animatedElements.publications ? 'slide-in-right' : ''}`}>
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
