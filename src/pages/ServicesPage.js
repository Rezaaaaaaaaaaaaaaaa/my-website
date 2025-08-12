import React from 'react';
import { 
  FaFlask, 
  FaCogs, 
  FaWater, 
  FaIndustry, 
  FaLeaf, 
  FaChartLine,
  FaTools,
  FaShieldAlt
} from 'react-icons/fa';

const ServicesPage = () => {
  const services = [
    {
      icon: <FaFlask />,
      title: "Chemical Process Engineering",
      description: "Comprehensive chemical engineering solutions for industrial processes",
      details: [
        "Process design and optimization",
        "Heat and mass transfer analysis", 
        "Reaction engineering",
        "Separation processes",
        "Process safety and risk assessment",
        "Equipment sizing and selection"
      ]
    },
    {
      icon: <FaCogs />,
      title: "Bioprocess Engineering", 
      description: "Specialized biotechnology and biological process solutions",
      details: [
        "Bioreactor design and scale-up",
        "Fermentation process optimization",
        "Downstream processing",
        "Cell culture systems",
        "Bioprocess monitoring and control",
        "Validation and regulatory compliance"
      ]
    },
    {
      icon: <FaWater />,
      title: "Water & Wastewater Treatment",
      description: "Advanced water treatment and environmental solutions",
      details: [
        "Water treatment system design",
        "Wastewater treatment optimization",
        "Membrane technology applications",
        "Biological treatment processes",
        "Water quality monitoring",
        "Regulatory compliance support"
      ]
    },
    {
      icon: <FaIndustry />,
      title: "Food Process Engineering",
      description: "Food processing and manufacturing optimization",
      details: [
        "Food processing system design",
        "Thermal processing optimization",
        "Food safety and HACCP implementation",
        "Quality control systems",
        "Packaging technology",
        "Shelf-life extension strategies"
      ]
    },
    {
      icon: <FaLeaf />,
      title: "Environmental Consulting",
      description: "Sustainable environmental engineering solutions",
      details: [
        "Environmental impact assessments",
        "Pollution prevention strategies",
        "Waste minimization programs",
        "Sustainability consulting",
        "Carbon footprint reduction",
        "Green technology implementation"
      ]
    },
    {
      icon: <FaChartLine />,
      title: "Process Optimization",
      description: "Data-driven process improvement and efficiency enhancement",
      details: [
        "Process analysis and modeling",
        "Energy efficiency improvements",
        "Yield optimization",
        "Cost reduction strategies",
        "Debottlenecking studies",
        "Performance monitoring systems"
      ]
    }
  ];

  return (
    <div>
      {/* Page Header */}
      <section className="hero" style={{padding: 'var(--space-16) 0'}}>
        <div className="container">
          <div className="hero-content">
            <h1>Our Engineering Services</h1>
            <p className="description">
              Comprehensive engineering solutions designed to optimize your processes, 
              improve efficiency, and ensure sustainable operations across diverse industries.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section">
        <div className="container">
          <div className="grid grid-auto">
            {services.map((service, index) => (
              <div key={index} className="card">
                <div className="card-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <ul>
                  {service.details.map((detail, idx) => (
                    <li key={idx} className="mb-2 text-gray-600">• {detail}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Approach */}
      <section className="section" style={{backgroundColor: 'var(--gray-100)'}}>
        <div className="container">
          <div className="section-header">
            <h2>Our Engineering Approach</h2>
            <p className="section-description">
              Systematic methodology ensuring successful project delivery
            </p>
          </div>
          
          <div className="grid grid-cols-4">
            <div className="card text-center">
              <FaChartLine className="card-icon" />
              <h4>1. Analysis</h4>
              <p>Comprehensive assessment of current processes and requirements</p>
            </div>
            
            <div className="card text-center">
              <FaTools className="card-icon" />
              <h4>2. Design</h4>
              <p>Custom engineering solutions tailored to specific needs</p>
            </div>
            
            <div className="card text-center">
              <FaCogs className="card-icon" />
              <h4>3. Implementation</h4>
              <p>Professional project management and system deployment</p>
            </div>
            
            <div className="card text-center">
              <FaShieldAlt className="card-icon" />
              <h4>4. Support</h4>
              <p>Ongoing optimization and maintenance support</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;