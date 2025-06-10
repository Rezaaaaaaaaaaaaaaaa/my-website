import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  FaFlask, 
  FaWater, 
  FaChartLine, 
  FaProjectDiagram, 
  FaBook, 
  FaHandshake,
  FaLeaf,
  FaRobot,
  FaGlobe,
  FaDatabase,
  FaCogs,
  FaLightbulb,
  FaShieldAlt,
  FaMicroscope,
  FaSeedling
} from 'react-icons/fa';

const HomePage = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    // Animation for scroll effects
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(el => observer.observe(el));

    return () => {
      fadeElements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="home-page">
      {/* Enhanced Hero Section */}
      <section className="hero enhanced-header">
        <div className="header-background">
          <div className="floating-icons">
            <FaWater className="floating-icon icon-1" />
            <FaLeaf className="floating-icon icon-2" />
            <FaFlask className="floating-icon icon-3" />
            <FaGlobe className="floating-icon icon-4" />
            <FaCogs className="floating-icon icon-5" />
            <FaLightbulb className="floating-icon icon-6" />
            <FaRobot className="floating-icon icon-7" />
            <FaSeedling className="floating-icon icon-8" />
          </div>
        </div>
        <div className="header-content">
          <h1>Dr. Reza Moghaddam</h1>
          <h2>Environmental & Water Systems Engineer</h2>
          <p>Pioneering sustainable solutions through advanced environmental modeling, innovative water treatment technologies, and nature-based engineering approaches</p>
          <div className="hero-buttons">
            <Link to="/projects" className="btn primary-btn enhanced-btn">Explore Projects</Link>
            <Link to="/consulting" className="btn primary-btn enhanced-btn">Consulting Services</Link>
            <Link to="/contact" className="btn secondary-btn enhanced-btn">Start Collaboration</Link>
          </div>
          <div className="header-stats">
            <div className="stat-item">
              <span className="stat-number">15+</span>
              <span className="stat-label">Specialized Services</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">50+</span>
              <span className="stat-label">Projects Completed</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">10+</span>
              <span className="stat-label">Research Publications</span>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Expertise Section */}
      <section className="expertise modern-section fade-in">
        <div className="section-header">
          <FaLightbulb className="section-icon" />
          <h2>Core Areas of Expertise</h2>
          <p className="section-subtitle">Comprehensive environmental engineering solutions spanning multiple disciplines</p>
        </div>
        <div className="expertise-grid">
          <div className="expertise-card enhanced-card">
            <div className="card-header">
              <FaDatabase className="service-icon" />
              <h3>Environmental Systems Modeling</h3>
            </div>
            <ul>
              <li>Integrated watershed modeling and simulation</li>
              <li>Digital twin development for water systems</li>
              <li>Predictive environmental quality assessment</li>
              <li>Advanced hydraulic and hydrologic analysis</li>
              <li>Climate adaptation and resilience planning</li>
            </ul>
            <div className="technology-badges">
              <span className="tech-badge">SWMM/pySWMM</span>
              <span className="tech-badge">HEC-RAS</span>
              <span className="tech-badge">MODFLOW</span>
              <span className="tech-badge">Python</span>
            </div>
          </div>
          
          <div className="expertise-card enhanced-card">
            <div className="card-header">
              <FaFlask className="service-icon" />
              <h3>Water Treatment Technology</h3>
            </div>
            <ul>
              <li>Advanced treatment system design</li>
              <li>Innovative contaminant removal strategies</li>
              <li>Bioprocess engineering and optimization</li>
              <li>Resource recovery system development</li>
              <li>Circular economy implementation</li>
            </ul>
            <div className="technology-badges">
              <span className="tech-badge">Bioreactor Design</span>
              <span className="tech-badge">Membrane Technology</span>
              <span className="tech-badge">Process Control</span>
              <span className="tech-badge">Resource Recovery</span>
            </div>
          </div>
          
          <div className="expertise-card enhanced-card">
            <div className="card-header">
              <FaGlobe className="service-icon" />
              <h3>Geospatial & Data Science</h3>
            </div>
            <ul>
              <li>Environmental spatial modeling</li>
              <li>Multi-dimensional data visualization</li>
              <li>Land-water interaction analysis</li>
              <li>Machine learning for environmental applications</li>
              <li>Research methodology and experimental design</li>
            </ul>
            <div className="technology-badges">
              <span className="tech-badge">ArcGIS</span>
              <span className="tech-badge">QGIS</span>
              <span className="tech-badge">Python/R</span>
              <span className="tech-badge">Machine Learning</span>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Featured Projects Section */}
      <section className="featured-projects modern-section fade-in">
        <div className="section-header">
          <FaProjectDiagram className="section-icon" />
          <h2>Featured Projects & Innovations</h2>
          <p className="section-subtitle">Transforming environmental challenges into sustainable solutions</p>
        </div>
        <div className="project-grid">
          <div className="project-card enhanced-card">
            <div className="card-header">
              <FaDatabase className="service-icon" />
              <h3>Digital Twin Water Systems</h3>
            </div>
            <p>Revolutionary digital twin technology that creates virtual replicas of water infrastructure, enabling predictive maintenance and real-time optimization.</p>
            <div className="project-metrics">
              <span>Predictive Accuracy: 95%</span>
              <span>Maintenance Cost Reduction: 40%</span>
              <span>System Uptime Improvement: 25%</span>
            </div>
            <div className="technology-badges">
              <span className="tech-badge">IoT Integration</span>
              <span className="tech-badge">Machine Learning</span>
              <span className="tech-badge">Cloud Computing</span>
            </div>
            <Link to="/projects" className="project-link">Explore Details</Link>
          </div>
          
          <div className="project-card enhanced-card">
            <div className="card-header">
              <FaSeedling className="service-icon" />
              <h3>Enhanced Nitrate Removal Bioreactors</h3>
            </div>
            <p>Innovative carbon dosing techniques that dramatically improve nitrate removal efficiency in agricultural drainage systems.</p>
            <div className="project-metrics">
              <span>Removal Efficiency: 85%</span>
              <span>Cost Reduction: 30%</span>
              <span>Implementation Scale: Regional</span>
            </div>
            <div className="technology-badges">
              <span className="tech-badge">Bioreactor Design</span>
              <span className="tech-badge">Carbon Dosing</span>
              <span className="tech-badge">Agricultural Systems</span>
            </div>
            <Link to="/projects" className="project-link">Learn More</Link>
          </div>
          
          <div className="project-card enhanced-card">
            <div className="card-header">
              <FaLeaf className="service-icon" />
              <h3>Nature-Based Solution Networks</h3>
            </div>
            <p>Integrated green infrastructure systems that provide multiple environmental benefits while treating water naturally.</p>
            <div className="project-metrics">
              <span>Multi-benefit Score: 9/10</span>
              <span>Community Value: High</span>
              <span>Ecosystem Services: Multiple</span>
            </div>
            <div className="technology-badges">
              <span className="tech-badge">Green Infrastructure</span>
              <span className="tech-badge">Ecosystem Design</span>
              <span className="tech-badge">Sustainability</span>
            </div>
            <Link to="/projects" className="project-link">View Impact</Link>
          </div>
          
          <div className="project-card enhanced-card">
            <div className="card-header">
              <FaChartLine className="service-icon" />
              <h3>Integrated Watershed Modeling</h3>
            </div>
            <p>Comprehensive catchment models that predict water resource availability and quality under changing climate and land use conditions.</p>
            <div className="project-metrics">
              <span>Model Accuracy: 92%</span>
              <span>Scenarios Tested: 50+</span>
              <span>Planning Horizon: 50 years</span>
            </div>
            <div className="technology-badges">
              <span className="tech-badge">SWAT</span>
              <span className="tech-badge">Climate Modeling</span>
              <span className="tech-badge">GIS Analysis</span>
            </div>
            <Link to="/projects" className="project-link">See Results</Link>
          </div>
        </div>
        <div className="section-cta">
          <Link to="/projects" className="btn primary-btn enhanced-btn">View All Projects</Link>
        </div>
      </section>

      {/* Enhanced Publications Preview */}
      <section className="publications-preview modern-section fade-in">
        <div className="section-header">
          <FaBook className="section-icon" />
          <h2>Research & Publications</h2>
          <p className="section-subtitle">Contributing to the scientific understanding of environmental systems</p>
        </div>
        <div className="publication-list">
          <div className="publication-item enhanced-card">
            <div className="card-header">
              <FaMicroscope className="service-icon" />
              <h3>Flow analysis and hydraulic performance of denitrifying bioreactors under different carbon dosing treatments</h3>
            </div>
            <p><strong>Journal of Environmental Management</strong> | 2023 | Impact Factor: 8.9</p>
            <p>Comprehensive analysis of hydraulic performance optimization in carbon-enhanced bioreactor systems.</p>
            <div className="technology-badges">
              <span className="tech-badge">Hydraulic Modeling</span>
              <span className="tech-badge">Performance Optimization</span>
            </div>
          </div>
          
          <div className="publication-item enhanced-card">
            <div className="card-header">
              <FaFlask className="service-icon" />
              <h3>Constant carbon dosing of a pilot-scale denitrifying bioreactor to improve nitrate removal</h3>
            </div>
            <p><strong>Ecological Engineering</strong> | 2023 | Impact Factor: 4.0</p>
            <p>Field-scale demonstration of enhanced nitrate removal through strategic carbon supplementation.</p>
            <div className="technology-badges">
              <span className="tech-badge">Pilot Studies</span>
              <span className="tech-badge">Field Implementation</span>
            </div>
          </div>
        </div>
        <div className="section-cta">
          <Link to="/publications" className="btn primary-btn enhanced-btn">View All Publications</Link>
        </div>
      </section>

      {/* Enhanced Consulting Services Preview */}
      <section className="featured-projects modern-section fade-in">
        <div className="section-header">
          <FaCogs className="section-icon" />
          <h2>Consulting Services Portfolio</h2>
          <p className="section-subtitle">Comprehensive environmental engineering solutions for complex challenges</p>
        </div>
        <div className="project-grid">
          <div className="project-card enhanced-card">
            <div className="card-header">
              <FaDatabase className="service-icon" />
              <h3>Digital Twin Development</h3>
            </div>
            <p>Create virtual replicas of your water infrastructure that learn, adapt, and optimize performance in real-time.</p>
            <div className="technology-badges">
              <span className="tech-badge">IoT Integration</span>
              <span className="tech-badge">Predictive Analytics</span>
              <span className="tech-badge">Real-time Monitoring</span>
            </div>
            <Link to="/consulting" className="project-link">Learn More</Link>
          </div>
          
          <div className="project-card enhanced-card">
            <div className="card-header">
              <FaLeaf className="service-icon" />
              <h3>Nature-Based Solutions</h3>
            </div>
            <p>Harness the power of natural systems to provide sustainable, cost-effective environmental solutions.</p>
            <div className="technology-badges">
              <span className="tech-badge">Green Infrastructure</span>
              <span className="tech-badge">Ecosystem Services</span>
              <span className="tech-badge">Sustainable Design</span>
            </div>
            <Link to="/consulting" className="project-link">Explore Options</Link>
          </div>
          
          <div className="project-card enhanced-card">
            <div className="card-header">
              <FaRobot className="service-icon" />
              <h3>AI-Powered Environmental Assessment</h3>
            </div>
            <p>Advanced machine learning models that predict environmental quality and optimize management strategies.</p>
            <div className="technology-badges">
              <span className="tech-badge">Machine Learning</span>
              <span className="tech-badge">Predictive Modeling</span>
              <span className="tech-badge">Early Warning Systems</span>
            </div>
            <Link to="/consulting" className="project-link">See Applications</Link>
          </div>
        </div>
        <div className="section-cta">
          <Link to="/consulting" className="btn primary-btn enhanced-btn">Explore All Services</Link>
        </div>
      </section>

      {/* Enhanced Contact CTA */}
      <section className="contact-cta enhanced-cta">
        <div className="cta-background">
          <div className="cta-icons">
            <FaWater />
            <FaLeaf />
            <FaLightbulb />
            <FaCogs />
            <FaGlobe />
            <FaRobot />
          </div>
        </div>
        <div className="cta-content">
          <h3>Ready to Transform Environmental Challenges?</h3>
          <p>
            Partner with a leading environmental engineer who combines cutting-edge technology with sustainable practices. 
            From digital twins that predict the future to nature-based solutions that heal ecosystems, let's create 
            innovative solutions that benefit both your objectives and the environment.
          </p>
          <div className="cta-buttons">
            <Link to="/contact" className="btn primary-btn enhanced-btn">Start Your Project</Link>
            <Link to="/resume" className="btn secondary-btn enhanced-btn">View Credentials</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
