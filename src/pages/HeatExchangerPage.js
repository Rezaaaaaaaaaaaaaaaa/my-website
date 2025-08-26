import React from 'react';
import { Link } from 'react-router-dom';
import { FaThermometerHalf, FaCogs, FaIndustry, FaLeaf, FaCheckCircle, FaChartLine, FaTools } from 'react-icons/fa';

const HeatExchangerPage = () => {
  const heatExchangerTypes = [
    {
      icon: <FaCogs />,
      title: "Shell & Tube Heat Exchangers",
      description: "Most common type for high-pressure and high-temperature applications with excellent heat transfer efficiency.",
      applications: ["Chemical Processing", "Power Generation", "Oil & Gas", "Industrial Heating"]
    },
    {
      icon: <FaThermometerHalf />,
      title: "Plate Heat Exchangers",
      description: "Compact design with high heat transfer coefficients, ideal for low to medium pressure applications.",
      applications: ["Food Processing", "HVAC Systems", "Chemical Industry", "Refrigeration"]
    },
    {
      icon: <FaIndustry />,
      title: "Air Cooled Heat Exchangers",
      description: "Use ambient air for cooling, eliminating water requirements and reducing environmental impact.",
      applications: ["Power Plants", "Refineries", "Chemical Plants", "Remote Locations"]
    }
  ];

  const heatExchangerServices = [
    {
      icon: <FaTools />,
      title: "Design & Sizing",
      description: "Custom heat exchanger design optimized for your specific thermal requirements"
    },
    {
      icon: <FaCogs />,
      title: "Performance Analysis",
      description: "Comprehensive analysis of heat transfer performance and efficiency"
    },
    {
      icon: <FaChartLine />,
      title: "Optimization",
      description: "Maximize heat transfer efficiency and minimize energy consumption"
    },
    {
      icon: <FaLeaf />,
      title: "Energy Recovery",
      description: "Implement heat recovery systems to reduce energy costs and environmental impact"
    }
  ];

  return (
    <div>
      {/* Page Header */}
      <section className="hero" style={{padding: 'var(--space-16) 0'}}>
        <div className="container">
          <div className="hero-content">
            <h1>Heat Exchanger Engineering</h1>
            <p className="description">
              Specialized heat exchanger design and optimization services for New Zealand's industrial 
              processes. From shell & tube to plate heat exchangers, we ensure efficient heat transfer 
              while minimizing energy consumption and environmental impact.
            </p>
          </div>
        </div>
      </section>

      {/* Heat Exchanger Services */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>Our Heat Exchanger Engineering Services</h2>
            <p className="section-description">
              Comprehensive solutions for heat exchanger design, optimization, and operation
            </p>
          </div>
          
          <div className="grid grid-auto">
            {heatExchangerServices.map((service, index) => (
              <div key={index} className="card">
                <div className="card-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Heat Exchanger Types */}
      <section className="section" style={{backgroundColor: 'var(--gray-100)'}}>
        <div className="container">
          <div className="section-header">
            <h2>Heat Exchanger Types & Applications</h2>
            <p className="section-description">
              Specialized heat exchanger solutions for diverse industrial applications
            </p>
          </div>
          
          <div className="grid grid-auto">
            {heatExchangerTypes.map((type, index) => (
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
            <h2>Key Heat Exchanger Design Considerations</h2>
          </div>
          
          <div className="grid grid-cols-2" style={{gap: 'var(--space-12)'}}>
            <div>
              <h3>Thermal Design</h3>
              <ul className="space-y-2">
                <li>• Heat transfer coefficient calculation</li>
                <li>• Temperature approach optimization</li>
                <li>• Pressure drop analysis</li>
                <li>• Fouling factor considerations</li>
                <li>• Heat duty requirements</li>
              </ul>
            </div>
            
            <div>
              <h3>Mechanical Design</h3>
              <ul className="space-y-2">
                <li>• Material selection and compatibility</li>
                <li>• Pressure vessel design codes</li>
                <li>• Thermal expansion considerations</li>
                <li>• Maintenance and cleaning access</li>
                <li>• Safety and environmental compliance</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose RMES for Heat Exchangers */}
      <section className="section" style={{backgroundColor: 'var(--gray-100)'}}>
        <div className="container">
          <div className="section-header">
            <h2>Why Choose RMES for Heat Exchanger Engineering?</h2>
          </div>
          
          <div className="grid grid-cols-2" style={{gap: 'var(--space-12)'}}>
            <div>
              <h3>Technical Expertise</h3>
              <ul className="space-y-2">
                <li>• Advanced heat transfer modeling</li>
                <li>• Computational fluid dynamics (CFD)</li>
                <li>• Thermal design optimization</li>
                <li>• Energy efficiency analysis</li>
                <li>• New Zealand regulatory compliance</li>
              </ul>
            </div>
            
            <div>
              <h3>Industry Experience</h3>
              <ul className="space-y-2">
                <li>• Chemical processing plants</li>
                <li>• Power generation facilities</li>
                <li>• Food and beverage industry</li>
                <li>• Oil and gas operations</li>
                <li>• HVAC and refrigeration systems</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section">
        <div className="container text-center">
          <h2>Ready to Optimize Your Heat Transfer Operations?</h2>
          <p className="text-xl mb-8">
            Contact our heat exchanger engineering experts to discuss your thermal requirements and get a customized solution.
          </p>
          <Link to="/contact" className="btn btn-primary btn-lg">
            Get Heat Exchanger Consultation
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HeatExchangerPage;
