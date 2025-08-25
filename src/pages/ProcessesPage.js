import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FaFlask, 
  FaCogs, 
  FaWater, 
  FaIndustry, 
  FaThermometerHalf,
  FaFilter,
  FaTint,
  FaLeaf,
  FaArrowRight
} from 'react-icons/fa';

const ProcessesPage = () => {
  const processCategories = [
    {
      icon: <FaFlask />,
      title: "Chemical Processes",
      description: "Core chemical engineering unit operations for reaction and conversion",
      processes: [
        { name: "Chemical Reactors", path: "/reactor", description: "Batch and continuous reactor design" },
        { name: "Distillation Columns", path: "/distillation", description: "Separation by boiling point differences" },
        { name: "Extraction Units", path: "/extraction", description: "Liquid-liquid separation processes" },
        { name: "Reaction Systems", path: "/reaction", description: "Advanced reaction engineering" }
      ]
    },
    {
      icon: <FaThermometerHalf />,
      title: "Heat Transfer Equipment",
      description: "Thermal processing and heat recovery systems",
      processes: [
        { name: "Heat Exchangers", path: "/heat-exchanger", description: "Shell & tube, plate, and air-cooled designs" }
      ]
    },
    {
      icon: <FaFilter />,
      title: "Physical Separation",
      description: "Mechanical separation of phases and components",
      processes: [
        { name: "Separators", path: "/separator", description: "Gravity, centrifugal, and cyclone separation" }
      ]
    },
    {
      icon: <FaWater />,
      title: "Biological Treatment",
      description: "Advanced biological wastewater treatment systems",
      processes: [
        { name: "Activated Sludge", path: "/activated-sludge", description: "Conventional and extended aeration systems" },
        { name: "Biofilm Reactors", path: "/biofilm-reactors", description: "Fixed film biological treatment" },
        { name: "Anaerobic Digestion", path: "/anaerobic-digestion", description: "Biogas production and organic waste treatment" },
        { name: "Constructed Wetlands", path: "/constructed-wetlands", description: "Natural biological treatment systems" },
        { name: "Membrane Bioreactors", path: "/membrane-bioreactors", description: "Combined biological treatment and membrane separation" },
        { name: "Trickling Filters", path: "/trickling-filters", description: "Traditional fixed-film biological treatment" }
      ]
    },
    {
      icon: <FaTint />,
      title: "Chemical Treatment",
      description: "Chemical treatment processes for water and wastewater",
      processes: [
        { name: "Coagulation & Flocculation", path: "/coagulation-flocculation", description: "Chemical precipitation and settling" },
        { name: "Chemical Precipitation", path: "/chemical-precipitation", description: "Metal removal and phosphorus precipitation" },
        { name: "Ion Exchange", path: "/ion-exchange", description: "Selective removal of ionic species" },
        { name: "Advanced Oxidation", path: "/advanced-oxidation", description: "Chemical oxidation for contaminant destruction" },
        { name: "Electrochemical Treatment", path: "/electrochemical-treatment", description: "Electrical treatment processes" },
        { name: "pH Adjustment", path: "/ph-adjustment", description: "Chemical pH control and neutralization" }
      ]
    },
    {
      icon: <FaIndustry />,
      title: "Food Engineering",
      description: "Specialized processes for food and agricultural industries",
      processes: [
        { name: "Dairy Processing", path: "/dairy-processing", description: "Milk processing and powder production" },
        { name: "Meat Processing", path: "/meat-processing", description: "Meat safety and processing systems" },
        { name: "Wine & Beverage", path: "/wine-beverage", description: "Fermentation and beverage production" },
        { name: "Seafood Processing", path: "/seafood-processing", description: "Marine product processing" },
        { name: "Kiwifruit Processing", path: "/kiwifruit-processing", description: "Fruit processing and preservation" },
        { name: "Honey Processing", path: "/honey-processing", description: "Honey extraction and processing" },
        { name: "Food Safety Systems", path: "/food-safety-systems", description: "HACCP and quality assurance" }
      ]
    }
  ];

  return (
    <div>
      {/* Page Header */}
      <section className="hero" style={{padding: 'var(--space-16) 0'}}>
        <div className="container">
          <div className="hero-content">
            <h1>Engineering Processes & Technologies</h1>
            <p className="description">
              Comprehensive engineering solutions across chemical, biological, and food processing 
              industries. Our expertise covers the full spectrum of unit operations and process 
              systems for New Zealand's diverse industrial landscape.
            </p>
          </div>
        </div>
      </section>

      {/* Process Categories */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Process Categories</h2>
            <p className="section-description">
              Explore our comprehensive range of engineering processes and unit operations
            </p>
          </div>

          {processCategories.map((category, index) => (
            <div key={index} className="mb-12">
              <div className="flex items-center gap-4 mb-6">
                <div className="card-icon" style={{fontSize: '2rem', color: 'var(--primary-green)'}}>
                  {category.icon}
                </div>
                <div>
                  <h3 className="section-title" style={{margin: 0}}>{category.title}</h3>
                  <p className="text-gray-600">{category.description}</p>
                </div>
              </div>

              <div className="grid grid-cols-2" style={{gap: 'var(--space-6)'}}>
                {category.processes.map((process, idx) => (
                  <Link key={idx} to={process.path} className="card hover-card" style={{textDecoration: 'none', color: 'inherit'}}>
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 style={{color: 'var(--primary-blue)', margin: 0, marginBottom: 'var(--space-2)'}}>{process.name}</h4>
                        <p style={{margin: 0, fontSize: '0.9rem', color: 'var(--gray-600)'}}>{process.description}</p>
                      </div>
                      <FaArrowRight style={{color: 'var(--accent-teal)', fontSize: '1.2rem'}} />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Sustainability & Efficiency Focus */}
      <section className="section" style={{backgroundColor: 'var(--primary-green)', color: 'var(--white)'}}>
        <div className="container">
          <div className="section-header">
            <h2 className="section-title" style={{color: 'var(--white)'}}>Sustainability & Operational Excellence</h2>
            <p className="section-description" style={{color: 'rgba(255, 255, 255, 0.9)'}}>
              Our engineering solutions prioritize environmental responsibility and operational efficiency, 
              helping New Zealand industries achieve carbon neutrality while maximizing performance
            </p>
          </div>
          
          <div className="grid grid-cols-3">
            <div className="card" style={{backgroundColor: 'rgba(255, 255, 255, 0.1)', border: '1px solid rgba(255, 255, 255, 0.2)'}}>
              <FaLeaf className="card-icon" style={{color: 'var(--white)'}} />
              <h3 style={{color: 'var(--white)'}}>Carbon Emissions Reduction</h3>
              <ul style={{color: 'rgba(255, 255, 255, 0.9)'}}>
                <li>• Energy recovery systems design</li>
                <li>• Process heat integration studies</li>
                <li>• Carbon footprint assessment</li>
                <li>• Renewable energy integration</li>
                <li>• Waste-to-energy solutions</li>
                <li>• Green technology implementation</li>
              </ul>
            </div>

            <div className="card" style={{backgroundColor: 'rgba(255, 255, 255, 0.1)', border: '1px solid rgba(255, 255, 255, 0.2)'}}>
              <FaCogs className="card-icon" style={{color: 'var(--white)'}} />
              <h3 style={{color: 'var(--white)'}}>Operational Efficiency</h3>
              <ul style={{color: 'rgba(255, 255, 255, 0.9)'}}>
                <li>• Process optimization & debottlenecking</li>
                <li>• Energy efficiency audits</li>
                <li>• Yield maximization strategies</li>
                <li>• Predictive maintenance systems</li>
                <li>• Automation & digital transformation</li>
                <li>• Lean manufacturing principles</li>
              </ul>
            </div>

            <div className="card" style={{backgroundColor: 'rgba(255, 255, 255, 0.1)', border: '1px solid rgba(255, 255, 255, 0.2)'}}>
              <FaIndustry className="card-icon" style={{color: 'var(--white)'}} />
              <h3 style={{color: 'var(--white)'}}>Resource Optimization</h3>
              <ul style={{color: 'rgba(255, 255, 255, 0.9)'}}>
                <li>• Water recycling & reuse systems</li>
                <li>• Waste minimization programs</li>
                <li>• Raw material efficiency</li>
                <li>• Circular economy solutions</li>
                <li>• By-product valorization</li>
                <li>• Supply chain optimization</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Key Performance Metrics */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Measurable Impact</h2>
            <p className="section-description">
              Our engineering solutions deliver quantifiable improvements in sustainability and efficiency
            </p>
          </div>
          
          <div className="grid grid-cols-4">
            <div className="card text-center">
              <div style={{fontSize: '3rem', color: 'var(--primary-green)', fontWeight: 'bold', marginBottom: 'var(--space-2)'}}>15-40%</div>
              <h4>Energy Reduction</h4>
              <p>Through process optimization and heat recovery systems</p>
            </div>
            
            <div className="card text-center">
              <div style={{fontSize: '3rem', color: 'var(--primary-green)', fontWeight: 'bold', marginBottom: 'var(--space-2)'}}>20-60%</div>
              <h4>Carbon Footprint</h4>
              <p>Reduction through efficiency improvements and clean technology</p>
            </div>
            
            <div className="card text-center">
              <div style={{fontSize: '3rem', color: 'var(--primary-green)', fontWeight: 'bold', marginBottom: 'var(--space-2)'}}>10-30%</div>
              <h4>Operating Costs</h4>
              <p>Savings from enhanced efficiency and waste reduction</p>
            </div>
            
            <div className="card text-center">
              <div style={{fontSize: '3rem', color: 'var(--primary-green)', fontWeight: 'bold', marginBottom: 'var(--space-2)'}}>25-70%</div>
              <h4>Water Usage</h4>
              <p>Reduction through recycling and advanced treatment</p>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="section" style={{backgroundColor: 'var(--gray-100)'}}>
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Advanced Engineering Services</h2>
          </div>
          
          <div className="grid grid-cols-3">
            <Link to="/qmra-analysis" className="card text-center hover-card" style={{textDecoration: 'none', color: 'inherit'}}>
              <FaLeaf className="card-icon" />
              <h3>QMRA Analysis</h3>
              <p>Quantitative microbial risk assessment for public health protection and regulatory compliance</p>
            </Link>

            <Link to="/machine-learning" className="card text-center hover-card" style={{textDecoration: 'none', color: 'inherit'}}>
              <FaCogs className="card-icon" />
              <h3>Machine Learning & AI</h3>
              <p>AI-powered process optimization, predictive analytics, and intelligent automation systems</p>
            </Link>

            <Link to="/mechanistic-analysis" className="card text-center hover-card" style={{textDecoration: 'none', color: 'inherit'}}>
              <FaFlask className="card-icon" />
              <h3>Mechanistic Analysis</h3>
              <p>Fundamental process modeling, kinetic studies, and mechanistic understanding development</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section" style={{background: 'linear-gradient(135deg, var(--primary-blue) 0%, var(--accent-teal) 100%)', color: 'var(--white)'}}>
        <div className="container">
          <div className="text-center">
            <h2 style={{color: 'var(--white)', marginBottom: 'var(--space-4)'}}>Ready to Optimize Your Operations?</h2>
            <p style={{fontSize: '1.25rem', color: 'rgba(255, 255, 255, 0.9)', marginBottom: 'var(--space-6)', maxWidth: '600px', margin: '0 auto var(--space-6)'}}>
              Let our engineering experts help you achieve significant improvements in efficiency, 
              sustainability, and operational performance while reducing your environmental impact.
            </p>
            <div className="flex justify-center gap-4">
              <Link to="/contact" className="btn btn-secondary">
                Start Your Project <FaArrowRight />
              </Link>
              <Link to="/services" className="btn" style={{background: 'rgba(255, 255, 255, 0.2)', color: 'var(--white)', border: '2px solid rgba(255, 255, 255, 0.3)'}}>
                View All Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProcessesPage;
