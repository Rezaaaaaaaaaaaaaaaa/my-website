import React from 'react';
import { FaLayerGroup, FaWater, FaWind, FaRecycle, FaCheckCircle, FaIndustry, FaCogs, FaLeaf } from 'react-icons/fa';

const TricklingFiltersPage = () => {
  const systems = [
    {
      icon: <FaLayerGroup />,
      title: "Standard Rate Trickling Filters",
      description: "Traditional low-rate filters with rock media for reliable secondary treatment.",
      features: ["Rock Media", "Low Loading", "Natural Ventilation", "Simple Operation"]
    },
    {
      icon: <FaCogs />,
      title: "High Rate Trickling Filters",
      description: "Plastic media filters with recirculation for enhanced treatment performance.",
      features: ["Plastic Media", "High Loading", "Recirculation", "Compact Design"]
    },
    {
      icon: <FaWind />,
      title: "Roughing Filters",
      description: "Pre-treatment systems for high-strength wastewater and industrial applications.",
      features: ["High BOD Loading", "Pre-treatment", "Shock Load Resistance", "Cost Effective"]
    },
    {
      icon: <FaRecycle />,
      title: "Two-Stage Trickling Filters",
      description: "Series configuration for enhanced treatment efficiency and nitrification.",
      features: ["Series Treatment", "Enhanced Removal", "Nitrification", "Stable Performance"]
    }
  ];

  const mediaTypes = [
    "Rock/Stone Media",
    "Plastic Random Pack",
    "Structured Plastic Media",
    "Bioball Media"
  ];

  const advantages = [
    "Low Energy Consumption",
    "Simple Process Control",
    "Reliable Performance",
    "Low Maintenance Requirements",
    "Natural Ventilation",
    "Shock Load Tolerance"
  ];

  const applications = [
    "Municipal Wastewater",
    "Food Processing Effluent",
    "Industrial Pre-treatment",
    "Rural Communities",
    "Upgrade Existing Plants",
    "Nitrification Systems"
  ];

  return (
    <div className="container">
      <div className="section">
        <div className="hero" style={{ background: 'linear-gradient(135deg, #2E8B57 0%, #374151 100%)' }}>
          <div className="hero-content">
            <h1>Trickling Filter Systems</h1>
            <p className="subtitle">Proven Fixed-Film Biological Treatment</p>
            <p className="description">
              Reliable trickling filter technology providing efficient biological treatment
              with low energy requirements and simple operation for diverse applications.
            </p>
          </div>
        </div>

        <div className="section-header">
          <h2 className="section-title">Filter Technologies</h2>
          <p className="section-description">
            Comprehensive trickling filter solutions for effective biological wastewater treatment
          </p>
        </div>

        <div className="grid grid-cols-2 gap-6">
          {systems.map((system, index) => (
            <div key={index} className="card">
              <div className="card-icon">{system.icon}</div>
              <h3>{system.title}</h3>
              <p>{system.description}</p>
              <ul>
                {system.features.map((feature, idx) => (
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
          <h2 className="section-title text-center">Media Types</h2>
          <div className="grid grid-cols-2 gap-4">
            {mediaTypes.map((media, index) => (
              <div key={index} className="flex items-center gap-3">
                <FaLayerGroup className="text-gray-600" />
                <span>{media}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="section">
          <h2 className="section-title text-center">Key Advantages</h2>
          <div className="grid grid-cols-2 gap-4">
            {advantages.map((advantage, index) => (
              <div key={index} className="flex items-center gap-3">
                <FaCheckCircle className="text-green-600" />
                <span>{advantage}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="section">
          <h2 className="section-title text-center">Applications</h2>
          <div className="grid grid-cols-3 gap-4">
            {applications.map((app, index) => (
              <div key={index} className="card text-center">
                <FaIndustry className="card-icon mx-auto" />
                <h4>{app}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TricklingFiltersPage;