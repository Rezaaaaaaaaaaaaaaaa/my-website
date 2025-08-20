import React from 'react';
import { FaFilter, FaWater, FaCogs, FaFlask, FaCheckCircle, FaIndustry, FaMicroscope, FaRecycle } from 'react-icons/fa';

const MembraneBioreactorsPage = () => {
  const systems = [
    {
      icon: <FaFilter />,
      title: "Submerged MBR",
      description: "Immersed membrane modules in activated sludge tanks for space-efficient treatment.",
      features: ["Immersed Membranes", "Compact Footprint", "High MLSS", "Direct Filtration"]
    },
    {
      icon: <FaCogs />,
      title: "External MBR",
      description: "Separate membrane units with recirculation for easier maintenance and operation.",
      features: ["External Membranes", "Easy Maintenance", "Process Control", "Flexible Design"]
    },
    {
      icon: <FaFlask />,
      title: "Anaerobic MBR",
      description: "Combined anaerobic treatment and membrane separation for industrial applications.",
      features: ["Anaerobic Process", "Energy Recovery", "High Strength Waste", "Biogas Production"]
    },
    {
      icon: <FaRecycle />,
      title: "Moving Bed MBR",
      description: "Hybrid system combining MBBR technology with membrane filtration.",
      features: ["Biofilm Carriers", "Enhanced Biology", "Fouling Reduction", "Stable Performance"]
    }
  ];

  const advantages = [
    "Superior Effluent Quality",
    "Small Footprint",
    "High Solids Retention",
    "Pathogen Removal",
    "Flexible Operation",
    "Sludge Reduction"
  ];

  const applications = [
    "Municipal Wastewater",
    "Industrial Effluent",
    "Water Reuse Systems",
    "Decentralized Treatment",
    "Hospital Wastewater",
    "Food Processing"
  ];

  const membraneTypes = [
    "Hollow Fiber Membranes",
    "Flat Sheet Membranes",
    "Tubular Membranes",
    "Ceramic Membranes"
  ];

  return (
    <div className="container">
      <div className="section">
        <div className="hero" style={{ background: 'linear-gradient(135deg, #1E3A8A 0%, #14B8A6 100%)' }}>
          <div className="hero-content">
            <h1>Membrane Bioreactor Systems</h1>
            <p className="subtitle">Advanced Biological Treatment with Membrane Separation</p>
            <p className="description">
              State-of-the-art MBR technology combining biological treatment with membrane
              filtration for superior effluent quality and compact design.
            </p>
          </div>
        </div>

        <div className="section-header">
          <h2 className="section-title">MBR Technologies</h2>
          <p className="section-description">
            Comprehensive membrane bioreactor solutions for advanced wastewater treatment
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
          <h2 className="section-title text-center">Key Advantages</h2>
          <div className="grid grid-cols-2 gap-4">
            {advantages.map((advantage, index) => (
              <div key={index} className="flex items-center gap-3">
                <FaCheckCircle className="text-blue-600" />
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

        <div className="section">
          <h2 className="section-title text-center">Membrane Technologies</h2>
          <div className="grid grid-cols-2 gap-4">
            {membraneTypes.map((type, index) => (
              <div key={index} className="flex items-center gap-3">
                <FaFilter className="text-blue-600" />
                <span>{type}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MembraneBioreactorsPage;