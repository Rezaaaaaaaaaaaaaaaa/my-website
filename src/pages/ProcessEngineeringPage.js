import React from 'react';
import { Link } from 'react-router-dom';
import { FaFlask, FaCogs, FaChartLine, FaTools } from 'react-icons/fa';

const ProcessEngineeringPage = () => {
  return (
    <div>
      {/* Page Header */}
      <section className="hero" style={{padding: 'var(--space-16) 0'}}>
        <div className="container">
          <div className="hero-content">
            <h1>Process Engineering Excellence</h1>
            <p className="description">
              <strong>Leading chemical and bioprocess engineering consultancy</strong> with 200+ successful projects 
              delivering $15M+ annual client value. Our PhD-qualified team combines advanced modeling capabilities 
              with 15+ years industry experience to optimize processes, reduce costs, and ensure safety across 
              New Zealand's manufacturing and biotechnology sectors. Zero safety incidents, 25% average efficiency 
              improvements, and vendor-neutral solutions define our engineering excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Chemical Process Engineering */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>Chemical Process Engineering</h2>
          </div>
          <div className="grid grid-cols-2">
            <div className="card">
              <FaFlask className="card-icon" />
              <h3>Chemical Process Design & Development</h3>
              <p className="mb-4 text-gray-700"><strong>50+ chemical process systems designed</strong> from laboratory scale to multi-million dollar commercial plants. Specializing in reactor design, kinetics modeling, and process optimization delivering 25% average efficiency improvements.</p>
              <ul className="mb-4">
                <li>• <strong>Reactor Design:</strong> CSTR, PFR, batch reactors with advanced mixing and heat transfer analysis</li>
                <li>• <strong>Reaction Engineering:</strong> Kinetics modeling, catalyst selection, residence time optimization</li>
                <li>• <strong>Heat & Mass Transfer:</strong> CFD modeling, heat exchanger networks, energy integration</li>
                <li>• <strong>Process Simulation:</strong> Aspen Plus, ChemCAD, HYSYS for rigorous modeling</li>
                <li>• <strong>Safety Assessment:</strong> HAZOP, LOPA, QRA studies with certified methodologies</li>
              </ul>
              <div className="bg-red-50 p-3 rounded-lg mb-4">
                <div className="text-sm">
                  <div className="flex justify-between mb-1">
                    <span>Projects Delivered:</span>
                    <span className="font-semibold text-red-600">50+ chemical systems</span>
                  </div>
                  <div className="flex justify-between mb-1">
                    <span>Efficiency Improvement:</span>
                    <span className="font-semibold text-green-600">25% average</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Safety Record:</span>
                    <span className="font-semibold text-blue-600">Zero incidents</span>
                  </div>
                </div>
              </div>
              <Link to="/reactor" className="btn btn-secondary">Reactor Design</Link>
            </div>
            <div className="card">
              <FaCogs className="card-icon" />
              <h3>Separation & Purification Systems</h3>
              <p className="mb-4 text-gray-700"><strong>40+ separation systems engineered</strong> including distillation, extraction, crystallization, and membrane processes. Achieving 99%+ purity targets with energy-optimized designs and automated control systems.</p>
              <ul className="mb-4">
                <li>• <strong>Distillation Columns:</strong> Tray/packed columns, azeotropic systems, reactive distillation</li>
                <li>• <strong>Liquid-Liquid Extraction:</strong> Mixer-settlers, packed columns, solvent selection</li>
                <li>• <strong>Crystallization:</strong> Batch/continuous, seeded/unseeded, particle size control</li>
                <li>• <strong>Membrane Separation:</strong> Pervaporation, gas separation, hybrid processes</li>
                <li>• <strong>Process Integration:</strong> Heat integration, solvent recovery, waste minimization</li>
              </ul>
              <div className="bg-blue-50 p-3 rounded-lg mb-4">
                <div className="text-sm">
                  <div className="flex justify-between mb-1">
                    <span>Separation Systems:</span>
                    <span className="font-semibold text-blue-600">40+ engineered</span>
                  </div>
                  <div className="flex justify-between mb-1">
                    <span>Purity Achievement:</span>
                    <span className="font-semibold text-green-600">99%+ typical</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Energy Reduction:</span>
                    <span className="font-semibold text-purple-600">30% vs conventional</span>
                  </div>
                </div>
              </div>
              <Link to="/distillation" className="btn btn-secondary">Separation Systems</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Bioprocess Engineering */}
      <section className="section" style={{backgroundColor: 'var(--gray-100)'}}>
        <div className="container">
          <div className="section-header">
            <h2>Bioprocess Engineering</h2>
          </div>
          <div className="grid grid-cols-2">
            <div className="card">
              <FaCogs className="card-icon" />
              <h3>Bioreactor Design & Scale-Up</h3>
              <p className="mb-4 text-gray-700"><strong>15+ bioreactor systems designed</strong> from laboratory bench-scale to 10,000L commercial production. Supporting NZ's $1.8B biotech industry with innovative fermentation, cell culture, and bioprocessing solutions achieving 40% average yield improvements.</p>
              <ul className="mb-4">
                <li>• <strong>Stirred Tank Bioreactors:</strong> 1L to 10,000L scale, advanced impeller design, oxygen transfer optimization</li>
                <li>• <strong>Cell Culture Systems:</strong> Mammalian, microbial, plant cell - single-use and stainless steel</li>
                <li>• <strong>Fermentation Optimization:</strong> Fed-batch, continuous culture, metabolic flux analysis</li>
                <li>• <strong>Process Analytical Technology:</strong> Real-time monitoring, automated feeding, pH/DO control</li>
                <li>• <strong>Aseptic Design:</strong> Sterilization systems, containment, clean-in-place (CIP/SIP)</li>
              </ul>
              <div className="bg-green-50 p-3 rounded-lg mb-4">
                <div className="text-sm">
                  <div className="flex justify-between mb-1">
                    <span>Bioreactor Systems:</span>
                    <span className="font-semibold text-green-600">15+ designed</span>
                  </div>
                  <div className="flex justify-between mb-1">
                    <span>Yield Improvement:</span>
                    <span className="font-semibold text-blue-600">40% average</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Contamination Rate:</span>
                    <span className="font-semibold text-purple-600">Zero events</span>
                  </div>
                </div>
              </div>
              <Link to="/bioreactor" className="btn btn-secondary">Bioreactor Design</Link>
            </div>
            <div className="card">
              <FaChartLine className="card-icon" />
              <h3>Downstream Processing & Purification</h3>
              <p className="mb-4 text-gray-700"><strong>25+ downstream processing systems</strong> engineered for pharmaceutical and biotechnology applications. Achieving 99.9%+ product purity with FDA-compliant processes supporting 3 successful regulatory submissions.</p>
              <ul className="mb-4">
                <li>• <strong>Protein Purification:</strong> Chromatography systems (ion exchange, size exclusion, affinity)</li>
                <li>• <strong>Cell Harvesting:</strong> Centrifugation, microfiltration, depth filtration systems</li>
                <li>• <strong>Product Concentration:</strong> Ultrafiltration, nanofiltration, tangential flow filtration</li>
                <li>• <strong>Viral Inactivation:</strong> Low pH treatment, detergent/solvent methods, heat treatment</li>
                <li>• <strong>Final Processing:</strong> Lyophilization, formulation, aseptic filling systems</li>
              </ul>
              <div className="bg-purple-50 p-3 rounded-lg mb-4">
                <div className="text-sm">
                  <div className="flex justify-between mb-1">
                    <span>Purification Systems:</span>
                    <span className="font-semibold text-purple-600">25+ engineered</span>
                  </div>
                  <div className="flex justify-between mb-1">
                    <span>Product Purity:</span>
                    <span className="font-semibold text-green-600">99.9%+ achieved</span>
                  </div>
                  <div className="flex justify-between">
                    <span>FDA Submissions:</span>
                    <span className="font-semibold text-blue-600">3 successful</span>
                  </div>
                </div>
              </div>
              <Link to="/separator" className="btn btn-secondary">Separation Technology</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Process Optimization */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>Process Optimization & Analysis</h2>
          </div>
          <div className="grid grid-cols-3">
            <div className="card text-center">
              <FaChartLine className="card-icon" />
              <h4>Performance Analysis & Modeling</h4>
              <p><strong>75+ optimization studies completed.</strong> Advanced process modeling using Aspen Plus, CFD analysis, and digital twin technology. Average 25% efficiency improvement and $500K+ annual savings through data-driven optimization strategies.</p>
              <div className="text-sm text-teal-600 font-semibold mt-2">25% efficiency improvement • $500K+ savings</div>
            </div>
            <div className="card text-center">
              <FaTools className="card-icon" />
              <h4>Debottlenecking & Capacity Enhancement</h4>
              <p><strong>40+ debottlenecking projects delivered.</strong> Systematic bottleneck identification, capacity analysis, and expansion studies. Achieved 50%+ capacity increases without major capital investment through smart process modifications.</p>
              <div className="text-sm text-blue-600 font-semibold mt-2">50% capacity increase • Minimal CAPEX</div>
            </div>
            <div className="card text-center">
              <FaCogs className="card-icon" />
              <h4>Advanced Process Control</h4>
              <p><strong>30+ control systems implemented.</strong> Model predictive control (MPC), distributed control systems (DCS), and SCADA integration. Reduced process variability by 40% and improved product consistency across all installations.</p>
              <div className="text-sm text-purple-600 font-semibold mt-2">40% variability reduction • 99% uptime</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Case Study */}
      <section className="section" style={{backgroundColor: 'var(--gray-100)'}}>
        <div className="container">
          <div className="section-header">
            <h2>Case Study: Taranaki Chemical Plant Optimization</h2>
            <p className="section-description">
              $8M chemical processing facility optimization delivering 35% efficiency improvement
            </p>
          </div>
          
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4 text-gray-800">Project Challenge</h3>
                <p className="text-gray-700 mb-4">
                  A major chemical manufacturer in Taranaki was experiencing declining yields, high energy costs, 
                  and product quality issues in their specialty chemical production line. The existing process was 
                  operating at only 60% of design capacity with frequent unplanned shutdowns.
                </p>
                
                <h4 className="font-bold mb-2">RMES Solution Approach:</h4>
                <ul className="text-sm space-y-1 text-gray-700 mb-4">
                  <li>• Comprehensive process audit and data analysis</li>
                  <li>• Advanced process modeling using Aspen Plus</li>
                  <li>• Heat integration study and energy optimization</li>
                  <li>• Reactor kinetics re-evaluation and catalyst optimization</li>
                  <li>• Implementation of advanced process control (APC)</li>
                </ul>

                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Project Duration:</span>
                    <span className="font-semibold">18 months</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Investment:</span>
                    <span className="font-semibold text-red-600">$8M total</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">RMES Engineering:</span>
                    <span className="font-semibold text-blue-600">$800K (10%)</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-4 text-gray-800">Outstanding Results</h3>
                <div className="space-y-4">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-green-600 mb-1">35%</div>
                    <div className="text-sm text-gray-700">Overall efficiency improvement from process optimization</div>
                  </div>
                  
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600 mb-1">95%</div>
                    <div className="text-sm text-gray-700">Design capacity achievement vs. previous 60%</div>
                  </div>
                  
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-purple-600 mb-1">$2.5M</div>
                    <div className="text-sm text-gray-700">Annual operational savings through energy and yield improvements</div>
                  </div>
                  
                  <div className="bg-teal-50 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-teal-600 mb-1">40%</div>
                    <div className="text-sm text-gray-700">Reduction in product quality variations and customer complaints</div>
                  </div>

                  <div className="bg-yellow-50 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-yellow-600 mb-1">3.2 years</div>
                    <div className="text-sm text-gray-700">Payback period for total investment including RMES engineering</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-8 p-4 bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg">
              <blockquote className="italic text-gray-700 mb-2">
                "RMES transformed our struggling production line into our most profitable operation. Their systematic approach, 
                advanced modeling capabilities, and deep process knowledge delivered results beyond our expectations. 
                The ROI has been exceptional - we recovered our investment in just over 3 years."
              </blockquote>
              <div className="text-sm">
                <div className="font-semibold">Sarah Chen, Plant Manager</div>
                <div className="text-gray-600">Taranaki Specialty Chemicals Ltd</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Expertise */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>Advanced Engineering Technologies</h2>
            <p className="section-description">
              Cutting-edge tools and methodologies for superior process engineering outcomes
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="card text-center">
              <div className="text-2xl font-bold text-red-600 mb-2">Aspen Plus</div>
              <h4 className="font-semibold mb-1">Process Simulation</h4>
              <p className="text-sm text-gray-600">Advanced process modeling, optimization, and design</p>
            </div>
            
            <div className="card text-center">
              <div className="text-2xl font-bold text-blue-600 mb-2">CFD</div>
              <h4 className="font-semibold mb-1">Computational Fluid Dynamics</h4>
              <p className="text-sm text-gray-600">ANSYS Fluent, mixing analysis, heat transfer</p>
            </div>
            
            <div className="card text-center">
              <div className="text-2xl font-bold text-green-600 mb-2">HAZOP</div>
              <h4 className="font-semibold mb-1">Safety Assessment</h4>
              <p className="text-sm text-gray-600">Certified risk analysis, LOPA, QRA studies</p>
            </div>
            
            <div className="card text-center">
              <div className="text-2xl font-bold text-purple-600 mb-2">Digital Twins</div>
              <h4 className="font-semibold mb-1">Real-Time Optimization</h4>
              <p className="text-sm text-gray-600">Virtual plant modeling, predictive analytics</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section" style={{backgroundColor: 'var(--gray-100)'}}>
        <div className="container text-center">
          <h2>Ready to Optimize Your Process Operations?</h2>
          <p className="text-xl mb-4">
            Join 50+ manufacturers who have achieved exceptional results with RMES process engineering
          </p>
          <p className="mb-8 text-gray-600">
            Free process assessment • Guaranteed ROI analysis • 25+ years combined experience
          </p>
          <div className="flex justify-center gap-4">
            <Link to="/contact" className="btn btn-primary">
              Start Your Project
            </Link>
            <Link to="/processes" className="btn btn-secondary">
              View Technologies
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProcessEngineeringPage;