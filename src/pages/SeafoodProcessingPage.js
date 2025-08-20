import React from 'react';
import { FaFish, FaIndustry, FaSnowflake, FaShieldAlt, FaCheckCircle, FaCogs, FaWater, FaThermometerHalf } from 'react-icons/fa';

const SeafoodProcessingPage = () => {
  const processes = [
    {
      icon: <FaSnowflake />,
      title: "Advanced Freezing & Chilling",
      description: "State-of-the-art freezing technologies maintaining optimal seafood quality for global export markets.",
      features: ["Blast Freezing", "Plate Freezing", "Cryogenic Systems", "Temperature Monitoring"]
    },
    {
      icon: <FaCogs />,
      title: "Processing & Filleting",
      description: "Automated processing systems for salmon, mussels, and other New Zealand seafood products.",
      features: ["Automated Filleting", "Portion Control", "Bone Detection", "Yield Optimization"]
    },
    {
      icon: <FaShieldAlt />,
      title: "Food Safety & HACCP",
      description: "Comprehensive food safety systems meeting international standards for seafood exports.",
      features: ["HACCP Systems", "Traceability", "Pathogen Control", "Quality Assurance"]
    },
    {
      icon: <FaWater />,
      title: "Water Treatment & Recycling",
      description: "Advanced water treatment systems for sustainable seafood processing operations.",
      features: ["Water Recycling", "Waste Treatment", "Effluent Management", "Resource Recovery"]
    }
  ];

  const species = [
    "King Salmon",
    "Green-lipped Mussels",
    "Paua (Abalone)",
    "Snapper",
    "Hoki",
    "Rock Lobster"
  ];

  const products = [
    "Fresh Chilled Fillets",
    "Frozen Seafood Products",
    "Smoked Salmon",
    "Mussel Products",
    "Value-Added Portions",
    "Specialty Seafood Items"
  ];

  const benefits = [
    {
      title: "Premium Quality Standards",
      description: "Maintain New Zealand's reputation for premium seafood with advanced processing technology."
    },
    {
      title: "Export Market Access",
      description: "Meet stringent international food safety standards for global seafood markets."
    },
    {
      title: "Sustainable Operations",
      description: "Implement environmentally responsible processing aligned with marine sustainability."
    },
    {
      title: "Maximum Yield Efficiency",
      description: "Optimize processing yields while maintaining product quality and safety standards."
    }
  ];

  return (
    <div className="page-container">
      {/* Hero Section */}
      <section className="hero seafood-hero">
        <div className="container">
          <div className="hero-content">
            <h1>New Zealand Seafood Processing Engineering</h1>
            <p className="subtitle">Premium Marine Product Processing & Export Excellence</p>
            <p className="description">
              Leverage New Zealand's pristine marine environment with advanced seafood processing 
              technologies. From sustainable aquaculture to wild-caught fisheries, optimize 
              operations for premium quality and global market access.
            </p>
          </div>
        </div>
      </section>

      {/* Industry Overview */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">New Zealand's Premium Seafood Industry</h2>
            <p className="section-description">
              New Zealand's seafood industry exports over $1.8 billion annually, specializing in 
              premium species from pristine waters with world-class processing facilities.
            </p>
          </div>
          
          <div className="seafood-overview">
            <div className="overview-content">
              <h3>From Ocean to Global Markets</h3>
              <div className="seafood-stats">
                <div className="stat">
                  <div className="stat-number">$1.8B</div>
                  <h4>Annual Exports</h4>
                  <p>Total value of New Zealand seafood exports to international markets</p>
                </div>
                <div className="stat">
                  <div className="stat-number">90%</div>
                  <h4>Export Volume</h4>
                  <p>Percentage of New Zealand seafood production exported globally</p>
                </div>
                <div className="stat">
                  <div className="stat-number">100+</div>
                  <h4>Species Processed</h4>
                  <p>Diverse range of marine species processed in New Zealand facilities</p>
                </div>
                <div className="stat">
                  <div className="stat-number">4.2M</div>
                  <h4>km² Ocean Territory</h4>
                  <p>New Zealand's exclusive economic zone for sustainable fishing</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Processing Technologies */}
      <section className="section bg-light">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Advanced Processing Technologies</h2>
            <p className="section-description">
              Cutting-edge seafood processing solutions for premium quality and safety
            </p>
          </div>
          
          <div className="grid grid-auto">
            {processes.map((process, index) => (
              <div key={index} className="card fade-in-up">
                <div className="card-icon">{process.icon}</div>
                <h3>{process.title}</h3>
                <p>{process.description}</p>
                <ul className="mb-4">
                  {process.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 mb-2">
                      <FaCheckCircle className="text-green-600" style={{color: 'var(--primary-green)'}} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Species */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Premium New Zealand Species</h2>
            <p className="section-description">
              Key marine species driving New Zealand's seafood export success
            </p>
          </div>
          
          <div className="species-grid">
            {species.map((specie, index) => (
              <div key={index} className="species-item">
                <FaFish className="species-icon" />
                <span>{specie}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="section bg-light">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Premium Seafood Products</h2>
            <p className="section-description">
              High-value products for global seafood markets
            </p>
          </div>
          
          <div className="products-grid">
            {products.map((product, index) => (
              <div key={index} className="product-item">
                <FaWater className="product-icon" />
                <span>{product}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Processing Advantages</h2>
            <p className="section-description">
              Key benefits of advanced seafood processing technology
            </p>
          </div>
          
          <div className="benefits-grid">
            {benefits.map((benefit, index) => (
              <div key={index} className="benefit-item">
                <h4>{benefit.title}</h4>
                <p>{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Flow */}
      <section className="section bg-light">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Seafood Processing Flow</h2>
            <p className="section-description">
              Comprehensive process from landing to export-ready products
            </p>
          </div>
          
          <div className="process-steps">
            <div className="step">
              <h4>Landing & Reception</h4>
              <p>Rapid chilling, quality assessment, and traceability documentation</p>
            </div>
            <div className="step">
              <h4>Cleaning & Preparation</h4>
              <p>Thorough cleaning, scaling, and preparation for processing</p>
            </div>
            <div className="step">
              <h4>Processing & Filleting</h4>
              <p>Automated processing, filleting, portioning, and quality control</p>
            </div>
            <div className="step">
              <h4>Packaging & Preservation</h4>
              <p>Modified atmosphere packaging, freezing, and preservation systems</p>
            </div>
            <div className="step">
              <h4>Cold Chain & Export</h4>
              <p>Temperature-controlled storage and global distribution networks</p>
            </div>
          </div>
        </div>
      </section>

      {/* Sustainability Focus */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Sustainable Seafood Processing</h2>
            <p className="section-description">
              Environmental responsibility in marine resource utilization
            </p>
          </div>
          
          <div className="sustainability-features">
            <div className="feature">
              <FaFish className="feature-icon" />
              <h4>Quota Management</h4>
              <p>Sustainable fishing practices within New Zealand's quota management system</p>
            </div>
            <div className="feature">
              <FaWater className="feature-icon" />
              <h4>Water Conservation</h4>
              <p>Advanced water recycling and treatment systems minimizing environmental impact</p>
            </div>
            <div className="feature">
              <FaIndustry className="feature-icon" />
              <h4>Waste Utilization</h4>
              <p>Complete utilization of processing by-products for fishmeal and oil production</p>
            </div>
            <div className="feature">
              <FaShieldAlt className="feature-icon" />
              <h4>Marine Stewardship</h4>
              <p>MSC certification and responsible sourcing from certified sustainable fisheries</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Standards */}
      <section className="section bg-light">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">International Quality Standards</h2>
            <p className="section-description">
              Meeting global food safety and quality requirements
            </p>
          </div>
          
          <div className="standards-grid">
            <div className="standard-item">
              <h4>HACCP Certification</h4>
              <p>Hazard Analysis Critical Control Points for food safety management</p>
            </div>
            <div className="standard-item">
              <h4>MSC Certification</h4>
              <p>Marine Stewardship Council certification for sustainable seafood</p>
            </div>
            <div className="standard-item">
              <h4>BRC Global Standards</h4>
              <p>British Retail Consortium standards for food safety and quality</p>
            </div>
            <div className="standard-item">
              <h4>Export Compliance</h4>
              <p>Meeting specific requirements for target export markets</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Optimize Your Seafood Processing Operations?</h2>
            <p>Enhance quality, safety, and sustainability in seafood processing</p>
            <div className="cta-buttons">
              <a href="/contact" className="btn btn-primary">Get Seafood Consultation</a>
              <a href="/services" className="btn btn-secondary">Explore Services</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SeafoodProcessingPage;