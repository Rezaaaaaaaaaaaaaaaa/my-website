import React, { useState } from 'react';
import { 
  FaMapMarkerAlt, 
  FaIndustry, 
  FaCalendarAlt, 
  FaUsers, 
  FaCheckCircle,
  FaFileAlt,
  FaExternalLinkAlt,
  FaLeaf,
  FaWater,
  FaFlask
} from 'react-icons/fa';
import Modal from './Modal';

const NZRegionalMap = () => {
  const [selectedRegion, setSelectedRegion] = useState(null);
  const [activeProject, setActiveProject] = useState(null);

  const regionData = {
    northland: {
      name: 'Northland',
      coordinates: { x: 50, y: 15 },
      projects: [
        {
          id: 'northland-1',
          title: 'Far North District Water Treatment Upgrade',
          location: 'Kaitaia',
          type: 'Municipal Water Treatment',
          year: '2023',
          client: 'Far North District Council',
          serviceType: 'water-treatment',
          status: 'completed',
          description: 'Advanced membrane filtration system upgrade serving 15,000 residents',
          outcomes: ['95% pathogen removal', '40% energy savings', 'AA+ water quality rating'],
          compliance: ['Drinking Water Standards', 'Resource Consent', 'Health Act compliance']
        }
      ],
      services: ['Water Treatment', 'Environmental Compliance', 'Regional Partnerships'],
      specialties: ['Rural Water Systems', 'Tourism Infrastructure', 'Agricultural Processing'],
      council: 'Northland Regional Council',
      complianceNotes: 'Focus on coastal management and water allocation'
    },
    auckland: {
      name: 'Auckland',
      coordinates: { x: 52, y: 25 },
      projects: [
        {
          id: 'auckland-1',
          title: 'Stormwater Management WSUD Implementation',
          location: 'North Shore',
          type: 'Stormwater Infrastructure',
          year: '2023',
          client: 'Auckland Council',
          serviceType: 'water-treatment',
          status: 'completed',
          description: 'Citywide constructed wetlands and bioretention systems',
          outcomes: ['85% pollutant removal', '60% peak flow reduction', 'Enhanced biodiversity'],
          compliance: ['Auckland Unitary Plan', 'NES-FW', 'Stormwater Bylaw']
        },
        {
          id: 'auckland-2',
          title: 'Industrial Wastewater Zero Discharge System',
          location: 'Penrose',
          type: 'Industrial Water Treatment',
          year: '2022',
          client: 'Manufacturing Consortium',
          serviceType: 'chemical-process',
          status: 'completed',
          description: 'Advanced treatment achieving 100% water recovery and reuse',
          outcomes: ['Zero liquid discharge', '30% cost reduction', 'Full compliance achieved'],
          compliance: ['Trade Waste Bylaw', 'Discharge Consent', 'ISO 14001']
        }
      ],
      services: ['All Services Available', 'Main Office Location', '24/7 Emergency Response'],
      specialties: ['Urban Infrastructure', 'Industrial Complex', 'High-Density Applications'],
      council: 'Auckland Council (Supercity)',
      complianceNotes: 'Complex unitary plan requirements, high environmental standards'
    },
    waikato: {
      name: 'Waikato',
      coordinates: { x: 55, y: 35 },
      projects: [
        {
          id: 'waikato-1',
          title: 'Dairy Processing Biogas Integration',
          location: 'Te Awamutu',
          type: 'Bioprocess Engineering',
          year: '2022',
          client: 'Fonterra Co-operative',
          serviceType: 'bioprocess',
          status: 'completed',
          description: 'Advanced anaerobic digestion system for dairy waste processing',
          outcomes: ['25% facility energy from biogas', '40% waste reduction', 'Carbon negative operation'],
          compliance: ['RMA Discharge Consent', 'NES-Air Quality', 'Food Safety Standards']
        },
        {
          id: 'waikato-2',
          title: 'Municipal MBR Wastewater Plant',
          location: 'Hamilton',
          type: 'Biological Treatment',
          year: '2023',
          client: 'Waikato Regional Council',
          serviceType: 'bioprocess',
          status: 'completed',
          description: 'Membrane bioreactor serving 45,000 residents with advanced nutrient removal',
          outcomes: ['99.5% pathogen removal', 'Advanced nutrient removal', 'Effluent reuse capability'],
          compliance: ['NPS-FW compliance', 'Regional Plan requirements', 'Discharge standards']
        }
      ],
      services: ['Bioprocess Engineering', 'Food Processing', 'Agricultural Technology'],
      specialties: ['Dairy Industry', 'Agricultural Processing', 'River Systems Management'],
      council: 'Waikato Regional Council',
      complianceNotes: 'Strict freshwater management under NPS-FW, dairy industry focus'
    },
    bayofplenty: {
      name: 'Bay of Plenty',
      coordinates: { x: 65, y: 32 },
      projects: [
        {
          id: 'bop-1',
          title: 'Kiwifruit Processing Water Recovery',
          location: 'Tauranga',
          type: 'Food Engineering',
          year: '2023',
          client: 'Zespri International',
          serviceType: 'food-engineering',
          status: 'completed',
          description: 'Closed-loop water treatment achieving zero liquid discharge',
          outcomes: ['100% water recovery', 'Zero waste facility', 'Export quality maintained'],
          compliance: ['HACCP Certified', 'BRC Grade A', 'Export Standards']
        }
      ],
      services: ['Food Engineering', 'Horticulture Systems', 'Export Processing'],
      specialties: ['Kiwifruit Processing', 'Avocado Industry', 'Aquaculture Systems'],
      council: 'Bay of Plenty Regional Council',
      complianceNotes: 'Export industry requirements, coastal environment management'
    },
    wellington: {
      name: 'Wellington',
      coordinates: { x: 58, y: 55 },
      projects: [
        {
          id: 'wellington-1',
          title: 'Government Precinct Water Efficiency',
          location: 'Wellington CBD',
          type: 'Building Services',
          year: '2023',
          client: 'Ministry of Business Innovation & Employment',
          serviceType: 'chemical-process',
          status: 'completed',
          description: 'Advanced water treatment and recycling for government buildings',
          outcomes: ['50% water use reduction', 'Government sustainability targets met', 'Cost savings $200k/year'],
          compliance: ['Green Star rating', 'Government procurement standards', 'Building Code compliance']
        }
      ],
      services: ['Government Consulting', 'Building Services', 'Policy Support'],
      specialties: ['Government Sector', 'Regulatory Consulting', 'Policy Development'],
      council: 'Greater Wellington Regional Council',
      complianceNotes: 'Capital city regulations, government sector requirements'
    },
    canterbury: {
      name: 'Canterbury',
      coordinates: { x: 60, y: 70 },
      projects: [
        {
          id: 'canterbury-1',
          title: 'Marine Biotechnology Research Facility',
          location: 'Christchurch',
          type: 'Research & Development',
          year: '2023',
          client: 'NIWA (Crown Research)',
          serviceType: 'chemical-process',
          status: 'completed',
          description: 'Specialized extraction system for marine compound research',
          outcomes: ['Research capabilities enhanced', 'Sustainable extraction methods', 'International collaboration enabled'],
          compliance: ['HSNO Compliance', 'EPA Approved', 'Research Quality Standards']
        },
        {
          id: 'canterbury-2',
          title: 'Alpine Water Treatment Optimization',
          location: 'Timaru',
          type: 'Municipal Water Treatment',
          year: '2022',
          client: 'Timaru District Council',
          serviceType: 'water-treatment',
          status: 'completed',
          description: 'Optimization of alpine water sources with seasonal variation management',
          outcomes: ['Consistent water quality', 'Seasonal resilience', 'Energy efficiency improved'],
          compliance: ['Drinking Water Standards', 'Source protection', 'Emergency response protocols']
        }
      ],
      services: ['Research Partnerships', 'Alpine Systems', 'Agricultural Support'],
      specialties: ['Research & Development', 'Alpine Water Systems', 'Agricultural Technology'],
      council: 'Canterbury Regional Council (ECan)',
      complianceNotes: 'Post-earthquake rebuild standards, water allocation constraints'
    },
    otago: {
      name: 'Otago',
      coordinates: { x: 55, y: 85 },
      projects: [
        {
          id: 'otago-1',
          title: 'Central Otago Winery Wastewater',
          location: 'Cromwell',
          type: 'Agricultural Processing',
          year: '2022',
          client: 'Central Otago Wineries Collective',
          serviceType: 'bioprocess',
          status: 'completed',
          description: 'Collaborative wastewater treatment system for multiple wineries',
          outcomes: ['Shared infrastructure savings', 'Enhanced treatment efficiency', 'Tourism compliance'],
          compliance: ['Discharge consent', 'Tourism operator standards', 'Regional wine standards']
        }
      ],
      services: ['Wine Industry', 'Tourism Infrastructure', 'Remote Systems'],
      specialties: ['Wine Processing', 'Tourism Facilities', 'Remote Area Solutions'],
      council: 'Otago Regional Council',
      complianceNotes: 'Water allocation priorities, tourism industry requirements'
    },
    southland: {
      name: 'Southland',
      coordinates: { x: 50, y: 95 },
      projects: [
        {
          id: 'southland-1',
          title: 'Dairy Effluent Management System',
          location: 'Gore',
          type: 'Agricultural Systems',
          year: '2023',
          client: 'Southland Dairy Cooperative',
          serviceType: 'bioprocess',
          status: 'completed',
          description: 'Regional dairy effluent treatment with nutrient recovery',
          outcomes: ['Nutrient recovery for fertilizer', '90% odor reduction', 'Waterway protection enhanced'],
          compliance: ['Regional Water Plan', 'Dairy industry standards', 'Nutrient management protocols']
        }
      ],
      services: ['Dairy Engineering', 'Agricultural Systems', 'Remote Monitoring'],
      specialties: ['Dairy Industry', 'Agricultural Processing', 'Remote Area Expertise'],
      council: 'Environment Southland',
      complianceNotes: 'Intensive dairy farming regulations, water quality protection'
    },
    westcoast: {
      name: 'West Coast',
      coordinates: { x: 40, y: 65 },
      projects: [
        {
          id: 'westcoast-1',
          title: 'Mining Water Treatment Innovation',
          location: 'Greymouth',
          type: 'Industrial Treatment',
          year: '2022',
          client: 'West Coast Mining Consortium',
          serviceType: 'chemical-process',
          status: 'completed',
          description: 'Advanced treatment for mining process water with metal recovery',
          outcomes: ['Metal recovery achieved', 'Environmental compliance', 'Cost-neutral operation'],
          compliance: ['Mining permit conditions', 'Regional discharge standards', 'DoC consultation completed']
        }
      ],
      services: ['Mining Industry', 'Environmental Remediation', 'Specialized Treatment'],
      specialties: ['Mining Applications', 'Environmental Restoration', 'Remote Area Solutions'],
      council: 'West Coast Regional Council',
      complianceNotes: 'Mining industry regulations, conservation land interfaces'
    },
    tasman: {
      name: 'Tasman/Nelson',
      coordinates: { x: 48, y: 50 },
      projects: [
        {
          id: 'tasman-1',
          title: 'Aquaculture RAS Innovation',
          location: 'Nelson',
          type: 'Aquaculture Systems',
          year: '2023',
          client: 'Cawthron Institute',
          serviceType: 'bioprocess',
          status: 'completed',
          description: 'Advanced recirculating aquaculture system for sustainable salmon farming',
          outcomes: ['Water quality optimization', 'Sustainable farming practices', 'Research excellence'],
          compliance: ['Aquaculture standards', 'Environmental sustainability', 'Research protocols']
        }
      ],
      services: ['Aquaculture Engineering', 'Marine Systems', 'Research Support'],
      specialties: ['Salmon Farming', 'Marine Biotechnology', 'Sustainable Aquaculture'],
      council: 'Tasman District Council / Nelson City Council',
      complianceNotes: 'Aquaculture Management Areas, coastal environment protection'
    }
  };

  const serviceTypeIcons = {
    'water-treatment': <FaWater style={{ color: '#0891b2' }} />,
    'bioprocess': <FaLeaf style={{ color: '#059669' }} />,
    'chemical-process': <FaFlask style={{ color: '#7c3aed' }} />,
    'food-engineering': <FaIndustry style={{ color: '#dc2626' }} />
  };

  const openRegionModal = (regionKey) => {
    setSelectedRegion(regionKey);
  };

  const closeRegionModal = () => {
    setSelectedRegion(null);
    setActiveProject(null);
  };

  const openProjectModal = (project) => {
    setActiveProject(project);
  };

  const closeProjectModal = () => {
    setActiveProject(null);
  };

  const selectedRegionData = selectedRegion ? regionData[selectedRegion] : null;

  return (
    <section className="section" style={{ backgroundColor: 'white' }}>
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">New Zealand Regional Coverage</h2>
          <p className="section-description">
            Comprehensive engineering services across Aotearoa - click on any region to explore our local projects and expertise
          </p>
        </div>

        {/* Interactive Map */}
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center',
          marginBottom: '3rem'
        }}>
          <div style={{ 
            position: 'relative',
            width: '600px',
            height: '800px',
            background: 'linear-gradient(135deg, #f0fdff 0%, #e0f7ff 100%)',
            borderRadius: '20px',
            border: '2px solid var(--accent-teal)',
            padding: '2rem',
            boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)'
          }}>
            {/* Map Title */}
            <div style={{ 
              textAlign: 'center', 
              marginBottom: '2rem',
              color: 'var(--text-dark)',
              fontSize: '1.2rem',
              fontWeight: '700'
            }}>
              Aotearoa New Zealand
            </div>

            {/* North Island Outline */}
            <div style={{
              position: 'absolute',
              top: '80px',
              left: '200px',
              width: '200px',
              height: '300px',
              border: '3px solid var(--accent-teal)',
              borderRadius: '50px 50px 30px 80px',
              backgroundColor: 'rgba(255, 255, 255, 0.3)',
              opacity: '0.7'
            }}>
              <div style={{
                position: 'absolute',
                top: '10px',
                left: '80px',
                color: 'var(--text-medium)',
                fontSize: '0.9rem',
                fontWeight: '600'
              }}>
                North Island
              </div>
            </div>

            {/* South Island Outline */}
            <div style={{
              position: 'absolute',
              top: '400px',
              left: '180px',
              width: '180px',
              height: '320px',
              border: '3px solid var(--accent-teal)',
              borderRadius: '80px 30px 50px 50px',
              backgroundColor: 'rgba(255, 255, 255, 0.3)',
              opacity: '0.7'
            }}>
              <div style={{
                position: 'absolute',
                top: '10px',
                left: '60px',
                color: 'var(--text-medium)',
                fontSize: '0.9rem',
                fontWeight: '600'
              }}>
                South Island
              </div>
            </div>

            {/* Regional Markers */}
            {Object.entries(regionData).map(([regionKey, region]) => (
              <button
                key={regionKey}
                onClick={() => openRegionModal(regionKey)}
                style={{
                  position: 'absolute',
                  left: `${region.coordinates.x}%`,
                  top: `${region.coordinates.y}%`,
                  transform: 'translate(-50%, -50%)',
                  background: 'linear-gradient(135deg, var(--accent-teal) 0%, var(--primary-blue) 100%)',
                  color: 'white',
                  border: 'none',
                  borderRadius: '50%',
                  width: '50px',
                  height: '50px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.2rem',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
                  transition: 'all 0.3s ease',
                  zIndex: 10
                }}
                onMouseOver={(e) => {
                  e.target.style.transform = 'translate(-50%, -50%) scale(1.2)';
                  e.target.style.boxShadow = '0 6px 20px rgba(0, 0, 0, 0.3)';
                }}
                onMouseOut={(e) => {
                  e.target.style.transform = 'translate(-50%, -50%) scale(1)';
                  e.target.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.2)';
                }}
                title={`${region.name} - ${region.projects.length} projects`}
              >
                <FaMapMarkerAlt />
                
                {/* Project count badge */}
                <div style={{
                  position: 'absolute',
                  top: '-5px',
                  right: '-5px',
                  background: '#ef4444',
                  color: 'white',
                  borderRadius: '50%',
                  width: '20px',
                  height: '20px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '0.7rem',
                  fontWeight: '700'
                }}>
                  {region.projects.length}
                </div>
              </button>
            ))}

            {/* Legend */}
            <div style={{
              position: 'absolute',
              bottom: '2rem',
              left: '2rem',
              right: '2rem',
              background: 'rgba(255, 255, 255, 0.9)',
              borderRadius: '8px',
              padding: '1rem',
              border: '1px solid #e2e8f0'
            }}>
              <div style={{ fontWeight: '600', marginBottom: '0.5rem', color: 'var(--text-dark)' }}>
                Legend
              </div>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-medium)' }}>
                <div style={{ marginBottom: '0.25rem' }}>
                  🔵 Click markers to explore regional projects
                </div>
                <div style={{ marginBottom: '0.25rem' }}>
                  🔢 Numbers show completed projects in region
                </div>
                <div>
                  🏛️ All regions have local council partnerships
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Service Coverage Summary */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
          gap: '1.5rem',
          marginTop: '3rem'
        }}>
          <div style={{
            background: 'linear-gradient(135deg, #dcfce7 0%, #bbf7d0 100%)',
            padding: '1.5rem',
            borderRadius: '8px',
            textAlign: 'center',
            border: '1px solid #86efac'
          }}>
            <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🏛️</div>
            <h4 style={{ color: 'var(--text-dark)', marginBottom: '0.5rem' }}>Regional Councils</h4>
            <p style={{ color: 'var(--text-medium)', margin: 0, fontSize: '0.9rem' }}>
              Established relationships with all 11 regional councils
            </p>
          </div>
          
          <div style={{
            background: 'linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%)',
            padding: '1.5rem',
            borderRadius: '8px',
            textAlign: 'center',
            border: '1px solid #93c5fd'
          }}>
            <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>📍</div>
            <h4 style={{ color: 'var(--text-dark)', marginBottom: '0.5rem' }}>Project Locations</h4>
            <p style={{ color: 'var(--text-medium)', margin: 0, fontSize: '0.9rem' }}>
              Active in 9 regions with 15+ completed projects
            </p>
          </div>
          
          <div style={{
            background: 'linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)',
            padding: '1.5rem',
            borderRadius: '8px',
            textAlign: 'center',
            border: '1px solid #facc15'
          }}>
            <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🤝</div>
            <h4 style={{ color: 'var(--text-dark)', marginBottom: '0.5rem' }}>Local Partnerships</h4>
            <p style={{ color: 'var(--text-medium)', margin: 0, fontSize: '0.9rem' }}>
              Regional associates and collaboration networks
            </p>
          </div>
          
          <div style={{
            background: 'linear-gradient(135deg, #fce7f3 0%, #fbcfe8 100%)',
            padding: '1.5rem',
            borderRadius: '8px',
            textAlign: 'center',
            border: '1px solid #f9a8d4'
          }}>
            <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>⚡</div>
            <h4 style={{ color: 'var(--text-dark)', marginBottom: '0.5rem' }}>Rapid Response</h4>
            <p style={{ color: 'var(--text-medium)', margin: 0, fontSize: '0.9rem' }}>
              24/7 emergency support nationwide
            </p>
          </div>
        </div>
      </div>

      {/* Regional Detail Modal */}
      {selectedRegionData && (
        <Modal
          isOpen={selectedRegion !== null}
          onClose={closeRegionModal}
          title={`${selectedRegionData.name} Regional Portfolio`}
          size="xlarge"
        >
          <div style={{ display: 'grid', gap: '2rem' }}>
            {/* Regional Overview */}
            <div style={{ 
              background: 'linear-gradient(135deg, #f0fdff 0%, #e0f7ff 100%)',
              padding: '1.5rem',
              borderRadius: '8px',
              border: '1px solid #b3e5fc'
            }}>
              <h3 style={{ color: 'var(--text-dark)', marginTop: 0, marginBottom: '1rem' }}>
                Regional Overview
              </h3>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                <div>
                  <h4 style={{ color: 'var(--accent-teal)', marginBottom: '0.75rem' }}>
                    Available Services
                  </h4>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    {selectedRegionData.services.map((service, index) => (
                      <li key={index} style={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        gap: '0.5rem',
                        marginBottom: '0.5rem'
                      }}>
                        <FaCheckCircle style={{ color: 'var(--primary-green)', minWidth: '16px' }} />
                        <span style={{ color: 'var(--text-dark)' }}>{service}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 style={{ color: 'var(--accent-teal)', marginBottom: '0.75rem' }}>
                    Regional Specialties
                  </h4>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    {selectedRegionData.specialties.map((specialty, index) => (
                      <li key={index} style={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        gap: '0.5rem',
                        marginBottom: '0.5rem'
                      }}>
                        <FaIndustry style={{ color: 'var(--primary-blue)', minWidth: '16px' }} />
                        <span style={{ color: 'var(--text-dark)' }}>{specialty}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div style={{ 
                marginTop: '1.5rem',
                padding: '1rem',
                background: 'rgba(255, 255, 255, 0.7)',
                borderRadius: '6px'
              }}>
                <h4 style={{ color: 'var(--text-dark)', marginTop: 0, marginBottom: '0.5rem' }}>
                  Regulatory Authority: {selectedRegionData.council}
                </h4>
                <p style={{ margin: 0, color: 'var(--text-medium)', fontSize: '0.95rem' }}>
                  {selectedRegionData.complianceNotes}
                </p>
              </div>
            </div>

            {/* Projects Portfolio */}
            <div>
              <h3 style={{ color: 'var(--text-dark)', marginBottom: '1.5rem' }}>
                Completed Projects ({selectedRegionData.projects.length})
              </h3>
              <div style={{ display: 'grid', gap: '1rem' }}>
                {selectedRegionData.projects.map((project, index) => (
                  <div key={index} style={{
                    background: 'white',
                    border: '2px solid #e2e8f0',
                    borderRadius: '8px',
                    padding: '1.5rem',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}
                  onClick={() => openProjectModal(project)}
                  onMouseOver={(e) => {
                    e.currentTarget.style.borderColor = 'var(--accent-teal)';
                    e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.borderColor = '#e2e8f0';
                    e.currentTarget.style.boxShadow = 'none';
                  }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '1rem' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                        <div style={{ fontSize: '1.5rem' }}>
                          {serviceTypeIcons[project.serviceType]}
                        </div>
                        <div>
                          <h4 style={{ color: 'var(--text-dark)', marginTop: 0, marginBottom: '0.25rem' }}>
                            {project.title}
                          </h4>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '0.9rem', color: 'var(--text-medium)' }}>
                            <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                              <FaMapMarkerAlt /> {project.location}
                            </span>
                            <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                              <FaCalendarAlt /> {project.year}
                            </span>
                            <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                              <FaUsers /> {project.client}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div style={{
                        background: 'var(--primary-green)',
                        color: 'white',
                        padding: '0.25rem 0.75rem',
                        borderRadius: '12px',
                        fontSize: '0.8rem',
                        fontWeight: '600'
                      }}>
                        {project.status.toUpperCase()}
                      </div>
                    </div>
                    <p style={{ color: 'var(--text-medium)', marginBottom: '1rem', lineHeight: '1.5' }}>
                      {project.description}
                    </p>
                    <div style={{ 
                      display: 'flex', 
                      justifyContent: 'space-between',
                      alignItems: 'center'
                    }}>
                      <div style={{ fontSize: '0.9rem', color: 'var(--accent-teal)', fontWeight: '600' }}>
                        {project.type}
                      </div>
                      <div style={{ 
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        color: 'var(--text-medium)',
                        fontSize: '0.9rem'
                      }}>
                        Click for details <FaExternalLinkAlt />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Modal>
      )}

      {/* Project Detail Modal */}
      {activeProject && (
        <Modal
          isOpen={activeProject !== null}
          onClose={closeProjectModal}
          title={activeProject.title}
          size="large"
        >
          <div style={{ display: 'grid', gap: '2rem' }}>
            {/* Project Header */}
            <div style={{ 
              background: 'linear-gradient(135deg, #f0fdff 0%, #e0f7ff 100%)',
              padding: '1.5rem',
              borderRadius: '8px',
              border: '1px solid #b3e5fc'
            }}>
              <div style={{ display: 'flex', alignItems: 'start', gap: '1rem', marginBottom: '1rem' }}>
                <div style={{ fontSize: '2rem' }}>
                  {serviceTypeIcons[activeProject.serviceType]}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.5rem' }}>
                    <span style={{ 
                      background: 'var(--primary-green)',
                      color: 'white',
                      padding: '0.25rem 0.75rem',
                      borderRadius: '12px',
                      fontSize: '0.8rem',
                      fontWeight: '600'
                    }}>
                      {activeProject.status.toUpperCase()}
                    </span>
                    <span style={{ color: 'var(--accent-teal)', fontWeight: '600' }}>
                      {activeProject.type}
                    </span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', fontSize: '0.9rem', color: 'var(--text-medium)' }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                      <FaMapMarkerAlt /> {activeProject.location}
                    </span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                      <FaCalendarAlt /> {activeProject.year}
                    </span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                      <FaUsers /> {activeProject.client}
                    </span>
                  </div>
                </div>
              </div>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.6', margin: 0, color: 'var(--text-medium)' }}>
                {activeProject.description}
              </p>
            </div>

            {/* Project Outcomes */}
            <div>
              <h3 style={{ color: 'var(--text-dark)', marginBottom: '1rem' }}>
                Project Outcomes
              </h3>
              <div style={{ display: 'grid', gap: '0.75rem' }}>
                {activeProject.outcomes.map((outcome, index) => (
                  <div key={index} style={{
                    background: 'linear-gradient(135deg, #dcfce7 0%, #bbf7d0 100%)',
                    padding: '1rem',
                    borderRadius: '6px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    border: '1px solid #86efac'
                  }}>
                    <FaCheckCircle style={{ color: '#166534', fontSize: '1.2rem', minWidth: '20px' }} />
                    <span style={{ color: '#166534', fontWeight: '600', fontSize: '1rem' }}>
                      {outcome}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Compliance & Standards */}
            <div>
              <h3 style={{ color: 'var(--text-dark)', marginBottom: '1rem' }}>
                Compliance & Standards Met
              </h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                {activeProject.compliance.map((item, index) => (
                  <div key={index} style={{
                    background: 'white',
                    border: '2px solid var(--accent-teal)',
                    padding: '0.5rem 1rem',
                    borderRadius: '20px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    fontSize: '0.9rem',
                    color: 'var(--accent-teal)',
                    fontWeight: '600'
                  }}>
                    <FaFileAlt style={{ fontSize: '0.8rem' }} />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Modal>
      )}
    </section>
  );
};

export default NZRegionalMap;