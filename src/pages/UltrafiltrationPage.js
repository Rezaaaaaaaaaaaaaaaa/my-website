import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FaSlidersH, 
  FaIndustry, 
  FaWater, 
  FaCheckCircle, 
  FaArrowRight,
  FaTools,
  FaChartLine,
  FaLeaf,
  FaFlask
} from 'react-icons/fa';

const UltrafiltrationPage = () => {
  const nzApplications = [
    {
      icon: <FaIndustry />,
      title: "Dairy Processing",
      description: "Critical membrane technology for New Zealand's world-leading dairy industry.",
      details: [
        "Milk protein concentration and fractionation",
        "Whey processing and protein recovery", 
        "Cheese making process optimization",
        "Clean-in-place (CIP) water recovery"
      ]
    },
    {
      icon: <FaWater />,
      title: "Municipal Water Treatment",
      description: "Advanced water treatment for New Zealand communities requiring high-quality water.",
      details: [
        "Turbidity and pathogen removal",
        "Pre-treatment for reverse osmosis",
        "Drinking water production from surface sources",
        "Emergency water treatment systems"
      ]
    },
    {
      icon: <FaFlask />,
      title: "Biotechnology & Pharmaceuticals",
      description: "Sterile filtration and concentration for New Zealand's growing biotech sector.",
      details: [
        "Cell harvesting and concentration",
        "Protein purification and concentration",
        "Sterile filtration of biologics",
        "Vaccine and therapeutic manufacturing"
      ]
    },
    {
      icon: <FaLeaf />,
      title: "Wastewater Treatment",
      description: "Membrane bioreactors and advanced treatment for environmental protection.",
      details: [
        "Membrane bioreactor (MBR) systems",
        "Industrial wastewater treatment",
        "Water recycling and reuse",
        "Tertiary treatment for nutrient removal"
      ]
    }
  ];

  const membraneTypes = [
    {
      type: "Hollow Fiber",
      poreSize: "0.01-0.1 μm",
      configuration: "Inside-out or outside-in flow",
      packingDensity: "Very High (>6000 m²/m³)",
      applications: ["Water treatment", "MBR systems", "Cell harvesting"],
      advantages: ["High surface area", "Self-supporting", "Backwashable"]
    },
    {
      type: "Spiral Wound",
      poreSize: "0.005-0.05 μm", 
      configuration: "Cross-flow with feed spacers",
      packingDensity: "High (300-1000 m²/m³)",
      applications: ["RO pre-treatment", "Food processing", "Industrial separation"],
      advantages: ["Low energy", "High recovery", "Easy replacement"]
    },
    {
      type: "Tubular",
      poreSize: "0.01-0.2 μm",
      configuration: "Cross-flow in tubes",
      packingDensity: "Low (50-300 m²/m³)",
      applications: ["High solids applications", "Viscous fluids", "CIP systems"],
      advantages: ["Robust design", "Easy cleaning", "High fouling tolerance"]
    },
    {
      type: "Plate & Frame",
      poreSize: "0.005-0.1 μm",
      configuration: "Flat sheet membranes",
      packingDensity: "Medium (100-800 m²/m³)",
      applications: ["Laboratory scale", "Pilot studies", "Specialized applications"],
      advantages: ["Easy maintenance", "Flexible design", "Good mass transfer"]
    }
  ];

  const operatingParameters = [
    "Transmembrane pressure (TMP): 0.1-2.0 bar",
    "Cross-flow velocity: 0.5-3.0 m/s", 
    "Recovery rate: 80-95%",
    "Temperature: 5-50°C (material dependent)",
    "pH range: 2-12 (membrane dependent)",
    "Flux rate: 20-200 L/m²/h",
    "Molecular weight cutoff: 1,000-100,000 Da",
    "Cleaning frequency: Daily to weekly"
  ];

  const foulingControl = [
    {
      strategy: "Pre-treatment",
      description: "Remove particles and chemicals that cause fouling",
      methods: ["Coagulation/flocculation", "pH adjustment", "Chlorine removal", "Screening"]
    },
    {
      strategy: "Operating Conditions",
      description: "Optimize flow and pressure to minimize fouling",
      methods: ["Cross-flow velocity", "TMP optimization", "Flux control", "Temperature management"]
    },
    {
      strategy: "Cleaning Protocols",
      description: "Regular cleaning to restore membrane performance", 
      methods: ["Chemical cleaning", "Backwashing", "Air sparging", "Forward flushing"]
    },
    {
      strategy: "Membrane Selection",
      description: "Choose materials resistant to specific foulants",
      methods: ["Hydrophilic surfaces", "Smooth membranes", "Chemical resistance", "Anti-fouling coatings"]
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="hero" style={{padding: 'var(--space-16) 0'}}>
        <div className="container">
          <div className="hero-content">
            <FaSlidersH className="hero-icon" style={{fontSize: '4rem', color: 'var(--primary-green)', marginBottom: '2rem'}} />
            <h1>Ultrafiltration Systems</h1>
            <p className="description">
              Advanced membrane technology for precise separation and concentration processes. 
              Supporting New Zealand's dairy, biotechnology, and water treatment industries with 
              reliable ultrafiltration solutions for enhanced product quality and process efficiency.
            </p>
          </div>
        </div>
      </section>

      {/* NZ Applications */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>Ultrafiltration Applications in New Zealand</h2>
            <p className="section-description">
              Membrane separation solutions for key Kiwi industries and applications
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

      {/* Membrane Types */}
      <section className="section" style={{backgroundColor: 'var(--gray-100)'}}>
        <div className="container">
          <div className="section-header">
            <h2>Ultrafiltration Membrane Configurations</h2>
            <p className="section-description">
              Different membrane designs optimized for specific separation requirements
            </p>
          </div>
          
          <div className="grid grid-auto">
            {membraneTypes.map((membrane, index) => (
              <div key={index} className="card">
                <h3>{membrane.type}</h3>
                <p>{membrane.configuration}</p>
                <div className="mb-4">
                  <div className="flex justify-between mb-2">
                    <strong>Pore Size:</strong>
                    <span style={{color: 'var(--accent-teal)'}}>{membrane.poreSize}</span>
                  </div>
                  <div className="flex justify-between mb-3">
                    <strong>Packing Density:</strong>
                    <span style={{color: 'var(--accent-teal)'}}>{membrane.packingDensity}</span>
                  </div>
                  <h4>Applications:</h4>
                  <ul className="mb-3">
                    {membrane.applications.map((app, idx) => (
                      <li key={idx}>• {app}</li>
                    ))}
                  </ul>
                  <h4>Advantages:</h4>
                  <ul>
                    {membrane.advantages.map((adv, idx) => (
                      <li key={idx} style={{color: 'var(--primary-green)'}}>• {adv}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Operating Parameters */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>Operating Parameters</h2>
            <p className="section-description">
              Key operational ranges for ultrafiltration system design and operation
            </p>
          </div>
          
          <div className="grid grid-cols-2">
            {operatingParameters.map((parameter, index) => (
              <div key={index} className="flex items-center gap-3 mb-4">
                <FaTools style={{color: 'var(--accent-teal)', fontSize: '1.2rem'}} />
                <span>{parameter}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fouling Control */}
      <section className="section" style={{backgroundColor: 'var(--gray-100)'}}>
        <div className="container">
          <div className="section-header">
            <h2>Fouling Control Strategies</h2>
            <p className="section-description">
              Comprehensive approaches to maintain membrane performance and extend life
            </p>
          </div>
          
          <div className="grid grid-auto">
            {foulingControl.map((strategy, index) => (
              <div key={index} className="card">
                <h3>{strategy.strategy}</h3>
                <p>{strategy.description}</p>
                <div className="mb-4">
                  <h4>Methods:</h4>
                  <ul>
                    {strategy.methods.map((method, idx) => (
                      <li key={idx}>• {method}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Benefits */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>Ultrafiltration Benefits</h2>
          </div>
          
          <div className="grid grid-cols-4">
            <div className="card text-center">
              <FaChartLine className="card-icon" />
              <h3>High Selectivity</h3>
              <p>Precise molecular weight separation with consistent performance</p>
            </div>
            
            <div className="card text-center">
              <FaLeaf className="card-icon" />
              <h3>Low Energy</h3>
              <p>Energy efficient operation with minimal pressure requirements</p>
            </div>
            
            <div className="card text-center">
              <FaTools className="card-icon" />
              <h3>Compact Design</h3>
              <p>High surface area membranes in minimal footprint systems</p>
            </div>
            
            <div className="card text-center">
              <FaWater className="card-icon" />
              <h3>Sterile Operation</h3>
              <p>Bacteria and virus removal without chemical addition</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Flow */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>UF Process Configuration</h2>
            <p className="section-description">
              Typical ultrafiltration system components and flow arrangement
            </p>
          </div>
          
          <div className="grid grid-cols-5">
            <div className="card text-center">
              <h4>1. Feed Preparation</h4>
              <p>Pre-treatment including pH adjustment and coarse filtration</p>
            </div>
            <div className="card text-center">
              <h4>2. Feed Pumping</h4>
              <p>High-pressure pumps to maintain cross-flow velocity</p>
            </div>
            <div className="card text-center">
              <h4>3. UF Modules</h4>
              <p>Membrane modules in series or parallel configuration</p>
            </div>
            <div className="card text-center">
              <h4>4. Permeate Collection</h4>
              <p>Clean water collection and quality monitoring</p>
            </div>
            <div className="card text-center">
              <h4>5. Concentrate Processing</h4>
              <p>Concentrate handling and further processing as required</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section">
        <div className="container text-center">
          <h2>Ready for Ultrafiltration Technology?</h2>
          <p className="text-xl mb-8">
            Our membrane specialists can design UF systems optimized for your specific separation requirements.
          </p>
          <div className="flex justify-center gap-4">
            <Link to="/contact" className="btn btn-primary btn-lg">
              Get UF System Design <FaArrowRight />
            </Link>
            <Link to="/services" className="btn btn-secondary btn-lg">
              View All Membrane Technologies
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UltrafiltrationPage;