import React from 'react';
import { FaFlask, FaBalanceScale, FaCogs, FaAtom, FaCheckCircle, FaIndustry, FaWater, FaThermometerHalf } from 'react-icons/fa';

const PHAdjustmentPage = () => {
  const processes = [
    {
      icon: <FaBalanceScale />,
      title: "Acid Addition Systems",
      description: "Precise acid dosing for pH reduction in alkaline water and wastewater streams.",
      features: ["Sulfuric Acid Dosing", "Hydrochloric Acid Systems", "CO2 Injection", "Automated Control"]
    },
    {
      icon: <FaFlask />,
      title: "Alkali Addition Systems", 
      description: "Caustic and lime feeding systems for pH elevation and neutralization.",
      features: ["Caustic Soda Dosing", "Lime Slurry Systems", "Sodium Bicarbonate", "pH Control"]
    },
    {
      icon: <FaCogs />,
      title: "Automated pH Control",
      description: "Advanced control systems for precise pH monitoring and adjustment.",
      features: ["Online pH Monitoring", "PID Control", "Cascade Control", "Alarm Systems"]
    },
    {
      icon: <FaAtom />,
      title: "Buffering Systems",
      description: "Chemical buffering for pH stability in sensitive treatment processes.",
      features: ["Buffer Preparation", "pH Stability", "Chemical Compatibility", "Process Protection"]
    }
  ];

  const chemicals = [
    "Sulfuric Acid (H2SO4)",
    "Hydrochloric Acid (HCl)",
    "Sodium Hydroxide (NaOH)",
    "Calcium Hydroxide (Ca(OH)2)",
    "Carbon Dioxide (CO2)",
    "Sodium Bicarbonate (NaHCO3)"
  ];

  const applications = [
    "Drinking Water Treatment",
    "Wastewater Neutralization",
    "Industrial Process Water",
    "Cooling Water Systems",
    "Chemical Processing",
    "Environmental Compliance"
  ];

  const benefits = [
    "Regulatory Compliance",
    "Process Optimization",
    "Equipment Protection",
    "Chemical Compatibility",
    "Biological Process Support",
    "Corrosion Control"
  ];

  return (
    <div className="container">
      <div className="section">
        <div className="hero" style={{ background: 'linear-gradient(135deg, #2E8B57 0%, #1E3A8A 100%)' }}>
          <div className="hero-content">
            <h1>pH Adjustment Systems</h1>
            <p className="subtitle">Precise pH Control & Neutralization</p>
            <p className="description">
              Advanced pH adjustment and neutralization systems ensuring optimal water chemistry
              for treatment processes and regulatory compliance.
            </p>
          </div>
        </div>

        <div className="section-header">
          <h2 className="section-title">pH Control Technologies</h2>
          <p className="section-description">
            Comprehensive pH adjustment solutions for water and wastewater treatment applications
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
                <FaFlask className="text-green-600" />
                <span>{chemical}</span>
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

export default PHAdjustmentPage;