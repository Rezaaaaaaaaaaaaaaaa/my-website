import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FaLeaf, 
  FaIndustry, 
  FaWater, 
  FaCheckCircle, 
  FaArrowRight,
  FaTools,
  FaChartLine,
  FaFlask,
  FaRecycle
} from 'react-icons/fa';

const ActivatedCarbonPage = () => {
  const nzApplications = [
    {
      icon: <FaWater />,
      title: "Drinking Water Treatment",
      description: "Removing taste, odor, and organic compounds from New Zealand's diverse water sources.",
      details: [
        "Chlorine and chloramine removal",
        "Taste and odor control from algae blooms",
        "THM and HAA reduction",
        "Pesticide and herbicide removal from agricultural runoff"
      ]
    },
    {
      icon: <FaIndustry />,
      title: "Industrial Process Water",
      description: "Purifying process water for New Zealand's manufacturing and processing industries.",
      details: [
        "Food and beverage industry water treatment",
        "Pharmaceutical process water purification",
        "Electronics manufacturing ultrapure water",
        "Dairy processing water quality improvement"
      ]
    },
    {
      icon: <FaFlask />,
      title: "Air Purification",
      description: "Gas-phase adsorption for air quality control in industrial and commercial applications.",
      details: [
        "Volatile organic compound (VOC) removal",
        "Odor control for wastewater treatment plants",
        "Industrial emission control",
        "Laboratory fume hood applications"
      ]
    },
    {
      icon: <FaRecycle />,
      title: "Wastewater Treatment",
      description: "Advanced treatment of municipal and industrial wastewater for environmental protection.",
      details: [
        "Tertiary treatment for effluent polishing",
        "Micropollutant removal",
        "Color removal from industrial discharge",
        "Groundwater remediation applications"
      ]
    }
  ];

  const carbonTypes = [
    {
      type: "Granular Activated Carbon (GAC)",
      description: "Irregularly shaped particles for fixed-bed adsorption systems",
      size: "0.2 - 5.0 mm",
      applications: ["Water treatment", "Air purification", "Fixed bed reactors"],
      advantages: ["Low pressure drop", "Easy regeneration", "Cost effective"],
      bET: "500-1500 m²/g"
    },
    {
      type: "Powdered Activated Carbon (PAC)",
      description: "Fine particles for direct addition to treatment processes",
      size: "< 0.18 mm (80 mesh)",
      applications: ["Emergency treatment", "Seasonal taste/odor control", "Batch processes"],
      advantages: ["Rapid kinetics", "Flexible dosing", "Lower capital cost"],
      bET: "600-1200 m²/g"
    },
    {
      type: "Extruded Activated Carbon",
      description: "Cylindrical pellets with uniform shape and low dust generation",
      size: "1.5 - 4.0 mm diameter",
      applications: ["Gas phase adsorption", "Catalytic applications", "High flow systems"],
      advantages: ["Low pressure drop", "High mechanical strength", "Uniform flow"],
      bET: "800-1200 m²/g"
    },
    {
      type: "Impregnated Carbon",
      description: "Carbon enhanced with chemicals for specific contaminant removal",
      size: "Various sizes available",
      applications: ["Mercury removal", "Hydrogen sulfide control", "Specialized treatments"],
      advantages: ["Enhanced selectivity", "Improved capacity", "Targeted removal"],
      bET: "400-1000 m²/g"
    }
  ];

  const designFactors = [
    "Contaminant characteristics and concentration",
    "Contact time and empty bed contact time (EBCT)",
    "Carbon selection and pore structure",
    "Flow rate and hydraulic loading",
    "Backwash frequency and regeneration cycles",
    "Temperature and pH effects on adsorption",
    "Competition from background organics",
    "System configuration (series vs parallel)"
  ];

  const regenerationMethods = [
    {
      method: "Thermal Regeneration",
      temperature: "800-1000°C",
      description: "Steam activation in rotary kilns or multiple hearth furnaces",
      recovery: "85-95%",
      applications: "Large-scale GAC systems"
    },
    {
      method: "Chemical Regeneration", 
      temperature: "Ambient to 200°C",
      description: "Solvent extraction or chemical oxidation of adsorbates",
      recovery: "70-90%",
      applications: "Specialized contaminants"
    },
    {
      method: "Biological Regeneration",
      temperature: "20-40°C", 
      description: "Microbial degradation of adsorbed organics",
      recovery: "60-80%",
      applications: "Biodegradable compounds"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="hero" style={{padding: 'var(--space-16) 0'}}>
        <div className="container">
          <div className="hero-content">
            <FaLeaf className="hero-icon" style={{fontSize: '4rem', color: 'var(--primary-green)', marginBottom: '2rem'}} />
            <h1>Activated Carbon Systems</h1>
            <p className="description">
              Advanced adsorption technology for removing organic compounds, taste, odor, and 
              contaminants from water and air streams. Supporting New Zealand's commitment to 
              clean water and environmental protection through proven carbon adsorption processes.
            </p>
          </div>
        </div>
      </section>

      {/* NZ Applications */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>Activated Carbon Applications in New Zealand</h2>
            <p className="section-description">
              Comprehensive adsorption solutions for water, wastewater, and air treatment
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

      {/* Carbon Types */}
      <section className="section" style={{backgroundColor: 'var(--gray-100)'}}>
        <div className="container">
          <div className="section-header">
            <h2>Activated Carbon Types</h2>
            <p className="section-description">
              Different carbon forms optimized for specific applications and operating conditions
            </p>
          </div>
          
          <div className="grid grid-auto">
            {carbonTypes.map((carbon, index) => (
              <div key={index} className="card">
                <h3>{carbon.type}</h3>
                <p>{carbon.description}</p>
                <div className="mb-4">
                  <div className="flex justify-between mb-2">
                    <strong>Particle Size:</strong>
                    <span style={{color: 'var(--accent-teal)'}}>{carbon.size}</span>
                  </div>
                  <div className="flex justify-between mb-3">
                    <strong>BET Surface Area:</strong>
                    <span style={{color: 'var(--accent-teal)'}}>{carbon.bET}</span>
                  </div>
                  <h4>Applications:</h4>
                  <ul className="mb-3">
                    {carbon.applications.map((app, idx) => (
                      <li key={idx}>• {app}</li>
                    ))}
                  </ul>
                  <h4>Advantages:</h4>
                  <ul>
                    {carbon.advantages.map((adv, idx) => (
                      <li key={idx} style={{color: 'var(--primary-green)'}}>• {adv}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Design Factors */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>Design Considerations</h2>
            <p className="section-description">
              Key parameters for effective activated carbon system design
            </p>
          </div>
          
          <div className="grid grid-cols-2">
            {designFactors.map((factor, index) => (
              <div key={index} className="flex items-center gap-3 mb-4">
                <FaTools style={{color: 'var(--accent-teal)', fontSize: '1.2rem'}} />
                <span>{factor}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Regeneration Methods */}
      <section className="section" style={{backgroundColor: 'var(--gray-100)'}}>
        <div className="container">
          <div className="section-header">
            <h2>Carbon Regeneration Options</h2>
            <p className="section-description">
              Sustainable approaches for carbon reuse and lifecycle management
            </p>
          </div>
          
          <div className="grid grid-auto">
            {regenerationMethods.map((method, index) => (
              <div key={index} className="card">
                <h3>{method.method}</h3>
                <p>{method.description}</p>
                <div className="mb-4">
                  <div className="flex justify-between mb-2">
                    <strong>Temperature:</strong>
                    <span style={{color: 'var(--accent-teal)'}}>{method.temperature}</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <strong>Recovery:</strong>
                    <span style={{color: 'var(--primary-green)'}}>{method.recovery}</span>
                  </div>
                  <div>
                    <strong>Best For:</strong> {method.applications}
                  </div>
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
            <h2>Why Choose Activated Carbon?</h2>
          </div>
          
          <div className="grid grid-cols-4">
            <div className="card text-center">
              <FaLeaf className="card-icon" />
              <h3>Versatile</h3>
              <p>Effective for wide range of organic compounds and contaminants</p>
            </div>
            
            <div className="card text-center">
              <FaRecycle className="card-icon" />
              <h3>Regenerable</h3>
              <p>Carbon can be regenerated and reused multiple times</p>
            </div>
            
            <div className="card text-center">
              <FaChartLine className="card-icon" />
              <h3>Cost Effective</h3>
              <p>Proven technology with predictable operating costs</p>
            </div>
            
            <div className="card text-center">
              <FaTools className="card-icon" />
              <h3>Reliable</h3>
              <p>Robust systems with minimal maintenance requirements</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section">
        <div className="container text-center">
          <h2>Need Activated Carbon Treatment?</h2>
          <p className="text-xl mb-8">
            Our experts can design carbon adsorption systems tailored to your specific contaminant removal needs.
          </p>
          <div className="flex justify-center gap-4">
            <Link to="/contact" className="btn btn-primary btn-lg">
              Get Carbon System Quote <FaArrowRight />
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

export default ActivatedCarbonPage;