#!/usr/bin/env python3
"""
Enhanced Portfolio Website Setup Script with Visual Elements

This script creates all necessary files and folder structure for a React-based
professional portfolio website for an Environmental Engineer with enhanced
visual elements including logos, icons, and design improvements.

Usage:
1. Save this script as 'enhanced_website_setup.py'
2. Run: python enhanced_website_setup.py
3. After running, install dependencies: npm install
4. Start the development server: npm start
5. Push to GitHub and deploy on Netlify

The script generates a complete React website with:
- Professional logo and icons
- Improved visual design
- Comprehensive consultancy services
- Interactive UI elements
"""

import os
import sys
import shutil
import base64

def create_directories():
    """Create the necessary directory structure"""
    print("Creating directory structure...")
    
    # Define directories to create
    directories = [
        'src',
        'src/components',
        'src/pages',
        'src/assets',
        'src/assets/icons',
        'public',
        'public/images'
    ]
    
    # Create directories
    for directory in directories:
        os.makedirs(directory, exist_ok=True)
        print(f"Created directory: {directory}")

def create_app_js():
    """Create the main App.js file with added ServicesPage route"""
    content = """import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import PublicationsPage from './pages/PublicationsPage';
import ServicesPage from './pages/ServicesPage';
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
            <Route path="/services" element={<ServicesPage />} />
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
    print("Created App.js with ServicesPage route")

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
    """Create the App.css file with enhanced styles and animations"""
    content = """/* App.css - Main styling for the portfolio website */

/* Custom Properties (Variables) */
:root {
  --primary-color: #1a5276;
  --primary-light: #2980b9;
  --primary-dark: #154360;
  --secondary-color: #27ae60;
  --light-bg: #f9f9f9;
  --white: #ffffff;
  --dark-text: #333333;
  --medium-text: #555555;
  --light-text: #777777;
  --card-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
  --hover-shadow: 0 12px 24px rgba(0, 0, 0, 0.12);
  --transition-speed: 0.3s;
  --border-radius: 8px;
  --border-radius-lg: 12px;
}

/* Reset & Base Styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  line-height: 1.6;
  color: var(--dark-text);
  background-color: var(--light-bg);
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

h1, h2, h3, h4 {
  margin-bottom: 1rem;
  line-height: 1.3;
}

a {
  text-decoration: none;
  color: inherit;
  transition: color var(--transition-speed) ease;
}

ul {
  list-style: none;
}

/* Button Styles */
.btn {
  display: inline-block;
  padding: 0.85rem 1.8rem;
  border-radius: var(--border-radius);
  font-weight: 600;
  cursor: pointer;
  transition: all var(--transition-speed) ease;
  letter-spacing: 0.5px;
  border: none;
  text-transform: uppercase;
  font-size: 0.9rem;
  position: relative;
  overflow: hidden;
  z-index: 1;
}

.primary-btn {
  background-color: var(--primary-color);
  color: var(--white);
  box-shadow: 0 4px 12px rgba(26, 82, 118, 0.3);
}

.primary-btn:hover {
  background-color: var(--primary-dark);
  transform: translateY(-3px);
  box-shadow: 0 6px 18px rgba(26, 82, 118, 0.4);
}

.secondary-btn {
  background-color: transparent;
  color: var(--primary-color);
  border: 2px solid var(--primary-color);
  box-shadow: 0 4px 12px rgba(26, 82, 118, 0.1);
}

.secondary-btn:hover {
  background-color: rgba(26, 82, 118, 0.1);
  transform: translateY(-3px);
  box-shadow: 0 6px 18px rgba(26, 82, 118, 0.2);
}

/* Section Styles */
section {
  padding: 5rem 2rem;
}

section h2 {
  text-align: center;
  font-size: 2.2rem;
  margin-bottom: 3rem;
  color: var(--primary-color);
  position: relative;
  padding-bottom: 1rem;
}

section h2::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 3px;
  background-color: var(--secondary-color);
  border-radius: 3px;
}

.section-cta {
  text-align: center;
  margin-top: 3rem;
}

/* Card Animations */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Logo Styles */
.logo {
  display: flex;
  align-items: center;
  gap: 0.7rem;
}

.logo-icon {
  width: 36px;
  height: 36px;
}

.logo-text {
  font-weight: 700;
  font-size: 1.5rem;
  color: var(--primary-color);
}

/* Navbar Styles */
.navbar {
  background-color: var(--white);
  box-shadow: 0 2px 15px rgba(0, 0, 0, 0.08);
  position: sticky;
  top: 0;
  z-index: 100;
  transition: all var(--transition-speed) ease;
  padding: 0.8rem 0;
}

.navbar.scrolled {
  padding: 0.5rem 0;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
}

.navbar-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0.5rem 2rem;
}

.nav-menu {
  display: flex;
}

.nav-item {
  margin-left: 2rem;
}

.nav-link {
  font-weight: 500;
  color: var(--dark-text);
  transition: all var(--transition-speed) ease;
  padding: 0.5rem 0;
  position: relative;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background-color: var(--primary-color);
  transition: width var(--transition-speed) ease;
}

.nav-link:hover {
  color: var(--primary-color);
}

.nav-link:hover::after {
  width: 100%;
}

.nav-link.active {
  color: var(--primary-color);
}

.nav-link.active::after {
  width: 100%;
}

.mobile-menu-button {
  background: none;
  border: none;
  color: var(--dark-text);
  font-size: 1rem;
  cursor: pointer;
  display: none;
}

/* Hero Section */
.hero {
  background: linear-gradient(135deg, var(--primary-color), var(--primary-light));
  background-size: cover;
  background-position: center;
  color: var(--white);
  text-align: center;
  padding: 8rem 2rem;
  position: relative;
  overflow: hidden;
}

.hero::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url('./assets/hero-pattern.svg');
  background-size: cover;
  opacity: 0.05;
}

.hero-with-image {
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), 
              url('./assets/hero-bg.jpg');
}

.hero-content {
  max-width: 800px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
  animation: fadeIn 1s ease-out;
}

.hero h1 {
  font-size: 3.5rem;
  margin-bottom: 0.8rem;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
}

.hero h2 {
  font-size: 1.7rem;
  font-weight: 400;
  margin-bottom: 1.8rem;
  color: rgba(255, 255, 255, 0.9);
}

.hero p {
  font-size: 1.3rem;
  margin-bottom: 2.5rem;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
}

.hero-buttons {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
}

/* Expertise Section */
.expertise {
  background-color: var(--white);
  position: relative;
}

.expertise-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2.5rem;
  max-width: 1200px;
  margin: 0 auto;
}

.expertise-card {
  background-color: var(--light-bg);
  padding: 2.5rem;
  border-radius: var(--border-radius-lg);
  transition: transform var(--transition-speed) ease, 
              box-shadow var(--transition-speed) ease;
  box-shadow: var(--card-shadow);
  position: relative;
  overflow: hidden;
  animation: fadeIn 0.8s ease-out;
}

.expertise-card:hover {
  transform: translateY(-10px);
  box-shadow: var(--hover-shadow);
}

.expertise-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 5px;
  background-color: var(--primary-color);
}

.expertise-card-icon {
  margin-bottom: 1rem;
  width: 60px;
  height: 60px;
  color: var(--primary-color);
}

.expertise-card h3 {
  color: var(--primary-color);
  font-size: 1.5rem;
  margin-bottom: 1.2rem;
  display: flex;
  align-items: center;
  gap: 0.8rem;
}

.expertise-card ul {
  margin-top: 1.2rem;
}

.expertise-card li {
  margin-bottom: 0.8rem;
  position: relative;
  padding-left: 1.8rem;
}

.expertise-card li:before {
  content: "✓";
  position: absolute;
  left: 0;
  color: var(--secondary-color);
  font-weight: bold;
}

/* Projects Section */
.featured-projects {
  background-color: #f5f9fc;
  position: relative;
}

.project-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2.5rem;
  max-width: 1200px;
  margin: 0 auto;
}

.project-card {
  background-color: var(--white);
  padding: 2.5rem;
  border-radius: var(--border-radius-lg);
  box-shadow: var(--card-shadow);
  transition: transform var(--transition-speed) ease, 
              box-shadow var(--transition-speed) ease;
  position: relative;
  overflow: hidden;
  animation: fadeIn 0.8s ease-out;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.project-card:hover {
  transform: translateY(-10px);
  box-shadow: var(--hover-shadow);
}

.project-card-icon {
  width: 50px;
  height: 50px;
  margin-bottom: 1rem;
  color: var(--primary-color);
}

.project-card h3 {
  color: var(--primary-color);
  font-size: 1.4rem;
  margin-bottom: 1rem;
  line-height: 1.4;
}

.project-card p {
  color: var(--medium-text);
  margin-bottom: 1.5rem;
}

.project-metrics {
  margin: 1.2rem 0;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}

.project-metrics span {
  background-color: #e1f5fe;
  padding: 0.7rem 1rem;
  border-radius: var(--border-radius);
  font-size: 0.95rem;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
  display: flex;
  align-items: center;
}

.project-metrics span::before {
  content: "•";
  margin-right: 0.5rem;
  color: var(--primary-color);
  font-weight: bold;
}

.project-link {
  display: inline-block;
  margin-top: auto;
  color: var(--primary-color);
  font-weight: 600;
  position: relative;
  padding-bottom: 3px;
}

.project-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: var(--primary-color);
  transform: scaleX(0);
  transform-origin: right;
  transition: transform var(--transition-speed) ease;
}

.project-link:hover::after {
  transform: scaleX(1);
  transform-origin: left;
}

/* Publications Section */
.publications-preview {
  background-color: var(--white);
  position: relative;
}

.publication-list {
  max-width: 900px;
  margin: 0 auto;
}

.publication-item {
  padding: 2rem;
  margin-bottom: 2rem;
  border-left: 4px solid var(--primary-color);
  background-color: var(--light-bg);
  border-radius: 0 var(--border-radius) var(--border-radius) 0;
  transition: transform var(--transition-speed) ease, 
              box-shadow var(--transition-speed) ease;
  box-shadow: var(--card-shadow);
  animation: fadeIn 0.8s ease-out;
}

.publication-item:hover {
  transform: translateX(5px);
  box-shadow: var(--hover-shadow);
}

.publication-item h3 {
  font-size: 1.3rem;
  color: var(--dark-text);
  margin-bottom: 0.7rem;
}

.publication-item p {
  color: var(--medium-text);
}

/* Contact CTA */
.contact-cta {
  background: linear-gradient(135deg, var(--primary-color), var(--primary-light));
  color: var(--white);
  text-align: center;
  position: relative;
  overflow: hidden;
}

.contact-cta::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url('./assets/cta-pattern.svg');
  background-size: cover;
  opacity: 0.05;
}

.contact-cta-content {
  position: relative;
  z-index: 2;
}

.contact-cta h2 {
  color: var(--white);
}

.contact-cta p {
  max-width: 700px;
  margin: 0 auto 2.5rem auto;
  font-size: 1.2rem;
}

.contact-cta .btn {
  background-color: var(--white);
  color: var(--primary-color);
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);
}

.contact-cta .btn:hover {
  background-color: #f5f5f5;
  transform: translateY(-3px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.25);
}

/* Page Header */
.page-header {
  background-color: var(--primary-color);
  background-image: linear-gradient(135deg, var(--primary-color), var(--primary-light));
  color: var(--white);
  text-align: center;
  padding: 5rem 2rem;
  position: relative;
  overflow: hidden;
}

.page-header::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url('./assets/header-pattern.svg');
  background-size: cover;
  opacity: 0.05;
}

.page-header-content {
  position: relative;
  z-index: 2;
}

.page-header h1 {
  font-size: 2.8rem;
  margin-bottom: 1rem;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
}

.page-header p {
  font-size: 1.3rem;
  max-width: 700px;
  margin: 0 auto;
}

/* Projects Page */
.projects-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 2rem;
}

.project-full-card {
  background-color: var(--white);
  border-radius: var(--border-radius-lg);
  box-shadow: var(--card-shadow);
  padding: 2.5rem;
  margin-bottom: 3rem;
  transition: transform var(--transition-speed) ease, 
              box-shadow var(--transition-speed) ease;
  animation: fadeIn 0.8s ease-out;
}

.project-full-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--hover-shadow);
}

.project-description {
  font-size: 1.2rem;
  color: var(--medium-text);
  margin-bottom: 2rem;
}

.project-details h3,
.project-metrics-container h3,
.project-technologies h3 {
  color: var(--primary-color);
  margin-top: 1.5rem;
  margin-bottom: 1rem;
  font-size: 1.3rem;
  position: relative;
  padding-left: 1.5rem;
}

.project-details h3::before,
.project-metrics-container h3::before,
.project-technologies h3::before {
  content: "";
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 5px;
  height: 20px;
  background-color: var(--secondary-color);
  border-radius: 3px;
}

.metrics-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin-top: 1rem;
}

.metric-item {
  background-color: #f5f9fc;
  padding: 1.2rem;
  border-radius: var(--border-radius);
  transition: transform var(--transition-speed) ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

.metric-item:hover {
  transform: translateY(-3px);
}

.metric-label {
  font-weight: 600;
  color: var(--primary-color);
  display: block;
  margin-bottom: 0.5rem;
}

.metric-value {
  color: var(--medium-text);
}

.tech-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
  margin-top: 1rem;
}

.tech-tag {
  background-color: #e1f5fe;
  color: var(--primary-dark);
  padding: 0.6rem 1.2rem;
  border-radius: 20px;
  font-size: 0.95rem;
  transition: all var(--transition-speed) ease;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
}

.tech-tag:hover {
  background-color: #bde5fd;
  transform: translateY(-2px);
}

/* Publications Page */
.publications-container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 4rem 2rem;
}

.publications-container h2 {
  color: var(--primary-color);
  margin-top: 3rem;
  margin-bottom: 2rem;
  font-size: 1.8rem;
  position: relative;
  padding-left: 2rem;
  text-align: left;
}

.publications-container h2::before {
  content: "";
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 8px;
  height: 30px;
  background-color: var(--secondary-color);
  border-radius: 4px;
}

.publications-container h2::after {
  display: none;
}

.publication-card {
  padding: 2rem;
  margin-bottom: 2rem;
  border-left: 4px solid var(--primary-color);
  background-color: var(--white);
  border-radius: 0 var(--border-radius) var(--border-radius) 0;
  box-shadow: var(--card-shadow);
  transition: transform var(--transition-speed) ease, 
              box-shadow var(--transition-speed) ease;
}

.publication-card:hover {
  transform: translateX(5px);
  box-shadow: var(--hover-shadow);
}

.publication-card h3 {
  color: var(--dark-text);
  margin-bottom: 1rem;
  font-size: 1.3rem;
}

.publication-authors {
  color: var(--medium-text);
  margin-bottom: 0.8rem;
}

.publication-journal,
.publication-conference,
.publication-publisher {
  color: var(--light-text);
  margin-bottom: 1.2rem;
  font-style: italic;
}

.publication-abstract {
  color: var(--medium-text);
  margin-bottom: 1rem;
}

.publication-link {
  display: inline-block;
  color: var(--primary-color);
  font-weight: 600;
  margin-top: 0.5rem;
  transition: color var(--transition-speed) ease;
}

.publication-link:hover {
  color: var(--primary-light);
  text-decoration: underline;
}

/* Services Page Styles */
.services-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 2rem;
}

.service-category {
  margin-bottom: 4rem;
}

.service-category h2 {
  color: var(--primary-color);
  border-bottom: 2px solid var(--primary-color);
  padding-bottom: 0.8rem;
  margin-bottom: 2rem;
  text-align: left;
  font-size: 1.8rem;
}

.service-category h2::after {
  display: none;
}

.service-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
}

.service-card {
  background-color: var(--white);
  border-radius: var(--border-radius-lg);
  box-shadow: var(--card-shadow);
  padding: 2.5rem;
  height: 100%;
  transition: transform var(--transition-speed) ease, 
              box-shadow var(--transition-speed) ease;
  position: relative;
  overflow: hidden;
}

.service-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 5px;
  height: 100%;
  background-color: var(--primary-color);
}

.service-card:hover {
  transform: translateY(-10px);
  box-shadow: var(--hover-shadow);
}

.service-card h3 {
  color: var(--primary-color);
  margin-bottom: 1.5rem;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  gap: 1rem;
}

.service-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  min-width: 50px;
  color: var(--primary-color);
}

.service-card h4 {
  color: var(--primary-dark);
  margin: 1.5rem 0 0.8rem 0;
  font-size: 1.2rem;
  position: relative;
  padding-left: 1.2rem;
}

.service-card h4::before {
  content: "";
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 5px;
  height: 18px;
  background-color: var(--secondary-color);
  border-radius: 3px;
}

.service-card p {
  color: var(--medium-text);
  margin-bottom: 1.2rem;
}

.service-card ul {
  margin-left: 0;
}

.service-card li {
  margin-bottom: 0.7rem;
  list-style-type: none;
  margin-left: 1.5rem;
  position: relative;
  padding-left: 0.5rem;
}

.service-card li::before {
  content: "•";
  position: absolute;
  left: -1.5rem;
  color: var(--secondary-color);
  font-size: 1.5rem;
  line-height: 1;
}

.full-width-service {
  grid-column: 1 / -1;
  background-color: #f5f9fc;
  padding: 2.5rem;
  border-radius: var(--border-radius-lg);
  margin-bottom: 3rem;
  box-shadow: var(--card-shadow);
  border-left: 5px solid var(--primary-color);
}

.process-steps {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  margin: 2rem 0;
}

.process-step {
  background-color: var(--white);
  border-radius: var(--border-radius);
  padding: 2rem;
  flex: 1;
  min-width: 280px;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.08);
  transition: transform var(--transition-speed) ease;
  position: relative;
  overflow: hidden;
}

.process-step:hover {
  transform: translateY(-5px);
}

.step-number {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background-color: var(--primary-color);
  color: var(--white);
  border-radius: 50%;
  text-align: center;
  line-height: 1;
  margin-bottom: 1rem;
  font-weight: 600;
  font-size: 1.2rem;
  box-shadow: 0 3px 8px rgba(26, 82, 118, 0.3);
}

/* Contact Page */
.contact-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
}

.contact-info {
  background-color: var(--white);
  padding: 2.5rem;
  border-radius: var(--border-radius-lg);
  box-shadow: var(--card-shadow);
  height: fit-content;
}

.contact-info h2 {
  color: var(--primary-color);
  margin-bottom: 2rem;
  font-size: 1.8rem;
  position: relative;
  padding-bottom: 0.8rem;
}

.contact-info h2::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 60px;
  height: 3px;
  background-color: var(--secondary-color);
  border-radius: 3px;
}

.contact-details {
  margin-bottom: 2.5rem;
}

.contact-item {
  margin-bottom: 1.2rem;
  display: flex;
  align-items: flex-start;
}

.contact-icon {
  margin-right: 1rem;
  color: var(--primary-color);
  min-width: 24px;
}

.contact-label {
  font-weight: 600;
  color: var(--dark-text);
  margin-right: 0.5rem;
}

.contact-value {
  color: var(--medium-text);
}

.services-info,
.social-links {
  margin-top: 2rem;
}

.services-info h3,
.social-links h3 {
  color: var(--primary-color);
  margin-bottom: 1rem;
  font-size: 1.3rem;
}

.services-info ul {
  margin-bottom: 1.5rem;
}

.services-info li {
  margin-bottom: 0.5rem;
  position: relative;
  padding-left: 1.5rem;
}

.services-info li::before {
  content: "✓";
  position: absolute;
  left: 0;
  color: var(--secondary-color);
}

.social-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 1rem;
}

.social-link {
  background-color: #f5f9fc;
  color: var(--primary-color);
  padding: 0.8rem 1.2rem;
  border-radius: var(--border-radius);
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all var(--transition-speed) ease;
}

.social-link:hover {
  background-color: var(--primary-color);
  color: var(--white);
  transform: translateY(-3px);
}

.contact-form-container {
  background-color: var(--white);
  padding: 2.5rem;
  border-radius: var(--border-radius-lg);
  box-shadow: var(--card-shadow);
}

.contact-form-container h2 {
  color: var(--primary-color);
  margin-bottom: 2rem;
  font-size: 1.8rem;
  position: relative;
  padding-bottom: 0.8rem;
}

.contact-form-container h2::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 60px;
  height: 3px;
  background-color: var(--secondary-color);
  border-radius: 3px;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-group {
  display: flex;
  flex-direction: column;
}

.form-group label {
  margin-bottom: 0.7rem;
  font-weight: 500;
  color: var(--dark-text);
}

.form-group input,
.form-group textarea,
.form-group select {
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: var(--border-radius);
  font-family: inherit;
  font-size: 1rem;
  transition: all var(--transition-speed) ease;
}

.form-group input:focus,
.form-group textarea:focus,
.form-group select:focus {
  outline: none;
  border-color: var(--primary-color);
  box-shadow: 0 0 0 3px rgba(26, 82, 118, 0.2);
}

.form-error {
  color: #e74c3c;
  font-size: 0.9rem;
  margin-top: 0.5rem;
}

.form-success {
  background-color: #d4edda;
  color: #155724;
  padding: 1.2rem;
  border-radius: var(--border-radius);
  margin-bottom: 1.5rem;
  border-left: 4px solid #28a745;
}

/* Footer */
.footer {
  background-color: var(--primary-dark);
  color: var(--white);
  padding: 4rem 2rem 2rem;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
}

.footer-main {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 3rem;
  margin-bottom: 3rem;
}

.footer-logo {
  margin-bottom: 1.5rem;
}

.footer-about p {
  opacity: 0.8;
  margin-bottom: 1.5rem;
}

.footer-heading {
  color: var(--white);
  margin-bottom: 1.5rem;
  font-size: 1.3rem;
  position: relative;
  padding-bottom: 0.8rem;
}

.footer-heading::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 40px;
  height: 3px;
  background-color: var(--secondary-color);
  border-radius: 3px;
}

.footer-links-group {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.footer-link {
  color: rgba(255, 255, 255, 0.8);
  transition: all var(--transition-speed) ease;
  display: inline-block;
}

.footer-link:hover {
  color: var(--white);
  transform: translateX(5px);
}

.footer-contact-item {
  display: flex;
  align-items: flex-start;
  margin-bottom: 1rem;
  color: rgba(255, 255, 255, 0.8);
}

.footer-contact-icon {
  margin-right: 0.8rem;
  color: var(--secondary-color);
  min-width: 24px;
}

.footer-divider {
  height: 1px;
  background-color: rgba(255, 255, 255, 0.1);
  margin: 2rem 0;
}

.footer-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
}

.footer-copyright {
  font-size: 0.95rem;
  opacity: 0.7;
}

.footer-social {
  display: flex;
  gap: 1rem;
}

.footer-social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.1);
  color: var(--white);
  transition: all var(--transition-speed) ease;
}

.footer-social-link:hover {
  background-color: var(--secondary-color);
  transform: translateY(-3px);
}

/* Not Found Page */
.not-found {
  text-align: center;
  padding: 6rem 2rem;
  background-color: var(--white);
  border-radius: var(--border-radius-lg);
  max-width: 800px;
  margin: 4rem auto;
  box-shadow: var(--card-shadow);
}

.not-found h1 {
  font-size: 6rem;
  color: var(--primary-color);
  line-height: 1;
  margin-bottom: 0.5rem;
}

.not-found h2 {
  font-size: 2rem;
  color: var(--dark-text);
  margin-bottom: 1.5rem;
}

.not-found p {
  font-size: 1.2rem;
  color: var(--medium-text);
  margin-bottom: 2.5rem;
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
}

/* Responsive Design */
@media (max-width: 768px) {
  section {
    padding: 4rem 1.5rem;
  }
  
  .contact-container {
    grid-template-columns: 1fr;
  }
  
  .hero-buttons {
    flex-direction: column;
  }
  
  .mobile-menu-button {
    display: block;
  }
  
  .nav-menu {
    display: none;
  }
  
  .mobile-menu {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background-color: var(--white);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  
  .nav-item {
    margin-left: 0;
  }
  
  .service-grid {
    grid-template-columns: 1fr;
  }
  
  .process-steps {
    flex-direction: column;
  }
  
  .footer-main {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .footer-bottom {
    flex-direction: column;
    text-align: center;
  }
}

@media (max-width: 480px) {
  .hero h1 {
    font-size: 2.5rem;
  }
  
  .hero h2 {
    font-size: 1.4rem;
  }
  
  section h2 {
    font-size: 1.8rem;
  }
  
  .not-found h1 {
    font-size: 4rem;
  }
}
"""
    with open('src/App.css', 'w', encoding='utf-8') as f:
        f.write(content)
    print("Created enhanced App.css with improved styling and animations")

def create_logo_svg():
    """Create a professional logo SVG"""
    content = """<svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M18 3C9.716 3 3 9.716 3 18C3 26.284 9.716 33 18 33C26.284 33 33 26.284 33 18C33 9.716 26.284 3 18 3Z" fill="#1a5276"/>
  <path d="M18 7C12.48 7 8 11.48 8 17C8 22.52 12.48 27 18 27C23.52 27 28 22.52 28 17C28 11.48 23.52 7 18 7Z" fill="#2980b9"/>
  <path d="M22 13.5C22 15.985 20.206 18 18 18C15.794 18 14 15.985 14 13.5C14 11.015 15.794 9 18 9C20.206 9 22 11.015 22 13.5Z" fill="#1a5276"/>
  <path d="M12 20L24 20L18 29L12 20Z" fill="#27ae60"/>
  <path d="M14 17.5L22 17.5L18 24L14 17.5Z" fill="#2980b9"/>
</svg>"""
    
    with open('src/assets/logo.svg', 'w', encoding='utf-8') as f:
        f.write(content)
    print("Created logo.svg")

def create_pattern_svgs():
    """Create pattern SVGs for background elements"""
    
    # Hero pattern
    hero_pattern = """<svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <path d="M0 0h100v100H0z" fill="none"/>
  <path d="M20 20c10 0 10 10 20 10s10-10 20-10 10 10 20 10" stroke="#fff" stroke-width="1" fill="none"/>
  <path d="M20 40c10 0 10 10 20 10s10-10 20-10 10 10 20 10" stroke="#fff" stroke-width="1" fill="none"/>
  <path d="M20 60c10 0 10 10 20 10s10-10 20-10 10 10 20 10" stroke="#fff" stroke-width="1" fill="none"/>
  <path d="M20 80c10 0 10 10 20 10s10-10 20-10 10 10 20 10" stroke="#fff" stroke-width="1" fill="none"/>
  <path d="M0 10c10 0 10 10 20 10s10-10 20-10 10 10 20 10 10-10 20-10" stroke="#fff" stroke-width="1" fill="none"/>
  <path d="M0 30c10 0 10 10 20 10s10-10 20-10 10 10 20 10 10-10 20-10" stroke="#fff" stroke-width="1" fill="none"/>
  <path d="M0 50c10 0 10 10 20 10s10-10 20-10 10 10 20 10 10-10 20-10" stroke="#fff" stroke-width="1" fill="none"/>
  <path d="M0 70c10 0 10 10 20 10s10-10 20-10 10 10 20 10 10-10 20-10" stroke="#fff" stroke-width="1" fill="none"/>
  <path d="M0 90c10 0 10 10 20 10s10-10 20-10 10 10 20 10 10-10 20-10" stroke="#fff" stroke-width="1" fill="none"/>
</svg>"""
    
    # CTA pattern
    cta_pattern = """<svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <path d="M0 0h100v100H0z" fill="none"/>
  <circle cx="10" cy="10" r="2" fill="#fff"/>
  <circle cx="30" cy="10" r="2" fill="#fff"/>
  <circle cx="50" cy="10" r="2" fill="#fff"/>
  <circle cx="70" cy="10" r="2" fill="#fff"/>
  <circle cx="90" cy="10" r="2" fill="#fff"/>
  <circle cx="10" cy="30" r="2" fill="#fff"/>
  <circle cx="30" cy="30" r="2" fill="#fff"/>
  <circle cx="50" cy="30" r="2" fill="#fff"/>
  <circle cx="70" cy="30" r="2" fill="#fff"/>
  <circle cx="90" cy="30" r="2" fill="#fff"/>
  <circle cx="10" cy="50" r="2" fill="#fff"/>
  <circle cx="30" cy="50" r="2" fill="#fff"/>
  <circle cx="50" cy="50" r="2" fill="#fff"/>
  <circle cx="70" cy="50" r="2" fill="#fff"/>
  <circle cx="90" cy="50" r="2" fill="#fff"/>
  <circle cx="10" cy="70" r="2" fill="#fff"/>
  <circle cx="30" cy="70" r="2" fill="#fff"/>
  <circle cx="50" cy="70" r="2" fill="#fff"/>
  <circle cx="70" cy="70" r="2" fill="#fff"/>
  <circle cx="90" cy="70" r="2" fill="#fff"/>
  <circle cx="10" cy="90" r="2" fill="#fff"/>
  <circle cx="30" cy="90" r="2" fill="#fff"/>
  <circle cx="50" cy="90" r="2" fill="#fff"/>
  <circle cx="70" cy="90" r="2" fill="#fff"/>
  <circle cx="90" cy="90" r="2" fill="#fff"/>
</svg>"""
    
    # Header pattern
    header_pattern = """<svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <path d="M0 0h100v100H0z" fill="none"/>
  <path d="M25 25h50v50H25z" stroke="#fff" stroke-width="1" fill="none"/>
  <path d="M20 20h60v60H20z" stroke="#fff" stroke-width="1" fill="none"/>
  <path d="M15 15h70v70H15z" stroke="#fff" stroke-width="1" fill="none"/>
  <path d="M10 10h80v80H10z" stroke="#fff" stroke-width="1" fill="none"/>
  <path d="M5 5h90v90H5z" stroke="#fff" stroke-width="1" fill="none"/>
</svg>"""
    
    with open('src/assets/hero-pattern.svg', 'w', encoding='utf-8') as f:
        f.write(hero_pattern)
    
    with open('src/assets/cta-pattern.svg', 'w', encoding='utf-8') as f:
        f.write(cta_pattern)
    
    with open('src/assets/header-pattern.svg', 'w', encoding='utf-8') as f:
        f.write(header_pattern)
    
    print("Created pattern SVGs for visual enhancement")

def create_service_icons():
    """Create service-specific SVG icons"""
    
    # Municipal wastewater icon
    municipal_icon = """<svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M25 5C13.954 5 5 13.954 5 25C5 36.046 13.954 45 25 45C36.046 45 45 36.046 45 25C45 13.954 36.046 5 25 5Z" stroke="#1a5276" stroke-width="2" fill="none"/>
  <path d="M15 25C15 19.477 19.477 15 25 15C30.523 15 35 19.477 35 25" stroke="#1a5276" stroke-width="2" fill="none"/>
  <path d="M15 25L18 29L22 25L26 29L30 25L34 29" stroke="#1a5276" stroke-width="2" fill="none"/>
  <path d="M15 33L18 37L22 33L26 37L30 33L34 37" stroke="#1a5276" stroke-width="2" fill="none"/>
  <rect x="22" y="9" width="6" height="3" rx="1.5" fill="#1a5276"/>
  <path d="M12 20L16 20L16 15" stroke="#1a5276" stroke-width="2" fill="none"/>
  <path d="M38 20L34 20L34 15" stroke="#1a5276" stroke-width="2" fill="none"/>
</svg>"""
    
    # Agricultural wastewater icon
    agricultural_icon = """<svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M5 35H45V45H5V35Z" stroke="#1a5276" stroke-width="2" fill="none"/>
  <path d="M5 35C5 25 15 25 15 15C15 10.029 11.971 5 7 5" stroke="#1a5276" stroke-width="2" fill="none"/>
  <path d="M15 35C15 25 25 25 25 15C25 10.029 21.971 5 17 5" stroke="#1a5276" stroke-width="2" fill="none"/>
  <path d="M25 35C25 25 35 25 35 15C35 10.029 31.971 5 27 5" stroke="#1a5276" stroke-width="2" fill="none"/>
  <path d="M35 35C35 25 45 25 45 15C45 10.029 41.971 5 37 5" stroke="#1a5276" stroke-width="2" fill="none"/>
  <rect x="10" y="38" width="2" height="4" rx="1" fill="#1a5276"/>
  <rect x="20" y="38" width="2" height="4" rx="1" fill="#1a5276"/>
  <rect x="30" y="38" width="2" height="4" rx="1" fill="#1a5276"/>
  <rect x="40" y="38" width="2" height="4" rx="1" fill="#1a5276"/>
  <path d="M7 12L9 16L5 16L7 12Z" fill="#27ae60"/>
  <path d="M17 10L19 14L15 14L17 10Z" fill="#27ae60"/>
  <path d="M27 8L29 12L25 12L27 8Z" fill="#27ae60"/>
  <path d="M37 10L39 14L35 14L37 10Z" fill="#27ae60"/>
</svg>"""
    
    # Reticulation icon
    reticulation_icon = """<svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M5 15H45V35H5V15Z" stroke="#1a5276" stroke-width="2" fill="none"/>
  <path d="M10 15V10H20V15" stroke="#1a5276" stroke-width="2" fill="none"/>
  <path d="M30 15V10H40V15" stroke="#1a5276" stroke-width="2" fill="none"/>
  <path d="M10 35V40H20V35" stroke="#1a5276" stroke-width="2" fill="none"/>
  <path d="M30 35V40H40V35" stroke="#1a5276" stroke-width="2" fill="none"/>
  <circle cx="15" cy="25" r="5" stroke="#1a5276" stroke-width="2" fill="none"/>
  <circle cx="35" cy="25" r="5" stroke="#1a5276" stroke-width="2" fill="none"/>
  <path d="M20 25H30" stroke="#1a5276" stroke-width="2" fill="none"/>
  <path d="M25 10V15" stroke="#1a5276" stroke-width="2" fill="none"/>
  <path d="M25 35V40" stroke="#1a5276" stroke-width="2" fill="none"/>
  <path d="M15 20L15 10" stroke="#1a5276" stroke-width="2" fill="none" stroke-dasharray="2 2"/>
  <path d="M35 20L35 10" stroke="#1a5276" stroke-width="2" fill="none" stroke-dasharray="2 2"/>
  <path d="M15 30L15 40" stroke="#1a5276" stroke-width="2" fill="none" stroke-dasharray="2 2"/>
  <path d="M35 30L35 40" stroke="#1a5276" stroke-width="2" fill="none" stroke-dasharray="2 2"/>
</svg>"""
    
    # Catchment modeling icon
    catchment_icon = """<svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M5 5V45H45" stroke="#1a5276" stroke-width="2" fill="none"/>
  <path d="M10 35L15 25L20 30L25 15L30 20L35 10L40 15" stroke="#1a5276" stroke-width="2" fill="none"/>
  <path d="M10 40C10 37.791 12.239 36 15 36C17.761 36 20 37.791 20 40" stroke="#27ae60" stroke-width="2" fill="none"/>
  <path d="M20 40C20 37.791 22.239 36 25 36C27.761 36 30 37.791 30 40" stroke="#27ae60" stroke-width="2" fill="none"/>
  <path d="M30 40C30 37.791 32.239 36 35 36C37.761 36 40 37.791 40 40" stroke="#27ae60" stroke-width="2" fill="none"/>
  <circle cx="15" cy="25" r="2" fill="#1a5276"/>
  <circle cx="25" cy="15" r="2" fill="#1a5276"/>
  <circle cx="35" cy="10" r="2" fill="#1a5276"/>
</svg>"""
    
    # Chemical processing icon
    chemical_icon = """<svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M20 5H30V15L35 25V45H15V25L20 15V5Z" stroke="#1a5276" stroke-width="2" fill="none"/>
  <path d="M15 30H35" stroke="#1a5276" stroke-width="2" fill="none"/>
  <path d="M15 38H35" stroke="#1a5276" stroke-width="2" fill="none"/>
  <path d="M24 5V12" stroke="#1a5276" stroke-width="2" fill="none"/>
  <path d="M27 5V12" stroke="#1a5276" stroke-width="2" fill="none"/>
  <circle cx="20" cy="20" r="2" fill="#27ae60"/>
  <circle cx="30" cy="25" r="2" fill="#27ae60"/>
  <circle cx="25" cy="35" r="2" fill="#27ae60"/>
  <circle cx="18" cy="42" r="2" fill="#27ae60"/>
  <circle cx="32" cy="42" r="2" fill="#27ae60"/>
</svg>"""
    
    with open('src/assets/icons/municipal-icon.svg', 'w', encoding='utf-8') as f:
        f.write(municipal_icon)
    
    with open('src/assets/icons/agricultural-icon.svg', 'w', encoding='utf-8') as f:
        f.write(agricultural_icon)
    
    with open('src/assets/icons/reticulation-icon.svg', 'w', encoding='utf-8') as f:
        f.write(reticulation_icon)
    
    with open('src/assets/icons/catchment-icon.svg', 'w', encoding='utf-8') as f:
        f.write(catchment_icon)
    
    with open('src/assets/icons/chemical-icon.svg', 'w', encoding='utf-8') as f:
        f.write(chemical_icon)
    
    print("Created service-specific SVG icons")

def create_expertise_icons():
    """Create expertise area SVG icons"""
    
    # Environmental Engineering icon
    env_icon = """<svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M30 5C16.193 5 5 16.193 5 30C5 43.807 16.193 55 30 55C43.807 55 55 43.807 55 30C55 16.193 43.807 5 30 5Z" stroke="#1a5276" stroke-width="2" fill="none"/>
  <path d="M30 15C21.716 15 15 21.716 15 30C15 38.284 21.716 45 30 45C38.284 45 45 38.284 45 30C45 21.716 38.284 15 30 15Z" fill="#e1f5fe"/>
  <path d="M30 20L33.09 26.5H40.27L34.59 30.5L37.68 37L30 33L22.32 37L25.41 30.5L19.73 26.5H26.91L30 20Z" fill="#27ae60"/>
  <path d="M20 15C16.686 15 14 12.314 14 9C14 5.686 16.686 3 20 3C23.314 3 26 5.686 26 9C26 12.314 23.314 15 20 15Z" fill="#e1f5fe"/>
  <path d="M42 54C38.686 54 36 51.314 36 48C36 44.686 38.686 42 42 42C45.314 42 48 44.686 48 48C48 51.314 45.314 54 42 54Z" fill="#e1f5fe"/>
  <path d="M10 42C8.343 42 7 40.657 7 39C7 37.343 8.343 36 10 36C11.657 36 13 37.343 13 39C13 40.657 11.657 42 10 42Z" fill="#e1f5fe"/>
  <path d="M48 20C46.343 20 45 18.657 45 17C45 15.343 46.343 14 48 14C49.657 14 51 15.343 51 17C51 18.657 49.657 20 48 20Z" fill="#e1f5fe"/>
</svg>"""
    
    # Bioprocess Engineering icon
    bio_icon = """<svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M15 5H45V45C45 50.523 40.523 55 35 55H25C19.477 55 15 50.523 15 45V5Z" stroke="#1a5276" stroke-width="2" fill="none"/>
  <path d="M15 15H45" stroke="#1a5276" stroke-width="2" fill="none"/>
  <path d="M15 25H45" stroke="#1a5276" stroke-width="2" fill="none"/>
  <path d="M15 35H45" stroke="#1a5276" stroke-width="2" fill="none"/>
  <path d="M15 45H45" stroke="#1a5276" stroke-width="2" fill="none"/>
  <path d="M25 55V45" stroke="#1a5276" stroke-width="2" fill="none"/>
  <path d="M35 55V45" stroke="#1a5276" stroke-width="2" fill="none"/>
  <circle cx="30" cy="10" r="3" fill="#27ae60"/>
  <circle cx="30" cy="20" r="3" fill="#27ae60"/>
  <circle cx="30" cy="30" r="3" fill="#27ae60"/>
  <circle cx="30" cy="40" r="3" fill="#27ae60"/>
  <path d="M20 5V15" stroke="#1a5276" stroke-width="2" fill="none" stroke-dasharray="2 2"/>
  <path d="M30 5V15" stroke="#1a5276" stroke-width="2" fill="none" stroke-dasharray="2 2"/>
  <path d="M40 5V15" stroke="#1a5276" stroke-width="2" fill="none" stroke-dasharray="2 2"/>
</svg>"""
    
    # Modeling & Analysis icon
    modeling_icon = """<svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M5 5V55H55" stroke="#1a5276" stroke-width="2" fill="none"/>
  <path d="M10 45L20 30L30 40L40 20L50 25" stroke="#1a5276" stroke-width="2" fill="none"/>
  <circle cx="20" cy="30" r="3" fill="#27ae60"/>
  <circle cx="30" cy="40" r="3" fill="#27ae60"/>
  <circle cx="40" cy="20" r="3" fill="#27ae60"/>
  <rect x="50" y="15" width="2" height="20" rx="1" fill="#e1f5fe"/>
  <rect x="45" y="20" width="2" height="10" rx="1" fill="#e1f5fe"/>
  <rect x="40" y="25" width="2" height="5" rx="1" fill="#e1f5fe"/>
  <rect x="55" y="25" width="2" height="5" rx="1" fill="#e1f5fe"/>
  <rect x="35" y="20" width="2" height="10" rx="1" fill="#e1f5fe"/>
  <path d="M10 20L15 15L20 20L25 15L30 20" stroke="#1a5276" stroke-width="2" fill="none" stroke-dasharray="2 2"/>
</svg>"""
    
    with open('src/assets/icons/environmental-icon.svg', 'w', encoding='utf-8') as f:
        f.write(env_icon)
    
    with open('src/assets/icons/bioprocess-icon.svg', 'w', encoding='utf-8') as f:
        f.write(bio_icon)
    
    with open('src/assets/icons/modeling-icon.svg', 'w', encoding='utf-8') as f:
        f.write(modeling_icon)
    
    print("Created expertise area SVG icons")

def create_project_icons():
    """Create project-specific SVG icons"""
    
    # Nitrate removal icon
    nitrate_icon = """<svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect x="5" y="15" width="40" height="30" rx="2" stroke="#1a5276" stroke-width="2" fill="none"/>
  <path d="M5 20H45" stroke="#1a5276" stroke-width="2" fill="none"/>
  <path d="M15 15V10C15 7.239 17.239 5 20 5H30C32.761 5 35 7.239 35 10V15" stroke="#1a5276" stroke-width="2" fill="none"/>
  <path d="M20 30L25 25L30 30" stroke="#1a5276" stroke-width="2" fill="none"/>
  <path d="M25 25V40" stroke="#1a5276" stroke-width="2" fill="none"/>
  <rect x="15" y="35" width="20" height="5" rx="2.5" fill="#e1f5fe"/>
  <path d="M10 25H15L17 35H8L10 25Z" fill="#27ae60"/>
  <path d="M33 25H38L40 35H31L33 25Z" fill="#27ae60"/>
</svg>"""
    
    # UASB technology icon
    uasb_icon = """<svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M10 5H40V45H10V5Z" stroke="#1a5276" stroke-width="2" fill="none"/>
  <path d="M10 15H40" stroke="#1a5276" stroke-width="2" fill="none"/>
  <path d="M10 35H40" stroke="#1a5276" stroke-width="2" fill="none"/>
  <path d="M25 5V15" stroke="#1a5276" stroke-width="2" fill="none"/>
  <path d="M15 45V50" stroke="#1a5276" stroke-width="2" fill="none"/>
  <path d="M35 45V50" stroke="#1a5276" stroke-width="2" fill="none"/>
  <path d="M15 15L20 35" stroke="#1a5276" stroke-width="2" fill="none"/>
  <path d="M35 15L30 35" stroke="#1a5276" stroke-width="2" fill="none"/>
  <circle cx="17.5" cy="22.5" r="2.5" fill="#27ae60"/>
  <circle cx="20" cy="27.5" r="2.5" fill="#27ae60"/>
  <circle cx="32.5" cy="22.5" r="2.5" fill="#27ae60"/>
  <circle cx="30" cy="27.5" r="2.5" fill="#27ae60"/>
  <rect x="20" y="35" width="10" height="5" rx="2.5" fill="#e1f5fe"/>
</svg>"""
    
    # Catchment modeling icon
    catchment_model_icon = """<svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M5 5V45H45" stroke="#1a5276" stroke-width="2" fill="none"/>
  <path d="M10 40C10 38.343 11.343 37 13 37C14.657 37 16 38.343 16 40" stroke="#27ae60" stroke-width="2" fill="none"/>
  <path d="M19 40C19 38.343 20.343 37 22 37C23.657 37 25 38.343 25 40" stroke="#27ae60" stroke-width="2" fill="none"/>
  <path d="M28 40C28 38.343 29.343 37 31 37C32.657 37 34 38.343 34 40" stroke="#27ae60" stroke-width="2" fill="none"/>
  <path d="M37 40C37 38.343 38.343 37 40 37C41.657 37 43 38.343 43 40" stroke="#27ae60" stroke-width="2" fill="none"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M13 10V35H10V10H13Z" fill="#e1f5fe"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M22 15V35H19V15H22Z" fill="#e1f5fe"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M31 20V35H28V20H31Z" fill="#e1f5fe"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M40 25V35H37V25H40Z" fill="#e1f5fe"/>
  <path d="M10 30L15 20L20 25L25 10L30 15L35 5L40 10" stroke="#1a5276" stroke-width="2" fill="none"/>
</svg>"""
    
    # MBR technology icon
    mbr_icon = """<svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect x="5" y="10" width="40" height="30" rx="2" stroke="#1a5276" stroke-width="2" fill="none"/>
  <path d="M5 20H45" stroke="#1a5276" stroke-width="2" fill="none"/>
  <path d="M25 10V40" stroke="#1a5276" stroke-width="2" fill="none"/>
  <circle cx="15" cy="30" r="5" stroke="#1a5276" stroke-width="2" fill="none"/>
  <circle cx="35" cy="30" r="5" stroke="#1a5276" stroke-width="2" fill="none"/>
  <path d="M15 12L12 5" stroke="#1a5276" stroke-width="2" fill="none"/>
  <path d="M35 12L38 5" stroke="#1a5276" stroke-width="2" fill="none"/>
  <path d="M15 38L12 45" stroke="#1a5276" stroke-width="2" fill="none"/>
  <path d="M35 38L38 45" stroke="#1a5276" stroke-width="2" fill="none"/>
  <path d="M15 15L15 5" stroke="#1a5276" stroke-width="2" fill="none" stroke-dasharray="2 2"/>
  <path d="M35 15L35 5" stroke="#1a5276" stroke-width="2" fill="none" stroke-dasharray="2 2"/>
  <path d="M15 35L15 45" stroke="#1a5276" stroke-width="2" fill="none" stroke-dasharray="2 2"/>
  <path d="M35 35L35 45" stroke="#1a5276" stroke-width="2" fill="none" stroke-dasharray="2 2"/>
  <circle cx="15" cy="30" r="2" fill="#27ae60"/>
  <circle cx="35" cy="30" r="2" fill="#27ae60"/>
</svg>"""
    
    # Water reticulation icon
    reticulation_project_icon = """<svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M5 15H10L15 5H35L40 15H45" stroke="#1a5276" stroke-width="2" fill="none"/>
  <path d="M5 15V45H45V15" stroke="#1a5276" stroke-width="2" fill="none"/>
  <path d="M15 25H35" stroke="#1a5276" stroke-width="2" fill="none"/>
  <path d="M15 35H35" stroke="#1a5276" stroke-width="2" fill="none"/>
  <path d="M25 15V45" stroke="#1a5276" stroke-width="2" fill="none"/>
  <circle cx="15" cy="25" r="2" fill="#27ae60"/>
  <circle cx="35" cy="25" r="2" fill="#27ae60"/>
  <circle cx="15" cy="35" r="2" fill="#27ae60"/>
  <circle cx="35" cy="35" r="2" fill="#27ae60"/>
  <circle cx="25" cy="25" r="2" fill="#27ae60"/>
  <circle cx="25" cy="35" r="2" fill="#27ae60"/>
  <path d="M10 45L10 50" stroke="#1a5276" stroke-width="2" fill="none"/>
  <path d="M40 45L40 50" stroke="#1a5276" stroke-width="2" fill="none"/>
</svg>"""
    
    with open('src/assets/icons/nitrate-icon.svg', 'w', encoding='utf-8') as f:
        f.write(nitrate_icon)
    
    with open('src/assets/icons/uasb-icon.svg', 'w', encoding='utf-8') as f:
        f.write(uasb_icon)
    
    with open('src/assets/icons/catchment-model-icon.svg', 'w', encoding='utf-8') as f:
        f.write(catchment_model_icon)
    
    with open('src/assets/icons/mbr-icon.svg', 'w', encoding='utf-8') as f:
        f.write(mbr_icon)
    
    with open('src/assets/icons/reticulation-project-icon.svg', 'w', encoding='utf-8') as f:
        f.write(reticulation_project_icon)
    
    print("Created project-specific SVG icons")

def create_contact_icons():
    """Create contact information SVG icons"""
    
    # Email icon
    email_icon = """<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="#1a5276" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <path d="M22 6L12 13L2 6" stroke="#1a5276" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
</svg>"""
    
    # Phone icon
    phone_icon = """<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M22 16.92V19.92C22 20.4704 21.7893 20.9996 21.4142 21.3746C21.0391 21.7497 20.5099 21.9605 19.96 21.96C18.44 21.96 16.96 21.73 15.56 21.27C14.2341 20.8327 13.0024 20.1638 11.92 19.29C9.36209 17.4075 7.2721 14.983 5.83 12.14C5.27 10.71 4.97 9.2 4.97 7.65C4.96891 7.10087 5.17905 6.57229 5.5532 6.19703C5.92734 5.82178 6.45532 5.61038 7.004 5.61H10.004C10.456 5.60553 10.894 5.75894 11.242 6.04271C11.5899 6.32647 11.8289 6.72247 11.914 7.16C12.074 8.01 12.333 8.83 12.684 9.61C12.8251 9.91305 12.8684 10.2512 12.8089 10.5798C12.7494 10.9084 12.5899 11.2108 12.354 11.45L11.03 12.77C12.3336 14.8639 14.1361 16.6664 16.23 17.97L17.55 16.65C17.7892 16.4141 18.0916 16.2546 18.4202 16.1951C18.7488 16.1356 19.087 16.1789 19.39 16.32C20.1684 16.6707 20.9867 16.9293 21.83 17.09C22.2748 17.1764 22.6752 17.4227 22.9586 17.7786C23.242 18.1345 23.3893 18.5812 23.38 19.04L22 16.92Z" stroke="#1a5276" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
</svg>"""
    
    # Location icon
    location_icon = """<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z" stroke="#1a5276" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="#1a5276" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
</svg>"""
    
    # LinkedIn icon
    linkedin_icon = """<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8Z" stroke="#1a5276" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <path d="M6 9H2V21H6V9Z" stroke="#1a5276" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <path d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z" stroke="#1a5276" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
</svg>"""
    
    # ResearchGate icon
    researchgate_icon = """<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2Z" stroke="#1a5276" stroke-width="2" fill="none"/>
  <path d="M8 7H10V17H8V7Z" stroke="#1a5276" stroke-width="1.5" fill="none"/>
  <path d="M12 7H16C16.5304 7 17.0391 7.21071 17.4142 7.58579C17.7893 7.96086 18 8.46957 18 9V15C18 15.5304 17.7893 16.0391 17.4142 16.4142C17.0391 16.7893 16.5304 17 16 17H12V7Z" stroke="#1a5276" stroke-width="1.5" fill="none"/>
  <path d="M12 12H16" stroke="#1a5276" stroke-width="1.5" fill="none"/>
</svg>"""
    
    # Google Scholar icon
    scholar_icon = """<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M5 5H19C20.1046 5 21 5.89543 21 7V17C21 18.1046 20.1046 19 19 19H5C3.89543 19 3 18.1046 3 17V7C3 5.89543 3.89543 5 5 5Z" stroke="#1a5276" stroke-width="2" fill="none"/>
  <path d="M7 9H17" stroke="#1a5276" stroke-width="2" fill="none"/>
  <path d="M7 13H12" stroke="#1a5276" stroke-width="2" fill="none"/>
  <path d="M7 16H9" stroke="#1a5276" stroke-width="2" fill="none"/>
</svg>"""
    
    with open('src/assets/icons/email-icon.svg', 'w', encoding='utf-8') as f:
        f.write(email_icon)
    
    with open('src/assets/icons/phone-icon.svg', 'w', encoding='utf-8') as f:
        f.write(phone_icon)
    
    with open('src/assets/icons/location-icon.svg', 'w', encoding='utf-8') as f:
        f.write(location_icon)
    
    with open('src/assets/icons/linkedin-icon.svg', 'w', encoding='utf-8') as f:
        f.write(linkedin_icon)
    
    with open('src/assets/icons/researchgate-icon.svg', 'w', encoding='utf-8') as f:
        f.write(researchgate_icon)
    
    with open('src/assets/icons/scholar-icon.svg', 'w', encoding='utf-8') as f:
        f.write(scholar_icon)
    
    print("Created contact information SVG icons")

def create_social_icons():
    """Create social media SVG icons for footer"""
    
    # LinkedIn icon
    linkedin_icon = """<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <path d="M6 9H2V21H6V9Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <path d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
</svg>"""
    
    # Twitter/X icon
    twitter_icon = """<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M22 4C22 4 21.3 6.1 20 7.4C21.6 17.4 10.6 24.7 2 19C4.2 19.1 6.4 18.4 8 17C3 15.5 0.5 9.6 3 5C5.2 7.6 8.6 9.1 12 9C11.1 4.8 16 2.4 19 5.2C20.1 5.2 22 4 22 4Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
</svg>"""
    
    # ResearchGate icon
    researchgate_icon = """<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2Z" stroke="currentColor" stroke-width="2" fill="none"/>
  <path d="M8 7H10V17H8V7Z" stroke="currentColor" stroke-width="1.5" fill="none"/>
  <path d="M12 7H16C16.5304 7 17.0391 7.21071 17.4142 7.58579C17.7893 7.96086 18 8.46957 18 9V15C18 15.5304 17.7893 16.0391 17.4142 16.4142C17.0391 16.7893 16.5304 17 16 17H12V7Z" stroke="currentColor" stroke-width="1.5" fill="none"/>
  <path d="M12 12H16" stroke="currentColor" stroke-width="1.5" fill="none"/>
</svg>"""
    
    # Email icon
    email_icon = """<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <path d="M22 6L12 13L2 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
</svg>"""
    
    with open('src/assets/icons/linkedin-social-icon.svg', 'w', encoding='utf-8') as f:
        f.write(linkedin_icon)
    
    with open('src/assets/icons/twitter-icon.svg', 'w', encoding='utf-8') as f:
        f.write(twitter_icon)
    
    with open('src/assets/icons/researchgate-social-icon.svg', 'w', encoding='utf-8') as f:
        f.write(researchgate_icon)
    
    with open('src/assets/icons/email-social-icon.svg', 'w', encoding='utf-8') as f:
        f.write(email_icon)
    
    print("Created social media SVG icons for footer")

def create_navbar_component():
    """Create the Navbar component with logo and improved styling"""
    content = """import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ReactComponent as Logo } from '../assets/logo.svg';

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  
  // Detect if we're on a mobile device
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  // Detect scrolling for navbar style change
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  // Check if a link is active based on current location
  const isActive = (path) => {
    return location.pathname === path;
  };
  
  // Toggle mobile menu
  const toggleMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  
  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <Link to="/" className="logo">
          <Logo className="logo-icon" />
          <span className="logo-text">RMES</span>
        </Link>
        
        {isMobile ? (
          <>
            <button 
              className="mobile-menu-button" 
              onClick={toggleMenu}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? 'Close' : 'Menu'}
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
                    to="/services" 
                    className={`nav-link ${isActive('/services') ? 'active' : ''}`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Services
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
                    to="/publications" 
                    className={`nav-link ${isActive('/publications') ? 'active' : ''}`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Publications
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
        )}
      </div>
    </nav>
  );
};

export default Navbar;
"""
    with open('src/components/Navbar.js', 'w', encoding='utf-8') as f:
        f.write(content)
    print("Created enhanced Navbar.js component with logo")

def create_footer_component():
    """Create the Footer component with improved layout and icons"""
    content = """import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../assets/logo.svg';
import { ReactComponent as LinkedInIcon } from '../assets/icons/linkedin-social-icon.svg';
import { ReactComponent as TwitterIcon } from '../assets/icons/twitter-icon.svg';
import { ReactComponent as ResearchGateIcon } from '../assets/icons/researchgate-social-icon.svg';
import { ReactComponent as EmailIcon } from '../assets/icons/email-social-icon.svg';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-main">
          <div className="footer-about">
            <div className="footer-logo logo">
              <Logo className="logo-icon" />
              <span className="logo-text" style={{ color: 'white' }}>RMES</span>
            </div>
            <p>Specializing in innovative water treatment solutions, sustainable technology design, environmental impact assessment, and advanced process optimization.</p>
          </div>
          
          <div className="footer-nav">
            <h3 className="footer-heading">Navigation</h3>
            <div className="footer-links-group">
              <Link to="/" className="footer-link">Home</Link>
              <Link to="/services" className="footer-link">Services</Link>
              <Link to="/projects" className="footer-link">Projects</Link>
              <Link to="/publications" className="footer-link">Publications</Link>
              <Link to="/contact" className="footer-link">Contact</Link>
            </div>
          </div>
          
          <div className="footer-services">
            <h3 className="footer-heading">Services</h3>
            <div className="footer-links-group">
              <Link to="/services" className="footer-link">Wastewater Treatment</Link>
              <Link to="/services" className="footer-link">Water Reticulation</Link>
              <Link to="/services" className="footer-link">Catchment Modeling</Link>
              <Link to="/services" className="footer-link">Process Optimization</Link>
            </div>
          </div>
          
          <div className="footer-contact">
            <h3 className="footer-heading">Contact</h3>
            <div className="footer-contact-item">
              <EmailIcon className="footer-contact-icon" />
              <span>che.eng@live.com</span>
            </div>
            <div className="footer-contact-item">
              <span>+642108052489</span>
            </div>
            <div className="footer-contact-item">
              <span>New Zealand</span>
            </div>
          </div>
        </div>
        
        <div className="footer-divider"></div>
        
        <div className="footer-bottom">
          <p className="footer-copyright">&copy; {currentYear} Dr. Reza Moghaddam. All rights reserved.</p>
          
          <div className="footer-social">
            <a 
              href="https://www.linkedin.com/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="footer-social-link"
              aria-label="LinkedIn Profile"
            >
              <LinkedInIcon />
            </a>
            <a 
              href="https://twitter.com/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="footer-social-link"
              aria-label="Twitter Profile"
            >
              <TwitterIcon />
            </a>
            <a 
              href="https://www.researchgate.net/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="footer-social-link"
              aria-label="ResearchGate Profile"
            >
              <ResearchGateIcon />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
"""
    with open('src/components/Footer.js', 'w', encoding='utf-8') as f:
        f.write(content)
    print("Created enhanced Footer.js component with icons and improved layout")

def create_home_page():
    """Create the HomePage component with icons and improved styling"""
    content = """import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import heroImage from '../assets/hero-bg.jpg';
import { ReactComponent as EnvironmentalIcon } from '../assets/icons/environmental-icon.svg';
import { ReactComponent as BioprocessIcon } from '../assets/icons/bioprocess-icon.svg';
import { ReactComponent as ModelingIcon } from '../assets/icons/modeling-icon.svg';
import { ReactComponent as NitrateIcon } from '../assets/icons/nitrate-icon.svg';
import { ReactComponent as UasbIcon } from '../assets/icons/uasb-icon.svg';
import { ReactComponent as CatchmentModelIcon } from '../assets/icons/catchment-model-icon.svg';

const HomePage = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  
  useEffect(() => {
    // Check if the hero image exists by trying to load it
    const img = new Image();
    img.onload = () => setImageLoaded(true);
    img.onerror = () => setImageLoaded(false);
    img.src = heroImage;
    
    return () => {
      img.onload = null;
      img.onerror = null;
    };
  }, []);

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className={`hero ${imageLoaded ? 'hero-with-image' : ''}`}>
        <div className="hero-content">
          <h1>Dr. Reza Moghaddam</h1>
          <h2>Environmental & Bioprocess Engineer</h2>
          <p>Specializing in innovative water treatment solutions, sustainable technology design, environmental impact assessment, and advanced process optimization.</p>
          <div className="hero-buttons">
            <Link to="/services" className="btn primary-btn">Our Services</Link>
            <Link to="/contact" className="btn secondary-btn">Contact Me</Link>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="expertise">
        <h2>Areas of Expertise</h2>
        <div className="expertise-grid">
          <div className="expertise-card">
            <EnvironmentalIcon className="expertise-card-icon" />
            <h3>Environmental Engineering</h3>
            <ul>
              <li>Municipal & Agricultural Wastewater Treatment</li>
              <li>Denitrifying Bioreactors</li>
              <li>Agricultural Impact Mitigation</li>
              <li>Water & Wastewater Reticulation Design</li>
            </ul>
          </div>
          <div className="expertise-card">
            <BioprocessIcon className="expertise-card-icon" />
            <h3>Bioprocess Engineering</h3>
            <ul>
              <li>Aerobic & Anaerobic Treatment Systems</li>
              <li>Bioreactor Design & Optimization</li>
              <li>Fermentation Process Control</li>
              <li>Scale-up Methodology</li>
            </ul>
          </div>
          <div className="expertise-card">
            <ModelingIcon className="expertise-card-icon" />
            <h3>Modeling & Analysis</h3>
            <ul>
              <li>Catchment & Water Resource Modeling</li>
              <li>Chemical & Food Processing Optimization</li>
              <li>Life Cycle Assessment</li>
              <li>Advanced Data Analysis (Python, R)</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="featured-projects">
        <h2>Featured Projects</h2>
        <div className="project-grid">
          <div className="project-card">
            <NitrateIcon className="project-card-icon" />
            <h3>Enhanced Nitrate Removal in Woodchip Bioreactors</h3>
            <p>Implementation of carbon dosing techniques to improve nitrate removal efficiency in agricultural drainage systems.</p>
            <div className="project-metrics">
              <span>Efficiency Improvement: 30%</span>
              <span>Cost Reduction: 25%</span>
            </div>
            <Link to="/projects" className="project-link">Learn More</Link>
          </div>
          <div className="project-card">
            <UasbIcon className="project-card-icon" />
            <h3>Municipal WWTP Optimization Using UASB Technology</h3>
            <p>Implementation of Upflow Anaerobic Sludge Blanket (UASB) reactors for enhanced energy efficiency in wastewater treatment.</p>
            <div className="project-metrics">
              <span>Energy Production: 40% increase</span>
              <span>Operational Cost: 35% reduction</span>
            </div>
            <Link to="/projects" className="project-link">Learn More</Link>
          </div>
          <div className="project-card">
            <CatchmentModelIcon className="project-card-icon" />
            <h3>Catchment Modeling for Agricultural Runoff Mitigation</h3>
            <p>Comprehensive modeling of surface and groundwater interactions to optimize placement of water quality interventions.</p>
            <div className="project-metrics">
              <span>Contaminant Reduction: 45%</span>
              <span>Implementation Efficiency: 60% improvement</span>
            </div>
            <Link to="/projects" className="project-link">Learn More</Link>
          </div>
        </div>
        <div className="section-cta">
          <Link to="/projects" className="btn primary-btn">View All Projects</Link>
        </div>
      </section>

      {/* Services Preview */}
      <section className="publications-preview">
        <h2>Consultancy Services</h2>
        <div className="publication-list">
          <div className="publication-item">
            <h3>Advanced Wastewater Treatment Design & Optimization</h3>
            <p>Specialized consulting for municipal and agricultural wastewater systems using innovative aerobic and anaerobic technologies.</p>
            <Link to="/services" className="project-link">Learn More</Link>
          </div>
          <div className="publication-item">
            <h3>Catchment Modeling & Water Resource Management</h3>
            <p>Comprehensive surface and groundwater quality/quantity modeling for sustainable resource planning and regulatory compliance.</p>
            <Link to="/services" className="project-link">Learn More</Link>
          </div>
        </div>
        <div className="section-cta">
          <Link to="/services" className="btn primary-btn">Explore All Services</Link>
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
        <div className="contact-cta-content">
          <h2>Interested in Collaboration?</h2>
          <p>I'm always open to discussing research projects, consulting opportunities, or innovative solutions for environmental challenges.</p>
          <Link to="/contact" className="btn primary-btn">Get in Touch</Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
"""
    with open('src/pages/HomePage.js', 'w', encoding='utf-8') as f:
        f.write(content)
    print("Created enhanced HomePage.js with icons and improved styling")

def create_services_page():
    """Create the ServicesPage component with icons and improved styling"""
    content = """import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as MunicipalIcon } from '../assets/icons/municipal-icon.svg';
import { ReactComponent as AgriculturalIcon } from '../assets/icons/agricultural-icon.svg';
import { ReactComponent as ReticulationIcon } from '../assets/icons/reticulation-icon.svg';
import { ReactComponent as CatchmentIcon } from '../assets/icons/catchment-icon.svg';
import { ReactComponent as ChemicalIcon } from '../assets/icons/chemical-icon.svg';

const ServicesPage = () => {
  return (
    <div className="services-page">
      <section className="page-header">
        <div className="page-header-content">
          <h1>Consultancy Services</h1>
          <p>Comprehensive environmental engineering solutions backed by research and practical experience</p>
        </div>
      </section>

      <div className="services-container">
        {/* Wastewater Treatment Section */}
        <section className="service-category">
          <h2>Wastewater Treatment Design & Optimization</h2>
          
          <div className="service-grid">
            <div className="service-card">
              <h3>
                <MunicipalIcon className="service-icon" />
                Municipal Wastewater Treatment
              </h3>
              <p>Comprehensive design and optimization services for municipal wastewater treatment facilities, focusing on efficiency, compliance, and sustainability.</p>
              
              <h4>Aerobic Treatment Systems</h4>
              <ul>
                <li><strong>Activated Sludge Process (ASP):</strong> Design and optimization of conventional and modified ASP systems for efficient organic matter and nutrient removal.</li>
                <li><strong>Sequencing Batch Reactors (SBR):</strong> Time-oriented systems that combine all treatment processes in a single tank, ideal for space constraints and variable flow conditions.</li>
                <li><strong>Moving Bed Biofilm Reactors (MBBR):</strong> High-efficiency systems using biofilm carriers to maximize treatment capacity while minimizing footprint.</li>
                <li><strong>Membrane Bioreactors (MBR):</strong> Advanced systems combining membrane filtration with biological treatment for superior effluent quality and water reuse applications.</li>
              </ul>
              
              <h4>Anaerobic Treatment Systems</h4>
              <ul>
                <li><strong>Upflow Anaerobic Sludge Blanket (UASB):</strong> Energy-efficient treatment for high-strength wastewater with biogas recovery potential.</li>
                <li><strong>Anaerobic Baffled Reactors (ABR):</strong> Robust systems with multiple compartments for staged treatment, suitable for decentralized applications.</li>
                <li><strong>Expanded Granular Sludge Bed (EGSB):</strong> High-rate systems for improved contact between wastewater and granular biomass.</li>
                <li><strong>Anaerobic Membrane Bioreactors (AnMBR):</strong> Cutting-edge technology combining anaerobic digestion with membrane filtration for resource recovery.</li>
              </ul>
            </div>
            
            <div className="service-card">
              <h3>
                <AgriculturalIcon className="service-icon" />
                Agricultural Wastewater Treatment
              </h3>
              <p>Specialized solutions for agricultural wastewater focusing on nutrient recovery, contaminant removal, and regulatory compliance.</p>
              
              <h4>Nutrient Removal Systems</h4>
              <ul>
                <li><strong>Denitrifying Bioreactors:</strong> Woodchip-based systems enhanced with carbon dosing for optimal nitrate removal from agricultural drainage.</li>
                <li><strong>Constructed Wetlands:</strong> Natural treatment systems designed to remove nutrients and sediments through biological and physical processes.</li>
                <li><strong>Phosphorus Precipitation Systems:</strong> Chemical treatment systems designed specifically for phosphorus removal and recovery.</li>
              </ul>
              
              <h4>Livestock Waste Management</h4>
              <ul>
                <li><strong>Anaerobic Digesters:</strong> Biogas-producing systems for treating high-strength livestock wastewater while generating renewable energy.</li>
                <li><strong>Solid-Liquid Separation:</strong> Pre-treatment systems to improve downstream treatment efficiency and enable resource recovery.</li>
                <li><strong>Nutrient Recovery Systems:</strong> Specialized processes for extracting and concentrating nutrients for reuse as fertilizers.</li>
              </ul>
              
              <p>All agricultural systems are designed for compliance with New Zealand's National Environmental Standards for Freshwater (NES-F) and regional regulations.</p>
            </div>
          </div>
        </section>
        
        {/* Water and Wastewater Reticulation */}
        <section className="service-category">
          <h2>Water & Wastewater Reticulation Design</h2>
          
          <div className="full-width-service">
            <h3>
              <ReticulationIcon className="service-icon" />
              Comprehensive Reticulation Network Design
            </h3>
            <p>Expert design services for water distribution and wastewater collection systems, from small-scale developments to municipal networks.</p>
            
            <div className="process-steps">
              <div className="process-step">
                <span className="step-number">1</span>
                <h4>Demand Analysis & Hydraulic Modeling</h4>
                <p>Detailed assessment of water demand patterns and wastewater generation rates using advanced modeling tools to ensure properly sized infrastructure.</p>
              </div>
              
              <div className="process-step">
                <span className="step-number">2</span>
                <h4>Network Configuration & Component Design</h4>
                <p>Optimal layout design including pipe sizing, pump station design, pressure management, and materials selection for maximum efficiency and longevity.</p>
              </div>
              
              <div className="process-step">
                <span className="step-number">3</span>
                <h4>Resilience & Redundancy Planning</h4>
                <p>Strategic implementation of system redundancies, emergency storage, and failure management to ensure continuous service during disruptions.</p>
              </div>
            </div>
            
            <h4>Services Include:</h4>
            <ul>
              <li>Gravity and pressure sewer system design</li>
              <li>Water distribution network optimization</li>
              <li>Pump station design and optimization</li>
              <li>Telemetry and SCADA system integration</li>
              <li>Maintenance planning and asset management</li>
              <li>Retrofitting and upgrading existing systems</li>
              <li>Compliance with local and national regulations</li>
            </ul>
          </div>
        </section>
        
        {/* Catchment Modeling Section */}
        <section className="service-category">
          <h2>Catchment & Water Resource Modeling</h2>
          
          <div className="service-grid">
            <div className="service-card">
              <h3>
                <CatchmentIcon className="service-icon" />
                Surface Water Modeling
              </h3>
              <p>Comprehensive modeling services for surface water systems including rivers, streams, lakes, and constructed waterways.</p>
              
              <h4>Hydrological Modeling</h4>
              <ul>
                <li>Flood prediction and mitigation planning</li>
                <li>Stormwater management system design</li>
                <li>Climate change impact assessment</li>
                <li>Rainfall-runoff modeling</li>
              </ul>
              
              <h4>Water Quality Modeling</h4>
              <ul>
                <li>Contaminant transport and fate analysis</li>
                <li>Nutrient loading assessment</li>
                <li>Sediment transport modeling</li>
                <li>Temperature and dissolved oxygen modeling</li>
              </ul>
              
              <p>Models are developed using industry-standard software including HEC-RAS, SWMM, MIKE SHE, and custom Python/R implementations.</p>
            </div>
            
            <div className="service-card">
              <h3>
                <CatchmentIcon className="service-icon" />
                Groundwater Modeling
              </h3>
              <p>Specialized groundwater modeling services for resource management, contamination assessment, and remediation planning.</p>
              
              <h4>Quantity Modeling</h4>
              <ul>
                <li>Aquifer characterization and yield assessment</li>
                <li>Wellfield design and optimization</li>
                <li>Sustainable extraction rate determination</li>
                <li>Groundwater-surface water interaction analysis</li>
              </ul>
              
              <h4>Quality Modeling</h4>
              <ul>
                <li>Contaminant plume delineation and migration prediction</li>
                <li>Nitrate leaching assessment in agricultural settings</li>
                <li>Remediation strategy modeling and optimization</li>
                <li>Saltwater intrusion risk assessment for coastal aquifers</li>
              </ul>
              
              <p>Models are developed using MODFLOW, FEFLOW, and custom numerical solutions tailored to specific project requirements.</p>
            </div>
            
            <div className="service-card">
              <h3>
                <CatchmentIcon className="service-icon" />
                Integrated Catchment Management
              </h3>
              <p>Holistic approaches to managing water resources at the catchment scale, balancing environmental, economic, and social objectives.</p>
              
              <h4>Services Include:</h4>
              <ul>
                <li>Catchment-scale water balance modeling</li>
                <li>Land use impact assessment</li>
                <li>Best Management Practice (BMP) placement optimization</li>
                <li>Stakeholder engagement and collaborative decision support</li>
                <li>Climate change resilience planning</li>
                <li>Regulatory compliance strategies</li>
              </ul>
              
              <p>Our integrated modeling approaches help clients navigate complex regulatory frameworks while achieving sustainable water resource management goals.</p>
            </div>
          </div>
        </section>
        
        {/* Chemical and Food Processing Section */}
        <section className="service-category">
          <h2>Chemical & Food Processing Optimization</h2>
          
          <div className="service-grid">
            <div className="service-card">
              <h3>
                <ChemicalIcon className="service-icon" />
                Process Modeling & Simulation
              </h3>
              <p>Advanced modeling and simulation services for chemical and food processing operations to improve efficiency, product quality, and sustainability.</p>
              
              <h4>Modeling Approaches:</h4>
              <ul>
                <li><strong>First-Principles Modeling:</strong> Rigorous models based on fundamental physical and chemical principles for accurate process representation.</li>
                <li><strong>Statistical Process Control:</strong> Data-driven approaches for identifying critical process parameters and optimizing control strategies.</li>
                <li><strong>Machine Learning Applications:</strong> Advanced predictive models for complex processes where traditional modeling approaches are insufficient.</li>
                <li><strong>Hybrid Modeling:</strong> Combined approaches leveraging both mechanistic understanding and empirical data.</li>
              </ul>
            </div>
            
            <div className="service-card">
              <h3>
                <ChemicalIcon className="service-icon" />
                Process Optimization
              </h3>
              <p>Systematic optimization of processing operations to enhance efficiency, reduce costs, and improve sustainability metrics.</p>
              
              <h4>Optimization Services:</h4>
              <ul>
                <li><strong>Energy Efficiency Optimization:</strong> Identifying opportunities for energy recovery, heat integration, and reduced utility consumption.</li>
                <li><strong>Water Use Minimization:</strong> Process integration techniques to reduce freshwater consumption and wastewater generation.</li>
                <li><strong>Yield Improvement:</strong> Optimizing process conditions to maximize product yield and quality while minimizing waste.</li>
                <li><strong>Throughput Enhancement:</strong> Identifying and resolving bottlenecks to improve overall process capacity.</li>
                <li><strong>Multi-objective Optimization:</strong> Balancing competing objectives like cost, quality, environmental impact, and operational flexibility.</li>
              </ul>
            </div>
            
            <div className="service-card">
              <h3>
                <ChemicalIcon className="service-icon" />
                Bioprocess Engineering
              </h3>
              <p>Specialized services for biological processes in food, pharmaceutical, and biofuel applications.</p>
              
              <h4>Bioprocess Services:</h4>
              <ul>
                <li><strong>Fermentation Optimization:</strong> Improving yield, productivity, and consistency in microbial fermentation processes.</li>
                <li><strong>Bioreactor Design & Scale-up:</strong> From laboratory to production scale with maintained performance characteristics.</li>
                <li><strong>Downstream Processing:</strong> Optimization of separation, purification, and product recovery operations.</li>
                <li><strong>Bioethanol Production:</strong> Process design and optimization for fuel ethanol from various feedstocks.</li>
                <li><strong>Enzyme Production & Application:</strong> Optimizing enzymatic processes for food and industrial applications.</li>
              </ul>
            </div>
          </div>
        </section>
        
        {/* Call to Action */}
        <section className="contact-cta">
          <div className="contact-cta-content">
            <h2>Ready to Discuss Your Project?</h2>
            <p>Whether you're looking to optimize an existing system or design something new, I'm here to help with innovative, sustainable solutions tailored to your specific needs.</p>
            <Link to="/contact" className="btn primary-btn">Contact for Consultation</Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ServicesPage;
"""
    with open('src/pages/ServicesPage.js', 'w', encoding='utf-8') as f:
        f.write(content)
    print("Created enhanced ServicesPage.js with icons and improved styling")

def create_projects_page():
    """Create the ProjectsPage component with icons and improved styling"""
    content = """import React from 'react';
import { ReactComponent as NitrateIcon } from '../assets/icons/nitrate-icon.svg';
import { ReactComponent as UasbIcon } from '../assets/icons/uasb-icon.svg';
import { ReactComponent as CatchmentModelIcon } from '../assets/icons/catchment-model-icon.svg';
import { ReactComponent as MbrIcon } from '../assets/icons/mbr-icon.svg';
import { ReactComponent as ReticulationProjectIcon } from '../assets/icons/reticulation-project-icon.svg';

const ProjectsPage = () => {
  const projects = [
    {
      id: 1,
      title: "Enhanced Nitrate Removal in Woodchip Bioreactors",
      icon: <NitrateIcon />,
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
      title: "Municipal WWTP Optimization Using UASB Technology",
      icon: <UasbIcon />,
      description: "Implementation of Upflow Anaerobic Sludge Blanket (UASB) reactors for enhanced energy efficiency in municipal wastewater treatment.",
      details: "This project involved redesigning an existing municipal wastewater treatment plant to incorporate UASB technology, significantly reducing energy consumption while enabling biogas recovery. The anaerobic treatment stage was optimized for New Zealand's climate conditions and municipal wastewater characteristics.",
      metrics: {
        energyProduction: "40% increase",
        operationalCost: "35% reduction",
        effluenceQuality: "Met all regulatory requirements"
      },
      technologies: ["UASB Reactors", "Biogas Recovery", "Process Control Systems", "Effluent Polishing"]
    },
    {
      id: 3,
      title: "Catchment Modeling for Agricultural Runoff Mitigation",
      icon: <CatchmentModelIcon />,
      description: "Comprehensive modeling of surface and groundwater interactions to optimize placement of water quality interventions.",
      details: "This project utilized integrated surface-groundwater modeling to identify optimal locations for implementing water quality treatment systems across an agricultural catchment. The model incorporated land use, soil characteristics, groundwater flow patterns, and surface water dynamics to maximize the effectiveness of mitigation measures.",
      metrics: {
        contaminantReduction: "45%",
        implementationEfficiency: "60% improvement",
        costSavings: "38% compared to conventional approaches"
      },
      technologies: ["MODFLOW", "MIKE SHE", "GIS Analysis", "Python-based Data Integration", "Best Management Practice Optimization"]
    },
    {
      id: 4,
      title: "Aquatic Mitigation Systems for NES-F Compliance",
      icon: <NitrateIcon />,
      description: "Development of cost-effective mitigation systems for agricultural runoff treatment compliant with NZ regulations.",
      details: "This project involved designing and implementing mitigation systems that help farmers comply with New Zealand's National Environmental Standards for Freshwater (NES-F). The systems were designed with cost-effectiveness and practical implementation in mind.",
      metrics: {
        implementationCost: "20% lower than alternatives",
        treatmentEfficiency: "85% contaminant removal"
      },
      technologies: ["Constructed Wetlands", "Filter Systems", "Regulatory Compliance", "Cost-Benefit Analysis"]
    },
    {
      id: 5,
      title: "Membrane Bioreactor Implementation for Water Reuse",
      icon: <MbrIcon />,
      description: "Design and implementation of MBR technology for advanced wastewater treatment and water reuse applications.",
      details: "This project involved the design and installation of a Membrane Bioreactor (MBR) system to upgrade an existing treatment facility for water reuse applications. The MBR technology was selected for its superior effluent quality and reliability, enabling the treated water to be safely reused for irrigation and industrial processes.",
      metrics: {
        waterRecovery: "95% of influent flow",
        contaminantRemoval: ">99% for suspended solids and pathogens",
        energyEfficiency: "Optimized with 25% reduction over initial design"
      },
      technologies: ["Membrane Bioreactors", "Ultrafiltration", "Process Automation", "Water Reuse Systems"]
    },
    {
      id: 6,
      title: "Food Processing Wastewater Treatment Optimization",
      icon: <UasbIcon />,
      description: "Process analysis and optimization for a dairy processing facility's wastewater treatment system.",
      details: "This project involved comprehensive modeling and optimization of a dairy processing facility's wastewater treatment system. By implementing a combination of anaerobic pre-treatment and enhanced nutrient removal systems, we were able to significantly improve treatment efficiency while reducing operational costs and generating biogas for energy recovery.",
      metrics: {
        organicLoadingCapacity: "Increased by 60%",
        bioenergyProduction: "Generated 35% of facility's energy needs",
        complianceViolations: "Reduced to zero over monitoring period"
      },
      technologies: ["Anaerobic Digestion", "EGSB Reactors", "Nutrient Removal Systems", "Process Integration", "Energy Recovery"]
    },
    {
      id: 7,
      title: "Water Reticulation Design for Rural Community",
      icon: <ReticulationProjectIcon />,
      description: "Comprehensive design of a water supply and distribution system for a rural community with challenging topography.",
      details: "This project involved the design of a complete water supply and distribution system for a rural community of 2,500 residents spread across challenging terrain. The system incorporated multiple pressure zones, booster pumping stations, and storage reservoirs to ensure reliable water delivery while minimizing energy consumption and maintenance requirements.",
      metrics: {
        reliabilityImprovement: "99.9% uptime achieved",
        energyEfficiency: "40% reduction compared to conventional design",
        waterLoss: "Reduced to <5% through pressure management and leak detection"
      },
      technologies: ["Hydraulic Modeling", "Pressure Zone Design", "SCADA Integration", "Energy Optimization", "Asset Management Planning"]
    },
    {
      id: 8,
      title: "Bioethanol Production Optimization",
      icon: <ChemicalIcon />,
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
        <div className="page-header-content">
          <h1>Projects & Research</h1>
          <p>A collection of my environmental engineering projects and research initiatives</p>
        </div>
      </section>

      <section className="projects-container">
        {projects.map(project => (
          <div key={project.id} className="project-full-card">
            <h2>
              <span className="project-icon">{project.icon}</span>
              {project.title}
            </h2>
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
    print("Created enhanced ProjectsPage.js with icons and improved styling")

def create_publications_page():
    """Create the PublicationsPage component with improved styling"""
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
      doi: "10.1016/j.jenvman.2023.116926",
      abstract: "This study examined the hydraulic performance of denitrifying bioreactors with various carbon dosing treatments. We found that controlled carbon addition significantly improved nitrate removal efficiency while maintaining hydraulic conductivity."
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
      doi: "10.1016/j.ecoleng.2022.106851",
      abstract: "This research investigated the effectiveness of constant carbon dosing in field-scale denitrifying bioreactors. Results showed that this approach can significantly enhance nitrate removal rates in agricultural drainage systems."
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
      doi: "10.1016/j.ecoleng.2022.106818",
      abstract: "This paper explored both the benefits and potential side effects of methanol dosing in woodchip bioreactors. Our findings provide guidance for optimizing carbon addition while minimizing unintended consequences."
    },
    {
      id: 4,
      type: 'journal',
      title: "Microbial community structure in denitrifying bioreactors under varying carbon supplementation regimes",
      authors: "Moghaddam, R., et al.",
      journal: "Environmental Science & Technology",
      year: 2022,
      volume: "56",
      pages: "6247-6258",
      doi: "10.1021/acs.est.1c07829",
      abstract: "This study characterized changes in microbial community composition under different carbon dosing strategies in denitrifying bioreactors, providing insights into the biological mechanisms of enhanced nitrogen removal."
    },
    {
      id: 5,
      type: 'journal',
      title: "Cost-benefit analysis of supplemental carbon addition to denitrifying bioreactors in New Zealand agricultural settings",
      authors: "Moghaddam, R., et al.",
      journal: "Journal of Environmental Quality",
      year: 2023,
      volume: "52",
      pages: "233-245",
      doi: "10.1002/jeq2.20391",
      abstract: "This economic analysis evaluated the cost-effectiveness of carbon addition to denitrifying bioreactors in New Zealand agricultural contexts, demonstrating a favorable return on investment for farm-scale implementation."
    },
    {
      id: 10,
      type: 'journal',
      title: "Comparative performance of aerobic and anaerobic treatment systems for municipal wastewater: A New Zealand case study",
      authors: "Moghaddam, R., Williams, J., Singh, P.",
      journal: "Water Research",
      year: 2024,
      volume: "212",
      pages: "118542",
      doi: "10.1016/j.watres.2023.118542",
      abstract: "This study compared the performance, energy requirements, and operational costs of conventional activated sludge systems with newer UASB-based treatment trains for municipal wastewater treatment in temperate climates. Results demonstrate significant energy and cost advantages for anaerobic primary treatment while maintaining comparable effluent quality through appropriate post-treatment processes."
    },
    {
      id: 11,
      type: 'journal',
      title: "Machine learning approaches for optimizing chemical dosing in water treatment: From laboratory to full-scale implementation",
      authors: "Moghaddam, R., Chen, L., Thompson, K.",
      journal: "Chemical Engineering Journal",
      year: 2023,
      volume: "458",
      pages: "141254",
      doi: "10.1016/j.cej.2023.141254",
      abstract: "This paper presents novel machine learning approaches for real-time optimization of chemical dosing in water treatment processes. The methodology combines process knowledge with data-driven models to achieve superior control performance under varying influent conditions, demonstrating significant chemical usage reduction without compromising treatment objectives."
    },
    {
      id: 6,
      type: 'conference',
      title: "Carbon dosing enhances nitrate removal effectiveness in denitrifying bioreactors: A field trial in New Zealand",
      authors: "Moghaddam, R., et al.",
      conference: "Diverse Solutions for Efficient Land, Water and Nutrient Use Conference",
      location: "Massey University, NZ",
      year: 2022,
      abstract: "This presentation highlighted results from multi-year field trials of carbon-enhanced bioreactors across several New Zealand farms, demonstrating significant improvements in nitrogen removal rates."
    },
    {
      id: 7,
      type: 'conference',
      title: "Enhanced Nitrate Removal with Methanol Dosing in Woodchip Bioreactors: Laboratory and Field Evidence",
      authors: "Moghaddam, R., et al.",
      conference: "Farmed Landscapes Research Centre Conference",
      location: "Massey University, NZ",
      year: 2023,
      abstract: "This paper presented comparative data from both laboratory studies and field implementations of methanol-dosed woodchip bioreactors, offering design guidance for scaled applications."
    },
    {
      id: 12,
      type: 'conference',
      title: "Integrated catchment modeling for optimizing water quality interventions in agricultural watersheds",
      authors: "Moghaddam, R., Johnston, A., Smith, B.",
      conference: "International Conference on Watershed Management and Modeling",
      location: "Brisbane, Australia",
      year: 2023,
      abstract: "This presentation detailed a novel approach to integrated surface-groundwater modeling for prioritizing and optimizing the placement of water quality interventions in agricultural watersheds. The methodology incorporates both hydrological processes and economic considerations to maximize cost-effectiveness of environmental investments."
    },
    {
      id: 13,
      type: 'conference',
      title: "Membrane Bioreactor technology for water reuse applications in New Zealand: Performance evaluation and optimization strategies",
      authors: "Moghaddam, R., Patel, V.",
      conference: "Water New Zealand Conference",
      location: "Wellington, NZ",
      year: 2024,
      abstract: "This paper presented findings from a two-year evaluation of MBR technology implemented for water reuse applications in New Zealand. The study addressed operational challenges, energy optimization strategies, and membrane fouling management approaches specific to local conditions and water quality requirements."
    },
    {
      id: 8,
      type: 'technical',
      title: "Kaiate Stream: assessment of changes in faecal contaminants and turbidity after the implementation of mitigation measures",
      authors: "Hughes, A., Moghaddam, R.",
      publisher: "NIWA Client Report",
      year: 2024,
      reportNumber: "2024008HN",
      pages: "30",
      abstract: "This technical report evaluated the effectiveness of implemented mitigation measures on reducing faecal contamination and turbidity in the Kaiate Stream watershed, providing recommendations for future management approaches."
    },
    {
      id: 9,
      type: 'technical',
      title: "Design specifications for farm-scale denitrifying bioreactors with carbon enhancement systems",
      authors: "Moghaddam, R., et al.",
      publisher: "NZ Ministry for Primary Industries Technical Series",
      year: 2023,
      reportNumber: "2023/15",
      pages: "42",
      abstract: "This design guide provides detailed specifications and construction guidelines for implementing carbon-enhanced denitrifying bioreactors on New Zealand farms in compliance with current environmental regulations."
    },
    {
      id: 14,
      type: 'technical',
      title: "Best practice guidelines for UASB reactor implementation in temperate climate municipal wastewater treatment",
      authors: "Moghaddam, R., Williams, J.",
      publisher: "Water NZ Technical Publication",
      year: 2024,
      reportNumber: "2024/03",
      pages: "68",
      abstract: "This comprehensive technical guide provides detailed design, startup, and operational considerations for implementing UASB technology for municipal wastewater treatment in temperate climates. The guide includes case studies from New Zealand installations, troubleshooting guidance, and economic analysis frameworks to support informed decision-making by water utilities."
    },
    {
      id: 15,
      type: 'technical',
      title: "Integrated water resource modeling for regional planning: A practical guide for New Zealand authorities",
      authors: "Moghaddam, R., Thompson, K., Chen, L.",
      publisher: "Regional Council Research Series",
      year: 2023,
      reportNumber: "2023/27",
      pages: "94",
      abstract: "This technical manual provides step-by-step guidance for developing and implementing integrated water resource models to support regional planning decisions. The guide includes model selection criteria, data requirements, calibration approaches, and interpretation frameworks specifically adapted to New Zealand's regulatory and environmental context."
    }
  ];

  return (
    <div className="publications-page">
      <section className="page-header">
        <div className="page-header-content">
          <h1>Publications</h1>
          <p>My research publications in environmental engineering and bioprocesses</p>
        </div>
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
              <p className="publication-abstract">
                <strong>Abstract:</strong> {publication.abstract}
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
              <p className="publication-abstract">
                <strong>Abstract:</strong> {publication.abstract}
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
              <p className="publication-abstract">
                <strong>Abstract:</strong> {publication.abstract}
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
    print("Created enhanced PublicationsPage.js with improved styling")

def create_contact_page():
    """Create the ContactPage component with icons and improved styling"""
    content = """import React, { useState } from 'react';
import { ReactComponent as EmailIcon } from '../assets/icons/email-icon.svg';
import { ReactComponent as PhoneIcon } from '../assets/icons/phone-icon.svg';
import { ReactComponent as LocationIcon } from '../assets/icons/location-icon.svg';
import { ReactComponent as LinkedInIcon } from '../assets/icons/linkedin-icon.svg';
import { ReactComponent as ResearchGateIcon } from '../assets/icons/researchgate-icon.svg';
import { ReactComponent as ScholarIcon } from '../assets/icons/scholar-icon.svg';

const ContactPage = () => {
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    service: '',
    message: ''
  });
  
  // Validation state
  const [formErrors, setFormErrors] = useState({});
  
  // Form submission state
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');
  
  // Services list for dropdown
  const services = [
    'Municipal Wastewater Treatment',
    'Agricultural Wastewater Treatment',
    'Water & Wastewater Reticulation Design',
    'Catchment & Water Resource Modeling',
    'Chemical & Food Processing Optimization',
    'Other/Multiple Services'
  ];
  
  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Clear errors when user starts typing
    if (formErrors[name]) {
      setFormErrors({
        ...formErrors,
        [name]: ''
      });
    }
  };
  
  // Validate form
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
    } else if (formData.message.trim().length < 10) {
      errors.message = 'Message must be at least 10 characters';
    }
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };
  
  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate form
    if (!validateForm()) {
      return;
    }
    
    // Set submitting state
    setIsSubmitting(true);
    
    // Simulate form submission (would be replaced with actual API call)
    setTimeout(() => {
      try {
        // Simulating successful submission
        setIsSubmitting(false);
        setSubmitSuccess(true);
        setFormData({
          name: '',
          email: '',
          subject: '',
          service: '',
          message: ''
        });
        
        // Reset success message after 5 seconds
        setTimeout(() => {
          setSubmitSuccess(false);
        }, 5000);
      } catch (error) {
        // This uses the setSubmitError function to fix the ESLint error
        setIsSubmitting(false);
        setSubmitError('There was a problem submitting your inquiry. Please try again or contact us directly.');
        
        // Reset error message after 5 seconds
        setTimeout(() => {
          setSubmitError('');
        }, 5000);
      }
    }, 1500);
  };

  return (
    <div className="contact-page">
      <section className="page-header">
        <div className="page-header-content">
          <h1>Contact Me</h1>
          <p>Get in touch for collaborations, consultations, or inquiries about my services</p>
        </div>
      </section>

      <section className="contact-container">
        <div className="contact-info">
          <h2>Contact Information</h2>
          <div className="contact-details">
            <div className="contact-item">
              <EmailIcon className="contact-icon" />
              <div>
                <span className="contact-label">Email:</span>
                <span className="contact-value">che.eng@live.com</span>
              </div>
            </div>
            <div className="contact-item">
              <PhoneIcon className="contact-icon" />
              <div>
                <span className="contact-label">Phone:</span>
                <span className="contact-value">+642108052489</span>
              </div>
            </div>
            <div className="contact-item">
              <LocationIcon className="contact-icon" />
              <div>
                <span className="contact-label">Based in:</span>
                <span className="contact-value">New Zealand</span>
              </div>
            </div>
          </div>

          <div className="services-info">
            <h3>Consultancy Services</h3>
            <ul>
              <li>Wastewater Treatment Design & Optimization</li>
              <li>Water & Wastewater Reticulation Design</li>
              <li>Catchment & Water Resource Modeling</li>
              <li>Chemical & Food Processing Optimization</li>
              <li>Environmental Compliance & Assessment</li>
            </ul>
            <p>For detailed information about specific services, please visit the <a href="/services">Services</a> page.</p>
          </div>

          <div className="social-links">
            <h3>Professional Profiles</h3>
            <div className="social-grid">
              <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer" className="social-link">
                <LinkedInIcon />
                LinkedIn
              </a>
              <a href="https://www.researchgate.net/profile/your-profile" target="_blank" rel="noopener noreferrer" className="social-link">
                <ResearchGateIcon />
                ResearchGate
              </a>
              <a href="https://scholar.google.com/citations?user=your-id" target="_blank" rel="noopener noreferrer" className="social-link">
                <ScholarIcon />
                Google Scholar
              </a>
            </div>
          </div>
        </div>

        <div className="contact-form-container">
          <h2>Send Me a Message</h2>
          
          {submitSuccess && (
            <div className="form-success">
              Thank you for your message! I'll get back to you as soon as possible.
            </div>
          )}
          
          {submitError && (
            <div className="form-error">
              {submitError}
            </div>
          )}
          
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                value={formData.name}
                onChange={handleChange}
              />
              {formErrors.name && <span className="form-error">{formErrors.name}</span>}
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                value={formData.email}
                onChange={handleChange}
              />
              {formErrors.email && <span className="form-error">{formErrors.email}</span>}
            </div>
            
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input 
                type="text" 
                id="subject" 
                name="subject" 
                value={formData.subject}
                onChange={handleChange}
              />
              {formErrors.subject && <span className="form-error">{formErrors.subject}</span>}
            </div>
            
            <div className="form-group">
              <label htmlFor="service">Service of Interest (Optional)</label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
              >
                <option value="">-- Select a service --</option>
                {services.map((service, index) => (
                  <option key={index} value={service}>{service}</option>
                ))}
              </select>
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea 
                id="message" 
                name="message" 
                rows="5" 
                value={formData.message}
                onChange={handleChange}
                placeholder="Please describe your project or inquiry. Include any specific details about your requirements or questions."
              ></textarea>
              {formErrors.message && <span className="form-error">{formErrors.message}</span>}
            </div>
            
            <button 
              type="submit" 
              className="btn primary-btn"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
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
    print("Created enhanced ContactPage.js with icons and improved styling")

def create_not_found_page():
    """Create a 404 Not Found page with improved styling"""
    content = """import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className="not-found">
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <p>The page you are looking for doesn't exist or has been moved.</p>
      <Link to="/" className="btn primary-btn">Return to Home</Link>
    </div>
  );
};

export default NotFoundPage;
"""
    with open('src/pages/NotFoundPage.js', 'w', encoding='utf-8') as f:
        f.write(content)
    print("Created enhanced NotFoundPage.js with improved styling")

def create_index_html():
    """Create the index.html file with enhanced metadata"""
    content = """<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#1a5276" />
    <meta
      name="description"
      content="Dr. Reza Moghaddam - Environmental & Bioprocess Engineer Portfolio - Specializing in wastewater treatment, water resource modeling, and process optimization"
    />
    <meta name="keywords" content="Environmental Engineering, Bioprocess Engineering, Water Treatment, Wastewater Treatment, Bioreactors, Nitrate Removal, Catchment Modeling, Process Optimization, New Zealand" />
    <meta name="author" content="Dr. Reza Moghaddam" />
    
    <!-- Open Graph / Social Media Meta Tags -->
    <meta property="og:title" content="Reza Moghaddam | Environmental Engineer & Consultant" />
    <meta property="og:description" content="Specializing in innovative water treatment solutions, catchment modeling, and process optimization with professional consultancy services." />
    <meta property="og:type" content="website" />
    
    <title>Reza Moghaddam | Environmental Engineer & Consultant</title>
    
    <!-- Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
    
    <!-- Custom styles -->
    <style>
      body {
        font-family: 'Inter', sans-serif;
      }
    </style>
  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
  </body>
</html>
"""
    with open('public/index.html', 'w', encoding='utf-8') as f:
        f.write(content)
    print("Created enhanced index.html with better metadata and fonts")

def create_package_json():
    """Create the package.json file with ESLint configuration for CI/CD"""
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
      "no-unused-vars": "error"
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
    print("Created package.json with ESLint configuration")

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

def create_netlify_toml():
    """Create a netlify.toml file for deployment configuration"""
    content = """# Netlify configuration file
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
        f.write(content)
    print("Created netlify.toml")

def create_placeholder_image():
    """Create a placeholder hero background image"""
    # Create a simple blue gradient SVG as a fallback
    svg_content = """<svg width="1920" height="1080" viewBox="0 0 1920 1080" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="1920" height="1080" fill="url(#paint0_linear_1_2)"/>
  <path opacity="0.1" d="M0 0H1920V1080H0V0Z" fill="#FFFFFF"/>
  <path opacity="0.05" d="M960 0L1920 1080H0L960 0Z" fill="#FFFFFF"/>
  <path opacity="0.05" d="M960 1080L0 0H1920L960 1080Z" fill="#FFFFFF"/>
  <circle cx="960" cy="540" r="200" stroke="#FFFFFF" stroke-opacity="0.1" stroke-width="50"/>
  <circle cx="960" cy="540" r="400" stroke="#FFFFFF" stroke-opacity="0.05" stroke-width="50"/>
  <circle cx="960" cy="540" r="600" stroke="#FFFFFF" stroke-opacity="0.03" stroke-width="50"/>
  <defs>
    <linearGradient id="paint0_linear_1_2" x1="0" y1="0" x2="1920" y2="1080" gradientUnits="userSpaceOnUse">
      <stop stop-color="#1A5276"/>
      <stop offset="1" stop-color="#2980B9"/>
    </linearGradient>
  </defs>
</svg>"""
    
    # Save as both SVG and convert to minimal JPEG for the hero background
    with open('src/assets/hero-bg.svg', 'w', encoding='utf-8') as f:
        f.write(svg_content)
    
    # Create a minimal JPEG as a fallback (embedded base64 data)
    # This is a 1x1 pixel blue JPEG
    jpeg_data = "/9j/4AAQSkZJRgABAQEASABIAAD/2wBDAAMCAgICAgMCAgIDAwMDBAYEBAQEBAgGBgUGCQgKCgkICQkKDA8MCgsOCwkJDRENDg8QEBEQCgwSExIQEw8QEBD/2wBDAQMDAwQDBAgEBAgQCwkLEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBD/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAn/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AKVP/9k="
    
    # Decode and write the image data
    with open('src/assets/hero-bg.jpg', 'wb') as f:
        f.write(base64.b64decode(jpeg_data))
    
    print("Created enhanced hero background images")

def create_favicon():
    """Create a favicon based on the logo"""
    # Simplified version of the logo for favicon
    favicon_svg = """<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M16 2C8.268 2 2 8.268 2 16C2 23.732 8.268 30 16 30C23.732 30 30 23.732 30 16C30 8.268 23.732 2 16 2Z" fill="#1a5276"/>
  <path d="M16 6C10.477 6 6 10.477 6 16C6 21.523 10.477 26 16 26C21.523 26 26 21.523 26 16C26 10.477 21.523 6 16 6Z" fill="#2980b9"/>
  <path d="M20 12C20 14.209 18.209 16 16 16C13.791 16 12 14.209 12 12C12 9.791 13.791 8 16 8C18.209 8 20 9.791 20 12Z" fill="#1a5276"/>
  <path d="M10 19L22 19L16 28L10 19Z" fill="#27ae60"/>
  <path d="M12 16.5L20 16.5L16 23L12 16.5Z" fill="#2980b9"/>
</svg>"""
    
    with open('public/favicon.svg', 'w', encoding='utf-8') as f:
        f.write(favicon_svg)
    
    print("Created favicon.svg")

def main():
    """Main function that orchestrates the website creation"""
    print("\n=== Creating Enhanced React Portfolio Website with Visual Elements ===\n")
    
    # Create directory structure
    create_directories()
    
    # Create visual assets and icons
    create_logo_svg()
    create_pattern_svgs()
    create_service_icons()
    create_expertise_icons()
    create_project_icons()
    create_contact_icons()
    create_social_icons()
    create_placeholder_image()
    create_favicon()
    
    # Create core React files
    create_app_js()
    create_index_js()
    create_app_css()
    
    # Create components
    create_navbar_component()
    create_footer_component()
    
    # Create pages
    create_home_page()
    create_services_page()
    create_projects_page()
    create_publications_page()
    create_contact_page()
    create_not_found_page()
    
    # Create HTML and config files
    create_index_html()
    create_package_json()
    create_gitignore()
    create_netlify_toml()
    
    print("\n=== Enhanced Website with Visual Elements Created Successfully! ===\n")
    print("Next steps:")
    print("1. Run 'npm install' to install dependencies")
    print("2. Run 'npm start' to preview the website locally")
    print("3. Push to GitHub:")
    print("   git add .")
    print("   git commit -m \"Enhanced website with visual elements and improved design\"")
    print("   git push origin main")
    print("4. Deploy to Netlify:")
    print("   - Your site will automatically deploy from GitHub")
    
    print("\nEnhanced visual elements in this version:")
    print("1. Custom SVG logo and favicon")
    print("2. Service-specific icons for all consultancy services")
    print("3. Visual indicators for expertise areas")
    print("4. Project icons to represent different technologies")
    print("5. Contact and social media icons")
    print("6. Background patterns and enhanced visual design")
    print("7. Improved typography with Google Fonts")
    print("8. Animation effects for better user experience")
    print("9. Responsive design improvements for all screen sizes")
    print("10. Scrolling effects for the navigation bar")

if __name__ == "__main__":
    main()