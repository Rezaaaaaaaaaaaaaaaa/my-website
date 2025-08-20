import React from 'react';
import { FaBolt, FaSun, FaFlask, FaAtom, FaCheckCircle, FaIndustry, FaWater, FaMicroscope } from 'react-icons/fa';

const AdvancedOxidationPage = () => {
  const processes = [
    {
      icon: <FaBolt />,
      title: "Ozonation",
      description: "Direct ozone oxidation and ozone-based advanced oxidation for contaminant destruction.",
      features: ["Direct Oxidation", "Disinfection", "Color Removal", "Taste & Odor Control"]
    },
    {
      icon: <FaSun />,
      title: "UV/H2O2 Process",
      description: "UV light activated hydrogen peroxide for generation of hydroxyl radicals.",
      features: ["Hydroxyl Radical Formation", "Organic Destruction", "No Chemical Residuals", "Pathogen Inactivation"]
    },
    {
      icon: <FaFlask />,
      title: "Fenton's Process",
      description: "Iron-catalyzed hydrogen peroxide oxidation for organic contaminant removal.",
      features: ["Iron Catalyst", "pH Sensitive", "Organic Destruction", "Sludge Production"]
    },
    {
      icon: <FaAtom />,
      title: "Electrochemical Oxidation",
      description: "Electrochemical generation of oxidants for in-situ contaminant treatment.",
      features: ["Electrochemical Cells", "In-situ Generation", "No Chemical Storage", "Selective Oxidation"]
    }
  ];

  const contaminants = [
    "Pharmaceuticals & Personal Care Products",
    "Endocrine Disrupting Compounds",
    "Pesticides & Herbicides",
    "Industrial Chemicals",
    "Disinfection By-Products",
    "Emerging Contaminants"
  ];

  const applications = [
    "Drinking Water Treatment",
    "Wastewater Polishing",
    "Groundwater Remediation",
    "Industrial Effluent",
    "Reuse Water Treatment",
    "Emergency Treatment"
  ];

  const benefits = [
    "Complete Mineralization",
    "No Selective Resistance",
    "Broad Spectrum Treatment",
    "Rapid Reaction Rates",
    "Minimal Residuals",
    "Pathogen Inactivation"
  ];

  return (
    <div className="container">
      <div className="section">
        <div className="hero" style={{ background: 'linear-gradient(135deg, #F97316 0%, #14B8A6 100%)' }}>
          <div className="hero-content">
            <h1>Advanced Oxidation Processes</h1>
            <p className="subtitle">Cutting-Edge Contaminant Destruction Technology</p>
            <p className="description">
              State-of-the-art advanced oxidation processes for destruction of persistent
              organic contaminants and emerging pollutants in water and wastewater.
            </p>
          </div>
        </div>

        <div className="section-header">
          <h2 className="section-title">Oxidation Technologies</h2>
          <p className="section-description">
            Advanced oxidation processes for effective destruction of recalcitrant contaminants
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
          <h2 className="section-title text-center">Target Contaminants</h2>
          <div className="grid grid-cols-1 gap-4">
            {contaminants.map((contaminant, index) => (
              <div key={index} className="flex items-center gap-3">
                <FaMicroscope className="text-orange-600" />
                <span>{contaminant}</span>
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

export default AdvancedOxidationPage;