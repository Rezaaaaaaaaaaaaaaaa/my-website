import React from 'react';
import { Link } from 'react-router-dom';

// Import service icons
import { ReactComponent as WastewaterIcon } from '../assets/icons/wastewater-treatment.svg';
import { ReactComponent as ReticulationIcon } from '../assets/icons/water-reticulation.svg';
import { ReactComponent as CatchmentIcon } from '../assets/icons/catchment-modeling.svg';
import { ReactComponent as ProcessIcon } from '../assets/icons/process-optimization.svg';
import { ReactComponent as BioprocessIcon } from '../assets/icons/bioprocess-engineering.svg';

// Import diagrams
import { ReactComponent as WastewaterDiagram } from '../assets/diagrams/wastewater-treatment-process.svg';
import { ReactComponent as CatchmentDiagram } from '../assets/diagrams/catchment-modeling-approach.svg';
import { ReactComponent as ProcessDiagram } from '../assets/diagrams/process-optimization-methodology.svg';

const ServicesPage = () => {
  return (
    <div className="services-page">
      <section className="page-header">
        <div className="page-header-content">
          <h1>Consultancy Services</h1>
          <p>Comprehensive environmental engineering solutions backed by research and practical experience</p>
        </div>
      </section>

      <div className="services-container">
        {/* Wastewater Treatment Section */}
        <section className="service-category">
          <h2>Wastewater Treatment Design & Optimization</h2>
          
          <div className="service-grid">
            <div className="service-card">
              <div className="service-icon-container">
                <WastewaterIcon className="service-icon" />
              </div>
              <h3>Municipal Wastewater Treatment</h3>
              <p>Comprehensive design and optimization services for municipal wastewater treatment facilities, focusing on efficiency, compliance, and sustainability.</p>
              
              <h4>Aerobic Treatment Systems</h4>
              <ul>
                <li><strong>Activated Sludge Process (ASP):</strong> Design and optimization of conventional and modified ASP systems for efficient organic matter and nutrient removal.</li>
                <li><strong>Sequencing Batch Reactors (SBR):</strong> Time-oriented systems that combine all treatment processes in a single tank, ideal for space constraints and variable flow conditions.</li>
                <li><strong>Moving Bed Biofilm Reactors (MBBR):</strong> High-efficiency systems using biofilm carriers to maximize treatment capacity while minimizing footprint.</li>
                <li><strong>Membrane Bioreactors (MBR):</strong> Advanced systems combining membrane filtration with biological treatment for superior effluent quality and water reuse applications.</li>
              </ul>
              
              <h4>Anaerobic Treatment Systems</h4>
              <ul>
                <li><strong>Upflow Anaerobic Sludge Blanket (UASB):</strong> Energy-efficient treatment for high-strength wastewater with biogas recovery potential.</li>
                <li><strong>Anaerobic Baffled Reactors (ABR):</strong> Robust systems with multiple compartments for staged treatment, suitable for decentralized applications.</li>
                <li><strong>Expanded Granular Sludge Bed (EGSB):</strong> High-rate systems for improved contact between wastewater and granular biomass.</li>
                <li><strong>Anaerobic Membrane Bioreactors (AnMBR):</strong> Cutting-edge technology combining anaerobic digestion with membrane filtration for resource recovery.</li>
              </ul>
            </div>
            
            <div className="service-card">
              <div className="service-icon-container">
                <BioprocessIcon className="service-icon" />
              </div>
              <h3>Agricultural Wastewater Treatment</h3>
              <p>Specialized solutions for agricultural wastewater focusing on nutrient recovery, contaminant removal, and regulatory compliance.</p>
              
              <h4>Nutrient Removal Systems</h4>
              <ul>
                <li><strong>Denitrifying Bioreactors:</strong> Woodchip-based systems enhanced with carbon dosing for optimal nitrate removal from agricultural drainage.</li>
                <li><strong>Constructed Wetlands:</strong> Natural treatment systems designed to remove nutrients and sediments through biological and physical processes.</li>
                <li><strong>Phosphorus Precipitation Systems:</strong> Chemical treatment systems designed specifically for phosphorus removal and recovery.</li>
              </ul>
              
              <h4>Livestock Waste Management</h4>
              <ul>
                <li><strong>Anaerobic Digesters:</strong> Biogas-producing systems for treating high-strength livestock wastewater while generating renewable energy.</li>
                <li><strong>Solid-Liquid Separation:</strong> Pre-treatment systems to improve downstream treatment efficiency and enable resource recovery.</li>
                <li><strong>Nutrient Recovery Systems:</strong> Specialized processes for extracting and concentrating nutrients for reuse as fertilizers.</li>
              </ul>
              
              <p>All agricultural systems are designed for compliance with New Zealand's National Environmental Standards for Freshwater (NES-F) and regional regulations.</p>
            </div>
          </div>
          
          <div className="diagram-container">
            <h3>Municipal Wastewater Treatment Process</h3>
            <WastewaterDiagram />
          </div>
        </section>
        
        {/* Water and Wastewater Reticulation */}
        <section className="service-category">
          <h2>Water & Wastewater Reticulation Design</h2>
          
          <div className="full-width-service">
            <div className="service-icon-container">
              <ReticulationIcon className="service-icon" />
            </div>
            <h3>Comprehensive Reticulation Network Design</h3>
            <p>Expert design services for water distribution and wastewater collection systems, from small-scale developments to municipal networks.</p>
            
            <div className="process-steps">
              <div className="process-step">
                <span className="step-number">1</span>
                <h4>Demand Analysis & Hydraulic Modeling</h4>
                <p>Detailed assessment of water demand patterns and wastewater generation rates using advanced modeling tools to ensure properly sized infrastructure.</p>
              </div>
              
              <div className="process-step">
                <span className="step-number">2</span>
                <h4>Network Configuration & Component Design</h4>
                <p>Optimal layout design including pipe sizing, pump station design, pressure management, and materials selection for maximum efficiency and longevity.</p>
              </div>
              
              <div className="process-step">
                <span className="step-number">3</span>
                <h4>Resilience & Redundancy Planning</h4>
                <p>Strategic implementation of system redundancies, emergency storage, and failure management to ensure continuous service during disruptions.</p>
              </div>
            </div>
            
            <h4>Services Include:</h4>
            <ul>
              <li>Gravity and pressure sewer system design</li>
              <li>Water distribution network optimization</li>
              <li>Pump station design and optimization</li>
              <li>Telemetry and SCADA system integration</li>
              <li>Maintenance planning and asset management</li>
              <li>Retrofitting and upgrading existing systems</li>
              <li>Compliance with local and national regulations</li>
            </ul>
          </div>
        </section>
        
        {/* Catchment Modeling Section */}
        <section className="service-category">
          <h2>Catchment & Water Resource Modeling</h2>
          
          <div className="service-grid">
            <div className="service-card">
              <div className="service-icon-container">
                <CatchmentIcon className="service-icon" />
              </div>
              <h3>Surface Water Modeling</h3>
              <p>Comprehensive modeling services for surface water systems including rivers, streams, lakes, and constructed waterways.</p>
              
              <h4>Hydrological Modeling</h4>
              <ul>
                <li>Flood prediction and mitigation planning</li>
                <li>Stormwater management system design</li>
                <li>Climate change impact assessment</li>
                <li>Rainfall-runoff modeling</li>
              </ul>
              
              <h4>Water Quality Modeling</h4>
              <ul>
                <li>Contaminant transport and fate analysis</li>
                <li>Nutrient loading assessment</li>
                <li>Sediment transport modeling</li>
                <li>Temperature and dissolved oxygen modeling</li>
              </ul>
              
              <p>Models are developed using industry-standard software including HEC-RAS, SWMM, MIKE SHE, and custom Python/R implementations.</p>
            </div>
            
            <div className="service-card">
              <div className="service-icon-container">
                <CatchmentIcon className="service-icon" />
              </div>
              <h3>Groundwater Modeling</h3>
              <p>Specialized groundwater modeling services for resource management, contamination assessment, and remediation planning.</p>
              
              <h4>Quantity Modeling</h4>
              <ul>
                <li>Aquifer characterization and yield assessment</li>
                <li>Wellfield design and optimization</li>
                <li>Sustainable extraction rate determination</li>
                <li>Groundwater-surface water interaction analysis</li>
              </ul>
              
              <h4>Quality Modeling</h4>
              <ul>
                <li>Contaminant plume delineation and migration prediction</li>
                <li>Nitrate leaching assessment in agricultural settings</li>
                <li>Remediation strategy modeling and optimization</li>
                <li>Saltwater intrusion risk assessment for coastal aquifers</li>
              </ul>
              
              <p>Models are developed using MODFLOW, FEFLOW, and custom numerical solutions tailored to specific project requirements.</p>
            </div>
            
            <div className="service-card">
              <div className="service-icon-container">
                <CatchmentIcon className="service-icon" />
              </div>
              <h3>Integrated Catchment Management</h3>
              <p>Holistic approaches to managing water resources at the catchment scale, balancing environmental, economic, and social objectives.</p>
              
              <h4>Services Include:</h4>
              <ul>
                <li>Catchment-scale water balance modeling</li>
                <li>Land use impact assessment</li>
                <li>Best Management Practice (BMP) placement optimization</li>
                <li>Stakeholder engagement and collaborative decision support</li>
                <li>Climate change resilience planning</li>
                <li>Regulatory compliance strategies</li>
              </ul>
              
              <p>Our integrated modeling approaches help clients navigate complex regulatory frameworks while achieving sustainable water resource management goals.</p>
            </div>
          </div>
          
          <div className="diagram-container">
            <h3>Integrated Catchment Modeling Approach</h3>
            <CatchmentDiagram />
          </div>
        </section>
        
        {/* Chemical and Food Processing Section */}
        <section className="service-category">
          <h2>Chemical & Food Processing Optimization</h2>
          
          <div className="service-grid">
            <div className="service-card">
              <div className="service-icon-container">
                <ProcessIcon className="service-icon" />
              </div>
              <h3>Process Modeling & Simulation</h3>
              <p>Advanced modeling and simulation services for chemical and food processing operations to improve efficiency, product quality, and sustainability.</p>
              
              <h4>Modeling Approaches:</h4>
              <ul>
                <li><strong>First-Principles Modeling:</strong> Rigorous models based on fundamental physical and chemical principles for accurate process representation.</li>
                <li><strong>Statistical Process Control:</strong> Data-driven approaches for identifying critical process parameters and optimizing control strategies.</li>
                <li><strong>Machine Learning Applications:</strong> Advanced predictive models for complex processes where traditional modeling approaches are insufficient.</li>
                <li><strong>Hybrid Modeling:</strong> Combined approaches leveraging both mechanistic understanding and empirical data.</li>
              </ul>
            </div>
            
            <div className="service-card">
              <div className="service-icon-container">
                <ProcessIcon className="service-icon" />
              </div>
              <h3>Process Optimization</h3>
              <p>Systematic optimization of processing operations to enhance efficiency, reduce costs, and improve sustainability metrics.</p>
              
              <h4>Optimization Services:</h4>
              <ul>
                <li><strong>Energy Efficiency Optimization:</strong> Identifying opportunities for energy recovery, heat integration, and reduced utility consumption.</li>
                <li><strong>Water Use Minimization:</strong> Process integration techniques to reduce freshwater consumption and wastewater generation.</li>
                <li><strong>Yield Improvement:</strong> Optimizing process conditions to maximize product yield and quality while minimizing waste.</li>
                <li><strong>Throughput Enhancement:</strong> Identifying and resolving bottlenecks to improve overall process capacity.</li>
                <li><strong>Multi-objective Optimization:</strong> Balancing competing objectives like cost, quality, environmental impact, and operational flexibility.</li>
              </ul>
            </div>
            
            <div className="service-card">
              <div className="service-icon-container">
                <BioprocessIcon className="service-icon" />
              </div>
              <h3>Bioprocess Engineering</h3>
              <p>Specialized services for biological processes in food, pharmaceutical, and biofuel applications.</p>
              
              <h4>Bioprocess Services:</h4>
              <ul>
                <li><strong>Fermentation Optimization:</strong> Improving yield, productivity, and consistency in microbial fermentation processes.</li>
                <li><strong>Bioreactor Design & Scale-up:</strong> From laboratory to production scale with maintained performance characteristics.</li>
                <li><strong>Downstream Processing:</strong> Optimization of separation, purification, and product recovery operations.</li>
                <li><strong>Bioethanol Production:</strong> Process design and optimization for fuel ethanol from various feedstocks.</li>
                <li><strong>Enzyme Production & Application:</strong> Optimizing enzymatic processes for food and industrial applications.</li>
              </ul>
            </div>
          </div>
          
          <div className="diagram-container">
            <h3>Process Optimization Methodology</h3>
            <ProcessDiagram />
          </div>
        </section>
        
        {/* Call to Action */}
        <section className="contact-cta">
          <div className="contact-cta-content">
            <h2>Ready to Discuss Your Project?</h2>
            <p>Whether you're looking to optimize an existing system or design something new, I'm here to help with innovative, sustainable solutions tailored to your specific needs.</p>
            <Link to="/contact" className="btn primary-btn">Contact for Consultation</Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ServicesPage;
