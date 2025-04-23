import React from 'react';

const ProjectsPage = () => {
  // Define icon mapping
  const techIconPaths = {
    'Wastewater Treatment': 'images/icons/wastewater-treatment.svg',
    'Water Reticulation': 'images/icons/water-reticulation.svg',
    'Catchment Modeling': 'images/icons/catchment-modeling.svg',
    'Process Optimization': 'images/icons/process-optimization.svg',
    'Bioprocess Engineering': 'images/icons/bioprocess-engineering.svg'
  };
  
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
      technologies: ["Denitrifying Bioreactors", "Carbon Dosing Systems", "Water Quality Monitoring", "Agricultural Drainage"],
      category: "Wastewater Treatment"
    },
    {
      id: 2,
      title: "Municipal WWTP Optimization Using UASB Technology",
      description: "Implementation of Upflow Anaerobic Sludge Blanket (UASB) reactors for enhanced energy efficiency in municipal wastewater treatment.",
      details: "This project involved redesigning an existing municipal wastewater treatment plant to incorporate UASB technology, significantly reducing energy consumption while enabling biogas recovery. The anaerobic treatment stage was optimized for New Zealand's climate conditions and municipal wastewater characteristics.",
      metrics: {
        energyProduction: "40% increase",
        operationalCost: "35% reduction",
        effluenceQuality: "Met all regulatory requirements"
      },
      technologies: ["UASB Reactors", "Biogas Recovery", "Process Control Systems", "Effluent Polishing"],
      category: "Wastewater Treatment"
    },
    {
      id: 3,
      title: "Catchment Modeling for Agricultural Runoff Mitigation",
      description: "Comprehensive modeling of surface and groundwater interactions to optimize placement of water quality interventions.",
      details: "This project utilized integrated surface-groundwater modeling to identify optimal locations for implementing water quality treatment systems across an agricultural catchment. The model incorporated land use, soil characteristics, groundwater flow patterns, and surface water dynamics to maximize the effectiveness of mitigation measures.",
      metrics: {
        contaminantReduction: "45%",
        implementationEfficiency: "60% improvement",
        costSavings: "38% compared to conventional approaches"
      },
      technologies: ["MODFLOW", "MIKE SHE", "GIS Analysis", "Python-based Data Integration", "Best Management Practice Optimization"],
      category: "Catchment Modeling"
    },
    {
      id: 4,
      title: "Aquatic Mitigation Systems for NES-F Compliance",
      description: "Development of cost-effective mitigation systems for agricultural runoff treatment compliant with NZ regulations.",
      details: "This project involved designing and implementing mitigation systems that help farmers comply with New Zealand's National Environmental Standards for Freshwater (NES-F). The systems were designed with cost-effectiveness and practical implementation in mind.",
      metrics: {
        implementationCost: "20% lower than alternatives",
        treatmentEfficiency: "85% contaminant removal"
      },
      technologies: ["Constructed Wetlands", "Filter Systems", "Regulatory Compliance", "Cost-Benefit Analysis"],
      category: "Wastewater Treatment"
    },
    {
      id: 5,
      title: "Membrane Bioreactor Implementation for Water Reuse",
      description: "Design and implementation of MBR technology for advanced wastewater treatment and water reuse applications.",
      details: "This project involved the design and installation of a Membrane Bioreactor (MBR) system to upgrade an existing treatment facility for water reuse applications. The MBR technology was selected for its superior effluent quality and reliability, enabling the treated water to be safely reused for irrigation and industrial processes.",
      metrics: {
        waterRecovery: "95% of influent flow",
        contaminantRemoval: ">99% for suspended solids and pathogens",
        energyEfficiency: "Optimized with 25% reduction over initial design"
      },
      technologies: ["Membrane Bioreactors", "Ultrafiltration", "Process Automation", "Water Reuse Systems"],
      category: "Wastewater Treatment"
    },
    {
      id: 6,
      title: "Food Processing Wastewater Treatment Optimization",
      description: "Process analysis and optimization for a dairy processing facility's wastewater treatment system.",
      details: "This project involved comprehensive modeling and optimization of a dairy processing facility's wastewater treatment system. By implementing a combination of anaerobic pre-treatment and enhanced nutrient removal systems, we were able to significantly improve treatment efficiency while reducing operational costs and generating biogas for energy recovery.",
      metrics: {
        organicLoadingCapacity: "Increased by 60%",
        bioenergyProduction: "Generated 35% of facility's energy needs",
        complianceViolations: "Reduced to zero over monitoring period"
      },
      technologies: ["Anaerobic Digestion", "EGSB Reactors", "Nutrient Removal Systems", "Process Integration", "Energy Recovery"],
      category: "Process Optimization"
    },
    {
      id: 7,
      title: "Water Reticulation Design for Rural Community",
      description: "Comprehensive design of a water supply and distribution system for a rural community with challenging topography.",
      details: "This project involved the design of a complete water supply and distribution system for a rural community of 2,500 residents spread across challenging terrain. The system incorporated multiple pressure zones, booster pumping stations, and storage reservoirs to ensure reliable water delivery while minimizing energy consumption and maintenance requirements.",
      metrics: {
        reliabilityImprovement: "99.9% uptime achieved",
        energyEfficiency: "40% reduction compared to conventional design",
        waterLoss: "Reduced to <5% through pressure management and leak detection"
      },
      technologies: ["Hydraulic Modeling", "Pressure Zone Design", "SCADA Integration", "Energy Optimization", "Asset Management Planning"],
      category: "Water Reticulation"
    },
    {
      id: 8,
      title: "Bioethanol Production Optimization",
      description: "Process optimization for bioethanol production using industrial and traditional Saccharomyces cerevisiae strains.",
      details: "This research compared different yeast strains for bioethanol production and optimized fermentation conditions to maximize yield while maintaining process sustainability.",
      metrics: {
        yieldIncrease: "25%",
        processEfficiency: "20% improvement"
      },
      technologies: ["Bioethanol Production", "Fermentation Technology", "Process Optimization", "Sustainable Energy"],
      category: "Bioprocess Engineering"
    }
  ];

  return (
    <div className="projects-page">
      <section className="page-header">
        <div className="page-header-content">
          <h1>Projects & Research</h1>
          <p>A collection of my environmental engineering projects and research initiatives</p>
        </div>
      </section>

      <section className="projects-container">
        {projects.map((project, index) => (
          <div key={project.id} className={`project-full-card fade-in`} style={{animationDelay: `${index * 0.1}s`}}>
            <h2>
              {techIconPaths[project.category] && 
                <img 
                  src={techIconPaths[project.category]} 
                  alt="" 
                  style={{width: '30px', height: '30px', marginRight: '10px', verticalAlign: 'middle'}} 
                />
              }
              {project.title}
            </h2>
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
