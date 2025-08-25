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

  // Consolidated service groups for better navigation efficiency
  const engineeringServicesItems = [
    { name: 'Process Equipment', path: '/services#equipment' },
    { name: 'Treatment Systems', path: '/services#treatment' },
    { name: 'Analysis Services', path: '/services#analysis' }
  ];

  const environmentalSolutionsItems = [
    { name: 'Biological Treatment', path: '/services#biological' },
    { name: 'Chemical Processes', path: '/services#chemical' },
    { name: 'Water & Marine', path: '/services#water' }
  ];

  const foodEngineeringItems = [
    { name: 'Dairy Processing', path: '/dairy-processing' },
    { name: 'Food Safety Systems', path: '/food-safety-systems' },
    { name: 'Process Optimization', path: '/services#optimization' }
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
              title="Engineering Services" 
              items={engineeringServicesItems} 
              closeMainMenu={closeMenu} 
            />

            <Dropdown 
              title="Environmental Solutions" 
              items={environmentalSolutionsItems} 
              closeMainMenu={closeMenu} 
            />

            <Dropdown 
              title="Food Engineering" 
              items={foodEngineeringItems} 
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