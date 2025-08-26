import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FaVial, 
  FaIndustry, 
  FaWater, 
  FaCheckCircle, 
  FaArrowRight,
  FaTools,
  FaChartLine,
  FaLeaf,
  FaFlask
} from 'react-icons/fa';

const IonExchangePage = () => {
  const nzApplications = [
    {
      icon: <FaWater />,
      title: "Water Softening",
      description: "Removing hardness minerals from New Zealand's groundwater sources for residential and commercial use.",
      details: [
        "Calcium and magnesium removal from bore water",
        "Scale prevention in geothermal systems",
        "Residential water softening systems",
        "Industrial boiler feedwater treatment"
      ]
    },
    {
      icon: <FaIndustry />,
      title: "Ultra-Pure Water",
      description: "Producing deionized water for New Zealand's high-tech industries and manufacturing sectors.",
      details: [
        "Electronics manufacturing rinse water",
        "Pharmaceutical water systems",
        "Laboratory ultra-pure water",
        "Power plant boiler water treatment"
      ]
    },
    {
      icon: <FaFlask />,
      title: "Selective Removal",
      description: "Targeted removal of specific contaminants from water and process streams.",
      details: [
        "Nitrate removal from groundwater",
        "Heavy metal recovery from mining",
        "Radioactive isotope removal",
        "Chromium treatment in industrial waste"
      ]
    },
    {
      icon: <FaLeaf />,
      title: "Resource Recovery",
      description: "Recovering valuable materials from waste streams while treating water.",
      details: [
        "Precious metal recovery from e-waste",
        "Lithium extraction from geothermal brines",
        "Phosphorus recovery from wastewater",
        "Rare earth element separation"
      ]
    }
  ];

  const resinTypes = [
    {
      type: "Strong Acid Cation (SAC)",
      function: "Removes all cations (Ca²⁺, Mg²⁺, Na⁺, K⁺)",
      applications: ["Water softening", "Deionization", "Heavy metal removal"],
      regenerant: "HCl or H₂SO₄",
      capacity: "2.0-2.2 eq/L"
    },
    {
      type: "Weak Acid Cation (WAC)", 
      function: "Removes hardness associated with alkalinity",
      applications: ["Alkalinity reduction", "Dealkalization", "Pre-treatment"],
      regenerant: "HCl",
      capacity: "3.5-4.0 eq/L"
    },
    {
      type: "Strong Base Anion (SBA)",
      function: "Removes all anions including silica and CO₂",
      applications: ["Deionization", "Silica removal", "Organic removal"],
      regenerant: "NaOH",
      capacity: "1.0-1.4 eq/L"
    },
    {
      type: "Weak Base Anion (WBA)",
      function: "Removes strong acid anions (Cl⁻, SO₄²⁻, NO₃⁻)",
      applications: ["Deionization", "Acid waste neutralization", "Organic removal"],
      regenerant: "NaOH or NH₄OH",
      capacity: "1.8-2.5 eq/L"
    }
  ];

  const systemConfigurations = [
    {
      config: "Co-current Regeneration",
      description: "Regenerant flows in same direction as service flow",
      advantages: ["Lower regenerant consumption", "Better capacity utilization"],
      disadvantages: ["Higher leakage", "Poorer effluent quality"]
    },
    {
      config: "Counter-current Regeneration", 
      description: "Regenerant flows opposite to service flow direction",
      advantages: ["Lower leakage", "Better effluent quality", "Higher efficiency"],
      disadvantages: ["Higher regenerant usage", "More complex design"]
    },
    {
      config: "Mixed Bed",
      description: "Cation and anion resins mixed in single vessel",
      advantages: ["Highest water quality", "Compact design", "Low capital cost"],
      disadvantages: ["Complex regeneration", "Higher operating costs"]
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="hero" style={{padding: 'var(--space-16) 0'}}>
        <div className="container">
          <div className="hero-content">
            <FaVial className="hero-icon" style={{fontSize: '4rem', color: 'var(--primary-green)', marginBottom: '2rem'}} />
            <h1>Ion Exchange Systems</h1>
            <p className="description">
              Advanced ion exchange technology for water treatment, purification, and resource recovery 
              applications across New Zealand. From water softening to ultra-pure water production, 
              providing precise control over water chemistry and quality.
            </p>
          </div>
        </div>
      </section>

      {/* NZ Applications */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>Ion Exchange Applications in New Zealand</h2>
            <p className="section-description">
              Specialized resin-based treatment solutions for diverse water quality challenges
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

      {/* Resin Types */}
      <section className="section" style={{backgroundColor: 'var(--gray-100)'}}>
        <div className="container">
          <div className="section-header">
            <h2>Ion Exchange Resin Types</h2>
            <p className="section-description">
              Specialized resins for targeted ion removal and water treatment
            </p>
          </div>
          
          <div className="grid grid-auto">
            {resinTypes.map((resin, index) => (
              <div key={index} className="card">
                <h3>{resin.type}</h3>
                <p><strong>Function:</strong> {resin.function}</p>
                <div className="mb-4">
                  <h4>Applications:</h4>
                  <ul className="mb-3">
                    {resin.applications.map((app, idx) => (
                      <li key={idx}>• {app}</li>
                    ))}
                  </ul>
                  <div className="flex justify-between mb-2">
                    <strong>Regenerant:</strong>
                    <span style={{color: 'var(--accent-teal)'}}>{resin.regenerant}</span>
                  </div>
                  <div className="flex justify-between">
                    <strong>Capacity:</strong>
                    <span style={{color: 'var(--accent-teal)'}}>{resin.capacity}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* System Configurations */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>System Configurations</h2>
            <p className="section-description">
              Different operating modes for optimal performance and efficiency
            </p>
          </div>
          
          <div className="grid grid-auto">
            {systemConfigurations.map((system, index) => (
              <div key={index} className="card">
                <h3>{system.config}</h3>
                <p>{system.description}</p>
                <div className="mb-4">
                  <h4>Advantages:</h4>
                  <ul className="mb-3">
                    {system.advantages.map((adv, idx) => (
                      <li key={idx} style={{color: 'var(--primary-green)'}}>• {adv}</li>
                    ))}
                  </ul>
                  <h4>Considerations:</h4>
                  <ul>
                    {system.disadvantages.map((dis, idx) => (
                      <li key={idx} style={{color: 'var(--gray-600)'}}>• {dis}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Benefits */}
      <section className="section" style={{backgroundColor: 'var(--gray-100)'}}>
        <div className="container">
          <div className="section-header">
            <h2>Why Choose Ion Exchange?</h2>
          </div>
          
          <div className="grid grid-cols-4">
            <div className="card text-center">
              <FaChartLine className="card-icon" />
              <h3>Selective Removal</h3>
              <p>Precise control over specific ion removal and exchange</p>
            </div>
            
            <div className="card text-center">
              <FaTools className="card-icon" />
              <h3>Regenerable</h3>
              <p>Resins can be regenerated and reused for hundreds of cycles</p>
            </div>
            
            <div className="card text-center">
              <FaLeaf className="card-icon" />
              <h3>Resource Recovery</h3>
              <p>Valuable materials can be recovered during regeneration</p>
            </div>
            
            <div className="card text-center">
              <FaWater className="card-icon" />
              <h3>High Purity</h3>
              <p>Produces ultra-pure water with very low conductivity</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section">
        <div className="container text-center">
          <h2>Need Custom Ion Exchange Design?</h2>
          <p className="text-xl mb-8">
            Our specialists can design ion exchange systems tailored to your specific water quality requirements.
          </p>
          <div className="flex justify-center gap-4">
            <Link to="/contact" className="btn btn-primary btn-lg">
              Get Ion Exchange Quote <FaArrowRight />
            </Link>
            <Link to="/services" className="btn btn-secondary btn-lg">
              Explore Other Technologies
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default IonExchangePage;