import React from 'react';
import { Link } from 'react-router-dom';
import { FaFilter, FaCogs, FaIndustry, FaLeaf, FaCheckCircle, FaChartLine, FaTools } from 'react-icons/fa';

const SeparatorPage = () => {
  const separatorTypes = [
    {
      icon: <FaFilter />,
      title: "Centrifugal Separators",
      description: "High-speed rotation for efficient separation of immiscible liquids and solids from liquids.",
      applications: ["Dairy Processing", "Oil & Water Separation", "Chemical Processing", "Wastewater Treatment"]
    },
    {
      icon: <FaCogs />,
      title: "Gravity Separators",
      description: "Natural separation based on density differences, ideal for large-scale operations.",
      applications: ["Oil Refining", "Mining Operations", "Food Processing", "Environmental Treatment"]
    },
    {
      icon: <FaIndustry />,
      title: "Membrane Separators",
      description: "Advanced filtration technology for precise separation at molecular levels.",
      applications: ["Water Purification", "Pharmaceuticals", "Food Concentration", "Chemical Recovery"]
    }
  ];

  const separatorServices = [
    {
      icon: <FaTools />,
      title: "Design & Sizing",
      description: "Custom separator design optimized for your specific separation requirements"
    },
    {
      icon: <FaCogs />,
      title: "Performance Analysis",
      description: "Comprehensive analysis of separation efficiency and optimization opportunities"
    },
    {
      icon: <FaChartLine />,
      title: "Process Optimization",
      description: "Maximize separation efficiency and minimize energy consumption"
    },
    {
      icon: <FaLeaf />,
      title: "Environmental Compliance",
      description: "Ensure compliance with New Zealand environmental regulations and standards"
    }
  ];

  return (
    <div>
      {/* Page Header */}
      <section className="hero" style={{padding: 'var(--space-16) 0'}}>
        <div className="container">
          <div className="hero-content">
            <h1>Separation Engineering</h1>
            <p className="description">
              Specialized separation system design and optimization services for New Zealand's industrial 
              processes. From centrifugal to membrane separators, we ensure efficient separation of 
              components while maintaining product quality and environmental standards.
            </p>
          </div>
        </div>
      </section>

      {/* Separation Services */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>Our Separation Engineering Services</h2>
            <p className="section-description">
              Comprehensive solutions for separation system design, optimization, and operation
            </p>
          </div>
          
          <div className="grid grid-auto">
            {separatorServices.map((service, index) => (
              <div key={index} className="card">
                <div className="card-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Separator Types */}
      <section className="section" style={{backgroundColor: 'var(--gray-100)'}}>
        <div className="container">
          <div className="section-header">
            <h2>Separator Types & Applications</h2>
            <p className="section-description">
              Specialized separation solutions for diverse industrial applications
            </p>
          </div>
          
          <div className="grid grid-auto">
            {separatorTypes.map((type, index) => (
              <div key={index} className="card">
                <div className="card-icon">{type.icon}</div>
                <h3>{type.title}</h3>
                <p>{type.description}</p>
                <div className="mt-4">
                  <h4 className="font-semibold mb-2">Applications:</h4>
                  <ul>
                    {type.applications.map((app, idx) => (
                      <li key={idx} className="flex items-center gap-2 mb-1">
                        <FaCheckCircle className="text-green-600" style={{color: 'var(--primary-green)'}} />
                        <span>{app}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Design Considerations */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>Key Separation Design Considerations</h2>
          </div>
          
          <div className="grid grid-cols-2" style={{gap: 'var(--space-12)'}}>
            <div>
              <h3>Process Parameters</h3>
              <ul className="space-y-2">
                <li>• Feed composition and flow rates</li>
                <li>• Separation efficiency requirements</li>
                <li>• Product purity specifications</li>
                <li>• Operating temperature and pressure</li>
                <li>• Residence time requirements</li>
              </ul>
            </div>
            
            <div>
              <h3>Equipment Design</h3>
              <ul className="space-y-2">
                <li>• Material selection and compatibility</li>
                <li>• Equipment sizing and capacity</li>
                <li>• Maintenance and cleaning access</li>
                <li>• Safety and environmental compliance</li>
                <li>• Energy efficiency optimization</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose RMES for Separation */}
      <section className="section" style={{backgroundColor: 'var(--gray-100)'}}>
        <div className="container">
          <div className="section-header">
            <h2>Why Choose RMES for Separation Engineering?</h2>
          </div>
          
          <div className="grid grid-cols-2" style={{gap: 'var(--space-12)'}}>
            <div>
              <h3>Technical Expertise</h3>
              <ul className="space-y-2">
                <li>• Advanced separation process modeling</li>
                <li>• Computational fluid dynamics (CFD)</li>
                <li>• Equipment design and optimization</li>
                <li>• Process control and automation</li>
                <li>• New Zealand regulatory compliance</li>
              </ul>
            </div>
            
            <div>
              <h3>Industry Experience</h3>
              <ul className="space-y-2">
                <li>• Chemical processing plants</li>
                <li>• Food and beverage industry</li>
                <li>• Water and wastewater treatment</li>
                <li>• Mining and mineral processing</li>
                <li>• Pharmaceutical production</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section">
        <div className="container text-center">
          <h2>Ready to Optimize Your Separation Operations?</h2>
          <p className="text-xl mb-8">
            Contact our separation engineering experts to discuss your requirements and get a customized solution.
          </p>
          <Link to="/contact" className="btn btn-primary btn-lg">
            Get Separation Consultation
          </Link>
        </div>
      </section>
    </div>
  );
};

export default SeparatorPage;
