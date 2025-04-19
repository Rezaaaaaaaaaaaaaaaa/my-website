import React from 'react';
import { Link } from 'react-router-dom';
import Card, { CardBody, CardTitle, CardText } from './Card';
import Button from './Button';

const ProjectCard = ({ project }) => {
  return (
    <Card className="project-card">
      <CardBody>
        <CardTitle>{project.title}</CardTitle>
        <CardText>{project.description}</CardText>
        
        <div className="project-metrics">
          {Object.entries(project.metrics).map(([key, value]) => (
            <span key={key}>
              {key.replace(/([A-Z])/g, ' $1').trim()}: {value}
            </span>
          ))}
        </div>
        
        <div className="card-footer">
          <Button 
            as="link" 
            to={`/projects/${project.id}`} 
            variant="link"
          >
            Learn More
          </Button>
        </div>
      </CardBody>
    </Card>
  );
};

export default ProjectCard;
