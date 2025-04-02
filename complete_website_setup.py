#!/usr/bin/env python3
"""
Complete Portfolio Website Setup Script

This script creates all necessary files and folder structure for a React-based
professional portfolio website for an Environmental Engineer.

Usage:
1. Save this script as 'portfolio_setup.py'
2. Run: python portfolio_setup.py
3. After running, install dependencies: npm install
4. Start the development server: npm start
5. Push to GitHub and deploy on Netlify

The script will generate a complete React website with:
- Proper folder structure
- All required components
- Navigation and routing
- CSS styling
- Package configuration
"""

import os
import sys
import shutil

def create_directories():
    """Create the necessary directory structure"""
    print("Creating directory structure...")
    
    # Define directories to create
    directories = [
        'src',
        'src/components',
        'src/pages',
        'public',
        'public/images'
    ]
    
    # Create directories
    for directory in directories:
        os.makedirs(directory, exist_ok=True)
        print(f"Created directory: {directory}")

def create_app_js():
    """Create the main App.js file"""
    content = """import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import PublicationsPage from './pages/PublicationsPage';
import ContactPage from './pages/ContactPage';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/publications" element={<PublicationsPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
"""
    with open('src/App.js', 'w', encoding='utf-8') as f:
        f.write(content)
    print("Created App.js")

def create_index_js():
    """Create the index.js file"""
    content = """import React from 'react';
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
        f.write(content)
    print("Created index.js")

def create_app_css():
    """Create the App.css file with styles"""
    content = """/* App.css - Main styling for the portfolio website */

/* Reset & Base Styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  line-height: 1.6;
  color: #333;
  background-color: #f9f9f9;
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
}

.primary-btn:hover {
  background-color: #154360;
}

.secondary-btn {
  background-color: transparent;
  color: #1a5276;
  border: 2px solid #1a5276;
}

.secondary-btn:hover {
  background-color: rgba(26, 82, 118, 0.1);
}

section {
  padding: 4rem 2rem;
}

section h2 {
  text-align: center;
  font-size: 2rem;
  margin-bottom: 2rem;
  color: #1a5276;
}

.section-cta {
  text-align: center;
  margin-top: 2rem;
}

/* Navbar Styles */
.navbar {
  background-color: white;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 100;
}

.navbar-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 2rem;
}

.navbar-logo {
  font-size: 1.5rem;
  font-weight: 700;
  color: #1a5276;
}

.nav-menu {
  display: flex;
}

.nav-item {
  margin-left: 1.5rem;
}

.nav-link {
  font-weight: 500;
  color: #333;
  transition: color 0.3s ease;
}

.nav-link:hover {
  color: #1a5276;
}

/* Hero Section */
.hero {
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), 
              url('/hero-bg.jpg');
  background-size: cover;
  background-position: center;
  color: white;
  text-align: center;
  padding: 6rem 2rem;
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

/* Expertise Section */
.expertise {
  background-color: white;
}

.expertise-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.expertise-card {
  background-color: #f5f5f5;
  padding: 2rem;
  border-radius: 8px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.expertise-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

.expertise-card h3 {
  color: #1a5276;
  font-size: 1.3rem;
}

.expertise-card ul {
  margin-top: 1rem;
}

.expertise-card li {
  margin-bottom: 0.5rem;
  position: relative;
  padding-left: 1.5rem;
}

.expertise-card li:before {
  content: "✓";
  position: absolute;
  left: 0;
  color: #27ae60;
}

/* Projects Section */
.featured-projects {
  background-color: #f5f9fc;
}

.project-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.project-card {
  background-color: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;
}

.project-card:hover {
  transform: translateY(-5px);
}

.project-card h3 {
  color: #1a5276;
}

.project-metrics {
  margin: 1rem 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.project-metrics span {
  background-color: #e1f5fe;
  padding: 0.5rem;
  border-radius: 4px;
  font-size: 0.9rem;
}

.project-link {
  display: inline-block;
  margin-top: 1rem;
  color: #1a5276;
  font-weight: 600;
}

.project-link:hover {
  text-decoration: underline;
}

/* Publications Section */
.publications-preview {
  background-color: white;
}

.publication-list {
  max-width: 900px;
  margin: 0 auto;
}

.publication-item {
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  border-left: 4px solid #1a5276;
  background-color: #f9f9f9;
}

.publication-item h3 {
  font-size: 1.2rem;
  color: #333;
}

.publication-item p {
  color: #666;
}

/* Contact CTA */
.contact-cta {
  background: linear-gradient(135deg, #1a5276, #2980b9);
  color: white;
  text-align: center;
}

.contact-cta h2 {
  color: white;
}

.contact-cta p {
  max-width: 700px;
  margin: 0 auto 2rem auto;
  font-size: 1.1rem;
}

.contact-cta .btn {
  background-color: white;
  color: #1a5276;
}

.contact-cta .btn:hover {
  background-color: #f5f5f5;
}

/* Page Header */
.page-header {
  background-color: #1a5276;
  color: white;
  text-align: center;
  padding: 4rem 2rem;
}

.page-header h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.page-header p {
  font-size: 1.2rem;
  max-width: 700px;
  margin: 0 auto;
}

/* Projects Page */
.projects-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 3rem 2rem;
}

.project-full-card {
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  padding: 2rem;
  margin-bottom: 2rem;
}

.project-description {
  font-size: 1.2rem;
  color: #555;
  margin-bottom: 1.5rem;
}

.metrics-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin-top: 1rem;
}

.metric-item {
  background-color: #f5f9fc;
  padding: 1rem;
  border-radius: 4px;
}

.tech-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 1rem;
}

.tech-tag {
  background-color: #e1f5fe;
  color: #0277bd;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
}

/* Publications Page */
.publications-container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 3rem 2rem;
}

.publication-card {
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  border-left: 4px solid #1a5276;
  background-color: #f9f9f9;
}

/* Contact Page */
.contact-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 3rem 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.form-group {
  display: flex;
  flex-direction: column;
}

.form-group input,
.form-group textarea {
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
}

/* Responsive Design */
@media (max-width: 768px) {
  .contact-container {
    grid-template-columns: 1fr;
  }
  
  .hero-buttons {
    flex-direction: column;
  }
  
  .nav-menu {
    margin-top: 1rem;
  }
}
"""
    with open('src/App.css', 'w', encoding='utf-8') as f:
        f.write(content)
    print("Created App.css")

def create_navbar_component():
    """Create the Navbar component"""
    content = """import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          RMES
        </Link>
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/" className="nav-link">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/projects" className="nav-link">Projects</Link>
          </li>
          <li className="nav-item">
            <Link to="/publications" className="nav-link">Publications</Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
"""
    with open('src/components/Navbar.js', 'w', encoding='utf-8') as f:
        f.write(content)
    print("Created Navbar.js component")

def create_home_page():
    """Create the HomePage component"""
    content = """import React from 'react';
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
            <Link to="/projects" className="btn primary-btn">View Projects</Link>
            <Link to="/contact" className="btn secondary-btn">Contact Me</Link>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="expertise">
        <h2>Areas of Expertise</h2>
        <div className="expertise-grid">
          <div className="expertise-card">
            <h3>Environmental Engineering</h3>
            <ul>
              <li>Water & Wastewater Treatment</li>
              <li>Denitrifying Bioreactors</li>
              <li>Agricultural Impact Mitigation</li>
              <li>NZ Environmental Regulations</li>
            </ul>
          </div>
          <div className="expertise-card">
            <h3>Bioprocess Engineering</h3>
            <ul>
              <li>Bioreactor Design & Optimization</li>
              <li>Bioethanol Production</li>
              <li>Fermentation Process Control</li>
              <li>Scale-up Methodology</li>
            </ul>
          </div>
          <div className="expertise-card">
            <h3>Analysis & Research</h3>
            <ul>
              <li>Techno-Economic Analysis</li>
              <li>Life Cycle Assessment</li>
              <li>Data Analysis (Python, R)</li>
              <li>Scientific Publication</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="featured-projects">
        <h2>Featured Projects</h2>
        <div className="project-grid">
          <div className="project-card">
            <h3>Enhanced Nitrate Removal in Woodchip Bioreactors</h3>
            <p>Implementation of carbon dosing techniques to improve nitrate removal efficiency in agricultural drainage systems.</p>
            <div className="project-metrics">
              <span>Efficiency Improvement: 30%</span>
              <span>Cost Reduction: 25%</span>
            </div>
            <Link to="/projects" className="project-link">Learn More</Link>
          </div>
          <div className="project-card">
            <h3>Aquatic Mitigation Systems for NES-F Compliance</h3>
            <p>Development of cost-effective mitigation systems for agricultural runoff treatment compliant with NZ regulations.</p>
            <div className="project-metrics">
              <span>Implementation Cost: 20% lower than alternatives</span>
              <span>Treatment Efficiency: 85% contaminant removal</span>
            </div>
            <Link to="/projects" className="project-link">Learn More</Link>
          </div>
        </div>
        <div className="section-cta">
          <Link to="/projects" className="btn primary-btn">View All Projects</Link>
        </div>
      </section>

      {/* Publications Preview */}
      <section className="publications-preview">
        <h2>Recent Publications</h2>
        <div className="publication-list">
          <div className="publication-item">
            <h3>Flow analysis and hydraulic performance of denitrifying bioreactors under different carbon dosing treatments</h3>
            <p>Journal of Environmental Management, 2023</p>
          </div>
          <div className="publication-item">
            <h3>Constant carbon dosing of a pilot-scale denitrifying bioreactor to improve nitrate removal from agricultural tile drainage</h3>
            <p>Ecological Engineering, 2023</p>
          </div>
        </div>
        <div className="section-cta">
          <Link to="/publications" className="btn primary-btn">View All Publications</Link>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="contact-cta">
        <h2>Interested in Collaboration?</h2>
        <p>I'm always open to discussing research projects, consulting opportunities, or innovative solutions for environmental challenges.</p>
        <Link to="/contact" className="btn primary-btn">Get in Touch</Link>
      </section>
    </div>
  );
};

export default HomePage;
"""
    with open('src/pages/HomePage.js', 'w', encoding='utf-8') as f:
        f.write(content)
    print("Created HomePage.js")

def create_projects_page():
    """Create the ProjectsPage component"""
    content = """import React from 'react';

const ProjectsPage = () => {
  const projects = [
    {
      id: 1,
      title: "Enhanced Nitrate Removal in Woodchip Bioreactors",
      description: "Implementation of carbon dosing techniques to improve nitrate removal efficiency in agricultural drainage systems.",
      details: "This project focused on optimizing the nitrate removal capacity of woodchip bioreactors through strategic carbon supplementation. By implementing a controlled dosing system, we were able to enhance denitrification rates while maintaining operational simplicity.",
      metrics: {
        efficiencyImprovement: "30%",
        costReduction: "25%"
      },
      technologies: ["Denitrifying Bioreactors", "Carbon Dosing Systems", "Water Quality Monitoring", "Agricultural Drainage"]
    },
    {
      id: 2,
      title: "Aquatic Mitigation Systems for NES-F Compliance",
      description: "Development of cost-effective mitigation systems for agricultural runoff treatment compliant with NZ regulations.",
      details: "This project involved designing and implementing mitigation systems that help farmers comply with New Zealand's National Environmental Standards for Freshwater (NES-F). The systems were designed with cost-effectiveness and practical implementation in mind.",
      metrics: {
        implementationCost: "20% lower than alternatives",
        treatmentEfficiency: "85% contaminant removal"
      },
      technologies: ["Constructed Wetlands", "Filter Systems", "Regulatory Compliance", "Cost-Benefit Analysis"]
    },
    {
      id: 3,
      title: "Bioethanol Production Optimization",
      description: "Process optimization for bioethanol production using industrial and traditional Saccharomyces cerevisiae strains.",
      details: "This research compared different yeast strains for bioethanol production and optimized fermentation conditions to maximize yield while maintaining process sustainability.",
      metrics: {
        yieldIncrease: "25%",
        processEfficiency: "20% improvement"
      },
      technologies: ["Bioethanol Production", "Fermentation Technology", "Process Optimization", "Sustainable Energy"]
    }
  ];

  return (
    <div className="projects-page">
      <section className="page-header">
        <h1>Projects & Research</h1>
        <p>A collection of my environmental engineering projects and research initiatives</p>
      </section>

      <section className="projects-container">
        {projects.map(project => (
          <div key={project.id} className="project-full-card">
            <h2>{project.title}</h2>
            <p className="project-description">{project.description}</p>
            
            <div className="project-details">
              <h3>Project Details</h3>
              <p>{project.details}</p>
            </div>
            
            <div className="project-metrics-container">
              <h3>Key Metrics</h3>
              <div className="metrics-grid">
                {Object.entries(project.metrics).map(([key, value]) => (
                  <div key={key} className="metric-item">
                    <span className="metric-label">{key.replace(/([A-Z])/g, ' $1').trim()}</span>
                    <span className="metric-value">{value}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="project-technologies">
              <h3>Technologies & Methods</h3>
              <div className="tech-tags">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default ProjectsPage;
"""
    with open('src/pages/ProjectsPage.js', 'w', encoding='utf-8') as f:
        f.write(content)
    print("Created ProjectsPage.js")

def create_publications_page():
    """Create the PublicationsPage component"""
    content = """import React from 'react';

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
      doi: "10.1016/j.jenvman.2023.116926"
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
      doi: "10.1016/j.ecoleng.2022.106851"
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
      doi: "10.1016/j.ecoleng.2022.106818"
    },
    {
      id: 6,
      type: 'conference',
      title: "Carbon dosing enhances nitrate removal effectiveness in denitrifying bioreactors: A field trial in New Zealand",
      authors: "Moghaddam, R., et al.",
      conference: "Diverse Solutions for Efficient Land, Water and Nutrient Use Conference",
      location: "Massey University, NZ",
      year: 2022
    },
    {
      id: 7,
      type: 'conference',
      title: "Enhanced Nitrate Removal with Methanol Dosing in Woodchip Bioreactors: Laboratory and Field Evidence",
      authors: "Moghaddam, R., et al.",
      conference: "Farmed Landscapes Research Centre Conference",
      location: "Massey University, NZ",
      year: 2023
    },
    {
      id: 8,
      type: 'technical',
      title: "Kaiate Stream: assessment of changes in faecal contaminants and turbidity after the implementation of mitigation measures",
      authors: "Hughes, A., Moghaddam, R.",
      publisher: "NIWA Client Report",
      year: 2024,
      reportNumber: "2024008HN",
      pages: "30"
    }
  ];

  return (
    <div className="publications-page">
      <section className="page-header">
        <h1>Publications</h1>
        <p>My research publications in environmental engineering and bioprocesses</p>
      </section>

      <section className="publications-container">
        <h2>Journal Articles</h2>
        <div className="publications-list">
          {publications.filter(pub => pub.type === 'journal').map(publication => (
            <div key={publication.id} className="publication-card">
              <h3>{publication.title}</h3>
              <p className="publication-authors">{publication.authors} ({publication.year})</p>
              <p className="publication-journal">
                {publication.journal}, {publication.volume}, {publication.pages}
              </p>
              {publication.doi && (
                <a href={`https://doi.org/${publication.doi}`} target="_blank" rel="noopener noreferrer" className="publication-link">
                  DOI: {publication.doi}
                </a>
              )}
            </div>
          ))}
        </div>

        <h2>Conference Papers</h2>
        <div className="publications-list">
          {publications.filter(pub => pub.type === 'conference').map(publication => (
            <div key={publication.id} className="publication-card">
              <h3>{publication.title}</h3>
              <p className="publication-authors">{publication.authors} ({publication.year})</p>
              <p className="publication-conference">
                {publication.conference}, {publication.location}
              </p>
            </div>
          ))}
        </div>

        <h2>Technical Reports</h2>
        <div className="publications-list">
          {publications.filter(pub => pub.type === 'technical').map(publication => (
            <div key={publication.id} className="publication-card">
              <h3>{publication.title}</h3>
              <p className="publication-authors">{publication.authors} ({publication.year})</p>
              <p className="publication-publisher">
                {publication.publisher}, {publication.reportNumber}, {publication.pages} pages
              </p>
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
        f.write(content)
    print("Created PublicationsPage.js")

def create_contact_page():
    """Create the ContactPage component"""
    content = """import React from 'react';

const ContactPage = () => {
  return (
    <div className="contact-page">
      <section className="page-header">
        <h1>Contact Me</h1>
        <p>Get in touch for collaborations, consultations, or inquiries</p>
      </section>

      <section className="contact-container">
        <div className="contact-info">
          <h2>Contact Information</h2>
          <div className="contact-details">
            <div className="contact-item">
              <span className="contact-label">Email:</span>
              <span className="contact-value">che.eng@live.com</span>
            </div>
            <div className="contact-item">
              <span className="contact-label">Phone:</span>
              <span className="contact-value">+642108052489</span>
            </div>
            <div className="contact-item">
              <span className="contact-label">Based in:</span>
              <span className="contact-value">New Zealand</span>
            </div>
          </div>

          <div className="social-links">
            <h3>Professional Profiles</h3>
            <div className="social-grid">
              <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer" className="social-link">
                LinkedIn
              </a>
              <a href="https://www.researchgate.net/profile/your-profile" target="_blank" rel="noopener noreferrer" className="social-link">
                ResearchGate
              </a>
              <a href="https://scholar.google.com/citations?user=your-id" target="_blank" rel="noopener noreferrer" className="social-link">
                Google Scholar
              </a>
              <a href="https://niwa.co.nz/profile" target="_blank" rel="noopener noreferrer" className="social-link">
                NIWA Profile
              </a>
            </div>
          </div>
        </div>

        <div className="contact-form-container">
          <h2>Send Me a Message</h2>
          <form className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input type="text" id="subject" name="subject" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="5" required></textarea>
            </div>
            <button type="submit" className="btn primary-btn">Send Message</button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
"""
    with open('src/pages/ContactPage.js', 'w', encoding='utf-8') as f:
        f.write(content)
    print("Created ContactPage.js")

def create_index_html():
    """Create the index.html file"""
    content = """<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <meta
      name="description"
      content="Dr. Reza Moghaddam - Environmental & Bioprocess Engineer Portfolio"
    />
    <meta name="keywords" content="Environmental Engineering, Bioprocess Engineering, Water Treatment, Bioreactors, Nitrate Removal, New Zealand" />
    <meta name="author" content="Dr. Reza Moghaddam" />
    <title>Reza Moghaddam | Environmental Engineer</title>
  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
  </body>
</html>
"""
    with open('public/index.html', 'w', encoding='utf-8') as f:
        f.write(content)
    print("Created index.html")

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
    print("Created package.json")

def create_gitignore():
    """Create the .gitignore file"""
    content = """# See https://help.github.com/articles/ignoring-files/ for more about ignoring files.

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
"""
    with open('.gitignore', 'w', encoding='utf-8') as f:
        f.write(content)
    print("Created .gitignore")

def create_placeholder_image():
    """Create a placeholder text file explaining the need for hero-bg.jpg"""
    content = """# Hero Background Image

Please place a file named 'hero-bg.jpg' in this folder.
This will be used as the background image for the hero section on the homepage.

Recommended:
- A professional image related to environmental engineering
- High resolution (at least 1920x1080)
- Good contrast so that white text remains readable
"""
    with open('public/hero-bg.txt', 'w', encoding='utf-8') as f:
        f.write(content)
    print("Created hero-bg.txt placeholder")

def main():
    """Main function that orchestrates the website creation"""
    print("\n=== Creating React Portfolio Website Structure ===\n")
    
    # Create directory structure
    create_directories()
    
    # Create core React files
    create_app_js()
    create_index_js()
    create_app_css()
    
    # Create components
    create_navbar_component()
    
    # Create pages
    create_home_page()
    create_projects_page()
    create_publications_page()
    create_contact_page()
    
    # Create HTML and config files
    create_index_html()
    create_package_json()
    create_gitignore()
    create_placeholder_image()
    
    print("\n=== Website Structure Created Successfully! ===\n")
    print("Next steps:")
    print("1. Add a background image named 'hero-bg.jpg' to the public folder")
    print("2. Run 'npm install' to install dependencies")
    print("3. Run 'npm start' to preview the website locally")
    print("4. Push to GitHub:")
    print("   git add .")
    print("   git commit -m \"Initial website setup\"")
    print("   git push")
    print("5. Deploy to Netlify:")
    print("   - Connect your GitHub repository")
    print("   - Build command: npm run build")
    print("   - Publish directory: build")

if __name__ == "__main__":
    main()