import React from 'react';
import Card, { CardBody, CardTitle } from './Card';

const PublicationCard = ({ publication }) => {
  return (
    <Card className="publication-card">
      <CardBody>
        <CardTitle>{publication.title}</CardTitle>
        <p className="publication-meta">
          {publication.authors} ({publication.year})
        </p>
        
        {publication.type === 'journal' && (
          <p className="publication-meta">
            {publication.journal}, {publication.volume}, {publication.pages}
          </p>
        )}
        
        {publication.type === 'conference' && (
          <p className="publication-meta">
            {publication.conference}, {publication.location}
          </p>
        )}
        
        {publication.type === 'technical' && (
          <p className="publication-meta">
            {publication.publisher}, {publication.reportNumber}, {publication.pages} pages
          </p>
        )}
        
        <p className="publication-abstract">
          <strong>Abstract:</strong> {publication.abstract}
        </p>
        
        {publication.doi && (
          <a 
            href={`https://doi.org/${publication.doi}`} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="publication-link"
          >
            DOI: {publication.doi}
          </a>
        )}
      </CardBody>
    </Card>
  );
};

export default PublicationCard;
