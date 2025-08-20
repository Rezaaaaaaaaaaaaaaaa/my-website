import React from 'react';
import { FaFlask, FaCogs, FaWater, FaAtom, FaCheckCircle, FaIndustry, FaMicroscope, FaFilter } from 'react-icons/fa';

const CoagulationFlocculationPage = () => {
  const processes = [
    {
      icon: <FaAtom />,
      title: "Rapid Mix Coagulation",
      description: "High-intensity mixing for destabilization of colloidal particles and suspended solids.",
      features: ["Chemical Dosing", "Rapid Mixing", "Charge Neutralization", "Particle Destabilization"]
    },
    {
      icon: <FaCogs />,
      title: "Flocculation",
      description: "Gentle mixing to promote particle aggregation and floc formation for settling.",
      features: ["Gentle Mixing", "Floc Formation", "Multi-stage Mixing", "Particle Aggregation"]
    },
    {
      icon: <FaFilter />,
      title: "Enhanced Coagulation",
      description: "Optimized process for maximum removal of organics and disinfection by-products.",
      features: ["DBP Precursor Removal", "Enhanced Organics Removal", "pH Optimization", "Advanced Control"]
    },
    {
      icon: <FaWater />,
      title: "Ballasted Flocculation",
      description: "High-rate clarification using microsand to increase settling velocity.",
      features: ["Microsand Addition", "High Rate Treatment", "Compact Design", "Enhanced Settling"]
    }
  ];

  const coagulants = [
    "Aluminum Sulfate (Alum)",
    "Polyaluminum Chloride (PAC)",
    "Ferric Chloride",
    "Ferric Sulfate",
    "Polyferric Sulfate",
    "Organic Polymers"
  ];

  const applications = [
    "Drinking Water Treatment",
    "Industrial Water Treatment",
    "Wastewater Treatment",
    "Stormwater Treatment",
    "Swimming Pool Treatment",
    "Process Water Clarification"
  ];

  const benefits = [
    "Effective Turbidity Removal",
    "Color Reduction",
    "Pathogen Removal",
    "Organic Matter Reduction",
    "Improved Filtration",
    "Enhanced Settling"
  ];

  return (
    <div className="container">
      <div className="section">
        <div className="hero" style={{ background: 'linear-gradient(135deg, #1E3A8A 0%, #2E8B57 100%)' }}>
          <div className="hero-content">
            <h1>Coagulation & Flocculation</h1>
            <p className="subtitle">Advanced Chemical Treatment Processes</p>
            <p className="description">
              Specialized coagulation and flocculation systems for effective removal of suspended
              solids, turbidity, and contaminants from water and wastewater.
            </p>
          </div>
        </div>

        <div className="section-header">
          <h2 className="section-title">Treatment Processes</h2>
          <p className="section-description">
            Comprehensive coagulation and flocculation technologies for water clarification
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
          <h2 className="section-title text-center">Common Coagulants</h2>
          <div className="grid grid-cols-2 gap-4">
            {coagulants.map((coagulant, index) => (
              <div key={index} className="flex items-center gap-3">
                <FaFlask className="text-blue-600" />
                <span>{coagulant}</span>
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

export default CoagulationFlocculationPage;