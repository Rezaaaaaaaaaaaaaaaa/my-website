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

  const processEquipmentItems = [
    { name: 'Reactor', path: '/reactor' },
    { name: 'Distillation', path: '/distillation' },
    { name: 'Heat Exchanger', path: '/heat-exchanger' },
    { name: 'Separator', path: '/separator' }
  ];

  const treatmentSystemsItems = [
    { name: 'Extraction', path: '/extraction' },
    { name: 'Reaction', path: '/reaction' }
  ];

  const analysisServicesItems = [
    { name: 'QMRA Analysis', path: '/qmra-analysis' },
    { name: 'Machine Learning', path: '/machine-learning' },
    { name: 'Mechanistic Analysis', path: '/mechanistic-analysis' },
    { name: 'Rating Curves', path: '/rating-curves' }
  ];

  const biologicalTreatmentItems = [
    { name: 'Activated Sludge', path: '/activated-sludge' },
    { name: 'Biofilm Reactors', path: '/biofilm-reactors' },
    { name: 'Anaerobic Digestion', path: '/anaerobic-digestion' },
    { name: 'Constructed Wetlands', path: '/constructed-wetlands' },
    { name: 'Membrane Bioreactors', path: '/membrane-bioreactors' },
    { name: 'Trickling Filters', path: '/trickling-filters' }
  ];

  const chemicalProcessesItems = [
    { name: 'Coagulation & Flocculation', path: '/coagulation-flocculation' },
    { name: 'Chemical Precipitation', path: '/chemical-precipitation' },
    { name: 'Ion Exchange', path: '/ion-exchange' },
    { name: 'Advanced Oxidation', path: '/advanced-oxidation' },
    { name: 'Electrochemical Treatment', path: '/electrochemical-treatment' },
    { name: 'pH Adjustment', path: '/ph-adjustment' }
  ];

  const foodEngineeringItems = [
    { name: 'Dairy Processing', path: '/dairy-processing' },
    { name: 'Meat Processing', path: '/meat-processing' },
    { name: 'Wine & Beverage', path: '/wine-beverage' },
    { name: 'Seafood Processing', path: '/seafood-processing' },
    { name: 'Kiwifruit Processing', path: '/kiwifruit-processing' },
    { name: 'Honey Processing', path: '/honey-processing' },
    { name: 'Food Safety Systems', path: '/food-safety-systems' }
  ];

  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMenu}>
            AquaTech Solutions NZ
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
            <li>
              <Link 
                to="/contact" 
                className={`nav-link ${isActive('/contact') ? 'active' : ''}`}
                onClick={closeMenu}
              >
                Contact
              </Link>
            </li>

            <Dropdown 
              title="Process Equipment" 
              items={processEquipmentItems} 
              closeMainMenu={closeMenu} 
            />

            <Dropdown 
              title="Treatment Systems" 
              items={treatmentSystemsItems} 
              closeMainMenu={closeMenu} 
            />

            <Dropdown 
              title="Analysis Services" 
              items={analysisServicesItems} 
              closeMainMenu={closeMenu} 
            />

            <Dropdown 
              title="Biological Treatment" 
              items={biologicalTreatmentItems} 
              closeMainMenu={closeMenu} 
            />

            <Dropdown 
              title="Chemical Processes" 
              items={chemicalProcessesItems} 
              closeMainMenu={closeMenu} 
            />

            <Dropdown 
              title="Food Engineering" 
              items={foodEngineeringItems} 
              closeMainMenu={closeMenu} 
            />

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