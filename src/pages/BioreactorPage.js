import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FaFlask, 
  FaIndustry, 
  FaLeaf, 
  FaCheckCircle, 
  FaArrowRight,
  FaTools,
  FaChartLine,
  FaDna,
  FaSeedling,
  FaRecycle
} from 'react-icons/fa';

const BioreactorPage = () => {
  const nzApplications = [
    {
      icon: <FaIndustry />,
      title: "Biotechnology Manufacturing",
      description: "Supporting New Zealand's growing biotechnology sector with advanced fermentation and cell culture systems.",
      details: [
        "Pharmaceutical protein production",
        "Enzyme manufacturing for dairy industry", 
        "Biofuel production from agricultural waste",
        "Specialty chemical biotransformation"
      ]
    },
    {
      icon: <FaLeaf />,
      title: "Wastewater Treatment",
      description: "Biological treatment systems for municipal and industrial wastewater across New Zealand.",
      details: [
        "Activated sludge process optimization",
        "Membrane bioreactor (MBR) systems",
        "Sequencing batch reactors (SBR)",
        "Biological nutrient removal systems"
      ]
    },
    {
      icon: <FaSeedling />,
      title: "Agriculture & Food",
      description: "Bioprocessing solutions for New Zealand's primary industries and food production.",
      details: [
        "Silage inoculant production",
        "Probiotic manufacturing for livestock",
        "Organic acid production from food waste",
        "Bioactive compound extraction"
      ]
    },
    {
      icon: <FaRecycle />,
      title: "Waste-to-Value",
      description: "Converting organic waste streams into valuable products through biological processes.",
      details: [
        "Anaerobic digestion for biogas production",
        "Composting bioreactor systems",
        "Biohydrogen production",
        "Single cell protein from organic waste"
      ]
    }
  ];

  const bioreactorTypes = [
    {
      type: "Stirred Tank Reactor (STR)",
      description: "Mechanically agitated bioreactors for aerobic fermentation processes",
      features: ["Precise mixing and mass transfer", "Scalable from lab to industrial scale", "Advanced process control"],
      applications: ["Pharmaceutical production", "Enzyme manufacturing", "Cell culture"],
      capacity: "1L - 100,000L"
    },
    {
      type: "Airlift Bioreactor",
      description: "Pneumatically agitated systems using air circulation for mixing",
      features: ["Gentle mixing for shear-sensitive cells", "Energy efficient operation", "Simple construction"],
      applications: ["Algae cultivation", "Wastewater treatment", "Fragile cell culture"],
      capacity: "10L - 10,000L"
    },
    {
      type: "Packed Bed Reactor",
      description: "Fixed-film systems for high biomass retention and continuous operation",
      features: ["High biomass concentration", "Continuous operation capability", "Reduced washout risk"],
      applications: ["Wastewater treatment", "Biofilm processes", "Immobilized enzyme reactions"],
      capacity: "100L - 50,000L"
    },
    {
      type: "Anaerobic Digester",
      description: "Oxygen-free systems for biogas production and waste treatment",
      features: ["Biogas generation", "Waste volume reduction", "Nutrient recovery"],
      applications: ["Municipal sludge digestion", "Agricultural waste treatment", "Landfill gas production"],
      capacity: "1,000L - 1,000,000L"
    }
  ];

  const controlSystems = [
    "Temperature control with heating/cooling systems",
    "Dissolved oxygen monitoring and control",
    "pH measurement and automated adjustment",
    "Agitation speed and power monitoring",
    "Feed flow control and nutrient management",
    "Off-gas analysis (CO2, O2, volatile compounds)",
    "Biomass concentration monitoring",
    "Real-time data logging and SCADA integration"
  ];

  const designConsiderations = [
    {
      category: "Mass Transfer",
      items: ["Oxygen transfer rate (OTR)", "kLa coefficients", "Mixing time", "Heat transfer"]
    },
    {
      category: "Process Control", 
      items: ["Temperature uniformity", "pH stability", "Dissolved oxygen", "Foam control"]
    },
    {
      category: "Sterilization",
      items: ["Steam-in-place (SIP)", "Clean-in-place (CIP)", "Sterile air filtration", "Aseptic sampling"]
    },
    {
      category: "Scale-up",
      items: ["Geometric similarity", "Power per unit volume", "Tip speed", "Mass transfer correlations"]
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="hero" style={{padding: 'var(--space-16) 0'}}>
        <div className="container">
          <div className="hero-content">
            <FaFlask className="hero-icon" style={{fontSize: '4rem', color: 'var(--primary-green)', marginBottom: '2rem'}} />
            <h1>Bioreactor Systems</h1>
            <p className="description">
              Advanced bioprocessing solutions for New Zealand's biotechnology, environmental, and 
              agricultural industries. From laboratory-scale fermenters to industrial bioreactors, 
              enabling sustainable biological processes that drive innovation across Aotearoa.
            </p>
          </div>
        </div>
      </section>

      {/* NZ Applications */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>Bioreactor Applications in New Zealand</h2>
            <p className="section-description">
              Biological processing solutions for key Kiwi industries and environmental applications
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

      {/* Bioreactor Types */}
      <section className="section" style={{backgroundColor: 'var(--gray-100)'}}>
        <div className="container">
          <div className="section-header">
            <h2>Bioreactor Configurations</h2>
            <p className="section-description">
              Specialized reactor designs for diverse biological processes
            </p>
          </div>
          
          <div className="grid grid-auto">
            {bioreactorTypes.map((reactor, index) => (
              <div key={index} className="card">
                <h3>{reactor.type}</h3>
                <p>{reactor.description}</p>
                <div className="mb-4">
                  <h4>Key Features:</h4>
                  <ul className="mb-3">
                    {reactor.features.map((feature, idx) => (
                      <li key={idx}>• {feature}</li>
                    ))}
                  </ul>
                  <h4>Applications:</h4>
                  <ul className="mb-3">
                    {reactor.applications.map((app, idx) => (
                      <li key={idx}>• {app}</li>
                    ))}
                  </ul>
                  <div className="text-center">
                    <strong>Capacity Range: </strong>
                    <span style={{color: 'var(--accent-teal)'}}>{reactor.capacity}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Control Systems */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>Process Control & Monitoring</h2>
            <p className="section-description">
              Advanced automation for optimal bioreactor performance
            </p>
          </div>
          
          <div className="grid grid-cols-2">
            {controlSystems.map((system, index) => (
              <div key={index} className="flex items-center gap-3 mb-4">
                <FaTools style={{color: 'var(--accent-teal)', fontSize: '1.2rem'}} />
                <span>{system}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Design Considerations */}
      <section className="section" style={{backgroundColor: 'var(--gray-100)'}}>
        <div className="container">
          <div className="section-header">
            <h2>Engineering Design Considerations</h2>
            <p className="section-description">
              Critical parameters for successful bioreactor design and scale-up
            </p>
          </div>
          
          <div className="grid grid-cols-4">
            {designConsiderations.map((category, index) => (
              <div key={index} className="card">
                <h3>{category.category}</h3>
                <ul>
                  {category.items.map((item, idx) => (
                    <li key={idx}>• {item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Development */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>Bioprocess Development Approach</h2>
            <p className="section-description">
              Systematic methodology for bioreactor process optimization
            </p>
          </div>
          
          <div className="grid grid-cols-5">
            <div className="card text-center">
              <FaDna className="card-icon" />
              <h4>1. Strain Selection</h4>
              <p>Microorganism screening and genetic optimization</p>
            </div>
            <div className="card text-center">
              <FaFlask className="card-icon" />
              <h4>2. Lab Scale</h4>
              <p>Bench-scale optimization and kinetic studies</p>
            </div>
            <div className="card text-center">
              <FaTools className="card-icon" />
              <h4>3. Pilot Scale</h4>
              <p>Process validation and scale-up parameters</p>
            </div>
            <div className="card text-center">
              <FaIndustry className="card-icon" />
              <h4>4. Production</h4>
              <p>Commercial-scale implementation and optimization</p>
            </div>
            <div className="card text-center">
              <FaChartLine className="card-icon" />
              <h4>5. Monitoring</h4>
              <p>Continuous improvement and quality control</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>Why Choose Advanced Bioreactors?</h2>
          </div>
          
          <div className="grid grid-cols-4">
            <div className="card text-center">
              <FaLeaf className="card-icon" />
              <h3>Sustainable</h3>
              <p>Environmentally friendly biological processes with reduced chemical use</p>
            </div>
            
            <div className="card text-center">
              <FaChartLine className="card-icon" />
              <h3>Efficient</h3>
              <p>High productivity and yield through optimized process conditions</p>
            </div>
            
            <div className="card text-center">
              <FaTools className="card-icon" />
              <h3>Controlled</h3>
              <p>Precise control of biological processes for consistent product quality</p>
            </div>
            
            <div className="card text-center">
              <FaRecycle className="card-icon" />
              <h3>Versatile</h3>
              <p>Adaptable systems for diverse applications and product requirements</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section">
        <div className="container text-center">
          <h2>Need a Custom Bioreactor Solution?</h2>
          <p className="text-xl mb-8">
            Our bioprocess engineers can design and optimize bioreactor systems for your specific application.
          </p>
          <div className="flex justify-center gap-4">
            <Link to="/contact" className="btn btn-primary btn-lg">
              Discuss Your Bioprocess <FaArrowRight />
            </Link>
            <Link to="/services" className="btn btn-secondary btn-lg">
              View All Solutions
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BioreactorPage;