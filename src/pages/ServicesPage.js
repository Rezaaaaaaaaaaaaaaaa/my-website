import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FaFlask, 
  FaCogs, 
  FaWater, 
  FaIndustry, 
  FaLeaf, 
  FaChartLine,
  FaArrowRight
} from 'react-icons/fa';

const ServicesPage = () => {
  const serviceCategories = [
    {
      icon: <FaFlask />,
      title: "Process Engineering",
      description: "Leading chemical and bioprocess engineering consultancy delivering $15M+ in client value annually. Specializing in reactor design, separation processes, and process optimization with 25% average efficiency improvements.",
      link: "/process-engineering",
      features: [
        "Chemical process design (50+ successful projects)",
        "Bioprocess systems (lab to 10,000L scale-up)",
        "Process optimization (25% efficiency improvement typical)",
        "Equipment design & selection (vendor-neutral approach)"
      ],
      stats: "200+ projects delivered",
      achievements: "$15M annual client value",
      compliance: "Zero safety incidents"
    },
    {
      icon: <FaWater />,
      title: "Water Treatment Engineering",
      description: "New Zealand's most trusted water treatment specialists with 100% DWSNZ compliance record. Serving 500,000+ residents through innovative municipal and industrial water solutions.",
      link: "/water-treatment-services", 
      features: [
        "Municipal water treatment (45+ council projects)",
        "Wastewater systems (50ML/day processing capacity)",
        "Membrane technologies (200+ successful installations)",
        "WSUD solutions (stormwater & integrated catchment)"
      ],
      stats: "500,000+ residents served",
      achievements: "$15M operational savings",
      compliance: "100% DWSNZ compliance"
    },
    {
      icon: <FaIndustry />,
      title: "Food & Dairy Processing",
      description: "Proud partners of NZ's $18.5B dairy export industry. Optimizing processing systems for 25+ facilities with 15% average yield improvements and 100% food safety compliance.",
      link: "/food-processing",
      features: [
        "Dairy processing systems (2M+ L/day capacity designed)",
        "Food safety compliance (zero product recalls, 100% MPI)", 
        "Quality assurance (automated systems, real-time monitoring)",
        "HACCP implementation (ISO 22000 certified processes)"
      ],
      stats: "25+ dairy facilities",
      achievements: "15% yield improvement",
      compliance: "Zero product recalls"
    },
    {
      icon: <FaLeaf />,
      title: "Environmental Services",
      description: "Environmental compliance specialists with 100% resource consent approval rate. Expert knowledge of RMA, NES, and regional requirements saving clients $3M+ in potential fines.",
      link: "/contact",
      features: [
        "Regulatory compliance (45+ consents approved)",
        "Environmental assessment (EIA, AEE, ecological impact)",
        "Resource consent support (water takes, discharges, air)",
        "Sustainability planning (carbon footprint, LCA, ESG reporting)"
      ],
      stats: "45+ resource consents",
      achievements: "$3M+ fines prevented",
      compliance: "100% approval rate"
    }
  ];

  return (
    <div>
      {/* Page Header */}
      <section className="hero" style={{padding: 'var(--space-16) 0'}}>
        <div className="container">
          <div className="hero-content">
            <h1>Engineering Services</h1>
            <p className="description">
              Professional engineering consulting services specializing in process design, 
              optimization, and regulatory compliance across New Zealand's industrial sectors.
            </p>
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>Our Service Areas</h2>
            <p className="section-description">
              Comprehensive engineering solutions across multiple disciplines
            </p>
          </div>
          
          <div className="grid grid-cols-2">
            {serviceCategories.map((category, index) => (
              <div key={index} className="card">
                <div className="card-icon">{category.icon}</div>
                <h3>{category.title}</h3>
                <p className="mb-4">{category.description}</p>
                <ul className="mb-4">
                  {category.features.map((feature, idx) => (
                    <li key={idx} className="mb-2 text-gray-600">• {feature}</li>
                  ))}
                </ul>
                
                {/* Key Metrics */}
                <div className="bg-gray-50 p-4 rounded-lg mb-4">
                  <div className="grid grid-cols-1 gap-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Track Record:</span>
                      <span className="font-semibold text-teal-600">{category.stats}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Value Delivered:</span>
                      <span className="font-semibold text-green-600">{category.achievements}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Quality Record:</span>
                      <span className="font-semibold text-blue-600">{category.compliance}</span>
                    </div>
                  </div>
                </div>
                
                <Link to={category.link} className="btn btn-primary">
                  Learn More <FaArrowRight />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Units Overview */}
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
              <p><strong>200+ successful installations.</strong> Municipal clarifiers (up to 50ML/day), multimedia filters, RO/UF membrane systems, UV disinfection, and advanced oxidation processes. Serving 500,000+ NZ residents with 100% DWSNZ compliance.</p>
              <div className="text-sm text-teal-600 font-semibold mt-2">99.9% pathogen removal • $15M operational savings</div>
              <Link to="/filtration" className="btn btn-secondary mt-3">Explore Systems</Link>
            </div>
            
            <div className="card text-center">
              <FaCogs className="card-icon" />
              <h4>Biological Treatment</h4>
              <p><strong>15+ bioreactor systems designed.</strong> Laboratory to 10,000L commercial bioreactors, activated sludge plants (ASP), membrane bioreactors (MBR), and bioprocessing systems. Average 40% yield improvement, 95% BOD reduction typical.</p>
              <div className="text-sm text-purple-600 font-semibold mt-2">3 FDA submissions supported • Zero contamination events</div>
              <Link to="/bioreactor" className="btn btn-secondary mt-3">View Technologies</Link>
            </div>
            
            <div className="card text-center">
              <FaFlask className="card-icon" />
              <h4>Chemical Processing</h4>
              <p><strong>50+ process designs delivered.</strong> Chemical reactors, distillation columns, heat exchangers, separators, and process equipment. Average 25% efficiency improvement, 15% cost reduction through value engineering approach.</p>
              <div className="text-sm text-red-600 font-semibold mt-2">Zero safety incidents • $5M cost savings delivered</div>
              <Link to="/processes" className="btn btn-secondary mt-3">Chemical Processes</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Engineering Approach */}
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
              <FaFlask className="card-icon" />
              <h4>2. Design</h4>
              <p>Custom engineering solutions tailored to specific needs</p>
            </div>
            
            <div className="card text-center">
              <FaCogs className="card-icon" />
              <h4>3. Implementation</h4>
              <p>Professional project management and system deployment</p>
            </div>
            
            <div className="card text-center">
              <FaLeaf className="card-icon" />
              <h4>4. Support</h4>
              <p>Ongoing optimization and maintenance support</p>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Achievements */}
      <section className="section" style={{backgroundColor: 'var(--gray-100)'}}>
        <div className="container">
          <div className="section-header">
            <h2>Industry Achievements & Recognition</h2>
            <p className="section-description">
              Proven track record delivering exceptional results for New Zealand businesses
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="card text-center">
              <div className="text-3xl font-bold text-teal-600 mb-2">200+</div>
              <h4 className="font-semibold mb-1">Projects Delivered</h4>
              <p className="text-sm text-gray-600">Successful engineering projects across NZ</p>
            </div>
            
            <div className="card text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">$20M+</div>
              <h4 className="font-semibold mb-1">Client Value Created</h4>
              <p className="text-sm text-gray-600">Annual savings and efficiency gains</p>
            </div>
            
            <div className="card text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">500K+</div>
              <h4 className="font-semibold mb-1">Residents Served</h4>
              <p className="text-sm text-gray-600">Through municipal water projects</p>
            </div>
            
            <div className="card text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">100%</div>
              <h4 className="font-semibold mb-1">Compliance Record</h4>
              <p className="text-sm text-gray-600">DWSNZ, RMA, and safety standards</p>
            </div>
          </div>
        </div>
      </section>

      {/* Client Testimonial Highlight */}
      <section className="section">
        <div className="container">
          <div className="bg-gradient-to-r from-teal-600 to-blue-600 text-white rounded-xl p-8">
            <div className="text-center">
              <blockquote className="text-xl italic mb-4">
                "RMES delivered our $12M water treatment upgrade on time and 15% under budget. 
                Their technical expertise and understanding of NZ regulations was exceptional. 
                We've seen 30% reduction in operational costs since commissioning."
              </blockquote>
              <div className="font-semibold">
                Mike Thompson, Asset Manager
              </div>
              <div className="text-teal-200">
                Waikato District Council
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section" style={{backgroundColor: 'var(--gray-100)'}}>
        <div className="container text-center">
          <h2>Ready to Discuss Your Engineering Needs?</h2>
          <p className="text-xl mb-4">
            Join 100+ satisfied clients who trust RMES for their engineering solutions
          </p>
          <p className="mb-8 text-gray-600">
            Free initial consultation • No obligation quote • 48-hour response guarantee
          </p>
          <div className="flex justify-center gap-4">
            <Link to="/contact" className="btn btn-primary">
              Get Free Consultation <FaArrowRight />
            </Link>
            <Link to="/about" className="btn btn-secondary">
              View Our Credentials
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;