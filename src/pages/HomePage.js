import React, { useState, useEffect } from 'react';
import {
  FaSeedling,
  FaDatabase,
  FaGlobe,
  FaFlask,
  FaWater,
  FaChartLine,
  FaCogs,
  FaLightbulb,
  FaGraduationCap,
  FaBriefcase,
  FaAward,
  FaUsers,
  FaMapMarkedAlt,
  FaLeaf,
  FaIndustry,
  FaUniversity,
  FaBook,
  FaRocket,
  FaHandshake,
  FaPhone,
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaChevronDown,
  FaChevronUp,
  FaExternalLinkAlt
} from 'react-icons/fa';

const HomePage = () => {
  const [openDropdowns, setOpenDropdowns] = useState({});
  const [activeSection, setActiveSection] = useState('hero');

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

  const toggleDropdown = (dropdownId) => {
    setOpenDropdowns(prev => ({
      ...prev,
      [dropdownId]: !prev[dropdownId]
    }));
  };

  const expertiseAreas = [
    {
      id: 'water-treatment',
      title: 'Water Treatment & Management',
      icon: <FaWater />,
      description: 'Advanced water treatment technologies and sustainable management solutions',
      details: [
        'Wastewater treatment optimization',
        'Drinking water quality management',
        'Industrial water treatment systems',
        'Water reuse and recycling strategies',
        'Regulatory compliance and monitoring'
      ]
    },
    {
      id: 'data-analytics',
      title: 'Data Analytics & Modeling',
      icon: <FaDatabase />,
      description: 'Environmental data analysis and predictive modeling',
      details: [
        'Statistical analysis of environmental data',
        'Predictive modeling for water quality',
        'Machine learning applications',
        'GIS and spatial analysis',
        'Real-time monitoring systems'
      ]
    },
    {
      id: 'sustainability',
      title: 'Sustainability & Green Technology',
      icon: <FaLeaf />,
      description: 'Sustainable development and green technology solutions',
      details: [
        'Carbon footprint reduction strategies',
        'Renewable energy integration',
        'Circular economy implementation',
        'Green building certification',
        'Environmental impact assessment'
      ]
    },
    {
      id: 'process-optimization',
      title: 'Process Optimization',
      icon: <FaCogs />,
      description: 'Industrial process optimization and efficiency improvement',
      details: [
        'Manufacturing process optimization',
        'Energy efficiency improvements',
        'Waste reduction strategies',
        'Quality control systems',
        'Automation and control systems'
      ]
    }
  ];

  const services = [
    {
      id: 'consulting',
      title: 'Environmental Consulting',
      icon: <FaHandshake />,
      description: 'Comprehensive environmental consulting services',
      details: [
        'Environmental impact assessments',
        'Regulatory compliance consulting',
        'Sustainability strategy development',
        'Risk assessment and management',
        'Stakeholder engagement'
      ]
    },
    {
      id: 'research',
      title: 'Research & Development',
      icon: <FaFlask />,
      description: 'Cutting-edge research in environmental engineering',
      details: [
        'Novel treatment technologies',
        'Process innovation',
        'Technology transfer',
        'Patent development',
        'Collaborative research projects'
      ]
    },
    {
      id: 'training',
      title: 'Training & Education',
      icon: <FaGraduationCap />,
      description: 'Professional training and educational programs',
      details: [
        'Technical workshops',
        'Professional certification programs',
        'University course development',
        'Industry training sessions',
        'Mentorship programs'
      ]
    }
  ];

  const projects = [
    {
      id: 'global-initiatives',
      title: 'Global Environmental Initiatives',
      icon: <FaGlobe />,
      description: 'International projects for sustainable development',
      details: [
        'UN Sustainable Development Goals projects',
        'International water management programs',
        'Cross-border environmental cooperation',
        'Global climate change initiatives',
        'International research collaborations'
      ]
    },
    {
      id: 'innovation-projects',
      title: 'Innovation & Technology Projects',
      icon: <FaRocket />,
      description: 'Breakthrough projects in environmental technology',
      details: [
        'Novel water treatment technologies',
        'Smart monitoring systems',
        'AI-powered environmental solutions',
        'Green technology startups',
        'Technology commercialization'
      ]
    }
  ];

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section fade-in">
        <div className="hero-content">
          <h1>Dr. Reza Moghaddam</h1>
          <p className="hero-subtitle">Environmental Engineer & Sustainability Expert</p>
          <p className="hero-description">
            Transforming environmental challenges into sustainable solutions through innovative engineering,
            data-driven insights, and collaborative partnerships.
          </p>
          <div className="hero-cta">
            <button className="cta-button primary" onClick={() => setActiveSection('expertise')}>
              Explore Expertise
            </button>
            <button className="cta-button secondary" onClick={() => setActiveSection('contact')}>
              Get In Touch
            </button>
          </div>
        </div>
        <div className="hero-stats">
          <div className="stat-item">
            <span className="stat-number">15+</span>
            <span className="stat-label">Years Experience</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">50+</span>
            <span className="stat-label">Projects Completed</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">25+</span>
            <span className="stat-label">Publications</span>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section id="expertise" className="expertise-section fade-in">
        <div className="container">
          <h2>Areas of Expertise</h2>
          <p className="section-description">
            Comprehensive environmental engineering solutions across multiple domains
          </p>

          <div className="expertise-grid">
            {expertiseAreas.map((area) => (
              <div key={area.id} className="expertise-card">
                <div className="expertise-header" onClick={() => toggleDropdown(area.id)}>
                  <div className="expertise-icon">{area.icon}</div>
                  <h3>{area.title}</h3>
                  <div className="dropdown-toggle">
                    {openDropdowns[area.id] ? <FaChevronUp /> : <FaChevronDown />}
                  </div>
                </div>
                <p className="expertise-description">{area.description}</p>

                <div className={`dropdown-content ${openDropdowns[area.id] ? 'open' : ''}`}>
                  <ul className="expertise-details">
                    {area.details.map((detail, index) => (
                      <li key={index}>{detail}</li>
                    ))}
                  </ul>
                  <button className="learn-more-btn">
                    Learn More <FaExternalLinkAlt />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services-section fade-in">
        <div className="container">
          <h2>Professional Services</h2>
          <p className="section-description">
            Tailored services to meet your environmental and sustainability needs
          </p>

          <div className="services-grid">
            {services.map((service) => (
              <div key={service.id} className="service-card">
                <div className="service-header" onClick={() => toggleDropdown(`service-${service.id}`)}>
                  <div className="service-icon">{service.icon}</div>
                  <h3>{service.title}</h3>
                  <div className="dropdown-toggle">
                    {openDropdowns[`service-${service.id}`] ? <FaChevronUp /> : <FaChevronDown />}
                  </div>
                </div>
                <p className="service-description">{service.description}</p>

                <div className={`dropdown-content ${openDropdowns[`service-${service.id}`] ? 'open' : ''}`}>
                  <ul className="service-details">
                    {service.details.map((detail, index) => (
                      <li key={index}>{detail}</li>
                    ))}
                  </ul>
                  <button className="service-cta-btn">
                    Request Quote <FaExternalLinkAlt />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects-section fade-in">
        <div className="container">
          <h2>Featured Projects</h2>
          <p className="section-description">
            Innovative projects that demonstrate our commitment to environmental excellence
          </p>

          <div className="projects-grid">
            {projects.map((project) => (
              <div key={project.id} className="project-card">
                <div className="project-header" onClick={() => toggleDropdown(`project-${project.id}`)}>
                  <div className="project-icon">{project.icon}</div>
                  <h3>{project.title}</h3>
                  <div className="dropdown-toggle">
                    {openDropdowns[`project-${project.id}`] ? <FaChevronUp /> : <FaChevronDown />}
                  </div>
                </div>
                <p className="project-description">{project.description}</p>

                <div className={`dropdown-content ${openDropdowns[`project-${project.id}`] ? 'open' : ''}`}>
                  <ul className="project-details">
                    {project.details.map((detail, index) => (
                      <li key={index}>{detail}</li>
                    ))}
                  </ul>
                  <div className="project-metrics">
                    <span className="metric">
                      <strong>Impact:</strong> High
                    </span>
                    <span className="metric">
                      <strong>Duration:</strong> 2-5 years
                    </span>
                    <span className="metric">
                      <strong>Partners:</strong> 10+
                    </span>
                  </div>
                  <button className="project-link-btn">
                    View Project Details <FaExternalLinkAlt />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section fade-in">
        <div className="container">
          <h2>Get In Touch</h2>
          <p className="section-description">
            Ready to start your next environmental project? Let's discuss how we can help.
          </p>

          <div className="contact-grid">
            <div className="contact-info">
              <div className="contact-item">
                <FaEnvelope className="contact-icon" />
                <div>
                  <h4>Email</h4>
                  <p>reza.moghaddam@example.com</p>
                </div>
              </div>
              <div className="contact-item">
                <FaPhone className="contact-icon" />
                <div>
                  <h4>Phone</h4>
                  <p>+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="contact-item">
                <FaMapMarkedAlt className="contact-icon" />
                <div>
                  <h4>Location</h4>
                  <p>New Zealand & International</p>
                </div>
              </div>
            </div>

            <div className="contact-form">
              <div className="form-group">
                <label>Service Interest</label>
                <select className="form-select">
                  <option value="">Select a service...</option>
                  <option value="consulting">Environmental Consulting</option>
                  <option value="research">Research & Development</option>
                  <option value="training">Training & Education</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="form-group">
                <label>Project Type</label>
                <select className="form-select">
                  <option value="">Select project type...</option>
                  <option value="water-treatment">Water Treatment</option>
                  <option value="data-analytics">Data Analytics</option>
                  <option value="sustainability">Sustainability</option>
                  <option value="process-optimization">Process Optimization</option>
                </select>
              </div>
              <button className="contact-submit-btn">
                Start Conversation <FaHandshake />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
