import React from 'react';
import { FaAppleAlt, FaIndustry, FaSnowflake, FaShippingFast, FaCheckCircle, FaCogs, FaLeaf, FaThermometerHalf } from 'react-icons/fa';

const KiwifruitProcessingPage = () => {
  const processes = [
    {
      icon: <FaSnowflake />,
      title: "Cold Storage & Controlled Atmosphere",
      description: "Advanced cold storage systems maintaining optimal conditions for extended shelf life and quality preservation.",
      features: ["CA Storage", "Temperature Control", "Humidity Management", "Ethylene Control"]
    },
    {
      icon: <FaCogs />,
      title: "Sorting & Grading Systems",
      description: "Automated optical sorting and grading technology ensuring consistent quality for premium export markets.",
      features: ["Optical Sorting", "Size Grading", "Quality Assessment", "Defect Detection"]
    },
    {
      icon: <FaThermometerHalf />,
      title: "Ripening Control Technology",
      description: "Precision ripening management systems for optimal fruit quality and market timing.",
      features: ["Ethylene Treatment", "Temperature Staging", "Ripeness Monitoring", "Quality Control"]
    },
    {
      icon: <FaShippingFast />,
      title: "Packaging & Export Systems",
      description: "Specialized packaging solutions designed for long-distance transport to global markets.",
      features: ["Modified Atmosphere", "Export Packaging", "Cold Chain", "Traceability"]
    }
  ];

  const products = [
    "Fresh Zespri Kiwifruit",
    "Organic Kiwifruit",
    "Kiwifruit Juice & Concentrates",
    "Dried Kiwifruit Products",
    "Kiwifruit Extracts",
    "Value-Added Products"
  ];

  const varieties = [
    "Zespri Green (Hayward)",
    "Zespri Gold (SunGold)",
    "Zespri Red",
    "Organic Varieties",
    "New Cultivar Development",
    "Premium Export Grades"
  ];

  const benefits = [
    {
      title: "Global Market Leadership",
      description: "Maintain New Zealand's position as the world's leading kiwifruit exporter with premium quality."
    },
    {
      title: "Extended Shelf Life",
      description: "Advanced storage and packaging technologies extend fruit life for long-distance shipping."
    },
    {
      title: "Quality Consistency",
      description: "Automated systems ensure consistent quality and grading standards across all exports."
    },
    {
      title: "Sustainable Practices",
      description: "Environmentally responsible processing aligned with New Zealand's sustainability goals."
    }
  ];

  return (
    <div className="page-container">
      {/* Hero Section */}
      <section className="hero kiwi-hero">
        <div className="container">
          <div className="hero-content">
            <h1>New Zealand Kiwifruit Processing Engineering</h1>
            <p className="subtitle">Premium Fruit Processing & Export Excellence</p>
            <p className="description">
              Optimize kiwifruit processing operations with advanced technology solutions designed 
              for New Zealand's world-leading kiwifruit industry. From harvest to global markets, 
              ensure premium quality and extended shelf life.
            </p>
          </div>
        </div>
      </section>

      {/* Industry Overview */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">World's Premium Kiwifruit Industry</h2>
            <p className="section-description">
              New Zealand produces over 600,000 tonnes of kiwifruit annually, supplying premium 
              fruit to over 50 countries worldwide through advanced processing and storage technologies.
            </p>
          </div>
          
          <div className="kiwi-overview">
            <div className="overview-content">
              <h3>From Orchard to Global Markets</h3>
              <div className="kiwi-stats">
                <div className="stat">
                  <div className="stat-number">95%</div>
                  <h4>Export Share</h4>
                  <p>Of New Zealand's kiwifruit production is exported to international markets</p>
                </div>
                <div className="stat">
                  <div className="stat-number">50+</div>
                  <h4>Export Countries</h4>
                  <p>New Zealand kiwifruit reaches consumers in over 50 countries globally</p>
                </div>
                <div className="stat">
                  <div className="stat-number">600K</div>
                  <h4>Tonnes Produced</h4>
                  <p>Annual kiwifruit production volume in New Zealand</p>
                </div>
                <div className="stat">
                  <div className="stat-number">30%</div>
                  <h4>Global Market Share</h4>
                  <p>New Zealand's share of the global kiwifruit market</p>
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
              Cutting-edge solutions for kiwifruit processing and quality management
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

      {/* Kiwifruit Varieties */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Premium Kiwifruit Varieties</h2>
            <p className="section-description">
              New Zealand's diverse kiwifruit portfolio for global markets
            </p>
          </div>
          
          <div className="varieties-grid">
            {varieties.map((variety, index) => (
              <div key={index} className="variety-item">
                <FaAppleAlt className="variety-icon" />
                <span>{variety}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="section bg-light">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Value-Added Products</h2>
            <p className="section-description">
              Diverse product portfolio maximizing value from New Zealand kiwifruit
            </p>
          </div>
          
          <div className="products-grid">
            {products.map((product, index) => (
              <div key={index} className="product-item">
                <FaLeaf className="product-icon" />
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
              Key benefits of advanced kiwifruit processing technology
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
            <h2 className="section-title">Kiwifruit Processing Flow</h2>
            <p className="section-description">
              Comprehensive process from harvest to export-ready fruit
            </p>
          </div>
          
          <div className="process-steps">
            <div className="step">
              <h4>Harvest & Reception</h4>
              <p>Optimal harvest timing, gentle handling, and initial quality assessment</p>
            </div>
            <div className="step">
              <h4>Washing & Sanitization</h4>
              <p>Thorough cleaning, sanitization, and removal of field contaminants</p>
            </div>
            <div className="step">
              <h4>Sorting & Grading</h4>
              <p>Automated optical sorting, size grading, and quality classification</p>
            </div>
            <div className="step">
              <h4>Storage & Ripening</h4>
              <p>Controlled atmosphere storage and precision ripening management</p>
            </div>
            <div className="step">
              <h4>Packaging & Export</h4>
              <p>Export packaging, cold chain preparation, and global distribution</p>
            </div>
          </div>
        </div>
      </section>

      {/* Sustainability Focus */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Sustainable Processing</h2>
            <p className="section-description">
              Environmental responsibility in kiwifruit processing operations
            </p>
          </div>
          
          <div className="sustainability-features">
            <div className="feature">
              <FaLeaf className="feature-icon" />
              <h4>Energy Efficiency</h4>
              <p>Advanced refrigeration systems with energy recovery and optimization</p>
            </div>
            <div className="feature">
              <FaIndustry className="feature-icon" />
              <h4>Waste Minimization</h4>
              <p>Zero-waste processing with by-product utilization and composting</p>
            </div>
            <div className="feature">
              <FaSnowflake className="feature-icon" />
              <h4>Natural Refrigerants</h4>
              <p>Environmentally friendly refrigeration systems reducing carbon footprint</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Enhance Your Kiwifruit Processing Operations?</h2>
            <p>Optimize quality, efficiency, and sustainability in kiwifruit processing</p>
            <div className="cta-buttons">
              <a href="/contact" className="btn btn-primary">Get Kiwifruit Consultation</a>
              <a href="/services" className="btn btn-secondary">Explore Services</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default KiwifruitProcessingPage;