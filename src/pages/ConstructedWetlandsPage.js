import React from 'react';
import { FaLeaf, FaWater, FaSeedling, FaFish, FaCheckCircle, FaGlobe, FaMountain, FaSun } from 'react-icons/fa';

const ConstructedWetlandsPage = () => {
  const systems = [
    {
      icon: <FaWater />,
      title: "Surface Flow Wetlands",
      description: "Free water surface systems mimicking natural wetlands for polishing treatment.",
      features: ["Open Water Surface", "Wildlife Habitat", "Natural Aesthetics", "Low Maintenance"]
    },
    {
      icon: <FaSeedling />,
      title: "Subsurface Flow Wetlands",
      description: "Horizontal and vertical flow systems with gravel media for enhanced treatment.",
      features: ["Gravel Bed Media", "No Standing Water", "Higher Treatment", "Odor Control"]
    },
    {
      icon: <FaLeaf />,
      title: "Hybrid Wetland Systems",
      description: "Combined systems optimizing treatment performance and operational flexibility.",
      features: ["Multiple Stages", "Enhanced Removal", "Seasonal Adaptation", "Process Reliability"]
    },
    {
      icon: <FaMountain />,
      title: "Vertical Flow Wetlands",
      description: "Advanced systems with intermittent loading for enhanced nitrification.",
      features: ["Vertical Drainage", "Aeration Cycles", "Nitrogen Removal", "Compact Design"]
    }
  ];

  const benefits = [
    "Natural Treatment Process",
    "Low Energy Requirements",
    "Wildlife Habitat Creation",
    "Aesthetic Landscape Value",
    "Climate Resilience",
    "Sustainable Operation"
  ];

  const applications = [
    "Rural Community Treatment",
    "Stormwater Management",
    "Agricultural Runoff",
    "Decentralized Treatment",
    "Tertiary Polishing",
    "Ecological Restoration"
  ];

  const plants = [
    "Phragmites (Common Reed)",
    "Typha (Cattail/Bulrush)",
    "Carex (Native Sedges)",
    "Schoenoplectus (Club Rush)",
    "Juncus (Native Rushes)",
    "Azolla (Water Fern)"
  ];

  return (
    <div className="container">
      <div className="section">
        <div className="hero" style={{ background: 'linear-gradient(135deg, #2E8B57 0%, #14B8A6 100%)' }}>
          <div className="hero-content">
            <h1>Constructed Wetland Systems</h1>
            <p className="subtitle">Nature-Based Water Treatment Solutions</p>
            <p className="description">
              Sustainable constructed wetland systems providing natural wastewater treatment
              while creating valuable ecosystems and enhancing New Zealand's landscapes.
            </p>
          </div>
        </div>

        <div className="section-header">
          <h2 className="section-title">Wetland Technologies</h2>
          <p className="section-description">
            Diverse constructed wetland systems for effective and sustainable water treatment
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
          <h2 className="section-title text-center">System Benefits</h2>
          <div className="grid grid-cols-2 gap-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-3">
                <FaLeaf className="text-green-600" />
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
                <FaGlobe className="card-icon mx-auto" />
                <h4>{app}</h4>
              </div>
            ))}
          </div>
        </div>

        <div className="section">
          <h2 className="section-title text-center">Native Plant Species</h2>
          <div className="grid grid-cols-2 gap-4">
            {plants.map((plant, index) => (
              <div key={index} className="flex items-center gap-3">
                <FaSeedling className="text-green-600" />
                <span>{plant}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConstructedWetlandsPage;