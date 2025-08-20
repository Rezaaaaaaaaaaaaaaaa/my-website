import React from 'react';
import { FaShieldAlt, FaFlask, FaChartLine, FaMicroscope, FaWater, FaIndustry, FaCheckCircle } from 'react-icons/fa';

const QMRAAnalysisPage = () => {
  const qmraServices = [
    {
      icon: <FaMicroscope />,
      title: "Pathogen Detection & Quantification",
      description: "Advanced microbial analysis and quantification techniques for accurate risk assessment.",
      features: ["PCR Analysis", "Culture Methods", "Rapid Detection", "Quality Control"]
    },
    {
      icon: <FaChartLine />,
      title: "Dose-Response Modeling",
      description: "Statistical modeling of pathogen infectivity and health outcomes.",
      features: ["Beta-Poisson Models", "Exponential Models", "Uncertainty Analysis", "Validation"]
    },
    {
      icon: <FaWater />,
      title: "Exposure Assessment",
      description: "Comprehensive evaluation of human exposure to microbial contaminants.",
      features: ["Water Consumption", "Recreational Exposure", "Food Contamination", "Aerosol Exposure"]
    },
    {
      icon: <FaShieldAlt />,
      title: "Risk Characterization",
      description: "Final risk assessment with uncertainty quantification and management recommendations.",
      features: ["Risk Metrics", "Uncertainty Analysis", "Sensitivity Analysis", "Management Strategies"]
    }
  ];

  const applications = [
    "Drinking Water Treatment",
    "Wastewater Reuse",
    "Recreational Water",
    "Food Safety",
    "Agricultural Runoff",
    "Healthcare Facilities"
  ];

  const methodologies = [
    "Monte Carlo Simulation",
    "Bayesian Analysis",
    "Sensitivity Analysis",
    "Uncertainty Propagation",
    "Scenario Analysis",
    "Comparative Risk Assessment"
  ];

  return (
    <div className="page-container">
      {/* Hero Section */}
      <section className="hero qmra-hero">
        <div className="container">
          <div className="hero-content">
            <h1>Quantitative Microbial Risk Assessment (QMRA)</h1>
            <p className="subtitle">Advanced Microbial Risk Analysis for Public Health Protection</p>
            <p className="description">
              Comprehensive QMRA services using state-of-the-art methodologies to assess and manage 
              microbial risks in water, food, and environmental systems. Our expertise ensures 
              accurate risk quantification and effective public health protection strategies.
            </p>
          </div>
        </div>
      </section>

      {/* QMRA Overview */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">What is QMRA?</h2>
            <p className="section-description">
              Quantitative Microbial Risk Assessment is a systematic approach to evaluating the risk 
              of infection from exposure to pathogenic microorganisms in various environmental media.
            </p>
          </div>
          
          <div className="qmra-overview">
            <div className="overview-content">
              <h3>Key Components of QMRA</h3>
              <div className="qmra-steps">
                <div className="step">
                  <div className="step-number">1</div>
                  <h4>Hazard Identification</h4>
                  <p>Identification of pathogenic microorganisms and their health effects</p>
                </div>
                <div className="step">
                  <div className="step-number">2</div>
                  <h4>Exposure Assessment</h4>
                  <p>Quantification of human exposure to microbial contaminants</p>
                </div>
                <div className="step">
                  <div className="step-number">3</div>
                  <h4>Dose-Response Assessment</h4>
                  <p>Mathematical modeling of infection probability vs. dose</p>
                </div>
                <div className="step">
                  <div className="step-number">4</div>
                  <h4>Risk Characterization</h4>
                  <p>Integration of exposure and dose-response to estimate risk</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section bg-light">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">QMRA Services</h2>
            <p className="section-description">
              Comprehensive microbial risk assessment services tailored to your specific needs
            </p>
          </div>
          
          <div className="grid grid-auto">
            {qmraServices.map((service, index) => (
              <div key={index} className="card fade-in-up">
                <div className="card-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <ul className="mb-4">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 mb-2">
                      <FaCheckCircle className="text-green-600" style={{color: 'var(--primary-green)'}} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Applications</h2>
            <p className="section-description">
              QMRA analysis is essential for various industries and environmental applications
            </p>
          </div>
          
          <div className="applications-grid">
            {applications.map((application, index) => (
              <div key={index} className="application-item">
                <FaIndustry className="application-icon" />
                <span>{application}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodologies */}
      <section className="section bg-light">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Advanced Methodologies</h2>
            <p className="section-description">
              State-of-the-art approaches for accurate risk quantification
            </p>
          </div>
          
          <div className="methodologies-grid">
            {methodologies.map((method, index) => (
              <div key={index} className="methodology-item">
                <FaChartLine className="methodology-icon" />
                <span>{method}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Benefits of QMRA Analysis</h2>
            <p className="section-description">
              Why quantitative microbial risk assessment is crucial for your operations
            </p>
          </div>
          
          <div className="benefits-grid">
            <div className="benefit-item">
              <h4>Evidence-Based Decision Making</h4>
              <p>Quantitative data supports informed decisions about risk management and public health protection.</p>
            </div>
            <div className="benefit-item">
              <h4>Regulatory Compliance</h4>
              <p>Meet regulatory requirements with scientifically validated risk assessment methodologies.</p>
            </div>
            <div className="benefit-item">
              <h4>Cost-Effective Solutions</h4>
              <p>Optimize treatment processes and resource allocation based on actual risk levels.</p>
            </div>
            <div className="benefit-item">
              <h4>Public Health Protection</h4>
              <p>Ensure adequate protection of public health through systematic risk evaluation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Assess Your Microbial Risks?</h2>
            <p>Contact our QMRA experts for comprehensive microbial risk assessment services</p>
            <div className="cta-buttons">
              <a href="/contact" className="btn btn-primary">Get Consultation</a>
              <a href="/services" className="btn btn-secondary">Learn More</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default QMRAAnalysisPage;

