import React from 'react';
import { Link } from 'react-router-dom';
import { FaFlask, FaCogs, FaFire, FaWater, FaArrowRight } from 'react-icons/fa';

const ProcessesPage = () => (
  <div>
    {/* Header */}
    <section className="hero" style={{padding: 'var(--space-16) 0'}}>
      <div className="container">
        <div className="hero-content">
          <h1>Process Unit Technologies</h1>
          <p className="description">
            Explore our comprehensive range of process equipment and unit operations
          </p>
        </div>
      </div>
    </section>

    {/* Process Categories */}
    <section className="section">
      <div className="container">
        <div className="grid grid-cols-2">
          <div className="card">
            <FaFlask className="card-icon" />
            <h3>Chemical Processes</h3>
            <p>Reaction and chemical transformation equipment</p>
            <ul className="mb-4">
              <li>• <Link to="/reactor">Chemical Reactors</Link></li>
              <li>• <Link to="/distillation">Distillation Columns</Link></li>
              <li>• Crystallization Systems</li>
              <li>• Extraction Units</li>
            </ul>
            <Link to="/process-engineering" className="btn btn-secondary">
              View Chemical Engineering <FaArrowRight />
            </Link>
          </div>

          <div className="card">
            <FaCogs className="card-icon" />
            <h3>Physical Separation</h3>
            <p>Mechanical separation and processing equipment</p>
            <ul className="mb-4">
              <li>• <Link to="/separator">Phase Separators</Link></li>
              <li>• <Link to="/filtration">Filtration Systems</Link></li>
              <li>• Centrifuges</li>
              <li>• Screening Equipment</li>
            </ul>
            <Link to="/water-treatment-services" className="btn btn-secondary">
              View Water Treatment <FaArrowRight />
            </Link>
          </div>

          <div className="card">
            <FaFire className="card-icon" />
            <h3>Heat Transfer Equipment</h3>
            <p>Thermal processing and heat exchange systems</p>
            <ul className="mb-4">
              <li>• <Link to="/heat-exchanger">Heat Exchangers</Link></li>
              <li>• Evaporators</li>
              <li>• Condensers</li>
              <li>• Thermal Processing</li>
            </ul>
            <Link to="/process-engineering" className="btn btn-secondary">
              Learn More <FaArrowRight />
            </Link>
          </div>

          <div className="card">
            <FaWater className="card-icon" />
            <h3>Biological Treatment</h3>
            <p>Bioprocessing and biological treatment systems</p>
            <ul className="mb-4">
              <li>• <Link to="/bioreactor">Bioreactors</Link></li>
              <li>• <Link to="/membrane-bioreactor">MBR Systems</Link></li>
              <li>• Activated Sludge Systems</li>
              <li>• Anaerobic Digesters</li>
            </ul>
            <Link to="/water-treatment-services" className="btn btn-secondary">
              Biological Systems <FaArrowRight />
            </Link>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default ProcessesPage;
