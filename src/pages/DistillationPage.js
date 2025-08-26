import React from 'react';
import { Link } from 'react-router-dom';
import { FaFlask, FaThermometerHalf, FaCogs, FaIndustry, FaLeaf, FaCheckCircle, FaChartLine } from 'react-icons/fa';

const DistillationPage = () => {
  const distillationTypes = [
    {
      icon: <FaFlask />,
      title: "Batch Distillation",
      description: "Ideal for small-scale operations and specialty chemical separation with precise control over product purity.",
      applications: ["Pharmaceuticals", "Essential Oils", "Specialty Chemicals", "Research & Development"]
    },
    {
      icon: <FaCogs />,
      title: "Continuous Distillation",
      description: "High-efficiency separation for large-scale production with consistent product quality and energy optimization.",
      applications: ["Petrochemicals", "Bulk Chemicals", "Food Processing", "Industrial Manufacturing"]
    },
    {
      icon: <FaThermometerHalf />,
      title: "Vacuum Distillation",
      description: "Low-pressure distillation for heat-sensitive materials and high-purity product recovery.",
      applications: ["Heat-Sensitive Compounds", "High-Purity Products", "Low-Boiling Point Materials", "Specialty Applications"]
    }
  ];

  const distillationServices = [
    {
      icon: <FaIndustry />,
      title: "Column Design & Sizing",
      description: "Custom distillation column design optimized for your separation requirements"
    },
    {
      icon: <FaCogs />,
      title: "Process Optimization",
      description: "Maximize separation efficiency and minimize energy consumption"
    },
    {
      icon: <FaChartLine />,
      title: "Performance Analysis",
      description: "Comprehensive analysis of distillation performance and efficiency"
    },
    {
      icon: <FaLeaf />,
      title: "Energy Efficiency",
      description: "Implement energy-saving technologies and heat integration systems"
    }
  ];

  return (
    <div>
      {/* Page Header */}
      <section className="hero" style={{padding: 'var(--space-16) 0'}}>
        <div className="container">
          <div className="hero-content">
            <h1>Distillation Engineering</h1>
            <p className="description">
              Specialized distillation design and optimization services for New Zealand's chemical processing 
              industries. From batch to continuous operations, we ensure efficient separation of components 
              while minimizing energy consumption and environmental impact.
            </p>
          </div>
        </div>
      </section>

      {/* Distillation Services */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>Our Distillation Engineering Services</h2>
            <p className="section-description">
              Comprehensive solutions for distillation column design, optimization, and operation
            </p>
          </div>
          
          <div className="grid grid-auto">
            {distillationServices.map((service, index) => (
              <div key={index} className="card">
                <div className="card-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Distillation Types */}
      <section className="section" style={{backgroundColor: 'var(--gray-100)'}}>
        <div className="container">
          <div className="section-header">
            <h2>Distillation Types & Applications</h2>
            <p className="section-description">
              Specialized distillation solutions for diverse industrial applications
            </p>
          </div>
          
          <div className="grid grid-auto">
            {distillationTypes.map((type, index) => (
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
            <h2>Key Distillation Design Considerations</h2>
          </div>
          
          <div className="grid grid-cols-2" style={{gap: 'var(--space-12)'}}>
            <div>
              <h3>Technical Parameters</h3>
              <ul className="space-y-2">
                <li>• Vapor-liquid equilibrium data</li>
                <li>• Column efficiency and tray design</li>
                <li>• Heat integration and energy recovery</li>
                <li>• Pressure drop and flow distribution</li>
                <li>• Control system design</li>
              </ul>
            </div>
            
            <div>
              <h3>Operational Factors</h3>
              <ul className="space-y-2">
                <li>• Product purity specifications</li>
                <li>• Feed composition variations</li>
                <li>• Operating flexibility requirements</li>
                <li>• Maintenance and cleaning access</li>
                <li>• Safety and environmental compliance</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose RMES for Distillation */}
      <section className="section" style={{backgroundColor: 'var(--gray-100)'}}>
        <div className="container">
          <div className="section-header">
            <h2>Why Choose RMES for Distillation Engineering?</h2>
          </div>
          
          <div className="grid grid-cols-2" style={{gap: 'var(--space-12)'}}>
            <div>
              <h3>Technical Expertise</h3>
              <ul className="space-y-2">
                <li>• Advanced separation process modeling</li>
                <li>• Energy optimization and heat integration</li>
                <li>• Column design and tray optimization</li>
                <li>• Process control and automation</li>
                <li>• New Zealand regulatory compliance</li>
              </ul>
            </div>
            
            <div>
              <h3>Industry Experience</h3>
              <ul className="space-y-2">
                <li>• Chemical manufacturing processes</li>
                <li>• Petrochemical operations</li>
                <li>• Food and beverage processing</li>
                <li>• Pharmaceutical production</li>
                <li>• Specialty chemical separation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section">
        <div className="container text-center">
          <h2>Ready to Optimize Your Distillation Operations?</h2>
          <p className="text-xl mb-8">
            Contact our distillation engineering experts to discuss your separation requirements and get a customized solution.
          </p>
          <Link to="/contact" className="btn btn-primary btn-lg">
            Get Distillation Consultation
          </Link>
        </div>
      </section>
    </div>
  );
};

export default DistillationPage;
