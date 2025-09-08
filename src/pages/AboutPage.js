import React from 'react';
import { 
  FaGraduationCap, 
  FaIndustry, 
  FaAward, 
  FaUsers,
  FaGlobe,
  FaHandshake,
  FaTools,
  FaShieldAlt
} from 'react-icons/fa';

const AboutPage = () => {
  const values = [
    {
      icon: <FaAward />,
      title: "Technical Excellence",
      description: "Delivering engineering solutions based on sound scientific principles, industry best practices, and proven methodologies"
    },
    {
      icon: <FaHandshake />,
      title: "Professional Integrity", 
      description: "Maintaining honest, transparent communication and ethical practice in all client interactions and project deliverables"
    },
    {
      icon: <FaGlobe />,
      title: "Environmental Responsibility",
      description: "Considering environmental impacts in all design decisions and promoting sustainable engineering practices"
    },
    {
      icon: <FaUsers />,
      title: "Client-Focused Service",
      description: "Understanding client needs and constraints to deliver practical, implementable solutions that meet project objectives"
    },
    {
      icon: <FaIndustry />,
      title: "Practical Application",
      description: "Focusing on real-world implementation challenges and providing solutions that work in actual operating conditions"
    },
    {
      icon: <FaGraduationCap />,
      title: "Continuous Learning",
      description: "Staying current with technology developments, regulatory changes, and industry innovations to provide best-in-class service"
    }
  ];

  return (
    <div>
      {/* Page Header */}
      <section className="hero" style={{padding: 'var(--space-16) 0'}}>
        <div className="container">
          <div className="hero-content">
            <h1>About RMES</h1>
            <p className="description">
              PhD-led professional engineering consultancy specializing in advanced process engineering 
              solutions for chemical, bioprocess, and environmental applications.
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="section">
        <div className="container">
          <div className="grid grid-cols-2" style={{gap: 'var(--space-12)'}}>
            <div>
              <h2>Our Story</h2>
              <p>
                RMES (Reza Moghaddam Engineering Solutions) was established in response to the growing 
                demand for specialized process engineering expertise in New Zealand's diverse industrial 
                landscape. Founded on the principle of delivering practical, cost-effective engineering 
                solutions, we focus on chemical and bioprocess applications across water treatment, 
                food processing, and industrial manufacturing sectors.
              </p>
              <p>
                Our founding vision emerged from recognizing a gap between theoretical engineering knowledge 
                and real-world implementation challenges faced by New Zealand industries. We bridge this 
                gap by combining rigorous technical analysis with practical experience, understanding that 
                successful engineering solutions must work not just on paper, but in actual operating 
                environments with real constraints and variables.
              </p>
              <p>
                Our consultancy combines academic knowledge with industry experience to solve 
                complex engineering challenges. We understand that every project is unique and 
                requires a tailored approach that considers technical requirements, regulatory 
                compliance, economic constraints, and environmental impacts. This philosophy has 
                guided our approach from day one, ensuring that our solutions are both innovative 
                and implementable.
              </p>
              <p>
                Based in New Zealand, we have developed deep familiarity with local regulatory 
                frameworks, industry standards, and environmental requirements. Our understanding 
                extends beyond compliance to include practical insights into working with regional 
                councils, navigating resource consent processes, and addressing unique environmental 
                conditions. This local knowledge, combined with international best practices, enables 
                us to deliver solutions that are both technically sound and practically implementable 
                in the New Zealand context.
              </p>
            </div>
            
            <div>
              <h2>Our Mission</h2>
              <p>
                To provide high-quality process engineering solutions that enable New Zealand 
                industries to operate efficiently, safely, and in compliance with environmental 
                regulations. We are committed to delivering practical engineering advice and 
                design services that help our clients achieve their operational objectives while 
                maintaining environmental stewardship and regulatory compliance.
              </p>
              <p>
                Our mission extends beyond traditional consulting to become a trusted technical 
                partner for New Zealand businesses. We focus on sustainable engineering practices 
                that support long-term operational success, environmental protection, and economic 
                viability. By staying current with technological developments and regulatory changes, 
                we ensure our clients receive forward-thinking solutions that remain effective as 
                industries evolve.
              </p>
              <p>
                <strong>Strategic Focus Areas:</strong>
              </p>
              <ul style={{marginLeft: '1.5rem', marginBottom: '1rem'}}>
                <li style={{marginBottom: '0.5rem'}}>Supporting New Zealand's transition to sustainable industrial practices</li>
                <li style={{marginBottom: '0.5rem'}}>Enhancing process efficiency and resource utilization across key industries</li>
                <li style={{marginBottom: '0.5rem'}}>Facilitating regulatory compliance through proactive engineering design</li>
                <li style={{marginBottom: '0.5rem'}}>Building local engineering capacity through knowledge transfer and collaboration</li>
                <li style={{marginBottom: '0.5rem'}}>Contributing to New Zealand's circular economy and waste minimization objectives</li>
              </ul>
              
              <h3 style={{marginTop: '2rem'}}>Our Engineering Philosophy</h3>
              <p>
                We believe in a collaborative approach to engineering, working closely with 
                clients to understand their specific needs and constraints. Our solutions are 
                designed to be technically robust, economically viable, and environmentally 
                responsible. We emphasize clear communication, thorough documentation, and 
                ongoing support throughout project implementation.
              </p>
              <p>
                <strong>Evidence-Based Engineering:</strong> Every recommendation is backed by 
                sound scientific principles, proven methodologies, and rigorous analysis. We 
                don't rely on assumptions - we validate our approaches through modeling, 
                calculations, and real-world experience.
              </p>
              <p>
                <strong>Practical Implementation Focus:</strong> Our solutions are designed 
                with implementation in mind. We consider constructability, maintainability, 
                and operational requirements from the earliest design stages, ensuring that 
                our engineering recommendations translate effectively into working systems.
              </p>
              <p>
                <strong>Integrated Systems Thinking:</strong> We understand that process 
                engineering solutions don't exist in isolation. Our approach considers 
                upstream and downstream impacts, system interactions, and long-term 
                operational implications to deliver comprehensive, sustainable solutions.
              </p>
              
              <div className="mt-8">
                <h3>Service Areas</h3>
                <ul>
                  <li className="mb-2">• Process design and development for chemical and biological systems</li>
                  <li className="mb-2">• Water and wastewater treatment system engineering</li>
                  <li className="mb-2">• Food and dairy processing system optimization</li>
                  <li className="mb-2">• Environmental compliance and regulatory support</li>
                  <li className="mb-2">• Process safety assessment and risk analysis</li>
                  <li className="mb-2">• Equipment selection and system integration</li>
                  <li className="mb-2">• Technical documentation and engineering reports</li>
                  <li className="mb-2">• Project management and implementation support</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Standards & Ethics */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>Professional Standards & Ethics</h2>
            <p className="section-description">
              Our commitment to professional excellence and ethical engineering practice
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card">
              <h3 style={{fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--accent-teal)'}}>Engineering Ethics</h3>
              <ul style={{margin: 0, paddingLeft: '1.5rem'}}>
                <li style={{marginBottom: '0.75rem'}}>
                  <strong>Public Safety First:</strong> Every engineering decision prioritizes public health, safety, and environmental protection above all other considerations.
                </li>
                <li style={{marginBottom: '0.75rem'}}>
                  <strong>Professional Competence:</strong> We work only within our areas of expertise and seek additional consultation when projects require specialized knowledge beyond our scope.
                </li>
                <li style={{marginBottom: '0.75rem'}}>
                  <strong>Honest Communication:</strong> Clear, transparent reporting of limitations, uncertainties, and potential risks associated with all engineering recommendations.
                </li>
                <li style={{marginBottom: '0.75rem'}}>
                  <strong>Conflict of Interest Disclosure:</strong> Full transparency regarding any potential conflicts and commitment to prioritizing client interests in all professional decisions.
                </li>
              </ul>
            </div>
            
            <div className="card">
              <h3 style={{fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--accent-teal)'}}>Quality Assurance</h3>
              <ul style={{margin: 0, paddingLeft: '1.5rem'}}>
                <li style={{marginBottom: '0.75rem'}}>
                  <strong>Peer Review Process:</strong> Critical engineering calculations and design decisions undergo independent verification to ensure accuracy and completeness.
                </li>
                <li style={{marginBottom: '0.75rem'}}>
                  <strong>Documentation Standards:</strong> Comprehensive documentation of methodologies, assumptions, and decision-making processes for full traceability and future reference.
                </li>
                <li style={{marginBottom: '0.75rem'}}>
                  <strong>Continuous Improvement:</strong> Regular evaluation and refinement of our engineering processes based on project outcomes and industry developments.
                </li>
                <li style={{marginBottom: '0.75rem'}}>
                  <strong>Professional Development:</strong> Ongoing education and training to maintain current knowledge of regulations, technologies, and best practices.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section" style={{backgroundColor: 'var(--gray-100)'}}>
        <div className="container">
          <div className="section-header">
            <h2>Our Values</h2>
            <p className="section-description">
              The principles that guide our work and relationships
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <div key={index} className="card">
                <div className="flex items-center gap-3 mb-3">
                  <div className="card-icon" style={{margin: 0, fontSize: '1.5rem'}}>
                    {value.icon}
                  </div>
                  <h4 style={{margin: 0, fontSize: '1.1rem'}}>{value.title}</h4>
                </div>
                <p style={{fontSize: '0.9rem'}}>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder & Team */}
      <section className="section" style={{backgroundColor: '#f8fafc'}}>
        <div className="container">
          <div className="section-header">
            <h2>Leadership & Expertise</h2>
            <p className="section-description">
              Professional engineering leadership with technical depth and practical experience
            </p>
          </div>
          
          <div style={{display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '2rem', marginBottom: '3rem'}}>
            {/* Founder Profile */}
            <div>
              <div className="card">
                <div style={{display: 'flex', gap: '1.5rem'}}>
                  <div style={{
                    width: '150px', 
                    height: '150px', 
                    background: 'linear-gradient(135deg, #f0fdff 0%, #e0f7ff 100%)',
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <div style={{textAlign: 'center'}}>
                      <div style={{fontSize: '2.5rem', fontWeight: 'bold', color: 'var(--accent-teal)', marginBottom: '0.5rem'}}>RM</div>
                      <div style={{fontSize: '0.8rem', color: '#64748b'}}>Principal Engineer</div>
                    </div>
                  </div>
                  <div style={{flex: 1}}>
                    <h3 style={{fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--text-dark)', marginBottom: '0.5rem'}}>Dr. Reza Moghaddam</h3>
                    <h4 style={{fontSize: '1.1rem', color: 'var(--accent-teal)', fontWeight: '600', marginBottom: '0.5rem'}}>Founder & Principal Engineer</h4>
                    <p style={{fontSize: '0.9rem', color: 'var(--accent-teal)', fontWeight: '500', marginBottom: '1rem'}}>PhD in Engineering</p>
                    
                    <div style={{space: '1rem 0', color: 'var(--text-medium)', fontSize: '0.9rem'}}>
                      <p style={{marginBottom: '0.75rem'}}>
                        <strong>Academic Foundation:</strong> PhD in Engineering providing advanced theoretical 
                        knowledge in chemical and bioprocess engineering, with research expertise in process 
                        optimization and system design methodologies.
                      </p>
                      
                      <p style={{marginBottom: '0.75rem'}}>
                        <strong>Professional Focus:</strong> Chemical and bioprocess engineering with specialization 
                        in process design, optimization, and system integration for industrial applications, 
                        combining doctoral-level theoretical knowledge with practical implementation experience.
                      </p>
                      
                      <p style={{marginBottom: '0.75rem'}}>
                        <strong>Technical Expertise:</strong> Advanced process modeling, equipment design, mass and heat 
                        transfer analysis, reaction engineering, and environmental compliance systems backed by 
                        comprehensive research background and analytical capabilities.
                      </p>
                      
                      <p style={{marginBottom: '1rem'}}>
                        <strong>Industry Experience:</strong> Water treatment systems, food and dairy processing, 
                        chemical manufacturing, and environmental engineering applications with research-informed 
                        approach to complex engineering challenges.
                      </p>
                    </div>
                    
                    <div style={{display: 'flex', flexWrap: 'wrap', gap: '0.5rem'}}>
                      <span style={{
                        padding: '0.25rem 0.75rem', 
                        background: '#e6fffa', 
                        color: '#047857',
                        borderRadius: '20px', 
                        fontSize: '0.8rem',
                        border: '1px solid #a7f3d0'
                      }}>Process Design</span>
                      <span style={{
                        padding: '0.25rem 0.75rem', 
                        background: '#eff6ff', 
                        color: '#1d4ed8',
                        borderRadius: '20px', 
                        fontSize: '0.8rem',
                        border: '1px solid #bfdbfe'
                      }}>System Optimization</span>
                      <span style={{
                        padding: '0.25rem 0.75rem', 
                        background: '#f0fdf4', 
                        color: '#166534',
                        borderRadius: '20px', 
                        fontSize: '0.8rem',
                        border: '1px solid #bbf7d0'
                      }}>Regulatory Compliance</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Company Approach */}
            <div>
              <div className="card" style={{height: '100%'}}>
                <h3 style={{fontSize: '1.25rem', fontWeight: 'bold', color: 'var(--text-dark)', marginBottom: '1rem'}}>Our Approach</h3>
                <div style={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>
                  <div style={{display: 'flex', alignItems: 'start', gap: '0.75rem'}}>
                    <FaUsers style={{color: 'var(--accent-teal)', marginTop: '0.25rem', flexShrink: 0}} />
                    <div>
                      <h4 style={{fontWeight: '600', margin: '0 0 0.25rem 0'}}>Client-Centered</h4>
                      <p style={{fontSize: '0.85rem', color: 'var(--text-medium)', margin: 0}}>Understanding specific needs and constraints</p>
                    </div>
                  </div>
                  
                  <div style={{display: 'flex', alignItems: 'start', gap: '0.75rem'}}>
                    <FaTools style={{color: '#2563eb', marginTop: '0.25rem', flexShrink: 0}} />
                    <div>
                      <h4 style={{fontWeight: '600', margin: '0 0 0.25rem 0'}}>Technical Rigor</h4>
                      <p style={{fontSize: '0.85rem', color: 'var(--text-medium)', margin: 0}}>Evidence-based engineering solutions</p>
                    </div>
                  </div>
                  
                  <div style={{display: 'flex', alignItems: 'start', gap: '0.75rem'}}>
                    <FaShieldAlt style={{color: '#059669', marginTop: '0.25rem', flexShrink: 0}} />
                    <div>
                      <h4 style={{fontWeight: '600', margin: '0 0 0.25rem 0'}}>Quality Focus</h4>
                      <p style={{fontSize: '0.85rem', color: 'var(--text-medium)', margin: 0}}>Thorough documentation and validation</p>
                    </div>
                  </div>
                  
                  <div style={{display: 'flex', alignItems: 'start', gap: '0.75rem'}}>
                    <FaGlobe style={{color: '#7c3aed', marginTop: '0.25rem', flexShrink: 0}} />
                    <div>
                      <h4 style={{fontWeight: '600', margin: '0 0 0.25rem 0'}}>NZ Expertise</h4>
                      <p style={{fontSize: '0.85rem', color: 'var(--text-medium)', margin: 0}}>Local regulatory and market knowledge</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Professional Standards */}
          <div style={{
            background: 'linear-gradient(135deg, #f0fdff 0%, #e0f7ff 100%)',
            borderRadius: '12px',
            padding: '2rem',
            border: '1px solid #b3e5fc'
          }}>
            <h3 style={{fontSize: '1.25rem', fontWeight: 'bold', color: 'var(--text-dark)', marginBottom: '1.5rem', textAlign: 'center'}}>Professional Standards & Commitment</h3>
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem', textAlign: 'center'}}>
              <div>
                <FaAward style={{fontSize: '2rem', color: 'var(--accent-teal)', marginBottom: '0.75rem'}} />
                <h4 style={{fontWeight: '600', marginBottom: '0.5rem', margin: 0}}>Technical Excellence</h4>
                <p style={{fontSize: '0.85rem', color: 'var(--text-medium)', margin: 0}}>Continuous professional development and industry best practices</p>
              </div>
              <div>
                <FaHandshake style={{fontSize: '2rem', color: '#2563eb', marginBottom: '0.75rem'}} />
                <h4 style={{fontWeight: '600', marginBottom: '0.5rem', margin: 0}}>Professional Ethics</h4>
                <p style={{fontSize: '0.85rem', color: 'var(--text-medium)', margin: 0}}>Honest communication and transparent project management</p>
              </div>
              <div>
                <FaGraduationCap style={{fontSize: '2rem', color: '#059669', marginBottom: '0.75rem'}} />
                <h4 style={{fontWeight: '600', marginBottom: '0.5rem', margin: 0}}>Academic Excellence</h4>
                <p style={{fontSize: '0.85rem', color: 'var(--text-medium)', margin: 0}}>PhD-level expertise driving innovation and knowledge transfer to engineering community</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>Frequently Asked Questions</h2>
            <p className="section-description">
              Common engineering questions and professional insights
            </p>
          </div>
          
          <div className="space-y-6">
            <div className="card">
              <h3 className="text-lg font-bold text-teal-700 mb-3">Process Engineering & Design</h3>
              <div className="space-y-4">
                <div className="border-b border-gray-200 pb-4">
                  <h4 className="font-semibold text-gray-800 mb-2">What is the difference between batch and continuous processes?</h4>
                  <p className="text-gray-600 text-sm">
                    Batch processes operate with discrete quantities processed in cycles, offering flexibility and precise control 
                    but requiring startup/shutdown time. Continuous processes operate at steady state with constant input/output, 
                    providing higher throughput and efficiency but less operational flexibility. The choice depends on production 
                    volume, product variability, and economic factors.
                  </p>
                </div>
                
                <div className="border-b border-gray-200 pb-4">
                  <h4 className="font-semibold text-gray-800 mb-2">How do you determine the optimal reactor size for a chemical process?</h4>
                  <p className="text-gray-600 text-sm">
                    Reactor sizing involves material balance calculations using reaction kinetics, residence time requirements, 
                    and conversion targets. We consider reaction rate constants, feed concentrations, desired conversion levels, 
                    and economic optimization. The design equation varies by reactor type: V = Q(C₀-C)/(-rₐ) for CSTR, 
                    V = Q∫(dC/(-rₐ)) for PFR.
                  </p>
                </div>
                
                <div className="border-b border-gray-200 pb-4">
                  <h4 className="font-semibold text-gray-800 mb-2">What factors influence heat exchanger selection and design?</h4>
                  <p className="text-gray-600 text-sm">
                    Heat exchanger selection depends on fluid properties, temperature ranges, pressure conditions, 
                    fouling characteristics, and economic considerations. We evaluate shell-and-tube, plate, or compact 
                    designs based on heat duty (Q = UA·LMTD), pressure drop constraints, maintenance requirements, 
                    and material compatibility.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="card">
              <h3 className="text-lg font-bold text-teal-700 mb-3">Water & Wastewater Treatment</h3>
              <div className="space-y-4">
                <div className="border-b border-gray-200 pb-4">
                  <h4 className="font-semibold text-gray-800 mb-2">How do you select the appropriate water treatment technology?</h4>
                  <p className="text-gray-600 text-sm">
                    Technology selection is based on influent water quality, treatment objectives, regulatory requirements, 
                    and economic factors. We conduct treatability studies, evaluate multiple alternatives (coagulation/clarification, 
                    membrane filtration, advanced oxidation), and perform lifecycle cost analysis. Pilot testing validates 
                    performance before full-scale implementation.
                  </p>
                </div>
                
                <div className="border-b border-gray-200 pb-4">
                  <h4 className="font-semibold text-gray-800 mb-2">What are the key considerations for membrane system design?</h4>
                  <p className="text-gray-600 text-sm">
                    Membrane design considers flux rates, fouling potential, recovery targets, and energy consumption. 
                    We evaluate pretreatment requirements, membrane materials (RO, UF, MF), cleaning protocols, 
                    and replacement schedules. Critical parameters include transmembrane pressure, crossflow velocity, 
                    and concentration polarization effects.
                  </p>
                </div>
                
                <div className="border-b border-gray-200 pb-4">
                  <h4 className="font-semibold text-gray-800 mb-2">How do biological treatment systems achieve nutrient removal?</h4>
                  <p className="text-gray-600 text-sm">
                    Biological nutrient removal uses specific bacterial populations and process configurations. Nitrification/
                    denitrification removes nitrogen through aerobic and anoxic zones. Phosphorus removal occurs via 
                    enhanced biological phosphorus removal (EBPR) with alternating anaerobic/aerobic conditions. 
                    Design parameters include SRT, F/M ratio, and internal recycle rates.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="card">
              <h3 className="text-lg font-bold text-teal-700 mb-3">Regulatory & Compliance</h3>
              <div className="space-y-4">
                <div className="border-b border-gray-200 pb-4">
                  <h4 className="font-semibold text-gray-800 mb-2">What are the key New Zealand environmental regulations for industrial processes?</h4>
                  <p className="text-gray-600 text-sm">
                    Key regulations include the Resource Management Act (RMA) for discharge consents, National Environmental 
                    Standards (NES), regional plans for air/water quality, and WorkSafe requirements for hazardous substances. 
                    We help navigate consent processes, ensure best practicable option assessments, and maintain ongoing 
                    compliance with monitoring and reporting requirements.
                  </p>
                </div>
                
                <div className="border-b border-gray-200 pb-4">
                  <h4 className="font-semibold text-gray-800 mb-2">How do you ensure food safety compliance in processing systems?</h4>
                  <p className="text-gray-600 text-sm">
                    Food safety compliance follows HACCP principles, GMP requirements, and Food Standards Australia 
                    New Zealand (FSANZ) regulations. We design CIP/SIP systems, implement critical control points, 
                    establish monitoring protocols, and ensure validation documentation. Design considers material 
                    selection, hygienic design principles, and traceability requirements.
                  </p>
                </div>
                
                <div className="border-b border-gray-200 pb-4">
                  <h4 className="font-semibold text-gray-800 mb-2">What documentation is required for engineering projects?</h4>
                  <p className="text-gray-600 text-sm">
                    Comprehensive documentation includes design basis reports, process flow diagrams (PFDs), 
                    piping and instrumentation diagrams (P&IDs), equipment specifications, safety analyses, 
                    commissioning procedures, and operations manuals. Quality assurance requires peer review, 
                    calculation verification, and professional engineering certification.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Capabilities */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>Technical Capabilities</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="card text-center">
              <FaGraduationCap className="card-icon" />
              <h3>Technical Foundation</h3>
              <p>Chemical engineering background with specialization in process design, mass transfer, and reaction engineering applied to real-world industrial challenges</p>
            </div>
            
            <div className="card text-center">
              <FaIndustry className="card-icon" />
              <h3>Practical Experience</h3>
              <p>Hands-on experience in process troubleshooting, system optimization, and project implementation across various industrial applications</p>
            </div>
            
            <div className="card text-center">
              <FaGlobe className="card-icon" />
              <h3>Local Expertise</h3>
              <p>Deep understanding of New Zealand regulatory requirements, industry standards, and local market conditions for effective project delivery</p>
            </div>
            
            <div className="card text-center">
              <FaTools className="card-icon" />
              <h3>Design Capabilities</h3>
              <p>Proficient in process simulation, equipment sizing, P&ID development, and engineering calculations using industry-standard tools and methodologies</p>
            </div>
            
            <div className="card text-center">
              <FaShieldAlt className="card-icon" />
              <h3>Safety & Compliance</h3>
              <p>Thorough understanding of process safety principles, environmental regulations, and quality assurance requirements for compliant design solutions</p>
            </div>
            
            <div className="card text-center">
              <FaUsers className="card-icon" />
              <h3>Project Management</h3>
              <p>Experience in managing engineering projects from concept through implementation, including stakeholder coordination and technical documentation</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;