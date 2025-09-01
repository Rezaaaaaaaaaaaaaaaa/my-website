import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import Dropdown from './Dropdown';
import Logo from './Logo';
import { servicesData, serviceCategories } from '../data/servicesData';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const isActive = (path) => location.pathname === path;

  // Group services by category for the dropdowns
  const navLinks = Object.values(serviceCategories).map(category => {
    const items = servicesData
      .filter(service => service.category === category && service.link)
      .map(service => ({ name: service.title, path: service.link }));

    return { title: category, items };
  }).filter(category => category.items.length > 0);

  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMenu}>
            <Logo size="small" variant="compact" />
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

            {navLinks.map(link => (
              <Dropdown
                key={link.title}
                title={link.title}
                items={link.items}
                closeMainMenu={closeMenu}
              />
            ))}

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