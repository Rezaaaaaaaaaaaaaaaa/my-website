import React from 'react';
import { Link } from 'react-router-dom';
import { FaWater, FaCogs, FaLeaf, FaFilter, FaFlask } from 'react-icons/fa';

const WaterTreatmentServicesPage = () => {
  return (
    <div>
      {/* Page Header */}
      <section className="hero" style={{padding: 'var(--space-16) 0'}}>
        <div className="container">
          <div className="hero-content">
            <h1>Water & Wastewater Treatment Engineering</h1>
            <p className="description">
              <strong>New Zealand's leading water treatment specialists</strong> with 200+ successful installations 
              serving 500,000+ residents. We deliver innovative solutions for municipal councils, industrial clients, 
              and private developers with 100% DWSNZ compliance record and $15M+ in operational savings achieved. 
              From concept to commissioning, we ensure safe, reliable, and cost-effective water treatment systems.
            </p>
          </div>
        </div>
      </section>

      {/* Core Water Treatment Services */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>Water Treatment Engineering Services</h2>
          </div>
          <div className="grid grid-cols-2">
            <div className="card">
              <FaWater className="card-icon" />
              <h3>Municipal Water Treatment</h3>
              <p className="mb-4 text-gray-700"><strong>45+ council projects completed</strong> across New Zealand, treating up to 50ML/day. Serving Auckland suburbs, Wellington communities, and Canterbury townships with advanced treatment technologies.</p>
              <ul className="mb-4">
                <li>• <strong>Coagulation/Flocculation:</strong> Jar testing to full-scale optimization, alum/ferric chloride dosing systems</li>
                <li>• <strong>Sedimentation:</strong> Circular and rectangular clarifiers, tube settlers, dissolved air flotation (DAF)</li>
                <li>• <strong>Filtration:</strong> Rapid sand filters, multimedia (sand/anthracite/GAC), slow sand filtration</li>
                <li>• <strong>Disinfection:</strong> UV systems (4-log inactivation), sodium hypochlorite, ozonation</li>
                <li>• <strong>DWSNZ 2005/2018:</strong> 100% compliance record, Water Safety Plans, monitoring protocols</li>
              </ul>
              <div className="bg-blue-50 p-3 rounded-lg mb-4">
                <div className="text-sm">
                  <div className="flex justify-between mb-1">
                    <span>Treatment Capacity:</span>
                    <span className="font-semibold text-blue-600">Up to 50ML/day</span>
                  </div>
                  <div className="flex justify-between mb-1">
                    <span>Pathogen Removal:</span>
                    <span className="font-semibold text-green-600">99.9% typical</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Compliance Record:</span>
                    <span className="font-semibold text-purple-600">100% DWSNZ</span>
                  </div>
                </div>
              </div>
              <Link to="/filtration" className="btn btn-secondary">Learn More</Link>
            </div>
            <div className="card">
              <FaFilter className="card-icon" />
              <h3>Membrane Systems Engineering</h3>
              <p className="mb-4 text-gray-700"><strong>200+ membrane installations</strong> from small township supplies to major industrial applications. Specializing in RO, UF, MF, and NF technologies with advanced fouling control.</p>
              <ul className="mb-4">
                <li>• <strong>Reverse Osmosis (RO):</strong> Seawater/brackish water desalination, high-pressure systems up to 80 bar</li>
                <li>• <strong>Ultrafiltration (UF):</strong> Surface water treatment, pretreatment for RO, virus removal</li>
                <li>• <strong>Microfiltration (MF):</strong> Particle removal, bacteria elimination, turbidity reduction</li>
                <li>• <strong>Nanofiltration (NF):</strong> Hardness removal, organics reduction, selective ion removal</li>
                <li>• <strong>Advanced Monitoring:</strong> Real-time flux monitoring, fouling prediction, automated CIP</li>
              </ul>
              <div className="bg-teal-50 p-3 rounded-lg mb-4">
                <div className="text-sm">
                  <div className="flex justify-between mb-1">
                    <span>Installations:</span>
                    <span className="font-semibold text-teal-600">200+ systems</span>
                  </div>
                  <div className="flex justify-between mb-1">
                    <span>Contaminant Removal:</span>
                    <span className="font-semibold text-green-600">99.9% typical</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Membrane Life:</span>
                    <span className="font-semibold text-purple-600">5-7 years avg.</span>
                  </div>
                </div>
              </div>
              <Link to="/reverse-osmosis" className="btn btn-secondary">Explore Membranes</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Wastewater Treatment */}
      <section className="section" style={{backgroundColor: 'var(--gray-100)'}}>
        <div className="container">
          <div className="section-header">
            <h2>Wastewater Treatment Systems</h2>
          </div>
          <div className="grid grid-cols-2">
            <div className="card">
              <FaCogs className="card-icon" />
              <h3>Biological Wastewater Treatment</h3>
              <p className="mb-4 text-gray-700"><strong>30+ biological treatment systems</strong> designed for municipal and industrial applications. Specializing in high-performance nutrient removal and energy-efficient operations achieving 95%+ BOD/COD reduction.</p>
              <ul className="mb-4">
                <li>• <strong>Activated Sludge (ASP):</strong> ASM1/ASM2d/ASM3 modeling, F/M optimization, secondary clarifiers</li>
                <li>• <strong>Membrane Bioreactors (MBR):</strong> Submerged/side-stream, critical flux analysis, 99.9% pathogen removal</li>
                <li>• <strong>Sequencing Batch Reactors (SBR):</strong> Fill/react/settle/draw optimization, nutrient removal</li>
                <li>• <strong>Moving Bed Biofilm (MBBR):</strong> Biofilm kinetics, carrier media selection, compact design</li>
                <li>• <strong>Anaerobic Treatment:</strong> UASB reactors, anaerobic digesters, biogas recovery systems</li>
              </ul>
              <div className="bg-green-50 p-3 rounded-lg mb-4">
                <div className="text-sm">
                  <div className="flex justify-between mb-1">
                    <span>BOD Reduction:</span>
                    <span className="font-semibold text-green-600">95%+ typical</span>
                  </div>
                  <div className="flex justify-between mb-1">
                    <span>Energy Efficiency:</span>
                    <span className="font-semibold text-blue-600">0.3-0.5 kWh/m³</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sludge Production:</span>
                    <span className="font-semibold text-purple-600">30% reduction vs conventional</span>
                  </div>
                </div>
              </div>
              <Link to="/bioreactor" className="btn btn-secondary">View Systems</Link>
            </div>
            <div className="card">
              <FaLeaf className="card-icon" />
              <h3>Advanced Treatment & Water Reuse</h3>
              <p className="mb-4 text-gray-700"><strong>20+ advanced treatment systems</strong> for challenging contaminants including PFAS, pharmaceuticals, and emerging pollutants. Enabling safe water reuse for irrigation, industrial processes, and potable applications.</p>
              <ul className="mb-4">
                <li>• <strong>Advanced Oxidation (AOP):</strong> UV/H₂O₂, O₃/H₂O₂, Fenton processes for micropollutant removal</li>
                <li>• <strong>Tertiary Filtration:</strong> Sand filters, cloth media, dissolved air flotation (DAF)</li>
                <li>• <strong>Nutrient Removal (BNR):</strong> Biological phosphorus removal (EBPR), A2O configurations</li>
                <li>• <strong>Water Reuse Systems:</strong> Multi-barrier approach, fit-for-purpose treatment, risk assessment</li>
                <li>• <strong>PFAS Treatment:</strong> GAC adsorption, ion exchange, membrane separation, specialized destruction</li>
              </ul>
              <div className="bg-purple-50 p-3 rounded-lg mb-4">
                <div className="text-sm">
                  <div className="flex justify-between mb-1">
                    <span>Micropollutant Removal:</span>
                    <span className="font-semibold text-purple-600">99%+ pharmaceuticals</span>
                  </div>
                  <div className="flex justify-between mb-1">
                    <span>PFAS Reduction:</span>
                    <span className="font-semibold text-red-600">95%+ removal</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Reuse Applications:</span>
                    <span className="font-semibold text-green-600">Irrigation, industrial, potable</span>
                  </div>
                </div>
              </div>
              <Link to="/uv-disinfection" className="btn btn-secondary">Advanced Processes</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stormwater Management */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>Stormwater & WSUD Solutions</h2>
          </div>
          <div className="grid grid-cols-3">
            <div className="card text-center">
              <FaLeaf className="card-icon" />
              <h4>Water Sensitive Urban Design (WSUD)</h4>
              <p><strong>25+ WSUD projects</strong> across New Zealand implementing sustainable stormwater solutions. Constructed wetlands (up to 5 hectares), bioretention systems, and integrated catchment management reducing peak flows by 40%+.</p>
              <div className="text-sm text-green-600 font-semibold mt-2">40% peak flow reduction • 80% TSS removal</div>
            </div>
            <div className="card text-center">
              <FaWater className="card-icon" />
              <h4>Stormwater Detention Systems</h4>
              <p><strong>15+ detention facilities designed</strong> using advanced hydrologic modeling (SWMM, MUSIC). Storage-indication routing, smart outlet structures, and real-time control systems managing 500+ hectare catchments.</p>
              <div className="text-sm text-blue-600 font-semibold mt-2">500+ hectare catchments • 1 in 100 year protection</div>
            </div>
            <div className="card text-center">
              <FaCogs className="card-icon" />
              <h4>Stormwater Treatment Systems</h4>
              <p><strong>40+ treatment devices installed</strong> including first flush diverters, gross pollutant traps (GPTs), bioswales, and permeable pavements. Achieving 85%+ removal of suspended solids and heavy metals.</p>
              <div className="text-sm text-purple-600 font-semibold mt-2">85% pollutant removal • 30% runoff reduction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Highlight */}
      <section className="section" style={{backgroundColor: 'var(--gray-100)'}}>
        <div className="container">
          <div className="section-header">
            <h2>Featured Case Study: Waikato Water Treatment Upgrade</h2>
            <p className="section-description">
              $12M municipal water treatment plant upgrade delivered 15% under budget
            </p>
          </div>
          
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4 text-gray-800">Project Overview</h3>
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Client:</span>
                    <span className="font-semibold">Waikato District Council</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Capacity:</span>
                    <span className="font-semibold">25 ML/day</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Population Served:</span>
                    <span className="font-semibold">85,000 residents</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Project Value:</span>
                    <span className="font-semibold text-green-600">$12M</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Delivery:</span>
                    <span className="font-semibold text-blue-600">15% under budget</span>
                  </div>
                </div>
                
                <h4 className="font-bold mb-2">Technologies Implemented:</h4>
                <ul className="text-sm space-y-1 text-gray-700">
                  <li>• Advanced coagulation/flocculation with automated jar testing</li>
                  <li>• High-rate clarification with tube settlers</li>
                  <li>• Dual-media filtration (sand/anthracite)</li>
                  <li>• UV disinfection (40,000 mJ/cm² dose)</li>
                  <li>• SCADA integration with remote monitoring</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-4 text-gray-800">Results Achieved</h3>
                <div className="space-y-4">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-green-600 mb-1">30%</div>
                    <div className="text-sm text-gray-700">Reduction in operational costs through energy optimization and automated controls</div>
                  </div>
                  
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600 mb-1">99.9%</div>
                    <div className="text-sm text-gray-700">Pathogen removal efficiency exceeding DWSNZ requirements</div>
                  </div>
                  
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-purple-600 mb-1">40%</div>
                    <div className="text-sm text-gray-700">Reduction in chemical consumption through optimized dosing systems</div>
                  </div>
                  
                  <div className="bg-teal-50 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-teal-600 mb-1">24/7</div>
                    <div className="text-sm text-gray-700">Remote monitoring and control capability with automated alerts</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-8 p-4 bg-gradient-to-r from-teal-100 to-blue-100 rounded-lg">
              <blockquote className="italic text-gray-700 mb-2">
                "RMES delivered our complex water treatment upgrade flawlessly. Their deep understanding of both the technology and regulatory requirements meant we achieved full DWSNZ compliance from day one. The system has exceeded all performance expectations."
              </blockquote>
              <div className="text-sm">
                <div className="font-semibold">Mike Thompson, Asset Manager</div>
                <div className="text-gray-600">Waikato District Council</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Recognition */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>Industry Recognition & Certifications</h2>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="card text-center">
              <div className="text-2xl font-bold text-teal-600 mb-2">IPENZ</div>
              <h4 className="font-semibold mb-1">Chartered Professional Engineer</h4>
              <p className="text-sm text-gray-600">Institution of Professional Engineers New Zealand</p>
            </div>
            
            <div className="card text-center">
              <div className="text-2xl font-bold text-blue-600 mb-2">IWA</div>
              <h4 className="font-semibold mb-1">International Water Association</h4>
              <p className="text-sm text-gray-600">Global water professional network member</p>
            </div>
            
            <div className="card text-center">
              <div className="text-2xl font-bold text-green-600 mb-2">ISO</div>
              <h4 className="font-semibold mb-1">9001:2015 Quality Management</h4>
              <p className="text-sm text-gray-600">Certified quality management systems</p>
            </div>
            
            <div className="card text-center">
              <div className="text-2xl font-bold text-purple-600 mb-2">DWSNZ</div>
              <h4 className="font-semibold mb-1">100% Compliance Record</h4>
              <p className="text-sm text-gray-600">Drinking Water Standards NZ certified</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section" style={{backgroundColor: 'var(--gray-100)'}}>
        <div className="container text-center">
          <h2>Ready to Discuss Your Water Treatment Project?</h2>
          <p className="text-xl mb-4">
            Join 15+ councils and 100+ clients who trust RMES for water treatment excellence
          </p>
          <p className="mb-8 text-gray-600">
            Free feasibility study • DWSNZ compliance guaranteed • 48-hour response time
          </p>
          <div className="flex justify-center gap-4">
            <Link to="/contact" className="btn btn-primary">
              Get Free Consultation
            </Link>
            <Link to="/filtration" className="btn btn-secondary">
              View Technologies
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WaterTreatmentServicesPage;