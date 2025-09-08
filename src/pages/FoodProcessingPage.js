import React from 'react';
import { Link } from 'react-router-dom';
import { FaIndustry, FaShieldAlt, FaLeaf, FaCheckCircle } from 'react-icons/fa';

const FoodProcessingPage = () => {
  return (
    <div>
      {/* Page Header */}
      <section className="hero" style={{padding: 'var(--space-16) 0'}}>
        <div className="container">
          <div className="hero-content">
            <h1>Food & Dairy Processing Engineering</h1>
            <p className="description">
              Specialized engineering services for New Zealand's food and dairy industry with focus 
              on process efficiency and food safety compliance
            </p>
          </div>
        </div>
      </section>

      {/* Dairy Processing */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>Dairy Processing Systems</h2>
          </div>
          <div className="grid grid-cols-2">
            <div className="card">
              <FaIndustry className="card-icon" />
              <h3>Processing Equipment</h3>
              <ul>
                <li>• Milk processing system design</li>
                <li>• Heat treatment and pasteurization</li>
                <li>• Separation and standardization</li>
                <li>• Spray drying and evaporation</li>
              </ul>
              <Link to="/dairy-processing" className="btn btn-secondary mt-4">Dairy Systems</Link>
            </div>
            <div className="card">
              <FaShieldAlt className="card-icon" />
              <h3>Food Safety Systems</h3>
              <ul>
                <li>• HACCP implementation</li>
                <li>• CIP/SIP system design</li>
                <li>• Quality assurance systems</li>
                <li>• Regulatory compliance support</li>
              </ul>
              <Link to="/food-safety-systems" className="btn btn-secondary mt-4">Safety Systems</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Food Processing Applications */}
      <section className="section" style={{backgroundColor: 'var(--gray-100)'}}>
        <div className="container">
          <div className="section-header">
            <h2>Food Processing Applications</h2>
          </div>
          <div className="grid grid-cols-3">
            <div className="card text-center">
              <FaIndustry className="card-icon" />
              <h4>Beverage Processing</h4>
              <p>Juice processing, wine production, carbonation systems, filtration</p>
            </div>
            <div className="card text-center">
              <FaLeaf className="card-icon" />
              <h4>Agricultural Processing</h4>
              <p>Fruit and vegetable processing, dehydration, packaging systems</p>
            </div>
            <div className="card text-center">
              <FaCheckCircle className="card-icon" />
              <h4>Quality Control</h4>
              <p>Testing laboratories, quality monitoring, product validation</p>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance & Standards */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>Compliance & Standards</h2>
          </div>
          <div className="grid grid-cols-2">
            <div className="card">
              <h4>New Zealand Standards</h4>
              <ul>
                <li>• Food Act 2014 compliance</li>
                <li>• RMP (Risk Management Programme)</li>
                <li>• MPI food safety requirements</li>
                <li>• Export certification support</li>
              </ul>
            </div>
            <div className="card">
              <h4>International Standards</h4>
              <ul>
                <li>• HACCP certification</li>
                <li>• ISO 22000 food safety</li>
                <li>• BRC Global Standards</li>
                <li>• SQF quality systems</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section" style={{backgroundColor: 'var(--gray-100)'}}>
        <div className="container text-center">
          <h2>Enhance Your Food Processing Operations</h2>
          <p className="text-xl mb-8">
            Get expert engineering support for your food and dairy processing needs
          </p>
          <Link to="/contact" className="btn btn-primary">
            Get Consultation
          </Link>
        </div>
      </section>
    </div>
  );
};

export default FoodProcessingPage;