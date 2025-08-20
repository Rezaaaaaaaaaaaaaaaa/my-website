import React from 'react';
import { FaBrain, FaChartLine, FaDatabase, FaRobot, FaFlask, FaIndustry, FaCheckCircle, FaCogs } from 'react-icons/fa';

const MachineLearningPage = () => {
  const mlServices = [
    {
      icon: <FaChartLine />,
      title: "Predictive Process Modeling",
      description: "Advanced ML algorithms for predicting process performance, quality metrics, and operational parameters.",
      features: ["Neural Networks", "Random Forests", "Support Vector Machines", "Time Series Analysis"]
    },
    {
      icon: <FaCogs />,
      title: "Process Optimization",
      description: "AI-driven optimization of chemical processes for maximum efficiency and minimal resource consumption.",
      features: ["Genetic Algorithms", "Reinforcement Learning", "Multi-objective Optimization", "Real-time Control"]
    },
    {
      icon: <FaDatabase />,
      title: "Data Analytics & Insights",
      description: "Comprehensive analysis of process data to identify patterns, anomalies, and improvement opportunities.",
      features: ["Pattern Recognition", "Anomaly Detection", "Trend Analysis", "Predictive Maintenance"]
    },
    {
      icon: <FaRobot />,
      title: "Automated Quality Control",
      description: "Machine learning systems for real-time quality monitoring and automated decision making.",
      features: ["Computer Vision", "Sensor Fusion", "Quality Prediction", "Automated Alerts"]
    }
  ];

  const applications = [
    "Chemical Reactor Optimization",
    "Distillation Column Control",
    "Heat Exchanger Performance",
    "Batch Process Scheduling",
    "Quality Prediction",
    "Predictive Maintenance"
  ];

  const technologies = [
    "Deep Learning",
    "Reinforcement Learning",
    "Time Series Forecasting",
    "Computer Vision",
    "Natural Language Processing",
    "Edge Computing"
  ];

  const benefits = [
    {
      title: "Increased Efficiency",
      description: "Optimize processes to achieve higher yields and lower energy consumption."
    },
    {
      title: "Cost Reduction",
      description: "Minimize waste, reduce downtime, and optimize resource allocation."
    },
    {
      title: "Quality Improvement",
      description: "Predict and prevent quality issues before they occur."
    },
    {
      title: "Real-time Decision Making",
      description: "Automated systems that respond instantly to changing conditions."
    }
  ];

  return (
    <div className="page-container">
      {/* Hero Section */}
      <section className="hero ml-hero">
        <div className="container">
          <div className="hero-content">
            <h1>Machine Learning in Chemical Engineering</h1>
            <p className="subtitle">AI-Powered Process Optimization & Predictive Analytics</p>
            <p className="description">
              Leverage cutting-edge machine learning technologies to optimize chemical processes, 
              predict outcomes, and drive operational excellence. Our AI solutions transform 
              data into actionable insights for the chemical industry.
            </p>
          </div>
        </div>
      </section>

      {/* ML Overview */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">AI Revolution in Chemical Engineering</h2>
            <p className="section-description">
              Machine learning is transforming how we approach chemical process design, 
              optimization, and control, enabling unprecedented levels of efficiency and innovation.
            </p>
          </div>
          
          <div className="ml-overview">
            <div className="overview-content">
              <h3>How ML Transforms Chemical Processes</h3>
              <div className="ml-steps">
                <div className="step">
                  <div className="step-number">1</div>
                  <h4>Data Collection</h4>
                  <p>Comprehensive gathering of process data from sensors, instruments, and historical records</p>
                </div>
                <div className="step">
                  <div className="step-number">2</div>
                  <h4>Model Development</h4>
                  <p>Training ML models on process data to identify patterns and relationships</p>
                </div>
                <div className="step">
                  <div className="step-number">3</div>
                  <h4>Validation & Testing</h4>
                  <p>Rigorous testing of models against known data to ensure accuracy and reliability</p>
                </div>
                <div className="step">
                  <div className="step-number">4</div>
                  <h4>Deployment & Monitoring</h4>
                  <p>Implementation in production with continuous monitoring and model updates</p>
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
            <h2 className="section-title">Machine Learning Services</h2>
            <p className="section-description">
              Comprehensive AI solutions tailored for chemical engineering applications
            </p>
          </div>
          
          <div className="grid grid-auto">
            {mlServices.map((service, index) => (
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
            <h2 className="section-title">Chemical Engineering Applications</h2>
            <p className="section-description">
              Specific areas where machine learning delivers exceptional value
            </p>
          </div>
          
          <div className="applications-grid">
            {applications.map((application, index) => (
              <div key={index} className="application-item">
                <FaFlask className="application-icon" />
                <span>{application}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="section bg-light">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Advanced Technologies</h2>
            <p className="section-description">
              State-of-the-art machine learning frameworks and tools we utilize
            </p>
          </div>
          
          <div className="technologies-grid">
            {technologies.map((tech, index) => (
              <div key={index} className="technology-item">
                <FaBrain className="technology-icon" />
                <span>{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Benefits of ML Integration</h2>
            <p className="section-description">
              Transform your operations with intelligent automation and predictive capabilities
            </p>
          </div>
          
          <div className="benefits-grid">
            {benefits.map((benefit, index) => (
              <div key={index} className="benefit-item">
                <h4>{benefit.title}</h4>
                <p>{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="section bg-light">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Implementation Process</h2>
            <p className="section-description">
              Our systematic approach to successful ML integration
            </p>
          </div>
          
          <div className="implementation-steps">
            <div className="impl-step">
              <h4>Assessment & Planning</h4>
              <p>Evaluate current processes, identify opportunities, and develop implementation roadmap</p>
            </div>
            <div className="impl-step">
              <h4>Data Infrastructure</h4>
              <p>Establish robust data collection, storage, and processing infrastructure</p>
            </div>
            <div className="impl-step">
              <h4>Model Development</h4>
              <p>Develop, train, and validate machine learning models for specific applications</p>
            </div>
            <div className="impl-step">
              <h4>Integration & Deployment</h4>
              <p>Seamlessly integrate ML solutions into existing process control systems</p>
            </div>
            <div className="impl-step">
              <h4>Training & Support</h4>
              <p>Provide comprehensive training and ongoing support for successful adoption</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Transform Your Processes with AI?</h2>
            <p>Discover how machine learning can revolutionize your chemical engineering operations</p>
            <div className="cta-buttons">
              <a href="/contact" className="btn btn-primary">Get AI Consultation</a>
              <a href="/services" className="btn btn-secondary">Explore Services</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MachineLearningPage;
