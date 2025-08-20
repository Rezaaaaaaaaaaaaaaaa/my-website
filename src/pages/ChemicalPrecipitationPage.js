import React from 'react';
import { FaFlask, FaAtom, FaFilter, FaCogs, FaCheckCircle, FaIndustry, FaWater, FaRecycle } from 'react-icons/fa';

const ChemicalPrecipitationPage = () => {
  const processes = [
    {
      icon: <FaAtom />,
      title: "Metal Precipitation",
      description: "Removal of heavy metals through hydroxide and sulfide precipitation reactions.",
      features: ["Heavy Metal Removal", "pH Adjustment", "Hydroxide Formation", "Selective Precipitation"]
    },
    {
      icon: <FaFilter />,
      title: "Phosphorus Precipitation",
      description: "Chemical removal of phosphorus using iron, aluminum, or calcium-based chemicals.",
      features: ["Phosphate Removal", "Chemical Dosing", "Enhanced Settling", "Nutrient Control"]
    },
    {
      icon: <FaCogs />,
      title: "Softening Precipitation",
      description: "Lime and lime-soda ash softening for hardness removal in water treatment.",
      features: ["Hardness Removal", "Lime Addition", "Carbonate Precipitation", "Water Softening"]
    },
    {
      icon: <FaRecycle />,
      title: "Recovery Precipitation",
      description: "Resource recovery through selective precipitation and crystallization processes.",
      features: ["Resource Recovery", "Crystallization", "Product Quality", "Process Optimization"]
    }
  ];

  const chemicals = [
    "Lime (Calcium Hydroxide)",
    "Caustic Soda (Sodium Hydroxide)",
    "Ferric Chloride",
    "Aluminum Sulfate",
    "Sodium Sulfide",
    "Calcium Chloride"
  ];

  const applications = [
    "Heavy Metal Removal",
    "Phosphorus Removal",
    "Water Softening",
    "Industrial Effluent",
    "Mining Wastewater",
    "Resource Recovery"
  ];

  const benefits = [
    "Effective Contaminant Removal",
    "Selective Treatment",
    "Resource Recovery Potential",
    "Proven Technology",
    "Regulatory Compliance",
    "Cost-Effective Operation"
  ];

  return (
    <div className="container">
      <div className="section">
        <div className="hero" style={{ background: 'linear-gradient(135deg, #F97316 0%, #1E3A8A 100%)' }}>
          <div className="hero-content">
            <h1>Chemical Precipitation</h1>
            <p className="subtitle">Advanced Chemical Treatment Solutions</p>
            <p className="description">
              Specialized chemical precipitation processes for targeted removal of contaminants
              and recovery of valuable resources from water and wastewater streams.
            </p>
          </div>
        </div>

        <div className="section-header">
          <h2 className="section-title">Precipitation Processes</h2>
          <p className="section-description">
            Comprehensive chemical precipitation technologies for contaminant removal and recovery
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
          <h2 className="section-title text-center">Common Chemicals</h2>
          <div className="grid grid-cols-2 gap-4">
            {chemicals.map((chemical, index) => (
              <div key={index} className="flex items-center gap-3">
                <FaFlask className="text-orange-600" />
                <span>{chemical}</span>
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

export default ChemicalPrecipitationPage;