import React, { useState, useEffect } from 'react';
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
