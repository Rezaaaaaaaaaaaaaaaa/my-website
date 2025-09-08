import React, { useState } from 'react';
import { 
  FaFlask, 
  FaCogs, 
  FaWater, 
  FaArrowRight,
  FaInfoCircle,
  FaPlay,
  FaPause,
  FaChartLine,
  FaThermometerHalf,
  FaTachometerAlt,
  FaTint,
  FaCloudRain,
  FaLeaf,
  FaBolt,
  FaFilter,
  FaRecycle,
  FaVial,
  FaTimes
} from 'react-icons/fa';
import Modal from './Modal';

const InteractiveProcessDiagrams = () => {
  const [selectedProcess, setSelectedProcess] = useState('water-treatment');
  const [activeStep, setActiveStep] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [selectedStepDetails, setSelectedStepDetails] = useState(null);

  const processData = {
    'water-treatment': {
      title: 'Water Treatment Process Flow',
      description: 'Comprehensive municipal water treatment system with advanced filtration and disinfection',
      icon: <FaWater />,
      color: '#0891b2',
      steps: [
        {
          id: 'intake',
          name: 'Raw Water Intake',
          icon: <FaTint />,
          position: { x: 10, y: 50 },
          description: 'Collection of raw water from source (river, lake, or groundwater)',
          parameters: {
            'Flow Rate': '2,500 m³/h',
            'Turbidity': '5-50 NTU',
            'pH': '6.5-8.5',
            'Temperature': '5-25°C'
          },
          equipment: 'Intake pumps, screens, flow meters',
          keyPoints: [
            'Source water quality monitoring',
            'Seasonal variation management',
            'Fish protection screens',
            'Emergency backup systems'
          ]
        },
        {
          id: 'coagulation',
          name: 'Coagulation/Flocculation',
          icon: <FaVial />,
          position: { x: 25, y: 30 },
          description: 'Chemical addition to destabilize particles and form larger flocs',
          parameters: {
            'Alum Dose': '15-40 mg/L',
            'pH Adjustment': '6.0-7.0',
            'Mixing Energy': '200-400 W/m³',
            'Contact Time': '15-30 minutes'
          },
          equipment: 'Chemical dosing pumps, flash mix tanks, flocculation basins',
          keyPoints: [
            'Optimal chemical dosing control',
            'pH optimization for coagulation',
            'Gentle mixing to preserve flocs',
            'Real-time turbidity monitoring'
          ]
        },
        {
          id: 'sedimentation',
          name: 'Sedimentation',
          icon: <FaCloudRain />,
          position: { x: 45, y: 20 },
          description: 'Gravitational settling of flocculated particles in clarifier basins',
          parameters: {
            'Surface Loading': '1.0-2.0 m/h',
            'Detention Time': '2-4 hours',
            'Effluent Turbidity': '<2 NTU',
            'Sludge Production': '100-200 kg/day'
          },
          equipment: 'Clarifier tanks, sludge scrapers, effluent weirs',
          keyPoints: [
            'Laminar flow conditions',
            'Continuous sludge removal',
            'Effluent quality monitoring',
            'Sludge blanket management'
          ]
        },
        {
          id: 'filtration',
          name: 'Rapid Sand Filtration',
          icon: <FaFilter />,
          position: { x: 65, y: 35 },
          description: 'Physical filtration through sand media to remove remaining particles',
          parameters: {
            'Filter Rate': '5-10 m/h',
            'Media Depth': '0.8-1.2 m',
            'Backwash Rate': '15-25 m/h',
            'Effluent Turbidity': '<0.3 NTU'
          },
          equipment: 'Sand filter beds, backwash systems, underdrain network',
          keyPoints: [
            'Optimal filtration velocity',
            'Regular backwashing schedule',
            'Media replacement monitoring',
            'Turbidity breakthrough control'
          ]
        },
        {
          id: 'disinfection',
          name: 'UV Disinfection',
          icon: <FaBolt />,
          position: { x: 80, y: 50 },
          description: 'UV light treatment for pathogen inactivation without chemical residuals',
          parameters: {
            'UV Dose': '40-50 mJ/cm²',
            'UVT': '>95%',
            'Log Removal': '4-log virus, 3-log crypto',
            'Lamp Life': '12,000 hours'
          },
          equipment: 'UV reactors, medium pressure lamps, UV sensors',
          keyPoints: [
            'Validated UV dose delivery',
            'Lamp intensity monitoring',
            'Cleaning system automation',
            'Biodosimetry validation'
          ]
        },
        {
          id: 'storage',
          name: 'Treated Water Storage',
          icon: <FaRecycle />,
          position: { x: 90, y: 70 },
          description: 'Storage of treated water with chlorine residual maintenance',
          parameters: {
            'Storage Capacity': '24-48 hours supply',
            'Cl₂ Residual': '0.2-0.5 mg/L',
            'Contact Time': '>30 minutes',
            'Water Age': '<5 days'
          },
          equipment: 'Clear wells, chlorine boosters, level controls',
          keyPoints: [
            'Adequate contact time',
            'Chlorine residual monitoring',
            'Storage tank maintenance',
            'Distribution system protection'
          ]
        }
      ],
      connections: [
        { from: 'intake', to: 'coagulation' },
        { from: 'coagulation', to: 'sedimentation' },
        { from: 'sedimentation', to: 'filtration' },
        { from: 'filtration', to: 'disinfection' },
        { from: 'disinfection', to: 'storage' }
      ],
      performanceMetrics: {
        'Overall Efficiency': '99.5% turbidity removal',
        'Pathogen Removal': '6-log virus, 4-log bacteria',
        'Treatment Capacity': '60,000 m³/day',
        'Energy Consumption': '0.35 kWh/m³'
      }
    },
    'bioprocess': {
      title: 'Membrane Bioreactor (MBR) Process',
      description: 'Advanced biological wastewater treatment with membrane separation',
      icon: <FaCogs />,
      color: '#059669',
      steps: [
        {
          id: 'influent',
          name: 'Raw Wastewater Influent',
          icon: <FaTint />,
          position: { x: 10, y: 40 },
          description: 'Raw wastewater collection and preliminary screening',
          parameters: {
            'BOD₅': '200-400 mg/L',
            'COD': '400-800 mg/L',
            'TSS': '150-350 mg/L',
            'TN': '30-70 mg/L'
          },
          equipment: 'Influent pumps, coarse screens, grit removal',
          keyPoints: [
            'Flow equalization',
            'Preliminary solids removal',
            'pH monitoring and control',
            'Nutrient analysis'
          ]
        },
        {
          id: 'anoxic',
          name: 'Anoxic Zone',
          icon: <FaLeaf />,
          position: { x: 25, y: 25 },
          description: 'Denitrification process for nitrogen removal',
          parameters: {
            'HRT': '2-4 hours',
            'MLSS': '8,000-12,000 mg/L',
            'DO': '<0.5 mg/L',
            'Temperature': '15-25°C'
          },
          equipment: 'Anoxic reactors, mixers, recycle pumps',
          keyPoints: [
            'Optimal C:N ratio maintenance',
            'Mixed liquor recirculation',
            'Anoxic conditions control',
            'Denitrification monitoring'
          ]
        },
        {
          id: 'aerobic',
          name: 'Aerobic Bioreactor',
          icon: <FaBolt />,
          position: { x: 45, y: 20 },
          description: 'Biological oxidation and nitrification process',
          parameters: {
            'HRT': '6-10 hours',
            'MLSS': '10,000-15,000 mg/L',
            'DO': '2-4 mg/L',
            'F/M Ratio': '0.1-0.2 kg BOD/kg MLSS·d'
          },
          equipment: 'Aeration tanks, blowers, diffusers, DO probes',
          keyPoints: [
            'Optimal dissolved oxygen control',
            'Biomass concentration management',
            'Nutrient balance optimization',
            'Foam and bulking control'
          ]
        },
        {
          id: 'membrane',
          name: 'Membrane Filtration',
          icon: <FaFilter />,
          position: { x: 65, y: 35 },
          description: 'Hollow fiber membrane separation of biomass and effluent',
          parameters: {
            'Flux Rate': '15-25 LMH',
            'TMP': '10-35 kPa',
            'Pore Size': '0.04 μm',
            'Membrane Life': '5-7 years'
          },
          equipment: 'Hollow fiber membranes, vacuum pumps, backwash systems',
          keyPoints: [
            'Sustainable flux operation',
            'Regular cleaning protocols',
            'Membrane integrity monitoring',
            'Fouling prevention strategies'
          ]
        },
        {
          id: 'effluent',
          name: 'High-Quality Effluent',
          icon: <FaWater />,
          position: { x: 85, y: 50 },
          description: 'Treated effluent suitable for reuse or discharge',
          parameters: {
            'BOD₅': '<5 mg/L',
            'TSS': '<1 mg/L',
            'Turbidity': '<0.2 NTU',
            'E. coli': '<1 CFU/100mL'
          },
          equipment: 'Effluent pumps, UV disinfection, monitoring systems',
          keyPoints: [
            'Consistent high quality',
            'Reuse applications ready',
            'Regulatory compliance',
            'Real-time monitoring'
          ]
        },
        {
          id: 'sludge',
          name: 'Waste Sludge Management',
          icon: <FaRecycle />,
          position: { x: 45, y: 65 },
          description: 'Excess sludge processing and disposal',
          parameters: {
            'Sludge Age': '20-40 days',
            'Waste Rate': '0.5-1.0% MLSS/day',
            'Solids Content': '1-3%',
            'Dewater to': '18-25% solids'
          },
          equipment: 'Sludge pumps, thickener, dewatering equipment',
          keyPoints: [
            'Optimal sludge age control',
            'Efficient dewatering',
            'Beneficial reuse options',
            'Environmental compliance'
          ]
        }
      ],
      connections: [
        { from: 'influent', to: 'anoxic' },
        { from: 'anoxic', to: 'aerobic' },
        { from: 'aerobic', to: 'membrane' },
        { from: 'membrane', to: 'effluent' },
        { from: 'aerobic', to: 'sludge' }
      ],
      performanceMetrics: {
        'BOD Removal': '>99%',
        'Nutrient Removal': '90% TN, 95% TP',
        'Pathogen Removal': '6-log reduction',
        'Footprint Reduction': '50% vs conventional'
      }
    },
    'chemical-process': {
      title: 'Chemical Extraction Process',
      description: 'Solvent extraction system for high-value compound recovery',
      icon: <FaFlask />,
      color: '#7c3aed',
      steps: [
        {
          id: 'feedstock',
          name: 'Raw Material Preparation',
          icon: <FaLeaf />,
          position: { x: 10, y: 50 },
          description: 'Feedstock preparation and conditioning for extraction',
          parameters: {
            'Moisture Content': '8-12%',
            'Particle Size': '2-5 mm',
            'Feed Rate': '500 kg/h',
            'Active Compounds': '2-5% w/w'
          },
          equipment: 'Grinders, sieves, dryers, feed hoppers',
          keyPoints: [
            'Optimal particle size distribution',
            'Moisture content control',
            'Pre-treatment optimization',
            'Quality assurance testing'
          ]
        },
        {
          id: 'extraction',
          name: 'Solvent Extraction',
          icon: <FaFlask />,
          position: { x: 30, y: 30 },
          description: 'Counter-current solvent extraction of target compounds',
          parameters: {
            'Solvent Ratio': '10:1 v/w',
            'Temperature': '60-80°C',
            'Contact Time': '2-4 hours',
            'Extraction Efficiency': '85-95%'
          },
          equipment: 'Extraction vessels, heat exchangers, agitators',
          keyPoints: [
            'Optimal solvent selection',
            'Temperature control precision',
            'Mass transfer optimization',
            'Safety system integration'
          ]
        },
        {
          id: 'separation',
          name: 'Liquid-Liquid Separation',
          icon: <FaTachometerAlt />,
          position: { x: 50, y: 20 },
          description: 'Phase separation and solvent recovery',
          parameters: {
            'Settling Time': '30-60 minutes',
            'Interface Detection': 'Automated',
            'Separation Efficiency': '>99%',
            'Solvent Recovery': '95-98%'
          },
          equipment: 'Settlers, centrifuges, interface detectors',
          keyPoints: [
            'Clean phase separation',
            'Automated interface control',
            'High solvent recovery',
            'Continuous operation capability'
          ]
        },
        {
          id: 'concentration',
          name: 'Evaporative Concentration',
          icon: <FaThermometerHalf />,
          position: { x: 70, y: 35 },
          description: 'Solvent evaporation and product concentration',
          parameters: {
            'Operating Pressure': '50-100 kPa',
            'Temperature': '40-60°C',
            'Concentration Factor': '10-20x',
            'Energy Recovery': '70-80%'
          },
          equipment: 'Evaporators, condensers, vacuum systems',
          keyPoints: [
            'Low-temperature evaporation',
            'Heat integration optimization',
            'Vapor quality control',
            'Energy efficiency maximization'
          ]
        },
        {
          id: 'purification',
          name: 'Product Purification',
          icon: <FaVial />,
          position: { x: 85, y: 50 },
          description: 'Final purification and quality standardization',
          parameters: {
            'Purity': '>98%',
            'Moisture': '<0.5%',
            'Yield': '75-85%',
            'Shelf Life': '24 months'
          },
          equipment: 'Crystallizers, dryers, packaging systems',
          keyPoints: [
            'High purity achievement',
            'Quality consistency',
            'Shelf-life optimization',
            'GMP compliance'
          ]
        },
        {
          id: 'recovery',
          name: 'Solvent Recovery',
          icon: <FaRecycle />,
          position: { x: 50, y: 65 },
          description: 'Solvent purification and recycling system',
          parameters: {
            'Recovery Rate': '98-99%',
            'Purity': '>99.5%',
            'Energy Demand': '2.5 GJ/tonne',
            'Waste Generation': '<1%'
          },
          equipment: 'Distillation columns, reboilers, condensers',
          keyPoints: [
            'Near-complete recovery',
            'High purity maintenance',
            'Energy optimization',
            'Waste minimization'
          ]
        }
      ],
      connections: [
        { from: 'feedstock', to: 'extraction' },
        { from: 'extraction', to: 'separation' },
        { from: 'separation', to: 'concentration' },
        { from: 'concentration', to: 'purification' },
        { from: 'separation', to: 'recovery' },
        { from: 'recovery', to: 'extraction' }
      ],
      performanceMetrics: {
        'Overall Yield': '75-85%',
        'Product Purity': '>98%',
        'Solvent Recovery': '98-99%',
        'Energy Efficiency': '85% heat integration'
      }
    }
  };

  const currentProcess = processData[selectedProcess];

  const startAnimation = () => {
    setIsAnimating(true);
    let currentStepIndex = 0;
    
    const animateStep = () => {
      if (currentStepIndex < currentProcess.steps.length) {
        setActiveStep(currentProcess.steps[currentStepIndex].id);
        currentStepIndex++;
        setTimeout(animateStep, 2000);
      } else {
        setIsAnimating(false);
        setActiveStep(null);
      }
    };
    
    animateStep();
  };

  const stopAnimation = () => {
    setIsAnimating(false);
    setActiveStep(null);
  };

  const handleStepClick = (step) => {
    if (!isAnimating) {
      setSelectedStepDetails(step);
      setShowDetailsModal(true);
    }
  };

  return (
    <section className="section" style={{ backgroundColor: 'white' }}>
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Interactive Process Flow Diagrams</h2>
          <p className="section-description">
            Explore our engineering processes with detailed, interactive visualizations
          </p>
        </div>

        {/* Process Selection */}
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          gap: '1rem',
          marginBottom: '3rem'
        }}>
          {Object.entries(processData).map(([key, process]) => (
            <button
              key={key}
              onClick={() => {
                setSelectedProcess(key);
                setActiveStep(null);
                setIsAnimating(false);
              }}
              style={{
                background: selectedProcess === key 
                  ? 'linear-gradient(135deg, var(--accent-teal) 0%, var(--primary-blue) 100%)'
                  : 'white',
                color: selectedProcess === key ? 'white' : 'var(--text-medium)',
                border: selectedProcess === key ? 'none' : '2px solid #e2e8f0',
                padding: '1rem 1.5rem',
                borderRadius: '8px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontSize: '1rem',
                fontWeight: '600',
                transition: 'all 0.3s ease'
              }}
            >
              <div style={{ fontSize: '1.2rem' }}>{process.icon}</div>
              {process.title}
            </button>
          ))}
        </div>

        {/* Process Diagram */}
        <div style={{ 
          background: '#f8fafc',
          borderRadius: '12px',
          padding: '2rem',
          marginBottom: '2rem',
          border: '2px solid #e2e8f0',
          position: 'relative',
          minHeight: '500px'
        }}>
          {/* Process Title and Controls */}
          <div style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center',
            marginBottom: '2rem'
          }}>
            <div>
              <h3 style={{ color: 'var(--text-dark)', margin: 0, marginBottom: '0.5rem' }}>
                {currentProcess.title}
              </h3>
              <p style={{ color: 'var(--text-medium)', margin: 0 }}>
                {currentProcess.description}
              </p>
            </div>
            
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              {!isAnimating ? (
                <button
                  onClick={startAnimation}
                  style={{
                    background: 'linear-gradient(135deg, var(--primary-green) 0%, #059669 100%)',
                    color: 'white',
                    border: 'none',
                    padding: '0.75rem 1.5rem',
                    borderRadius: '6px',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    fontWeight: '600'
                  }}
                >
                  <FaPlay /> Animate Flow
                </button>
              ) : (
                <button
                  onClick={stopAnimation}
                  style={{
                    background: '#ef4444',
                    color: 'white',
                    border: 'none',
                    padding: '0.75rem 1.5rem',
                    borderRadius: '6px',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    fontWeight: '600'
                  }}
                >
                  <FaPause /> Stop Animation
                </button>
              )}
            </div>
          </div>

          {/* SVG Process Flow */}
          <svg
            width="100%"
            height="400"
            viewBox="0 0 100 80"
            style={{ background: 'white', borderRadius: '8px', border: '1px solid #e2e8f0' }}
          >
            {/* Connection Lines */}
            {currentProcess.connections.map((connection, index) => {
              const fromStep = currentProcess.steps.find(s => s.id === connection.from);
              const toStep = currentProcess.steps.find(s => s.id === connection.to);
              
              return (
                <line
                  key={index}
                  x1={fromStep.position.x + 3}
                  y1={fromStep.position.y}
                  x2={toStep.position.x - 3}
                  y2={toStep.position.y}
                  stroke="#cbd5e1"
                  strokeWidth="0.5"
                  markerEnd="url(#arrowhead)"
                />
              );
            })}
            
            {/* Arrow Marker Definition */}
            <defs>
              <marker
                id="arrowhead"
                markerWidth="10"
                markerHeight="7"
                refX="9"
                refY="3.5"
                orient="auto"
              >
                <polygon
                  points="0 0, 10 3.5, 0 7"
                  fill="#cbd5e1"
                />
              </marker>
            </defs>

            {/* Process Steps */}
            {currentProcess.steps.map((step) => (
              <g key={step.id}>
                <circle
                  cx={step.position.x}
                  cy={step.position.y}
                  r="4"
                  fill={activeStep === step.id ? currentProcess.color : 'white'}
                  stroke={activeStep === step.id ? 'white' : currentProcess.color}
                  strokeWidth="0.8"
                  style={{ 
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    filter: activeStep === step.id ? 'drop-shadow(0 0 8px rgba(0,0,0,0.3))' : 'none'
                  }}
                  onClick={() => handleStepClick(step)}
                />
                
                {/* Step Icon (simplified for SVG) */}
                <circle
                  cx={step.position.x}
                  cy={step.position.y}
                  r="2"
                  fill={activeStep === step.id ? 'white' : currentProcess.color}
                  style={{ cursor: 'pointer', pointerEvents: 'none' }}
                />
                
                {/* Step Label */}
                <text
                  x={step.position.x}
                  y={step.position.y - 7}
                  textAnchor="middle"
                  fontSize="3"
                  fontWeight="600"
                  fill="var(--text-dark)"
                  style={{ cursor: 'pointer', pointerEvents: 'none' }}
                >
                  {step.name}
                </text>
              </g>
            ))}
          </svg>

          {/* Click Instructions */}
          <div style={{ 
            textAlign: 'center',
            marginTop: '1rem',
            color: 'var(--text-medium)',
            fontSize: '0.9rem'
          }}>
            Click on any process step to view detailed specifications and parameters
          </div>
        </div>

        {/* Performance Metrics */}
        <div style={{ 
          background: 'white',
          borderRadius: '8px',
          padding: '2rem',
          border: '1px solid #e2e8f0'
        }}>
          <h3 style={{ color: 'var(--text-dark)', marginBottom: '1.5rem' }}>
            Performance Metrics
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
            {Object.entries(currentProcess.performanceMetrics).map(([metric, value]) => (
              <div key={metric} style={{
                background: 'linear-gradient(135deg, #f0fdff 0%, #e0f7ff 100%)',
                padding: '1.5rem',
                borderRadius: '8px',
                border: '1px solid #b3e5fc',
                textAlign: 'center'
              }}>
                <FaChartLine style={{ color: 'var(--accent-teal)', fontSize: '1.5rem', marginBottom: '0.5rem' }} />
                <div style={{ fontWeight: '600', color: 'var(--text-dark)', marginBottom: '0.25rem' }}>
                  {metric}
                </div>
                <div style={{ color: 'var(--accent-teal)', fontWeight: '700', fontSize: '1.1rem' }}>
                  {value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Step Details Modal */}
      {selectedStepDetails && (
        <Modal
          isOpen={showDetailsModal}
          onClose={() => {
            setShowDetailsModal(false);
            setSelectedStepDetails(null);
          }}
          title={selectedStepDetails.name}
          size="large"
        >
          <div style={{ display: 'grid', gap: '2rem' }}>
            {/* Step Overview */}
            <div style={{ 
              background: 'linear-gradient(135deg, #f0fdff 0%, #e0f7ff 100%)',
              padding: '1.5rem',
              borderRadius: '8px',
              border: '1px solid #b3e5fc'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                <div style={{ fontSize: '2rem', color: currentProcess.color }}>
                  {selectedStepDetails.icon}
                </div>
                <div>
                  <h3 style={{ color: 'var(--text-dark)', margin: 0, marginBottom: '0.25rem' }}>
                    {selectedStepDetails.name}
                  </h3>
                  <div style={{ color: 'var(--text-medium)' }}>
                    Step {currentProcess.steps.findIndex(s => s.id === selectedStepDetails.id) + 1} of {currentProcess.steps.length}
                  </div>
                </div>
              </div>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.6', margin: 0, color: 'var(--text-medium)' }}>
                {selectedStepDetails.description}
              </p>
            </div>

            {/* Operating Parameters */}
            <div>
              <h3 style={{ color: 'var(--text-dark)', marginBottom: '1rem' }}>
                Operating Parameters
              </h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
                {Object.entries(selectedStepDetails.parameters).map(([param, value]) => (
                  <div key={param} style={{
                    background: 'white',
                    border: '2px solid #e2e8f0',
                    borderRadius: '8px',
                    padding: '1rem',
                    textAlign: 'center'
                  }}>
                    <div style={{ fontWeight: '600', color: 'var(--text-dark)', marginBottom: '0.5rem' }}>
                      {param}
                    </div>
                    <div style={{ color: currentProcess.color, fontWeight: '700', fontSize: '1.1rem' }}>
                      {value}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Equipment */}
            <div>
              <h3 style={{ color: 'var(--text-dark)', marginBottom: '1rem' }}>
                Key Equipment
              </h3>
              <div style={{
                background: '#fef3c7',
                border: '1px solid #facc15',
                borderRadius: '8px',
                padding: '1rem'
              }}>
                <p style={{ margin: 0, color: '#92400e', fontWeight: '500' }}>
                  {selectedStepDetails.equipment}
                </p>
              </div>
            </div>

            {/* Key Points */}
            <div>
              <h3 style={{ color: 'var(--text-dark)', marginBottom: '1rem' }}>
                Critical Success Factors
              </h3>
              <div style={{ display: 'grid', gap: '0.75rem' }}>
                {selectedStepDetails.keyPoints.map((point, index) => (
                  <div key={index} style={{
                    background: '#dcfce7',
                    border: '1px solid #86efac',
                    borderRadius: '6px',
                    padding: '0.75rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem'
                  }}>
                    <FaInfoCircle style={{ color: '#059669', minWidth: '16px' }} />
                    <span style={{ color: '#166534', fontWeight: '500' }}>
                      {point}
                    </span>
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

export default InteractiveProcessDiagrams;