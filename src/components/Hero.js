import React from 'react';
import './Hero.css';

const Hero = ({ title, subtitle, description, children }) => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          {title && <h1>{title}</h1>}
          {subtitle && <p className="subtitle">{subtitle}</p>}
          {description && <p className="description">{description}</p>}
          {children}
        </div>
      </div>
    </section>
  );
};

export default Hero;