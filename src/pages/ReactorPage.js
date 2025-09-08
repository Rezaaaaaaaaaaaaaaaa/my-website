import React from 'react';
import { Link } from 'react-router-dom';
import { FaFlask, FaCogs, FaThermometerHalf, FaExclamationTriangle, FaIndustry, FaLeaf, FaCheckCircle } from 'react-icons/fa';

const ReactorPage = () => {
  const reactorTypes = [
    {
      icon: <FaFlask />,
      title: "Batch Reactors",
      description: "Ideal for small-scale production and specialty chemicals with excellent control over reaction conditions.",
      applications: ["Pharmaceuticals", "Specialty Chemicals", "Research & Development", "Pilot Plants"]
    },
    {
      icon: <FaCogs />,
      title: "Continuous Reactors",
      description: "Perfect for large-scale production with steady-state operation and consistent product quality.",
      applications: ["Bulk Chemicals", "Petrochemicals", "Food Processing", "Industrial Manufacturing"]
    },
    {
      icon: <FaThermometerHalf />,
      title: "Temperature Control",
      description: "Advanced heat management systems ensuring optimal reaction temperatures and safety.",
      applications: ["Exothermic Reactions", "Endothermic Processes", "Temperature-Sensitive Products", "Safety Critical Operations"]
    }
  ];

  const reactorServices = [
    {
      icon: <FaIndustry />,
      title: "Reactor Design & Sizing",
      description: "Custom reactor design optimized for your specific chemical process requirements"
    },
    {
      icon: <FaCogs />,
      title: "Process Optimization",
      description: "Maximize conversion efficiency and minimize energy consumption"
    },
    {
      icon: <FaExclamationTriangle />,
      title: "Safety Analysis",
      description: "Comprehensive hazard analysis and safety system design"
    },
    {
      icon: <FaLeaf />,
      title: "Environmental Compliance",
      description: "Ensure compliance with New Zealand environmental regulations"
    }
  ];

  return (
    <div>
      {/* Page Header */}
      <section className="hero" style={{padding: 'var(--space-16) 0'}}>
        <div className="container">
          <div className="hero-content">
            <h1>Chemical Reactor Engineering</h1>
            <p className="description">
              Specialized reactor design and optimization services for New Zealand's chemical processing 
              industries. From batch to continuous operations, we ensure efficient conversion of raw 
              materials into valuable products while maintaining the highest safety standards.
            </p>
          </div>
        </div>
      </section>

      {/* Reactor Services */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>Our Reactor Engineering Services</h2>
            <p className="section-description">
              Comprehensive solutions for chemical reactor design, optimization, and operation
            </p>
          </div>
          
          <div className="grid grid-auto">
            {reactorServices.map((service, index) => (
              <div key={index} className="card">
                <div className="card-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reactor Types */}
      <section className="section" style={{backgroundColor: 'var(--gray-100)'}}>
        <div className="container">
          <div className="section-header">
            <h2>Reactor Types & Applications</h2>
            <p className="section-description">
              Specialized reactor solutions for diverse industrial applications
            </p>
          </div>
          
          <div className="grid grid-auto">
            {reactorTypes.map((reactor, index) => (
              <div key={index} className="card">
                <div className="card-icon">{reactor.icon}</div>
                <h3>{reactor.title}</h3>
                <p>{reactor.description}</p>
                <div className="mt-4">
                  <h4 className="font-semibold mb-2">Applications:</h4>
                  <ul>
                    {reactor.applications.map((app, idx) => (
                      <li key={idx} className="flex items-center gap-2 mb-1">
                        <FaCheckCircle className="text-green-600" style={{color: 'var(--primary-green)'}} />
                        <span>{app}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose RMES for Reactors */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>Why Choose RMES for Reactor Engineering?</h2>
          </div>
          
          <div className="grid grid-cols-2" style={{gap: 'var(--space-12)'}}>
            <div>
              <h3>Technical Expertise</h3>
              <ul className="space-y-2">
                <li>• Advanced reaction kinetics modeling</li>
                <li>• Heat and mass transfer optimization</li>
                <li>• Safety system design and analysis</li>
                <li>• Scale-up from laboratory to production</li>
                <li>• New Zealand regulatory compliance</li>
              </ul>
            </div>
            
            <div>
              <h3>Industry Experience</h3>
              <ul className="space-y-2">
                <li>• Chemical manufacturing processes</li>
                <li>• Pharmaceutical production</li>
                <li>• Food and beverage processing</li>
                <li>• Petrochemical operations</li>
                <li>• Specialty chemical production</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Educational Content - Reactor Design Fundamentals */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>Reactor Design Fundamentals</h2>
            <p className="section-description">
              Essential engineering principles and calculation methods for chemical reactor design
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card">
              <h3 className="text-xl font-bold mb-4 text-teal-700">Design Equations & Sizing</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-semibold">Batch Reactor Design</h4>
                  <p className="text-sm text-gray-600">V = N₀∫(dX/(−rₐ))</p>
                  <p className="text-sm">Residence time calculation for complete conversion</p>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-semibold">CSTR Design</h4>
                  <p className="text-sm text-gray-600">V = Q(C₀ - C)/(−rₐ)</p>
                  <p className="text-sm">Continuous operation with perfect mixing</p>
                </div>
                <div className="border-l-4 border-purple-500 pl-4">
                  <h4 className="font-semibold">PFR Design</h4>
                  <p className="text-sm text-gray-600">V = Q∫(dC/(−rₐ))</p>
                  <p className="text-sm">Plug flow with no axial mixing</p>
                </div>
              </div>
            </div>
            
            <div className="card">
              <h3 className="text-xl font-bold mb-4 text-teal-700">Heat Transfer & Temperature Control</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-red-500 pl-4">
                  <h4 className="font-semibold">Energy Balance</h4>
                  <p className="text-sm text-gray-600">ρCₚ(dT/dt) = UA(Tc - T) + (−ΔHᵣ)(−rₐ)</p>
                  <p className="text-sm">Heat generation and removal balance</p>
                </div>
                <div className="border-l-4 border-orange-500 pl-4">
                  <h4 className="font-semibold">Cooling/Heating Design</h4>
                  <p className="text-sm text-gray-600">Q = UA(LMTD)</p>
                  <p className="text-sm">Heat exchanger sizing for temperature control</p>
                </div>
                <div className="border-l-4 border-yellow-500 pl-4">
                  <h4 className="font-semibold">Safety Considerations</h4>
                  <p className="text-sm">Runaway reaction prevention and emergency cooling</p>
                </div>
              </div>
            </div>
            
            <div className="card">
              <h3 className="text-xl font-bold mb-4 text-teal-700">Mixing & Mass Transfer</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-indigo-500 pl-4">
                  <h4 className="font-semibold">Mixing Time</h4>
                  <p className="text-sm text-gray-600">tm = f(D, N, μ, ρ, geometry)</p>
                  <p className="text-sm">Agitator design for homogeneous mixing</p>
                </div>
                <div className="border-l-4 border-teal-500 pl-4">
                  <h4 className="font-semibold">Mass Transfer</h4>
                  <p className="text-sm text-gray-600">NA = kL·a·(C* - C)</p>
                  <p className="text-sm">Gas-liquid and liquid-liquid systems</p>
                </div>
                <div className="border-l-4 border-cyan-500 pl-4">
                  <h4 className="font-semibold">Power Requirements</h4>
                  <p className="text-sm text-gray-600">P = Np·ρ·N³·D⁵</p>
                  <p className="text-sm">Agitator power consumption calculation</p>
                </div>
              </div>
            </div>
            
            <div className="card">
              <h3 className="text-xl font-bold mb-4 text-teal-700">Reaction Kinetics & Catalysis</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-pink-500 pl-4">
                  <h4 className="font-semibold">Arrhenius Equation</h4>
                  <p className="text-sm text-gray-600">k = A·e^(-E/RT)</p>
                  <p className="text-sm">Temperature dependence of reaction rate</p>
                </div>
                <div className="border-l-4 border-rose-500 pl-4">
                  <h4 className="font-semibold">Catalysis</h4>
                  <p className="text-sm text-gray-600">r = k·θA·P^n</p>
                  <p className="text-sm">Surface reaction and adsorption mechanisms</p>
                </div>
                <div className="border-l-4 border-violet-500 pl-4">
                  <h4 className="font-semibold">Selectivity & Yield</h4>
                  <p className="text-sm text-gray-600">S = (rdesired/Σri) × 100%</p>
                  <p className="text-sm">Optimization of desired product formation</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Resources & Tools */}
      <section className="section" style={{backgroundColor: 'var(--gray-100)'}}>
        <div className="container">
          <div className="section-header">
            <h2>Technical Resources & Calculation Tools</h2>
            <p className="section-description">
              Professional engineering tools and resources for reactor design and analysis
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card text-center">
              <FaFlask className="text-4xl text-blue-600 mx-auto mb-4" />
              <h4 className="font-bold mb-3">Design Calculators</h4>
              <ul className="text-left text-sm space-y-1">
                <li>• CSTR volume sizing</li>
                <li>• PFR pressure drop</li>
                <li>• Heat exchanger area</li>
                <li>• Agitator power requirements</li>
                <li>• Residence time distribution</li>
              </ul>
            </div>
            
            <div className="card text-center">
              <FaCogs className="text-4xl text-green-600 mx-auto mb-4" />
              <h4 className="font-bold mb-3">Process Models</h4>
              <ul className="text-left text-sm space-y-1">
                <li>• Kinetic parameter estimation</li>
                <li>• Mass transfer correlations</li>
                <li>• Temperature profile simulation</li>
                <li>• Conversion optimization</li>
                <li>• Safety boundary analysis</li>
              </ul>
            </div>
            
            <div className="card text-center">
              <FaExclamationTriangle className="text-4xl text-red-600 mx-auto mb-4" />
              <h4 className="font-bold mb-3">Safety Analysis Tools</h4>
              <ul className="text-left text-sm space-y-1">
                <li>• Thermal stability assessment</li>
                <li>• Runaway reaction scenarios</li>
                <li>• Emergency relief sizing</li>
                <li>• HAZOP methodology</li>
                <li>• Risk matrix development</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-8 p-6 bg-gradient-to-r from-teal-50 to-blue-50 rounded-xl border border-teal-200">
            <h3 className="text-lg font-bold text-teal-800 mb-3">New Zealand Regulatory Guidelines</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-teal-700">WorkSafe Requirements</h4>
                <ul className="text-sm space-y-1">
                  <li>• Pressure equipment certification (PED compliance)</li>
                  <li>• Major hazard facility notifications</li>
                  <li>• Process safety management systems</li>
                  <li>• Competent person requirements</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-teal-700">Environmental Compliance</h4>
                <ul className="text-sm space-y-1">
                  <li>• Air discharge consent requirements</li>
                  <li>• Hazardous waste management</li>
                  <li>• Best practicable option assessment</li>
                  <li>• Regional council notifications</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section" style={{backgroundColor: 'var(--gray-100)'}}>
        <div className="container text-center">
          <h2>Ready to Optimize Your Reactor Operations?</h2>
          <p className="text-xl mb-8">
            Contact our reactor engineering experts to discuss your specific requirements and get a customized solution.
          </p>
          <Link to="/contact" className="btn btn-primary btn-lg">
            Get Reactor Consultation
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ReactorPage;
