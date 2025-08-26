import React from 'react';
import { Link } from 'react-router-dom';
import { FaFlask, FaCogs, FaThermometerHalf, FaExclamationTriangle, FaIndustry, FaLeaf, FaCheckCircle } from 'react-icons/fa';

const ReactorPage = () => {
  const reactorTypes = [
    {
      icon: <FaFlask />,
      title: "Batch Reactors",
      description: "Ideal for small-scale production and specialty chemicals with excellent control over reaction conditions.",
      applications: ["Pharmaceuticals", "Specialty Chemicals", "Research & Development", "Pilot Plants"]
    },
    {
      icon: <FaCogs />,
      title: "Continuous Reactors",
      description: "Perfect for large-scale production with steady-state operation and consistent product quality.",
      applications: ["Bulk Chemicals", "Petrochemicals", "Food Processing", "Industrial Manufacturing"]
    },
    {
      icon: <FaThermometerHalf />,
      title: "Temperature Control",
      description: "Advanced heat management systems ensuring optimal reaction temperatures and safety.",
      applications: ["Exothermic Reactions", "Endothermic Processes", "Temperature-Sensitive Products", "Safety Critical Operations"]
    }
  ];

  const reactorServices = [
    {
      icon: <FaIndustry />,
      title: "Reactor Design & Sizing",
      description: "Custom reactor design optimized for your specific chemical process requirements"
    },
    {
      icon: <FaCogs />,
      title: "Process Optimization",
      description: "Maximize conversion efficiency and minimize energy consumption"
    },
    {
      icon: <FaExclamationTriangle />,
      title: "Safety Analysis",
      description: "Comprehensive hazard analysis and safety system design"
    },
    {
      icon: <FaLeaf />,
      title: "Environmental Compliance",
      description: "Ensure compliance with New Zealand environmental regulations"
    }
  ];

  return (
    <div>
      {/* Page Header */}
      <section className="hero" style={{padding: 'var(--space-16) 0'}}>
        <div className="container">
          <div className="hero-content">
            <h1>Chemical Reactor Engineering</h1>
            <p className="description">
              Specialized reactor design and optimization services for New Zealand's chemical processing 
              industries. From batch to continuous operations, we ensure efficient conversion of raw 
              materials into valuable products while maintaining the highest safety standards.
            </p>
          </div>
        </div>
      </section>

      {/* Reactor Services */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>Our Reactor Engineering Services</h2>
            <p className="section-description">
              Comprehensive solutions for chemical reactor design, optimization, and operation
            </p>
          </div>
          
          <div className="grid grid-auto">
            {reactorServices.map((service, index) => (
              <div key={index} className="card">
                <div className="card-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reactor Types */}
      <section className="section" style={{backgroundColor: 'var(--gray-100)'}}>
        <div className="container">
          <div className="section-header">
            <h2>Reactor Types & Applications</h2>
            <p className="section-description">
              Specialized reactor solutions for diverse industrial applications
            </p>
          </div>
          
          <div className="grid grid-auto">
            {reactorTypes.map((reactor, index) => (
              <div key={index} className="card">
                <div className="card-icon">{reactor.icon}</div>
                <h3>{reactor.title}</h3>
                <p>{reactor.description}</p>
                <div className="mt-4">
                  <h4 className="font-semibold mb-2">Applications:</h4>
                  <ul>
                    {reactor.applications.map((app, idx) => (
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

      {/* Why Choose RMES for Reactors */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>Why Choose RMES for Reactor Engineering?</h2>
          </div>
          
          <div className="grid grid-cols-2" style={{gap: 'var(--space-12)'}}>
            <div>
              <h3>Technical Expertise</h3>
              <ul className="space-y-2">
                <li>• Advanced reaction kinetics modeling</li>
                <li>• Heat and mass transfer optimization</li>
                <li>• Safety system design and analysis</li>
                <li>• Scale-up from laboratory to production</li>
                <li>• New Zealand regulatory compliance</li>
              </ul>
            </div>
            
            <div>
              <h3>Industry Experience</h3>
              <ul className="space-y-2">
                <li>• Chemical manufacturing processes</li>
                <li>• Pharmaceutical production</li>
                <li>• Food and beverage processing</li>
                <li>• Petrochemical operations</li>
                <li>• Specialty chemical production</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section" style={{backgroundColor: 'var(--gray-100)'}}>
        <div className="container text-center">
          <h2>Ready to Optimize Your Reactor Operations?</h2>
          <p className="text-xl mb-8">
            Contact our reactor engineering experts to discuss your specific requirements and get a customized solution.
          </p>
          <Link to="/contact" className="btn btn-primary btn-lg">
            Get Reactor Consultation
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ReactorPage;
