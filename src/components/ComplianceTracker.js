import React, { useState } from 'react';
import { 
  FaFileAlt, 
  FaClock, 
  FaDollarSign, 
  FaCheckCircle,
  FaExclamationTriangle,
  FaInfoCircle,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaIndustry,
  FaLeaf,
  FaWater,
  FaUsers,
  FaArrowRight,
  FaLightbulb,
  FaChevronDown,
  FaChevronRight
} from 'react-icons/fa';
import LoadingSpinner from './LoadingSpinner';

const ComplianceTracker = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    projectType: '',
    location: '',
    scale: '',
    waterSource: '',
    discharge: '',
    council: '',
    timeline: ''
  });
  const [results, setResults] = useState(null);
  const [isCalculating, setIsCalculating] = useState(false);
  const [expandedSections, setExpandedSections] = useState({});

  const projectTypes = [
    { 
      value: 'water-treatment', 
      label: 'Water Treatment Plant', 
      icon: <FaWater />, 
      description: 'Municipal or industrial water treatment facilities'
    },
    { 
      value: 'wastewater-treatment', 
      label: 'Wastewater Treatment Plant', 
      icon: <FaIndustry />, 
      description: 'Sewage treatment and industrial wastewater processing'
    },
    { 
      value: 'industrial-discharge', 
      label: 'Industrial Discharge System', 
      icon: <FaIndustry />, 
      description: 'Industrial process water discharge management'
    },
    { 
      value: 'stormwater', 
      label: 'Stormwater Management', 
      icon: <FaLeaf />, 
      description: 'WSUD, constructed wetlands, and stormwater treatment'
    },
    { 
      value: 'drinking-water', 
      label: 'Drinking Water Supply', 
      icon: <FaWater />, 
      description: 'Public drinking water treatment and distribution'
    },
    { 
      value: 'agricultural', 
      label: 'Agricultural Processing', 
      icon: <FaLeaf />, 
      description: 'Dairy, food processing, and agricultural water systems'
    },
    { 
      value: 'manufacturing', 
      label: 'Industrial Manufacturing', 
      icon: <FaIndustry />, 
      description: 'Chemical processing, manufacturing, and industrial discharge systems'
    }
  ];

  const councils = [
    { value: 'auckland', label: 'Auckland Council', region: 'Auckland' },
    { value: 'waikato', label: 'Waikato Regional Council', region: 'Waikato' },
    { value: 'canterbury', label: 'Canterbury Regional Council (ECan)', region: 'Canterbury' },
    { value: 'wellington', label: 'Greater Wellington Regional Council', region: 'Wellington' },
    { value: 'bay-of-plenty', label: 'Bay of Plenty Regional Council', region: 'Bay of Plenty' },
    { value: 'otago', label: 'Otago Regional Council', region: 'Otago' },
    { value: 'tasman', label: 'Tasman District Council', region: 'Tasman' },
    { value: 'northland', label: 'Northland Regional Council', region: 'Northland' },
    { value: 'manawatu', label: 'Horizons Regional Council', region: 'Manawatū-Whanganui' },
    { value: 'hawkes-bay', label: 'Hawke\'s Bay Regional Council', region: 'Hawke\'s Bay' },
    { value: 'southland', label: 'Environment Southland', region: 'Southland' }
  ];

  const complianceDatabase = {
    'water-treatment': {
      rma: {
        required: true,
        complexity: 'high',
        permits: ['Water Take Permit', 'Discharge Permit', 'Land Use Consent'],
        timeframe: '12-18 months',
        cost: '$25,000 - $75,000',
        requirements: [
          'Environmental Impact Assessment',
          'Alternative Site Assessment', 
          'Cultural Impact Assessment',
          'Public Notification Process',
          'Technical Design Review'
        ]
      },
      nes: {
        applicable: ['NES-FW (Freshwater)', 'NES-HSDS (Drinking Water Sources)'],
        requirements: [
          'Freshwater National Policy Statement compliance',
          'Source protection requirements',
          'Water quality monitoring protocols',
          'Ecological flow requirements'
        ]
      },
      building: {
        required: true,
        complexity: 'high',
        permits: ['Building Consent', 'Resource Consent Integration'],
        clauses: ['E1 (Surface Water)', 'E2 (External Moisture)', 'G12 (Water Supplies)', 'G13 (Foul Water)']
      },
      specialRequirements: [
        'Drinking Water Standards compliance (Taumata Arowai)',
        'Health Act registration requirements',
        'Water Safety Plan development',
        'Treatment process validation'
      ],
      timeline: {
        planning: '3-6 months',
        consenting: '12-18 months',
        construction: '6-24 months',
        commissioning: '3-6 months'
      }
    },
    'wastewater-treatment': {
      rma: {
        required: true,
        complexity: 'very-high',
        permits: ['Discharge Permit (Land/Water)', 'Air Discharge Permit', 'Land Use Consent'],
        timeframe: '18-24 months',
        cost: '$40,000 - $100,000',
        requirements: [
          'Comprehensive Environmental Impact Assessment',
          'Iwi Consultation Process',
          'Community Consultation',
          'Detailed Discharge Assessment',
          'Long-term Environmental Monitoring Plan'
        ]
      },
      nes: {
        applicable: ['NES-FW (Freshwater)', 'NES-AQ (Air Quality)'],
        requirements: [
          'National Policy Statement Freshwater compliance',
          'Nutrient discharge limits',
          'Ecological health requirements',
          'Cultural values protection'
        ]
      },
      building: {
        required: true,
        complexity: 'very-high',
        permits: ['Building Consent', 'Dangerous Goods Permits'],
        clauses: ['E1', 'E2', 'G13', 'F4 (Safety from Falling)', 'H1 (Energy Efficiency)']
      },
      specialRequirements: [
        'Trade Waste Bylaw compliance',
        'Biosolids management plan',
        'Odor management strategy',
        'Emergency response procedures'
      ],
      timeline: {
        planning: '6-12 months',
        consenting: '18-24 months', 
        construction: '12-36 months',
        commissioning: '6-12 months'
      }
    },
    'industrial-discharge': {
      rma: {
        required: true,
        complexity: 'high',
        permits: ['Discharge Permit', 'Trade Waste Permit', 'Air Discharge Permit'],
        timeframe: '8-12 months',
        cost: '$15,000 - $50,000',
        requirements: [
          'Trade waste assessment',
          'Discharge characterization study', 
          'Environmental impact assessment',
          'Treatment system design',
          'Monitoring and reporting plan'
        ]
      },
      nes: {
        applicable: ['NES-FW (Freshwater)', 'NES-AQ (Air Quality)'],
        requirements: [
          'Freshwater discharge standards',
          'Industrial discharge limits',
          'Treatment requirements',
          'Monitoring protocols'
        ]
      },
      building: {
        required: true,
        complexity: 'medium',
        permits: ['Building Consent'],
        clauses: ['E1', 'E2', 'G13']
      },
      specialRequirements: [
        'Trade waste bylaw compliance',
        'Industrial discharge standards',
        'Treatment system validation',
        'Ongoing monitoring requirements'
      ],
      timeline: {
        planning: '2-4 months',
        consenting: '8-12 months',
        construction: '6-18 months',
        commissioning: '2-4 months'
      }
    },
    'stormwater': {
      rma: {
        required: true,
        complexity: 'medium',
        permits: ['Land Use Consent', 'Stormwater Discharge Permit'],
        timeframe: '6-10 months',
        cost: '$8,000 - $25,000',
        requirements: [
          'Stormwater management plan',
          'WSUD design principles',
          'Catchment analysis',
          'Runoff quality assessment',
          'Maintenance plan'
        ]
      },
      nes: {
        applicable: ['NES-FW (Freshwater)'],
        requirements: [
          'Stormwater discharge standards',
          'First flush treatment',
          'Water quality protection',
          'Ecological flow maintenance'
        ]
      },
      building: {
        required: true,
        complexity: 'medium',
        permits: ['Building Consent', 'Earthworks Consent'],
        clauses: ['E1', 'E2']
      },
      specialRequirements: [
        'WSUD compliance',
        'Auckland TP10 (if applicable)',
        'Maintenance and monitoring',
        'Asset management plan'
      ],
      timeline: {
        planning: '2-3 months',
        consenting: '6-10 months',
        construction: '4-12 months',
        commissioning: '1-2 months'
      }
    },
    'drinking-water': {
      rma: {
        required: true,
        complexity: 'very-high',
        permits: ['Water Take Permit', 'Land Use Consent', 'Discharge Permit'],
        timeframe: '12-24 months',
        cost: '$30,000 - $100,000',
        requirements: [
          'Source water assessment',
          'Water safety plan',
          'Treatment validation',
          'Distribution system design',
          'Emergency response plan'
        ]
      },
      nes: {
        applicable: ['NES-HSDS (Drinking Water Sources)', 'NES-FW (Freshwater)'],
        requirements: [
          'Source protection requirements',
          'Treatment standards',
          'Water safety management',
          'Monitoring and reporting'
        ]
      },
      building: {
        required: true,
        complexity: 'very-high',
        permits: ['Building Consent', 'Dangerous Goods Permits'],
        clauses: ['G12', 'G13', 'E1', 'E2', 'F4']
      },
      specialRequirements: [
        'Taumata Arowai compliance',
        'Health Act registration',
        'Water Safety Plan',
        'Operator certification'
      ],
      timeline: {
        planning: '6-12 months',
        consenting: '12-24 months',
        construction: '12-36 months',
        commissioning: '6-12 months'
      }
    },
    'agricultural': {
      rma: {
        required: true,
        complexity: 'medium',
        permits: ['Discharge Permit', 'Water Take Permit', 'Land Use Consent'],
        timeframe: '6-12 months',
        cost: '$10,000 - $40,000',
        requirements: [
          'Farm environmental plan',
          'Nutrient management plan',
          'Effluent treatment design',
          'Irrigation system design',
          'Environmental monitoring'
        ]
      },
      nes: {
        applicable: ['NES-FW (Freshwater)', 'NPS-FM'],
        requirements: [
          'Nutrient discharge limits',
          'Freshwater quality protection',
          'Stock exclusion requirements',
          'Riparian management'
        ]
      },
      building: {
        required: true,
        complexity: 'medium',
        permits: ['Building Consent'],
        clauses: ['E1', 'E2', 'G13']
      },
      specialRequirements: [
        'HACCP compliance (food processing)',
        'Animal Products Act (if applicable)',
        'Good Manufacturing Practice',
        'Organic certification (if applicable)'
      ],
      timeline: {
        planning: '3-6 months',
        consenting: '6-12 months',
        construction: '6-18 months',
        commissioning: '2-6 months'
      }
    },
    'manufacturing': {
      rma: {
        required: true,
        complexity: 'high',
        permits: ['Discharge Permit', 'Air Discharge Permit', 'Land Use Consent'],
        timeframe: '8-15 months',
        cost: '$20,000 - $60,000',
        requirements: [
          'Environmental management system',
          'Waste characterization study',
          'Treatment system design',
          'Air emissions assessment',
          'Spill response plan'
        ]
      },
      nes: {
        applicable: ['NES-AQ (Air Quality)', 'NES-FW (Freshwater)'],
        requirements: [
          'Air quality standards',
          'Industrial discharge limits',
          'Hazardous substance management',
          'Environmental monitoring'
        ]
      },
      building: {
        required: true,
        complexity: 'high',
        permits: ['Building Consent', 'Dangerous Goods Permits'],
        clauses: ['E1', 'E2', 'F4', 'G13', 'H1']
      },
      specialRequirements: [
        'HSNO Act compliance',
        'Workplace safety requirements',
        'Chemical storage regulations',
        'Emergency response procedures'
      ],
      timeline: {
        planning: '4-8 months',
        consenting: '8-15 months',
        construction: '8-24 months',
        commissioning: '3-8 months'
      }
    }
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const calculateCompliance = async () => {
    setIsCalculating(true);
    
    // Simulate API call for compliance calculation
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    const projectCompliance = complianceDatabase[formData.projectType] || complianceDatabase['water-treatment'];
    
    const calculatedResults = {
      projectType: formData.projectType,
      location: formData.location,
      council: formData.council,
      compliance: projectCompliance,
      riskLevel: calculateRiskLevel(projectCompliance),
      estimatedCost: calculateEstimatedCost(projectCompliance, formData.scale),
      timeline: calculateTimeline(projectCompliance),
      nextSteps: generateNextSteps(projectCompliance),
      documentation: generateDocumentationList(projectCompliance)
    };
    
    setResults(calculatedResults);
    setIsCalculating(false);
  };

  const calculateRiskLevel = (compliance) => {
    if (compliance.rma.complexity === 'very-high') return 'high';
    if (compliance.rma.complexity === 'high') return 'medium';
    return 'low';
  };

  const calculateEstimatedCost = (compliance, scale) => {
    const baseCost = compliance.rma.cost.split(' - ')[0].replace('$', '').replace(',', '');
    const multiplier = scale === 'large' ? 1.5 : scale === 'medium' ? 1.2 : 1.0;
    return Math.round(parseInt(baseCost) * multiplier);
  };

  const calculateTimeline = (compliance) => {
    return compliance.timeline;
  };

  const generateNextSteps = (compliance) => {
    return [
      'Engage with regulatory specialists',
      'Conduct preliminary site assessment',
      'Begin iwi and community consultation',
      'Prepare consent application documentation',
      'Submit resource consent applications'
    ];
  };

  const generateDocumentationList = (compliance) => {
    return [
      'Environmental Impact Assessment',
      'Cultural Impact Assessment',
      'Engineering Design Report',
      'Site Investigation Report',
      'Consultation Summary',
      'Alternative Site Assessment'
    ];
  };

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const resetTracker = () => {
    setCurrentStep(1);
    setFormData({
      projectType: '',
      location: '',
      scale: '',
      waterSource: '',
      discharge: '',
      council: '',
      timeline: ''
    });
    setResults(null);
    setExpandedSections({});
  };

  if (isCalculating) {
    return (
      <section className="section" style={{ backgroundColor: '#f8fafc' }}>
        <div className="container">
          <LoadingSpinner 
            size="large" 
            text="Analyzing compliance requirements..." 
            centered={true}
          />
          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <p style={{ color: 'var(--text-medium)', fontSize: '1.1rem' }}>
              Processing your project parameters through our compliance database...
            </p>
          </div>
        </div>
      </section>
    );
  }

  if (results) {
    return (
      <section className="section" style={{ backgroundColor: '#f8fafc' }}>
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Compliance Assessment Results</h2>
            <p className="section-description">
              Comprehensive compliance analysis for your {projectTypes.find(p => p.value === results.projectType)?.label.toLowerCase()} project
            </p>
          </div>

          {/* Project Summary */}
          <div style={{ 
            background: 'white',
            borderRadius: '12px',
            padding: '2rem',
            marginBottom: '2rem',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
            border: '1px solid #e2e8f0'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '1rem' }}>
              <h3 style={{ color: 'var(--text-dark)', margin: 0 }}>
                Project Assessment Summary
              </h3>
              <button
                onClick={resetTracker}
                style={{
                  background: 'transparent',
                  color: 'var(--accent-teal)',
                  border: '2px solid var(--accent-teal)',
                  padding: '0.5rem 1rem',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  fontSize: '0.9rem',
                  fontWeight: '600'
                }}
              >
                New Assessment
              </button>
            </div>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
              <div style={{ 
                background: '#f0fdff', 
                padding: '1rem', 
                borderRadius: '8px',
                border: '1px solid #b3e5fc'
              }}>
                <div style={{ color: 'var(--accent-teal)', fontWeight: '600', marginBottom: '0.5rem' }}>
                  Project Type
                </div>
                <div style={{ color: 'var(--text-dark)' }}>
                  {projectTypes.find(p => p.value === results.projectType)?.label}
                </div>
              </div>
              
              <div style={{ 
                background: '#fef3c7', 
                padding: '1rem', 
                borderRadius: '8px',
                border: '1px solid #facc15'
              }}>
                <div style={{ color: '#92400e', fontWeight: '600', marginBottom: '0.5rem' }}>
                  Risk Level
                </div>
                <div style={{ 
                  color: results.riskLevel === 'high' ? '#dc2626' : 
                         results.riskLevel === 'medium' ? '#ea580c' : '#059669',
                  fontWeight: '700',
                  textTransform: 'uppercase'
                }}>
                  {results.riskLevel}
                </div>
              </div>
              
              <div style={{ 
                background: '#dcfce7', 
                padding: '1rem', 
                borderRadius: '8px',
                border: '1px solid #86efac'
              }}>
                <div style={{ color: '#166534', fontWeight: '600', marginBottom: '0.5rem' }}>
                  Est. Consent Cost
                </div>
                <div style={{ color: '#166534', fontWeight: '700' }}>
                  ${results.estimatedCost.toLocaleString()}+
                </div>
              </div>
              
              <div style={{ 
                background: '#fce7f3', 
                padding: '1rem', 
                borderRadius: '8px',
                border: '1px solid #f9a8d4'
              }}>
                <div style={{ color: '#be185d', fontWeight: '600', marginBottom: '0.5rem' }}>
                  Council
                </div>
                <div style={{ color: '#be185d' }}>
                  {councils.find(c => c.value === results.council)?.label}
                </div>
              </div>
            </div>
          </div>

          {/* Compliance Requirements */}
          <div style={{ display: 'grid', gap: '1.5rem' }}>
            {/* RMA Requirements */}
            <div style={{
              background: 'white',
              borderRadius: '8px',
              border: '1px solid #e2e8f0',
              overflow: 'hidden'
            }}>
              <button
                onClick={() => toggleSection('rma')}
                style={{
                  width: '100%',
                  background: 'linear-gradient(135deg, #fee2e2 0%, #fecaca 100%)',
                  border: 'none',
                  padding: '1.5rem',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  cursor: 'pointer'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <FaFileAlt style={{ color: '#dc2626', fontSize: '1.5rem' }} />
                  <div>
                    <h3 style={{ color: '#dc2626', margin: 0 }}>Resource Management Act (RMA)</h3>
                    <p style={{ color: '#7f1d1d', margin: 0, fontSize: '0.9rem' }}>
                      Required permits and consenting process
                    </p>
                  </div>
                </div>
                {expandedSections.rma ? <FaChevronDown /> : <FaChevronRight />}
              </button>
              
              {expandedSections.rma && (
                <div style={{ padding: '1.5rem' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                    <div>
                      <h4 style={{ color: 'var(--text-dark)', marginBottom: '1rem' }}>
                        Required Permits
                      </h4>
                      <ul style={{ listStyle: 'none', padding: 0 }}>
                        {results.compliance.rma.permits.map((permit, index) => (
                          <li key={index} style={{ 
                            display: 'flex', 
                            alignItems: 'center', 
                            gap: '0.5rem',
                            marginBottom: '0.75rem',
                            padding: '0.5rem',
                            background: '#fef2f2',
                            borderRadius: '6px'
                          }}>
                            <FaCheckCircle style={{ color: '#dc2626', minWidth: '16px' }} />
                            <span>{permit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 style={{ color: 'var(--text-dark)', marginBottom: '1rem' }}>
                        Key Requirements
                      </h4>
                      <ul style={{ listStyle: 'none', padding: 0 }}>
                        {results.compliance.rma.requirements.map((req, index) => (
                          <li key={index} style={{ 
                            display: 'flex', 
                            alignItems: 'center', 
                            gap: '0.5rem',
                            marginBottom: '0.75rem',
                            padding: '0.5rem',
                            background: '#fef2f2',
                            borderRadius: '6px'
                          }}>
                            <FaExclamationTriangle style={{ color: '#ea580c', minWidth: '16px' }} />
                            <span style={{ fontSize: '0.9rem' }}>{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div style={{ 
                    marginTop: '1.5rem',
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, 1fr)',
                    gap: '1rem'
                  }}>
                    <div style={{ 
                      background: '#fee2e2',
                      padding: '1rem',
                      borderRadius: '6px',
                      textAlign: 'center'
                    }}>
                      <FaClock style={{ color: '#dc2626', fontSize: '1.5rem', marginBottom: '0.5rem' }} />
                      <div style={{ fontWeight: '600', color: '#dc2626' }}>Timeframe</div>
                      <div style={{ fontSize: '0.9rem', color: '#7f1d1d' }}>
                        {results.compliance.rma.timeframe}
                      </div>
                    </div>
                    
                    <div style={{ 
                      background: '#fef3c7',
                      padding: '1rem',
                      borderRadius: '6px',
                      textAlign: 'center'
                    }}>
                      <FaDollarSign style={{ color: '#d97706', fontSize: '1.5rem', marginBottom: '0.5rem' }} />
                      <div style={{ fontWeight: '600', color: '#d97706' }}>Est. Cost</div>
                      <div style={{ fontSize: '0.9rem', color: '#92400e' }}>
                        {results.compliance.rma.cost}
                      </div>
                    </div>
                    
                    <div style={{ 
                      background: '#fce7f3',
                      padding: '1rem',
                      borderRadius: '6px',
                      textAlign: 'center'
                    }}>
                      <FaExclamationTriangle style={{ color: '#be185d', fontSize: '1.5rem', marginBottom: '0.5rem' }} />
                      <div style={{ fontWeight: '600', color: '#be185d' }}>Complexity</div>
                      <div style={{ fontSize: '0.9rem', color: '#831843', textTransform: 'uppercase' }}>
                        {results.compliance.rma.complexity}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Timeline Breakdown */}
            <div style={{
              background: 'white',
              borderRadius: '8px',
              border: '1px solid #e2e8f0',
              overflow: 'hidden'
            }}>
              <button
                onClick={() => toggleSection('timeline')}
                style={{
                  width: '100%',
                  background: 'linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%)',
                  border: 'none',
                  padding: '1.5rem',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  cursor: 'pointer'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <FaCalendarAlt style={{ color: '#2563eb', fontSize: '1.5rem' }} />
                  <div>
                    <h3 style={{ color: '#2563eb', margin: 0 }}>Project Timeline</h3>
                    <p style={{ color: '#1d4ed8', margin: 0, fontSize: '0.9rem' }}>
                      Phase-by-phase schedule breakdown
                    </p>
                  </div>
                </div>
                {expandedSections.timeline ? <FaChevronDown /> : <FaChevronRight />}
              </button>
              
              {expandedSections.timeline && (
                <div style={{ padding: '1.5rem' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
                    {Object.entries(results.timeline).map(([phase, duration], index) => (
                      <div key={phase} style={{
                        background: '#eff6ff',
                        padding: '1.5rem',
                        borderRadius: '8px',
                        border: '2px solid #bfdbfe',
                        textAlign: 'center'
                      }}>
                        <div style={{ 
                          background: '#2563eb',
                          color: 'white',
                          width: '40px',
                          height: '40px',
                          borderRadius: '50%',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          margin: '0 auto 1rem auto',
                          fontWeight: '700'
                        }}>
                          {index + 1}
                        </div>
                        <h4 style={{ color: '#1d4ed8', margin: '0 0 0.5rem 0', textTransform: 'capitalize' }}>
                          {phase}
                        </h4>
                        <div style={{ color: '#1e40af', fontWeight: '600' }}>
                          {duration}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Next Steps */}
            <div style={{
              background: 'white',
              borderRadius: '8px',
              border: '1px solid #e2e8f0',
              overflow: 'hidden'
            }}>
              <button
                onClick={() => toggleSection('nextsteps')}
                style={{
                  width: '100%',
                  background: 'linear-gradient(135deg, #dcfce7 0%, #bbf7d0 100%)',
                  border: 'none',
                  padding: '1.5rem',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  cursor: 'pointer'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <FaLightbulb style={{ color: '#059669', fontSize: '1.5rem' }} />
                  <div>
                    <h3 style={{ color: '#059669', margin: 0 }}>Recommended Next Steps</h3>
                    <p style={{ color: '#047857', margin: 0, fontSize: '0.9rem' }}>
                      Strategic approach for your compliance journey
                    </p>
                  </div>
                </div>
                {expandedSections.nextsteps ? <FaChevronDown /> : <FaChevronRight />}
              </button>
              
              {expandedSections.nextsteps && (
                <div style={{ padding: '1.5rem' }}>
                  <div style={{ display: 'grid', gap: '1rem' }}>
                    {results.nextSteps.map((step, index) => (
                      <div key={index} style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '1rem',
                        padding: '1rem',
                        background: '#f0fdf4',
                        borderRadius: '8px',
                        border: '1px solid #bbf7d0'
                      }}>
                        <div style={{
                          background: '#059669',
                          color: 'white',
                          width: '30px',
                          height: '30px',
                          borderRadius: '50%',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontWeight: '700',
                          minWidth: '30px'
                        }}>
                          {index + 1}
                        </div>
                        <span style={{ color: '#047857', fontWeight: '500' }}>{step}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div style={{
                    marginTop: '2rem',
                    background: 'linear-gradient(135deg, var(--accent-teal) 0%, var(--primary-blue) 100%)',
                    color: 'white',
                    padding: '1.5rem',
                    borderRadius: '8px',
                    textAlign: 'center'
                  }}>
                    <h4 style={{ color: 'white', margin: '0 0 1rem 0' }}>
                      Ready to Start Your Compliance Journey?
                    </h4>
                    <p style={{ margin: '0 0 1.5rem 0', opacity: '0.95' }}>
                      Let our regulatory experts guide you through the entire process
                    </p>
                    <button style={{
                      background: 'white',
                      color: 'var(--accent-teal)',
                      border: 'none',
                      padding: '0.75rem 2rem',
                      borderRadius: '6px',
                      fontWeight: '600',
                      cursor: 'pointer',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.5rem'
                    }}>
                      Schedule Consultation <FaArrowRight />
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="section" style={{ backgroundColor: '#f8fafc' }}>
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">RMA/NES Compliance Tracker</h2>
          <p className="section-description">
            Get instant assessment of regulatory requirements for your New Zealand engineering project
          </p>
        </div>

        {/* Assessment Form */}
        <div style={{ 
          maxWidth: '800px',
          margin: '0 auto',
          background: 'white',
          borderRadius: '12px',
          padding: '2rem',
          boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
          border: '1px solid #e2e8f0'
        }}>
          {/* Step 1: Project Type */}
          {currentStep === 1 && (
            <div>
              <h3 style={{ color: 'var(--text-dark)', marginBottom: '1.5rem' }}>
                Step 1: Select Your Project Type
              </h3>
              <div style={{ display: 'grid', gap: '1rem' }}>
                {projectTypes.map((type) => (
                  <button
                    key={type.value}
                    onClick={() => handleInputChange('projectType', type.value)}
                    style={{
                      padding: '1.5rem',
                      border: formData.projectType === type.value 
                        ? '2px solid var(--accent-teal)' 
                        : '2px solid #e2e8f0',
                      borderRadius: '8px',
                      background: formData.projectType === type.value 
                        ? '#f0fdff' 
                        : 'white',
                      cursor: 'pointer',
                      textAlign: 'left',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                      <div style={{ fontSize: '1.5rem', color: 'var(--accent-teal)' }}>
                        {type.icon}
                      </div>
                      <div>
                        <div style={{ fontWeight: '600', color: 'var(--text-dark)', marginBottom: '0.25rem' }}>
                          {type.label}
                        </div>
                        <div style={{ fontSize: '0.9rem', color: 'var(--text-medium)' }}>
                          {type.description}
                        </div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 2: Location and Council */}
          {currentStep === 2 && (
            <div>
              <h3 style={{ color: 'var(--text-dark)', marginBottom: '1.5rem' }}>
                Step 2: Project Location & Scale
              </h3>
              
              <div style={{ display: 'grid', gap: '1.5rem' }}>
                <div>
                  <label style={{ 
                    display: 'block', 
                    fontWeight: '600', 
                    marginBottom: '0.5rem',
                    color: 'var(--text-dark)'
                  }}>
                    <FaMapMarkerAlt style={{ marginRight: '0.5rem', color: 'var(--accent-teal)' }} />
                    Regional Council
                  </label>
                  <select
                    value={formData.council}
                    onChange={(e) => handleInputChange('council', e.target.value)}
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      border: '2px solid #e2e8f0',
                      borderRadius: '6px',
                      fontSize: '1rem',
                      background: 'white'
                    }}
                  >
                    <option value="">Select your regional council...</option>
                    {councils.map((council) => (
                      <option key={council.value} value={council.value}>
                        {council.label} - {council.region}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label style={{ 
                    display: 'block', 
                    fontWeight: '600', 
                    marginBottom: '0.5rem',
                    color: 'var(--text-dark)'
                  }}>
                    Project Scale
                  </label>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.75rem' }}>
                    {[
                      { value: 'small', label: 'Small Scale', description: '< 1,000 people served' },
                      { value: 'medium', label: 'Medium Scale', description: '1,000 - 10,000 people' },
                      { value: 'large', label: 'Large Scale', description: '> 10,000 people served' }
                    ].map((scale) => (
                      <button
                        key={scale.value}
                        onClick={() => handleInputChange('scale', scale.value)}
                        style={{
                          padding: '1rem',
                          border: formData.scale === scale.value 
                            ? '2px solid var(--accent-teal)' 
                            : '2px solid #e2e8f0',
                          borderRadius: '8px',
                          background: formData.scale === scale.value 
                            ? '#f0fdff' 
                            : 'white',
                          cursor: 'pointer',
                          textAlign: 'center'
                        }}
                      >
                        <div style={{ fontWeight: '600', color: 'var(--text-dark)', marginBottom: '0.25rem' }}>
                          {scale.label}
                        </div>
                        <div style={{ fontSize: '0.8rem', color: 'var(--text-medium)' }}>
                          {scale.description}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label style={{ 
                    display: 'block', 
                    fontWeight: '600', 
                    marginBottom: '0.5rem',
                    color: 'var(--text-dark)'
                  }}>
                    <FaCalendarAlt style={{ marginRight: '0.5rem', color: 'var(--accent-teal)' }} />
                    Desired Timeline
                  </label>
                  <select
                    value={formData.timeline}
                    onChange={(e) => handleInputChange('timeline', e.target.value)}
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      border: '2px solid #e2e8f0',
                      borderRadius: '6px',
                      fontSize: '1rem',
                      background: 'white'
                    }}
                  >
                    <option value="">Select preferred timeline...</option>
                    <option value="urgent">Urgent (&lt; 6 months)</option>
                    <option value="standard">Standard (6-18 months)</option>
                    <option value="flexible">Flexible (&gt; 18 months)</option>
                  </select>
                </div>
              </div>
            </div>
          )}

          {/* Navigation */}
          <div style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center',
            marginTop: '2rem',
            paddingTop: '1.5rem',
            borderTop: '1px solid #e2e8f0'
          }}>
            {currentStep > 1 && (
              <button
                onClick={() => setCurrentStep(prev => prev - 1)}
                style={{
                  background: 'transparent',
                  color: 'var(--text-medium)',
                  border: '2px solid #e2e8f0',
                  padding: '0.75rem 1.5rem',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  fontWeight: '600'
                }}
              >
                Previous Step
              </button>
            )}

            <div style={{ marginLeft: 'auto' }}>
              {currentStep < 2 ? (
                <button
                  onClick={() => setCurrentStep(prev => prev + 1)}
                  disabled={!formData.projectType}
                  style={{
                    background: formData.projectType 
                      ? 'linear-gradient(135deg, var(--accent-teal) 0%, var(--primary-blue) 100%)'
                      : '#e2e8f0',
                    color: formData.projectType ? 'white' : '#9ca3af',
                    border: 'none',
                    padding: '0.75rem 1.5rem',
                    borderRadius: '6px',
                    cursor: formData.projectType ? 'pointer' : 'not-allowed',
                    fontWeight: '600',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                  }}
                >
                  Continue <FaArrowRight />
                </button>
              ) : (
                <button
                  onClick={calculateCompliance}
                  disabled={!formData.council || !formData.scale || !formData.timeline}
                  style={{
                    background: (formData.council && formData.scale && formData.timeline)
                      ? 'linear-gradient(135deg, var(--primary-green) 0%, #059669 100%)'
                      : '#e2e8f0',
                    color: (formData.council && formData.scale && formData.timeline) ? 'white' : '#9ca3af',
                    border: 'none',
                    padding: '0.75rem 2rem',
                    borderRadius: '6px',
                    cursor: (formData.council && formData.scale && formData.timeline) ? 'pointer' : 'not-allowed',
                    fontWeight: '600',
                    fontSize: '1.1rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                  }}
                >
                  <FaCheckCircle /> Generate Assessment
                </button>
              )}
            </div>
          </div>

          {/* Progress Indicator */}
          <div style={{ marginTop: '1.5rem' }}>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem' }}>
              {[1, 2].map((step) => (
                <div
                  key={step}
                  style={{
                    width: '12px',
                    height: '12px',
                    borderRadius: '50%',
                    background: currentStep >= step ? 'var(--accent-teal)' : '#e2e8f0',
                    transition: 'all 0.2s ease'
                  }}
                />
              ))}
            </div>
            <div style={{ 
              textAlign: 'center', 
              marginTop: '0.5rem',
              fontSize: '0.9rem',
              color: 'var(--text-medium)'
            }}>
              Step {currentStep} of 2
            </div>
          </div>
        </div>

        {/* Educational Info */}
        <div style={{ 
          marginTop: '3rem',
          background: 'linear-gradient(135deg, #f0fdff 0%, #e0f7ff 100%)',
          padding: '2rem',
          borderRadius: '12px',
          border: '1px solid #b3e5fc',
          textAlign: 'center'
        }}>
          <FaInfoCircle style={{ fontSize: '2rem', color: 'var(--accent-teal)', marginBottom: '1rem' }} />
          <h3 style={{ color: 'var(--text-dark)', marginBottom: '1rem' }}>
            Why Use Our Compliance Tracker?
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
            <div>
              <FaClock style={{ fontSize: '1.5rem', color: 'var(--accent-teal)', marginBottom: '0.5rem' }} />
              <div style={{ fontWeight: '600', color: 'var(--text-dark)' }}>Save Time</div>
              <div style={{ fontSize: '0.9rem', color: 'var(--text-medium)' }}>
                Instant assessment instead of weeks of research
              </div>
            </div>
            <div>
              <FaDollarSign style={{ fontSize: '1.5rem', color: 'var(--accent-teal)', marginBottom: '0.5rem' }} />
              <div style={{ fontWeight: '600', color: 'var(--text-dark)' }}>Avoid Delays</div>
              <div style={{ fontSize: '0.9rem', color: 'var(--text-medium)' }}>
                Understand requirements before you start
              </div>
            </div>
            <div>
              <FaUsers style={{ fontSize: '1.5rem', color: 'var(--accent-teal)', marginBottom: '0.5rem' }} />
              <div style={{ fontWeight: '600', color: 'var(--text-dark)' }}>Expert Guidance</div>
              <div style={{ fontSize: '0.9rem', color: 'var(--text-medium)' }}>
                Based on our extensive NZ project experience
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComplianceTracker;