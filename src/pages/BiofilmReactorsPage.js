import React from 'react';
import { FaLayerGroup, FaWater, FaCogs, FaFlask, FaCheckCircle, FaIndustry, FaLeaf, FaMicroscope } from 'react-icons/fa';

const BiofilmReactorsPage = () => {
  const processes = [
    {
      icon: <FaLayerGroup />,
      title: "Trickling Filters",
      description: "Fixed-film biological treatment using plastic or rock media with natural ventilation.",
      features: ["Rock/Plastic Media", "Natural Ventilation", "Low Energy", "Simple Operation"]
    },
    {
      icon: <FaCogs />,
      title: "Rotating Biological Contactors (RBC)",
      description: "Attached growth process with rotating discs partially submerged in wastewater.",
      features: ["Rotating Discs", "Staged Treatment", "Low Maintenance", "Consistent Performance"]
    },
    {
      icon: <FaFlask />,
      title: "Moving Bed Biofilm Reactor (MBBR)",
      description: "Advanced biofilm process using suspended plastic carriers in aerated tanks.",
      features: ["Plastic Carriers", "High Loading", "Compact Design", "Easy Retrofit"]
    },
    {
      icon: <FaIndustry />,
      title: "Integrated Fixed-Film Activated Sludge (IFAS)",
      description: "Hybrid system combining suspended and attached growth in the same tank.",
      features: ["Dual Process", "High Capacity", "Nutrient Removal", "Space Efficient"]
    }
  ];

  const advantages = [
    "Lower Energy Requirements",
    "Stable Microbial Population",
    "Resistance to Shock Loads",
    "Minimal Sludge Production",
    "Simple Process Control",
    "Effective Nitrification"
  ];

  const applications = [
    "Municipal Wastewater Treatment",
    "Industrial Process Water",
    "Food Processing Effluent",
    "Aquaculture Systems",
    "Tertiary Treatment",
    "Nutrient Removal Applications"
  ];

  return (
    <div className="container">
      <div className="section">
        <div className="hero" style={{ background: 'linear-gradient(135deg, #14B8A6 0%, #1E3A8A 100%)' }}>
          <div className="hero-content">
            <h1>Biofilm Reactor Systems</h1>
            <p className="subtitle">Advanced Attached Growth Treatment</p>
            <p className="description">
              Innovative biofilm reactor technologies providing reliable, energy-efficient
              biological treatment for diverse wastewater applications.
            </p>
          </div>
        </div>

        <div className="section-header">
          <h2 className="section-title">Biofilm Technologies</h2>
          <p className="section-description">
            Comprehensive range of biofilm reactor systems for effective wastewater treatment
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
                <FaMicroscope className="card-icon mx-auto" />
                <h4>{app}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BiofilmReactorsPage;