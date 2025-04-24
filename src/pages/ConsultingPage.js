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
        {/* Hydrogeology Section */}
        <section className="service-category">
          <h2>Hydrogeology Analysis & Modeling</h2>
          <div className="service-grid">
            <div className="service-card">
              <h3>Groundwater Flow Modeling</h3>
              <p>
                Comprehensive groundwater flow modeling and analysis using advanced numerical methods to understand aquifer systems and water resource sustainability.
              </p>
              <p>
                These models provide crucial information for water allocation decisions, environmental impact assessments, and long-term resource planning.
              </p>
              <ul className="service-features">
                <li>3D aquifer characterization and modeling</li>
                <li>Calibration with field measurements</li>
                <li>Pumping test analysis and interpretation</li>
                <li>Sustainable yield assessment</li>
              </ul>
            </div>

            <div className="service-card">
              <h3>Solute Transport & Contamination</h3>
              <p>
                Modeling the fate and transport of contaminants in groundwater systems to assess risks and develop remediation strategies.
              </p>
              <p>
                Understanding contaminant movement is essential for protecting drinking water sources, meeting regulatory requirements, and designing effective cleanup approaches.
              </p>
              <ul className="service-features">
                <li>Nitrate transport and attenuation</li>
                <li>Agricultural contaminant migration</li>
                <li>Risk assessment for sensitive receptors</li>
                <li>Compliance with NPS-FM and NES-F</li>
              </ul>
            </div>

            <div className="service-card">
              <h3>Groundwater-Surface Water Interaction</h3>
              <p>
                Analysis of the complex relationship between groundwater and surface water systems, including stream depletion effects and recharge processes.
              </p>
              <p>
                This integrated approach is vital for holistic water resource management and understanding cumulative environmental impacts.
              </p>
              <ul className="service-features">
                <li>Stream depletion assessment</li>
                <li>Baseflow contribution analysis</li>
                <li>Wetland hydrology</li>
                <li>Water balance modeling</li>
              </ul>
            </div>

            <div className="service-card">
              <h3>Dewatering & Interference Effects</h3>
              <p>
                Assessment of dewatering requirements for construction projects and potential interference effects on existing groundwater users and ecosystems.
              </p>
              <p>
                Proper dewatering design ensures construction project success while minimizing environmental impacts and conflicts with other water users.
              </p>
              <ul className="service-features">
                <li>Dewatering system design</li>
                <li>Impact assessment on neighboring bores</li>
                <li>Monitoring program development</li>
                <li>Mitigation strategy planning</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Catchment Hydrology Section */}
        <section className="service-category">
          <h2>Catchment Hydrology Analysis & Modeling</h2>
          <div className="service-grid">
            <div className="service-card">
              <h3>Rainfall-Runoff Modeling</h3>
              <p>
                Development of rainfall-runoff models to simulate catchment response to precipitation events and assess water resource availability.
              </p>
              <p>
                These models are essential for flood prediction, water allocation planning, and evaluating the impacts of land use changes on water resources.
              </p>
              <ul className="service-features">
                <li>HEC-HMS and SWMM implementation</li>
                <li>Calibration with measured flow data</li>
                <li>Event-based and continuous simulation</li>
                <li>Climate change scenario analysis</li>
              </ul>
            </div>

            <div className="service-card">
              <h3>Water Quality Modeling</h3>
              <p>
                Comprehensive modeling of water quality parameters in catchments to identify pollution sources and evaluate mitigation strategies.
              </p>
              <p>
                Water quality models help in developing targeted interventions to improve stream health and meet regulatory requirements for freshwater management.
              </p>
              <ul className="service-features">
                <li>CLUES model calibration and application</li>
                <li>Nutrient loading and transport</li>
                <li>Sediment erosion and deposition</li>
                <li>Point and non-point source analysis</li>
              </ul>
            </div>

            <div className="service-card">
              <h3>Flood Assessment</h3>
              <p>
                Detailed flood modeling and risk assessment to identify vulnerable areas and evaluate mitigation options for flood protection.
              </p>
              <p>
                Flood studies provide critical information for infrastructure planning, emergency management, and land use decision-making to enhance community resilience.
              </p>
              <ul className="service-features">
                <li>Hydraulic modeling (HEC-RAS)</li>
                <li>Flood extent and depth mapping</li>
                <li>Climate change impact assessment</li>
                <li>Mitigation option evaluation</li>
              </ul>
            </div>

            <div className="service-card">
              <h3>Agricultural Systems Analysis</h3>
              <p>
                Modeling and analysis of agricultural systems to optimize productivity while minimizing environmental impacts on water resources.
              </p>
              <p>
                This integrated approach helps farmers and regulators balance production goals with environmental protection requirements.
              </p>
              <ul className="service-features">
                <li>Irrigation efficiency assessment</li>
                <li>Nutrient leaching modeling</li>
                <li>Farm system optimization</li>
                <li>NES-F compliance evaluation</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Wastewater Treatment Section */}
        <section className="service-category">
          <h2>Municipal & Agricultural Wastewater Treatment</h2>
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
          </div>
        </section>

        {/* Agricultural Solutions Section */}
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
              <h3>Constructed Wetlands</h3>
              <p>
                Design of natural treatment systems using engineered wetlands for sustainable wastewater treatment, particularly suitable for farm settings.
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
              <h3>NES-F Compliance Solutions</h3>
              <p>
                Comprehensive solutions for agricultural operations to achieve compliance with New Zealand's National Environmental Standards for Freshwater (NES-F).
              </p>
              <p>
                These tailored approaches help farmers meet regulatory requirements while maintaining agricultural productivity and efficiency.
              </p>
              <ul className="service-features">
                <li>Farm environmental plan development</li>
                <li>Mitigation system selection and design</li>
                <li>Cost-benefit analysis for compliance options</li>
                <li>Consent application support</li>
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

        {/* Environmental Management Section */}
        <section className="service-category">
          <h2>Environmental Management & Compliance</h2>
          <div className="full-service-card">
            <p>
              Expert guidance on environmental compliance and management for water resource projects, with in-depth knowledge of New Zealand's regulatory framework including the Resource Management Act (RMA), National Policy Statement for Freshwater Management (NPS-FM), and National Environmental Standards for Freshwater (NES-F).
            </p>
            <div className="service-grid">
              <div className="service-card">
                <h3>Resource Consent Applications</h3>
                <p>
                  Preparation and management of resource consent applications for water takes, discharges, and land use activities under the RMA.
                </p>
                <ul className="service-features">
                  <li>Assessment of Environmental Effects (AEE)</li>
                  <li>Stakeholder consultation management</li>
                  <li>Technical reporting and expert evidence</li>
                  <li>Consent condition negotiation</li>
                </ul>
              </div>

              <div className="service-card">
                <h3>Compliance Monitoring & Reporting</h3>
                <p>
                  Development and implementation of monitoring programs to ensure ongoing compliance with consent conditions and regulatory requirements.
                </p>
                <ul className="service-features">
                  <li>Water quality monitoring design</li>
                  <li>Data analysis and interpretation</li>
                  <li>Compliance reporting</li>
                  <li>Non-compliance mitigation planning</li>
                </ul>
              </div>

              <div className="service-card">
                <h3>Erosion & Sediment Control</h3>
                <p>
                  Design of effective erosion and sediment control measures for construction and land development projects to protect water resources.
                </p>
                <ul className="service-features">
                  <li>Erosion and Sediment Control Plans (ESCP)</li>
                  <li>Chemical treatment design</li>
                  <li>Site monitoring and maintenance planning</li>
                  <li>Staff training and capacity building</li>
                </ul>
              </div>

              <div className="service-card">
                <h3>Strategic Environmental Planning</h3>
                <p>
                  Development of long-term environmental strategies that balance development goals with sustainability objectives and regulatory compliance.
                </p>
                <ul className="service-features">
                  <li>Policy and plan development</li>
                  <li>Environmental risk assessment</li>
                  <li>Climate change adaptation planning</li>
                  <li>Stakeholder engagement facilitation</li>
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
                <h3>Bioethanol Production Optimization</h3>
                <p>
                  Process optimization for bioethanol production facilities to maximize yield and efficiency while minimizing costs and environmental impacts.
                </p>
                <ul className="service-features">
                  <li>Fermentation kinetics modeling</li>
                  <li>Yeast strain selection and evaluation</li>
                  <li>Process parameter optimization</li>
                  <li>Scale-up strategy development</li>
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
                <h3>Statistical Process Optimization</h3>
                <p>
                  Data-driven approaches to identify optimal operating conditions and control strategies for improved process performance.
                </p>
                <ul className="service-features">
                  <li>Design of Experiments (DOE)</li>
                  <li>Response surface methodology</li>
                  <li>Multivariate statistical process control</li>
                  <li>Robustness and sensitivity analysis</li>
                </ul>
              </div>

              <div className="service-card">
                <h3>Waste Valorization & Circular Economy</h3>
                <p>
                  Development of innovative approaches to convert process waste streams into valuable products, improving economic and environmental sustainability.
                </p>
                <ul className="service-features">
                  <li>Waste characterization and opportunity assessment</li>
                  <li>Process development for waste conversion</li>
                  <li>Techno-economic analysis</li>
                  <li>Market analysis for derived products</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <div className="consulting-cta">
          <h3>Need Specialized Environmental Engineering Solutions?</h3>
          <p>I provide customized consulting services tailored to your specific challenges and requirements. With expertise spanning hydrogeology, catchment modeling, wastewater treatment, and process optimization, I can develop efficient, sustainable solutions for your water and environmental needs.</p>
          <Link to="/contact" className="btn primary-btn">Request a Consultation</Link>
        </div>
      </div>
    </div>
  );
};

export default ConsultingPage;
