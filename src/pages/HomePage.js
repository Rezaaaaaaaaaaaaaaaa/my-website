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
  FaCheckCircle,
  FaAward,
  FaUsers,
  FaGlobeAmericas
} from 'react-icons/fa';
import Logo from '../components/Logo';
import { serviceCategories } from '../data/servicesData';

const HomePage = () => {
  const slugify = (text) => {
    return text.toString().toLowerCase()
      .replace(/\s+/g, '-')           // Replace spaces with -
      .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
      .replace(/\-\-+/g, '-')         // Replace multiple - with single -
      .replace(/^-+/, '')             // Trim - from start of text
      .replace(/-+$/, '');            // Trim - from end of text
  };

  const services = [
    {
      icon: <FaFlask />,
      title: "Chemical Process Engineering",
      description: "Advanced process design, optimization, and troubleshooting for chemical manufacturing and production facilities.",
      features: ["Process Design", "Scale-up", "Optimization", "Safety Analysis"],
      link: `/services#${slugify(serviceCategories.CHEMICAL)}`
    },
    {
      icon: <FaCogs />,
      title: "Bioprocess Engineering",
      description: "Specialized engineering solutions for biotechnology, fermentation, and biological treatment systems.",
      features: ["Bioreactor Design", "Fermentation", "Downstream Processing", "Quality Control"],
      link: `/services#${slugify(serviceCategories.BIOLOGICAL)}`
    },
    {
      icon: <FaWater />,
      title: "Water Treatment Engineering",
      description: "Local Water Done Well - Advanced water/wastewater treatment including MBR, SBR, MBBR, membrane systems, and stormwater WSUD solutions.",
      features: ["Membrane Systems (RO/UF/MF)", "Biological Treatment (ASP/MBR/SBR)", "Advanced Oxidation (AOPs)", "Stormwater Management"],
      link: `/services#${slugify(serviceCategories.WATER_TREATMENT)}`
    },
    {
      icon: <FaIndustry />,
      title: "Food Engineering",
      description: "Comprehensive food processing solutions ensuring quality, safety, and efficiency in food production.",
      features: ["Process Design", "Food Safety", "Quality Systems", "Equipment Selection"],
      link: `/services#${slugify(serviceCategories.FOOD)}`
    }
  ];

  const industries = [
    "Water Treatment & Municipal Infrastructure",
    "Dairy & Food Processing", 
    "Agricultural Technology & Horticulture",
    "Marine & Aquaculture Systems",
    "Manufacturing & Industrial Processes",
    "Research & Development Facilities"
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="flex justify-center mb-6">
              <Logo size="hero" variant="full" animated={true} />
            </div>
            <p className="subtitle">Environmental Engineering Excellence</p>
            <div className="mb-6 p-8 bg-gradient-to-r from-teal-50 to-blue-50 rounded-xl border border-teal-100 shadow-lg">
              <div className="flex items-center mb-4">
                <FaWater className="text-3xl text-teal-600 mr-3" />
                <h2 className="text-2xl font-bold text-slate-800">
                  Local Water Done Well: New Zealand's Engineering Excellence
                </h2>
              </div>
              <p className="text-slate-700 text-lg leading-relaxed">
                Specialized engineering in water treatment (coagulation, sedimentation, filtration), 
                wastewater systems (ASP, MBR, SBR, MBBR), and stormwater management (WSUD, constructed wetlands) 
                delivering regulatory compliance across New Zealand.
              </p>
              <div className="flex items-center gap-6 mt-4 text-sm text-slate-600">
                <div className="flex items-center gap-2">
                  <FaAward className="text-teal-600" />
                  <span>ISO Compliant</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaUsers className="text-teal-600" />
                  <span>Expert Team</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaGlobeAmericas className="text-teal-600" />
                  <span>NZ Wide Service</span>
                </div>
              </div>
            </div>
            <p className="description">
              New Zealand's trusted environmental engineering consultancy, delivering innovative 
              chemical process solutions, bioprocess engineering, and sustainable technologies 
              that drive Kiwi innovation while protecting our pristine natural environment.
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
              Comprehensive engineering solutions designed specifically for New Zealand's unique industrial landscape and environmental challenges
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
                <Link to={service.link} className="btn btn-secondary">
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
              Supporting New Zealand's key industries with specialized engineering expertise
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
            <h2 className="section-title">Why Choose RMES?</h2>
          </div>
          
          <div className="grid grid-cols-3">
            <div className="card text-center">
              <FaChartLine className="card-icon" />
              <h3>Proven Expertise</h3>
              <p>Deep technical expertise in chemical and bioprocess engineering with extensive experience across New Zealand industries.</p>
            </div>
            
            <div className="card text-center">
              <FaLeaf className="card-icon" />
              <h3>Sustainable Solutions</h3>
              <p>Environmentally conscious engineering that aligns with New Zealand's commitment to sustainability and clean, green innovation.</p>
            </div>
            
            <div className="card text-center">
              <FaCogs className="card-icon" />
              <h3>Innovation Focus</h3>
              <p>Cutting-edge approaches combining latest technology with practical engineering solutions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Single CTA Section - Consolidated */}
      <section className="section" style={{backgroundColor: 'var(--gray-100)'}}>
        <div className="container text-center">
          <h2>Ready to Optimize Your Processes?</h2>
          <p className="text-xl mb-8">
            Contact our Kiwi engineering experts today to discuss how we can benefit your operations with sustainable, efficient solutions.
          </p>
          <div className="flex justify-center gap-4">
            <Link to="/contact" className="btn btn-primary btn-lg">
              Start Your Project <FaArrowRight />
            </Link>
            <Link to="/services" className="btn btn-secondary btn-lg">
              Explore Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;