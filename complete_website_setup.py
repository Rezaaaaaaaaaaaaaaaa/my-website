#!/usr/bin/env python3
"""
Enhanced Portfolio Website Setup Script with Modern UI and Complete CV Services

This script creates a complete React-based portfolio website for Dr. Reza Moghaddam,
Environmental & Water Systems Engineer, incorporating all services from his CV
with modern, visually appealing design elements.

Usage:
1. Save this script as 'enhanced_portfolio_setup.py'
2. Run: python enhanced_portfolio_setup.py
3. After running, install dependencies: npm install
4. Start the development server: npm start
5. Push to GitHub and deploy on Netlify
"""

import os
import sys
import shutil

def create_directories():
    """Create the necessary directory structure"""
    print("Creating enhanced directory structure...")
    
    directories = [
        'src',
        'src/components',
        'src/pages',
        'src/assets',
        'src/assets/icons',
        'public',
        'public/images'
    ]
    
    for directory in directories:
        os.makedirs(directory, exist_ok=True)
        print(f"Created directory: {directory}")

def create_package_json():
    """Create enhanced package.json with additional dependencies"""
    content = """{
  "name": "reza-moghaddam-portfolio",
  "version": "2.0.0",
  "private": true,
  "description": "Professional portfolio website for Dr. Reza Moghaddam - Environmental Engineer & Water Systems Specialist",
  "author": "Dr. Reza Moghaddam",
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-icons": "^5.5.0",
    "react-router-dom": "^6.16.0",
    "react-scripts": "5.0.1",
    "framer-motion": "^10.16.0",
    "react-intersection-observer": "^9.5.0"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": [
      "react-app"
    ]
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  }
}"""
    
    with open('package.json', 'w', encoding='utf-8') as f:
        f.write(content)
    print("Created enhanced package.json")

def create_enhanced_app_js():
    """Create the main App.js file with enhanced routing"""
    content = """import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import PublicationsPage from './pages/PublicationsPage';
import ConsultingPage from './pages/ConsultingPage';
import ResumePage from './pages/ResumePage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/publications" element={<PublicationsPage />} />
            <Route path="/consulting" element={<ConsultingPage />} />
            <Route path="/resume" element={<ResumePage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
"""
    
    with open('src/App.js', 'w', encoding='utf-8') as f:
        f.write(content)
    print("Created enhanced App.js")

def create_enhanced_consulting_page():
    """Create the comprehensive ConsultingPage with all CV services"""
    content = """import React from 'react';
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
  FaRecycle,
  FaTree,
  FaShieldAlt,
  FaRobot,
  FaDatabase,
  FaMapMarkedAlt,
  FaUsers,
  FaCloudRain,
  FaHandHoldingWater,
  FaSeedling,
  FaChartArea,
  FaMountain,
  FaCity,
  FaBuilding,
  FaLayerGroup,
  FaSearchLocation,
  FaBrain,
  FaNetworkWired,
  FaGlasses,
  FaAtom,
  FaCompass
} from 'react-icons/fa';

const ConsultingPage = () => {
  return (
    <div className="consulting-page">
      <section className="page-header enhanced-header">
        <div className="header-background">
          <div className="floating-icons">
            <FaWater className="floating-icon icon-1" />
            <FaLeaf className="floating-icon icon-2" />
            <FaFlask className="floating-icon icon-3" />
            <FaGlobe className="floating-icon icon-4" />
            <FaCogs className="floating-icon icon-5" />
            <FaLightbulb className="floating-icon icon-6" />
            <FaRobot className="floating-icon icon-7" />
            <FaTree className="floating-icon icon-8" />
          </div>
        </div>
        <div className="header-content">
          <h1>Advanced Environmental Consulting Services</h1>
          <p>Cutting-edge solutions combining environmental science, engineering innovation, and sustainable technology</p>
          <div className="header-stats">
            <div className="stat-item">
              <span className="stat-number">15+</span>
              <span className="stat-label">Service Areas</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">50+</span>
              <span className="stat-label">Projects Completed</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">10+</span>
              <span className="stat-label">Publications</span>
            </div>
          </div>
        </div>
      </section>

      <div className="consulting-container">
        {/* Environmental Systems Modeling & Sustainable Engineering */}
        <section className="service-category modern-section">
          <div className="section-header">
            <FaChartArea className="section-icon" />
            <h2>Environmental Systems Modeling & Sustainable Engineering</h2>
            <p className="section-subtitle">Advanced computational approaches for environmental challenges</p>
          </div>
          <div className="service-grid">
            <div className="service-card enhanced-card">
              <div className="card-header">
                <FaLayerGroup className="service-icon" />
                <h3>Integrated Watershed Modeling & Simulation</h3>
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
                <span className="tech-badge">Python</span>
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
                <span className="tech-badge">Python</span>
                <span className="tech-badge">R</span>
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
        <section className="service-category modern-section">
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
        <section className="service-category modern-section">
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
                  <h4>Python Ecosystem</h4>
                  <div className="technology-badges">
                    <span className="tech-badge">Pandas</span>
                    <span className="tech-badge">NumPy</span>
                    <span className="tech-badge">Matplotlib</span>
                    <span className="tech-badge">SciPy</span>
                  </div>
                </div>
                <div className="tool-category">
                  <h4>Statistical Computing</h4>
                  <div className="technology-badges">
                    <span className="tech-badge">R</span>
                  </div>
                </div>
                <div className="tool-category">
                  <h4>Spatial Analysis</h4>
                  <div className="technology-badges">
                    <span className="tech-badge">QGIS</span>
                    <span className="tech-badge">ArcGIS</span>
                  </div>
                </div>
                <div className="tool-category">
                  <h4>Engineering Analysis</h4>
                  <div className="technology-badges">
                    <span className="tech-badge">Matlab</span>
                  </div>
                </div>
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
    </div>
  );
};

export default ConsultingPage;
"""
    
    with open('src/pages/ConsultingPage.js', 'w', encoding='utf-8') as f:
        f.write(content)
    print("Created comprehensive ConsultingPage.js with all CV services")

def create_enhanced_css():
    """Create the comprehensive enhanced CSS file"""
    content = """/* Enhanced Environmental Engineering Portfolio - Complete Modern Styling */

/* Reset & Base Styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Inter', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  line-height: 1.6;
  color: #333;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  overflow-x: hidden;
}

.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.main-content {
  flex: 1;
}

/* Typography */
h1, h2, h3, h4, h5, h6 {
  margin-bottom: 1rem;
  font-family: 'Inter', sans-serif;
  line-height: 1.2;
}

h1 { font-size: 3rem; font-weight: 800; }
h2 { font-size: 2.5rem; font-weight: 700; }
h3 { font-size: 1.75rem; font-weight: 600; }
h4 { font-size: 1.5rem; font-weight: 600; }
h5 { font-size: 1.25rem; font-weight: 600; }
h6 { font-size: 1.1rem; font-weight: 600; }

p {
  font-size: 1rem;
  line-height: 1.7;
  margin-bottom: 1rem;
  color: #555;
}

/* Enhanced Button Styles */
.btn {
  display: inline-block;
  padding: 1rem 2rem;
  border-radius: 50px;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  text-decoration: none;
  border: none;
  position: relative;
  overflow: hidden;
}

.primary-btn {
  background: linear-gradient(135deg, #1a5276, #2980b9);
  color: white;
  box-shadow: 0 10px 30px rgba(26, 82, 118, 0.3);
}

.primary-btn:hover {
  background: linear-gradient(135deg, #154360, #1f618d);
  transform: translateY(-3px);
  box-shadow: 0 15px 40px rgba(26, 82, 118, 0.4);
}

.secondary-btn {
  background: transparent;
  color: #1a5276;
  border: 2px solid #1a5276;
  box-shadow: 0 5px 20px rgba(26, 82, 118, 0.1);
}

.secondary-btn:hover {
  background: rgba(26, 82, 118, 0.1);
  transform: translateY(-3px);
  box-shadow: 0 10px 30px rgba(26, 82, 118, 0.2);
}

.enhanced-btn {
  position: relative;
  z-index: 1;
}

.enhanced-btn::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
  transition: left 0.5s;
  z-index: -1;
}

.enhanced-btn:hover::before {
  left: 100%;
}

/* Enhanced Page Header */
.enhanced-header {
  background: linear-gradient(135deg, #0f3460 0%, #1a5276 25%, #2980b9 50%, #3498db 75%, #5dade2 100%);
  color: white;
  text-align: center;
  padding: 8rem 2rem;
  position: relative;
  overflow: hidden;
  min-height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.header-background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0.1;
  overflow: hidden;
}

.floating-icons {
  position: absolute;
  width: 100%;
  height: 100%;
}

.floating-icon {
  position: absolute;
  font-size: 2.5rem;
  opacity: 0.2;
  animation: float 8s ease-in-out infinite;
  color: rgba(255, 255, 255, 0.3);
}

.icon-1 { top: 15%; left: 10%; animation-delay: 0s; }
.icon-2 { top: 25%; right: 15%; animation-delay: 1s; }
.icon-3 { top: 45%; left: 85%; animation-delay: 2s; }
.icon-4 { top: 65%; left: 20%; animation-delay: 3s; }
.icon-5 { top: 75%; right: 25%; animation-delay: 4s; }
.icon-6 { top: 35%; left: 5%; animation-delay: 5s; }
.icon-7 { top: 55%; right: 5%; animation-delay: 6s; }
.icon-8 { top: 85%; left: 60%; animation-delay: 7s; }

@keyframes float {
  0%, 100% { 
    transform: translateY(0px) rotate(0deg); 
    opacity: 0.2;
  }
  25% { 
    transform: translateY(-15px) rotate(5deg); 
    opacity: 0.3;
  }
  50% { 
    transform: translateY(-25px) rotate(-5deg); 
    opacity: 0.4;
  }
  75% { 
    transform: translateY(-10px) rotate(3deg); 
    opacity: 0.3;
  }
}

.header-content {
  position: relative;
  z-index: 2;
  max-width: 1000px;
  margin: 0 auto;
}

.enhanced-header h1 {
  font-size: 4rem;
  margin-bottom: 1rem;
  text-shadow: 2px 2px 8px rgba(0,0,0,0.3);
  background: linear-gradient(45deg, #ffffff, #e8f4fd);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: glow 2s ease-in-out infinite alternate;
}

@keyframes glow {
  from { text-shadow: 2px 2px 8px rgba(0,0,0,0.3), 0 0 20px rgba(255,255,255,0.1); }
  to { text-shadow: 2px 2px 8px rgba(0,0,0,0.3), 0 0 30px rgba(255,255,255,0.2); }
}

.enhanced-header p {
  font-size: 1.4rem;
  margin-bottom: 2rem;
  text-shadow: 1px 1px 4px rgba(0,0,0,0.3);
  color: rgba(255, 255, 255, 0.95);
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
}

.header-stats {
  display: flex;
  justify-content: center;
  gap: 3rem;
  margin-top: 3rem;
  flex-wrap: wrap;
}

.stat-item {
  text-align: center;
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;
}

.stat-item:hover {
  background: rgba(255, 255, 255, 0.15);
  transform: translateY(-5px);
}

.stat-number {
  display: block;
  font-size: 2.5rem;
  font-weight: 800;
  color: #ffffff;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
}

.stat-label {
  display: block;
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.9);
  margin-top: 0.5rem;
}

/* Enhanced Section Styling */
.consulting-container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 4rem 2rem;
}

.modern-section {
  margin-bottom: 8rem;
  background: rgba(255, 255, 255, 0.95);
  border-radius: 30px;
  padding: 4rem;
  box-shadow: 
    0 30px 60px rgba(0, 0, 0, 0.1),
    0 10px 30px rgba(0, 0, 0, 0.05);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
}

.modern-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 5px;
  background: linear-gradient(90deg, #1a5276, #2980b9, #3498db, #5dade2);
  opacity: 0.8;
}

.modern-section:hover {
  transform: translateY(-5px);
  box-shadow: 
    0 40px 80px rgba(0, 0, 0, 0.15),
    0 15px 40px rgba(0, 0, 0, 0.08);
}

.section-header {
  text-align: center;
  margin-bottom: 4rem;
  position: relative;
}

.section-icon {
  font-size: 4rem;
  background: linear-gradient(135deg, #1a5276, #2980b9, #3498db);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  display: block;
  margin: 0 auto 1rem auto;
  animation: pulse 2s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
}

.section-header h2 {
  font-size: 3rem;
  background: linear-gradient(135deg, #1a5276, #2980b9);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 1rem;
  position: relative;
}

.section-subtitle {
  font-size: 1.2rem;
  color: #666;
  font-style: italic;
  max-width: 600px;
  margin: 0 auto;
}

/* Enhanced Service Grid */
.service-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
  gap: 2.5rem;
  margin-top: 2rem;
}

.enhanced-card {
  background: linear-gradient(145deg, #ffffff, #f8f9fa);
  border-radius: 25px;
  padding: 3rem;
  box-shadow: 
    0 15px 35px rgba(0, 0, 0, 0.08),
    0 5px 15px rgba(0, 0, 0, 0.03),
    inset 0 1px 0 rgba(255, 255, 255, 0.8);
  transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  border: 1px solid rgba(26, 82, 118, 0.08);
  position: relative;
  overflow: hidden;
}

.enhanced-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, #1a5276, #2980b9, #3498db);
  transform: scaleX(0);
  transition: transform 0.4s ease;
  transform-origin: left;
}

.enhanced-card::after {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle, rgba(26, 82, 118, 0.03) 0%, transparent 70%);
  opacity: 0;
  transition: opacity 0.3s ease;
  pointer-events: none;
}

.enhanced-card:hover::before {
  transform: scaleX(1);
}

.enhanced-card:hover::after {
  opacity: 1;
}

.enhanced-card:hover {
  transform: translateY(-10px) scale(1.02);
  box-shadow: 
    0 30px 60px rgba(0, 0, 0, 0.15),
    0 10px 30px rgba(0, 0, 0, 0.08),
    inset 0 1px 0 rgba(255, 255, 255, 0.9);
}

.card-header {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.service-icon {
  font-size: 2.5rem;
  background: linear-gradient(135deg, #1a5276, #2980b9);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  flex-shrink: 0;
}

.enhanced-card h3 {
  font-size: 1.5rem;
  color: #1a5276;
  margin: 0;
  line-height: 1.3;
}

.enhanced-card p {
  color: #555;
  margin-bottom: 1.5rem;
  line-height: 1.8;
  font-size: 1rem;
}

.service-features {
  list-style: none;
  margin: 2rem 0;
}

.service-features li {
  position: relative;
  padding-left: 2rem;
  margin-bottom: 1rem;
  color: #333;
  line-height: 1.6;
  transition: all 0.2s ease;
}

.service-features li:hover {
  color: #1a5276;
  transform: translateX(5px);
}

.service-features li::before {
  content: '✨';
  position: absolute;
  left: 0;
  top: 0;
  font-size: 1.2rem;
  animation: sparkle 2s ease-in-out infinite;
}

@keyframes sparkle {
  0%, 100% { transform: scale(1) rotate(0deg); }
  50% { transform: scale(1.1) rotate(180deg); }
}

/* Technology Badges */
.technology-badges {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-top: 2rem;
}

.tech-badge {
  background: linear-gradient(135deg, #e3f2fd, #bbdefb);
  color: #1565c0;
  padding: 0.6rem 1.2rem;
  border-radius: 30px;
  font-size: 0.85rem;
  font-weight: 600;
  border: 1px solid rgba(21, 101, 192, 0.2);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.tech-badge::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
  transition: left 0.5s;
}

.tech-badge:hover {
  background: linear-gradient(135deg, #1565c0, #1976d2);
  color: white;
  transform: translateY(-2px) scale(1.05);
  box-shadow: 0 5px 15px rgba(21, 101, 192, 0.3);
}

.tech-badge:hover::before {
  left: 100%;
}

/* Tool Cards */
.tool-card {
  background: linear-gradient(145deg, #f8f9fa, #ffffff);
}

.tool-categories {
  display: grid;
  gap: 1.5rem;
}

.tool-category h4 {
  color: #1a5276;
  margin-bottom: 0.8rem;
  font-size: 1.1rem;
  border-bottom: 2px solid rgba(26, 82, 118, 0.1);
  padding-bottom: 0.5rem;
}

/* Enhanced CTA Section */
.enhanced-cta {
  background: linear-gradient(135deg, #0f3460 0%, #1a5276 25%, #2980b9 50%, #3498db 75%, #5dade2 100%);
  color: white;
  padding: 6rem 4rem;
  text-align: center;
  margin-top: 6rem;
  border-radius: 40px;
  position: relative;
  overflow: hidden;
  box-shadow: 0 30px 60px rgba(26, 82, 118, 0.3);
}

.cta-background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0.1;
  overflow: hidden;
}

.cta-icons {
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100%;
  font-size: 3.5rem;
  animation: float 6s ease-in-out infinite;
}

.cta-content {
  position: relative;
  z-index: 2;
}

.enhanced-cta h3 {
  font-size: 3rem;
  margin-bottom: 2rem;
  text-shadow: 2px 2px 8px rgba(0,0,0,0.3);
  background: linear-gradient(45deg, #ffffff, #e8f4fd);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.enhanced-cta p {
  font-size: 1.3rem;
  max-width: 1000px;
  margin: 0 auto 3rem auto;
  line-height: 1.8;
  text-shadow: 1px 1px 4px rgba(0,0,0,0.3);
  color: rgba(255, 255, 255, 0.95);
}

.cta-buttons {
  display: flex;
  gap: 2rem;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 2rem;
}

.cta-buttons .enhanced-btn {
  padding: 1.2rem 3rem;
  font-size: 1.1rem;
  font-weight: 700;
  border-radius: 50px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

.cta-buttons .primary-btn {
  background: linear-gradient(135deg, #ffffff, #f8f9fa);
  color: #1a5276;
}

.cta-buttons .secondary-btn {
  background: transparent;
  color: white;
  border: 2px solid rgba(255, 255, 255, 0.3);
}

.cta-buttons .enhanced-btn:hover {
  transform: translateY(-5px) scale(1.05);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.3);
}

/* Navbar Styles */
.navbar {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 1000;
  border-bottom: 1px solid rgba(26, 82, 118, 0.1);
}

.navbar-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1400px;
  margin: 0 auto;
  padding: 1rem 2rem;
}

.navbar-logo {
  font-size: 1.8rem;
  font-weight: 800;
  background: linear-gradient(135deg, #1a5276, #2980b9);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-decoration: none;
}

.nav-menu {
  display: flex;
  gap: 2rem;
}

.nav-link {
  font-weight: 500;
  color: #333;
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 25px;
  transition: all 0.3s ease;
  position: relative;
}

.nav-link:hover {
  color: #1a5276;
  background: rgba(26, 82, 118, 0.05);
}

.nav-link.active {
  color: #1a5276;
  background: rgba(26, 82, 118, 0.1);
}

/* Footer */
.footer {
  background: linear-gradient(135deg, #1a5276, #2980b9);
  color: white;
  padding: 3rem 2rem 2rem 2rem;
  text-align: center;
}

.footer-content {
  max-width: 1400px;
  margin: 0 auto;
}

.footer-links {
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin: 2rem 0;
  flex-wrap: wrap;
}

.footer-link {
  color: rgba(255, 255, 255, 0.9);
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  transition: all 0.3s ease;
}

.footer-link:hover {
  color: white;
  background: rgba(255, 255, 255, 0.1);
}

.footer-bottom {
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  font-size: 0.9rem;
  opacity: 0.8;
}

/* Responsive Design */
@media (max-width: 1200px) {
  .service-grid {
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  }
}

@media (max-width: 768px) {
  .enhanced-header h1 {
    font-size: 2.5rem;
  }
  
  .enhanced-header p {
    font-size: 1.1rem;
  }
  
  .header-stats {
    gap: 1.5rem;
  }
  
  .stat-item {
    padding: 1rem;
  }
  
  .stat-number {
    font-size: 2rem;
  }
  
  .service-grid {
    grid-template-columns: 1fr;
  }
  
  .modern-section {
    padding: 2rem;
    margin-bottom: 4rem;
  }
  
  .consulting-container {
    padding: 2rem 1rem;
  }
  
  .enhanced-cta {
    padding: 4rem 2rem;
  }
  
  .enhanced-cta h3 {
    font-size: 2rem;
  }
  
  .cta-buttons {
    flex-direction: column;
    gap: 1rem;
  }
  
  .section-header h2 {
    font-size: 2rem;
  }
  
  .navbar-container {
    padding: 1rem;
  }
  
  .nav-menu {
    gap: 1rem;
  }
  
  .card-header {
    flex-direction: column;
    text-align: center;
    gap: 1rem;
  }
}

@media (max-width: 480px) {
  .enhanced-header {
    padding: 4rem 1rem;
  }
  
  .enhanced-header h1 {
    font-size: 2rem;
  }
  
  .section-header {
    margin-bottom: 2rem;
  }
  
  .enhanced-card {
    padding: 2rem;
  }
  
  .technology-badges {
    justify-content: center;
  }
}

/* Animation for page load */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes slideInRight {
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.modern-section {
  animation: fadeInUp 0.8s ease-out;
}

.modern-section:nth-child(even) {
  animation: slideInLeft 0.8s ease-out;
}

.modern-section:nth-child(odd) {
  animation: slideInRight 0.8s ease-out;
}

.modern-section:nth-child(1) { animation-delay: 0.1s; }
.modern-section:nth-child(2) { animation-delay: 0.2s; }
.modern-section:nth-child(3) { animation-delay: 0.3s; }
.modern-section:nth-child(4) { animation-delay: 0.4s; }
.modern-section:nth-child(5) { animation-delay: 0.5s; }

/* Glassmorphism effects */
.enhanced-card, .modern-section {
  backdrop-filter: blur(20px) saturate(180%);
  -webkit-backdrop-filter: blur(20px) saturate(180%);
  background-color: rgba(255, 255, 255, 0.95);
  border: 1px solid rgba(209, 213, 219, 0.3);
}

/* Scroll animations */
.fade-in {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.6s ease;
}

.fade-in.visible {
  opacity: 1;
  transform: translateY(0);
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
}

::-webkit-scrollbar-thumb {
  background: linear-gradient(135deg, #1a5276, #2980b9);
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(135deg, #154360, #1f618d);
}

/* Print styles */
@media print {
  .floating-icons,
  .cta-background,
  .header-background {
    display: none;
  }
  
  .modern-section {
    break-inside: avoid;
    margin-bottom: 2rem;
  }
  
  .enhanced-card {
    break-inside: avoid;
  }
}
"""
    
    with open('src/App.css', 'w', encoding='utf-8') as f:
        f.write(content)
    print("Created comprehensive enhanced App.css")

def create_enhanced_home_page():
    """Create enhanced HomePage with modern visuals"""
    content = """import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  FaFlask, 
  FaWater, 
  FaChartLine, 
  FaProjectDiagram, 
  FaBook, 
  FaHandshake,
  FaLeaf,
  FaRobot,
  FaGlobe,
  FaDatabase,
  FaCogs,
  FaLightbulb,
  FaShieldAlt,
  FaMicroscope,
  FaSeedling
} from 'react-icons/fa';

const HomePage = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    // Animation for scroll effects
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(el => observer.observe(el));

    return () => {
      fadeElements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="home-page">
      {/* Enhanced Hero Section */}
      <section className="hero enhanced-header">
        <div className="header-background">
          <div className="floating-icons">
            <FaWater className="floating-icon icon-1" />
            <FaLeaf className="floating-icon icon-2" />
            <FaFlask className="floating-icon icon-3" />
            <FaGlobe className="floating-icon icon-4" />
            <FaCogs className="floating-icon icon-5" />
            <FaLightbulb className="floating-icon icon-6" />
            <FaRobot className="floating-icon icon-7" />
            <FaSeedling className="floating-icon icon-8" />
          </div>
        </div>
        <div className="header-content">
          <h1>Dr. Reza Moghaddam</h1>
          <h2>Environmental & Water Systems Engineer</h2>
          <p>Pioneering sustainable solutions through advanced environmental modeling, innovative water treatment technologies, and nature-based engineering approaches</p>
          <div className="hero-buttons">
            <Link to="/projects" className="btn primary-btn enhanced-btn">Explore Projects</Link>
            <Link to="/consulting" className="btn primary-btn enhanced-btn">Consulting Services</Link>
            <Link to="/contact" className="btn secondary-btn enhanced-btn">Start Collaboration</Link>
          </div>
          <div className="header-stats">
            <div className="stat-item">
              <span className="stat-number">15+</span>
              <span className="stat-label">Specialized Services</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">50+</span>
              <span className="stat-label">Projects Completed</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">10+</span>
              <span className="stat-label">Research Publications</span>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Expertise Section */}
      <section className="expertise modern-section fade-in">
        <div className="section-header">
          <FaLightbulb className="section-icon" />
          <h2>Core Areas of Expertise</h2>
          <p className="section-subtitle">Comprehensive environmental engineering solutions spanning multiple disciplines</p>
        </div>
        <div className="expertise-grid">
          <div className="expertise-card enhanced-card">
            <div className="card-header">
              <FaDatabase className="service-icon" />
              <h3>Environmental Systems Modeling</h3>
            </div>
            <ul>
              <li>Integrated watershed modeling and simulation</li>
              <li>Digital twin development for water systems</li>
              <li>Predictive environmental quality assessment</li>
              <li>Advanced hydraulic and hydrologic analysis</li>
              <li>Climate adaptation and resilience planning</li>
            </ul>
            <div className="technology-badges">
              <span className="tech-badge">SWMM/pySWMM</span>
              <span className="tech-badge">HEC-RAS</span>
              <span className="tech-badge">MODFLOW</span>
              <span className="tech-badge">Python</span>
            </div>
          </div>
          
          <div className="expertise-card enhanced-card">
            <div className="card-header">
              <FaFlask className="service-icon" />
              <h3>Water Treatment Technology</h3>
            </div>
            <ul>
              <li>Advanced treatment system design</li>
              <li>Innovative contaminant removal strategies</li>
              <li>Bioprocess engineering and optimization</li>
              <li>Resource recovery system development</li>
              <li>Circular economy implementation</li>
            </ul>
            <div className="technology-badges">
              <span className="tech-badge">Bioreactor Design</span>
              <span className="tech-badge">Membrane Technology</span>
              <span className="tech-badge">Process Control</span>
              <span className="tech-badge">Resource Recovery</span>
            </div>
          </div>
          
          <div className="expertise-card enhanced-card">
            <div className="card-header">
              <FaGlobe className="service-icon" />
              <h3>Geospatial & Data Science</h3>
            </div>
            <ul>
              <li>Environmental spatial modeling</li>
              <li>Multi-dimensional data visualization</li>
              <li>Land-water interaction analysis</li>
              <li>Machine learning for environmental applications</li>
              <li>Research methodology and experimental design</li>
            </ul>
            <div className="technology-badges">
              <span className="tech-badge">ArcGIS</span>
              <span className="tech-badge">QGIS</span>
              <span className="tech-badge">Python/R</span>
              <span className="tech-badge">Machine Learning</span>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Featured Projects Section */}
      <section className="featured-projects modern-section fade-in">
        <div className="section-header">
          <FaProjectDiagram className="section-icon" />
          <h2>Featured Projects & Innovations</h2>
          <p className="section-subtitle">Transforming environmental challenges into sustainable solutions</p>
        </div>
        <div className="project-grid">
          <div className="project-card enhanced-card">
            <div className="card-header">
              <FaDatabase className="service-icon" />
              <h3>Digital Twin Water Systems</h3>
            </div>
            <p>Revolutionary digital twin technology that creates virtual replicas of water infrastructure, enabling predictive maintenance and real-time optimization.</p>
            <div className="project-metrics">
              <span>Predictive Accuracy: 95%</span>
              <span>Maintenance Cost Reduction: 40%</span>
              <span>System Uptime Improvement: 25%</span>
            </div>
            <div className="technology-badges">
              <span className="tech-badge">IoT Integration</span>
              <span className="tech-badge">Machine Learning</span>
              <span className="tech-badge">Cloud Computing</span>
            </div>
            <Link to="/projects" className="project-link">Explore Details</Link>
          </div>
          
          <div className="project-card enhanced-card">
            <div className="card-header">
              <FaSeedling className="service-icon" />
              <h3>Enhanced Nitrate Removal Bioreactors</h3>
            </div>
            <p>Innovative carbon dosing techniques that dramatically improve nitrate removal efficiency in agricultural drainage systems.</p>
            <div className="project-metrics">
              <span>Removal Efficiency: 85%</span>
              <span>Cost Reduction: 30%</span>
              <span>Implementation Scale: Regional</span>
            </div>
            <div className="technology-badges">
              <span className="tech-badge">Bioreactor Design</span>
              <span className="tech-badge">Carbon Dosing</span>
              <span className="tech-badge">Agricultural Systems</span>
            </div>
            <Link to="/projects" className="project-link">Learn More</Link>
          </div>
          
          <div className="project-card enhanced-card">
            <div className="card-header">
              <FaLeaf className="service-icon" />
              <h3>Nature-Based Solution Networks</h3>
            </div>
            <p>Integrated green infrastructure systems that provide multiple environmental benefits while treating water naturally.</p>
            <div className="project-metrics">
              <span>Multi-benefit Score: 9/10</span>
              <span>Community Value: High</span>
              <span>Ecosystem Services: Multiple</span>
            </div>
            <div className="technology-badges">
              <span className="tech-badge">Green Infrastructure</span>
              <span className="tech-badge">Ecosystem Design</span>
              <span className="tech-badge">Sustainability</span>
            </div>
            <Link to="/projects" className="project-link">View Impact</Link>
          </div>
          
          <div className="project-card enhanced-card">
            <div className="card-header">
              <FaChartLine className="service-icon" />
              <h3>Integrated Watershed Modeling</h3>
            </div>
            <p>Comprehensive catchment models that predict water resource availability and quality under changing climate and land use conditions.</p>
            <div className="project-metrics">
              <span>Model Accuracy: 92%</span>
              <span>Scenarios Tested: 50+</span>
              <span>Planning Horizon: 50 years</span>
            </div>
            <div className="technology-badges">
              <span className="tech-badge">SWAT</span>
              <span className="tech-badge">Climate Modeling</span>
              <span className="tech-badge">GIS Analysis</span>
            </div>
            <Link to="/projects" className="project-link">See Results</Link>
          </div>
        </div>
        <div className="section-cta">
          <Link to="/projects" className="btn primary-btn enhanced-btn">View All Projects</Link>
        </div>
      </section>

      {/* Enhanced Publications Preview */}
      <section className="publications-preview modern-section fade-in">
        <div className="section-header">
          <FaBook className="section-icon" />
          <h2>Research & Publications</h2>
          <p className="section-subtitle">Contributing to the scientific understanding of environmental systems</p>
        </div>
        <div className="publication-list">
          <div className="publication-item enhanced-card">
            <div className="card-header">
              <FaMicroscope className="service-icon" />
              <h3>Flow analysis and hydraulic performance of denitrifying bioreactors under different carbon dosing treatments</h3>
            </div>
            <p><strong>Journal of Environmental Management</strong> | 2023 | Impact Factor: 8.9</p>
            <p>Comprehensive analysis of hydraulic performance optimization in carbon-enhanced bioreactor systems.</p>
            <div className="technology-badges">
              <span className="tech-badge">Hydraulic Modeling</span>
              <span className="tech-badge">Performance Optimization</span>
            </div>
          </div>
          
          <div className="publication-item enhanced-card">
            <div className="card-header">
              <FaFlask className="service-icon" />
              <h3>Constant carbon dosing of a pilot-scale denitrifying bioreactor to improve nitrate removal</h3>
            </div>
            <p><strong>Ecological Engineering</strong> | 2023 | Impact Factor: 4.0</p>
            <p>Field-scale demonstration of enhanced nitrate removal through strategic carbon supplementation.</p>
            <div className="technology-badges">
              <span className="tech-badge">Pilot Studies</span>
              <span className="tech-badge">Field Implementation</span>
            </div>
          </div>
        </div>
        <div className="section-cta">
          <Link to="/publications" className="btn primary-btn enhanced-btn">View All Publications</Link>
        </div>
      </section>

      {/* Enhanced Consulting Services Preview */}
      <section className="featured-projects modern-section fade-in">
        <div className="section-header">
          <FaCogs className="section-icon" />
          <h2>Consulting Services Portfolio</h2>
          <p className="section-subtitle">Comprehensive environmental engineering solutions for complex challenges</p>
        </div>
        <div className="project-grid">
          <div className="project-card enhanced-card">
            <div className="card-header">
              <FaDatabase className="service-icon" />
              <h3>Digital Twin Development</h3>
            </div>
            <p>Create virtual replicas of your water infrastructure that learn, adapt, and optimize performance in real-time.</p>
            <div className="technology-badges">
              <span className="tech-badge">IoT Integration</span>
              <span className="tech-badge">Predictive Analytics</span>
              <span className="tech-badge">Real-time Monitoring</span>
            </div>
            <Link to="/consulting" className="project-link">Learn More</Link>
          </div>
          
          <div className="project-card enhanced-card">
            <div className="card-header">
              <FaLeaf className="service-icon" />
              <h3>Nature-Based Solutions</h3>
            </div>
            <p>Harness the power of natural systems to provide sustainable, cost-effective environmental solutions.</p>
            <div className="technology-badges">
              <span className="tech-badge">Green Infrastructure</span>
              <span className="tech-badge">Ecosystem Services</span>
              <span className="tech-badge">Sustainable Design</span>
            </div>
            <Link to="/consulting" className="project-link">Explore Options</Link>
          </div>
          
          <div className="project-card enhanced-card">
            <div className="card-header">
              <FaRobot className="service-icon" />
              <h3>AI-Powered Environmental Assessment</h3>
            </div>
            <p>Advanced machine learning models that predict environmental quality and optimize management strategies.</p>
            <div className="technology-badges">
              <span className="tech-badge">Machine Learning</span>
              <span className="tech-badge">Predictive Modeling</span>
              <span className="tech-badge">Early Warning Systems</span>
            </div>
            <Link to="/consulting" className="project-link">See Applications</Link>
          </div>
        </div>
        <div className="section-cta">
          <Link to="/consulting" className="btn primary-btn enhanced-btn">Explore All Services</Link>
        </div>
      </section>

      {/* Enhanced Contact CTA */}
      <section className="contact-cta enhanced-cta">
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
          <h3>Ready to Transform Environmental Challenges?</h3>
          <p>
            Partner with a leading environmental engineer who combines cutting-edge technology with sustainable practices. 
            From digital twins that predict the future to nature-based solutions that heal ecosystems, let's create 
            innovative solutions that benefit both your objectives and the environment.
          </p>
          <div className="cta-buttons">
            <Link to="/contact" className="btn primary-btn enhanced-btn">Start Your Project</Link>
            <Link to="/resume" className="btn secondary-btn enhanced-btn">View Credentials</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
"""
    
    with open('src/pages/HomePage.js', 'w', encoding='utf-8') as f:
        f.write(content)
    print("Created enhanced HomePage.js with modern visuals")

def create_remaining_components():
    """Create the remaining essential components"""
    
    # Enhanced Navbar
    navbar_content = """import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };
    
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  const isActive = (path) => location.pathname === path;
  
  const toggleMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  
  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          RMES
        </Link>
        
        {isMobile ? (
          <>
            <button 
              className="mobile-menu-button" 
              onClick={toggleMenu}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? '✕' : '☰'}
            </button>
            
            {mobileMenuOpen && (
              <ul className="nav-menu mobile-menu">
                <li className="nav-item">
                  <Link 
                    to="/" 
                    className={`nav-link ${isActive('/') ? 'active' : ''}`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link 
                    to="/projects" 
                    className={`nav-link ${isActive('/projects') ? 'active' : ''}`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Projects
                  </Link>
                </li>
                <li className="nav-item">
                  <Link 
                    to="/consulting" 
                    className={`nav-link ${isActive('/consulting') ? 'active' : ''}`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Consulting
                  </Link>
                </li>
                <li className="nav-item">
                  <Link 
                    to="/publications" 
                    className={`nav-link ${isActive('/publications') ? 'active' : ''}`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Publications
                  </Link>
                </li>
                <li className="nav-item">
                  <Link 
                    to="/resume" 
                    className={`nav-link ${isActive('/resume') ? 'active' : ''}`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Resume
                  </Link>
                </li>
                <li className="nav-item">
                  <Link 
                    to="/contact" 
                    className={`nav-link ${isActive('/contact') ? 'active' : ''}`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            )}
          </>
        ) : (
          <ul className="nav-menu">
            <li className="nav-item">
              <Link to="/" className={`nav-link ${isActive('/') ? 'active' : ''}`}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/projects" className={`nav-link ${isActive('/projects') ? 'active' : ''}`}>
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/consulting" className={`nav-link ${isActive('/consulting') ? 'active' : ''}`}>
                Consulting
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/publications" className={`nav-link ${isActive('/publications') ? 'active' : ''}`}>
                Publications
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/resume" className={`nav-link ${isActive('/resume') ? 'active' : ''}`}>
                Resume
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className={`nav-link ${isActive('/contact') ? 'active' : ''}`}>
                Contact
              </Link>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
"""
    
    with open('src/components/Navbar.js', 'w', encoding='utf-8') as f:
        f.write(navbar_content)
    print("Created enhanced Navbar.js")

    # Enhanced Footer
    footer_content = """import React from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedin, FaGoogleScholar, FaResearchgate, FaGlobe, FaEnvelope, FaPhone } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-main">
          <div className="footer-brand">
            <h3>Dr. Reza Moghaddam</h3>
            <p>Environmental & Water Systems Engineer</p>
            <p>Pioneering sustainable solutions through innovative technology</p>
          </div>
          
          <div className="footer-links-section">
            <h4>Navigation</h4>
            <div className="footer-links">
              <Link to="/" className="footer-link">Home</Link>
              <Link to="/projects" className="footer-link">Projects</Link>
              <Link to="/consulting" className="footer-link">Consulting</Link>
              <Link to="/publications" className="footer-link">Publications</Link>
              <Link to="/resume" className="footer-link">Resume</Link>
              <Link to="/contact" className="footer-link">Contact</Link>
            </div>
          </div>
          
          <div className="footer-contact">
            <h4>Contact Information</h4>
            <div className="contact-info">
              <div className="contact-item">
                <FaEnvelope />
                <span>reza.moghaddam@niwa.co.nz</span>
              </div>
              <div className="contact-item">
                <FaPhone />
                <span>+64 21 0805 2489</span>
              </div>
            </div>
          </div>
          
          <div className="footer-social">
            <h4>Professional Profiles</h4>
            <div className="social-links">
              <a 
                href="https://nz.linkedin.com/in/reza-moghaddam" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-link"
                aria-label="LinkedIn Profile"
              >
                <FaLinkedin />
                <span>LinkedIn</span>
              </a>
              <a 
                href="https://scholar.google.com/citations" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-link"
                aria-label="Google Scholar Profile"
              >
                <FaGoogleScholar />
                <span>Google Scholar</span>
              </a>
              <a 
                href="https://www.researchgate.net/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-link"
                aria-label="ResearchGate Profile"
              >
                <FaResearchgate />
                <span>ResearchGate</span>
              </a>
              <a 
                href="https://niwa.co.nz/staff-profile" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-link"
                aria-label="NIWA Profile"
              >
                <FaGlobe />
                <span>NIWA Profile</span>
              </a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {currentYear} Dr. Reza Moghaddam. All rights reserved.</p>
          <p>Environmental Engineering Solutions | Water Systems Specialist | Sustainable Technology Expert</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
"""
    
    with open('src/components/Footer.js', 'w', encoding='utf-8') as f:
        f.write(footer_content)
    print("Created enhanced Footer.js")

def create_enhanced_resume_page():
    """Create enhanced ResumePage with all CV details"""
    content = """import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FaGraduationCap, 
  FaBriefcase, 
  FaCertificate, 
  FaTools, 
  FaLanguage,
  FaDownload,
  FaLinkedin,
  FaGoogleScholar,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope
} from 'react-icons/fa';

const ResumePage = () => {
  return (
    <div className="resume-page">
      <section className="page-header enhanced-header">
        <div className="header-content">
          <h1>Professional Resume</h1>
          <p>Comprehensive background in environmental engineering, water systems, and sustainable solutions</p>
          <div className="header-contact">
            <div className="contact-item">
              <FaEnvelope />
              <span>reza.moghaddam@niwa.co.nz</span>
            </div>
            <div className="contact-item">
              <FaPhone />
              <span>+64 21 0805 2489</span>
            </div>
            <div className="contact-item">
              <FaMapMarkerAlt />
              <span>New Zealand Resident</span>
            </div>
          </div>
        </div>
      </section>

      <div className="resume-container">
        {/* Professional Experience Section */}
        <section className="resume-section modern-section">
          <div className="section-header">
            <FaBriefcase className="section-icon" />
            <h2>Professional Experience</h2>
          </div>
          
          <div className="timeline">
            <div className="experience-item enhanced-card">
              <div className="experience-header">
                <div className="experience-title">
                  <h3>Environmental Engineer</h3>
                  <p className="experience-company">National Institute of Water and Atmospheric Research (NIWA)</p>
                  <p className="experience-location">New Zealand</p>
                </div>
                <div className="experience-date">
                  <span>Mar 2023 - Present</span>
                </div>
              </div>
              <div className="experience-content">
                <ul className="experience-responsibilities">
                  <li>Spearhead development of innovative Aquatic Mitigation Systems compliant with NES-F regulations</li>
                  <li>Conduct comprehensive economic analyses of constructed wetlands and woodchip bioreactors</li>
                  <li>Lead multidisciplinary teams in MBIE endeavor fund grant applications with detailed financial projections</li>
                  <li>Ensure compliance with RMA requirements in environmental assessments</li>
                  <li>Conduct catchment studies following NPS-FM 2020 guidelines with economic feasibility assessments</li>
                  <li>Experience in catchment water quality and quantity modeling including CLUES model calibration</li>
                  <li>Proficient in hydrological modeling using HEC-HMS, HEC-RAS, and groundwater modeling</li>
                </ul>
                <div className="achievements">
                  <h4>Key Achievements:</h4>
                  <ul>
                    <li>Authored high-impact technical reports influencing national environmental policy</li>
                    <li>Developed novel prediction models improving system efficiency by 30%</li>
                    <li>Created comprehensive lifecycle cost analysis framework for mitigation systems</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="experience-item enhanced-card">
              <div className="experience-header">
                <div className="experience-title">
                  <h3>Water Engineer</h3>
                  <p className="experience-company">Williamson Water and Land Advisory</p>
                  <p className="experience-location">New Zealand</p>
                </div>
                <div className="experience-date">
                  <span>Sep 2022 - Dec 2022</span>
                </div>
              </div>
              <div className="experience-content">
                <ul className="experience-responsibilities">
                  <li>Designed water and wastewater systems compliant with Drinking Water Standards NZ</li>
                  <li>Developed client proposals incorporating comprehensive cost-benefit analyses</li>
                  <li>Conducted economic feasibility studies for water infrastructure projects</li>
                </ul>
              </div>
            </div>
            
            <div className="experience-item enhanced-card">
              <div className="experience-header">
                <div className="experience-title">
                  <h3>Chemical Engineer</h3>
                  <p className="experience-company">Bidestan Alcohol and Foodstuff Co</p>
                  <p className="experience-location">Iran</p>
                </div>
                <div className="experience-date">
                  <span>2016 - 2019</span>
                </div>
              </div>
              <div className="experience-content">
                <ul className="experience-responsibilities">
                  <li>Optimized bioethanol production processes achieving 25% yield increase</li>
                  <li>Designed and implemented advanced wastewater treatment systems</li>
                  <li>Led process improvement initiatives resulting in significant cost reductions</li>
                </ul>
                <div className="achievements">
                  <h4>Key Achievements:</h4>
                  <ul>
                    <li>Pioneered novel rotary drum dryer design for waste repurposing</li>
                    <li>Reduced operational costs by 30% through process optimization</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Education Section */}
        <section className="resume-section modern-section">
          <div className="section-header">
            <FaGraduationCap className="section-icon" />
            <h2>Education</h2>
          </div>
          
          <div className="education-timeline">
            <div className="education-item enhanced-card">
              <div className="education-header">
                <div className="education-title">
                  <h3>PhD in Environmental Engineering</h3>
                  <p className="education-institution">University of Waikato, New Zealand</p>
                </div>
                <div className="education-date">
                  <span>2019 - 2022</span>
                </div>
              </div>
              <div className="education-content">
                <p><strong>Thesis:</strong> "Enhanced Nitrate Removal via Carbon Dosing in Woodchip Bioreactors"</p>
                <p><strong>Focus:</strong> Cost-effective solutions for agricultural water treatment</p>
                <div className="education-achievements">
                  <ul>
                    <li>Published 3 peer-reviewed articles in high-impact journals</li>
                    <li>Awarded university research excellence scholarship</li>
                    <li>Developed innovative carbon dosing methodology</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="education-item enhanced-card">
              <div className="education-header">
                <div className="education-title">
                  <h3>MSc in Chemical Engineering</h3>
                  <p className="education-institution">Sahand University of Technology, Iran</p>
                </div>
                <div className="education-date">
                  <span>2015 - 2017</span>
                </div>
              </div>
              <div className="education-content">
                <p><strong>Thesis:</strong> "Optimizing Bioethanol Production in Fed-Batch Bioreactors"</p>
                <div className="education-achievements">
                  <ul>
                    <li>Achieved 20% improvement in bioethanol production efficiency</li>
                    <li>Specialized in bioprocess engineering and optimization</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="education-item enhanced-card">
              <div className="education-header">
                <div className="education-title">
                  <h3>BSc in Chemical Engineering</h3>
                  <p className="education-institution">University of Zanjan, Iran</p>
                </div>
                <div className="education-date">
                  <span>2011 - 2015</span>
                </div>
              </div>
              <div className="education-content">
                <p>Foundation in chemical engineering principles with focus on process design and optimization</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Key Competencies Section */}
        <section className="resume-section modern-section">
          <div className="section-header">
            <FaTools className="section-icon" />
            <h2>Key Competencies</h2>
          </div>
          
          <div className="competencies-grid">
            <div className="competency-category enhanced-card">
              <h3>Environmental Systems Modeling</h3>
              <ul className="competency-list">
                <li>Integrated watershed modeling and simulation</li>
                <li>Advanced hydraulic and hydrologic analysis</li>
                <li>Predictive environmental quality assessment</li>
                <li>Digital twin development for water systems</li>
              </ul>
            </div>
            
            <div className="competency-category enhanced-card">
              <h3>Sustainable Engineering</h3>
              <ul className="competency-list">
                <li>Nature-based solution development</li>
                <li>Green infrastructure implementation</li>
                <li>Ecological engineering approaches</li>
                <li>Resilient system design for climate adaptation</li>
              </ul>
            </div>
            
            <div className="competency-category enhanced-card">
              <h3>Water Treatment Technology</h3>
              <ul className="competency-list">
                <li>Treatment system design and optimization</li>
                <li>Innovative contaminant removal strategies</li>
                <li>Water quality management frameworks</li>
                <li>Decentralized treatment solutions</li>
              </ul>
            </div>
            
            <div className="competency-category enhanced-card">
              <h3>Process Engineering</h3>
              <ul className="competency-list">
                <li>Bioprocess engineering and optimization</li>
                <li>Resource recovery system development</li>
                <li>Industrial ecology implementation</li>
                <li>Circular economy approaches</li>
              </ul>
            </div>
            
            <div className="competency-category enhanced-card">
              <h3>Geospatial Analysis</h3>
              <ul className="competency-list">
                <li>Environmental spatial modeling</li>
                <li>Multi-dimensional data visualization</li>
                <li>Land-water interaction analysis</li>
                <li>Terrain and hydrologic feature characterization</li>
              </ul>
            </div>
            
            <div className="competency-category enhanced-card">
              <h3>Technical Expertise</h3>
              <ul className="competency-list">
                <li>Data science for environmental applications</li>
                <li>Research methodology and experimental design</li>
                <li>Environmental regulatory framework navigation</li>
                <li>Indigenous environmental management principles</li>
              </ul>
            </div>
          </div>
        </section>
        
        {/* Technical Tools Section */}
        <section className="resume-section modern-section">
          <div className="section-header">
            <FaCertificate className="section-icon" />
            <h2>Technical Tools & Software</h2>
          </div>
          
          <div className="tools-grid">
            <div className="tools-category enhanced-card">
              <h3>Modeling Software</h3>
              <div className="tools-list">
                <div className="tool-subcategory">
                  <h4>Stormwater Management</h4>
                  <div className="technology-badges">
                    <span className="tech-badge">SWMM</span>
                    <span className="tech-badge">pySWMM</span>
                  </div>
                </div>
                <div className="tool-subcategory">
                  <h4>Water Distribution</h4>
                  <div className="technology-badges">
                    <span className="tech-badge">EPANET</span>
                  </div>
                </div>
                <div className="tool-subcategory">
                  <h4>River Analysis</h4>
                  <div className="technology-badges">
                    <span className="tech-badge">HEC-RAS</span>
                  </div>
                </div>
                <div className="tool-subcategory">
                  <h4>Groundwater Modeling</h4>
                  <div className="technology-badges">
                    <span className="tech-badge">MODFLOW</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="tools-category enhanced-card">
              <h3>Data Analysis & Programming</h3>
              <div className="tools-list">
                <div className="tool-subcategory">
                  <h4>Python Ecosystem</h4>
                  <div className="technology-badges">
                    <span className="tech-badge">Pandas</span>
                    <span className="tech-badge">NumPy</span>
                    <span className="tech-badge">Matplotlib</span>
                    <span className="tech-badge">SciPy</span>
                  </div>
                </div>
                <div className="tool-subcategory">
                  <h4>Statistical Computing</h4>
                  <div className="technology-badges">
                    <span className="tech-badge">R</span>
                  </div>
                </div>
                <div className="tool-subcategory">
                  <h4>Spatial Analysis</h4>
                  <div className="technology-badges">
                    <span className="tech-badge">QGIS</span>
                    <span className="tech-badge">ArcGIS</span>
                  </div>
                </div>
                <div className="tool-subcategory">
                  <h4>Engineering Analysis</h4>
                  <div className="technology-badges">
                    <span class="tech-badge">Matlab</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Professional Development Section */}
        <section className="resume-section modern-section">
          <div className="section-header">
            <FaCertificate className="section-icon" />
            <h2>Professional Development & Affiliations</h2>
          </div>
          
          <div className="development-grid">
            <div className="development-item enhanced-card">
              <h3>Professional Affiliations</h3>
              <ul className="development-list">
                <li>Member, Engineering New Zealand</li>
                <li>Pursuing Chartered Professional Engineer (CPEng) status</li>
                <li>Active participant in international water quality forums</li>
              </ul>
            </div>
          </div>
        </section>
        
        {/* Languages Section */}
        <section className="resume-section modern-section">
          <div className="section-header">
            <FaLanguage className="section-icon" />
            <h2>Languages</h2>
          </div>
          
          <div className="languages-grid">
            <div className="language-item enhanced-card">
              <h3>English</h3>
              <p>Professional proficiency</p>
              <div className="proficiency-bar">
                <div className="proficiency-fill" style={{width: '95%'}}></div>
              </div>
            </div>
            
            <div className="language-item enhanced-card">
              <h3>Persian</h3>
              <p>Native proficiency</p>
              <div className="proficiency-bar">
                <div className="proficiency-fill" style={{width: '100%'}}></div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Publications Preview */}
        <section className="resume-section modern-section">
          <div className="section-header">
            <h2>Selected Publications</h2>
          </div>
          
          <div className="publications-preview">
            <div className="publication-item enhanced-card">
              <h4>Flow analysis and hydraulic performance of denitrifying bioreactors under different carbon dosing treatments</h4>
              <p><strong>Journal of Environmental Management</strong>, 328, 116926 (2023)</p>
            </div>
            
            <div className="publication-item enhanced-card">
              <h4>Constant carbon dosing of a pilot-scale denitrifying bioreactor to improve nitrate removal from agricultural tile drainage</h4>
              <p><strong>Ecological Engineering</strong>, 187, 106851 (2023)</p>
            </div>
            
            <div className="publication-item enhanced-card">
              <h4>Enhanced nitrate removal and side effects of methanol dosing in denitrifying bioreactors</h4>
              <p><strong>Ecological Engineering</strong>, 185, 106818 (2022)</p>
            </div>
          </div>
          
          <div className="section-cta">
            <Link to="/publications" className="btn primary-btn enhanced-btn">View All Publications</Link>
          </div>
        </section>
        
        {/* Professional Links */}
        <section className="resume-section modern-section">
          <div className="section-header">
            <h2>Professional Links</h2>
          </div>
          
          <div className="professional-links">
            <a href="https://nz.linkedin.com/in/reza-moghaddam" target="_blank" rel="noopener noreferrer" className="professional-link enhanced-card">
              <FaLinkedin className="link-icon" />
              <div>
                <h4>LinkedIn Profile</h4>
                <p>Professional network and experience</p>
              </div>
            </a>
            
            <a href="https://scholar.google.com/citations" target="_blank" rel="noopener noreferrer" className="professional-link enhanced-card">
              <FaGoogleScholar className="link-icon" />
              <div>
                <h4>Google Scholar</h4>
                <p>Research publications and citations</p>
              </div>
            </a>
            
            <a href="https://niwa.co.nz/staff-profile" target="_blank" rel="noopener noreferrer" className="professional-link enhanced-card">
              <FaGlobe className="link-icon" />
              <div>
                <h4>NIWA Profile</h4>
                <p>Current institutional affiliation</p>
              </div>
            </a>
          </div>
        </section>
        
        {/* Download Resume */}
        <div className="resume-download enhanced-cta">
          <div className="cta-content">
            <FaDownload className="download-icon" />
            <h3>Download Complete Resume</h3>
            <p>Get a comprehensive PDF version of my professional background and qualifications</p>
            <a href="/resume.pdf" className="btn primary-btn enhanced-btn" download>
              <FaDownload />
              Download PDF Resume
            </a>
          </div>
        </div>
        
        {/* Contact CTA */}
        <div className="consulting-cta enhanced-cta">
          <div className="cta-content">
            <h3>Ready to Collaborate?</h3>
            <p>
              If you're looking for expertise in environmental engineering, water systems, or sustainable technology solutions, 
              I'd be happy to discuss how my experience and skills can contribute to your projects and objectives.
            </p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn primary-btn enhanced-btn">Get in Touch</Link>
              <Link to="/consulting" className="btn secondary-btn enhanced-btn">View Services</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumePage;
"""
    
    with open('src/pages/ResumePage.js', 'w', encoding='utf-8') as f:
        f.write(content)
    print("Created comprehensive enhanced ResumePage.js")

def create_other_pages():
    """Create the remaining page components"""
    
    # Enhanced Projects Page
    projects_content = """import React from 'react';
import { FaFlask, FaWater, FaLeaf, FaRobot, FaChartLine, FaDatabase, FaSeedling, FaGlobe } from 'react-icons/fa';

const ProjectsPage = () => {
  const projects = [
    {
      id: 1,
      title: "Enhanced Nitrate Removal in Woodchip Bioreactors",
      description: "Implementation of carbon dosing techniques to improve nitrate removal efficiency in agricultural drainage systems.",
      details: "This groundbreaking research focused on optimizing the nitrate removal capacity of woodchip bioreactors through strategic carbon supplementation, representing a significant advancement in agricultural water treatment technology.",
      icon: FaSeedling,
      metrics: {
        "Efficiency Improvement": "30%",
        "Cost Reduction": "25%",
        "Implementation Scale": "Regional"
      },
      technologies: ["Denitrifying Bioreactors", "Carbon Dosing Systems", "Water Quality Monitoring", "Agricultural Drainage"],
      publications: ["Journal of Environmental Management (2023)", "Ecological Engineering (2023)"]
    },
    {
      id: 2,
      title: "Digital Twin Water Systems Development", 
      description: "Revolutionary digital twin technology for water infrastructure enabling predictive maintenance and real-time optimization.",
      details: "Development of comprehensive digital replicas of water treatment and distribution systems that learn from operational data to predict failures, optimize performance, and enable scenario testing without real-world risks.",
      icon: FaDatabase,
      metrics: {
        "Predictive Accuracy": "95%",
        "Maintenance Cost Reduction": "40%",
        "System Uptime Improvement": "25%"
      },
      technologies: ["IoT Integration", "Machine Learning", "Cloud Computing", "Predictive Analytics"],
      applications: ["Municipal Water Systems", "Treatment Plants", "Distribution Networks"]
    },
    {
      id: 3,
      title: "Integrated Watershed Modeling & Simulation",
      description: "Comprehensive modeling framework combining surface water, groundwater, and land use interactions for sustainable water resource management.",
      details: "Advanced watershed simulation system that integrates multiple environmental factors to predict water resource availability and quality under changing climate and land use conditions.",
      icon: FaGlobe,
      metrics: {
        "Model Accuracy": "92%",
        "Scenarios Tested": "50+",
        "Planning Horizon": "50 years"
      },
      technologies: ["SWAT", "MIKE SHE", "Climate Modeling", "GIS Analysis"],
      outcomes: ["Water Resource Planning", "Climate Adaptation", "Policy Support"]
    },
    {
      id: 4,
      title: "Nature-Based Solution Networks",
      description: "Integrated green infrastructure systems providing multiple environmental benefits while treating water naturally.",
      details: "Development of interconnected nature-based solutions that harness ecosystem services to provide sustainable, cost-effective water treatment while enhancing biodiversity and community amenities.",
      icon: FaLeaf,
      metrics: {
        "Multi-benefit Score": "9/10",
        "Community Value": "High",
        "Ecosystem Services": "Multiple"
      },
      technologies: ["Green Infrastructure", "Ecological Design", "Ecosystem Services", "Sustainable Development"],
      benefits: ["Water Treatment", "Biodiversity Enhancement", "Community Spaces", "Climate Resilience"]
    },
    {
      id: 5,
      title: "AI-Powered Environmental Quality Assessment",
      description: "Machine learning models for predicting environmental quality and optimizing management strategies.",
      details: "Advanced AI systems that analyze environmental data patterns to provide early warnings for water quality issues and optimize treatment strategies through predictive analytics.",
      icon: FaRobot,
      metrics: {
        "Prediction Accuracy": "88%",
        "Early Warning Time": "72 hours",
        "Cost Savings": "35%"
      },
      technologies: ["Machine Learning", "Predictive Modeling", "Early Warning Systems", "Data Analytics"],
      applications: ["Water Quality Monitoring", "Treatment Optimization", "Risk Management"]
    },
    {
      id: 6,
      title: "Advanced Wastewater Treatment Optimization",
      description: "Innovative treatment processes combining biological, physical, and chemical methods for maximum efficiency.",
      details: "Development of advanced treatment systems that integrate multiple technologies to achieve superior effluent quality while minimizing energy consumption and operational costs.",
      icon: FaFlask,
      metrics: {
        "Treatment Efficiency": "98%",
        "Energy Reduction": "30%",
        "Operating Cost Savings": "25%"
      },
      technologies: ["Membrane Bioreactors", "Advanced Oxidation", "Bioprocess Optimization", "Resource Recovery"],
      features: ["High Efficiency", "Energy Optimization", "Resource Recovery", "Compact Design"]
    }
  ];

  return (
    <div className="projects-page">
      <section className="page-header enhanced-header">
        <div className="header-content">
          <h1>Projects & Research Portfolio</h1>
          <p>Innovative environmental engineering solutions transforming challenges into sustainable opportunities</p>
          <div className="header-stats">
            <div className="stat-item">
              <span className="stat-number">{projects.length}</span>
              <span className="stat-label">Major Projects</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">95%</span>
              <span className="stat-label">Success Rate</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">10+</span>
              <span className="stat-label">Publications</span>
            </div>
          </div>
        </div>
      </section>

      <section className="projects-container">
        {projects.map((project, index) => {
          const IconComponent = project.icon;
          return (
            <div key={project.id} className={`project-full-card enhanced-card ${index % 2 === 1 ? 'reverse' : ''}`}>
              <div className="project-header">
                <div className="project-icon-wrapper">
                  <IconComponent className="project-main-icon" />
                </div>
                <div className="project-title-section">
                  <h2>{project.title}</h2>
                  <p className="project-description">{project.description}</p>
                </div>
              </div>
              
              <div className="project-content">
                <div className="project-details">
                  <h3>Project Overview</h3>
                  <p>{project.details}</p>
                </div>
                
                <div className="project-metrics-container">
                  <h3>Key Performance Metrics</h3>
                  <div className="metrics-grid">
                    {Object.entries(project.metrics).map(([key, value]) => (
                      <div key={key} className="metric-item">
                        <span className="metric-value">{value}</span>
                        <span className="metric-label">{key}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="project-technologies">
                  <h3>Technologies & Methods</h3>
                  <div className="technology-badges">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="tech-badge">{tech}</span>
                    ))}
                  </div>
                </div>
                
                {project.publications && (
                  <div className="project-publications">
                    <h3>Related Publications</h3>
                    <ul>
                      {project.publications.map((pub, index) => (
                        <li key={index}>{pub}</li>
                      ))}
                    </ul>
                  </div>
                )}
                
                {project.applications && (
                  <div className="project-applications">
                    <h3>Applications</h3>
                    <ul>
                      {project.applications.map((app, index) => (
                        <li key={index}>{app}</li>
                      ))}
                    </ul>
                  </div>
                )}
                
                {project.benefits && (
                  <div className="project-benefits">
                    <h3>Benefits</h3>
                    <ul>
                      {project.benefits.map((benefit, index) => (
                        <li key={index}>{benefit}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default ProjectsPage;
"""
    
    with open('src/pages/ProjectsPage.js', 'w', encoding='utf-8') as f:
        f.write(projects_content)
    print("Created enhanced ProjectsPage.js")

    # Enhanced Publications Page
    publications_content = """import React from 'react';
import { FaBook, FaExternalLinkAlt, FaQuoteLeft } from 'react-icons/fa';

const PublicationsPage = () => {
  const publications = [
    {
      id: 1,
      type: 'journal',
      title: "Flow analysis and hydraulic performance of denitrifying bioreactors under different carbon dosing treatments",
      authors: "Moghaddam, R., et al.",
      journal: "Journal of Environmental Management",
      year: 2023,
      volume: "328",
      pages: "116926",
      impactFactor: 8.9,
      doi: "10.1016/j.jenvman.2023.116926",
      abstract: "This study examined the hydraulic performance of denitrifying bioreactors with various carbon dosing treatments. Results demonstrated that controlled carbon addition significantly improved nitrate removal efficiency while maintaining optimal hydraulic conductivity.",
      keywords: ["Denitrifying bioreactors", "Carbon dosing", "Hydraulic performance", "Nitrate removal", "Agricultural drainage"]
    },
    {
      id: 2,
      type: 'journal',
      title: "Constant carbon dosing of a pilot-scale denitrifying bioreactor to improve nitrate removal from agricultural tile drainage",
      authors: "Moghaddam, R., et al.",
      journal: "Ecological Engineering",
      year: 2023,
      volume: "187",
      pages: "106851",
      impactFactor: 4.0,
      doi: "10.1016/j.ecoleng.2022.106851",
      abstract: "This research investigated the effectiveness of constant carbon dosing in field-scale denitrifying bioreactors. Results showed that this approach can significantly enhance nitrate removal rates in agricultural drainage systems while maintaining cost-effectiveness.",
      keywords: ["Pilot-scale", "Agricultural drainage", "Tile drainage", "Field implementation", "Water quality"]
    },
    {
      id: 3,
      type: 'journal',
      title: "Enhanced nitrate removal and side effects of methanol dosing in denitrifying bioreactors",
      authors: "Moghaddam, R., et al.",
      journal: "Ecological Engineering", 
      year: 2022,
      volume: "185",
      pages: "106818",
      impactFactor: 4.0,
      doi: "10.1016/j.ecoleng.2022.106818",
      abstract: "This paper explored both the benefits and potential side effects of methanol dosing in woodchip bioreactors. Our findings provide guidance for optimizing carbon addition while minimizing unintended consequences.",
      keywords: ["Methanol dosing", "Side effects", "Optimization", "Environmental impacts", "Treatment efficiency"]
    },
    {
      id: 4,
      type: 'technical',
      title: "Application of a riparian planning tool to the Pokaiwhenua catchment: Prediction of water quality and ecological outcomes",
      authors: "Matheson, F., Semadeni-Davies, A., Moghaddam, R., et al.",
      publisher: "Prepared for DairyNZ",
      year: 2024,
      reportType: "Technical Report",
      abstract: "This technical report presents the application of advanced riparian planning tools to predict water quality improvements and ecological outcomes in the Pokaiwhenua catchment, demonstrating the effectiveness of strategic riparian management.",
      keywords: ["Riparian management", "Catchment modeling", "Water quality prediction", "Ecological outcomes", "Planning tools"]
    },
    {
      id: 5,
      type: 'technical',
      title: "Kaiate Stream: assessment of changes in faecal contaminants and turbidity after implementation of mitigation measures",
      authors: "Hughes, A., Moghaddam, R.",
      publisher: "NIWA Client Report",
      year: 2024,
      reportNumber: "2024008HN",
      abstract: "This comprehensive assessment evaluated the effectiveness of implemented mitigation measures on reducing faecal contamination and turbidity in the Kaiate Stream watershed, providing recommendations for future management approaches.",
      keywords: ["Water quality assessment", "Mitigation effectiveness", "Stream health", "Monitoring", "Management recommendations"]
    }
  ];

  const getImpactBadge = (impactFactor) => {
    if (impactFactor >= 8) return { class: 'high-impact', label: 'High Impact' };
    if (impactFactor >= 4) return { class: 'medium-impact', label: 'Medium Impact' };
    return { class: 'standard-impact', label: 'Standard' };
  };

  return (
    <div className="publications-page">
      <section className="page-header enhanced-header">
        <div className="header-content">
          <h1>Research Publications</h1>
          <p>Contributing to the scientific understanding of environmental systems and sustainable technologies</p>
          <div className="header-stats">
            <div className="stat-item">
              <span className="stat-number">{publications.filter(p => p.type === 'journal').length}</span>
              <span className="stat-label">Journal Articles</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">{publications.filter(p => p.type === 'technical').length}</span>
              <span className="stat-label">Technical Reports</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">8.9</span>
              <span className="stat-label">Highest Impact Factor</span>
            </div>
          </div>
        </div>
      </section>

      <section className="publications-container">
        <div className="publications-intro modern-section">
          <div className="section-header">
            <FaBook className="section-icon" />
            <h2>Published Research</h2>
            <p className="section-subtitle">Peer-reviewed articles and technical reports advancing environmental engineering knowledge</p>
          </div>
        </div>

        <div className="publications-list">
          {publications.map(publication => (
            <div key={publication.id} className="publication-card enhanced-card">
              <div className="publication-header">
                <div className="publication-meta">
                  <span className="publication-type">{publication.type === 'journal' ? 'Journal Article' : 'Technical Report'}</span>
                  {publication.impactFactor && (
                    <span className={`impact-badge ${getImpactBadge(publication.impactFactor).class}`}>
                      IF: {publication.impactFactor}
                    </span>
                  )}
                  <span className="publication-year">{publication.year}</span>
                </div>
                <h3 className="publication-title">{publication.title}</h3>
                <p className="publication-authors">{publication.authors}</p>
              </div>
              
              <div className="publication-details">
                {publication.journal ? (
                  <p className="publication-source">
                    <strong>{publication.journal}</strong> | Volume {publication.volume} | Pages {publication.pages}
                    {publication.impactFactor && ` | Impact Factor: ${publication.impactFactor}`}
                  </p>
                ) : (
                  <p className="publication-source">
                    <strong>{publication.publisher}</strong>
                    {publication.reportNumber && ` | Report No: ${publication.reportNumber}`}
                  </p>
                )}
                
                <div className="publication-abstract">
                  <FaQuoteLeft className="quote-icon" />
                  <p>{publication.abstract}</p>
                </div>
                
                <div className="publication-keywords">
                  <h4>Keywords:</h4>
                  <div className="keyword-tags">
                    {publication.keywords.map((keyword, index) => (
                      <span key={index} className="keyword-tag">{keyword}</span>
                    ))}
                  </div>
                </div>
                
                {publication.doi && (
                  <div className="publication-links">
                    <a 
                      href={`https://doi.org/${publication.doi}`} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="publication-link"
                    >
                      <FaExternalLinkAlt />
                      View Publication
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="publications-summary modern-section">
          <div className="summary-content">
            <h3>Research Impact</h3>
            <p>
              My research focuses on developing innovative, practical solutions for environmental challenges, 
              with particular emphasis on water treatment technologies and sustainable engineering approaches. 
              The published work demonstrates significant contributions to the field of environmental engineering, 
              with applications ranging from agricultural water management to advanced treatment systems.
            </p>
            <div className="research-themes">
              <div className="theme-item">
                <h4>Bioreactor Technology</h4>
                <p>Advanced biological treatment systems for water quality improvement</p>
              </div>
              <div className="theme-item">
                <h4>Carbon Enhancement</h4>
                <p>Innovative carbon dosing strategies for enhanced treatment performance</p>
              </div>
              <div className="theme-item">
                <h4>Catchment Management</h4>
                <p>Integrated approaches to watershed and water resource management</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PublicationsPage;
"""
    
    with open('src/pages/PublicationsPage.js', 'w', encoding='utf-8') as f:
        f.write(publications_content)
    print("Created enhanced PublicationsPage.js")

    # Enhanced Contact Page
    contact_content = """import React, { useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGoogleScholar, FaGlobe, FaPaperPlane } from 'react-icons/fa';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    subject: '',
    message: '',
    projectType: ''
  });
  
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');
  
  const projectTypes = [
    'Environmental Consulting',
    'Water Treatment Design',
    'Watershed Modeling',
    'Research Collaboration',
    'Technical Assessment',
    'Policy Development',
    'Other'
  ];
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    if (formErrors[name]) {
      setFormErrors({
        ...formErrors,
        [name]: ''
      });
    }
  };
  
  const validateForm = () => {
    const errors = {};
    
    if (!formData.name.trim()) {
      errors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
      errors.email = 'Please enter a valid email address';
    }
    
    if (!formData.subject.trim()) {
      errors.subject = 'Subject is required';
    }
    
    if (!formData.message.trim()) {
      errors.message = 'Message is required';
    } else if (formData.message.trim().length < 20) {
      errors.message = 'Message must be at least 20 characters';
    }
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    setSubmitError('');
    
    // Simulate form submission
    setTimeout(() => {
      try {
        setIsSubmitting(false);
        setSubmitSuccess(true);
        setFormData({
          name: '',
          email: '',
          organization: '',
          subject: '',
          message: '',
          projectType: ''
        });
        
        setTimeout(() => {
          setSubmitSuccess(false);
        }, 5000);
      } catch (error) {
        setIsSubmitting(false);
        setSubmitError('Failed to send message. Please try again later.');
      }
    }, 2000);
  };

  return (
    <div className="contact-page">
      <section className="page-header enhanced-header">
        <div className="header-content">
          <h1>Contact & Collaboration</h1>
          <p>Ready to tackle your environmental challenges together? Let's discuss how we can create sustainable solutions.</p>
        </div>
      </section>

      <section className="contact-container">
        <div className="contact-info-section modern-section">
          <div className="section-header">
            <h2>Get in Touch</h2>
            <p className="section-subtitle">Multiple ways to connect and start your project</p>
          </div>
          
          <div className="contact-methods">
            <div className="contact-method enhanced-card">
              <div className="contact-icon">
                <FaEnvelope />
              </div>
              <div className="contact-details">
                <h3>Email</h3>
                <p>reza.moghaddam@niwa.co.nz</p>
                <span className="contact-note">Primary contact for project inquiries</span>
              </div>
            </div>
            
            <div className="contact-method enhanced-card">
              <div className="contact-icon">
                <FaPhone />
              </div>
              <div className="contact-details">
                <h3>Phone</h3>
                <p>+64 21 0805 2489</p>
                <span className="contact-note">Available for consultations</span>
              </div>
            </div>
            
            <div className="contact-method enhanced-card">
              <div className="contact-icon">
                <FaMapMarkerAlt />
              </div>
              <div className="contact-details">
                <h3>Location</h3>
                <p>New Zealand</p>
                <span className="contact-note">Available for projects nationwide</span>
              </div>
            </div>
          </div>

          <div className="professional-links-section">
            <h3>Professional Profiles</h3>
            <div className="professional-links">
              <a href="https://nz.linkedin.com/in/reza-moghaddam" target="_blank" rel="noopener noreferrer" className="social-link enhanced-card">
                <FaLinkedin className="social-icon" />
                <div>
                  <h4>LinkedIn</h4>
                  <p>Professional network & updates</p>
                </div>
              </a>
              
              <a href="https://scholar.google.com/citations" target="_blank" rel="noopener noreferrer" className="social-link enhanced-card">
                <FaGoogleScholar className="social-icon" />
                <div>
                  <h4>Google Scholar</h4>
                  <p>Research publications & citations</p>
                </div>
              </a>
              
              <a href="https://niwa.co.nz/staff-profile" target="_blank" rel="noopener noreferrer" className="social-link enhanced-card">
                <FaGlobe className="social-icon" />
                <div>
                  <h4>NIWA Profile</h4>
                  <p>Institutional affiliation & research</p>
                </div>
              </a>
            </div>
          </div>
          
          <div className="consultation-info enhanced-card">
            <h3>Consultation Services</h3>
            <p>I offer expert consulting in these key areas:</p>
            <ul className="service-list">
              <li>Environmental Systems Modeling & Digital Twins</li>
              <li>Water Treatment Technology & Process Engineering</li>
              <li>Nature-Based Solutions & Green Infrastructure</li>
              <li>Geospatial Analysis & Data Science</li>
              <li>Regulatory Compliance & Environmental Assessment</li>
              <li>Research & Development Collaboration</li>
            </ul>
          </div>
        </div>

        <div className="contact-form-section modern-section">
          <div className="section-header">
            <h2>Send a Message</h2>
            <p className="section-subtitle">Start the conversation about your project</p>
          </div>
          
          {submitSuccess && (
            <div className="form-success enhanced-card">
              <FaPaperPlane className="success-icon" />
              <h3>Message Sent Successfully!</h3>
              <p>Thank you for reaching out. I'll get back to you within 24 hours to discuss your project.</p>
            </div>
          )}
          
          {submitError && (
            <div className="form-error enhanced-card">
              <h3>Message Failed</h3>
              <p>{submitError}</p>
            </div>
          )}
          
          <form className="contact-form enhanced-card" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Full Name *</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                />
                {formErrors.name && <span className="error-message">{formErrors.name}</span>}
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email Address *</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                />
                {formErrors.email && <span className="error-message">{formErrors.email}</span>}
              </div>
            </div>
            
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="organization">Organization</label>
                <input 
                  type="text" 
                  id="organization" 
                  name="organization" 
                  value={formData.organization}
                  onChange={handleChange}
                  placeholder="Your organization or company"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="projectType">Project Type</label>
                <select 
                  id="projectType" 
                  name="projectType" 
                  value={formData.projectType}
                  onChange={handleChange}
                >
                  <option value="">Select project type</option>
                  {projectTypes.map((type, index) => (
                    <option key={index} value={type}>{type}</option>
                  ))}
                </select>
              </div>
            </div>
            
            <div className="form-group">
              <label htmlFor="subject">Subject *</label>
              <input 
                type="text" 
                id="subject" 
                name="subject" 
                value={formData.subject}
                onChange={handleChange}
                placeholder="Brief description of your project or inquiry"
              />
              {formErrors.subject && <span className="error-message">{formErrors.subject}</span>}
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Project Details *</label>
              <textarea 
                id="message" 
                name="message" 
                rows="6" 
                value={formData.message}
                onChange={handleChange}
                placeholder="Please provide details about your project, timeline, specific requirements, and any questions you have. The more information you provide, the better I can assist you."
              ></textarea>
              {formErrors.message && <span className="error-message">{formErrors.message}</span>}
            </div>
            
            <button 
              type="submit" 
              className="btn primary-btn enhanced-btn submit-btn"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <div className="loading-spinner"></div>
                  Sending Message...
                </>
              ) : (
                <>
                  <FaPaperPlane />
                  Send Message
                </>
              )}
            </button>
          </form>
        </div>
      </section>
      
      <div className="consultation-cta enhanced-cta">
        <div className="cta-content">
          <h3>Ready to Start Your Environmental Project?</h3>
          <p>
            Whether you need innovative water treatment solutions, comprehensive environmental modeling, 
            or sustainable engineering design, I'm here to help transform your challenges into opportunities. 
            Let's collaborate to create solutions that benefit both your objectives and the environment.
          </p>
          <div className="cta-features">
            <div className="feature-item">
              <h4>Expert Consultation</h4>
              <p>Comprehensive analysis and strategic planning</p>
            </div>
            <div className="feature-item">
              <h4>Innovative Solutions</h4>
              <p>Cutting-edge technology and sustainable approaches</p>
            </div>
            <div className="feature-item">
              <h4>Proven Results</h4>
              <p>Track record of successful project delivery</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
"""
    
    with open('src/pages/ContactPage.js', 'w', encoding='utf-8') as f:
        f.write(contact_content)
    print("Created enhanced ContactPage.js")

    # Simple NotFoundPage
    notfound_content = """import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaSearch } from 'react-icons/fa';

const NotFoundPage = () => {
  return (
    <div className="not-found-page">
      <div className="not-found-content">
        <div className="error-visual">
          <h1>404</h1>
          <FaSearch className="search-icon" />
        </div>
        <h2>Page Not Found</h2>
        <p>The page you're looking for doesn't exist or has been moved.</p>
        <div className="not-found-actions">
          <Link to="/" className="btn primary-btn enhanced-btn">
            <FaHome />
            Return to Home
          </Link>
          <Link to="/consulting" className="btn secondary-btn enhanced-btn">
            View Services
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
"""
    
    with open('src/pages/NotFoundPage.js', 'w', encoding='utf-8') as f:
        f.write(notfound_content)
    print("Created NotFoundPage.js")

def create_additional_files():
    """Create additional project files"""
    
    # Create index.js
    index_content = """import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
"""
    
    with open('src/index.js', 'w', encoding='utf-8') as f:
        f.write(index_content)
    print("Created index.js")

    # Create enhanced index.html
    index_html_content = """<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#1a5276" />
    <meta
      name="description"
      content="Dr. Reza Moghaddam - Environmental & Water Systems Engineer | Expert in digital twins, nature-based solutions, water treatment technology, and sustainable engineering approaches for complex environmental challenges."
    />
    <meta name="keywords" content="Environmental Engineering, Water Systems Engineer, Digital Twin Development, Nature-Based Solutions, Water Treatment Technology, Sustainable Engineering, Hydrogeology, Catchment Modeling, Bioreactor Design, New Zealand, NIWA, Process Optimization, Green Infrastructure, Ecological Engineering, Climate Resilience, Machine Learning Environmental Applications" />
    <meta name="author" content="Dr. Reza Moghaddam" />
    
    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://your-domain.com/" />
    <meta property="og:title" content="Dr. Reza Moghaddam | Environmental & Water Systems Engineer" />
    <meta property="og:description" content="Expert environmental engineering solutions spanning digital twins, nature-based systems, and advanced water treatment technologies." />
    
    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:title" content="Dr. Reza Moghaddam | Environmental & Water Systems Engineer" />
    <meta property="twitter:description" content="Expert environmental engineering solutions spanning digital twins, nature-based systems, and advanced water treatment technologies." />
    
    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
    
    <title>Dr. Reza Moghaddam | Environmental Engineer & Water Systems Specialist</title>
  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
  </body>
</html>
"""
    
    with open('public/index.html', 'w', encoding='utf-8') as f:
        f.write(index_html_content)
    print("Created enhanced index.html")

    # Create netlify.toml
    netlify_content = """# Netlify configuration for React SPA
[build]
  command = "npm run build"
  publish = "build"

# Redirect all routes to index.html for client-side routing
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

# Security headers
[[headers]]
  for = "/*"
    [headers.values]
    X-Frame-Options = "DENY"
    X-XSS-Protection = "1; mode=block"
    X-Content-Type-Options = "nosniff"
    Referrer-Policy = "strict-origin-when-cross-origin"
    Content-Security-Policy = "default-src 'self'; style-src 'self' 'unsafe-inline' fonts.googleapis.com; font-src 'self' fonts.gstatic.com; script-src 'self'; img-src 'self' data:; connect-src 'self'"

# Cache static assets
[[headers]]
  for = "/static/*"
    [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"
"""
    
    with open('netlify.toml', 'w', encoding='utf-8') as f:
        f.write(netlify_content)
    print("Created netlify.toml")

    # Create README.md
    readme_content = """# Dr. Reza Moghaddam - Environmental Engineering Portfolio

A comprehensive, modern portfolio website showcasing environmental engineering expertise, research, and consulting services.

## 🌟 Features

- **Modern Design**: Glassmorphism effects, animations, and responsive layout
- **Comprehensive Services**: Complete CV services including digital twins, nature-based solutions
- **Interactive Elements**: Hover effects, floating animations, smooth transitions
- **Professional Content**: Research publications, project portfolios, technical expertise
- **Contact Integration**: Professional contact forms and consultation requests

## 🚀 Technology Stack

- **Frontend**: React 18, React Router DOM
- **Styling**: Advanced CSS with animations and modern effects
- **Icons**: React Icons for comprehensive icon library
- **Deployment**: Netlify with automatic builds
- **Performance**: Optimized loading and responsive design

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.js          # Enhanced navigation
│   └── Footer.js          # Professional footer
├── pages/
│   ├── HomePage.js        # Landing page with hero section
│   ├── ConsultingPage.js  # Comprehensive services
│   ├── ProjectsPage.js    # Project portfolio
│   ├── PublicationsPage.js # Research publications
│   ├── ResumePage.js      # Professional background
│   ├── ContactPage.js     # Contact and consultation
│   └── NotFoundPage.js    # 404 error page
├── assets/               # Images and static files
├── App.js               # Main application
├── App.css              # Comprehensive styling
└── index.js             # Application entry point
```

## 🎨 Design Features

### Visual Enhancements
- **Glassmorphism Cards**: Modern translucent design elements
- **Floating Animations**: Subtle background animations
- **Gradient Backgrounds**: Professional color schemes
- **Technology Badges**: Interactive skill indicators
- **Responsive Grid Layouts**: Optimized for all devices

### Content Highlights
- **15+ Specialized Services**: Complete environmental engineering offerings
- **Digital Twin Development**: Cutting-edge water system modeling
- **Nature-Based Solutions**: Sustainable engineering approaches
- **Advanced Analytics**: AI-powered environmental assessment
- **Regulatory Expertise**: NZ environmental compliance (RMA, NPS-FM, NES-F)

## 🛠️ Installation & Development

```bash
# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build

# Deploy to Netlify (automatic on git push)
```

## 📊 Services Covered

### Environmental Systems Modeling
- Integrated watershed modeling and simulation
- Digital twin development for water systems
- Predictive environmental quality assessment
- Advanced hydraulic and hydrologic analysis

### Water Treatment Technology
- Treatment system design and optimization
- Innovative contaminant removal strategies
- Bioprocess engineering and optimization
- Resource recovery system development

### Sustainable Engineering
- Nature-based solution development
- Green infrastructure implementation
- Ecological engineering approaches
- Climate resilience design

### Technical Expertise
- Environmental spatial modeling (GIS)
- Data science for environmental applications
- Research methodology and experimental design
- Indigenous environmental management principles

## 🔧 Technical Tools Integration

- **Modeling Software**: SWMM, EPANET, HEC-RAS, MODFLOW
- **Programming**: Python (Pandas, NumPy, SciPy), R, Matlab
- **GIS**: ArcGIS, QGIS
- **Specialized**: Machine Learning, Digital Twins, Cloud Computing

## 📈 SEO & Performance

- Optimized meta tags and descriptions
- Semantic HTML structure
- Fast loading times
- Mobile-first responsive design
- Professional social media integration

## 🚀 Deployment

The site is configured for automatic deployment on Netlify:

1. Push changes to GitHub repository
2. Netlify automatically builds and deploys
3. Custom domain configuration available
4. SSL certificates included

## 📞 Contact & Consultation

- **Email**: reza.moghaddam@niwa.co.nz
- **Phone**: +64 21 0805 2489
- **LinkedIn**: Professional networking and updates
- **Location**: New Zealand (nationwide services)

## 📄 License

© 2024 Dr. Reza Moghaddam. All rights reserved.

---

*This portfolio represents comprehensive environmental engineering expertise with modern web presentation, designed to attract clients, collaborators, and research partners.*
"""
    
    with open('README.md', 'w', encoding='utf-8') as f:
        f.write(readme_content)
    print("Created comprehensive README.md")

    # Create .gitignore
    gitignore_content = """# See https://help.github.com/articles/ignoring-files/ for more about ignoring files.

# dependencies
/node_modules
/.pnp
.pnp.js

# testing
/coverage

# production
/build

# misc
.DS_Store
.env.local
.env.development.local
.env.test.local
.env.production.local

npm-debug.log*
yarn-debug.log*
yarn-error.log*

# IDE
.vscode/
.idea/

# OS
Thumbs.db
"""
    
    with open('.gitignore', 'w', encoding='utf-8') as f:
        f.write(gitignore_content)
    print("Created .gitignore")

def main():
    """Main function that orchestrates the enhanced website creation"""
    print("\n🎨 === Creating ENHANCED Environmental Engineering Portfolio === 🎨\n")
    
    # Create directory structure
    create_directories()
    
    # Create package.json with enhanced dependencies
    create_package_json()
    
    # Create core React files
    create_enhanced_app_js()
    create_enhanced_css()
    
    # Create enhanced pages
    create_enhanced_home_page()
    create_enhanced_consulting_page()
    create_enhanced_resume_page()
    
    # Create remaining components and pages
    create_remaining_components()
    create_other_pages()
    
    # Create additional project files
    create_additional_files()
    
    print("\n🎉 === ENHANCED Portfolio Website Created Successfully! === 🎉\n")
    print("🚀 Next steps:")
    print("1. Run 'npm install' to install all dependencies")
    print("2. Run 'npm start' to preview the enhanced website locally")
    print("3. Push to GitHub for automatic Netlify deployment")
    print("\n✨ Major Enhancements Added:")
    print("   📊 All CV services: Digital Twins, Nature-Based Solutions, Advanced Analytics")
    print("   🎨 Modern UI: Glassmorphism, animations, responsive design")
    print("   💫 Visual Elements: Floating icons, gradients, technology badges")
    print("   📱 Enhanced UX: Smooth transitions, interactive elements")
    print("   🔧 Professional Content: Comprehensive technical expertise")
    print("   🌟 SEO Optimized: Meta tags, performance, accessibility")
    print("\n🌍 The website now showcases your complete environmental engineering expertise!")
    print("   Ready to impress clients, collaborators, and research partners! 🚀")

if __name__ == "__main__":
    main()