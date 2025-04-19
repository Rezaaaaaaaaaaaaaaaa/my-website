import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import Button from '../components/common/Button';
import { projects } from '../data/projects';

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState(null);
  const [prevProject, setPrevProject] = useState(null);
  const [nextProject, setNextProject] = useState(null);
  
  useEffect(() => {
    // Find the current project
    const projectId = parseInt(id);
    const currentProject = projects.find(p => p.id === projectId);
    
    // If project not found, redirect to projects page
    if (!currentProject) {
      navigate('/projects');
      return;
    }
    
    setProject(currentProject);
    
    // Find previous and next projects
    const currentIndex = projects.findIndex(p => p.id === projectId);
    setPrevProject(currentIndex > 0 ? projects[currentIndex - 1] : null);
    setNextProject(currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null);
  }, [id, navigate]);
  
  if (!project) {
    return null; // Will redirect via useEffect if not found
  }
  
  return (
    <>
      <Helmet>
        <title>{project.title} | Projects | Dr. Reza Moghaddam</title>
        <meta name="description" content={project.description} />
      </Helmet>
      
      <div className="page">
        <section className="page-header">
          <div className="container">
            <h1>{project.title}</h1>
            <p>{project.description}</p>
          </div>
        </section>
        
        <section className="section bg-light">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="project-detail-container"
            >
              <div className="project-detail-content">
                <h2>Project Overview</h2>
                <p className="project-description">{project.details}</p>
                
                <h2 className="mt-lg">Key Metrics</h2>
                <div className="metrics-grid">
                  {Object.entries(project.metrics).map(([key, value]) => (
                    <div key={key} className="metric-item">
                      <span className="metric-label">{key.replace(/([A-Z])/g, ' $1').trim()}</span>
                      <span className="metric-value">{value}</span>
                    </div>
                  ))}
                </div>
                
                <h2 className="mt-lg">Technologies & Methods</h2>
                <div className="tech-tags">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
                
                {project.outcomes && (
                  <>
                    <h2 className="mt-lg">Outcomes & Impact</h2>
                    <p>{project.outcomes}</p>
                  </>
                )}
                
                <div className="project-navigation mt-xl">
                  <div className="d-flex justify-content-between">
                    {prevProject ? (
                      <Button
                        as="link"
                        to={`/projects/${prevProject.id}`}
                        variant="secondary"
                        icon={<FiArrowLeft />}
                      >
                        Previous Project
                      </Button>
                    ) : (
                      <div></div>
                    )}
                    
                    {nextProject && (
                      <Button
                        as="link"
                        to={`/projects/${nextProject.id}`}
                        variant="secondary"
                        className="ml-auto"
                      >
                        Next Project <FiArrowRight />
                      </Button>
                    )}
                  </div>
                  
                  <div className="text-center mt-lg">
                    <Button as="link" to="/projects" variant="link">
                      Back to All Projects
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ProjectDetail;
