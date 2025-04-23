#!/usr/bin/env python3
"""
Simple Portfolio Website Generator - Netlify-friendly

This script creates a React-based professional portfolio website with minimal 
dependencies and proper path handling to avoid build errors on Netlify.

Usage:
1. Save this script as 'simple_website_setup.py'
2. Run: python simple_website_setup.py
3. Install dependencies: npm install
4. Start development server: npm start
5. Push to GitHub and deploy on Netlify
"""

import os
import shutil
import base64

def clean_directory():
    """Clean the repository before generating files"""
    print("Cleaning repository...")
    directories = ['src', 'public']
    for directory in directories:
        if os.path.exists(directory):
            shutil.rmtree(directory)
    print("Repository cleaned")

def create_directories():
    """Create the necessary directory structure"""
    print("Creating directories...")
    directories = [
        'src',
        'src/components',
        'src/pages',
        'public'
    ]
    for directory in directories:
        os.makedirs(directory, exist_ok=True)
    print("Created directories")

def create_package_json():
    """Create the package.json file"""
    content = """{
  "name": "rmes-portfolio",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.16.0",
    "react-scripts": "5.0.1"
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
    ],
    "rules": {
      "no-unused-vars": "warn"
    }
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
    print("Created package.json")

def create_public_files():
    """Create files in the public folder"""
    # Create index.html
    index_html = """<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#1a5276" />
    <meta name="description" content="Dr. Reza Moghaddam - Environmental Engineer Portfolio" />
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet">
    <title>Reza Moghaddam | Environmental Engineer</title>
  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
  </body>
</html>"""
    with open('public/index.html', 'w', encoding='utf-8') as f:
        f.write(index_html)
    
    # Create a simple logo.svg
    logo_svg = """<svg width="200" height="60" viewBox="0 0 200 60" xmlns="http://www.w3.org/2000/svg">
  <rect width="200" height="60" fill="#1a5276" rx="5" ry="5"/>
  <text x="55" y="35" font-family="Arial" font-size="22" font-weight="bold" fill="white">RMES</text>
  <text x="55" y="50" font-family="Arial" font-size="10" fill="#e1f5fe">ENVIRONMENTAL ENGINEERING</text>
</svg>"""
    with open('public/logo.svg', 'w', encoding='utf-8') as f:
        f.write(logo_svg)
    
    # Create a favicon.ico (simple 1x1 pixel)
    # This is a dummy favicon, but enough to avoid 404 errors
    with open('public/favicon.ico', 'wb') as f:
        f.write(b'\x00\x00\x01\x00\x01\x00\x01\x01\x00\x00\x01\x00\x18\x00\x0A\x00\x00\x00\x16\x00\x00\x00\x28\x00\x00\x00\x01\x00\x00\x00\x01\x00\x00\x00\x01\x00\x18\x00\x00\x00\x00\x00\x04\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00')
    
    # Create a simple wastewater-icon.svg
    with open('public/wastewater-icon.svg', 'w', encoding='utf-8') as f:
        f.write("""<svg width="80" height="80" xmlns="http://www.w3.org/2000/svg">
  <circle cx="40" cy="40" r="38" fill="#e1f5fe" stroke="#1a5276" stroke-width="2"/>
  <rect x="15" y="30" width="50" height="20" fill="white" stroke="#1a5276" stroke-width="1.5"/>
</svg>""")
    
    # Create a simple catchment-icon.svg
    with open('public/catchment-icon.svg', 'w', encoding='utf-8') as f:
        f.write("""<svg width="80" height="80" xmlns="http://www.w3.org/2000/svg">
  <circle cx="40" cy="40" r="38" fill="#e1f5fe" stroke="#1a5276" stroke-width="2"/>
  <path d="M20,60 C30,40 50,40 60,20" stroke="#1a5276" stroke-width="2" fill="none"/>
</svg>""")
    
    print("Created public files")

def create_app_files():
    """Create React app files"""
    # Create index.js
    index_js = """import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
"""
    with open('src/index.js', 'w', encoding='utf-8') as f:
        f.write(index_js)
    
    # Create App.js with simple imports
    app_js = """import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import ProjectsPage from './pages/ProjectsPage';
import PublicationsPage from './pages/PublicationsPage';
import ContactPage from './pages/ContactPage';
import './index.css';

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/publications" element={<PublicationsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<HomePage />} />
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
        f.write(app_js)
    
    # Create index.css (combined CSS file)
    index_css = """/* Base styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Poppins', sans-serif;
  line-height: 1.6;
  color: #333;
  background-color: #f9f9f9;
}

.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.main-content {
  flex: 1;
}

h1, h2, h3 {
  margin-bottom: 1rem;
}

a {
  text-decoration: none;
  color: inherit;
}

ul {
  list-style: none;
}

.btn {
  display: inline-block;
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.primary-btn {
  background-color: #1a5276;
  color: white;
  box-shadow: 0 2px 5px rgba(26, 82, 118, 0.3);
}

.primary-btn:hover {
  background-color: #154360;
  transform: translateY(-2px);
}

.section-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

/* Navigation */
.navbar {
  background-color: white;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.navbar-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 2rem;
}

.navbar-logo img {
  height: 40px;
}

.nav-menu {
  display: flex;
}

.nav-item {
  margin-left: 1.5rem;
}

.nav-link {
  font-weight: 500;
  padding: 0.5rem 0;
  position: relative;
}

.nav-link:hover {
  color: #1a5276;
}

.nav-link.active {
  color: #1a5276;
}

.nav-link.active::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: #1a5276;
}

/* Hero Section */
.hero {
  background: linear-gradient(135deg, #1a5276, #2980b9);
  color: white;
  text-align: center;
  padding: 8rem 2rem;
}

.hero-content {
  max-width: 800px;
  margin: 0 auto;
}

.hero h1 {
  font-size: 3rem;
  margin-bottom: 0.5rem;
}

.hero h2 {
  font-size: 1.5rem;
  font-weight: 400;
  margin-bottom: 1.5rem;
  color: white;
}

.hero p {
  font-size: 1.2rem;
  margin-bottom: 2rem;
}

.hero-buttons {
  display: flex;
  justify-content: center;
  gap: 1rem;
}

/* Section Styles */
.section {
  padding: 4rem 0;
}

.section-title {
  text-align: center;
  font-size: 2rem;
  margin-bottom: 2rem;
  color: #1a5276;
}

/* Card Styles */
.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.card {
  background-color: white;
  border-radius: 8px;
  padding: 2rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
}

.card h3 {
  color: #1a5276;
  margin-bottom: 1rem;
}

.card-icon {
  width: 60px;
  height: 60px;
  margin-bottom: 1rem;
}

/* Contact Form */
.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-family: inherit;
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: #1a5276;
}

/* Footer */
.footer {
  background-color: #1a5276;
  color: white;
  padding: 2rem;
  text-align: center;
}

.footer-links {
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin: 1rem 0;
}

.footer-link {
  color: white;
}

.footer-bottom {
  margin-top: 1rem;
  opacity: 0.8;
}

/* Responsive Styles */
@media (max-width: 768px) {
  .hero-buttons {
    flex-direction: column;
  }
  
  .nav-menu {
    flex-direction: column;
    gap: 1rem;
  }
  
  .nav-item {
    margin-left: 0;
  }
  
  .card-grid {
    grid-template-columns: 1fr;
  }
}
"""
    with open('src/index.css', 'w', encoding='utf-8') as f:
        f.write(index_css)
    
    print("Created app files")

def create_components():
    """Create React components"""
    # Create Navbar.js
    navbar_js = """import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  
  const isActive = (path) => {
    return location.pathname === path;
  };
  
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <img src="/logo.svg" alt="RMES Environmental Engineering" />
        </Link>
        
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/" className={`nav-link ${isActive('/') ? 'active' : ''}`}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/services" className={`nav-link ${isActive('/services') ? 'active' : ''}`}>
              Services
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/projects" className={`nav-link ${isActive('/projects') ? 'active' : ''}`}>
              Projects
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/publications" className={`nav-link ${isActive('/publications') ? 'active' : ''}`}>
              Publications
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className={`nav-link ${isActive('/contact') ? 'active' : ''}`}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
"""
    with open('src/components/Navbar.js', 'w', encoding='utf-8') as f:
        f.write(navbar_js)
    
    # Create Footer.js
    footer_js = """import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-links">
          <Link to="/" className="footer-link">Home</Link>
          <Link to="/services" className="footer-link">Services</Link>
          <Link to="/projects" className="footer-link">Projects</Link>
          <Link to="/publications" className="footer-link">Publications</Link>
          <Link to="/contact" className="footer-link">Contact</Link>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {currentYear} Dr. Reza Moghaddam. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
"""
    with open('src/components/Footer.js', 'w', encoding='utf-8') as f:
        f.write(footer_js)
    
    print("Created components")

def create_pages():
    """Create React pages"""
    # Create HomePage.js
    home_page = """import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Dr. Reza Moghaddam</h1>
          <h2>Environmental & Bioprocess Engineer</h2>
          <p>Specializing in innovative water treatment solutions, sustainable technology design, and environmental impact assessment.</p>
          <div className="hero-buttons">
            <Link to="/services" className="btn primary-btn">Our Services</Link>
            <Link to="/contact" className="btn primary-btn">Contact Me</Link>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="section">
        <div className="section-container">
          <h2 className="section-title">Areas of Expertise</h2>
          <div className="card-grid">
            <div className="card">
              <img className="card-icon" src="/wastewater-icon.svg" alt="Wastewater Treatment" />
              <h3>Environmental Engineering</h3>
              <ul>
                <li>Municipal & Agricultural Wastewater Treatment</li>
                <li>Denitrifying Bioreactors</li>
                <li>Agricultural Impact Mitigation</li>
                <li>Water & Wastewater Reticulation Design</li>
              </ul>
            </div>
            <div className="card">
              <img className="card-icon" src="/wastewater-icon.svg" alt="Bioprocess Engineering" />
              <h3>Bioprocess Engineering</h3>
              <ul>
                <li>Aerobic & Anaerobic Treatment Systems</li>
                <li>Bioreactor Design & Optimization</li>
                <li>Fermentation Process Control</li>
                <li>Scale-up Methodology</li>
              </ul>
            </div>
            <div className="card">
              <img className="card-icon" src="/catchment-icon.svg" alt="Modeling & Analysis" />
              <h3>Modeling & Analysis</h3>
              <ul>
                <li>Catchment & Water Resource Modeling</li>
                <li>Chemical & Food Processing Optimization</li>
                <li>Life Cycle Assessment</li>
                <li>Advanced Data Analysis (Python, R)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
"""
    with open('src/pages/HomePage.js', 'w', encoding='utf-8') as f:
        f.write(home_page)
    
    # Create ServicesPage.js
    services_page = """import React from 'react';

const ServicesPage = () => {
  return (
    <div className="services-page">
      <section className="hero">
        <div className="hero-content">
          <h1>Our Services</h1>
          <p>Comprehensive environmental engineering solutions</p>
        </div>
      </section>
      
      <section className="section">
        <div className="section-container">
          <h2 className="section-title">Wastewater Treatment Design & Optimization</h2>
          <div className="card-grid">
            <div className="card">
              <h3>Municipal Wastewater Treatment</h3>
              <p>Comprehensive design and optimization services for municipal wastewater treatment facilities.</p>
              <h4>Aerobic Treatment Systems</h4>
              <ul>
                <li><strong>Activated Sludge Process (ASP):</strong> Design and optimization of conventional and modified ASP systems.</li>
                <li><strong>Sequencing Batch Reactors (SBR):</strong> Time-oriented systems for variable flow conditions.</li>
                <li><strong>Moving Bed Biofilm Reactors (MBBR):</strong> High-efficiency systems using biofilm carriers.</li>
                <li><strong>Membrane Bioreactors (MBR):</strong> Advanced systems for superior effluent quality.</li>
              </ul>
              <h4>Anaerobic Treatment Systems</h4>
              <ul>
                <li><strong>Upflow Anaerobic Sludge Blanket (UASB):</strong> Energy-efficient treatment with biogas recovery.</li>
                <li><strong>Anaerobic Baffled Reactors (ABR):</strong> Robust systems for staged treatment.</li>
                <li><strong>Expanded Granular Sludge Bed (EGSB):</strong> High-rate systems for improved contact.</li>
                <li><strong>Anaerobic Membrane Bioreactors (AnMBR):</strong> Technology combining anaerobic digestion with filtration.</li>
              </ul>
            </div>
            <div className="card">
              <h3>Agricultural Wastewater Treatment</h3>
              <p>Specialized solutions for agricultural wastewater focusing on nutrient recovery and compliance.</p>
              <h4>Nutrient Removal Systems</h4>
              <ul>
                <li><strong>Denitrifying Bioreactors:</strong> Woodchip-based systems for optimal nitrate removal.</li>
                <li><strong>Constructed Wetlands:</strong> Natural treatment systems for nutrients and sediments.</li>
                <li><strong>Phosphorus Precipitation:</strong> Chemical systems for phosphorus removal.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      <section className="section">
        <div className="section-container">
          <h2 className="section-title">Catchment & Water Resource Modeling</h2>
          <div className="card-grid">
            <div className="card">
              <h3>Surface Water Modeling</h3>
              <p>Comprehensive modeling services for surface water systems.</p>
              <h4>Hydrological Modeling</h4>
              <ul>
                <li>Flood prediction and mitigation planning</li>
                <li>Stormwater management system design</li>
                <li>Climate change impact assessment</li>
                <li>Rainfall-runoff modeling</li>
              </ul>
            </div>
            <div className="card">
              <h3>Groundwater Modeling</h3>
              <p>Specialized groundwater modeling services for resource management.</p>
              <h4>Quantity Modeling</h4>
              <ul>
                <li>Aquifer characterization and yield assessment</li>
                <li>Wellfield design and optimization</li>
                <li>Sustainable extraction rate determination</li>
                <li>Groundwater-surface water interaction analysis</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
"""
    with open('src/pages/ServicesPage.js', 'w', encoding='utf-8') as f:
        f.write(services_page)
    
    # Create ProjectsPage.js
    projects_page = """import React from 'react';

const ProjectsPage = () => {
  const projects = [
    {
      id: 1,
      title: "Enhanced Nitrate Removal in Woodchip Bioreactors",
      description: "Implementation of carbon dosing techniques to improve nitrate removal efficiency in agricultural drainage systems.",
      metrics: {
        efficiencyImprovement: "30%",
        costReduction: "25%"
      }
    },
    {
      id: 2,
      title: "Municipal WWTP Optimization Using UASB Technology",
      description: "Implementation of Upflow Anaerobic Sludge Blanket (UASB) reactors for enhanced energy efficiency in municipal wastewater treatment.",
      metrics: {
        energyProduction: "40% increase",
        operationalCost: "35% reduction"
      }
    },
    {
      id: 3,
      title: "Catchment Modeling for Agricultural Runoff Mitigation",
      description: "Comprehensive modeling of surface and groundwater interactions to optimize placement of water quality interventions.",
      metrics: {
        contaminantReduction: "45%",
        implementationEfficiency: "60% improvement"
      }
    }
  ];

  return (
    <div className="projects-page">
      <section className="hero">
        <div className="hero-content">
          <h1>Projects & Research</h1>
          <p>A collection of my environmental engineering projects</p>
        </div>
      </section>

      <section className="section">
        <div className="section-container">
          <div className="card-grid">
            {projects.map(project => (
              <div key={project.id} className="card">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="metrics">
                  {Object.entries(project.metrics).map(([key, value]) => (
                    <div key={key} className="metric-item">
                      <span>{key.replace(/([A-Z])/g, ' $1').trim()}: </span>
                      <span>{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectsPage;
"""
    with open('src/pages/ProjectsPage.js', 'w', encoding='utf-8') as f:
        f.write(projects_page)
    
    # Create PublicationsPage.js
    publications_page = """import React from 'react';

const PublicationsPage = () => {
  const publications = [
    {
      id: 1,
      title: "Flow analysis and hydraulic performance of denitrifying bioreactors under different carbon dosing treatments",
      authors: "Moghaddam, R., et al.",
      journal: "Journal of Environmental Management",
      year: 2023
    },
    {
      id: 2,
      title: "Constant carbon dosing of a pilot-scale denitrifying bioreactor to improve nitrate removal from agricultural tile drainage",
      authors: "Moghaddam, R., et al.",
      journal: "Ecological Engineering",
      year: 2023
    },
    {
      id: 3,
      title: "Enhanced nitrate removal and side effects of methanol dosing in denitrifying bioreactors",
      authors: "Moghaddam, R., et al.",
      journal: "Ecological Engineering",
      year: 2022
    }
  ];

  return (
    <div className="publications-page">
      <section className="hero">
        <div className="hero-content">
          <h1>Publications</h1>
          <p>My research publications in environmental engineering</p>
        </div>
      </section>

      <section className="section">
        <div className="section-container">
          <h2 className="section-title">Journal Articles</h2>
          {publications.map(publication => (
            <div key={publication.id} className="card" style={{marginBottom: '1rem'}}>
              <h3>{publication.title}</h3>
              <p>{publication.authors} ({publication.year})</p>
              <p>{publication.journal}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default PublicationsPage;
"""
    with open('src/pages/PublicationsPage.js', 'w', encoding='utf-8') as f:
        f.write(publications_page)
    
    # Create ContactPage.js
    contact_page = """import React, { useState } from 'react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [submitSuccess, setSubmitSuccess] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    
    // Simulate form submission success
    setTimeout(() => {
      setSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    }, 1000);
  };

  return (
    <div className="contact-page">
      <section className="hero">
        <div className="hero-content">
          <h1>Contact Me</h1>
          <p>Get in touch for collaborations and inquiries</p>
        </div>
      </section>

      <section className="section">
        <div className="section-container">
          <div className="card-grid">
            <div className="card">
              <h2>Contact Information</h2>
              <p><strong>Email:</strong> che.eng@live.com</p>
              <p><strong>Phone:</strong> +642108052489</p>
              <p><strong>Based in:</strong> New Zealand</p>
              
              <h3 style={{marginTop: '2rem'}}>Consultancy Services</h3>
              <ul>
                <li>Wastewater Treatment Design & Optimization</li>
                <li>Water & Wastewater Reticulation Design</li>
                <li>Catchment & Water Resource Modeling</li>
                <li>Chemical & Food Processing Optimization</li>
              </ul>
            </div>
            
            <div className="card">
              <h2>Send Me a Message</h2>
              
              {submitSuccess && (
                <div style={{
                  backgroundColor: '#d4edda', 
                  color: '#155724',
                  padding: '1rem',
                  borderRadius: '4px',
                  marginBottom: '1rem'
                }}>
                  Thank you for your message! I'll get back to you soon.
                </div>
              )}
              
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input 
                    type="text" 
                    id="subject" 
                    name="subject" 
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows="5" 
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                
                <button type="submit" className="btn primary-btn">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
"""
    with open('src/pages/ContactPage.js', 'w', encoding='utf-8') as f:
        f.write(contact_page)
    
    print("Created pages")

def create_netlify_toml():
    """Create Netlify configuration file"""
    netlify_toml = """# Netlify configuration file
[build]
  command = "npm run build"
  publish = "build"

# Configure redirects for SPA
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

# Custom headers
[[headers]]
  for = "/*"
    [headers.values]
    Cache-Control = "public, max-age=3600"
    X-Frame-Options = "DENY"
    X-XSS-Protection = "1; mode=block"
"""
    with open('netlify.toml', 'w', encoding='utf-8') as f:
        f.write(netlify_toml)
    print("Created netlify.toml")

def main():
    """Main function to create portfolio website"""
    print("\n=== Creating Simple Portfolio Website ===\n")
    
    clean_directory()
    create_directories()
    create_package_json()
    create_public_files()
    create_app_files()
    create_components()
    create_pages()
    create_netlify_toml()
    
    print("\n=== Website Structure Created Successfully! ===\n")
    print("Next steps:")
    print("1. Run 'npm install' to install dependencies")
    print("2. Run 'npm start' to preview the website locally")
    print("3. Push to GitHub:")
    print("   git add .")
    print("   git commit -m \"Add simplified portfolio website\"")
    print("   git push origin main")
    print("4. Deploy to Netlify by connecting your GitHub repository")

if __name__ == "__main__":
    main()