import React from 'react';
import { FaShieldAlt, FaMicroscope, FaClipboardCheck, FaSearch, FaCheckCircle, FaIndustry } from 'react-icons/fa';

const FoodSafetySystemsPage = () => {
  const systems = [
    {
      icon: FaShieldAlt,
      title: "HACCP Implementation",
      description: "Comprehensive Hazard Analysis and Critical Control Points systems for food safety.",
      features: ["Hazard Analysis", "Critical Control Points", "Monitoring Systems", "Corrective Actions"]
    },
    {
      icon: FaMicroscope,
      title: "Microbiological Testing",
      description: "Advanced testing protocols for pathogen detection and product safety validation.",
      features: ["Pathogen Testing", "Indicator Organisms", "Rapid Methods", "Environmental Monitoring"]
    },
    {
      icon: FaClipboardCheck,
      title: "Quality Management Systems",
      description: "ISO and BRC compliant quality management systems for food production facilities.",
      features: ["ISO 22000", "BRC Standards", "SQF Certification", "Audit Preparation"]
    },
    {
      icon: FaSearch,
      title: "Traceability Systems",
      description: "End-to-end traceability solutions for supply chain transparency and recall management.",
      features: ["Supply Chain Tracking", "Batch Identification", "Recall Systems", "Documentation"]
    }
  ];

  const standards = [
    "HACCP (Hazard Analysis Critical Control Points)",
    "ISO 22000 (Food Safety Management)",
    "BRC (British Retail Consortium)",
    "SQF (Safe Quality Food)",
    "FSSC 22000 (Food Safety System Certification)",
    "New Zealand Food Safety Standards"
  ];

  const applications = [
    "Food Manufacturing",
    "Dairy Processing",
    "Meat Processing",
    "Seafood Processing",
    "Beverage Production",
    "Export Facilities"
  ];

  const benefits = [
    "Regulatory Compliance",
    "Export Market Access",
    "Consumer Protection",
    "Brand Protection",
    "Risk Mitigation",
    "Operational Excellence"
  ];

  return (
    <div className="container">
      <div className="section">
        <div className="hero" style={{ background: 'linear-gradient(135deg, #DC2626 0%, #2E8B57 100%)' }}>
          <div className="hero-content">
            <h1>Food Safety Systems</h1>
            <p className="subtitle">Comprehensive Food Safety Solutions</p>
            <p className="description">
              Advanced food safety management systems ensuring compliance with international
              standards and protecting New Zealand's reputation for safe, quality food products.
            </p>
          </div>
        </div>

        <div className="section-header">
          <h2 className="section-title">Safety Management Systems</h2>
          <p className="section-description">
            Comprehensive food safety solutions ensuring regulatory compliance and consumer protection
          </p>
        </div>

        <div className="grid grid-cols-2 gap-6">
          {systems.map((system, index) => (
            <div key={index} className="card">
              <div className="card-icon"><system.icon /></div>
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
          <h2 className="section-title text-center">Food Safety Standards</h2>
          <div className="grid grid-cols-1 gap-4">
            {standards.map((standard, index) => (
              <div key={index} className="flex items-center gap-3">
                <FaShieldAlt className="text-red-600" />
                <span>{standard}</span>
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

export default FoodSafetySystemsPage;