import React from 'react';
import { FaWineGlass, FaFlask, FaThermometerHalf, FaFilter, FaCheckCircle, FaCogs, FaLeaf, FaGlobe } from 'react-icons/fa';

const WineBeveragePage = () => {
  const processes = [
    {
      icon: <FaFlask />,
      title: "Fermentation Control",
      description: "Precise fermentation management for optimal flavor development and alcohol content.",
      features: ["Temperature Control", "pH Monitoring", "Yeast Management", "Sugar Analysis"]
    },
    {
      icon: <FaFilter />,
      title: "Clarification & Filtration",
      description: "Advanced filtration systems for wine and beverage clarification and stabilization.",
      features: ["Cross-flow Filtration", "Diatomaceous Earth", "Membrane Filtration", "Cold Stabilization"]
    },
    {
      icon: <FaThermometerHalf />,
      title: "Thermal Processing",
      description: "Controlled thermal treatment for beverage pasteurization and stability.",
      features: ["Flash Pasteurization", "Tunnel Pasteurization", "Hot Filling", "Aseptic Processing"]
    },
    {
      icon: <FaCogs />,
      title: "Bottling & Packaging",
      description: "Automated bottling lines ensuring product quality and shelf life.",
      features: ["Automated Bottling", "Quality Control", "Capping Systems", "Label Application"]
    }
  ];

  const products = [
    "Premium Wines",
    "Craft Beverages",
    "Fruit Juices",
    "Specialty Drinks",
    "Sparkling Beverages",
    "Export Products"
  ];

  const innovations = [
    "Precision Fermentation Technology",
    "Sustainable Processing Methods",
    "Quality Control Systems",
    "Energy Efficient Design",
    "Automated Monitoring",
    "Traceability Solutions"
  ];

  const benefits = [
    "Superior Product Quality",
    "Consistent Flavor Profiles",
    "Extended Shelf Life",
    "Export Market Compliance",
    "Sustainable Operations",
    "Brand Protection"
  ];

  return (
    <div className="container">
      <div className="section">
        <div className="hero" style={{ background: 'linear-gradient(135deg, #7C3AED 0%, #2E8B57 100%)' }}>
          <div className="hero-content">
            <h1>Wine & Beverage Processing</h1>
            <p className="subtitle">Premium Beverage Production Technology</p>
            <p className="description">
              Advanced wine and beverage processing solutions ensuring exceptional quality
              and consistency for New Zealand's renowned beverage industry.
            </p>
          </div>
        </div>

        <div className="section-header">
          <h2 className="section-title">Processing Technologies</h2>
          <p className="section-description">
            Comprehensive beverage processing solutions for premium wine and beverage production
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
                <FaWineGlass className="card-icon mx-auto" />
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
                <FaFlask className="text-purple-600" />
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

export default WineBeveragePage;