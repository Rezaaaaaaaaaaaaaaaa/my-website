import React from 'react';
import { FaExchangeAlt, FaFilter, FaRecycle, FaCogs, FaCheckCircle, FaIndustry, FaWater, FaAtom } from 'react-icons/fa';

const IonExchangePage = () => {
  const processes = [
    {
      icon: <FaExchangeAlt />,
      title: "Cation Exchange",
      description: "Removal of positive ions including hardness, heavy metals, and radioactive materials.",
      features: ["Hardness Removal", "Heavy Metal Removal", "Sodium Removal", "Radioactive Ion Removal"]
    },
    {
      icon: <FaFilter />,
      title: "Anion Exchange",
      description: "Removal of negative ions including nitrates, sulfates, and organic acids.",
      features: ["Nitrate Removal", "Sulfate Removal", "Organic Acid Removal", "Alkalinity Control"]
    },
    {
      icon: <FaRecycle />,
      title: "Mixed Bed Systems",
      description: "Combined cation and anion exchange for ultrapure water production.",
      features: ["Ultrapure Water", "Complete Deionization", "High Purity", "Pharmaceutical Grade"]
    },
    {
      icon: <FaCogs />,
      title: "Selective Ion Exchange",
      description: "Specialized resins for selective removal of specific contaminants.",
      features: ["Selective Removal", "Specialty Resins", "Target Contaminants", "Resource Recovery"]
    }
  ];

  const resinTypes = [
    "Strong Acid Cation (SAC)",
    "Weak Acid Cation (WAC)",
    "Strong Base Anion (SBA)",
    "Weak Base Anion (WBA)",
    "Specialty/Selective Resins",
    "Chelating Resins"
  ];

  const applications = [
    "Water Softening",
    "Demineralization",
    "Heavy Metal Removal",
    "Nitrate Removal",
    "Ultrapure Water Production",
    "Process Water Treatment"
  ];

  const benefits = [
    "High Removal Efficiency",
    "Selective Treatment",
    "Regenerable Technology",
    "Consistent Performance",
    "Low Chemical Usage",
    "Automated Operation"
  ];

  return (
    <div className="container">
      <div className="section">
        <div className="hero" style={{ background: 'linear-gradient(135deg, #14B8A6 0%, #1E3A8A 100%)' }}>
          <div className="hero-content">
            <h1>Ion Exchange Systems</h1>
            <p className="subtitle">Advanced Ion Removal Technology</p>
            <p className="description">
              Sophisticated ion exchange systems for selective removal of ionic contaminants
              and production of high-quality treated water for diverse applications.
            </p>
          </div>
        </div>

        <div className="section-header">
          <h2 className="section-title">Ion Exchange Technologies</h2>
          <p className="section-description">
            Comprehensive ion exchange solutions for effective water treatment and purification
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
          <h2 className="section-title text-center">Resin Types</h2>
          <div className="grid grid-cols-2 gap-4">
            {resinTypes.map((resin, index) => (
              <div key={index} className="flex items-center gap-3">
                <FaAtom className="text-teal-600" />
                <span>{resin}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="section">
          <h2 className="section-title text-center">Process Benefits</h2>
          <div className="grid grid-cols-2 gap-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-3">
                <FaCheckCircle className="text-green-600" />
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

export default IonExchangePage;