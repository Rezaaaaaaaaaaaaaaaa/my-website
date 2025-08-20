import React from 'react';
import { FaThermometerHalf, FaIndustry, FaShieldAlt, FaCheckCircle, FaCogs, FaLeaf, FaGlobe } from 'react-icons/fa';

const MeatProcessingPage = () => {
  const processes = [
    {
      icon: <FaThermometerHalf />,
      title: "Thermal Processing",
      description: "Advanced thermal treatment systems for meat safety and preservation.",
      features: ["Steam Treatment", "Hot Water Systems", "Controlled Atmosphere", "Temperature Monitoring"]
    },
    {
      icon: <FaCogs />,
      title: "Mechanical Processing",
      description: "Automated processing systems for efficient meat preparation and packaging.",
      features: ["Cutting Systems", "Grinding Equipment", "Packaging Lines", "Portion Control"]
    },
    {
      icon: <FaShieldAlt />,
      title: "Food Safety Systems",
      description: "HACCP-compliant systems ensuring meat safety throughout processing.",
      features: ["HACCP Implementation", "Pathogen Control", "Traceability", "Quality Assurance"]
    },
    {
      icon: <FaIndustry />,
      title: "Value-Added Processing",
      description: "Advanced processing for premium meat products and export markets.",
      features: ["Marination Systems", "Smoking Processes", "Curing Operations", "Premium Products"]
    }
  ];

  const products = [
    "Fresh Beef & Lamb",
    "Processed Meats",
    "Frozen Products",
    "Value-Added Items",
    "Export Quality Cuts",
    "Specialty Products"
  ];

  const innovations = [
    "Automated Processing Lines",
    "Advanced Packaging Systems",
    "Quality Control Technology",
    "Energy Recovery Systems",
    "Waste Minimization",
    "Traceability Solutions"
  ];

  const benefits = [
    "Food Safety Compliance",
    "Export Quality Standards",
    "Operational Efficiency",
    "Product Consistency",
    "Waste Reduction",
    "Regulatory Compliance"
  ];

  return (
    <div className="container">
      <div className="section">
        <div className="hero" style={{ background: 'linear-gradient(135deg, #374151 0%, #2E8B57 100%)' }}>
          <div className="hero-content">
            <h1>Meat Processing Solutions</h1>
            <p className="subtitle">Premium Meat Processing Technology</p>
            <p className="description">
              Advanced meat processing systems ensuring food safety, quality, and efficiency
              for New Zealand's world-renowned meat industry and export markets.
            </p>
          </div>
        </div>

        <div className="section-header">
          <h2 className="section-title">Processing Technologies</h2>
          <p className="section-description">
            Comprehensive meat processing solutions for modern food production facilities
          </p>
        </div>

        <div className="grid grid-cols-2 gap-6">
          {processes.map((process, index) => (
            <div key={index} className="card">
              <div className="card-icon">{process.icon}</div>
              <h3>{process.title}</h3>
              <p>{process.description}</p>
              <ul>
                {process.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <FaCheckCircle className="text-green-600" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="section">
          <h2 className="section-title text-center">Product Categories</h2>
          <div className="grid grid-cols-3 gap-4">
            {products.map((product, index) => (
              <div key={index} className="card text-center">
                <FaIndustry className="card-icon mx-auto" />
                <h4>{product}</h4>
              </div>
            ))}
          </div>
        </div>

        <div className="section">
          <h2 className="section-title text-center">Technology Innovations</h2>
          <div className="grid grid-cols-2 gap-4">
            {innovations.map((innovation, index) => (
              <div key={index} className="flex items-center gap-3">
                <FaCogs className="text-gray-600" />
                <span>{innovation}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="section">
          <h2 className="section-title text-center">Industry Benefits</h2>
          <div className="grid grid-cols-2 gap-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-3">
                <FaCheckCircle className="text-green-600" />
                <span>{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeatProcessingPage;