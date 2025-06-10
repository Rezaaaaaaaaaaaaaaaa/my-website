import React from 'react';
import { FaFlask, FaWater, FaLeaf, FaRobot, FaChartLine, FaDatabase, FaSeedling, FaGlobe } from 'react-icons/fa';

const ProjectsPage = () => {
  const projects = [
    {
      id: 1,
      title: "Enhanced Nitrate Removal in Woodchip Bioreactors",
      description: "Implementation of carbon dosing techniques to improve nitrate removal efficiency in agricultural drainage systems.",
      details: "This groundbreaking research focused on optimizing the nitrate removal capacity of woodchip bioreactors through strategic carbon supplementation, representing a significant advancement in agricultural water treatment technology.",
      icon: FaSeedling,
      metrics: {
        "Efficiency Improvement": "30%",
        "Cost Reduction": "25%",
        "Implementation Scale": "Regional"
      },
      technologies: ["Denitrifying Bioreactors", "Carbon Dosing Systems", "Water Quality Monitoring", "Agricultural Drainage"],
      publications: ["Journal of Environmental Management (2023)", "Ecological Engineering (2023)"]
    },
    {
      id: 2,
      title: "Digital Twin Water Systems Development", 
      description: "Revolutionary digital twin technology for water infrastructure enabling predictive maintenance and real-time optimization.",
      details: "Development of comprehensive digital replicas of water treatment and distribution systems that learn from operational data to predict failures, optimize performance, and enable scenario testing without real-world risks.",
      icon: FaDatabase,
      metrics: {
        "Predictive Accuracy": "95%",
        "Maintenance Cost Reduction": "40%",
        "System Uptime Improvement": "25%"
      },
      technologies: ["IoT Integration", "Machine Learning", "Cloud Computing", "Predictive Analytics"],
      applications: ["Municipal Water Systems", "Treatment Plants", "Distribution Networks"]
    },
    {
      id: 3,
      title: "Integrated Watershed Modeling & Simulation",
      description: "Comprehensive modeling framework combining surface water, groundwater, and land use interactions for sustainable water resource management.",
      details: "Advanced watershed simulation system that integrates multiple environmental factors to predict water resource availability and quality under changing climate and land use conditions.",
      icon: FaGlobe,
      metrics: {
        "Model Accuracy": "92%",
        "Scenarios Tested": "50+",
        "Planning Horizon": "50 years"
      },
      technologies: ["SWAT", "MIKE SHE", "Climate Modeling", "GIS Analysis"],
      outcomes: ["Water Resource Planning", "Climate Adaptation", "Policy Support"]
    },
    {
      id: 4,
      title: "Nature-Based Solution Networks",
      description: "Integrated green infrastructure systems providing multiple environmental benefits while treating water naturally.",
      details: "Development of interconnected nature-based solutions that harness ecosystem services to provide sustainable, cost-effective water treatment while enhancing biodiversity and community amenities.",
      icon: FaLeaf,
      metrics: {
        "Multi-benefit Score": "9/10",
        "Community Value": "High",
        "Ecosystem Services": "Multiple"
      },
      technologies: ["Green Infrastructure", "Ecological Design", "Ecosystem Services", "Sustainable Development"],
      benefits: ["Water Treatment", "Biodiversity Enhancement", "Community Spaces", "Climate Resilience"]
    },
    {
      id: 5,
      title: "AI-Powered Environmental Quality Assessment",
      description: "Machine learning models for predicting environmental quality and optimizing management strategies.",
      details: "Advanced AI systems that analyze environmental data patterns to provide early warnings for water quality issues and optimize treatment strategies through predictive analytics.",
      icon: FaRobot,
      metrics: {
        "Prediction Accuracy": "88%",
        "Early Warning Time": "72 hours",
        "Cost Savings": "35%"
      },
      technologies: ["Machine Learning", "Predictive Modeling", "Early Warning Systems", "Data Analytics"],
      applications: ["Water Quality Monitoring", "Treatment Optimization", "Risk Management"]
    },
    {
      id: 6,
      title: "Advanced Wastewater Treatment Optimization",
      description: "Innovative treatment processes combining biological, physical, and chemical methods for maximum efficiency.",
      details: "Development of advanced treatment systems that integrate multiple technologies to achieve superior effluent quality while minimizing energy consumption and operational costs.",
      icon: FaFlask,
      metrics: {
        "Treatment Efficiency": "98%",
        "Energy Reduction": "30%",
        "Operating Cost Savings": "25%"
      },
      technologies: ["Membrane Bioreactors", "Advanced Oxidation", "Bioprocess Optimization", "Resource Recovery"],
      features: ["High Efficiency", "Energy Optimization", "Resource Recovery", "Compact Design"]
    }
  ];

  return (
    <div className="projects-page">
      <section className="page-header enhanced-header">
        <div className="header-content">
          <h1>Projects & Research Portfolio</h1>
          <p>Innovative environmental engineering solutions transforming challenges into sustainable opportunities</p>
          <div className="header-stats">
            <div className="stat-item">
              <span className="stat-number">{projects.length}</span>
              <span className="stat-label">Major Projects</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">95%</span>
              <span className="stat-label">Success Rate</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">10+</span>
              <span className="stat-label">Publications</span>
            </div>
          </div>
        </div>
      </section>

      <section className="projects-container">
        {projects.map((project, index) => {
          const IconComponent = project.icon;
          return (
            <div key={project.id} className={`project-full-card enhanced-card ${index % 2 === 1 ? 'reverse' : ''}`}>
              <div className="project-header">
                <div className="project-icon-wrapper">
                  <IconComponent className="project-main-icon" />
                </div>
                <div className="project-title-section">
                  <h2>{project.title}</h2>
                  <p className="project-description">{project.description}</p>
                </div>
              </div>
              
              <div className="project-content">
                <div className="project-details">
                  <h3>Project Overview</h3>
                  <p>{project.details}</p>
                </div>
                
                <div className="project-metrics-container">
                  <h3>Key Performance Metrics</h3>
                  <div className="metrics-grid">
                    {Object.entries(project.metrics).map(([key, value]) => (
                      <div key={key} className="metric-item">
                        <span className="metric-value">{value}</span>
                        <span className="metric-label">{key}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="project-technologies">
                  <h3>Technologies & Methods</h3>
                  <div className="technology-badges">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="tech-badge">{tech}</span>
                    ))}
                  </div>
                </div>
                
                {project.publications && (
                  <div className="project-publications">
                    <h3>Related Publications</h3>
                    <ul>
                      {project.publications.map((pub, index) => (
                        <li key={index}>{pub}</li>
                      ))}
                    </ul>
                  </div>
                )}
                
                {project.applications && (
                  <div className="project-applications">
                    <h3>Applications</h3>
                    <ul>
                      {project.applications.map((app, index) => (
                        <li key={index}>{app}</li>
                      ))}
                    </ul>
                  </div>
                )}
                
                {project.benefits && (
                  <div className="project-benefits">
                    <h3>Benefits</h3>
                    <ul>
                      {project.benefits.map((benefit, index) => (
                        <li key={index}>{benefit}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default ProjectsPage;
