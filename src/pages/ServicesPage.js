import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  FaFlask, 
  FaCogs, 
  FaWater, 
  FaIndustry, 
  FaLeaf, 
  FaChartLine,
  FaTools,
  FaShieldAlt,
  FaPlay,
  FaEye,
  FaFilter
} from 'react-icons/fa';
import ProcessFlowDiagram from '../components/ProcessFlowDiagram';
import ProcessSchematic from '../components/ProcessSchematic';
import TechnicalIcons from '../components/TechnicalIcons';

const ServicesPage = () => {
  const [activeFlow, setActiveFlow] = useState('water_treatment');
  const [activeSchematic, setActiveSchematic] = useState('mbr_system');

  const services = [
    {
      icon: <FaFlask />,
      title: "Chemical Process Engineering",
      description: "Comprehensive chemical engineering solutions for industrial processes",
      details: [
        "Process design and optimization",
        "Heat and mass transfer analysis", 
        "Reaction engineering",
        "Separation processes",
        "Process safety and risk assessment",
        "Equipment sizing and selection"
      ]
    },
    {
      icon: <FaCogs />,
      title: "Bioprocess Engineering", 
      description: "Specialized biotechnology and biological process solutions",
      details: [
        "Bioreactor design and scale-up",
        "Fermentation process optimization",
        "Downstream processing",
        "Cell culture systems",
        "Bioprocess monitoring and control",
        "Validation and regulatory compliance"
      ]
    },
    {
      icon: <FaWater />,
      title: "Water Treatment Engineering - Local Water Done Well",
      description: "Comprehensive water and wastewater treatment engineering services delivering regulatory compliance and operational excellence for New Zealand's critical infrastructure.",
      details: [
        "Water Treatment: Coagulation-flocculation, sedimentation, multimedia filtration, GAC/PAC adsorption",
        "Membrane Technologies: RO, NF, UF, MF systems with CIP protocols and fouling mitigation",
        "Disinfection Systems: UV-C, chlorination, ozonation, and advanced oxidation processes (AOPs)",
        "Wastewater Treatment: Activated sludge (ASP), MBR, SBR, MBBR, and trickling filter systems",
        "Stormwater Management: Detention/retention ponds, bioswales, permeable pavements, WSUD principles",
        "Advanced Treatment: Ion exchange, EDI, PFAS removal, nutrient recovery, and tertiary polishing"
      ]
    },
    {
      icon: <FaIndustry />,
      title: "Food Process Engineering",
      description: "Specialized solutions for New Zealand's world-class food industry",
      details: [
        "Dairy processing optimization",
        "Meat and seafood processing",
        "Food safety and HACCP implementation",
        "Quality control systems",
        "Sustainable packaging solutions",
        "Export compliance and certification"
      ]
    },
    {
      icon: <FaLeaf />,
      title: "Environmental Consulting",
      description: "Protecting New Zealand's clean, green reputation through sustainable engineering",
      details: [
        "Environmental impact assessments",
        "Resource consent applications",
        "Waste minimization programs",
        "Carbon footprint reduction",
        "Biodiversity protection strategies",
        "Clean technology implementation"
      ]
    },
    {
      icon: <FaChartLine />,
      title: "Process Optimization",
      description: "Data-driven process improvement and efficiency enhancement",
      details: [
        "Process analysis and modeling",
        "Energy efficiency improvements",
        "Yield optimization",
        "Cost reduction strategies",
        "Debottlenecking studies",
        "Performance monitoring systems"
      ]
    }
  ];

  return (
    <div>
      {/* Page Header */}
      <section className="hero" style={{padding: 'var(--space-16) 0'}}>
        <div className="container">
          <div className="hero-content">
            <h1>Our Engineering Services</h1>
            <p className="description">
              Professional engineering consulting services delivering process optimization, 
              regulatory compliance, and technical excellence across New Zealand's industrial sectors, 
              with specialized expertise in Local Water Done Well methodologies and environmental engineering.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="equipment" className="section">
        <div className="container">
          <div className="section-header">
            <h2>Process Engineering & Equipment Design</h2>
            <p className="section-description">
              Advanced process engineering solutions including system design, optimization, 
              and technical consulting for industrial applications
            </p>
          </div>
          <div className="grid grid-auto">
            {services.slice(0, 2).map((service, index) => (
              <div key={index} className="card">
                <div className="card-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <ul>
                  {service.details.map((detail, idx) => (
                    <li key={idx} className="mb-2 text-gray-600">• {detail}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Treatment Systems Section */}
      <section id="treatment" className="section" style={{backgroundColor: 'var(--gray-100)'}}>
        <div className="container">
          <div className="section-header">
            <h2>Water Treatment Engineering & Environmental Solutions</h2>
            <p className="section-description">
              Local Water Done Well: Professional engineering services for water treatment systems, 
              environmental compliance, and infrastructure development across New Zealand.
            </p>
          </div>
          <div className="grid grid-auto">
            {services.slice(2, 3).map((service, index) => (
              <div key={index} className="card">
                <div className="card-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <ul>
                  {service.details.map((detail, idx) => (
                    <li key={idx} className="mb-2 text-gray-600">• {detail}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Analysis & Optimization Section */}
      <section id="analysis" className="section">
        <div className="container">
          <div className="section-header">
            <h2>Process Analysis & Optimization Engineering</h2>
            <p className="section-description">
              Technical analysis services, performance optimization, and data-driven process 
              improvement methodologies for enhanced operational efficiency
            </p>
          </div>
          <div className="grid grid-auto">
            {services.slice(4, 6).map((service, index) => (
              <div key={index} className="card">
                <div className="card-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <ul>
                  {service.details.map((detail, idx) => (
                    <li key={idx} className="mb-2 text-gray-600">• {detail}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Food Engineering Section */}
      <section id="food" className="section" style={{backgroundColor: 'var(--gray-100)'}}>
        <div className="container">
          <div className="section-header">
            <h2>Food Engineering & Processing</h2>
            <p className="section-description">
              Specialized solutions for New Zealand's world-class food industry
            </p>
          </div>
          <div className="grid grid-auto">
            {services.slice(3, 4).map((service, index) => (
              <div key={index} className="card">
                <div className="card-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <ul>
                  {service.details.map((detail, idx) => (
                    <li key={idx} className="mb-2 text-gray-600">• {detail}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Unit Technologies */}
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
              <h4>Water Treatment Process Units</h4>
              <p>Local Water Done Well - Clarifiers, DAF units, sand/anthracite filters, membrane bioreactors (MBR), and advanced oxidation systems</p>
              <Link to="/filtration" className="btn btn-secondary">Explore Water Treatment</Link>
            </div>
            
            <div className="card text-center">
              <FaCogs className="card-icon" />
              <h4>Wastewater Treatment Systems</h4>
              <p>Activated sludge plants, sequencing batch reactors (SBR), moving bed biofilm reactors (MBBR), and nutrient removal systems</p>
              <Link to="/bioreactor" className="btn btn-secondary">Explore Wastewater</Link>
            </div>
            
            <div className="card text-center">
              <FaLeaf className="card-icon" />
              <h4>Stormwater & WSUD</h4>
              <p>Water Sensitive Urban Design, constructed wetlands, bioretention systems, and integrated catchment management</p>
              <Link to="/services" className="btn btn-secondary">Explore Stormwater</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Excellence Showcase */}
      <section className="section" style={{backgroundColor: 'var(--gray-100)'}}>
        <div className="container">
          <div className="section-header">
            <h2>Technical Excellence in Water Engineering</h2>
            <p className="section-description">
              Advanced process technologies with real-time monitoring and optimization capabilities
            </p>
          </div>
          
          <div className="grid grid-cols-5 gap-6 mb-12">
            <div className="text-center">
              <TechnicalIcons type="water-treatment" size="large" animated={true} />
              <h4 className="mt-3 font-semibold text-slate-800">Water Treatment</h4>
              <p className="text-sm text-slate-600">Coagulation, Filtration, Disinfection</p>
            </div>
            <div className="text-center">
              <TechnicalIcons type="mbr" size="large" animated={true} />
              <h4 className="mt-3 font-semibold text-slate-800">MBR Systems</h4>
              <p className="text-sm text-slate-600">Membrane Bioreactors</p>
            </div>
            <div className="text-center">
              <TechnicalIcons type="stormwater" size="large" animated={true} />
              <h4 className="mt-3 font-semibold text-slate-800">Stormwater</h4>
              <p className="text-sm text-slate-600">WSUD, Bioswales, Wetlands</p>
            </div>
            <div className="text-center">
              <TechnicalIcons type="aop" size="large" animated={true} />
              <h4 className="mt-3 font-semibold text-slate-800">Advanced Oxidation</h4>
              <p className="text-sm text-slate-600">UV/H₂O₂, Ozonation</p>
            </div>
            <div className="text-center">
              <TechnicalIcons type="membrane" size="large" animated={true} />
              <h4 className="mt-3 font-semibold text-slate-800">Membrane Systems</h4>
              <p className="text-sm text-slate-600">RO, UF, MF Technologies</p>
            </div>
          </div>
        </div>
      </section>

      {/* Water Treatment Modeling & Design */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>Water Treatment Modeling & Process Design</h2>
            <p className="section-description">
              Comprehensive water, wastewater, and stormwater treatment technologies with advanced modeling and design capabilities
            </p>
          </div>
          
          <div className="grid grid-cols-2">
            <div className="card">
              <h4>Water Treatment Process Models</h4>
              <ul className="text-left">
                <li>• Coagulation-Flocculation: Jar test optimization, alum/ferric dosing models</li>
                <li>• Sedimentation: Clarifier design (circular, rectangular), tube settler optimization</li>
                <li>• Filtration: Multimedia (sand/anthracite/GAC), backwash optimization, filter run analysis</li>
                <li>• Membrane Systems: RO/NF/UF/MF flux modeling, fouling prediction, CIP scheduling</li>
                <li>• Disinfection: CT modeling for UV/chlorine, DBP formation prediction</li>
                <li>• Advanced Oxidation: H₂O₂/UV, O₃/H₂O₂, Fenton process kinetics</li>
              </ul>
            </div>
            
            <div className="card">
              <h4>Wastewater Treatment Process Models</h4>
              <ul className="text-left">
                <li>• Activated Sludge: ASM1/ASM2d/ASM3 models, F/M ratio optimization</li>
                <li>• MBR Systems: Critical flux determination, fouling mitigation strategies</li>
                <li>• SBR Design: Fill/react/settle/draw cycle optimization, nutrient removal</li>
                <li>• MBBR Systems: Biofilm kinetics, carrier media selection, aeration design</li>
                <li>• Anaerobic Digestion: ADM1 modeling, biogas production optimization</li>
                <li>• Nutrient Removal: BNR process design, A2O configurations, EBPR modeling</li>
              </ul>
            </div>
            
            <div className="card">
              <h4>Stormwater & WSUD Systems</h4>
              <ul className="text-left">
                <li>• Detention/Retention Ponds: Storage-indication routing, outlet structure design</li>
                <li>• Constructed Wetlands: Reed bed design, hydraulic loading optimization</li>
                <li>• Bioswales & Rain Gardens: Media selection, infiltration rate modeling</li>
                <li>• Permeable Pavements: Infiltration capacity, structural design, maintenance</li>
                <li>• Green Roofs: Substrate depth optimization, runoff coefficient reduction</li>
                <li>• Integrated Catchment: SWMM modeling, flood mitigation strategies</li>
              </ul>
            </div>
            
            <div className="card">
              <h4>Advanced Treatment Technologies</h4>
              <ul className="text-left">
                <li>• Ion Exchange: Breakthrough curve modeling, resin selection, regeneration</li>
                <li>• Electrochemical: EDI systems, electrocoagulation, electrooxidation</li>
                <li>• PFAS Treatment: GAC adsorption isotherms, ion exchange, membrane separation</li>
                <li>• Resource Recovery: Struvite precipitation, biosolids processing, energy recovery</li>
                <li>• Tertiary Treatment: Sand filtration, cloth media filters, dissolved air flotation</li>
                <li>• Water Reuse: Risk assessment, multiple barrier approach, fit-for-purpose design</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Emerging & Specialized Water Technologies */}
      <section className="section" style={{backgroundColor: 'var(--gray-100)'}}>
        <div className="container">
          <div className="section-header">
            <h2>Emerging & Specialized Water Treatment Technologies</h2>
            <p className="section-description">
              Cutting-edge treatment solutions and industry-specific applications for complex water challenges
            </p>
          </div>
          
          <div className="grid grid-cols-2">
            <div className="card">
              <h4>Emerging Treatment Technologies</h4>
              <ul className="text-left">
                <li>• Forward Osmosis (FO): Low-energy desalination, concentrate management</li>
                <li>• Membrane Distillation (MD): High-salinity brines, zero liquid discharge (ZLD)</li>
                <li>• Capacitive Deionization (CDI): Energy-efficient desalination, selective ion removal</li>
                <li>• Photocatalytic Oxidation: TiO₂ systems, solar-driven treatment processes</li>
                <li>• Plasma Treatment: Non-thermal plasma, emerging contaminant destruction</li>
                <li>• Supercritical Water Oxidation (SCWO): Refractory organics, pharmaceutical waste</li>
              </ul>
            </div>
            
            <div className="card">
              <h4>Industrial Treatment Systems</h4>
              <ul className="text-left">
                <li>• Dairy Processing: CIP water recovery, whey treatment, lactose crystallization</li>
                <li>• Mining & Minerals: Acid mine drainage, metals precipitation, tailings treatment</li>
                <li>• Textile & Dyeing: Color removal, AOPs for recalcitrant dyes, water reuse</li>
                <li>• Pharmaceutical: API removal, sterilization, high-purity water systems</li>
                <li>• Pulp & Paper: Biological treatment, dissolved air flotation, fiber recovery</li>
                <li>• Aquaculture: Recirculating systems (RAS), biofilters, water quality management</li>
              </ul>
            </div>
            
            <div className="card">
              <h4>Smart Water Systems & IoT</h4>
              <ul className="text-left">
                <li>• Real-time Monitoring: Multi-parameter probes, wireless sensor networks</li>
                <li>• SCADA Integration: Process automation, alarm management, data trending</li>
                <li>• Digital Twins: Virtual plant modeling, predictive maintenance, optimization</li>
                <li>• AI/ML Applications: Anomaly detection, process optimization, energy management</li>
                <li>• Remote Operations: Cloud-based monitoring, mobile applications, telecontrol</li>
                <li>• Predictive Analytics: Equipment failure prediction, maintenance scheduling</li>
              </ul>
            </div>
            
            <div className="card">
              <h4>Specialized Process Units</h4>
              <ul className="text-left">
                <li>• Electroflocculation: Heavy metals removal, oil-water separation</li>
                <li>• Vacuum Evaporators: Concentrate reduction, crystallizer feed preparation</li>
                <li>• Membrane Contactors: Gas transfer, pH control, degassing applications</li>
                <li>• Rotating Biological Contactors (RBC): Compact biological treatment</li>
                <li>• Upflow Anaerobic Sludge Blanket (UASB): High-strength wastewater treatment</li>
                <li>• Thermal Hydrolysis: Sludge pretreatment, enhanced digestion, biogas production</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Water Quality Standards & Compliance */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>Water Quality Standards & Regulatory Compliance</h2>
            <p className="section-description">
              Local Water Done Well: Ensuring compliance with New Zealand and international water quality standards
            </p>
          </div>
          
          <div className="grid grid-cols-3">
            <div className="card">
              <h4>New Zealand Standards</h4>
              <ul className="text-left">
                <li>• DWSNZ 2005/2018: Drinking water compliance</li>
                <li>• Resource Management Act (RMA): Discharge consents</li>
                <li>• Health Act 1956: Public health requirements</li>
                <li>• Regional Council guidelines: Stormwater management</li>
                <li>• Building Code E1: Surface water management</li>
                <li>• AS/NZS 4360: Risk management principles</li>
              </ul>
            </div>
            
            <div className="card">
              <h4>International Standards</h4>
              <ul className="text-left">
                <li>• WHO Guidelines: Drinking water quality</li>
                <li>• ISO 14001: Environmental management systems</li>
                <li>• ISO 9001: Quality management systems</li>
                <li>• HACCP: Food safety management</li>
                <li>• GMP: Good manufacturing practice</li>
                <li>• OHSAS 18001: Health and safety management</li>
              </ul>
            </div>
            
            <div className="card">
              <h4>Specialized Applications</h4>
              <ul className="text-left">
                <li>• Potable Water: Microbiological, chemical compliance</li>
                <li>• Process Water: Industry-specific requirements</li>
                <li>• Irrigation Water: Agricultural quality standards</li>
                <li>• Recreational Water: Swimming, contact standards</li>
                <li>• Discharge Water: Environmental protection limits</li>
                <li>• Reuse Water: Fit-for-purpose quality criteria</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Process Flow Diagrams */}
      <section className="section" style={{backgroundColor: 'var(--gray-100)'}}>
        <div className="container">
          <div className="section-header">
            <h2>Interactive Process Flow Diagrams</h2>
            <p className="section-description">
              Explore our engineering expertise through detailed, interactive process diagrams and schematics
            </p>
          </div>
          
          {/* Flow Diagram Selector */}
          <div className="mb-8">
            <div className="flex flex-wrap justify-center gap-4 mb-6">
              <button
                onClick={() => setActiveFlow('water_treatment')}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeFlow === 'water_treatment' 
                    ? 'bg-teal-600 text-white shadow-lg' 
                    : 'bg-white text-teal-600 border border-teal-600 hover:bg-teal-50'
                }`}
              >
                <FaWater className="inline mr-2" />
                Municipal Water Treatment
              </button>
              <button
                onClick={() => setActiveFlow('wastewater_treatment')}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeFlow === 'wastewater_treatment' 
                    ? 'bg-purple-600 text-white shadow-lg' 
                    : 'bg-white text-purple-600 border border-purple-600 hover:bg-purple-50'
                }`}
              >
                <FaCogs className="inline mr-2" />
                Activated Sludge Process
              </button>
              <button
                onClick={() => setActiveFlow('membrane_system')}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeFlow === 'membrane_system' 
                    ? 'bg-red-600 text-white shadow-lg' 
                    : 'bg-white text-red-600 border border-red-600 hover:bg-red-50'
                }`}
              >
                <FaFilter className="inline mr-2" />
                RO Membrane System
              </button>
            </div>
            
            <ProcessFlowDiagram processType={activeFlow} />
          </div>
        </div>
      </section>

      {/* Process Schematics */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>Advanced Process Schematics</h2>
            <p className="section-description">
              Detailed engineering schematics showcasing advanced treatment technologies and system configurations
            </p>
          </div>
          
          {/* Schematic Selector */}
          <div className="mb-8">
            <div className="flex flex-wrap justify-center gap-4 mb-6">
              <button
                onClick={() => setActiveSchematic('mbr_system')}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeSchematic === 'mbr_system' 
                    ? 'bg-blue-600 text-white shadow-lg' 
                    : 'bg-white text-blue-600 border border-blue-600 hover:bg-blue-50'
                }`}
              >
                <FaCogs className="inline mr-2" />
                MBR System
              </button>
              <button
                onClick={() => setActiveSchematic('stormwater_treatment')}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeSchematic === 'stormwater_treatment' 
                    ? 'bg-green-600 text-white shadow-lg' 
                    : 'bg-white text-green-600 border border-green-600 hover:bg-green-50'
                }`}
              >
                <FaLeaf className="inline mr-2" />
                Stormwater Treatment
              </button>
              <button
                onClick={() => setActiveSchematic('advanced_oxidation')}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeSchematic === 'advanced_oxidation' 
                    ? 'bg-purple-600 text-white shadow-lg' 
                    : 'bg-white text-purple-600 border border-purple-600 hover:bg-purple-50'
                }`}
              >
                <FaFlask className="inline mr-2" />
                Advanced Oxidation
              </button>
            </div>
            
            <ProcessSchematic schematicType={activeSchematic} />
          </div>
        </div>
      </section>

      {/* Engineering Capabilities Showcase */}
      <section className="section" style={{backgroundColor: 'var(--gray-100)'}}>
        <div className="container">
          <div className="section-header">
            <h2>Engineering Design Capabilities</h2>
            <p className="section-description">
              Comprehensive process engineering services from concept to commissioning
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-8">
            <div className="card">
              <h4 className="flex items-center gap-2 mb-4">
                <FaTools className="text-teal-600" />
                Process Design & Modeling
              </h4>
              <ul className="space-y-2 text-slate-600">
                <li>• Hydraulic and process modeling using industry-standard software</li>
                <li>• Mass balance calculations and process optimization</li>
                <li>• Equipment sizing and selection criteria</li>
                <li>• P&ID development and process control strategies</li>
                <li>• 3D plant modeling and clash detection</li>
              </ul>
            </div>
            
            <div className="card">
              <h4 className="flex items-center gap-2 mb-4">
                <FaChartLine className="text-blue-600" />
                Performance Analysis
              </h4>
              <ul className="space-y-2 text-slate-600">
                <li>• Process performance evaluation and troubleshooting</li>
                <li>• Energy efficiency analysis and optimization</li>
                <li>• Life cycle assessment and sustainability metrics</li>
                <li>• Risk assessment and failure mode analysis</li>
                <li>• Predictive maintenance strategies</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-8 p-6 bg-gradient-to-r from-teal-600 to-blue-600 text-white rounded-xl">
            <div className="text-center">
              <h3 className="text-xl font-bold mb-4">Ready to Discuss Your Process Engineering Needs?</h3>
              <p className="mb-6">Our team can develop custom process diagrams and engineering solutions for your specific requirements.</p>
              <Link to="/contact" className="btn bg-white text-teal-600 hover:bg-gray-100">
                <FaEye className="mr-2" />
                Get Technical Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Process Approach */}
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
              <FaTools className="card-icon" />
              <h4>2. Design</h4>
              <p>Custom engineering solutions tailored to specific needs</p>
            </div>
            
            <div className="card text-center">
              <FaCogs className="card-icon" />
              <h4>3. Implementation</h4>
              <p>Professional project management and system deployment</p>
            </div>
            
            <div className="card text-center">
              <FaShieldAlt className="card-icon" />
              <h4>4. Support</h4>
              <p>Ongoing optimization and maintenance support</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;