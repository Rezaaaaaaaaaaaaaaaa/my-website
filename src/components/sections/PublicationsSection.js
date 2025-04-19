import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Section, { SectionHeader } from '../common/Section';
import Button from '../common/Button';
import { Link } from 'react-router-dom';

const PublicationsSection = ({ publications, limit = 2 }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };
  
  // Get recent publications (journal articles)
  const recentPublications = publications
    .filter(pub => pub.type === 'journal')
    .sort((a, b) => b.year - a.year)
    .slice(0, limit);
  
  return (
    <Section id="publications" background="white">
      <SectionHeader
        title="Recent Publications"
        subtitle="Latest research contributions to environmental engineering"
      />
      
      <motion.div 
        ref={ref}
        className="publication-list"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        {recentPublications.map((publication) => (
          <motion.div 
            key={publication.id} 
            className="publication-item"
            variants={itemVariants}
          >
            <h3>{publication.title}</h3>
            <p>{publication.journal}, {publication.year}</p>
          </motion.div>
        ))}
      </motion.div>
      
      <div className="section-cta">
        <Button as="link" to="/publications" variant="primary">
          View All Publications
        </Button>
      </div>
    </Section>
  );
};

export default PublicationsSection;
