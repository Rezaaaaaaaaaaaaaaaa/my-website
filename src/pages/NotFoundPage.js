import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logos/main-logo.svg';

const NotFoundPage = () => {
  return (
    <div className="not-found">
      <img src={logo} alt="RMES Logo" style={{ width: '150px', marginBottom: '2rem' }} />
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <p>The page you are looking for doesn't exist or has been moved.</p>
      <Link to="/" className="btn primary-btn">Return to Home</Link>
    </div>
  );
};

export default NotFoundPage;
