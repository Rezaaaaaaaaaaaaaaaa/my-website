import React from 'react';
import { FaBolt, FaAtom, FaRecycle, FaCogs, FaCheckCircle, FaIndustry, FaWater, FaFilter } from 'react-icons/fa';

const ElectrochemicalTreatmentPage = () => {
  const processes = [
    {
      icon: <FaBolt />,
      title: "Electrocoagulation",
      description: "In-situ generation of coagulants through electrode dissolution for water treatment.",
      features: ["In-situ Coagulant Generation", "No Chemical Addition", "Floc Formation", "Metal Removal"]
    },
    {
      icon: <FaAtom />,
      title: "Electroflotation",
      description: "Electrochemical generation of fine bubbles for flotation separation processes.",
      features: ["Fine Bubble Generation", "Oil-Water Separation", "Suspended Solids Removal", "Low Energy"]
    },
    {
      icon: <FaRecycle />,
      title: "Electrochemical Oxidation",
      description: "Direct and indirect electrochemical oxidation for organic contaminant destruction.",
      features: ["Direct Oxidation", "Hydroxyl Radical Generation", "Organic Destruction", "Disinfection"]
    },
    {
      icon: <FaCogs />,
      title: "Electrodialysis",
      description: "Ion-selective membrane process for desalination and ion concentration.",
      features: ["Ion Separation", "Desalination", "Concentration", "Energy Efficient"]
    }
  ];

  const electrodes = [
    "Aluminum Electrodes",
    "Iron Electrodes", 
    "Stainless Steel Electrodes",
    "Titanium/RuO2 Electrodes",
    "Boron-Doped Diamond (BDD)",
    "Mixed Metal Oxides (MMO)"
  ];

  const applications = [
    "Industrial Wastewater",
    "Oil-Water Separation",
    "Heavy Metal Removal",
    "Desalination",
    "Organic Pollutant Destruction",
    "Water Disinfection"
  ];

  const benefits = [
    "No Chemical Addition",
    "Compact Equipment",
    "Automated Operation",
    "Selective Treatment",
    "Minimal Sludge Production",
    "Energy Efficient"
  ];

  return (
    <div className="container">
      <div className="section">
        <div className="hero" style={{ background: 'linear-gradient(135deg, #1E3A8A 0%, #F97316 100%)' }}>
          <div className="hero-content">
            <h1>Electrochemical Treatment</h1>
            <p className="subtitle">Innovative Electrochemical Water Treatment</p>
            <p className="description">
              Advanced electrochemical processes utilizing electrical energy for effective
              water and wastewater treatment without chemical addition.
            </p>
          </div>
        </div>

        <div className="section-header">
          <h2 className="section-title">Electrochemical Technologies</h2>
          <p className="section-description">
            Comprehensive electrochemical treatment solutions for diverse water treatment applications
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
          <h2 className="section-title text-center">Electrode Materials</h2>
          <div className="grid grid-cols-2 gap-4">
            {electrodes.map((electrode, index) => (
              <div key={index} className="flex items-center gap-3">
                <FaBolt className="text-blue-600" />
                <span>{electrode}</span>
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

export default ElectrochemicalTreatmentPage;