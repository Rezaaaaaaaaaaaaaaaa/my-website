import React from 'react';
import { Link } from 'react-router-dom';
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

  const dairyServices = [
    {
      icon: <FaIndustry />,
      title: "Process Design & Optimization",
      description: "Custom dairy processing system design optimized for your specific product requirements"
    },
    {
      icon: <FaCogs />,
      title: "Equipment Selection",
      description: "Expert guidance on dairy processing equipment selection and sizing"
    },
    {
      icon: <FaLeaf />,
      title: "Quality & Safety Systems",
      description: "Implementation of HACCP and food safety systems for export compliance"
    },
    {
      icon: <FaGlobe />,
      title: "Export Compliance",
      description: "Ensure compliance with international dairy export standards and regulations"
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

      {/* Dairy Services */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our Dairy Engineering Services</h2>
            <p className="section-description">
              Comprehensive solutions for dairy processing optimization and product development
            </p>
          </div>
          
          <div className="grid grid-auto">
            {dairyServices.map((service, index) => (
              <div key={index} className="card">
                <div className="card-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Processing Technologies */}
      <section className="section" style={{backgroundColor: 'var(--gray-100)'}}>
        <div className="container">
          <div className="section-header">
            <h2>Dairy Processing Technologies</h2>
            <p className="section-description">
              Advanced technologies for efficient dairy processing and product development
            </p>
          </div>
          
          <div className="grid grid-auto">
            {processes.map((process, index) => (
              <div key={index} className="card">
                <div className="card-icon">{process.icon}</div>
                <h3>{process.title}</h3>
                <p>{process.description}</p>
                <div className="mt-4">
                  <h4 className="font-semibold mb-2">Key Features:</h4>
                  <ul>
                    {process.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 mb-1">
                        <FaCheckCircle className="text-green-600" style={{color: 'var(--primary-green)'}} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* New Zealand Dairy Excellence */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">New Zealand's Dairy Excellence</h2>
            <p className="section-description">
              New Zealand is the world's largest exporter of dairy products, processing over 22 billion 
              liters of milk annually with advanced technologies and sustainable practices.
            </p>
          </div>
          
          <div className="grid grid-cols-2" style={{gap: 'var(--space-12)'}}>
            <div>
              <h3>Global Market Position</h3>
              <ul className="space-y-2">
                <li>• World's largest dairy exporter</li>
                <li>• Premium quality reputation</li>
                <li>• Advanced processing technology</li>
                <li>• Sustainable farming practices</li>
                <li>• Export to 140+ countries</li>
              </ul>
            </div>
            
            <div>
              <h3>Key Export Products</h3>
              <ul className="space-y-2">
                <li>• Whole Milk Powder (WMP)</li>
                <li>• Skim Milk Powder (SMP)</li>
                <li>• Butter & Anhydrous Milk Fat</li>
                <li>• Cheese & Specialty Products</li>
                <li>• Infant Formula Base</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose RMES for Dairy */}
      <section className="section" style={{backgroundColor: 'var(--gray-100)'}}>
        <div className="container">
          <div className="section-header">
            <h2>Why Choose RMES for Dairy Engineering?</h2>
          </div>
          
          <div className="grid grid-cols-2" style={{gap: 'var(--space-12)'}}>
            <div>
              <h3>Technical Expertise</h3>
              <ul className="space-y-2">
                <li>• Advanced dairy process modeling</li>
                <li>• Heat transfer optimization</li>
                <li>• Separation technology expertise</li>
                <li>• Quality control systems</li>
                <li>• New Zealand regulatory compliance</li>
              </ul>
            </div>
            
            <div>
              <h3>Industry Experience</h3>
              <ul className="space-y-2">
                <li>• Large-scale dairy processing</li>
                <li>• Export market requirements</li>
                <li>• Food safety and HACCP</li>
                <li>• Sustainable processing</li>
                <li>• International standards</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section">
        <div className="container text-center">
          <h2>Ready to Optimize Your Dairy Operations?</h2>
          <p className="text-xl mb-8">
            Contact our dairy engineering experts to discuss your processing requirements and get a customized solution.
          </p>
          <Link to="/contact" className="btn btn-primary btn-lg">
            Get Dairy Engineering Consultation
          </Link>
        </div>
      </section>
    </div>
  );
};

export default DairyProcessingPage;