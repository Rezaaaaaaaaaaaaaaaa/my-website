import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import Dropdown from './Dropdown';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const isActive = (path) => location.pathname === path;

  // Process equipment and technologies
  const engineeringServicesItems = [
    { name: 'Filtration Systems', path: '/filtration' },
    { name: 'Reverse Osmosis', path: '/reverse-osmosis' },
    { name: 'Ultrafiltration', path: '/ultrafiltration' },
    { name: 'Ion Exchange', path: '/ion-exchange' }
  ];

  const environmentalSolutionsItems = [
    { name: 'Bioreactors', path: '/bioreactor' },
    { name: 'Membrane Bioreactor', path: '/membrane-bioreactor' },
    { name: 'UV Disinfection', path: '/uv-disinfection' },
    { name: 'Activated Carbon', path: '/activated-carbon' }
  ];

  const processUnitsItems = [
    { name: 'Crystallization', path: '/crystallization' },
    { name: 'Distillation', path: '/distillation' },
    { name: 'Heat Exchangers', path: '/heat-exchanger' },
    { name: 'Separators', path: '/separator' }
  ];

  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMenu}>
            RMES
          </Link>
          
          <ul className={`nav-menu ${isOpen ? 'nav-menu-open' : ''}`}>
            <li>
              <Link 
                to="/" 
                className={`nav-link ${isActive('/') ? 'active' : ''}`}
                onClick={closeMenu}
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                to="/services" 
                className={`nav-link ${isActive('/services') ? 'active' : ''}`}
                onClick={closeMenu}
              >
                Services
              </Link>
            </li>
            <li>
              <Link 
                to="/about" 
                className={`nav-link ${isActive('/about') ? 'active' : ''}`}
                onClick={closeMenu}
              >
                About
              </Link>
            </li>

            <Dropdown 
              title="Water Treatment" 
              items={engineeringServicesItems} 
              closeMainMenu={closeMenu} 
            />

            <Dropdown 
              title="Biological Systems" 
              items={environmentalSolutionsItems} 
              closeMainMenu={closeMenu} 
            />

            <Dropdown 
              title="Process Units" 
              items={processUnitsItems} 
              closeMainMenu={closeMenu} 
            />

            <li>
              <Link 
                to="/contact" 
                className={`nav-link ${isActive('/contact') ? 'active' : ''}`}
                onClick={closeMenu}
              >
                Contact
              </Link>
            </li>
          </ul>

          <button className="mobile-menu-btn" onClick={toggleMenu}>
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;