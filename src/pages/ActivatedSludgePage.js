import React from 'react';
import { FaRecycle, FaWater, FaTint, FaFlask, FaCheckCircle, FaCogs, FaLeaf, FaGlobe } from 'react-icons/fa';

const ActivatedSludgePage = () => {
  const processes = [
    {
      icon: <FaRecycle />,
      title: "Conventional Activated Sludge",
      description: "Traditional biological treatment process for municipal and industrial wastewater treatment.",
      features: ["Aeration Tanks", "Secondary Clarifiers", "Return Activated Sludge", "Waste Activated Sludge"]
    },
    {
      icon: <FaCogs />,
      title: "Extended Aeration",
      description: "Low-loading activated sludge process for small communities and industrial applications.",
      features: ["Long Retention Time", "High MLSS", "Minimal Sludge Production", "Stable Operation"]
    },
    {
      icon: <FaFlask />,
      title: "Sequencing Batch Reactor (SBR)",
      description: "Time-controlled activated sludge process offering flexibility and excellent treatment performance.",
      features: ["Fill-React-Settle-Draw", "Nutrient Removal", "Flexible Operation", "Compact Design"]
    },
    {
      icon: <FaWater />,
      title: "Moving Bed Biofilm Reactor (MBBR)",
      description: "Hybrid process combining suspended growth and attached growth biological treatment.",
      features: ["Biofilm Carriers", "High Loading Rates", "Compact Footprint", "Robust Performance"]
    }
  ];

  const applications = [
    "Municipal Wastewater Treatment",
    "Industrial Effluent Treatment",
    "Food Processing Wastewater",
    "Dairy Industry Effluent",
    "Brewery Wastewater",
    "Pharmaceutical Wastewater"
  ];

  const benefits = [
    "High BOD/COD Removal Efficiency",
    "Reliable Nutrient Removal",
    "Established Technology",
    "Cost-Effective Operation",
    "Flexible Design Options",
    "Good Effluent Quality"
  ];

  return (
    <div className="container">
      <div className="section">
        <div className="hero" style={{ background: 'linear-gradient(135deg, #2E8B57 0%, #1E3A8A 100%)' }}>
          <div className="hero-content">
            <h1>Activated Sludge Systems</h1>
            <p className="subtitle">Biological Wastewater Treatment Excellence</p>
            <p className="description">
              Advanced activated sludge process design and optimization for effective biological treatment
              of municipal and industrial wastewater across New Zealand.
            </p>
          </div>
        </div>

        <div className="section-header">
          <h2 className="section-title">Treatment Processes</h2>
          <p className="section-description">
            Comprehensive activated sludge technologies for diverse wastewater treatment applications
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
          <h2 className="section-title text-center">Applications</h2>
          <div className="grid grid-cols-3 gap-4">
            {applications.map((app, index) => (
              <div key={index} className="card text-center">
                <FaGlobe className="card-icon mx-auto" />
                <h4>{app}</h4>
              </div>
            ))}
          </div>
        </div>

        <div className="section">
          <h2 className="section-title text-center">System Benefits</h2>
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

export default ActivatedSludgePage;