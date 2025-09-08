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

  const regionData = {
    northland: {
      name: 'Northland',
      coordinates: { x: 50, y: 15 },
      projects: [],
      services: ['Water Treatment', 'Environmental Compliance'],
      specialties: ['Water Systems', 'Environmental Processing'],
      council: 'Northland Regional Council',
      complianceNotes: 'Regional environmental compliance services available'
    },
    auckland: {
      name: 'Auckland',
      coordinates: { x: 52, y: 25 },
      projects: [],
      services: ['Engineering Services'],
      specialties: ['Urban Infrastructure', 'Industrial Applications'],
      council: 'Auckland Council',
      complianceNotes: 'Urban planning and environmental compliance'
    },
    waikato: {
      name: 'Waikato',
      coordinates: { x: 55, y: 35 },
      projects: [],
      services: ['Bioprocess Engineering', 'Food Processing'],
      specialties: ['Agricultural Processing', 'Water Systems'],
      council: 'Waikato Regional Council',
      complianceNotes: 'Freshwater management and agricultural compliance'
    },
    bayofplenty: {
      name: 'Bay of Plenty',
      coordinates: { x: 65, y: 32 },
      projects: [],
      services: ['Food Engineering', 'Water Treatment'],
      specialties: ['Food Processing', 'Export Quality Systems'],
      council: 'Bay of Plenty Regional Council',
      complianceNotes: 'Food safety and export compliance'
    }
  };

  const selectedRegionData = selectedRegion ? regionData[selectedRegion] : null;

  return (
    <section className="section" style={{ backgroundColor: 'var(--white)' }}>
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Regional Service Coverage</h2>
          <p className="section-description">
            Professional engineering services available across New Zealand regions
          </p>
        </div>

        <div style={{ position: 'relative', maxWidth: '600px', margin: '0 auto' }}>
          {/* Simplified NZ Map */}
          <div style={{
            width: '100%',
            height: '400px',
            background: 'linear-gradient(135deg, #e0f7ff 0%, #f0fdff 100%)',
            borderRadius: '12px',
            border: '2px solid var(--accent-teal)',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <div style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              textAlign: 'center',
              color: 'var(--text-medium)'
            }}>
              <FaMapMarkerAlt style={{ fontSize: '3rem', color: 'var(--accent-teal)', marginBottom: '1rem' }} />
              <h3 style={{ color: 'var(--text-dark)', marginBottom: '0.5rem' }}>
                Service Coverage Map
              </h3>
              <p>Interactive regional map coming soon</p>
            </div>

            {/* Region Buttons */}
            {Object.entries(regionData).map(([regionKey, region]) => (
              <button
                key={regionKey}
                onClick={() => setSelectedRegion(regionKey)}
                style={{
                  position: 'absolute',
                  left: `${region.coordinates.x}%`,
                  top: `${region.coordinates.y}%`,
                  transform: 'translate(-50%, -50%)',
                  background: 'var(--accent-teal)',
                  color: 'white',
                  border: 'none',
                  borderRadius: '50%',
                  width: '40px',
                  height: '40px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '0.8rem',
                  fontWeight: 'bold',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                  transition: 'all 0.2s ease'
                }}
                onMouseOver={(e) => {
                  e.target.style.transform = 'translate(-50%, -50%) scale(1.1)';
                  e.target.style.background = 'var(--primary-blue)';
                }}
                onMouseOut={(e) => {
                  e.target.style.transform = 'translate(-50%, -50%) scale(1)';
                  e.target.style.background = 'var(--accent-teal)';
                }}
                title={region.name}
              >
                {region.name.substr(0, 3).toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        {/* Region Information Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', marginTop: '2rem' }}>
          {Object.entries(regionData).map(([regionKey, region]) => (
            <div key={regionKey} style={{
              background: 'white',
              borderRadius: '8px',
              padding: '1.5rem',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
              border: '1px solid #e2e8f0',
              borderLeft: selectedRegion === regionKey ? '4px solid var(--accent-teal)' : '4px solid transparent'
            }}>
              <h3 style={{ color: 'var(--text-dark)', marginTop: 0, marginBottom: '1rem' }}>
                {region.name}
              </h3>
              
              <div style={{ marginBottom: '1rem' }}>
                <h4 style={{ fontSize: '0.9rem', color: 'var(--accent-teal)', marginBottom: '0.5rem' }}>
                  Available Services:
                </h4>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {region.services.map((service, idx) => (
                    <li key={idx} style={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      gap: '0.5rem', 
                      marginBottom: '0.25rem',
                      fontSize: '0.85rem'
                    }}>
                      <FaCheckCircle style={{ color: 'var(--primary-green)', fontSize: '0.8rem' }} />
                      {service}
                    </li>
                  ))}
                </ul>
              </div>

              <div style={{ fontSize: '0.8rem', color: 'var(--text-medium)' }}>
                <strong>Regional Council:</strong> {region.council}
              </div>
              
              {region.projects.length === 0 && (
                <div style={{ 
                  marginTop: '1rem', 
                  padding: '0.75rem', 
                  background: '#f8fafc', 
                  borderRadius: '6px',
                  fontSize: '0.85rem',
                  color: 'var(--text-medium)',
                  textAlign: 'center'
                }}>
                  Project portfolio to be updated
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Region Detail Modal */}
      <Modal
        isOpen={selectedRegion !== null}
        onClose={() => setSelectedRegion(null)}
        title={selectedRegionData ? `${selectedRegionData.name} Region` : ''}
      >
        {selectedRegionData && (
          <div>
            <div style={{ marginBottom: '1.5rem' }}>
              <h3 style={{ color: 'var(--text-dark)', marginBottom: '0.5rem' }}>Services Available</h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {selectedRegionData.services.map((service, index) => (
                  <span key={index} style={{
                    background: 'var(--gray-100)',
                    padding: '0.5rem 1rem',
                    borderRadius: '20px',
                    fontSize: '0.85rem',
                    color: 'var(--text-dark)'
                  }}>
                    {service}
                  </span>
                ))}
              </div>
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <h3 style={{ color: 'var(--text-dark)', marginBottom: '0.5rem' }}>Regional Compliance</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-medium)' }}>
                {selectedRegionData.complianceNotes}
              </p>
            </div>

            <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
              <button
                onClick={() => setSelectedRegion(null)}
                style={{
                  background: 'var(--accent-teal)',
                  color: 'white',
                  border: 'none',
                  padding: '0.75rem 1.5rem',
                  borderRadius: '6px',
                  cursor: 'pointer'
                }}
              >
                Close
              </button>
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
};

export default NZRegionalMap;