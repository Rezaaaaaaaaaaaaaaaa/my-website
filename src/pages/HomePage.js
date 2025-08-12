import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FaFlask, 
  FaCogs, 
  FaLeaf, 
  FaIndustry, 
  FaWater, 
  FaChartLine,
  FaArrowRight,
  FaCheckCircle
} from 'react-icons/fa';

const HomePage = () => {
  const services = [
    {
      icon: <FaFlask />,
      title: "Chemical Process Engineering",
      description: "Advanced process design, optimization, and troubleshooting for chemical manufacturing and production facilities.",
      features: ["Process Design", "Scale-up", "Optimization", "Safety Analysis"]
    },
    {
      icon: <FaCogs />,
      title: "Bioprocess Engineering",
      description: "Specialized engineering solutions for biotechnology, fermentation, and biological treatment systems.",
      features: ["Bioreactor Design", "Fermentation", "Downstream Processing", "Quality Control"]
    },
    {
      icon: <FaWater />,
      title: "Environmental Solutions",
      description: "Sustainable environmental engineering focusing on water treatment, waste management, and pollution control.",
      features: ["Water Treatment", "Waste Management", "Pollution Control", "Compliance"]
    },
    {
      icon: <FaIndustry />,
      title: "Food Engineering",
      description: "Comprehensive food processing solutions ensuring quality, safety, and efficiency in food production.",
      features: ["Process Design", "Food Safety", "Quality Systems", "Equipment Selection"]
    }
  ];

  const industries = [
    "Food & Beverage Processing",
    "Water Treatment Facilities", 
    "Chemical Manufacturing",
    "Biotechnology & Pharmaceuticals",
    "Agricultural Technology",
    "Research & Development"
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>AquaTech Solutions NZ</h1>
            <p className="subtitle">Environmental Engineering Excellence</p>
            <p className="description">
              Leading New Zealand consultancy specializing in chemical processes, 
              bioprocess engineering, and sustainable solutions for industry and research.
            </p>
            <div className="flex justify-center gap-4 mt-8">
              <Link to="/services" className="btn btn-primary">
                Our Services <FaArrowRight />
              </Link>
              <Link to="/contact" className="btn btn-secondary">
                Get Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Core Engineering Services</h2>
            <p className="section-description">
              Comprehensive engineering solutions tailored for New Zealand's industrial and environmental challenges
            </p>
          </div>
          
          <div className="grid grid-auto">
            {services.map((service, index) => (
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
                <Link to="/services" className="btn btn-secondary">
                  Learn More
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="section" style={{backgroundColor: 'var(--white)'}}>
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Industries We Serve</h2>
            <p className="section-description">
              Delivering specialized engineering solutions across diverse sectors
            </p>
          </div>
          
          <div className="grid grid-cols-2">
            {industries.map((industry, index) => (
              <div key={index} className="flex items-center gap-3 mb-4">
                <FaIndustry style={{color: 'var(--accent-teal)', fontSize: '1.5rem'}} />
                <span className="text-lg font-medium">{industry}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Why Choose AquaTech Solutions NZ?</h2>
          </div>
          
          <div className="grid grid-cols-3">
            <div className="card text-center">
              <FaChartLine className="card-icon" />
              <h3>Proven Expertise</h3>
              <p>Deep technical knowledge in chemical and bioprocess engineering with years of industry experience.</p>
            </div>
            
            <div className="card text-center">
              <FaLeaf className="card-icon" />
              <h3>Sustainable Solutions</h3>
              <p>Environmentally conscious engineering that balances performance with sustainability goals.</p>
            </div>
            
            <div className="card text-center">
              <FaCogs className="card-icon" />
              <h3>Innovation Focus</h3>
              <p>Cutting-edge approaches combining latest technology with practical engineering solutions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section" style={{backgroundColor: 'var(--gray-100)'}}>
        <div className="container text-center">
          <h2>Ready to Optimize Your Processes?</h2>
          <p className="text-xl mb-8">
            Contact us today to discuss how our engineering expertise can benefit your operations.
          </p>
          <Link to="/contact" className="btn btn-primary btn-lg">
            Start Your Project <FaArrowRight />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;