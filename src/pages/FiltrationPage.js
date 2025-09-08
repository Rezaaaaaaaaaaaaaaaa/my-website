import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FaFilter, 
  FaIndustry, 
  FaWater, 
  FaLeaf, 
  FaCheckCircle, 
  FaArrowRight,
  FaTools,
  FaChartLine
} from 'react-icons/fa';

const FiltrationPage = () => {
  const nzApplications = [
    {
      icon: <FaIndustry />,
      title: "Dairy Processing",
      description: "Filtration applications for milk processing, whey treatment, and protein concentration in New Zealand's dairy industry.",
      details: [
        "Raw milk clarification and microbial reduction",
        "Whey protein concentration and purification", 
        "Heat treatment pre-filtration for milk processing",
        "Process water filtration for dairy operations"
      ]
    },
    {
      icon: <FaWater />,
      title: "Municipal Water Treatment", 
      description: "Filtration systems for drinking water treatment facilities serving communities across New Zealand.",
      details: [
        "Turbidity removal from surface water sources",
        "Particle and pathogen removal systems",
        "Iron and manganese filtration from groundwater",
        "Pre-treatment for advanced treatment processes"
      ]
    },
    {
      icon: <FaLeaf />,
      title: "Wine & Beverage Production",
      description: "Filtration systems for New Zealand's wine industry and beverage production facilities.",
      details: [
        "Wine clarification and stabilization processes",
        "Microbial removal and product quality assurance",
        "Cold stabilization filtration systems",
        "Beverage production filtration applications"
      ]
    },
    {
      icon: <FaIndustry />,
      title: "Aquaculture & Seafood",
      description: "Filtration systems for New Zealand's aquaculture operations and seafood processing facilities.",
      details: [
        "Recirculating aquaculture system (RAS) filtration",
        "Seawater intake treatment for salmon farms",
        "Shellfish depuration system filtration", 
        "Seafood processing water treatment"
      ]
    }
  ];

  const filterTypes = [
    {
      type: "Sand Filtration",
      description: "Granular media filtration using sand, anthracite, and multimedia configurations",
      applications: ["Municipal water treatment", "Industrial process water", "Swimming pool filtration"],
      efficiency: "95-99% turbidity removal"
    },
    {
      type: "Cartridge Filtration", 
      description: "Replaceable filter elements for fine particulate removal and polishing applications",
      applications: ["Dairy processing", "Beverage production", "Pharmaceutical water"],
      efficiency: "0.1-100 micron particle removal"
    },
    {
      type: "Bag Filtration",
      description: "Cost-effective solution for high flow rates and moderate filtration requirements",
      applications: ["Industrial wastewater", "Cooling tower water", "Paint booth filtration"],
      efficiency: "1-200 micron particle removal"
    },
    {
      type: "Membrane Filtration",
      description: "Advanced filtration using microfiltration and ultrafiltration membranes",
      applications: ["Water recycling", "Food processing", "Biotechnology"],
      efficiency: "0.01-10 micron separation"
    }
  ];

  const designConsiderations = [
    "Flow rate and hydraulic loading requirements",
    "Particle size distribution and characteristics", 
    "Water quality objectives and discharge standards",
    "Backwash frequency and waste handling",
    "Energy consumption and operating costs",
    "Maintenance requirements and filter media replacement",
    "Integration with existing treatment processes",
    "Compliance with NZ drinking water standards"
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="hero" style={{padding: 'var(--space-16) 0'}}>
        <div className="container">
          <div className="hero-content">
            <FaFilter className="hero-icon" style={{fontSize: '4rem', color: 'var(--primary-green)', marginBottom: '2rem'}} />
            <h1>Filtration Systems</h1>
            <p className="description">
              Advanced filtration solutions for New Zealand's diverse industries, from dairy processing 
              to municipal water treatment, ensuring high-quality water and process fluids while 
              meeting strict environmental and health standards.
            </p>
          </div>
        </div>
      </section>

      {/* NZ Applications */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>Filtration Applications in New Zealand</h2>
            <p className="section-description">
              Supporting key Kiwi industries with specialized filtration technologies
            </p>
          </div>
          
          <div className="grid grid-auto">
            {nzApplications.map((application, index) => (
              <div key={index} className="card">
                <div className="card-icon">{application.icon}</div>
                <h3>{application.title}</h3>
                <p>{application.description}</p>
                <ul className="mb-4">
                  {application.details.map((detail, idx) => (
                    <li key={idx} className="flex items-center gap-2 mb-2">
                      <FaCheckCircle className="text-green-600" style={{color: 'var(--primary-green)'}} />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter Types */}
      <section className="section" style={{backgroundColor: 'var(--gray-100)'}}>
        <div className="container">
          <div className="section-header">
            <h2>Filtration Technologies</h2>
            <p className="section-description">
              Comprehensive range of filtration systems for diverse applications
            </p>
          </div>
          
          <div className="grid grid-auto">
            {filterTypes.map((filter, index) => (
              <div key={index} className="card">
                <h3>{filter.type}</h3>
                <p>{filter.description}</p>
                <div className="mb-4">
                  <h4>Applications:</h4>
                  <ul>
                    {filter.applications.map((app, idx) => (
                      <li key={idx}>• {app}</li>
                    ))}
                  </ul>
                </div>
                <div className="text-center">
                  <strong style={{color: 'var(--accent-teal)'}}>{filter.efficiency}</strong>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Design Considerations */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>Design & Engineering Considerations</h2>
            <p className="section-description">
              Key factors for successful filtration system implementation
            </p>
          </div>
          
          <div className="grid grid-cols-2">
            {designConsiderations.map((consideration, index) => (
              <div key={index} className="flex items-center gap-3 mb-4">
                <FaTools style={{color: 'var(--accent-teal)', fontSize: '1.2rem'}} />
                <span>{consideration}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose RMES */}
      <section className="section" style={{backgroundColor: 'var(--gray-100)'}}>
        <div className="container">
          <div className="section-header">
            <h2>Why Choose RMES for Filtration Systems?</h2>
          </div>
          
          <div className="grid grid-cols-3">
            <div className="card text-center">
              <FaChartLine className="card-icon" />
              <h3>NZ Industry Expertise</h3>
              <p>Deep understanding of New Zealand's unique industrial requirements and regulatory landscape.</p>
            </div>
            
            <div className="card text-center">
              <FaLeaf className="card-icon" />
              <h3>Sustainable Solutions</h3>
              <p>Environmentally conscious filtration designs that minimize waste and energy consumption.</p>
            </div>
            
            <div className="card text-center">
              <FaTools className="card-icon" />
              <h3>Custom Engineering</h3>
              <p>Tailored filtration solutions designed specifically for your process requirements.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section">
        <div className="container text-center">
          <h2>Ready to Optimize Your Filtration Process?</h2>
          <p className="text-xl mb-8">
            Contact our filtration experts to discuss your specific requirements and get a custom solution.
          </p>
          <div className="flex justify-center gap-4">
            <Link to="/contact" className="btn btn-primary btn-lg">
              Get Expert Consultation <FaArrowRight />
            </Link>
            <Link to="/services" className="btn btn-secondary btn-lg">
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FiltrationPage;