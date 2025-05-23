import React from 'react';

const ProjectsPage = () => {
  const projects = [
    {
      id: 1,
      title: "Enhanced Nitrate Removal in Woodchip Bioreactors",
      description: "Implementation of carbon dosing techniques to improve nitrate removal efficiency in agricultural drainage systems.",
      details: "This project focused on optimizing the nitrate removal capacity of woodchip bioreactors through strategic carbon supplementation. By implementing a controlled dosing system, we were able to enhance denitrification rates while maintaining operational simplicity.",
      metrics: {
        efficiencyImprovement: "30%",
        costReduction: "25%"
      },
      technologies: ["Denitrifying Bioreactors", "Carbon Dosing Systems", "Water Quality Monitoring", "Agricultural Drainage"]
    },
    {
      id: 2,
      title: "Aquatic Mitigation Systems for NES-F Compliance",
      description: "Development of cost-effective mitigation systems for agricultural runoff treatment compliant with NZ regulations.",
      details: "This project involved designing and implementing mitigation systems that help farmers comply with New Zealand's National Environmental Standards for Freshwater (NES-F). The systems were designed with cost-effectiveness and practical implementation in mind.",
      metrics: {
        implementationCost: "20% lower than alternatives",
        treatmentEfficiency: "85% contaminant removal"
      },
      technologies: ["Constructed Wetlands", "Filter Systems", "Regulatory Compliance", "Cost-Benefit Analysis"]
    },
    {
      id: 3,
      title: "Bioethanol Production Optimization",
      description: "Process optimization for bioethanol production using industrial and traditional Saccharomyces cerevisiae strains.",
      details: "This research compared different yeast strains for bioethanol production and optimized fermentation conditions to maximize yield while maintaining process sustainability.",
      metrics: {
        yieldIncrease: "25%",
        processEfficiency: "20% improvement"
      },
      technologies: ["Bioethanol Production", "Fermentation Technology", "Process Optimization", "Sustainable Energy"]
    },
    {
      id: 4,
      title: "Water Quality Assessment in Agricultural Catchments",
      description: "Comprehensive water quality monitoring and assessment in agricultural catchments across New Zealand.",
      details: "This project involved setting up monitoring stations in various agricultural catchments to collect data on water quality parameters such as nitrate, phosphorus, and suspended solids. The data was used to assess the impact of agricultural activities on water quality and to develop mitigation strategies.",
      metrics: {
        dataPoints: "Over 10,000 collected",
        catchmentsCovered: "12 across NZ"
      },
      technologies: ["Water Quality Sensors", "Data Analysis", "GIS Mapping", "Statistical Modeling"]
    },
    {
      id: 5,
      title: "Carbon Footprint Reduction in Wastewater Treatment",
      description: "Development of energy-efficient processes for wastewater treatment to reduce carbon footprint.",
      details: "This research focused on optimizing energy consumption in municipal wastewater treatment plants through process modifications and the integration of renewable energy sources.",
      metrics: {
        energyReduction: "35%",
        carbonFootprint: "40% decrease"
      },
      technologies: ["Energy Efficiency", "Process Optimization", "Renewable Energy Integration", "Life Cycle Assessment"]
    },
    {
      id: 6,
      title: "MBR Technology for Municipal Wastewater Reuse",
      description: "Implementation of membrane bioreactor technology for advanced wastewater treatment and water reuse applications.",
      details: "This project demonstrated the effectiveness of MBR technology for producing high-quality effluent suitable for non-potable reuse applications in water-scarce regions.",
      metrics: {
        waterQuality: "Meets Class A reuse standards",
        recoveryRate: "95% water recovery"
      },
      technologies: ["Membrane Bioreactors", "Water Reuse", "Advanced Filtration", "Disinfection Systems"]
    },
    {
      id: 7,
      title: "Integrated Catchment Management Plan",
      description: "Development of a comprehensive catchment management plan integrating surface water, groundwater, and land use considerations.",
      details: "This project created an integrated modeling and management framework for a major agricultural catchment, balancing environmental protection with economic productivity.",
      metrics: {
        pollutantReduction: "45% nitrogen load reduction",
        stakeholderEngagement: "24 participating organizations"
      },
      technologies: ["Hydrological Modeling", "GIS Analysis", "Stakeholder Engagement", "Policy Development"]
    }
  ];

  return (
    <div className="projects-page">
      <section className="page-header">
        <h1>Projects & Research</h1>
        <p>A collection of my environmental engineering projects and research initiatives</p>
      </section>

      <section className="projects-container">
        {projects.map(project => (
          <div key={project.id} className="project-full-card">
            <h2>{project.title}</h2>
            <p className="project-description">{project.description}</p>
            
            <div className="project-details">
              <h3>Project Details</h3>
              <p>{project.details}</p>
            </div>
            
            <div className="project-metrics-container">
              <h3>Key Metrics</h3>
              <div className="metrics-grid">
                {Object.entries(project.metrics).map(([key, value]) => (
                  <div key={key} className="metric-item">
                    <span className="metric-label">{key.replace(/([A-Z])/g, ' $1').trim()}</span>
                    <span className="metric-value">{value}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="project-technologies">
              <h3>Technologies & Methods</h3>
              <div className="tech-tags">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default ProjectsPage;
