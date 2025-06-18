import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  FaFlask,
  FaWater,
  FaChartLine,
  FaProjectDiagram,
  FaBook,
  FaLeaf,
  FaRobot,
  FaGlobe,
  FaDatabase,
  FaCogs,
  FaLightbulb,
  FaMicroscope,
  FaSeedling,
  FaGraduationCap,
  FaAward,
  FaUserTie,
  FaMapMarkedAlt,
  FaIndustry,
  FaBuilding,
  FaAtom
} from 'react-icons/fa';

import {
  SiPython,
  SiR,
  SiQgis,
  SiLinkedin
} from 'react-icons/si';

const HomePage = () => {
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
          <h1>Dr. Reza Moghaddam, PhD</h1>
          <h2>Environmental Engineer — Water Systems Specialist — Sustainable Solutions Expert</h2>
          <p>Transforming environmental challenges into innovative solutions through cutting-edge digital twins, AI-powered modeling, nature-based systems, and advanced treatment technologies. From molecular-level processes to watershed-scale impacts.</p>
          <div className="professional-credentials">
            <div className="credential-item">
              <FaGraduationCap className="credential-icon" />
              <span>PhD Environmental Engineering</span>
            </div>
            <div className="credential-item">
              <FaUserTie className="credential-icon" />
              <span>NIWA Research Scientist</span>
            </div>
            <div className="credential-item">
              <FaAward className="credential-icon" />
              <span>10+ Publications</span>
            </div>
          </div>
          <div className="hero-buttons">
            <Link to="/projects" className="btn primary-btn enhanced-btn">Explore Projects</Link>
            <Link to="/consulting" className="btn primary-btn enhanced-btn">Consulting Services</Link>
            <Link to="/contact" className="btn secondary-btn enhanced-btn">Start Collaboration</Link>
          </div>
          <div className="header-stats">
            <div className="stat-item">
              <span className="stat-number">25+</span>
              <span className="stat-label">Core Competencies</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">8+</span>
              <span className="stat-label">Technical Tools</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">5+</span>
              <span className="stat-label">Years Experience</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">3</span>
              <span className="stat-label">Advanced Degrees</span>
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
              <li><strong>Integrated Watershed Modeling:</strong> Multi-scale catchment simulation from farm to regional level</li>
              <li><strong>Digital Twin Development:</strong> Real-time virtual replicas with IoT integration</li>
              <li><strong>Predictive Assessment:</strong> AI-powered early warning systems for water quality</li>
              <li><strong>Hydraulic Analysis:</strong> Advanced flow modeling and network optimization</li>
              <li><strong>Climate Resilience:</strong> Adaptation strategies for extreme weather events</li>
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
              <li><strong>Treatment System Design:</strong> From concept to commissioning optimization</li>
              <li><strong>Contaminant Removal:</strong> Specialized strategies for emerging pollutants</li>
              <li><strong>Bioprocess Engineering:</strong> Enhanced nitrate removal with 85% efficiency</li>
              <li><strong>Resource Recovery:</strong> Transforming waste streams into valuable resources</li>
              <li><strong>Circular Economy:</strong> Zero-waste industrial ecology approaches</li>
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
              <li><strong>Environmental Spatial Modeling:</strong> 3D visualization and pattern analysis</li>
              <li><strong>Data Visualization:</strong> Interactive dashboards for complex datasets</li>
              <li><strong>Land-Water Analysis:</strong> Watershed connectivity and ecosystem services</li>
              <li><strong>Machine Learning:</strong> Predictive models for environmental forecasting</li>
              <li><strong>Research Design:</strong> Experimental optimization and statistical analysis</li>
            </ul>
            <div className="technology-badges">
              <span className="tech-badge"><SiQgis style={{ marginRight: '4px' }} />QGIS</span>
              <span className="tech-badge">ArcGIS</span>
              <span className="tech-badge"><SiPython style={{ marginRight: '4px' }} />Python</span>
              <span className="tech-badge"><SiR style={{ marginRight: '4px' }} />R</span>
              <span className="tech-badge">Matlab</span>
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

      {/* Professional Experience & Education */}
      <section className="experience-education modern-section fade-in">
        <div className="section-header">
          <FaUserTie className="section-icon" />
          <h2>Professional Experience & Education</h2>
          <p className="section-subtitle">Proven track record in environmental engineering and research excellence</p>
        </div>
        <div className="experience-grid">
          <div className="experience-card enhanced-card">
            <div className="card-header">
              <FaBuilding className="service-icon" />
              <h3>Environmental Engineer</h3>
              <span className="company">National Institute of Water and Atmospheric Research (NIWA)</span>
              <span className="duration">Mar 2023 - Present</span>
            </div>
            <ul className="experience-highlights">
              <li>Leading advanced environmental modeling projects for watershed management</li>
              <li>Developing digital twin systems for water infrastructure optimization</li>
              <li>Conducting cutting-edge research in sustainable water treatment technologies</li>
              <li>Collaborating with industry partners on nature-based solution implementations</li>
            </ul>
            <div className="technology-badges">
              <span className="tech-badge">Research Leadership</span>
              <span className="tech-badge">Project Management</span>
              <span className="tech-badge">Stakeholder Engagement</span>
            </div>
          </div>

          <div className="experience-card enhanced-card">
            <div className="card-header">
              <FaWater className="service-icon" />
              <h3>Water Engineer</h3>
              <span className="company">Williamson Water and Land Advisory</span>
              <span className="duration">Sep 2022 - Dec 2022</span>
            </div>
            <ul className="experience-highlights">
              <li>Provided specialized consulting services for water resource management</li>
              <li>Conducted hydraulic analysis and system optimization projects</li>
              <li>Developed innovative solutions for agricultural water challenges</li>
              <li>Engaged with clients to deliver tailored engineering solutions</li>
            </ul>
            <div className="technology-badges">
              <span className="tech-badge">Consulting</span>
              <span className="tech-badge">Client Relations</span>
              <span className="tech-badge">Solution Development</span>
            </div>
          </div>

          <div className="experience-card enhanced-card">
            <div className="card-header">
              <FaIndustry className="service-icon" />
              <h3>Chemical Engineer</h3>
              <span className="company">Bidestan Alcohol and Foodstuff Co</span>
              <span className="duration">2016 - 2019</span>
            </div>
            <ul className="experience-highlights">
              <li>Optimized industrial processes for improved efficiency and sustainability</li>
              <li>Implemented resource recovery and circular economy principles</li>
              <li>Managed bioprocess engineering and fermentation operations</li>
              <li>Developed innovative approaches to waste minimization</li>
            </ul>
            <div className="technology-badges">
              <span className="tech-badge">Process Engineering</span>
              <span className="tech-badge">Operations Management</span>
              <span className="tech-badge">Industrial Optimization</span>
            </div>
          </div>
        </div>

        <div className="education-section">
          <h3><FaGraduationCap className="inline-icon" /> Educational Excellence</h3>
          <div className="education-grid">
            <div className="education-card enhanced-card">
              <div className="card-header">
                <FaAward className="service-icon" />
                <h4>PhD in Environmental Engineering</h4>
                <span className="institution">University of Waikato, New Zealand</span>
                <span className="duration">2019-2022</span>
              </div>
              <p><strong>Thesis:</strong> "Enhanced Nitrate Removal via Carbon Dosing in Woodchip Bioreactors"</p>
              <p>Groundbreaking research achieving 85% nitrate removal efficiency through innovative carbon dosing techniques</p>
            </div>

            <div className="education-card enhanced-card">
              <div className="card-header">
                <FaFlask className="service-icon" />
                <h4>MSc in Chemical Engineering</h4>
                <span className="institution">Sahand University of Technology, Iran</span>
                <span className="duration">2015-2017</span>
              </div>
              <p>Advanced study in process engineering, bioprocess optimization, and industrial sustainability</p>
            </div>

            <div className="education-card enhanced-card">
              <div className="card-header">
                <FaCogs className="service-icon" />
                <h4>BSc in Chemical Engineering</h4>
                <span className="institution">University of Zanjan, Iran</span>
                <span className="duration">2011-2015</span>
              </div>
              <p>Foundation in engineering principles, process design, and environmental applications</p>
            </div>
          </div>
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
            <p><strong>Journal of Environmental Management</strong> | 2023 | Vol. 328, 116926 | Impact Factor: 8.9</p>
            <p>Comprehensive analysis of hydraulic performance optimization in carbon-enhanced bioreactor systems, achieving significant improvements in nitrate removal efficiency.</p>
            <div className="technology-badges">
              <span className="tech-badge">Hydraulic Modeling</span>
              <span className="tech-badge">Bioreactor Design</span>
              <span className="tech-badge">Performance Optimization</span>
            </div>
          </div>

          <div className="publication-item enhanced-card">
            <div className="card-header">
              <FaFlask className="service-icon" />
              <h3>Constant carbon dosing of a pilot-scale denitrifying bioreactor to improve nitrate removal from agricultural tile drainage</h3>
            </div>
            <p><strong>Ecological Engineering</strong> | 2023 | Vol. 187, 106851 | Impact Factor: 4.0</p>
            <p>Field-scale demonstration of enhanced nitrate removal through strategic carbon supplementation in agricultural drainage systems.</p>
            <div className="technology-badges">
              <span className="tech-badge">Pilot Studies</span>
              <span className="tech-badge">Agricultural Systems</span>
              <span className="tech-badge">Field Implementation</span>
            </div>
          </div>

          <div className="publication-item enhanced-card">
            <div className="card-header">
              <FaAtom className="service-icon" />
              <h3>Enhanced nitrate removal and side effects of methanol dosing in denitrifying bioreactors</h3>
            </div>
            <p><strong>Ecological Engineering</strong> | 2022 | Vol. 185, 106818 | Impact Factor: 4.0</p>
            <p>Investigation of methanol dosing effects on bioreactor performance, providing insights for optimization strategies.</p>
            <div className="technology-badges">
              <span className="tech-badge">Chemical Engineering</span>
              <span className="tech-badge">Process Optimization</span>
              <span className="tech-badge">Environmental Chemistry</span>
            </div>
          </div>
        </div>

        <div className="technical-reports-section">
          <h3><FaDatabase className="inline-icon" /> Technical Reports & Professional Contributions</h3>
          <div className="report-grid">
            <div className="report-item enhanced-card">
              <div className="card-header">
                <FaMapMarkedAlt className="service-icon" />
                <h4>Application of a riparian planning tool to the Pokaiwhenua catchment</h4>
              </div>
              <p><strong>Client:</strong> DairyNZ | <strong>Year:</strong> 2024</p>
              <p>Prediction of water quality and ecological outcomes using advanced modeling approaches for catchment management.</p>
              <div className="technology-badges">
                <span className="tech-badge">Catchment Modeling</span>
                <span className="tech-badge">Water Quality</span>
                <span className="tech-badge">Ecological Assessment</span>
              </div>
            </div>

            <div className="report-item enhanced-card">
              <div className="card-header">
                <FaWater className="service-icon" />
                <h4>Kaiate Stream: assessment of changes in faecal contaminants and turbidity</h4>
              </div>
              <p><strong>NIWA Client Report</strong> | <strong>Report No:</strong> 2024008HN | <strong>Year:</strong> 2024</p>
              <p>Assessment of mitigation measure effectiveness for improving stream water quality parameters.</p>
              <div className="technology-badges">
                <span className="tech-badge">Water Quality Assessment</span>
                <span className="tech-badge">Contamination Analysis</span>
                <span className="tech-badge">Mitigation Evaluation</span>
              </div>
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
            Partner with a PhD-qualified environmental engineer who combines cutting-edge technology with sustainable practices.
            From digital twins that predict the future to nature-based solutions that heal ecosystems, let's create
            innovative solutions that benefit both your objectives and the environment.
          </p>
          <div className="professional-links">
            <div className="link-item">
              <SiLinkedin className="link-icon" />
              <span>LinkedIn Professional Profile</span>
            </div>
            <div className="link-item">
              <FaBuilding className="link-icon" />
              <span>NIWA Research Profile</span>
            </div>
          </div>
          <div className="cta-buttons">
            <Link to="/contact" className="btn primary-btn enhanced-btn">Start Your Project</Link>
            <Link to="/resume" className="btn secondary-btn enhanced-btn">View Full Credentials</Link>
            <Link to="/consulting" className="btn secondary-btn enhanced-btn">Explore Services</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
