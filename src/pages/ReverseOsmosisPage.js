import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FaWater, 
  FaIndustry, 
  FaLeaf, 
  FaCheckCircle, 
  FaArrowRight,
  FaTools,
  FaChartLine,
  FaFlask,
  FaSeedling
} from 'react-icons/fa';

const ReverseOsmosisPage = () => {
  const nzApplications = [
    {
      icon: <FaWater />,
      title: "Desalination Plants",
      description: "Providing fresh water solutions for New Zealand's coastal communities and industries facing water scarcity.",
      details: [
        "Seawater desalination for coastal communities",
        "Brackish water treatment in Canterbury",
        "Emergency water supply during droughts",
        "Island community water security solutions"
      ]
    },
    {
      icon: <FaIndustry />,
      title: "Dairy & Food Processing",
      description: "Ultra-pure water production for New Zealand's world-leading dairy and food processing industries.",
      details: [
        "Boiler feedwater for dairy processing plants",
        "Clean-in-place (CIP) water for food facilities",
        "Beverage production water treatment",
        "Pharmaceutical grade water production"
      ]
    },
    {
      icon: <FaFlask />,
      title: "High-Tech Manufacturing",
      description: "Supporting New Zealand's growing high-tech manufacturing sector with ultra-pure water systems.",
      details: [
        "Electronics manufacturing rinse water",
        "Laboratory ultra-pure water systems",
        "Semiconductor fabrication water",
        "Medical device manufacturing water"
      ]
    },
    {
      icon: <FaSeedling />,
      title: "Horticulture & Agriculture",
      description: "Enabling precision agriculture and protected cropping with high-quality irrigation water.",
      details: [
        "Greenhouse hydroponic system water",
        "Salinity removal for irrigation water",
        "Nutrient solution preparation water",
        "Protected cropping water treatment"
      ]
    }
  ];

  const roSystems = [
    {
      type: "Seawater RO",
      description: "High-pressure systems for seawater desalination with energy recovery",
      pressure: "55-80 bar",
      recovery: "35-50%",
      applications: ["Coastal desalination", "Marine applications", "Industrial seawater treatment"]
    },
    {
      type: "Brackish Water RO",
      description: "Medium-pressure systems for brackish groundwater and surface water treatment",
      pressure: "10-25 bar", 
      recovery: "75-85%",
      applications: ["Groundwater treatment", "Industrial process water", "Municipal water supply"]
    },
    {
      type: "Low-Pressure RO",
      description: "High-efficiency systems for treated water polishing and ultra-pure applications",
      pressure: "5-15 bar",
      recovery: "80-95%",
      applications: ["Ultra-pure water", "Laboratory water", "Pharmaceutical water"]
    },
    {
      type: "Nanofiltration",
      description: "Selective membrane separation for partial desalination and organic removal",
      pressure: "5-20 bar",
      recovery: "70-90%", 
      applications: ["Water softening", "Color removal", "Micropollutant removal"]
    }
  ];

  const designFeatures = [
    "Energy recovery devices (ERD) for efficiency",
    "Advanced membrane materials and configurations",
    "Automated CIP (Clean-in-Place) systems",
    "Real-time monitoring and control systems",
    "Pre-treatment system integration",
    "Brine management and disposal systems",
    "Corrosion-resistant materials for marine environment",
    "Remote monitoring capabilities for rural installations"
  ];

  const benefits = [
    {
      icon: <FaWater />,
      title: "Superior Water Quality",
      description: "Removes 99.5%+ of dissolved salts, bacteria, and contaminants"
    },
    {
      icon: <FaLeaf />,
      title: "Energy Efficient",
      description: "Modern RO systems with energy recovery achieve 3-4 kWh/m³ for seawater"
    },
    {
      icon: <FaTools />,
      title: "Reliable Operation", 
      description: "Proven technology with 20+ year membrane life expectancy"
    },
    {
      icon: <FaChartLine />,
      title: "Cost Effective",
      description: "Lower operating costs compared to alternative desalination methods"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="hero" style={{padding: 'var(--space-16) 0'}}>
        <div className="container">
          <div className="hero-content">
            <FaWater className="hero-icon" style={{fontSize: '4rem', color: 'var(--primary-green)', marginBottom: '2rem'}} />
            <h1>Reverse Osmosis Systems</h1>
            <p className="description">
              Advanced membrane technology providing high-quality water solutions for New Zealand's 
              industries and communities. From seawater desalination to ultra-pure water production, 
              supporting sustainable water security across Aotearoa.
            </p>
          </div>
        </div>
      </section>

      {/* NZ Applications */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>Reverse Osmosis Applications in New Zealand</h2>
            <p className="section-description">
              Meeting diverse water quality requirements across key Kiwi industries
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

      {/* RO System Types */}
      <section className="section" style={{backgroundColor: 'var(--gray-100)'}}>
        <div className="container">
          <div className="section-header">
            <h2>RO System Configurations</h2>
            <p className="section-description">
              Tailored membrane systems for specific water treatment requirements
            </p>
          </div>
          
          <div className="grid grid-auto">
            {roSystems.map((system, index) => (
              <div key={index} className="card">
                <h3>{system.type}</h3>
                <p>{system.description}</p>
                <div className="mb-4">
                  <div className="flex justify-between mb-2">
                    <strong>Operating Pressure:</strong>
                    <span style={{color: 'var(--accent-teal)'}}>{system.pressure}</span>
                  </div>
                  <div className="flex justify-between mb-3">
                    <strong>Water Recovery:</strong>
                    <span style={{color: 'var(--accent-teal)'}}>{system.recovery}</span>
                  </div>
                  <h4>Applications:</h4>
                  <ul>
                    {system.applications.map((app, idx) => (
                      <li key={idx}>• {app}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>RO System Benefits</h2>
            <p className="section-description">
              Why reverse osmosis is the preferred choice for demanding applications
            </p>
          </div>
          
          <div className="grid grid-cols-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="card text-center">
                <div className="card-icon">{benefit.icon}</div>
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Design Features */}
      <section className="section" style={{backgroundColor: 'var(--gray-100)'}}>
        <div className="container">
          <div className="section-header">
            <h2>Advanced Design Features</h2>
            <p className="section-description">
              State-of-the-art components for optimal performance and reliability
            </p>
          </div>
          
          <div className="grid grid-cols-2">
            {designFeatures.map((feature, index) => (
              <div key={index} className="flex items-center gap-3 mb-4">
                <FaTools style={{color: 'var(--accent-teal)', fontSize: '1.2rem'}} />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Flow */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>RO Process Flow</h2>
            <p className="section-description">
              Comprehensive treatment train for optimal water quality
            </p>
          </div>
          
          <div className="grid grid-cols-5">
            <div className="card text-center">
              <h4>1. Pre-treatment</h4>
              <p>Chlorination, coagulation, sedimentation, and multimedia filtration</p>
            </div>
            <div className="card text-center">
              <h4>2. Fine Filtration</h4>
              <p>Cartridge or ultrafiltration for suspended solids removal</p>
            </div>
            <div className="card text-center">
              <h4>3. High-Pressure Pumping</h4>
              <p>Energy-efficient pumps with variable frequency drives</p>
            </div>
            <div className="card text-center">
              <h4>4. RO Membranes</h4>
              <p>Spiral-wound membranes in pressure vessels</p>
            </div>
            <div className="card text-center">
              <h4>5. Post-treatment</h4>
              <p>pH adjustment, disinfection, and remineralization as required</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section">
        <div className="container text-center">
          <h2>Need a Custom RO Solution?</h2>
          <p className="text-xl mb-8">
            Our experts can design the perfect reverse osmosis system for your specific water quality requirements.
          </p>
          <div className="flex justify-center gap-4">
            <Link to="/contact" className="btn btn-primary btn-lg">
              Get RO System Quote <FaArrowRight />
            </Link>
            <Link to="/services" className="btn btn-secondary btn-lg">
              View All Technologies
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ReverseOsmosisPage;