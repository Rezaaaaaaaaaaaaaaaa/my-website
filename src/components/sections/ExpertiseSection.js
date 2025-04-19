import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Section, { SectionHeader } from '../common/Section';

const ExpertiseSection = () => {
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
  
  const expertiseItems = [
    {
      title: "Environmental Engineering",
      skills: [
        "Water & Wastewater Treatment",
        "Denitrifying Bioreactors",
        "Agricultural Impact Mitigation",
        "NZ Environmental Regulations"
      ]
    },
    {
      title: "Bioprocess Engineering",
      skills: [
        "Bioreactor Design & Optimization",
        "Bioethanol Production",
        "Fermentation Process Control",
        "Scale-up Methodology"
      ]
    },
    {
      title: "Analysis & Research",
      skills: [
        "Techno-Economic Analysis",
        "Life Cycle Assessment",
        "Data Analysis (Python, R)",
        "Scientific Publication"
      ]
    }
  ];
  
  return (
    <Section id="expertise" background="white">
      <SectionHeader
        title="Areas of Expertise"
        subtitle="Specialized knowledge and proven capabilities in environmental and bioprocess engineering"
      />
      
      <motion.div 
        ref={ref}
        className="expertise-grid"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        {expertiseItems.map((item, index) => (
          <motion.div 
            key={index} 
            className="expertise-card"
            variants={itemVariants}
          >
            <h3>{item.title}</h3>
            <ul>
              {item.skills.map((skill, skillIndex) => (
                <li key={skillIndex}>{skill}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
};

export default ExpertiseSection;
