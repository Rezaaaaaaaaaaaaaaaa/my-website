import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaChevronDown } from 'react-icons/fa';

const Dropdown = ({ title, items, closeMainMenu }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const location = useLocation();

  const toggleDropdown = () => setIsOpen(!isOpen);

  const closeDropdown = () => setIsOpen(false);

  const handleItemClick = () => {
    closeDropdown();
    closeMainMenu();
  };

  const isActive = (path) => location.pathname === path;

  const isDropdownActive = items.some(item => isActive(item.path));

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        closeDropdown();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <li className="dropdown" ref={dropdownRef}>
      <button 
        className={`dropdown-toggle ${isDropdownActive ? 'active' : ''}`}
        onClick={toggleDropdown}
      >
        {title}
        <FaChevronDown className={`dropdown-arrow ${isOpen ? 'open' : ''}`} />
      </button>
      
      {isOpen && (
        <ul className="dropdown-menu">
          {items.map((item, index) => (
            <li key={index} className="dropdown-item">
              <Link 
                to={item.path} 
                className={`dropdown-link ${isActive(item.path) ? 'active' : ''}`}
                onClick={handleItemClick}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

export default Dropdown;