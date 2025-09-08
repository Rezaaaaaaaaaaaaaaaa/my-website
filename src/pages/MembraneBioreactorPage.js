import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FaMicroscope, 
  FaWater, 
  FaLeaf, 
  FaCheckCircle, 
  FaArrowRight,
  FaTools,
  FaChartLine,
  FaIndustry,
  FaRecycle
} from 'react-icons/fa';

const MembraneBioreactorPage = () => {
  const nzApplications = [
    {
      icon: <FaWater />,
      title: "Municipal Wastewater Treatment",
      description: "MBR technology applications for municipal wastewater treatment requiring high-quality effluent.",
      details: [
        "Municipal MBR system design and optimization",
        "Decentralized wastewater treatment solutions",
        "Effluent quality improvement for discharge compliance",
        "Nutrient removal system design"
      ]
    },
    {
      icon: <FaIndustry />,
      title: "Industrial Wastewater",
      description: "MBR applications for treating industrial effluents from manufacturing and processing operations.",
      details: [
        "Food processing wastewater treatment",
        "Dairy industry effluent treatment",
        "Industrial process water treatment",
        "High-strength wastewater applications"
      ]
    },
    {
      icon: <FaLeaf />,
      title: "Water Reuse & Recycling",
      description: "Enabling water security through advanced treatment and reuse applications.",
      details: [
        "Irrigation water production",
        "Industrial process water recycling",
        "Groundwater recharge systems",
        "Potable water reuse (indirect)"
      ]
    },
    {
      icon: <FaRecycle />,
      title: "Leachate Treatment",
      description: "Advanced treatment of landfill leachate and contaminated water sources.",
      details: [
        "Landfill leachate treatment",
        "Contaminated groundwater remediation",
        "Mining wastewater treatment",
        "Agricultural runoff treatment"
      ]
    }
  ];

  const mbrConfigurations = [
    {
      type: "Submerged MBR",
      description: "Membranes immersed directly in the bioreactor tank",
      membraneType: "Hollow fiber or flat sheet",
      advantages: ["Lower energy consumption", "Simpler design", "Lower capital cost"],
      disadvantages: ["Limited flux rates", "More frequent cleaning", "Membrane replacement complexity"],
      applications: ["Municipal wastewater", "Small-scale systems", "Retrofit applications"]
    },
    {
      type: "Side-stream MBR", 
      description: "External membrane modules with recirculation loop",
      membraneType: "Tubular or spiral wound",
      advantages: ["Higher flux rates", "Easy membrane maintenance", "Better fouling control"],
      disadvantages: ["Higher energy consumption", "More complex design", "Higher capital cost"],
      applications: ["Industrial wastewater", "High-strength effluent", "Large-scale systems"]
    },
    {
      type: "Hybrid MBR",
      description: "Combination of conventional treatment with membrane separation",
      membraneType: "Various configurations",
      advantages: ["Flexible design", "Optimized performance", "Reduced membrane area"],
      disadvantages: ["Complex operation", "Higher maintenance", "Multiple process steps"],
      applications: ["Upgrade applications", "Complex wastewater", "Specialized requirements"]
    }
  ];

  const designParameters = [
    "Sludge retention time (SRT): 10-30 days",
    "Hydraulic retention time (HRT): 3-8 hours",
    "Mixed liquor suspended solids (MLSS): 8,000-15,000 mg/L",
    "Food to microorganism ratio (F/M): 0.1-0.3 kg BOD/kg MLSS/d",
    "Membrane flux: 15-35 L/m²/h",
    "Transmembrane pressure (TMP): 0.1-0.5 bar",
    "Dissolved oxygen: 2-4 mg/L",
    "Temperature: 15-35°C for optimal performance"
  ];

  const membraneTypes = [
    {
      type: "Hollow Fiber Membranes",
      poreSize: "0.04-0.4 μm",
      material: "PVDF, PES, or PTFE",
      configuration: "Submerged bundles",
      advantages: ["High packing density", "Self-supporting", "Good cleaning"],
      applications: ["Municipal MBR", "Food processing", "Compact systems"]
    },
    {
      type: "Flat Sheet Membranes",
      poreSize: "0.1-0.4 μm", 
      material: "PVDF or PES",
      configuration: "Cassette or plate modules",
      advantages: ["Easy replacement", "Uniform flow", "Visual inspection"],
      applications: ["Industrial MBR", "Pilot systems", "Research applications"]
    },
    {
      type: "Tubular Membranes",
      poreSize: "0.1-0.5 μm",
      material: "Ceramic or polymeric",
      configuration: "Side-stream modules",
      advantages: ["High fouling tolerance", "Easy cleaning", "Robust design"],
      applications: ["High-strength wastewater", "Industrial applications", "Difficult conditions"]
    }
  ];

  const operatingBenefits = [
    {
      benefit: "Superior Effluent Quality",
      description: "Consistent removal of pathogens, suspended solids, and turbidity",
      performance: "99.9%+ pathogen removal, <1 NTU turbidity"
    },
    {
      benefit: "Compact Footprint",
      description: "Reduced space requirements compared to conventional treatment",
      performance: "50-70% smaller than conventional systems"
    },
    {
      benefit: "Process Stability",
      description: "Independent control of hydraulic and solids retention times",
      performance: "Stable operation despite flow and load variations"
    },
    {
      benefit: "Reduced Sludge Production",
      description: "Higher sludge age results in lower excess sludge production",
      performance: "30-50% reduction in sludge production"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="hero" style={{padding: 'var(--space-16) 0'}}>
        <div className="container">
          <div className="hero-content">
            <FaMicroscope className="hero-icon" style={{fontSize: '4rem', color: 'var(--primary-green)', marginBottom: '2rem'}} />
            <h1>Membrane Bioreactor Systems</h1>
            <p className="description">
              Advanced biological treatment combined with membrane separation for superior water quality. 
              Supporting New Zealand's wastewater treatment needs with compact, efficient MBR technology 
              that enables water reuse and environmental protection.
            </p>
          </div>
        </div>
      </section>

      {/* NZ Applications */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>MBR Applications in New Zealand</h2>
            <p className="section-description">
              Membrane bioreactor solutions for municipal and industrial wastewater treatment
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

      {/* MBR Configurations */}
      <section className="section" style={{backgroundColor: 'var(--gray-100)'}}>
        <div className="container">
          <div className="section-header">
            <h2>MBR System Configurations</h2>
            <p className="section-description">
              Different MBR designs optimized for specific applications and operating conditions
            </p>
          </div>
          
          <div className="grid grid-auto">
            {mbrConfigurations.map((config, index) => (
              <div key={index} className="card">
                <h3>{config.type}</h3>
                <p>{config.description}</p>
                <div className="mb-4">
                  <div className="mb-2">
                    <strong>Membrane Type:</strong> {config.membraneType}
                  </div>
                  <h4>Advantages:</h4>
                  <ul className="mb-3">
                    {config.advantages.map((adv, idx) => (
                      <li key={idx} style={{color: 'var(--primary-green)'}}>• {adv}</li>
                    ))}
                  </ul>
                  <h4>Considerations:</h4>
                  <ul className="mb-3">
                    {config.disadvantages.map((dis, idx) => (
                      <li key={idx} style={{color: 'var(--gray-600)'}}>• {dis}</li>
                    ))}
                  </ul>
                  <h4>Applications:</h4>
                  <ul>
                    {config.applications.map((app, idx) => (
                      <li key={idx}>• {app}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Membrane Types */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>MBR Membrane Technologies</h2>
            <p className="section-description">
              Different membrane materials and configurations for MBR applications
            </p>
          </div>
          
          <div className="grid grid-auto">
            {membraneTypes.map((membrane, index) => (
              <div key={index} className="card">
                <h3>{membrane.type}</h3>
                <div className="mb-4">
                  <div className="flex justify-between mb-2">
                    <strong>Pore Size:</strong>
                    <span style={{color: 'var(--accent-teal)'}}>{membrane.poreSize}</span>
                  </div>
                  <div className="flex justify-between mb-3">
                    <strong>Material:</strong>
                    <span style={{color: 'var(--accent-teal)'}}>{membrane.material}</span>
                  </div>
                  <div className="mb-3">
                    <strong>Configuration:</strong> {membrane.configuration}
                  </div>
                  <h4>Advantages:</h4>
                  <ul className="mb-3">
                    {membrane.advantages.map((adv, idx) => (
                      <li key={idx} style={{color: 'var(--primary-green)'}}>• {adv}</li>
                    ))}
                  </ul>
                  <h4>Applications:</h4>
                  <ul>
                    {membrane.applications.map((app, idx) => (
                      <li key={idx}>• {app}</li>
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
            <h2>Design Parameters</h2>
            <p className="section-description">
              Key operating parameters for MBR system design and optimization
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

      {/* Operating Benefits */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>MBR System Benefits</h2>
            <p className="section-description">
              Key advantages of membrane bioreactor technology over conventional treatment
            </p>
          </div>
          
          <div className="grid grid-auto">
            {operatingBenefits.map((benefit, index) => (
              <div key={index} className="card">
                <h3>{benefit.benefit}</h3>
                <p>{benefit.description}</p>
                <div className="text-center mt-4">
                  <strong style={{color: 'var(--primary-green)', fontSize: '1.1rem'}}>
                    {benefit.performance}
                  </strong>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose MBR */}
      <section className="section" style={{backgroundColor: 'var(--gray-100)'}}>
        <div className="container">
          <div className="section-header">
            <h2>Why Choose MBR Technology?</h2>
          </div>
          
          <div className="grid grid-cols-4">
            <div className="card text-center">
              <FaWater className="card-icon" />
              <h3>Superior Quality</h3>
              <p>Consistent high-quality effluent suitable for reuse applications</p>
            </div>
            
            <div className="card text-center">
              <FaLeaf className="card-icon" />
              <h3>Compact Design</h3>
              <p>Smaller footprint ideal for space-constrained locations</p>
            </div>
            
            <div className="card text-center">
              <FaChartLine className="card-icon" />
              <h3>Process Control</h3>
              <p>Independent hydraulic and biological control for optimization</p>
            </div>
            
            <div className="card text-center">
              <FaRecycle className="card-icon" />
              <h3>Water Recovery</h3>
              <p>Enables water reuse and reduces environmental discharge</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section">
        <div className="container text-center">
          <h2>Ready for MBR Technology?</h2>
          <p className="text-xl mb-8">
            Our MBR specialists can design systems for your specific wastewater treatment and water reuse needs.
          </p>
          <div className="flex justify-center gap-4">
            <Link to="/contact" className="btn btn-primary btn-lg">
              Get MBR System Design <FaArrowRight />
            </Link>
            <Link to="/services" className="btn btn-secondary btn-lg">
              Explore Other Biological Processes
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MembraneBioreactorPage;