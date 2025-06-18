import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaWater,
  FaFlask,
  FaChartLine,
  FaLeaf,
  FaCogs,
  FaGlobe,
  FaLightbulb,
  FaMicroscope,
  FaIndustry,
  FaDatabase,
  FaMapMarkedAlt,
  FaSeedling,
  FaChartArea,
  FaMountain,
  FaBuilding,
  FaLayerGroup,
  FaSearchLocation,
  FaUserTie,
  FaGraduationCap,
  FaAward,
  FaRobot,
  FaTree,
  FaBrain,
  FaShieldAlt,
  FaAtom,
  FaGlasses,
  FaNetworkWired,
  FaRecycle,
  FaCompass
} from 'react-icons/fa';

import {
  SiPython,
  SiR,
  SiQgis,
  SiLinkedin
} from 'react-icons/si';

const ConsultingPage = () => {
  return (
    <div className="consulting-page">
      <nav className="dropdown-menu">
        <ul>
          <li>
            <Link to="#modeling">Environmental Systems Modeling</Link>
          </li>
          <li>
            <Link to="#engineering">Sustainable Engineering</Link>
          </li>
          <li>
            <Link to="#treatment">Water Treatment Technology</Link>
          </li>
          <li>
            <Link to="#geospatial">Geospatial Analysis</Link>
          </li>
        </ul>
      </nav>
      <section id="modeling" className="service-category">
        <h2>Environmental Systems Modeling</h2>
        <p>Advanced computational approaches for environmental challenges.</p>
        <div className="service-grid">
          <div className="service-card enhanced-card">
            <div className="card-header">
              <FaLayerGroup className="service-icon" />
              <h3>Integrated Watershed Modeling</h3>
            </div>
            <p>
              Comprehensive watershed modeling that works like a digital crystal ball - predicting how water moves,
              transforms, and impacts ecosystems across entire catchments.
            </p>
            <p>
              These sophisticated models integrate surface water, groundwater, land use, and climate data to provide
              holistic insights for sustainable water resource management.
            </p>
            <ul className="service-features">
              <li>Multi-scale catchment simulation (farm to regional scale)</li>
              <li>Surface water-groundwater interaction modeling</li>
              <li>Land use change impact assessment</li>
              <li>Water balance and allocation optimization</li>
              <li>Nutrient cycling and transport modeling</li>
            </ul>
            <div className="technology-badges">
              <span className="tech-badge">SWAT</span>
              <span className="tech-badge">MIKE SHE</span>
              <span className="tech-badge">HEC-HMS</span>
              <span className="tech-badge"><SiPython style={{ marginRight: '4px' }} />Python</span>
            </div>
          </div>

          <div className="service-card enhanced-card">
            <div className="card-header">
              <FaChartLine className="service-icon" />
              <h3>Advanced Hydraulic & Hydrologic Analysis</h3>
            </div>
            <p>
              Hydraulic analysis that functions like an engineer's X-ray vision - seeing through complex water
              systems to understand flow patterns, pressure dynamics, and system performance.
            </p>
            <p>
              From pipe networks to river systems, these analyses ensure optimal design and operation
              of water infrastructure.
            </p>
            <ul className="service-features">
              <li>Water distribution network analysis</li>
              <li>River and stream hydraulics</li>
              <li>Flood modeling and risk assessment</li>
              <li>Pump system optimization</li>
              <li>Pressure management strategies</li>
            </ul>
            <div className="technology-badges">
              <span className="tech-badge">HEC-RAS</span>
              <span className="tech-badge">EPANET</span>
              <span className="tech-badge">SWMM</span>
              <span className="tech-badge">Matlab</span>
            </div>
          </div>

          <div className="service-card enhanced-card">
            <div className="card-header">
              <FaBrain className="service-icon" />
              <h3>Predictive Environmental Quality Assessment</h3>
            </div>
            <p>
              AI-powered environmental forecasting that acts like a weather prediction system for water quality -
              anticipating problems before they become critical issues.
            </p>
            <p>
              Machine learning algorithms analyze environmental data patterns to provide early warnings
              and optimize management strategies.
            </p>
            <ul className="service-features">
              <li>Water quality prediction models</li>
              <li>Early warning systems for contamination</li>
              <li>Trend analysis and forecasting</li>
              <li>Automated monitoring optimization</li>
              <li>Risk-based management strategies</li>
            </ul>
            <div className="technology-badges">
              <span className="tech-badge">Machine Learning</span>
              <span className="tech-badge"><SiPython style={{ marginRight: '4px' }} />Python</span>
              <span className="tech-badge"><SiR style={{ marginRight: '4px' }} />R</span>
              <span className="tech-badge">TensorFlow</span>
            </div>
          </div>

          <div className="service-card enhanced-card">
            <div className="card-header">
              <FaDatabase className="service-icon" />
              <h3>Digital Twin Development for Water Systems</h3>
            </div>
            <p>
              Digital twin technology that creates a virtual mirror of your water infrastructure -
              think of it as building a smart, learning replica that evolves with your real system.
            </p>
            <p>
              These digital replicas enable predictive maintenance, scenario testing, and
              optimization without disrupting actual operations.
            </p>
            <ul className="service-features">
              <li>Real-time system monitoring and control</li>
              <li>Predictive maintenance scheduling</li>
              <li>Operational optimization algorithms</li>
              <li>Scenario planning and risk assessment</li>
              <li>Performance benchmarking and improvement</li>
            </ul>
            <div className="technology-badges">
              <span className="tech-badge">IoT Integration</span>
              <span className="tech-badge">Cloud Computing</span>
              <span className="tech-badge">Digital Twins</span>
              <span className="tech-badge">SCADA</span>
            </div>
          </div>

          <div className="service-card enhanced-card">
            <div className="card-header">
              <FaSeedling className="service-icon" />
              <h3>Nature-Based Solution Development</h3>
            </div>
            <p>
              Nature-based engineering that works like partnering with ecosystems - using natural processes
              to solve environmental challenges while providing multiple co-benefits.
            </p>
            <p>
              These solutions harness the power of natural systems to treat water, manage floods,
              and enhance biodiversity simultaneously.
            </p>
            <ul className="service-features">
              <li>Constructed wetland design and optimization</li>
              <li>Bioretention and rain garden systems</li>
              <li>Living shoreline restoration</li>
              <li>Green roof and wall systems</li>
              <li>Ecosystem service valuation</li>
            </ul>
            <div className="technology-badges">
              <span className="tech-badge">Ecological Design</span>
              <span className="tech-badge">Phytoremediation</span>
              <span className="tech-badge">SUDS</span>
              <span className="tech-badge">Ecosystem Services</span>
            </div>
          </div>

          <div className="service-card enhanced-card">
            <div className="card-header">
              <FaTree className="service-icon" />
              <h3>Green Infrastructure Implementation</h3>
            </div>
            <p>
              Green infrastructure that functions like nature's own utility system - providing essential
              services while enhancing community livability and environmental health.
            </p>
            <p>
              Integrated solutions that manage stormwater, improve air quality, reduce urban heat,
              and create valuable community spaces.
            </p>
            <ul className="service-features">
              <li>Urban forest water management</li>
              <li>Permeable pavement systems</li>
              <li>Bioswale design and installation</li>
              <li>Green corridor planning</li>
              <li>Multi-benefit optimization</li>
            </ul>
            <div className="technology-badges">
              <span className="tech-badge">LID Design</span>
              <span className="tech-badge">Urban Planning</span>
              <span className="tech-badge">GIS Analysis</span>
              <span className="tech-badge">Sustainability</span>
            </div>
          </div>

          <div className="service-card enhanced-card">
            <div className="card-header">
              <FaLeaf className="service-icon" />
              <h3>Ecological Engineering Approaches</h3>
            </div>
            <p>
              Ecological engineering that operates like ecosystem rehabilitation - restoring natural
              functions while providing engineered performance for human needs.
            </p>
            <p>
              Sustainable solutions that work with natural processes to create self-maintaining,
              resilient systems that improve over time.
            </p>
            <ul className="service-features">
              <li>Stream restoration and naturalization</li>
              <li>Wetland construction and enhancement</li>
              <li>Riparian buffer design</li>
              <li>Habitat connectivity planning</li>
              <li>Adaptive ecosystem management</li>
            </ul>
            <div className="technology-badges">
              <span className="tech-badge">Restoration Ecology</span>
              <span className="tech-badge">Habitat Design</span>
              <span className="tech-badge">Adaptive Management</span>
              <span className="tech-badge">Bioengineering</span>
            </div>
          </div>

          <div className="service-card enhanced-card">
            <div className="card-header">
              <FaShieldAlt className="service-icon" />
              <h3>Resilient System Design for Climate Adaptation</h3>
            </div>
            <p>
              Climate-resilient infrastructure that works like an adaptive immune system - evolving
              and strengthening in response to changing environmental conditions.
            </p>
            <p>
              Forward-thinking designs that not only withstand future climate scenarios but
              actually improve performance under stress.
            </p>
            <ul className="service-features">
              <li>Climate change vulnerability assessment</li>
              <li>Adaptive infrastructure design</li>
              <li>Extreme weather preparedness</li>
              <li>System redundancy and flexibility</li>
              <li>Long-term sustainability planning</li>
            </ul>
            <div className="technology-badges">
              <span className="tech-badge">Climate Modeling</span>
              <span className="tech-badge">Risk Assessment</span>
              <span className="tech-badge">Adaptive Design</span>
              <span className="tech-badge">Resilience Planning</span>
            </div>
          </div>
        </div>
      </section>

      {/* Water Treatment Technology & Process Engineering */}
      <section id="treatment" className="service-category modern-section">
        <div className="section-header">
          <FaFlask className="section-icon" />
          <h2>Water Treatment Technology & Process Engineering</h2>
          <p className="section-subtitle">Advanced treatment systems for municipal and industrial applications</p>
        </div>
        <div className="service-grid">
          <div className="service-card enhanced-card">
            <div className="card-header">
              <FaCogs className="service-icon" />
              <h3>Treatment System Design & Optimization</h3>
            </div>
            <p>
              Water treatment design that functions like a precision medicine approach - customizing
              treatment strategies to match specific water quality challenges and regulatory requirements.
            </p>
            <p>
              From concept to commissioning, comprehensive design services that optimize performance,
              efficiency, and long-term sustainability.
            </p>
            <ul className="service-features">
              <li>Process selection and sizing</li>
              <li>Energy efficiency optimization</li>
              <li>Automation and control design</li>
              <li>Life cycle cost analysis</li>
              <li>Performance monitoring systems</li>
            </ul>
            <div className="technology-badges">
              <span className="tech-badge">Process Design</span>
              <span className="tech-badge">AutoCAD</span>
              <span className="tech-badge">Process Modeling</span>
              <span className="tech-badge">Energy Optimization</span>
            </div>
          </div>

          <div className="service-card enhanced-card">
            <div className="card-header">
              <FaAtom className="service-icon" />
              <h3>Innovative Contaminant Removal Strategies</h3>
            </div>
            <p>
              Contaminant removal that works like a molecular-level security system - identifying and
              eliminating specific pollutants with precision and efficiency.
            </p>
            <p>
              Advanced treatment technologies targeting emerging contaminants, micropollutants,
              and challenging water quality issues.
            </p>
            <ul className="service-features">
              <li>Advanced oxidation processes</li>
              <li>Membrane technology applications</li>
              <li>Electrochemical treatment methods</li>
              <li>Biological contaminant removal</li>
              <li>Nutrient recovery and removal</li>
            </ul>
            <div className="technology-badges">
              <span className="tech-badge">Advanced Treatment</span>
              <span className="tech-badge">Membrane Technology</span>
              <span className="tech-badge">Electrochemistry</span>
              <span className="tech-badge">Biotechnology</span>
            </div>
          </div>

          <div className="service-card enhanced-card">
            <div className="card-header">
              <FaGlasses className="service-icon" />
              <h3>Water Quality Management Frameworks</h3>
            </div>
            <p>
              Water quality management that operates like a comprehensive health monitoring system -
              continuously tracking, analyzing, and maintaining optimal water conditions.
            </p>
            <p>
              Integrated frameworks that ensure consistent water quality through monitoring,
              analysis, and adaptive management strategies.
            </p>
            <ul className="service-features">
              <li>Water safety plan development</li>
              <li>Multi-barrier treatment approaches</li>
              <li>Real-time quality monitoring</li>
              <li>Regulatory compliance management</li>
              <li>Risk assessment and mitigation</li>
            </ul>
            <div className="technology-badges">
              <span className="tech-badge">Quality Management</span>
              <span className="tech-badge">Monitoring Systems</span>
              <span className="tech-badge">Risk Assessment</span>
              <span className="tech-badge">Compliance</span>
            </div>
          </div>

          <div className="service-card enhanced-card">
            <div className="card-header">
              <FaNetworkWired className="service-icon" />
              <h3>Decentralized Treatment Solutions</h3>
            </div>
            <p>
              Decentralized treatment that works like a distributed network - bringing treatment
              capabilities closer to where they're needed while maintaining system-wide efficiency.
            </p>
            <p>
              Small-scale, community-based treatment systems that provide flexibility, resilience,
              and cost-effective solutions for diverse applications.
            </p>
            <ul className="service-features">
              <li>Package treatment plant design</li>
              <li>On-site wastewater systems</li>
              <li>Community-scale solutions</li>
              <li>Remote monitoring capabilities</li>
              <li>Modular and scalable designs</li>
            </ul>
            <div className="technology-badges">
              <span className="tech-badge">Decentralized Systems</span>
              <span className="tech-badge">Package Plants</span>
              <span className="tech-badge">Remote Monitoring</span>
              <span className="tech-badge">Modular Design</span>
            </div>
          </div>

          <div className="service-card enhanced-card">
            <div className="card-header">
              <FaFlask className="service-icon" />
              <h3>Bioprocess Engineering & Optimization</h3>
            </div>
            <p>
              Bioprocess engineering that functions like conducting a microbial orchestra - optimizing
              biological processes to achieve maximum treatment efficiency and resource recovery.
            </p>
            <p>
              Advanced biological treatment systems that harness the power of microorganisms
              for sustainable water treatment and resource recovery.
            </p>
            <ul className="service-features">
              <li>Bioreactor design and optimization</li>
              <li>Microbial community management</li>
              <li>Fermentation process control</li>
              <li>Biogas production and utilization</li>
              <li>Biological nutrient removal</li>
            </ul>
            <div className="technology-badges">
              <span className="tech-badge">Bioreactor Design</span>
              <span className="tech-badge">Fermentation</span>
              <span className="tech-badge">Biogas</span>
              <span className="tech-badge">Microbiology</span>
            </div>
          </div>

          <div className="service-card enhanced-card">
            <div className="card-header">
              <FaRecycle className="service-icon" />
              <h3>Resource Recovery System Development</h3>
            </div>
            <p>
              Resource recovery that works like urban mining - extracting valuable resources from
              waste streams to create circular, sustainable treatment systems.
            </p>
            <p>
              Innovative approaches that transform waste treatment facilities into resource
              recovery centers, generating energy, nutrients, and clean water.
            </p>
            <ul className="service-features">
              <li>Nutrient recovery and reuse</li>
              <li>Energy generation from waste</li>
              <li>Water reuse and recycling</li>
              <li>Biosolids management and valorization</li>
              <li>Circular economy integration</li>
            </ul>
            <div className="technology-badges">
              <span className="tech-badge">Resource Recovery</span>
              <span className="tech-badge">Circular Economy</span>
              <span className="tech-badge">Energy Recovery</span>
              <span className="tech-badge">Nutrient Recovery</span>
            </div>
          </div>

          <div className="service-card enhanced-card">
            <div className="card-header">
              <FaIndustry className="service-icon" />
              <h3>Industrial Ecology Implementation</h3>
            </div>
            <p>
              Industrial ecology that operates like a natural ecosystem - where waste from one
              process becomes input for another, creating efficient, sustainable industrial networks.
            </p>
            <p>
              Systems thinking approaches that optimize resource use across industrial facilities
              and create symbiotic relationships between different processes.
            </p>
            <ul className="service-features">
              <li>Industrial symbiosis development</li>
              <li>Waste stream optimization</li>
              <li>Material flow analysis</li>
              <li>Eco-industrial park planning</li>
              <li>Sustainability metrics development</li>
            </ul>
            <div className="technology-badges">
              <span className="tech-badge">Industrial Ecology</span>
              <span className="tech-badge">Symbiosis</span>
              <span className="tech-badge">Material Flow</span>
              <span className="tech-badge">Sustainability</span>
            </div>
          </div>

          <div className="service-card enhanced-card">
            <div className="card-header">
              <FaRecycle className="service-icon" />
              <h3>Circular Economy Approaches</h3>
            </div>
            <p>
              Circular economy design that functions like nature's own recycling system - eliminating
              waste by designing processes where every output becomes a valuable input.
            </p>
            <p>
              Comprehensive strategies that redesign industrial and municipal systems to minimize
              waste, maximize resource efficiency, and create regenerative processes.
            </p>
            <ul className="service-features">
              <li>Circular design principles</li>
              <li>Life cycle assessment</li>
              <li>Waste elimination strategies</li>
              <li>Product-as-a-service models</li>
              <li>Regenerative system design</li>
            </ul>
            <div className="technology-badges">
              <span className="tech-badge">Circular Design</span>
              <span className="tech-badge">LCA</span>
              <span className="tech-badge">Zero Waste</span>
              <span className="tech-badge">Regenerative</span>
            </div>
          </div>
        </div>
      </section>

      {/* Geospatial Analysis & Technical Expertise */}
      <section id="geospatial" className="service-category modern-section">
        <div className="section-header">
          <FaMapMarkedAlt className="section-icon" />
          <h2>Geospatial Analysis & Technical Expertise</h2>
          <p className="section-subtitle">Advanced spatial analysis and data science for environmental applications</p>
        </div>
        <div className="service-grid">
          <div className="service-card enhanced-card">
            <div className="card-header">
              <FaGlobe className="service-icon" />
              <h3>Environmental Spatial Modeling</h3>
            </div>
            <p>
              Environmental spatial modeling that works like Google Earth for environmental data -
              revealing hidden patterns, relationships, and trends across landscapes and watersheds.
            </p>
            <p>
              Advanced GIS applications that transform spatial data into actionable insights
              for environmental management and decision-making.
            </p>
            <ul className="service-features">
              <li>3D environmental visualization</li>
              <li>Spatial pattern analysis</li>
              <li>Multi-criteria decision analysis</li>
              <li>Remote sensing applications</li>
              <li>Spatial interpolation and modeling</li>
            </ul>
            <div className="technology-badges">
              <span className="tech-badge">ArcGIS</span>
              <span className="tech-badge">QGIS</span>
              <span className="tech-badge">Remote Sensing</span>
              <span className="tech-badge">Spatial Analysis</span>
            </div>
          </div>

          <div className="service-card enhanced-card">
            <div className="card-header">
              <FaChartLine className="service-icon" />
              <h3>Multi-Dimensional Data Visualization</h3>
            </div>
            <p>
              Data visualization that functions like a translator for complex information - converting
              multidimensional environmental data into clear, intuitive visual stories.
            </p>
            <p>
              Interactive dashboards and visualizations that make complex environmental data
              accessible to stakeholders and decision-makers.
            </p>
            <ul className="service-features">
              <li>Interactive dashboard development</li>
              <li>3D data visualization</li>
              <li>Time-series analysis and display</li>
              <li>Statistical graphics and charts</li>
              <li>Web-based visualization platforms</li>
            </ul>
            <div className="technology-badges">
              <span className="tech-badge">Tableau</span>
              <span className="tech-badge">Python</span>
              <span className="tech-badge">R</span>
              <span className="tech-badge">D3.js</span>
            </div>
          </div>

          <div className="service-card enhanced-card">
            <div className="card-header">
              <FaSearchLocation className="service-icon" />
              <h3>Land-Water Interaction Analysis</h3>
            </div>
            <p>
              Land-water analysis that operates like an ecosystem detective - investigating the
              complex relationships between terrestrial and aquatic systems.
            </p>
            <p>
              Comprehensive analysis of how land use, topography, and human activities
              influence water resources and ecosystem health.
            </p>
            <ul className="service-features">
              <li>Watershed delineation and characterization</li>
              <li>Land use change impact assessment</li>
              <li>Riparian zone analysis</li>
              <li>Hydrologic connectivity mapping</li>
              <li>Ecosystem service quantification</li>
            </ul>
            <div className="technology-badges">
              <span className="tech-badge">Watershed Analysis</span>
              <span className="tech-badge">Land Use Modeling</span>
              <span className="tech-badge">Ecosystem Services</span>
              <span className="tech-badge">Connectivity</span>
            </div>
          </div>

          <div className="service-card enhanced-card">
            <div className="card-header">
              <FaMountain className="service-icon" />
              <h3>Terrain & Hydrologic Feature Characterization</h3>
            </div>
            <p>
              Terrain analysis that works like a topographic scanner - precisely mapping and
              analyzing landscape features that control water flow and environmental processes.
            </p>
            <p>
              Detailed characterization of topographic and hydrologic features that influence
              water movement, erosion, and ecosystem function.
            </p>
            <ul className="service-features">
              <li>Digital elevation model analysis</li>
              <li>Flow direction and accumulation</li>
              <li>Slope and aspect analysis</li>
              <li>Stream network delineation</li>
              <li>Geomorphological assessment</li>
            </ul>
            <div className="technology-badges">
              <span className="tech-badge">DEM Analysis</span>
              <span className="tech-badge">Hydrology Tools</span>
              <span className="tech-badge">Geomorphology</span>
              <span className="tech-badge">Flow Analysis</span>
            </div>
          </div>

          <div className="service-card enhanced-card">
            <div className="card-header">
              <FaRobot className="service-icon" />
              <h3>Data Science for Environmental Applications</h3>
            </div>
            <p>
              Environmental data science that functions like an AI environmental consultant -
              using machine learning and advanced analytics to extract insights from complex datasets.
            </p>
            <p>
              Cutting-edge data science techniques applied to environmental challenges,
              from prediction and optimization to pattern recognition and decision support.
            </p>
            <ul className="service-features">
              <li>Machine learning model development</li>
              <li>Big data processing and analysis</li>
              <li>Predictive modeling and forecasting</li>
              <li>Automated data pipelines</li>
              <li>Statistical analysis and interpretation</li>
            </ul>
            <div className="technology-badges">
              <span className="tech-badge">Python</span>
              <span className="tech-badge">R</span>
              <span className="tech-badge">Machine Learning</span>
              <span className="tech-badge">Big Data</span>
            </div>
          </div>

          <div className="service-card enhanced-card">
            <div className="card-header">
              <FaMicroscope className="service-icon" />
              <h3>Research Methodology & Experimental Design</h3>
            </div>
            <p>
              Research design that operates like a scientific GPS - guiding research projects
              along the most efficient path to valid, reliable, and meaningful results.
            </p>
            <p>
              Rigorous experimental design and statistical approaches that maximize the value
              of research investments and ensure scientifically sound conclusions.
            </p>
            <ul className="service-features">
              <li>Experimental design optimization</li>
              <li>Statistical power analysis</li>
              <li>Quality assurance protocols</li>
              <li>Data collection strategies</li>
              <li>Publication and peer review support</li>
            </ul>
            <div className="technology-badges">
              <span className="tech-badge">DOE</span>
              <span className="tech-badge">Statistics</span>
              <span className="tech-badge">QA/QC</span>
              <span className="tech-badge">Research Design</span>
            </div>
          </div>

          <div className="service-card enhanced-card">
            <div className="card-header">
              <FaBuilding className="service-icon" />
              <h3>Environmental Regulatory Framework Navigation</h3>
            </div>
            <p>
              Regulatory navigation that works like a legal compass - guiding projects through
              complex environmental regulations to achieve compliance efficiently and effectively.
            </p>
            <p>
              Expert guidance through New Zealand's environmental regulatory landscape,
              from consent applications to compliance monitoring and reporting.
            </p>
            <ul className="service-features">
              <li>RMA consent application support</li>
              <li>NPS-FM and NES-F compliance</li>
              <li>Environmental impact assessment</li>
              <li>Regulatory risk assessment</li>
              <li>Stakeholder engagement facilitation</li>
            </ul>
            <div className="technology-badges">
              <span className="tech-badge">RMA</span>
              <span className="tech-badge">NPS-FM</span>
              <span className="tech-badge">NES-F</span>
              <span className="tech-badge">Compliance</span>
            </div>
          </div>

          <div className="service-card enhanced-card">
            <div className="card-header">
              <FaCompass className="service-icon" />
              <h3>Indigenous Environmental Management Principles</h3>
            </div>
            <p>
              Indigenous management that functions like traditional navigation - using time-tested
              wisdom and cultural knowledge to guide contemporary environmental decision-making.
            </p>
            <p>
              Culturally grounded approaches that honor indigenous knowledge systems while
              integrating modern environmental science and technology.
            </p>
            <ul className="service-features">
              <li>Te Mana o te Wai implementation</li>
              <li>Cultural impact assessment</li>
              <li>Traditional knowledge integration</li>
              <li>Community engagement and consultation</li>
              <li>Culturally appropriate monitoring</li>
            </ul>
            <div className="technology-badges">
              <span className="tech-badge">Te Mana o te Wai</span>
              <span className="tech-badge">Cultural Assessment</span>
              <span className="tech-badge">Traditional Knowledge</span>
              <span className="tech-badge">Community Engagement</span>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Tools & Software Expertise */}
      <section className="service-category modern-section">
        <div className="section-header">
          <FaCogs className="section-icon" />
          <h2>Technical Tools & Software Expertise</h2>
          <p className="section-subtitle">Advanced computational tools for environmental analysis and modeling</p>
        </div>
        <div className="service-grid">
          <div className="service-card enhanced-card tool-card">
            <div className="card-header">
              <FaWater className="service-icon" />
              <h3>Modeling Software</h3>
            </div>
            <div className="tool-categories">
              <div className="tool-category">
                <h4>Stormwater Management</h4>
                <div className="technology-badges">
                  <span className="tech-badge">SWMM</span>
                  <span className="tech-badge">pySWMM</span>
                </div>
              </div>
              <div className="tool-category">
                <h4>Water Distribution</h4>
                <div className="technology-badges">
                  <span className="tech-badge">EPANET</span>
                </div>
              </div>
              <div className="tool-category">
                <h4>River Analysis</h4>
                <div className="technology-badges">
                  <span className="tech-badge">HEC-RAS</span>
                </div>
              </div>
              <div className="tool-category">
                <h4>Groundwater Modeling</h4>
                <div className="technology-badges">
                  <span className="tech-badge">MODFLOW</span>
                </div>
              </div>
            </div>
          </div>

          <div className="service-card enhanced-card tool-card">
            <div className="card-header">
              <FaChartLine className="service-icon" />
              <h3>Data Analysis & Programming</h3>
            </div>
            <div className="tool-categories">
              <div className="tool-category">
                <h4><SiPython style={{ marginRight: '8px' }} />Python Ecosystem</h4>
                <div className="technology-badges">
                  <span className="tech-badge">Pandas</span>
                  <span className="tech-badge">NumPy</span>
                  <span className="tech-badge">Matplotlib</span>
                  <span className="tech-badge">SciPy</span>
                </div>
              </div>
              <div className="tool-category">
                <h4><SiR style={{ marginRight: '8px' }} />Statistical Computing</h4>
                <div className="technology-badges">
                  <span className="tech-badge">Advanced Statistics</span>
                  <span className="tech-badge">Data Visualization</span>
                  <span className="tech-badge">Regression Analysis</span>
                </div>
              </div>
              <div className="tool-category">
                <h4><SiQgis style={{ marginRight: '8px' }} />Spatial Analysis</h4>
                <div className="technology-badges">
                  <span className="tech-badge">QGIS</span>
                  <span className="tech-badge">ArcGIS</span>
                  <span className="tech-badge">Spatial Modeling</span>
                </div>
              </div>
              <div className="tool-category">
                <h4>Engineering Analysis</h4>
                <div className="technology-badges">
                  <span className="tech-badge">Numerical Computing</span>
                  <span className="tech-badge">Signal Processing</span>
                  <span className="tech-badge">Optimization</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Qualifications & Credentials */}
      <section className="service-category modern-section">
        <div className="section-header">
          <FaUserTie className="section-icon" />
          <h2>Professional Qualifications & Credentials</h2>
          <p className="section-subtitle">PhD-qualified environmental engineer with proven industry experience</p>
        </div>
        <div className="service-grid">
          <div className="service-card enhanced-card">
            <div className="card-header">
              <FaGraduationCap className="service-icon" />
              <h3>Educational Excellence</h3>
            </div>
            <ul className="service-features">
              <li><strong>PhD Environmental Engineering</strong> - University of Waikato (2019-2022)</li>
              <li><strong>MSc Chemical Engineering</strong> - Sahand University of Technology (2015-2017)</li>
              <li><strong>BSc Chemical Engineering</strong> - University of Zanjan (2011-2015)</li>
              <li>Specialized research in enhanced nitrate removal via carbon dosing</li>
              <li>Advanced training in environmental systems modeling and analysis</li>
            </ul>
            <div className="technology-badges">
              <span className="tech-badge">PhD Qualified</span>
              <span className="tech-badge">Research Excellence</span>
              <span className="tech-badge">Advanced Degrees</span>
            </div>
          </div>

          <div className="service-card enhanced-card">
            <div className="card-header">
              <FaBuilding className="service-icon" />
              <h3>Professional Experience</h3>
            </div>
            <ul className="service-features">
              <li><strong>Environmental Engineer</strong> - NIWA (Mar 2023 - Present)</li>
              <li><strong>Water Engineer</strong> - Williamson Water & Land Advisory (2022)</li>
              <li><strong>Chemical Engineer</strong> - Bidestan Alcohol & Foodstuff Co (2016-2019)</li>
              <li>Leading researcher in sustainable water treatment technologies</li>
              <li>Proven track record in both research and practical applications</li>
            </ul>
            <div className="technology-badges">
              <span className="tech-badge">Industry Experience</span>
              <span className="tech-badge">Research Leadership</span>
              <span className="tech-badge">Project Management</span>
            </div>
          </div>

          <div className="service-card enhanced-card">
            <div className="card-header">
              <FaAward className="service-icon" />
              <h3>Professional Affiliations & Recognition</h3>
            </div>
            <ul className="service-features">
              <li><strong>Engineering New Zealand</strong> - Professional Member</li>
              <li><strong>Chartered Professional Engineer (CPEng)</strong> - In Progress</li>
              <li><strong>International Water Quality Forums</strong> - Active Participant</li>
              <li>Published researcher with 10+ peer-reviewed publications</li>
              <li>Recognized expert in environmental systems modeling</li>
            </ul>
            <div className="technology-badges">
              <span className="tech-badge">Professional Member</span>
              <span className="tech-badge">CPEng Candidate</span>
              <span className="tech-badge">Published Researcher</span>
            </div>
          </div>

          <div className="service-card enhanced-card">
            <div className="card-header">
              <SiLinkedin className="service-icon" />
              <h3>Professional Networks & Publications</h3>
            </div>
            <ul className="service-features">
              <li><strong>LinkedIn Professional Profile</strong> - nz.linkedin.com/in/reza-moghaddam</li>
              <li><strong>Google Scholar</strong> - Comprehensive publication record</li>
              <li><strong>NIWA Research Profile</strong> - Current research activities</li>
              <li>Actively contributing to water quality and environmental forums</li>
              <li>Multilingual capabilities (English, Persian)</li>
            </ul>
            <div className="technology-badges">
              <span className="tech-badge">Professional Networks</span>
              <span className="tech-badge">International Collaboration</span>
              <span className="tech-badge">Multilingual</span>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Call to Action */}
      <div className="consulting-cta enhanced-cta">
        <div className="cta-background">
          <div className="cta-icons">
            <FaWater />
            <FaLeaf />
            <FaLightbulb />
            <FaCogs />
            <FaGlobe />
            <FaRobot />
          </div>
        </div>
        <div className="cta-content">
          <h3>Ready to Transform Your Environmental Challenges?</h3>
          <p>
            With expertise spanning from molecular-level treatment processes to watershed-scale modeling,
            I provide comprehensive environmental engineering solutions that work like a Swiss Army knife
            for complex environmental challenges. From digital twins that predict the future to nature-based
            solutions that heal ecosystems, let's create innovative, sustainable solutions that benefit both
            your objectives and the environment.
          </p>
          <div className="cta-buttons">
            <Link to="/contact" className="btn primary-btn enhanced-btn">
              Start Your Project
            </Link>
            <Link to="/resume" className="btn secondary-btn enhanced-btn">
              View Credentials
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConsultingPage;
