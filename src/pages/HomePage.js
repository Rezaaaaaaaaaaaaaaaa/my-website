import React, { useEffect } from 'react';
import {
  FaSeedling,
  FaDatabase,
  FaGlobe,
  FaFlask
} from 'react-icons/fa';

const HomePage = () => {
  useEffect(() => {
    // Animation for scroll effects
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(el => observer.observe(el));

    return () => {
      fadeElements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="home-page">
      <nav className="dropdown-menu">
        <ul>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
      <section id="about" className="home-category">
        <h2>About</h2>
        <p>Learn more about Dr. Reza Moghaddam and his expertise.</p>
        <div className="home-grid">
          <div className="home-card">
            <FaSeedling className="home-icon" />
            <h3>Environmental Engineering</h3>
            <p>Specializing in water treatment and sustainable solutions.</p>
          </div>
        </div>
      </section>
      <section id="services" className="home-category">
        <h2>Services</h2>
        <p>Explore the range of consulting services offered.</p>
        <div className="home-grid">
          <div className="home-card">
            <FaDatabase className="home-icon" />
            <h3>Data Analysis</h3>
            <p>Advanced analytics for environmental data.</p>
          </div>
        </div>
      </section>
      <section id="projects" className="home-category">
        <h2>Projects</h2>
        <p>Discover innovative projects and their impact.</p>
        <div className="home-grid">
          <div className="home-card">
            <FaGlobe className="home-icon" />
            <h3>Global Initiatives</h3>
            <p>Collaborative efforts for sustainable development.</p>
          </div>
        </div>
      </section>
      <section id="contact" className="home-category">
        <h2>Contact</h2>
        <p>Get in touch for collaboration and inquiries.</p>
        <div className="home-grid">
          <div className="home-card">
            <FaFlask className="home-icon" />
            <h3>Reach Out</h3>
            <p>Contact Dr. Moghaddam for consulting services.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
