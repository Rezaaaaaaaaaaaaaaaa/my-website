import React from 'react';
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
