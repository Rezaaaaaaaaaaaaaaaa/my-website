import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Dr. Reza Moghaddam | Environmental Engineer</title>
        <meta name="description" content="Environmental & Bioprocess Engineer specializing in water treatment solutions, sustainable technology design, and environmental impact assessment." />
        <meta name="keywords" content="Environmental Engineering, Bioprocess Engineering, Water Treatment, Bioreactors, Nitrate Removal, New Zealand" />
        <link rel="canonical" href="https://yourwebsite.com" />
      </Helmet>
      
      <a href="#main-content" className="skip-to-content">
        Skip to content
      </a>
      
      <div className="app-container">
        <Navbar />
        <main id="main-content" className="main-content">
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
