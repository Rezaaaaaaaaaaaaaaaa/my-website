import React from 'react';
import { Link } from 'react-router-dom';

const ConsultingPage = () => {
  return (
    <div className="consulting-page">
      <section className="page-header">
        <h1>Consulting Services</h1>
        <p>Specialized environmental engineering services for municipalities, agriculture, and industry</p>
      </section>

      <div className="consulting-container">
        {/* Wastewater Treatment Section */}
        <section className="service-category">
          <h2>Municipal Wastewater Treatment</h2>
          <div className="service-grid">
            <div className="service-card">
              <h3>Activated Sludge Systems</h3>
              <p>
                Complete design and optimization of activated sludge systems, the most common aerobic biological treatment process for municipal wastewater.
              </p>
              <p>
                These systems use microorganisms to break down organic matter in the presence of oxygen, making them highly effective for BOD removal and nitrification.
              </p>
              <ul className="service-features">
                <li>Conventional, extended aeration, and sequencing batch reactor (SBR) variants</li>
                <li>Optimized aeration systems for energy efficiency</li>
                <li>Sludge management and digestion planning</li>
                <li>Nitrification and denitrification process enhancement</li>
              </ul>
            </div>

            <div className="service-card">
              <h3>MBBR (Moving Bed Biofilm Reactor)</h3>
              <p>
                Design and implementation of MBBR systems that utilize biofilm carriers to maximize treatment capacity in a smaller footprint.
              </p>
              <p>
                MBBR technology combines the benefits of both activated sludge and biofilm processes, allowing for higher removal rates per unit volume and more stability against shock loads.
              </p>
              <ul className="service-features">
                <li>Carrier selection and loading optimization</li>
                <li>Hybrid MBBR-activated sludge designs</li>
                <li>Retrofit solutions for existing plants</li>
                <li>Multi-stage configurations for enhanced nutrient removal</li>
              </ul>
            </div>

            <div className="service-card">
              <h3>Membrane Bioreactors (MBR)</h3>
              <p>
                Advanced MBR system design that combines biological treatment with membrane filtration for superior effluent quality.
              </p>
              <p>
                MBRs produce exceptionally clean effluent suitable for reuse applications, while operating at higher biomass concentrations in a smaller footprint than conventional systems.
              </p>
              <ul className="service-features">
                <li>Hollow fiber, flat sheet, and tubular membrane selection</li>
                <li>Fouling control and cleaning regimen development</li>
                <li>Energy optimization strategies</li>
                <li>Water reuse integration planning</li>
              </ul>
            </div>

            <div className="service-card">
              <h3>UASB (Upflow Anaerobic Sludge Blanket)</h3>
              <p>
                Specialized design of anaerobic treatment systems that convert organic pollutants to biogas while consuming minimal energy.
              </p>
              <p>
                UASB reactors are particularly effective for high-strength wastewater and operate without aeration, generating valuable biogas and producing minimal sludge compared to aerobic systems.
              </p>
              <ul className="service-features">
                <li>Granular sludge development strategies</li>
                <li>Biogas collection and utilization systems</li>
                <li>Process stability enhancement</li>
                <li>Integration with aerobic polishing stages</li>
              </ul>
            </div>

            <div className="service-card">
              <h3>Constructed Wetlands</h3>
              <p>
                Design of natural treatment systems using engineered wetlands for sustainable wastewater treatment, particularly suitable for small communities.
              </p>
              <p>
                Constructed wetlands leverage natural processes to treat wastewater with minimal energy input, creating valuable habitat while providing effective treatment.
              </p>
              <ul className="service-features">
                <li>Horizontal and vertical flow wetland design</li>
                <li>Plant species selection for local climate</li>
                <li>Hybrid systems for enhanced performance</li>
                <li>Seasonal operation optimization</li>
              </ul>
            </div>

            <div className="service-card">
              <h3>Tertiary Treatment & Advanced Oxidation</h3>
              <p>
                Implementation of advanced treatment technologies for contaminant removal beyond conventional treatment capabilities.
              </p>
              <p>
                These processes target micropollutants, emerging contaminants, and pathogen reduction for sensitive receiving environments or water reuse applications.
              </p>
              <ul className="service-features">
                <li>UV disinfection system sizing</li>
                <li>Ozonation process design</li>
                <li>Advanced filtration (micro, ultra, nanofiltration)</li>
                <li>Chemical oxidation process optimization</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Agricultural Wastewater Section */}
        <section className="service-category">
          <h2>Agricultural Wastewater Solutions</h2>
          <div className="service-grid">
            <div className="service-card">
              <h3>Anaerobic Digesters for Farm Waste</h3>
              <p>
                Custom-designed anaerobic digestion systems specifically for agricultural waste streams including manure and crop residues.
              </p>
              <p>
                These systems convert agricultural waste into biogas for energy production while stabilizing waste and reducing odor, creating multiple value streams from waste materials.
              </p>
              <ul className="service-features">
                <li>Complete mix, plug flow, and covered lagoon designs</li>
                <li>Co-digestion optimization for enhanced biogas production</li>
                <li>Digestate management and nutrient recovery</li>
                <li>Farm-scale energy integration planning</li>
              </ul>
            </div>

            <div className="service-card">
              <h3>Woodchip Bioreactors with Carbon Enhancement</h3>
              <p>
                Innovative denitrifying bioreactors specialized for removing nitrate from agricultural drainage, with carbon enhancement systems.
              </p>
              <p>
                These passive treatment systems intercept tile drainage and use woodchips as a carbon source for denitrifying bacteria, with supplemental carbon dosing for performance enhancement.
              </p>
              <ul className="service-features">
                <li>Site-specific sizing and hydraulic design</li>
                <li>Carbon dosing system integration</li>
                <li>Performance monitoring setup</li>
                <li>Maintenance and renewal planning</li>
              </ul>
            </div>

            <div className="service-card">
              <h3>Vegetated Buffer Strips & Riparian Zones</h3>
              <p>
                Design of vegetated buffer systems to intercept and treat agricultural runoff before it reaches water bodies.
              </p>
              <p>
                These nature-based solutions filter sediment, absorb nutrients, and provide habitat while protecting water resources from agricultural impacts.
              </p>
              <ul className="service-features">
                <li>Species selection for maximum treatment efficiency</li>
                <li>Hydraulic design for optimal flow distribution</li>
                <li>Integration with farm management practices</li>
                <li>Multi-functional design for ecosystem services</li>
              </ul>
            </div>

            <div className="service-card">
              <h3>Settling Basins & Sediment Traps</h3>
              <p>
                Engineered basins designed to remove suspended solids and associated contaminants from agricultural runoff.
              </p>
              <p>
                These systems slow water flow to allow particles to settle out, protecting downstream water quality and reducing maintenance requirements for other treatment systems.
              </p>
              <ul className="service-features">
                <li>Hydrodynamic modeling for optimal performance</li>
                <li>Integration with existing farm drainage</li>
                <li>Sediment removal and management planning</li>
                <li>Enhanced designs for phosphorus removal</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Water Reticulation Section */}
        <section className="service-category">
          <h2>Water & Wastewater Reticulation Design</h2>
          <div className="full-service-card">
            <p>
              Comprehensive design services for water and wastewater collection, distribution, and transmission systems. Our reticulation design services incorporate hydraulic modeling, material selection, pump station design, and maintenance planning to ensure efficient, reliable, and sustainable water infrastructure.
            </p>
            <div className="service-grid">
              <div className="service-card">
                <h3>Gravity Sewer Systems</h3>
                <p>
                  Design of efficient gravity collection systems with proper sizing, slope, and materials for reliable long-term operation.
                </p>
                <ul className="service-features">
                  <li>Hydraulic capacity analysis</li>
                  <li>Material selection for corrosion resistance</li>
                  <li>Infiltration/inflow minimization</li>
                  <li>Maintenance access optimization</li>
                </ul>
              </div>

              <div className="service-card">
                <h3>Pressure Sewer Systems</h3>
                <p>
                  Planning and design of pressure sewer networks for challenging terrain or low-density service areas.
                </p>
                <ul className="service-features">
                  <li>Grinder pump selection and sizing</li>
                  <li>System pressure management</li>
                  <li>Air/vacuum release valve placement</li>
                  <li>SCADA and monitoring integration</li>
                </ul>
              </div>

              <div className="service-card">
                <h3>Water Distribution Networks</h3>
                <p>
                  Design of efficient water supply networks with proper pressure management, looping, and water quality maintenance.
                </p>
                <ul className="service-features">
                  <li>Pressure zone design</li>
                  <li>Fire protection integration</li>
                  <li>Water age and quality modeling</li>
                  <li>Energy-efficient pumping systems</li>
                </ul>
              </div>

              <div className="service-card">
                <h3>Pump Station Design</h3>
                <p>
                  Complete design of water and wastewater pumping facilities with energy efficiency and reliability as core principles.
                </p>
                <ul className="service-features">
                  <li>Pump selection and system curve analysis</li>
                  <li>Variable frequency drive implementation</li>
                  <li>Wet well design and modeling</li>
                  <li>Backup power and redundancy systems</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Catchment Modeling Section */}
        <section className="service-category">
          <h2>Catchment & Water Resource Modeling</h2>
          <div className="full-service-card">
            <p>
              Advanced modeling services for surface water, groundwater, and integrated water resources. Our modeling approach combines cutting-edge simulation tools with extensive field data to provide accurate predictions and effective management strategies for water quantity and quality challenges.
            </p>
            <div className="service-grid">
              <div className="service-card">
                <h3>Surface Water Hydrology Modeling</h3>
                <p>
                  Comprehensive modeling of catchment runoff dynamics, flood routing, and water balance analysis.
                </p>
                <ul className="service-features">
                  <li>Rainfall-runoff modeling (HEC-HMS, SWMM)</li>
                  <li>Flood prediction and mapping</li>
                  <li>Climate change scenario analysis</li>
                  <li>Land use change impact assessment</li>
                </ul>
              </div>

              <div className="service-card">
                <h3>Groundwater Flow & Transport Models</h3>
                <p>
                  Detailed modeling of aquifer systems for sustainable management and contamination assessment.
                </p>
                <ul className="service-features">
                  <li>3D aquifer characterization</li>
                  <li>Contaminant fate and transport</li>
                  <li>Wellfield design and safe yield assessment</li>
                  <li>Seawater intrusion analysis</li>
                </ul>
              </div>

              <div className="service-card">
                <h3>Water Quality Modeling</h3>
                <p>
                  Simulation of contaminant sources, transport, and fate in surface and groundwater systems.
                </p>
                <ul className="service-features">
                  <li>Nutrient loading and transport</li>
                  <li>Sediment erosion and deposition</li>
                  <li>Point and non-point source modeling</li>
                  <li>TMDL development support</li>
                </ul>
              </div>

              <div className="service-card">
                <h3>Integrated Watershed Management</h3>
                <p>
                  Holistic modeling approaches that combine hydrologic, water quality, and ecological considerations.
                </p>
                <ul className="service-features">
                  <li>Surface-groundwater interaction</li>
                  <li>Ecosystem response modeling</li>
                  <li>Multi-objective management strategies</li>
                  <li>Stakeholder engagement and visualization</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Process Modeling Section */}
        <section className="service-category">
          <h2>Chemical & Food Processing Optimization</h2>
          <div className="full-service-card">
            <p>
              Specialized process modeling and optimization services for chemical and food processing operations. We leverage advanced computational approaches to improve efficiency, product quality, and sustainability across various industrial processes.
            </p>
            <div className="service-grid">
              <div className="service-card">
                <h3>Computational Fluid Dynamics (CFD)</h3>
                <p>
                  Advanced simulation of fluid flow, heat transfer, and chemical reactions in process equipment.
                </p>
                <ul className="service-features">
                  <li>Mixer and reactor design optimization</li>
                  <li>Multiphase flow modeling</li>
                  <li>Heat exchanger performance enhancement</li>
                  <li>Scale-up analysis and validation</li>
                </ul>
              </div>

              <div className="service-card">
                <h3>Statistical Process Optimization</h3>
                <p>
                  Data-driven approaches to identify optimal operating conditions and control strategies.
                </p>
                <ul className="service-features">
                  <li>Design of Experiments (DOE)</li>
                  <li>Response surface methodology</li>
                  <li>Multivariate statistical process control</li>
                  <li>Robustness and sensitivity analysis</li>
                </ul>
              </div>

              <div className="service-card">
                <h3>Process Simulation & Digital Twins</h3>
                <p>
                  Comprehensive flowsheet models for process design, troubleshooting, and real-time optimization.
                </p>
                <ul className="service-features">
                  <li>Steady-state and dynamic simulation</li>
                  <li>Economic optimization and scenario analysis</li>
                  <li>Digital twin development and implementation</li>
                  <li>Operator training simulations</li>
                </ul>
              </div>

              <div className="service-card">
                <h3>Bioprocess Optimization</h3>
                <p>
                  Specialized modeling for fermentation, enzymatic, and other biological processes in food and pharmaceutical applications.
                </p>
                <ul className="service-features">
                  <li>Fermentation kinetics modeling</li>
                  <li>Scale-up methodology development</li>
                  <li>Batch process improvement</li>
                  <li>Product quality and consistency enhancement</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <div className="consulting-cta">
          <h3>Need Specialized Environmental Engineering Solutions?</h3>
          <p>I provide customized consulting services tailored to your specific challenges and requirements. With expertise spanning municipal systems, agricultural applications, and industrial processes, I can develop efficient, sustainable solutions for your water and environmental needs.</p>
          <Link to="/contact" className="btn primary-btn">Request a Consultation</Link>
        </div>
      </div>
    </div>
  );
};

export default ConsultingPage;
