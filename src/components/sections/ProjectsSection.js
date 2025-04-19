import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Section, { SectionHeader } from '../common/Section';
import ProjectCard from '../common/ProjectCard';
import Button from '../common/Button';
import { Link } from 'react-router-dom';

const ProjectsSection = ({ projects, limit = 3 }) => {
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
  
  // Get featured or limited projects
  const displayedProjects = projects
    .filter(project => limit ? true : project.featured)
    .slice(0, limit);
  
  return (
    <Section id="projects" background="light">
      <SectionHeader
        title="Featured Projects"
        subtitle="Highlighted research and engineering projects in environmental solutions"
      />
      
      <motion.div 
        ref={ref}
        className="project-grid"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        {displayedProjects.map((project) => (
          <motion.div key={project.id} variants={itemVariants}>
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </motion.div>
      
      <div className="section-cta">
        <Button as="link" to="/projects" variant="primary">
          View All Projects
        </Button>
      </div>
    </Section>
  );
};

export default ProjectsSection;
