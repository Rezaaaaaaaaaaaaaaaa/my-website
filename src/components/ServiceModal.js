import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FaFlask, 
  FaCogs, 
  FaWater, 
  FaArrowRight, 
  FaCheckCircle, 
  FaIndustry,
  FaChartLine,
  FaTools,
  FaAward,
  FaGlobe
} from 'react-icons/fa';
import Modal from './Modal';

const ServiceModal = ({ isOpen, onClose, serviceType }) => {
  const serviceData = {
    chemical: {
      title: "Chemical Process Engineering",
      icon: <FaFlask />,
      description: "Advanced process design, optimization, and troubleshooting for chemical manufacturing and production facilities across New Zealand.",
      keyServices: [
        "Process Design & Development",
        "Scale-up & Optimization",
        "Process Safety Analysis",
        "Equipment Selection & Sizing",
        "Process Control Design",
        "Troubleshooting & Debottlenecking"
      ],
      industries: [
        "Chemical Manufacturing",
        "Pharmaceuticals & Biotechnology", 
        "Specialty Chemicals",
        "Food & Beverage Processing",
        "Mining & Metallurgy",
        "Oil & Gas Processing"
      ],
      caseStudies: [
        {
          title: "Dairy Processing Optimization",
          location: "Waikato Region",
          result: "25% increase in processing efficiency",
          description: "Optimized milk processing plant with advanced separation and concentration systems."
        },
        {
          title: "Specialty Chemical Plant Design",
          location: "Auckland",
          result: "Reduced operating costs by 30%",
          description: "Complete process design for high-purity chemical production facility."
        }
      ],
      technologies: [
        "Distillation & Separation",
        "Reaction Engineering",
        "Heat & Mass Transfer",
        "Process Simulation (Aspen, HYSYS)",
        "Advanced Process Control",
        "Process Safety Management"
      ]
    },
    bioprocess: {
      title: "Bioprocess Engineering",
      icon: <FaCogs />,
      description: "Specialized engineering solutions for biotechnology, fermentation, and biological treatment systems tailored for New Zealand's biosafety and environmental standards.",
      keyServices: [
        "Bioreactor Design & Scale-up",
        "Fermentation Process Development",
        "Downstream Processing",
        "Bioprocess Optimization",
        "Quality Control Systems",
        "Biological Wastewater Treatment"
      ],
      industries: [
        "Biotechnology & Pharmaceuticals",
        "Food & Beverage Fermentation",
        "Wastewater Treatment",
        "Agricultural Biotechnology",
        "Marine Biotechnology",
        "Environmental Bioremediation"
      ],
      caseStudies: [
        {
          title: "Municipal Wastewater MBR System",
          location: "Canterbury Region",
          result: "99.5% pathogen removal efficiency",
          description: "Advanced membrane bioreactor system for municipal wastewater treatment meeting NZ discharge standards."
        },
        {
          title: "Dairy Processing Biogas Plant",
          location: "Taranaki",
          result: "40% reduction in energy costs",
          description: "Anaerobic digestion system converting dairy waste to renewable energy."
        }
      ],
      technologies: [
        "Membrane Bioreactors (MBR)",
        "Sequencing Batch Reactors (SBR)",
        "Moving Bed Biofilm Reactors (MBBR)",
        "Anaerobic Digestion Systems",
        "Activated Sludge Processes",
        "Advanced Biological Nutrient Removal"
      ]
    },
    water: {
      title: "Water Treatment Engineering",
      icon: <FaWater />,
      description: "Local Water Done Well - Comprehensive water and wastewater treatment solutions ensuring compliance with New Zealand's stringent water quality standards and environmental regulations.",
      keyServices: [
        "Drinking Water Treatment Systems",
        "Wastewater Treatment Plants", 
        "Membrane Technologies (RO/UF/MF)",
        "Advanced Oxidation Processes",
        "Stormwater Management (WSUD)",
        "Industrial Water Treatment"
      ],
      industries: [
        "Municipal Water Authorities",
        "Industrial Manufacturing",
        "Food & Beverage Processing",
        "Mining & Extractives",
        "Agricultural Operations",
        "Marine & Aquaculture"
      ],
      caseStudies: [
        {
          title: "Regional Water Treatment Upgrade",
          location: "Bay of Plenty",
          result: "Achieved AA+ water quality rating",
          description: "Complete upgrade of municipal water treatment plant with advanced membrane filtration and UV disinfection."
        },
        {
          title: "Industrial Wastewater Zero Discharge",
          location: "Wellington Region",
          result: "100% water recovery and reuse",
          description: "Advanced treatment system achieving zero liquid discharge for manufacturing facility."
        }
      ],
      technologies: [
        "Membrane Filtration (RO, UF, MF)",
        "Biological Treatment Systems",
        "Advanced Oxidation (UV/O3/H2O2)",
        "Ion Exchange & Adsorption",
        "Coagulation & Flocculation",
        "Constructed Wetlands & WSUD"
      ]
    }
  };

  const service = serviceData[serviceType];
  if (!service) return null;

  return (
    <Modal 
      isOpen={isOpen} 
      onClose={onClose} 
      title={service.title} 
      size="xlarge"
    >
      <div style={{ display: 'grid', gap: '2rem' }}>
        {/* Service Overview */}
        <div style={{ 
          background: 'linear-gradient(135deg, #f0fdff 0%, #e0f7ff 100%)',
          padding: '1.5rem',
          borderRadius: '8px',
          border: '1px solid #b3e5fc'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
            <div style={{ fontSize: '2rem', color: 'var(--accent-teal)' }}>
              {service.icon}
            </div>
            <h3 style={{ margin: 0, color: 'var(--text-dark)' }}>Service Overview</h3>
          </div>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.6', margin: 0, color: 'var(--text-medium)' }}>
            {service.description}
          </p>
        </div>

        {/* Two Column Layout */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
          {/* Key Services */}
          <div>
            <h3 style={{ color: 'var(--text-dark)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <FaTools style={{ color: 'var(--accent-teal)' }} />
              Key Services
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {service.keyServices.map((item, index) => (
                <li key={index} style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '0.5rem', 
                  marginBottom: '0.75rem',
                  padding: '0.5rem',
                  background: '#f8fafc',
                  borderRadius: '6px'
                }}>
                  <FaCheckCircle style={{ color: 'var(--primary-green)', minWidth: '16px' }} />
                  <span style={{ color: 'var(--text-dark)' }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries Served */}
          <div>
            <h3 style={{ color: 'var(--text-dark)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <FaIndustry style={{ color: 'var(--accent-teal)' }} />
              Industries Served
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {service.industries.map((industry, index) => (
                <li key={index} style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '0.5rem', 
                  marginBottom: '0.75rem',
                  padding: '0.5rem',
                  background: '#f8fafc',
                  borderRadius: '6px'
                }}>
                  <FaGlobe style={{ color: 'var(--primary-blue)', minWidth: '16px' }} />
                  <span style={{ color: 'var(--text-dark)' }}>{industry}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Case Studies */}
        <div>
          <h3 style={{ color: 'var(--text-dark)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <FaAward style={{ color: 'var(--accent-teal)' }} />
            New Zealand Case Studies
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1rem' }}>
            {service.caseStudies.map((study, index) => (
              <div key={index} style={{ 
                background: 'white',
                border: '2px solid #e2e8f0',
                borderRadius: '8px',
                padding: '1.5rem',
                transition: 'all 0.2s ease'
              }}>
                <h4 style={{ color: 'var(--text-dark)', marginTop: 0, marginBottom: '0.5rem' }}>
                  {study.title}
                </h4>
                <div style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '0.5rem', 
                  marginBottom: '0.5rem',
                  fontSize: '0.9rem',
                  color: 'var(--text-medium)'
                }}>
                  <FaGlobe style={{ color: 'var(--accent-teal)' }} />
                  <span>{study.location}</span>
                </div>
                <div style={{ 
                  background: 'linear-gradient(135deg, #dcfce7 0%, #bbf7d0 100%)',
                  color: '#166534',
                  padding: '0.5rem 0.75rem',
                  borderRadius: '6px',
                  fontSize: '0.9rem',
                  fontWeight: '600',
                  marginBottom: '0.75rem'
                }}>
                  Result: {study.result}
                </div>
                <p style={{ margin: 0, fontSize: '0.95rem', lineHeight: '1.5', color: 'var(--text-medium)' }}>
                  {study.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Technologies */}
        <div style={{ 
          background: 'linear-gradient(135deg, #faf5ff 0%, #f3e8ff 100%)',
          padding: '1.5rem',
          borderRadius: '8px',
          border: '1px solid #d8b4fe'
        }}>
          <h3 style={{ color: 'var(--text-dark)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <FaChartLine style={{ color: 'var(--accent-teal)' }} />
            Core Technologies & Methods
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0.75rem' }}>
            {service.technologies.map((tech, index) => (
              <div key={index} style={{ 
                background: 'white',
                padding: '0.75rem 1rem',
                borderRadius: '6px',
                border: '1px solid #e2e8f0',
                textAlign: 'center',
                fontSize: '0.9rem',
                color: 'var(--text-dark)',
                fontWeight: '500'
              }}>
                {tech}
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div style={{ 
          background: 'linear-gradient(135deg, var(--accent-teal) 0%, var(--primary-blue) 100%)',
          color: 'white',
          padding: '2rem',
          borderRadius: '8px',
          textAlign: 'center'
        }}>
          <h3 style={{ color: 'white', marginTop: 0, marginBottom: '1rem' }}>
            Ready to Optimize Your {service.title.replace(' Engineering', '')} Processes?
          </h3>
          <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem', opacity: '0.95' }}>
            Get a detailed consultation with our New Zealand engineering experts
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
            <Link 
              to="/contact" 
              style={{ 
                background: 'white',
                color: 'var(--accent-teal)',
                padding: '0.75rem 1.5rem',
                borderRadius: '6px',
                textDecoration: 'none',
                fontWeight: '600',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                transition: 'all 0.2s ease'
              }}
              onClick={onClose}
            >
              Request Quote <FaArrowRight />
            </Link>
            <Link 
              to="/services" 
              style={{ 
                background: 'rgba(255, 255, 255, 0.2)',
                color: 'white',
                border: '2px solid white',
                padding: '0.75rem 1.5rem',
                borderRadius: '6px',
                textDecoration: 'none',
                fontWeight: '600',
                transition: 'all 0.2s ease'
              }}
              onClick={onClose}
            >
              View All Services
            </Link>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ServiceModal;