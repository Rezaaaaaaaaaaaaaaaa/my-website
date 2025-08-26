import React from 'react';
import { Link } from 'react-router-dom';
import { FaBrain, FaChartLine, FaDatabase, FaRobot, FaIndustry, FaCheckCircle, FaCogs } from 'react-icons/fa';

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

  const engineeringApplications = [
    "Chemical Reactor Optimization",
    "Distillation Column Control",
    "Heat Exchanger Performance",
    "Batch Process Scheduling",
    "Quality Prediction",
    "Predictive Maintenance"
  ];

  const mlTechnologies = [
    "Deep Learning",
    "Reinforcement Learning",
    "Time Series Forecasting",
    "Computer Vision",
    "Natural Language Processing",
    "Edge Computing"
  ];

  return (
    <div className="page-container">
      {/* Hero Section */}
      <section className="hero ml-hero">
        <div className="container">
          <div className="hero-content">
            <h1>Machine Learning in Engineering</h1>
            <p className="subtitle">AI-Powered Process Optimization & Predictive Analytics</p>
            <p className="description">
              Leverage cutting-edge machine learning technologies to optimize chemical processes, 
              predict outcomes, and drive operational excellence. Our AI solutions transform 
              data into actionable insights for the engineering industry.
            </p>
          </div>
        </div>
      </section>

      {/* ML Services */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our Machine Learning Services</h2>
            <p className="section-description">
              Comprehensive AI solutions for engineering process optimization and automation
            </p>
          </div>
          
          <div className="grid grid-auto">
            {mlServices.map((service, index) => (
              <div key={index} className="card">
                <div className="card-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <div className="mt-4">
                  <h4 className="font-semibold mb-2">Technologies:</h4>
                  <ul>
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 mb-1">
                        <FaCheckCircle className="text-green-600" style={{color: 'var(--primary-green)'}} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Engineering Applications */}
      <section className="section" style={{backgroundColor: 'var(--gray-100)'}}>
        <div className="container">
          <div className="section-header">
            <h2>Engineering Applications</h2>
            <p className="section-description">
              Machine learning solutions for diverse engineering challenges
            </p>
          </div>
          
          <div className="grid grid-auto">
            {engineeringApplications.map((application, index) => (
              <div key={index} className="card text-center">
                <FaIndustry className="card-icon" />
                <h3>{application}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ML Technologies */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>Machine Learning Technologies</h2>
            <p className="section-description">
              Advanced AI technologies for engineering applications
            </p>
          </div>
          
          <div className="grid grid-auto">
            {mlTechnologies.map((technology, index) => (
              <div key={index} className="card text-center">
                <FaBrain className="card-icon" />
                <h3>{technology}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="section" style={{backgroundColor: 'var(--gray-100)'}}>
        <div className="container">
          <div className="section-header">
            <h2>ML Implementation Process</h2>
          </div>
          
          <div className="grid grid-cols-4">
            <div className="card text-center">
              <FaDatabase className="card-icon" />
              <h4>1. Data Collection</h4>
              <p>Gather and prepare process data for analysis</p>
            </div>
            
            <div className="card text-center">
              <FaBrain className="card-icon" />
              <h4>2. Model Development</h4>
              <p>Develop and train ML models for your specific process</p>
            </div>
            
            <div className="card text-center">
              <FaCogs className="card-icon" />
              <h4>3. Integration</h4>
              <p>Integrate ML models with existing control systems</p>
            </div>
            
            <div className="card text-center">
              <FaChartLine className="card-icon" />
              <h4>4. Optimization</h4>
              <p>Continuous improvement and model refinement</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose RMES for ML */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>Why Choose RMES for Machine Learning?</h2>
          </div>
          
          <div className="grid grid-cols-2" style={{gap: 'var(--space-12)'}}>
            <div>
              <h3>Technical Expertise</h3>
              <ul className="space-y-2">
                <li>• Advanced ML algorithm development</li>
                <li>• Process engineering knowledge</li>
                <li>• Data science and analytics</li>
                <li>• System integration expertise</li>
                <li>• New Zealand regulatory compliance</li>
              </ul>
            </div>
            
            <div>
              <h3>Industry Experience</h3>
              <ul className="space-y-2">
                <li>• Chemical processing plants</li>
                <li>• Food and beverage industry</li>
                <li>• Water treatment facilities</li>
                <li>• Manufacturing operations</li>
                <li>• Environmental monitoring</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section" style={{backgroundColor: 'var(--gray-100)'}}>
        <div className="container text-center">
          <h2>Ready to Implement AI in Your Engineering Operations?</h2>
          <p className="text-xl mb-8">
            Contact our machine learning experts to discuss how AI can optimize your processes.
          </p>
          <Link to="/contact" className="btn btn-primary btn-lg">
            Get ML Consultation
          </Link>
        </div>
      </section>
    </div>
  );
};

export default MachineLearningPage;

