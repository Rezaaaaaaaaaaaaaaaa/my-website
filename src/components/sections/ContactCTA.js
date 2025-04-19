import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Button from '../common/Button';

const ContactCTA = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  
  return (
    <section className="contact-cta">
      <motion.div 
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
      >
        <h2>Interested in Collaboration?</h2>
        <p>
          I'm always open to discussing research projects, consulting opportunities, 
          or innovative solutions for environmental challenges.
        </p>
        <Button as="link" to="/contact" variant="primary" size="large">
          Get in Touch
        </Button>
      </motion.div>
    </section>
  );
};

export default ContactCTA;
