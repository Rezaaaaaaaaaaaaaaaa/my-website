import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FaBolt, 
  FaWater, 
  FaIndustry, 
  FaLeaf, 
  FaCheckCircle, 
  FaArrowRight,
  FaTools,
  FaChartLine,
  FaShieldAlt,
  FaSeedling
} from 'react-icons/fa';

const UVDisinfectionPage = () => {
  const nzApplications = [
    {
      icon: <FaWater />,
      title: "Municipal Drinking Water",
      description: "Providing safe drinking water to New Zealand communities while meeting strict health standards.",
      details: [
        "Cryptosporidium and Giardia inactivation",
        "Virus removal for groundwater sources",
        "Chemical-free disinfection for sensitive areas",
        "Compliance with NZ Drinking Water Standards"
      ]
    },
    {
      icon: <FaIndustry />,
      title: "Food & Beverage Industry",
      description: "Ensuring product safety and quality in New Zealand's world-renowned food and beverage sector.",
      details: [
        "Process water disinfection for dairy plants",
        "Wine and beverage production water treatment",
        "Seafood processing water disinfection",
        "Clean-in-place (CIP) water treatment"
      ]
    },
    {
      icon: <FaSeedling />,
      title: "Aquaculture Systems",
      description: "Supporting New Zealand's sustainable aquaculture industry with pathogen-free water systems.",
      details: [
        "Recirculating aquaculture system (RAS) disinfection",
        "Hatchery water treatment for salmon and trout",
        "Shellfish depuration system disinfection",
        "Biosecurity for marine farming operations"
      ]
    },
    {
      icon: <FaLeaf />,
      title: "Environmental Protection",
      description: "Protecting New Zealand's pristine waterways through effective wastewater disinfection.",
      details: [
        "Municipal wastewater effluent disinfection",
        "Stormwater treatment for urban runoff",
        "Industrial wastewater disinfection",
        "Beach and recreational water protection"
      ]
    }
  ];

  const uvTechnologies = [
    {
      type: "Low-Pressure UV",
      wavelength: "254 nm",
      efficiency: "High germicidal efficiency",
      applications: ["Municipal water treatment", "Swimming pools", "Small-scale systems"],
      advantages: ["Lower power consumption", "Longer lamp life", "Cost-effective operation"]
    },
    {
      type: "Medium-Pressure UV",
      wavelength: "200-280 nm (broad spectrum)",
      efficiency: "Enhanced pathogen inactivation",
      applications: ["Industrial processes", "Reuse water treatment", "Advanced oxidation"],
      advantages: ["Higher intensity output", "Effective against resistant pathogens", "Compact system design"]
    },
    {
      type: "UV-LED Technology",
      wavelength: "265-285 nm (tunable)",
      efficiency: "Targeted pathogen destruction",
      applications: ["Point-of-use systems", "Remote applications", "Specialized treatments"],
      advantages: ["Instant on/off", "Mercury-free", "Precise wavelength control"]
    }
  ];

  const designParameters = [
    "UV dose requirements (mJ/cm²) for target pathogens",
    "Water quality parameters (UV transmittance, turbidity)",
    "Flow rate and hydraulic residence time",
    "Lamp configuration and arrangement",
    "Cleaning system design for fouling control",
    "UV intensity monitoring and control",
    "Backup power systems for critical applications",
    "Integration with existing treatment processes"
  ];

  const pathogens = [
    {
      organism: "Cryptosporidium",
      dose: "10-15 mJ/cm²",
      logReduction: "3-4 log"
    },
    {
      organism: "Giardia",
      dose: "5-10 mJ/cm²", 
      logReduction: "3-4 log"
    },
    {
      organism: "E. coli",
      dose: "3-6 mJ/cm²",
      logReduction: "3-4 log"
    },
    {
      organism: "Virus (MS2)",
      dose: "15-25 mJ/cm²",
      logReduction: "3-4 log"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="hero" style={{padding: 'var(--space-16) 0'}}>
        <div className="container">
          <div className="hero-content">
            <FaBolt className="hero-icon" style={{fontSize: '4rem', color: 'var(--primary-green)', marginBottom: '2rem'}} />
            <h1>UV Disinfection Systems</h1>
            <p className="description">
              Advanced ultraviolet disinfection technology providing chemical-free pathogen inactivation 
              for New Zealand's water treatment applications, ensuring safe water supplies while 
              protecting our clean, green environment.
            </p>
          </div>
        </div>
      </section>

      {/* NZ Applications */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>UV Disinfection Applications in New Zealand</h2>
            <p className="section-description">
              Chemical-free disinfection solutions for diverse Kiwi industries and communities
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

      {/* UV Technologies */}
      <section className="section" style={{backgroundColor: 'var(--gray-100)'}}>
        <div className="container">
          <div className="section-header">
            <h2>UV Technology Options</h2>
            <p className="section-description">
              Advanced UV systems tailored for specific disinfection requirements
            </p>
          </div>
          
          <div className="grid grid-auto">
            {uvTechnologies.map((tech, index) => (
              <div key={index} className="card">
                <h3>{tech.type}</h3>
                <div className="mb-3">
                  <div className="flex justify-between mb-2">
                    <strong>Wavelength:</strong>
                    <span style={{color: 'var(--accent-teal)'}}>{tech.wavelength}</span>
                  </div>
                  <div className="mb-3">
                    <strong>Efficiency:</strong> {tech.efficiency}
                  </div>
                </div>
                <div className="mb-4">
                  <h4>Applications:</h4>
                  <ul className="mb-3">
                    {tech.applications.map((app, idx) => (
                      <li key={idx}>• {app}</li>
                    ))}
                  </ul>
                  <h4>Advantages:</h4>
                  <ul>
                    {tech.advantages.map((adv, idx) => (
                      <li key={idx}>• {adv}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pathogen Inactivation */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>Pathogen Inactivation Performance</h2>
            <p className="section-description">
              UV dose requirements for key waterborne pathogens
            </p>
          </div>
          
          <div className="grid grid-cols-4">
            {pathogens.map((pathogen, index) => (
              <div key={index} className="card text-center">
                <FaShieldAlt className="card-icon" />
                <h3>{pathogen.organism}</h3>
                <div className="mb-2">
                  <strong>UV Dose:</strong>
                  <div style={{color: 'var(--accent-teal)', fontSize: '1.2rem'}}>{pathogen.dose}</div>
                </div>
                <div>
                  <strong>Log Reduction:</strong>
                  <div style={{color: 'var(--primary-green)', fontSize: '1.1rem'}}>{pathogen.logReduction}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Design Parameters */}
      <section className="section" style={{backgroundColor: 'var(--gray-100)'}}>
        <div className="container">
          <div className="section-header">
            <h2>Design Considerations</h2>
            <p className="section-description">
              Critical parameters for effective UV system design and operation
            </p>
          </div>
          
          <div className="grid grid-cols-2">
            {designParameters.map((parameter, index) => (
              <div key={index} className="flex items-center gap-3 mb-4">
                <FaTools style={{color: 'var(--accent-teal)', fontSize: '1.2rem'}} />
                <span>{parameter}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>Why Choose UV Disinfection?</h2>
          </div>
          
          <div className="grid grid-cols-4">
            <div className="card text-center">
              <FaLeaf className="card-icon" />
              <h3>Chemical-Free</h3>
              <p>No harmful disinfection by-products or chemical residuals</p>
            </div>
            
            <div className="card text-center">
              <FaBolt className="card-icon" />
              <h3>Instant Action</h3>
              <p>Immediate pathogen inactivation with no contact time required</p>
            </div>
            
            <div className="card text-center">
              <FaChartLine className="card-icon" />
              <h3>Cost Effective</h3>
              <p>Low operating costs with minimal maintenance requirements</p>
            </div>
            
            <div className="card text-center">
              <FaShieldAlt className="card-icon" />
              <h3>Proven Reliability</h3>
              <p>Established technology with predictable performance</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section">
        <div className="container text-center">
          <h2>Ready to Implement UV Disinfection?</h2>
          <p className="text-xl mb-8">
            Contact our UV specialists to design a chemical-free disinfection solution for your application.
          </p>
          <div className="flex justify-center gap-4">
            <Link to="/contact" className="btn btn-primary btn-lg">
              Get UV System Design <FaArrowRight />
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

export default UVDisinfectionPage;