import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FaSnowflake, 
  FaIndustry, 
  FaFlask, 
  FaCheckCircle, 
  FaArrowRight,
  FaTools,
  FaChartLine,
  FaLeaf,
  FaGem
} from 'react-icons/fa';

const CrystallizationPage = () => {
  const nzApplications = [
    {
      icon: <FaIndustry />,
      title: "Salt Production",
      description: "Sea salt and lake salt production utilizing New Zealand's coastal and geothermal resources.",
      details: [
        "Solar salt production from seawater",
        "Lake Grassmere salt harvesting",
        "Geothermal brine salt recovery",
        "Specialty salt and mineral production"
      ]
    },
    {
      icon: <FaFlask />,
      title: "Pharmaceutical Manufacturing",
      description: "High-purity crystallization for New Zealand's pharmaceutical and fine chemical industries.",
      details: [
        "Active pharmaceutical ingredient (API) purification",
        "Controlled particle size distribution",
        "Polymorphic form control",
        "GMP-compliant crystallization systems"
      ]
    },
    {
      icon: <FaLeaf />,
      title: "Food & Dairy Processing",
      description: "Crystallization processes for New Zealand's world-renowned food and dairy sectors.",
      details: [
        "Lactose crystallization from whey",
        "Sugar processing and refining",
        "Specialty food ingredient production",
        "Dairy powder crystallization optimization"
      ]
    },
    {
      icon: <FaGem />,
      title: "Mineral Processing",
      description: "Recovery and purification of valuable minerals and metals from New Zealand resources.",
      details: [
        "Gold and precious metal recovery",
        "Mineral salt production",
        "Zeolite and specialty mineral crystallization",
        "Waste stream value recovery"
      ]
    }
  ];

  const crystallizationTypes = [
    {
      type: "Evaporative Crystallization",
      description: "Solvent removal to achieve supersaturation and crystal formation",
      applications: ["Salt production", "Concentration processes", "Waste treatment"],
      equipment: ["Forced circulation evaporators", "Natural circulation crystallizers", "Draft tube baffle systems"],
      advantages: ["Simple operation", "High recovery", "Scalable design"]
    },
    {
      type: "Cooling Crystallization",
      description: "Temperature reduction to decrease solubility and induce crystallization",
      applications: ["Pharmaceutical APIs", "Fine chemicals", "Specialty products"],
      equipment: ["Stirred tank crystallizers", "Scraped surface crystallizers", "Plate crystallizers"],
      advantages: ["High purity", "Controlled morphology", "Lower energy consumption"]
    },
    {
      type: "Anti-solvent Crystallization",
      description: "Addition of anti-solvent to reduce solubility and precipitate crystals",
      applications: ["Pharmaceutical processing", "Fine chemical purification", "Protein crystallization"],
      equipment: ["Mixed suspension crystallizers", "Impinging jet reactors", "Tubular crystallizers"],
      advantages: ["Rapid nucleation", "Small crystals", "Precise control"]
    },
    {
      type: "Reactive Crystallization",
      description: "Chemical reaction combined with crystallization in single unit operation",
      applications: ["Inorganic salt production", "Precipitation processes", "pH adjustment"],
      equipment: ["Continuous stirred tank reactors", "Fluidized bed crystallizers", "Jet loop reactors"],
      advantages: ["Combined reaction/separation", "High yield", "Process intensification"]
    }
  ];

  const designParameters = [
    "Solubility curves and metastable zone width",
    "Nucleation and growth kinetics",
    "Supersaturation ratio and control strategy", 
    "Residence time distribution and mixing",
    "Temperature and cooling rate profiles",
    "Seeding strategy and crystal size distribution",
    "Impurity effects on crystal quality",
    "Product specifications and polymorphic form"
  ];

  const equipmentTypes = [
    {
      equipment: "Forced Circulation Crystallizer",
      description: "External circulation with heat exchanger for controlled evaporation",
      capacity: "1-1000 m³",
      applications: ["Large-scale salt production", "Industrial chemicals", "Waste concentration"],
      features: ["High heat transfer", "Good mixing", "Scalable design"]
    },
    {
      equipment: "Draft Tube Baffle (DTB)",
      description: "Internal circulation with classified product removal",
      capacity: "5-500 m³", 
      applications: ["Salt crystallization", "Chemical processing", "Mineral recovery"],
      features: ["Uniform crystal size", "Internal classification", "Continuous operation"]
    },
    {
      equipment: "Oslo Crystallizer",
      description: "Fluidized bed with external circulation and fines removal",
      capacity: "1-100 m³",
      applications: ["High purity products", "Pharmaceutical APIs", "Fine chemicals"],
      features: ["Narrow size distribution", "High purity", "Fines dissolution"]
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="hero" style={{padding: 'var(--space-16) 0'}}>
        <div className="container">
          <div className="hero-content">
            <FaSnowflake className="hero-icon" style={{fontSize: '4rem', color: 'var(--primary-green)', marginBottom: '2rem'}} />
            <h1>Crystallization Systems</h1>
            <p className="description">
              Advanced crystallization technology for purification, separation, and recovery processes. 
              Supporting New Zealand's salt production, pharmaceutical manufacturing, and mineral processing 
              industries with precise crystal engineering and high-purity product recovery.
            </p>
          </div>
        </div>
      </section>

      {/* NZ Applications */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>Crystallization Applications in New Zealand</h2>
            <p className="section-description">
              Specialized crystallization solutions for diverse New Zealand industries
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

      {/* Crystallization Types */}
      <section className="section" style={{backgroundColor: 'var(--gray-100)'}}>
        <div className="container">
          <div className="section-header">
            <h2>Crystallization Technologies</h2>
            <p className="section-description">
              Different crystallization methods for specific applications and product requirements
            </p>
          </div>
          
          <div className="grid grid-auto">
            {crystallizationTypes.map((type, index) => (
              <div key={index} className="card">
                <h3>{type.type}</h3>
                <p>{type.description}</p>
                <div className="mb-4">
                  <h4>Applications:</h4>
                  <ul className="mb-3">
                    {type.applications.map((app, idx) => (
                      <li key={idx}>• {app}</li>
                    ))}
                  </ul>
                  <h4>Equipment:</h4>
                  <ul className="mb-3">
                    {type.equipment.map((equip, idx) => (
                      <li key={idx}>• {equip}</li>
                    ))}
                  </ul>
                  <h4>Advantages:</h4>
                  <ul>
                    {type.advantages.map((adv, idx) => (
                      <li key={idx} style={{color: 'var(--primary-green)'}}>• {adv}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment Types */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>Crystallizer Equipment</h2>
            <p className="section-description">
              Industrial crystallization equipment for different scales and applications
            </p>
          </div>
          
          <div className="grid grid-auto">
            {equipmentTypes.map((equip, index) => (
              <div key={index} className="card">
                <h3>{equip.equipment}</h3>
                <p>{equip.description}</p>
                <div className="mb-4">
                  <div className="flex justify-between mb-2">
                    <strong>Capacity Range:</strong>
                    <span style={{color: 'var(--accent-teal)'}}>{equip.capacity}</span>
                  </div>
                  <h4>Applications:</h4>
                  <ul className="mb-3">
                    {equip.applications.map((app, idx) => (
                      <li key={idx}>• {app}</li>
                    ))}
                  </ul>
                  <h4>Key Features:</h4>
                  <ul>
                    {equip.features.map((feature, idx) => (
                      <li key={idx} style={{color: 'var(--primary-green)'}}>• {feature}</li>
                    ))}
                  </ul>
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
              Critical parameters for successful crystallization system design and operation
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

      {/* Process Benefits */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>Why Choose Crystallization?</h2>
          </div>
          
          <div className="grid grid-cols-4">
            <div className="card text-center">
              <FaGem className="card-icon" />
              <h3>High Purity</h3>
              <p>Excellent purification with removal of impurities and contaminants</p>
            </div>
            
            <div className="card text-center">
              <FaChartLine className="card-icon" />
              <h3>Controlled Quality</h3>
              <p>Precise control over particle size, morphology, and polymorphic form</p>
            </div>
            
            <div className="card text-center">
              <FaLeaf className="card-icon" />
              <h3>Resource Recovery</h3>
              <p>Efficient recovery of valuable materials from waste streams</p>
            </div>
            
            <div className="card text-center">
              <FaTools className="card-icon" />
              <h3>Scalable Process</h3>
              <p>Technology scales from laboratory to large industrial operations</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section">
        <div className="container text-center">
          <h2>Need Custom Crystallization Design?</h2>
          <p className="text-xl mb-8">
            Our crystallization experts can design systems for your specific product purification and recovery needs.
          </p>
          <div className="flex justify-center gap-4">
            <Link to="/contact" className="btn btn-primary btn-lg">
              Get Crystallization Quote <FaArrowRight />
            </Link>
            <Link to="/services" className="btn btn-secondary btn-lg">
              Explore Other Separation Technologies
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CrystallizationPage;