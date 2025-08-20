import React from 'react';
import { FaIndustry, FaThermometerHalf, FaFlask, FaCheckCircle, FaCogs, FaLeaf, FaGlobe } from 'react-icons/fa';

const DairyProcessingPage = () => {
  const processes = [
    {
      icon: <FaThermometerHalf />,
      title: "Pasteurization & Heat Treatment",
      description: "Advanced thermal processing for milk safety and extended shelf life, optimized for New Zealand's export markets.",
      features: ["HTST Pasteurization", "UHT Treatment", "ESL Processing", "Cold Chain Management"]
    },
    {
      icon: <FaCogs />,
      title: "Separation & Concentration",
      description: "Cutting-edge separation technologies for cream, skim milk, and protein concentration using membrane filtration.",
      features: ["Centrifugal Separation", "Ultrafiltration", "Reverse Osmosis", "Microfiltration"]
    },
    {
      icon: <FaFlask />,
      title: "Spray Drying & Powder Production",
      description: "World-class milk powder production technology meeting international quality standards for global export.",
      features: ["Multi-stage Drying", "Fluidized Bed", "Agglomeration", "Packaging Systems"]
    },
    {
      icon: <FaIndustry />,
      title: "Cheese & Fermentation",
      description: "Traditional and modern cheese-making processes, from artisanal to large-scale industrial production.",
      features: ["Curd Formation", "Pressing Systems", "Aging Control", "Quality Monitoring"]
    }
  ];

  const products = [
    "Whole Milk Powder",
    "Skim Milk Powder",
    "Whey Protein Concentrate",
    "Butter & Anhydrous Milk Fat",
    "Specialty Cheeses",
    "Infant Formula Base"
  ];

  const innovations = [
    "Membrane Filtration Technology",
    "Precision Fermentation Control",
    "Energy Recovery Systems",
    "Automated Quality Testing",
    "Sustainable Processing",
    "Traceability Systems"
  ];

  const benefits = [
    {
      title: "Export Quality Assurance",
      description: "Meet stringent international standards for New Zealand dairy exports to over 140 countries."
    },
    {
      title: "Sustainable Operations",
      description: "Implement energy-efficient processes that align with New Zealand's sustainability goals."
    },
    {
      title: "Premium Product Development",
      description: "Create high-value dairy products that command premium prices in global markets."
    },
    {
      title: "Process Optimization",
      description: "Maximize yield and minimize waste while maintaining the highest quality standards."
    }
  ];

  return (
    <div className="page-container">
      {/* Hero Section */}
      <section className="hero dairy-hero">
        <div className="container">
          <div className="hero-content">
            <h1>New Zealand Dairy Processing Engineering</h1>
            <p className="subtitle">World-Leading Milk Processing & Product Development</p>
            <p className="description">
              Leverage New Zealand's reputation for premium dairy products with advanced processing 
              technologies. From farm-fresh milk to high-value export products, optimize your 
              dairy operations for global competitiveness and sustainability.
            </p>
          </div>
        </div>
      </section>

      {/* Industry Overview */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">New Zealand's Dairy Excellence</h2>
            <p className="section-description">
              New Zealand is the world's largest exporter of dairy products, processing over 22 billion 
              liters of milk annually with advanced technologies and sustainable practices.
            </p>
          </div>
          
          <div className="dairy-overview">
            <div className="overview-content">
              <h3>From Pasture to Premium Products</h3>
              <div className="dairy-stats">
                <div className="stat">
                  <div className="stat-number">95%</div>
                  <h4>Export Volume</h4>
                  <p>Of New Zealand's dairy production is exported to international markets</p>
                </div>
                <div className="stat">
                  <div className="stat-number">140+</div>
                  <h4>Export Countries</h4>
                  <p>New Zealand dairy products reach consumers in over 140 countries worldwide</p>
                </div>
                <div className="stat">
                  <div className="stat-number">22B</div>
                  <h4>Liters Processed</h4>
                  <p>Annual milk processing volume in New Zealand's dairy industry</p>
                </div>
                <div className="stat">
                  <div className="stat-number">$20B</div>
                  <h4>Annual Export Value</h4>
                  <p>Total value of New Zealand dairy exports to global markets</p>
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
              State-of-the-art dairy processing solutions for New Zealand's premium products
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

      {/* Key Products */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Premium Dairy Products</h2>
            <p className="section-description">
              High-value products that drive New Zealand's dairy export success
            </p>
          </div>
          
          <div className="products-grid">
            {products.map((product, index) => (
              <div key={index} className="product-item">
                <FaIndustry className="product-icon" />
                <span>{product}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Innovations */}
      <section className="section bg-light">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Processing Innovations</h2>
            <p className="section-description">
              Cutting-edge technologies advancing New Zealand's dairy industry
            </p>
          </div>
          
          <div className="innovations-grid">
            {innovations.map((innovation, index) => (
              <div key={index} className="innovation-item">
                <FaLeaf className="innovation-icon" />
                <span>{innovation}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Strategic Advantages</h2>
            <p className="section-description">
              Key benefits of advanced dairy processing in New Zealand
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
            <h2 className="section-title">Dairy Processing Flow</h2>
            <p className="section-description">
              Comprehensive process optimization from milk reception to finished products
            </p>
          </div>
          
          <div className="process-steps">
            <div className="step">
              <h4>Milk Reception & Testing</h4>
              <p>Quality assessment, composition analysis, and microbiological testing of raw milk</p>
            </div>
            <div className="step">
              <h4>Standardization & Treatment</h4>
              <p>Fat standardization, pasteurization, and thermal treatment for food safety</p>
            </div>
            <div className="step">
              <h4>Separation & Concentration</h4>
              <p>Cream separation, protein concentration, and membrane filtration processes</p>
            </div>
            <div className="step">
              <h4>Product Manufacturing</h4>
              <p>Spray drying, cheese making, butter production, and specialty product development</p>
            </div>
            <div className="step">
              <h4>Packaging & Distribution</h4>
              <p>Aseptic packaging, quality control, and cold chain management for export</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Optimize Your Dairy Processing Operations?</h2>
            <p>Enhance efficiency, quality, and sustainability in New Zealand's dairy industry</p>
            <div className="cta-buttons">
              <a href="/contact" className="btn btn-primary">Get Dairy Consultation</a>
              <a href="/services" className="btn btn-secondary">Explore Services</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DairyProcessingPage;