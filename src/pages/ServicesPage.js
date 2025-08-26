import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FaFlask, 
  FaCogs, 
  FaWater, 
  FaIndustry, 
  FaLeaf, 
  FaChartLine,
  FaTools,
  FaShieldAlt
} from 'react-icons/fa';

const ServicesPage = () => {
  const services = [
    {
      icon: <FaFlask />,
      title: "Chemical Process Engineering",
      description: "Comprehensive chemical engineering solutions for industrial processes",
      details: [
        "Process design and optimization",
        "Heat and mass transfer analysis", 
        "Reaction engineering",
        "Separation processes",
        "Process safety and risk assessment",
        "Equipment sizing and selection"
      ]
    },
    {
      icon: <FaCogs />,
      title: "Bioprocess Engineering", 
      description: "Specialized biotechnology and biological process solutions",
      details: [
        "Bioreactor design and scale-up",
        "Fermentation process optimization",
        "Downstream processing",
        "Cell culture systems",
        "Bioprocess monitoring and control",
        "Validation and regulatory compliance"
      ]
    },
    {
      icon: <FaWater />,
      title: "Water & Marine Treatment",
      description: "Advanced water treatment solutions for New Zealand's pristine environment",
      details: [
        "Water treatment system design",
        "Wastewater treatment optimization",
        "Marine and aquaculture systems",
        "Biological treatment processes",
        "Water quality monitoring",
        "Environmental compliance support"
      ]
    },
    {
      icon: <FaIndustry />,
      title: "Food Process Engineering",
      description: "Specialized solutions for New Zealand's world-class food industry",
      details: [
        "Dairy processing optimization",
        "Meat and seafood processing",
        "Food safety and HACCP implementation",
        "Quality control systems",
        "Sustainable packaging solutions",
        "Export compliance and certification"
      ]
    },
    {
      icon: <FaLeaf />,
      title: "Environmental Consulting",
      description: "Protecting New Zealand's clean, green reputation through sustainable engineering",
      details: [
        "Environmental impact assessments",
        "Resource consent applications",
        "Waste minimization programs",
        "Carbon footprint reduction",
        "Biodiversity protection strategies",
        "Clean technology implementation"
      ]
    },
    {
      icon: <FaChartLine />,
      title: "Process Optimization",
      description: "Data-driven process improvement and efficiency enhancement",
      details: [
        "Process analysis and modeling",
        "Energy efficiency improvements",
        "Yield optimization",
        "Cost reduction strategies",
        "Debottlenecking studies",
        "Performance monitoring systems"
      ]
    }
  ];

  return (
    <div>
      {/* Page Header */}
      <section className="hero" style={{padding: 'var(--space-16) 0'}}>
        <div className="container">
          <div className="hero-content">
            <h1>Our Engineering Services</h1>
            <p className="description">
              Comprehensive engineering solutions designed specifically for New Zealand industries, 
              optimizing processes while maintaining our commitment to environmental stewardship 
              and sustainable operations across diverse sectors.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="equipment" className="section">
        <div className="container">
          <div className="section-header">
            <h2>Process Equipment & Engineering Services</h2>
            <p className="section-description">
              Core engineering solutions for industrial processes and equipment
            </p>
          </div>
          <div className="grid grid-auto">
            {services.slice(0, 2).map((service, index) => (
              <div key={index} className="card">
                <div className="card-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <ul>
                  {service.details.map((detail, idx) => (
                    <li key={idx} className="mb-2 text-gray-600">• {detail}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Treatment Systems Section */}
      <section id="treatment" className="section" style={{backgroundColor: 'var(--gray-100)'}}>
        <div className="container">
          <div className="section-header">
            <h2>Treatment Systems & Environmental Solutions</h2>
            <p className="section-description">
              Specialized solutions for water treatment and environmental protection
            </p>
          </div>
          <div className="grid grid-auto">
            {services.slice(2, 3).map((service, index) => (
              <div key={index} className="card">
                <div className="card-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <ul>
                  {service.details.map((detail, idx) => (
                    <li key={idx} className="mb-2 text-gray-600">• {detail}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Analysis & Optimization Section */}
      <section id="analysis" className="section">
        <div className="container">
          <div className="section-header">
            <h2>Analysis Services & Process Optimization</h2>
            <p className="section-description">
              Data-driven solutions for process improvement and efficiency
            </p>
          </div>
          <div className="grid grid-auto">
            {services.slice(4, 6).map((service, index) => (
              <div key={index} className="card">
                <div className="card-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <ul>
                  {service.details.map((detail, idx) => (
                    <li key={idx} className="mb-2 text-gray-600">• {detail}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Food Engineering Section */}
      <section id="food" className="section" style={{backgroundColor: 'var(--gray-100)'}}>
        <div className="container">
          <div className="section-header">
            <h2>Food Engineering & Processing</h2>
            <p className="section-description">
              Specialized solutions for New Zealand's world-class food industry
            </p>
          </div>
          <div className="grid grid-auto">
            {services.slice(3, 4).map((service, index) => (
              <div key={index} className="card">
                <div className="card-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <ul>
                  {service.details.map((detail, idx) => (
                    <li key={idx} className="mb-2 text-gray-600">• {detail}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Unit Technologies */}
      <section className="section" style={{backgroundColor: 'var(--gray-100)'}}>
        <div className="container">
          <div className="section-header">
            <h2>Process Unit Technologies</h2>
            <p className="section-description">
              Comprehensive range of process units and technologies for diverse applications
            </p>
          </div>
          
          <div className="grid grid-cols-3">
            <div className="card text-center">
              <FaWater className="card-icon" />
              <h4>Water Treatment Systems</h4>
              <p>Filtration, RO, UF, UV disinfection, and ion exchange technologies</p>
              <Link to="/filtration" className="btn btn-secondary">Explore Water Treatment</Link>
            </div>
            
            <div className="card text-center">
              <FaCogs className="card-icon" />
              <h4>Separation Processes</h4>
              <p>Distillation, crystallization, extraction, and advanced separation</p>
              <Link to="/distillation" className="btn btn-secondary">Explore Separations</Link>
            </div>
            
            <div className="card text-center">
              <FaLeaf className="card-icon" />
              <h4>Biological Systems</h4>
              <p>Bioreactors, MBR systems, and sustainable bioprocessing</p>
              <Link to="/bioreactor" className="btn btn-secondary">Explore Bioprocesses</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Process Approach */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>Our Engineering Approach</h2>
            <p className="section-description">
              Systematic methodology ensuring successful project delivery
            </p>
          </div>
          
          <div className="grid grid-cols-4">
            <div className="card text-center">
              <FaChartLine className="card-icon" />
              <h4>1. Analysis</h4>
              <p>Comprehensive assessment of current processes and requirements</p>
            </div>
            
            <div className="card text-center">
              <FaTools className="card-icon" />
              <h4>2. Design</h4>
              <p>Custom engineering solutions tailored to specific needs</p>
            </div>
            
            <div className="card text-center">
              <FaCogs className="card-icon" />
              <h4>3. Implementation</h4>
              <p>Professional project management and system deployment</p>
            </div>
            
            <div className="card text-center">
              <FaShieldAlt className="card-icon" />
              <h4>4. Support</h4>
              <p>Ongoing optimization and maintenance support</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;