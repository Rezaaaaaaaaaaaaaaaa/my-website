import React from 'react';
import { FaRecycle, FaFire, FaBolt, FaLeaf, FaCheckCircle, FaIndustry, FaWater, FaCogs } from 'react-icons/fa';

const AnaerobicDigestionPage = () => {
  const processes = [
    {
      icon: <FaRecycle />,
      title: "Mesophilic Digestion",
      description: "Standard temperature anaerobic treatment for municipal sludge and organic waste.",
      features: ["35°C Operation", "Stable Process", "Lower Energy", "Proven Technology"]
    },
    {
      icon: <FaFire />,
      title: "Thermophilic Digestion",
      description: "High-temperature process for enhanced pathogen destruction and gas production.",
      features: ["55°C Operation", "Higher Gas Yield", "Pathogen Destruction", "Faster Digestion"]
    },
    {
      icon: <FaCogs />,
      title: "Two-Stage Digestion",
      description: "Optimized process with separate acidification and methanogenic phases.",
      features: ["Phase Separation", "Enhanced Stability", "Higher Efficiency", "Process Control"]
    },
    {
      icon: <FaIndustry />,
      title: "Industrial Anaerobic Treatment",
      description: "High-rate anaerobic systems for industrial wastewater and food processing.",
      features: ["UASB Reactors", "High Loading", "Energy Recovery", "COD Reduction"]
    }
  ];

  const benefits = [
    "Biogas Energy Production",
    "Reduced Sludge Volume",
    "Pathogen Reduction",
    "Odor Control",
    "Carbon Footprint Reduction",
    "Renewable Energy Generation"
  ];

  const applications = [
    "Municipal Sludge Treatment",
    "Food Waste Processing",
    "Agricultural Waste",
    "Industrial Effluent",
    "Dairy Processing Waste",
    "Brewery Wastewater"
  ];

  return (
    <div className="container">
      <div className="section">
        <div className="hero" style={{ background: 'linear-gradient(135deg, #2E8B57 0%, #F97316 100%)' }}>
          <div className="hero-content">
            <h1>Anaerobic Digestion Systems</h1>
            <p className="subtitle">Sustainable Waste-to-Energy Solutions</p>
            <p className="description">
              Advanced anaerobic digestion technologies converting organic waste into renewable
              energy while reducing environmental impact across New Zealand.
            </p>
          </div>
        </div>

        <div className="section-header">
          <h2 className="section-title">Digestion Technologies</h2>
          <p className="section-description">
            Comprehensive anaerobic treatment solutions for waste management and energy recovery
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
          <h2 className="section-title text-center">Process Benefits</h2>
          <div className="grid grid-cols-2 gap-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-3">
                <FaBolt className="text-orange-600" />
                <span>{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="section">
          <h2 className="section-title text-center">Applications</h2>
          <div className="grid grid-cols-3 gap-4">
            {applications.map((app, index) => (
              <div key={index} className="card text-center">
                <FaLeaf className="card-icon mx-auto" />
                <h4>{app}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnaerobicDigestionPage;