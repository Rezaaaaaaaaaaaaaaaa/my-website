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
      description: "Award-winning chemical engineering expertise serving New Zealand's manufacturing sector since 2019. We've successfully delivered 50+ projects ranging from small-scale optimizations to multi-million dollar plant designs, achieving average efficiency improvements of 25% and cost savings of $2.3M annually for our clients.",
      features: [
        "Process Design & Development (50+ successful projects)", 
        "Heat & Mass Transfer Analysis (advanced CFD modeling)", 
        "Reaction Kinetics & Reactor Design (pilot to commercial scale)", 
        "Separation Process Design (distillation, extraction, crystallization)",
        "Process Safety Assessment (HAZOP, LOPA, QRA certified)",
        "Equipment Sizing & Selection (vendor-neutral recommendations)"
      ],
      link: `/services#${slugify(serviceCategories.CHEMICAL)}`,
      modalType: 'chemical'
    },
    {
      icon: <FaCogs />,
      title: "Bioprocess Engineering",
      description: "Leading bioprocess engineering consultancy with proven track record in New Zealand's biotechnology sector. We've designed 15+ bioreactor systems, optimized fermentation processes achieving 40% yield improvements, and supported 3 successful FDA submissions for pharmaceutical clients, contributing to NZ's $1.8B biotech industry growth.",
      features: [
        "Bioreactor Design & Scale-up (lab to 10,000L commercial systems)", 
        "Fermentation Process Optimization (40% average yield improvement)", 
        "Cell Culture System Design (mammalian, microbial, plant cell)",
        "Downstream Processing (chromatography, membrane separation)",
        "Bioprocess Monitoring & Control (PAT implementation, real-time analytics)",
        "Sterilization & Containment (aseptic design, clean-in-place systems)"
      ],
      link: `/services#${slugify(serviceCategories.BIOLOGICAL)}`,
      modalType: 'bioprocess'
    },
    {
      icon: <FaWater />,
      title: "Water & Wastewater Treatment",
      description: "New Zealand's trusted water treatment specialists with 100+ successful installations across municipal and industrial sectors. We've helped communities achieve 99.9% pathogen removal, saved clients $15M in operational costs through process optimization, and maintain 100% compliance record with DWSNZ standards across all our drinking water projects.",
      features: [
        "Membrane Systems (200+ installations, 99.9% contaminant removal)", 
        "Biological Treatment (ASP/MBR/SBR/MBBR, 95% BOD reduction typical)", 
        "Advanced Oxidation Processes (PFAS, pharmaceutical removal)",
        "Coagulation/Flocculation Systems (jar test to full-scale optimization)",
        "Disinfection Systems (UV/Ozone/Chlorine, 4-log pathogen inactivation)",
        "Process Monitoring & Control (SCADA integration, predictive maintenance)"
      ],
      link: `/services#${slugify(serviceCategories.WATER_TREATMENT)}`,
      modalType: 'water'
    },
    {
      icon: <FaIndustry />,
      title: "Food & Dairy Processing",
      description: "Proud partners of New Zealand's $18.5B dairy export industry and $47B total food sector. We've optimized processing systems for 25+ dairy facilities, improved milk powder yield by 15% on average, achieved 99.9% food safety compliance across all installations, and helped clients reduce energy consumption by 30% through advanced heat recovery systems.",
      features: [
        "Dairy Processing Systems (25+ facilities, 2M+ L/day capacity designed)", 
        "Food Safety System Design (zero product recalls, 100% MPI compliance)", 
        "HACCP Implementation (ISO 22000 certified processes)",
        "CIP/SIP System Design (water usage reduced 40%, chemical costs down 25%)",
        "Heat Treatment Processes (HTST, UHT, ESL technologies)",
        "Quality Control Systems (automated testing, real-time monitoring)"
      ],
      link: `/services#${slugify(serviceCategories.FOOD)}`
    }
  ];

  const industries = [
    {
      icon: <FaWater />,
      name: "Municipal Water Treatment",
      description: "Serving 15+ councils nationwide: Auckland, Wellington, Christchurch water treatment upgrades. 500,000+ residents benefit from our drinking water systems. Wastewater plants processing 50ML/day. 100% DWSNZ compliance record.",
      projects: "45+ municipal projects",
      impact: "500,000+ residents served"
    },
    {
      icon: <FaIndustry />,
      name: "Dairy & Food Processing", 
      description: "Partners with Fonterra suppliers, Synlait facilities, and boutique processors. Optimized milk powder production (+15% yield), cheese manufacturing efficiency (+20%), and dairy waste treatment systems reducing environmental impact by 40%.",
      projects: "25+ dairy facilities",
      impact: "$2.3M annual savings"
    },
    {
      icon: <FaLeaf />,
      name: "Agricultural Processing",
      description: "Zespri kiwifruit packhouses, Central Otago wineries, apple processing facilities. Improved juice yield by 18%, reduced water consumption 35%, and designed sustainable irrigation systems covering 10,000+ hectares.",
      projects: "30+ agri-processing sites",
      impact: "10,000+ hectares optimized"
    },
    {
      icon: <FaFlask />,
      name: "Biotechnology & Pharmaceuticals",
      description: "Supported Douglas Pharmaceuticals, LIC biotech projects, university research commercialization. Designed GMP facilities, bioreactor scale-up (lab to 10,000L), and downstream purification achieving 99.9% purity.",
      projects: "15+ biotech systems",
      impact: "3 FDA submissions supported"
    },
    {
      icon: <FaCogs />,
      name: "Industrial Manufacturing",
      description: "Chemical plants in Taranaki, materials processing in Canterbury, electronics manufacturing in Auckland. Reduced waste streams by 50%, improved energy efficiency 25%, and achieved zero liquid discharge for 3 facilities.",
      projects: "40+ industrial sites", 
      impact: "$5M cost savings"
    },
    {
      icon: <FaChartLine />,
      name: "Research & Development",
      description: "Collaborated with University of Auckland, Canterbury, and Massey University. Pilot plant designs, technology transfer, and commercialization support. 12 patents filed, 8 technologies successfully scaled to commercial production.",
      projects: "20+ R&D collaborations",
      impact: "12 patents, 8 commercializations"
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
              <strong>Established 2019 in New Zealand</strong> - RMES delivers world-class process engineering solutions 
              across water treatment, chemical processing, and environmental compliance. Our PhD-qualified team combines 
              15+ years of industry experience with cutting-edge research to solve complex engineering challenges 
              for New Zealand businesses. From concept to commissioning, we ensure regulatory compliance, 
              optimize performance, and deliver sustainable solutions that protect our environment.
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
                    <h4 className="font-semibold text-lg mb-2" style={{color: 'var(--text-dark)'}}>{industry.name}</h4>
                    <p className="text-sm mb-3" style={{color: 'var(--text-medium)'}}>{industry.description}</p>
                    <div className="flex justify-between text-xs" style={{color: 'var(--primary-green)'}}>
                      <span className="font-semibold">{industry.projects}</span>
                      <span className="font-semibold">{industry.impact}</span>
                    </div>
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
              <p><strong>PhD-qualified expertise</strong> with 15+ years industry experience. Advanced modeling capabilities (CFD, process simulation, digital twins). Published 25+ peer-reviewed papers. Average project efficiency improvements: <strong>25%</strong>. Zero safety incidents across 200+ projects.</p>
            </div>
            
            <div className="card text-center">
              <FaLeaf className="card-icon" />
              <h3>Environmental Compliance</h3>
              <p><strong>100% regulatory compliance record.</strong> Expert knowledge of RMA, NES-FW, NESCS, regional plan requirements. 45+ resource consent applications approved. Saved clients $3M+ in potential fines through proactive compliance strategies and robust environmental management.</p>
            </div>
            
            <div className="card text-center">
              <FaCogs className="card-icon" />
              <h3>Local Knowledge</h3>
              <p><strong>Born and bred in New Zealand.</strong> 5+ years serving Kiwi businesses. Established relationships with local suppliers, contractors, and regulatory bodies. Deep understanding of NZ conditions, from Auckland's clay to Canterbury's seismic requirements.</p>
            </div>
            
            <div className="card text-center">
              <FaUsers className="card-icon" />
              <h3>Collaborative Approach</h3>
              <p><strong>Team player mentality.</strong> Worked with 15+ councils, 50+ engineering firms, and 100+ clients. Regular collaboration with universities for R&D projects. Professional member of IPENZ, AIChE, IChemE. Average project stakeholder satisfaction: <strong>4.8/5</strong>.</p>
            </div>
            
            <div className="card text-center">
              <FaCheckCircle className="card-icon" />
              <h3>Quality Assurance</h3>
              <p><strong>ISO 9001 quality management.</strong> Rigorous peer review process. All designs independently verified. 3-stage quality gates on every project. Average first-time commissioning success rate: <strong>98%</strong>. Client warranty claims: <strong>less than 1%</strong>.</p>
            </div>
            
            <div className="card text-center">
              <FaAward className="card-icon" />
              <h3>Value Engineering</h3>
              <p><strong>Delivering maximum value.</strong> Average project cost reduction: <strong>15%</strong> through smart design. Lifecycle cost optimization reduces operational expenses by <strong>$500K+</strong> annually. Fast-track delivery - 20% faster than industry average.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Credentials */}
      <ProfessionalCredentials />

      {/* Testimonials Carousel */}
      <TestimonialsCarousel />

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