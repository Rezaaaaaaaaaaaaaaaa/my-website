import React from 'react';
import { FaHive, FaThermometerHalf, FaFilter, FaFlask, FaCheckCircle, FaCogs, FaLeaf, FaGlobe } from 'react-icons/fa';

const HoneyProcessingPage = () => {
  const processes = [
    {
      icon: <FaThermometerHalf />,
      title: "Gentle Heat Treatment",
      description: "Controlled thermal processing preserving honey's natural properties and enzymes.",
      features: ["Low Temperature Processing", "Enzyme Preservation", "Crystallization Control", "Quality Retention"]
    },
    {
      icon: <FaFilter />,
      title: "Filtration & Clarification",
      description: "Advanced filtration systems for honey purification while maintaining quality.",
      features: ["Coarse Filtration", "Fine Filtration", "Wax Removal", "Particle Elimination"]
    },
    {
      icon: <FaFlask />,
      title: "Quality Testing & Analysis",
      description: "Comprehensive testing ensuring honey purity and authenticity for export markets.",
      features: ["Moisture Content", "HMF Analysis", "Pollen Analysis", "Authenticity Testing"]
    },
    {
      icon: <FaCogs />,
      title: "Packaging & Storage",
      description: "Automated packaging systems maintaining honey quality throughout distribution.",
      features: ["Automated Filling", "Clean Room Standards", "Moisture Control", "Tamper Evident Sealing"]
    }
  ];

  const honeyTypes = [
    "Manuka Honey",
    "Clover Honey",
    "Rata Honey",
    "Kamahi Honey",
    "Beech Honeydew",
    "Wildflower Honey"
  ];

  const qualityParameters = [
    "Moisture Content Control",
    "Hydroxymethylfurfural (HMF) Levels",
    "Diastase Activity",
    "Electrical Conductivity",
    "Color Grading",
    "Microbiological Safety"
  ];

  const benefits = [
    "Premium Export Quality",
    "Authentic New Zealand Product",
    "Natural Processing Methods",
    "Quality Assurance",
    "Traceability Systems",
    "International Compliance"
  ];

  return (
    <div className="container">
      <div className="section">
        <div className="hero" style={{ background: 'linear-gradient(135deg, #F59E0B 0%, #2E8B57 100%)' }}>
          <div className="hero-content">
            <h1>Honey Processing Solutions</h1>
            <p className="subtitle">Premium New Zealand Honey Processing</p>
            <p className="description">
              Specialized honey processing technology preserving the natural qualities of
              New Zealand's world-famous honey varieties for premium export markets.
            </p>
          </div>
        </div>

        <div className="section-header">
          <h2 className="section-title">Processing Technologies</h2>
          <p className="section-description">
            Gentle processing solutions maintaining honey's natural properties and quality
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
          <h2 className="section-title text-center">New Zealand Honey Varieties</h2>
          <div className="grid grid-cols-3 gap-4">
            {honeyTypes.map((honey, index) => (
              <div key={index} className="card text-center">
                <FaHive className="card-icon mx-auto" />
                <h4>{honey}</h4>
              </div>
            ))}
          </div>
        </div>

        <div className="section">
          <h2 className="section-title text-center">Quality Parameters</h2>
          <div className="grid grid-cols-2 gap-4">
            {qualityParameters.map((parameter, index) => (
              <div key={index} className="flex items-center gap-3">
                <FaFlask className="text-yellow-600" />
                <span>{parameter}</span>
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

export default HoneyProcessingPage;