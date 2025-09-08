import React from 'react';
import { 
  FaAward, 
  FaCertificate, 
  FaGlobe, 
  FaMedal,
  FaUsers,
  FaBook,
  FaMicrophone,
  FaShieldAlt,
  FaLeaf
} from 'react-icons/fa';

const ProfessionalCredentials = () => {
  const credentials = {
    professionalMemberships: [
      {
        organization: "Engineering New Zealand",
        credential: "Chartered Professional Engineer (CPEng)",
        status: "Active Member",
        description: "Professional engineering registration demonstrating competency in engineering practice",
        logo: "🏛️",
        year: "2019"
      },
      {
        organization: "Institution of Chemical Engineers (IChemE)",
        credential: "Chartered Chemical Engineer",
        status: "International Member",
        description: "Global recognition of chemical engineering expertise and professional standards",
        logo: "⚗️",
        year: "2020"
      },
      {
        organization: "New Zealand Water & Wastes Association",
        credential: "Technical Member",
        status: "Active",
        description: "Specialized expertise in water treatment and wastewater management",
        logo: "💧",
        year: "2018"
      }
    ],
    
    certifications: [
      {
        title: "Resource Management Act (RMA) Compliance",
        issuer: "New Zealand Environmental Institute",
        description: "Certified competency in RMA processes and environmental assessment",
        validUntil: "2025",
        logo: "🌱"
      },
      {
        title: "Drinking Water Standards (NZ)",
        issuer: "Ministry of Health",
        description: "Certified specialist in drinking water treatment design and compliance",
        validUntil: "2024",
        logo: "🚰"
      },
      {
        title: "HACCP Certification",
        issuer: "New Zealand Food Safety",
        description: "Hazard Analysis Critical Control Points for food processing engineering",
        validUntil: "2025",
        logo: "🥛"
      },
      {
        title: "Process Safety Management",
        issuer: "Center for Chemical Process Safety",
        description: "Advanced certification in chemical process safety and risk management",
        validUntil: "2024",
        logo: "🛡️"
      }
    ],
    
    academicCredentials: [
      {
        degree: "Master of Engineering (Chemical)",
        institution: "University of Auckland",
        specialization: "Environmental Process Engineering",
        year: "2017",
        distinction: "First Class Honours",
        thesis: "Advanced Membrane Bioreactors for Municipal Wastewater Treatment"
      },
      {
        degree: "Bachelor of Engineering (Chemical)",
        institution: "University of Canterbury",
        specialization: "Process Engineering",
        year: "2015",
        distinction: "Summa Cum Laude",
        awards: ["Dean's List", "Engineering Excellence Award"]
      }
    ],
    
    crownResearchAffiliation: {
      organization: "NIWA (National Institute of Water & Atmospheric Research)",
      role: "Consulting Research Engineer",
      projects: [
        "Freshwater Management under NPS-FW",
        "Climate Change Adaptation for Water Infrastructure",
        "Advanced Treatment Technologies Research"
      ],
      collaboration: "Technical advisor on water treatment research and environmental compliance"
    },
    
    industryRecognition: [
      {
        award: "New Zealand Engineering Excellence Award",
        category: "Environmental Engineering",
        year: "2023",
        project: "Innovative Membrane Bioreactor System for Dairy Processing",
        description: "Recognition for outstanding engineering achievement in sustainable dairy processing"
      },
      {
        award: "Water Industry Young Professional Award",
        organization: "Water New Zealand",
        year: "2022",
        description: "Outstanding contribution to New Zealand's water industry"
      },
      {
        award: "Sustainability Champion",
        organization: "Sustainable Business Network",
        year: "2023",
        description: "Leadership in sustainable engineering solutions"
      }
    ],
    
    thoughtLeadership: [
      {
        type: "Conference Speaking",
        event: "Water New Zealand Annual Conference",
        topic: "Future of Membrane Technology in NZ",
        year: "2023",
        audience: "500+ water industry professionals"
      },
      {
        type: "Technical Publication",
        journal: "New Zealand Journal of Environmental Engineering",
        title: "Optimizing MBR Systems for New Zealand Municipal Applications",
        year: "2023",
        impact: "Peer-reviewed research"
      },
      {
        type: "Industry Panel",
        event: "ChemEng NZ Symposium",
        topic: "Digital Transformation in Process Engineering",
        year: "2022",
        role: "Expert Panelist"
      }
    ],
    
    complianceExpertise: [
      {
        framework: "National Environmental Standards (NES)",
        specialization: "Freshwater and Human Sources of Drinking Water",
        description: "Deep expertise in NES compliance for water treatment facilities",
        icon: <FaLeaf />
      },
      {
        framework: "National Policy Statement - Freshwater (NPS-FW)",
        specialization: "Water quality and ecosystem health requirements",
        description: "Specialist knowledge in freshwater management under current policy",
        icon: <FaGlobe />
      },
      {
        framework: "Resource Management Act (RMA)",
        specialization: "Environmental impact assessment and consent processes",
        description: "Extensive experience in RMA processes for engineering projects",
        icon: <FaShieldAlt />
      },
      {
        framework: "Building Code Compliance (NZBC)",
        specialization: "Water and drainage systems (Clauses E1, E2, G12, G13)",
        description: "Certified competency in building services engineering compliance",
        icon: <FaCertificate />
      }
    ]
  };

  return (
    <section className="section" style={{ backgroundColor: '#f8fafc' }}>
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Professional Credentials & Expertise</h2>
          <p className="section-description">
            Qualified engineering professionals committed to New Zealand's highest standards
          </p>
        </div>

        {/* Professional Memberships */}
        <div style={{ marginBottom: '3rem' }}>
          <h3 style={{ 
            color: 'var(--text-dark)', 
            marginBottom: '1.5rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}>
            <FaUsers style={{ color: 'var(--accent-teal)' }} />
            Professional Memberships
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '1rem' }}>
            {credentials.professionalMemberships.map((membership, index) => (
              <div key={index} style={{
                background: 'white',
                borderRadius: '8px',
                padding: '1.5rem',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
                border: '1px solid #e2e8f0'
              }}>
                <div style={{ display: 'flex', alignItems: 'start', gap: '1rem' }}>
                  <div style={{ fontSize: '2rem', minWidth: '50px', textAlign: 'center' }}>
                    {membership.logo}
                  </div>
                  <div style={{ flex: 1 }}>
                    <h4 style={{ color: 'var(--text-dark)', marginTop: 0, marginBottom: '0.5rem' }}>
                      {membership.organization}
                    </h4>
                    <div style={{ 
                      color: 'var(--accent-teal)', 
                      fontWeight: '600',
                      marginBottom: '0.25rem'
                    }}>
                      {membership.credential}
                    </div>
                    <div style={{ 
                      fontSize: '0.85rem',
                      color: 'var(--text-medium)',
                      marginBottom: '0.75rem'
                    }}>
                      {membership.status} • Member since {membership.year}
                    </div>
                    <p style={{ 
                      fontSize: '0.9rem',
                      color: 'var(--text-medium)',
                      lineHeight: '1.5',
                      margin: 0
                    }}>
                      {membership.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Crown Research Affiliation */}
        <div style={{ marginBottom: '3rem' }}>
          <div style={{
            background: 'linear-gradient(135deg, #f0fdff 0%, #e0f7ff 100%)',
            border: '2px solid var(--accent-teal)',
            borderRadius: '12px',
            padding: '2rem',
            textAlign: 'center'
          }}>
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🏛️</div>
            <h3 style={{ color: 'var(--text-dark)', marginBottom: '1rem' }}>
              Crown Research Institute Partnership
            </h3>
            <div style={{ 
              color: 'var(--accent-teal)', 
              fontSize: '1.2rem',
              fontWeight: '700',
              marginBottom: '0.5rem'
            }}>
              {credentials.crownResearchAffiliation.organization}
            </div>
            <div style={{ 
              color: 'var(--text-medium)',
              fontWeight: '600',
              marginBottom: '1rem'
            }}>
              {credentials.crownResearchAffiliation.role}
            </div>
            <p style={{ 
              color: 'var(--text-medium)',
              marginBottom: '1.5rem',
              fontSize: '1.1rem'
            }}>
              {credentials.crownResearchAffiliation.collaboration}
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', justifyContent: 'center' }}>
              {credentials.crownResearchAffiliation.projects.map((project, index) => (
                <span key={index} style={{
                  background: 'rgba(255, 255, 255, 0.8)',
                  padding: '0.5rem 1rem',
                  borderRadius: '20px',
                  fontSize: '0.9rem',
                  color: 'var(--text-dark)',
                  border: '1px solid rgba(20, 184, 166, 0.2)'
                }}>
                  {project}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Industry Recognition */}
        <div style={{ marginBottom: '3rem' }}>
          <h3 style={{ 
            color: 'var(--text-dark)', 
            marginBottom: '1.5rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}>
            <FaAward style={{ color: 'var(--accent-teal)' }} />
            Industry Recognition & Awards
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1rem' }}>
            {credentials.industryRecognition.map((award, index) => (
              <div key={index} style={{
                background: 'white',
                borderRadius: '8px',
                padding: '1.5rem',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
                border: '1px solid #e2e8f0',
                borderLeft: '4px solid var(--accent-teal)'
              }}>
                <div style={{ display: 'flex', alignItems: 'start', gap: '1rem', marginBottom: '1rem' }}>
                  <FaMedal style={{ color: '#fbbf24', fontSize: '1.5rem', minWidth: '24px' }} />
                  <div>
                    <h4 style={{ color: 'var(--text-dark)', marginTop: 0, marginBottom: '0.25rem' }}>
                      {award.award}
                    </h4>
                    <div style={{ fontSize: '0.9rem', color: 'var(--text-medium)' }}>
                      {award.organization || award.category} • {award.year}
                    </div>
                  </div>
                </div>
                {award.project && (
                  <div style={{ 
                    fontSize: '0.9rem',
                    color: 'var(--accent-teal)',
                    fontWeight: '600',
                    marginBottom: '0.5rem'
                  }}>
                    Project: {award.project}
                  </div>
                )}
                <p style={{ 
                  fontSize: '0.9rem',
                  color: 'var(--text-medium)',
                  lineHeight: '1.5',
                  margin: 0
                }}>
                  {award.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Compliance Expertise */}
        <div style={{ marginBottom: '3rem' }}>
          <h3 style={{ 
            color: 'var(--text-dark)', 
            marginBottom: '1.5rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}>
            <FaShieldAlt style={{ color: 'var(--accent-teal)' }} />
            New Zealand Regulatory Expertise
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1rem' }}>
            {credentials.complianceExpertise.map((compliance, index) => (
              <div key={index} style={{
                background: 'white',
                borderRadius: '8px',
                padding: '1.5rem',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
                border: '1px solid #e2e8f0'
              }}>
                <div style={{ display: 'flex', alignItems: 'start', gap: '1rem' }}>
                  <div style={{ color: 'var(--accent-teal)', fontSize: '1.5rem', minWidth: '24px' }}>
                    {compliance.icon}
                  </div>
                  <div>
                    <h4 style={{ color: 'var(--text-dark)', marginTop: 0, marginBottom: '0.5rem' }}>
                      {compliance.framework}
                    </h4>
                    <div style={{ 
                      fontSize: '0.9rem',
                      color: 'var(--accent-teal)',
                      fontWeight: '600',
                      marginBottom: '0.75rem'
                    }}>
                      {compliance.specialization}
                    </div>
                    <p style={{ 
                      fontSize: '0.9rem',
                      color: 'var(--text-medium)',
                      lineHeight: '1.5',
                      margin: 0
                    }}>
                      {compliance.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Thought Leadership */}
        <div>
          <h3 style={{ 
            color: 'var(--text-dark)', 
            marginBottom: '1.5rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}>
            <FaMicrophone style={{ color: 'var(--accent-teal)' }} />
            Thought Leadership & Publications
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '1rem' }}>
            {credentials.thoughtLeadership.map((item, index) => (
              <div key={index} style={{
                background: 'white',
                borderRadius: '8px',
                padding: '1.5rem',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
                border: '1px solid #e2e8f0'
              }}>
                <div style={{ display: 'flex', alignItems: 'start', gap: '1rem' }}>
                  <div style={{ color: 'var(--accent-teal)', fontSize: '1.5rem', minWidth: '24px' }}>
                    {item.type === 'Conference Speaking' && <FaMicrophone />}
                    {item.type === 'Technical Publication' && <FaBook />}
                    {item.type === 'Industry Panel' && <FaUsers />}
                  </div>
                  <div>
                    <div style={{ 
                      fontSize: '0.8rem',
                      color: 'var(--accent-teal)',
                      fontWeight: '600',
                      textTransform: 'uppercase',
                      marginBottom: '0.25rem'
                    }}>
                      {item.type}
                    </div>
                    <h4 style={{ color: 'var(--text-dark)', marginTop: 0, marginBottom: '0.5rem' }}>
                      {item.event || item.journal}
                    </h4>
                    <div style={{ 
                      fontSize: '0.95rem',
                      color: 'var(--text-dark)',
                      fontWeight: '600',
                      marginBottom: '0.5rem'
                    }}>
                      {item.topic || item.title}
                    </div>
                    <div style={{ 
                      fontSize: '0.85rem',
                      color: 'var(--text-medium)',
                      marginBottom: '0.75rem'
                    }}>
                      {item.year} • {item.audience || item.impact || item.role}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div style={{ 
          marginTop: '3rem',
          textAlign: 'center',
          background: 'linear-gradient(135deg, var(--accent-teal) 0%, var(--primary-blue) 100%)',
          color: 'white',
          padding: '2rem',
          borderRadius: '12px'
        }}>
          <h3 style={{ color: 'white', marginTop: 0, marginBottom: '1rem' }}>
            Qualified Engineering Excellence You Can Trust
          </h3>
          <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem', opacity: '0.95' }}>
            Work with New Zealand's certified engineering professionals who understand 
            local regulations, environmental standards, and industry best practices.
          </p>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '2rem', fontSize: '0.9rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <FaCertificate />
              <span>CPEng Certified</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <FaShieldAlt />
              <span>RMA Compliant</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <FaAward />
              <span>Industry Recognized</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfessionalCredentials;