import React, { useState } from 'react';
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
  FaGlobeAmericas,
  FaInfoCircle
} from 'react-icons/fa';
import Logo from '../components/Logo';
import ServiceModal from '../components/ServiceModal';
import ConsultationBooking from '../components/ConsultationBooking';
import TestimonialsCarousel from '../components/TestimonialsCarousel';
import ProfessionalCredentials from '../components/ProfessionalCredentials';
import NZRegionalMap from '../components/NZRegionalMap';
import ComplianceTracker from '../components/ComplianceTracker';
import InteractiveProcessDiagrams from '../components/InteractiveProcessDiagrams';
import BackToTop from '../components/BackToTop';
import { serviceCategories } from '../data/servicesData';

const HomePage = () => {
  const [activeModal, setActiveModal] = useState(null);
  const [consultationOpen, setConsultationOpen] = useState(false);

  const openServiceModal = (serviceType) => {
    setActiveModal(serviceType);
  };

  const closeServiceModal = () => {
    setActiveModal(null);
  };
  const slugify = (text) => {
    return text.toString().toLowerCase()
      .replace(/\s+/g, '-')           // Replace spaces with -
      .replace(/[^\w-]+/g, '')       // Remove all non-word chars
      .replace(/--+/g, '-')         // Replace multiple - with single -
      .replace(/^-+/, '')             // Trim - from start of text
      .replace(/-+$/, '');            // Trim - from end of text
  };

  const services = [
    {
      icon: <FaFlask />,
      title: "Chemical Process Engineering",
      description: "Comprehensive chemical engineering solutions covering process design, optimization, and troubleshooting for industrial applications. Expertise in mass and heat transfer, reaction engineering, and separation processes.",
      features: [
        "Process Design & Development", 
        "Heat & Mass Transfer Analysis", 
        "Reaction Kinetics & Reactor Design", 
        "Separation Process Design",
        "Process Safety Assessment",
        "Equipment Sizing & Selection"
      ],
      link: `/services#${slugify(serviceCategories.CHEMICAL)}`,
      modalType: 'chemical'
    },
    {
      icon: <FaCogs />,
      title: "Bioprocess Engineering",
      description: "Specialized biotechnology and biological process engineering for fermentation, bioreactors, and downstream processing. Supporting both research-scale and industrial bioprocessing applications.",
      features: [
        "Bioreactor Design & Scale-up", 
        "Fermentation Process Optimization", 
        "Cell Culture System Design",
        "Downstream Processing",
        "Bioprocess Monitoring & Control",
        "Sterilization & Containment"
      ],
      link: `/services#${slugify(serviceCategories.BIOLOGICAL)}`,
      modalType: 'bioprocess'
    },
    {
      icon: <FaWater />,
      title: "Water & Wastewater Treatment",
      description: "Comprehensive water treatment solutions including membrane systems, biological treatment, and advanced oxidation processes. Specializing in municipal and industrial applications with regulatory compliance focus.",
      features: [
        "Membrane Systems (RO/UF/MF/NF)", 
        "Biological Treatment (ASP/MBR/SBR/MBBR)", 
        "Advanced Oxidation Processes",
        "Coagulation/Flocculation Systems",
        "Disinfection Systems (UV/Ozone/Chlorine)",
        "Process Monitoring & Control"
      ],
      link: `/services#${slugify(serviceCategories.WATER_TREATMENT)}`,
      modalType: 'water'
    },
    {
      icon: <FaIndustry />,
      title: "Food & Dairy Processing",
      description: "Engineering solutions for food and dairy processing operations, focusing on process efficiency, food safety compliance, and quality assurance systems tailored for New Zealand's agricultural sector.",
      features: [
        "Dairy Processing Systems", 
        "Food Safety System Design", 
        "HACCP Implementation",
        "CIP/SIP System Design",
        "Heat Treatment Processes",
        "Quality Control Systems"
      ],
      link: `/services#${slugify(serviceCategories.FOOD)}`
    }
  ];

  const industries = [
    {
      icon: <FaWater />,
      name: "Municipal Water Treatment",
      description: "Drinking water treatment plants, wastewater treatment facilities, and stormwater management systems"
    },
    {
      icon: <FaIndustry />,
      name: "Dairy & Food Processing",
      description: "Milk processing, cheese manufacturing, dairy waste treatment, and food safety compliance systems"
    },
    {
      icon: <FaLeaf />,
      name: "Agricultural Processing",
      description: "Fruit processing, wine production, agricultural waste treatment, and irrigation system optimization"
    },
    {
      icon: <FaFlask />,
      name: "Biotechnology & Pharmaceuticals",
      description: "Fermentation systems, cell culture processes, downstream purification, and clean room facilities"
    },
    {
      icon: <FaCogs />,
      name: "Industrial Manufacturing",
      description: "Chemical processing, materials manufacturing, industrial water treatment, and waste minimization"
    },
    {
      icon: <FaChartLine />,
      name: "Research & Development",
      description: "Laboratory-scale process development, pilot plant design, and technology scale-up services"
    }
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
            <p className="subtitle">Professional Process Engineering Solutions</p>
            <div className="mb-6 p-8 bg-gradient-to-r from-teal-50 to-blue-50 rounded-xl border border-teal-100 shadow-lg">
              <div className="flex items-center mb-4">
                <FaWater className="text-3xl text-teal-600 mr-3" />
                <h2 className="text-2xl font-bold text-slate-800">
                  Environmental Engineering Services
                </h2>
              </div>
              <p className="text-slate-700 text-lg leading-relaxed">
                Engineering solutions for water treatment, wastewater systems, and environmental processes 
                focused on regulatory compliance and sustainable practices.
              </p>
              <div className="flex items-center gap-6 mt-4 text-sm text-slate-600">
                <div className="flex items-center gap-2">
                  <FaAward className="text-teal-600" />
                  <span>Quality Focused</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaUsers className="text-teal-600" />
                  <span>Professional Team</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaGlobeAmericas className="text-teal-600" />
                  <span>Local Service</span>
                </div>
              </div>
            </div>
            <p className="description">
              PhD-led professional engineering consultancy providing advanced chemical process solutions, 
              bioprocess engineering, and sustainable technologies. Combining doctoral-level expertise 
              with practical implementation experience for environmental protection and regulatory compliance.
            </p>
            <div className="flex justify-center gap-4 mt-8">
              <Link to="/services" className="btn btn-primary">
                Our Services <FaArrowRight />
              </Link>
              <button 
                onClick={() => setConsultationOpen(true)}
                className="btn btn-secondary"
                style={{
                  background: 'linear-gradient(135deg, var(--primary-green) 0%, #059669 100%)',
                  color: 'white',
                  border: 'none',
                  padding: '0.75rem 1.5rem',
                  borderRadius: '6px',
                  fontSize: '1rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  textDecoration: 'none'
                }}
              >
                Get Consultation
              </button>
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
              Comprehensive engineering solutions for industrial and environmental applications
            </p>
          </div>
          
          <div className="grid grid-auto">
            {services.map((service, index) => (
              <div key={index} className="card fade-in-up" style={{ position: 'relative' }}>
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
                <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                  <button
                    onClick={() => openServiceModal(service.modalType)}
                    className="btn"
                    style={{
                      background: 'linear-gradient(135deg, var(--accent-teal) 0%, var(--primary-blue) 100%)',
                      color: 'white',
                      border: 'none',
                      padding: '0.6rem 1.2rem',
                      borderRadius: '6px',
                      fontSize: '0.9rem',
                      fontWeight: '600',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      textDecoration: 'none',
                      flex: '1'
                    }}
                  >
                    <FaInfoCircle /> View Details
                  </button>
                  <Link 
                    to={service.link} 
                    className="btn btn-secondary"
                    style={{ flex: '1', textAlign: 'center' }}
                  >
                    Learn More
                  </Link>
                </div>
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
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {industries.map((industry, index) => (
              <div key={index} className="card">
                <div className="flex items-start gap-4">
                  <div style={{color: 'var(--accent-teal)', fontSize: '1.5rem', marginTop: '0.25rem'}}>
                    {industry.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1" style={{color: 'var(--text-dark)'}}>{industry.name}</h4>
                    <p className="text-sm" style={{color: 'var(--text-medium)'}}>{industry.description}</p>
                  </div>
                </div>
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
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card text-center">
              <FaChartLine className="card-icon" />
              <h3>Technical Excellence</h3>
              <p>Comprehensive chemical and bioprocess engineering expertise with focus on practical, cost-effective solutions that meet performance requirements and regulatory standards.</p>
            </div>
            
            <div className="card text-center">
              <FaLeaf className="card-icon" />
              <h3>Environmental Compliance</h3>
              <p>Deep understanding of New Zealand's environmental regulations including RMA, NES, and regional requirements ensuring your project meets all compliance obligations.</p>
            </div>
            
            <div className="card text-center">
              <FaCogs className="card-icon" />
              <h3>Local Knowledge</h3>
              <p>New Zealand-based engineering consultancy with understanding of local conditions, suppliers, contractors, and regulatory processes for efficient project delivery.</p>
            </div>
            
            <div className="card text-center">
              <FaUsers className="card-icon" />
              <h3>Collaborative Approach</h3>
              <p>Working closely with clients, contractors, and regulatory bodies to ensure project success through clear communication and technical collaboration.</p>
            </div>
            
            <div className="card text-center">
              <FaCheckCircle className="card-icon" />
              <h3>Quality Assurance</h3>
              <p>Thorough design reviews, validation processes, and quality control measures ensuring reliable, safe, and efficient engineering solutions.</p>
            </div>
            
            <div className="card text-center">
              <FaAward className="card-icon" />
              <h3>Value Engineering</h3>
              <p>Cost-conscious engineering approach that optimizes performance while managing project budgets and timelines effectively.</p>
            </div>
          </div>
        </div>
      </section>

      {/* New Zealand Regional Coverage Map */}
      <NZRegionalMap />

      {/* RMA/NES Compliance Tracker */}
      <ComplianceTracker />

      {/* Interactive Process Flow Diagrams */}
      <InteractiveProcessDiagrams />

      {/* Testimonials Carousel */}
      <TestimonialsCarousel />
      
      {/* Professional Credentials */}
      <ProfessionalCredentials />

      {/* Single CTA Section - Consolidated */}
      <section className="section" style={{backgroundColor: 'var(--gray-100)'}}>
        <div className="container text-center">
          <h2>Ready to Optimize Your Processes?</h2>
          <p className="text-xl mb-8">
            Contact our Kiwi engineering experts today to discuss how we can benefit your operations with sustainable, efficient solutions.
          </p>
          <div className="flex justify-center gap-4">
            <button
              onClick={() => setConsultationOpen(true)}
              className="btn btn-primary btn-lg"
              style={{
                background: 'linear-gradient(135deg, var(--primary-green) 0%, #059669 100%)',
                border: 'none'
              }}
            >
              Start Your Project <FaArrowRight />
            </button>
            <Link to="/services" className="btn btn-secondary btn-lg">
              Explore Services
            </Link>
          </div>
        </div>
      </section>

      {/* Modals and Interactive Components */}
      <ServiceModal
        isOpen={activeModal !== null}
        onClose={closeServiceModal}
        serviceType={activeModal}
      />
      
      <ConsultationBooking
        isOpen={consultationOpen}
        onClose={() => setConsultationOpen(false)}
      />
      
      <BackToTop />
    </div>
  );
};

export default HomePage;