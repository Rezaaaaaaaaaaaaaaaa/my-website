import React from 'react';
import { motion } from 'framer-motion';
import Button from '../common/Button';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="hero-wave">
      <img src="/images/hero-bg.jpg" alt="Environmental Engineering" className="hero-image" />
      
      <div className="hero-content">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Dr. Reza Moghaddam
        </motion.h1>
        
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Environmental & Bioprocess Engineer
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Specializing in innovative water treatment solutions, sustainable technology design, 
          and environmental impact assessment.
        </motion.p>
        
        <motion.div 
          className="hero-buttons"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Button as="link" to="/projects" variant="primary" size="large">
            View Projects
          </Button>
          <Button as="link" to="/contact" variant="secondary" size="large">
            Contact Me
          </Button>
        </motion.div>
      </div>
      
      <div className="shape-divider">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="shape-fill"></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
