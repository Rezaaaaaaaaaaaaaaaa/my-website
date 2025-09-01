import React from 'react';
import { Link } from 'react-router-dom';
import './ServiceCard.css';

const ServiceCard = ({ icon, title, description, link }) => {
  const content = (
    <>
      <div className="card-icon">{icon}</div>
      <h3>{title}</h3>
      <p>{description}</p>
    </>
  );

  if (link) {
    return (
      <Link to={link} className="card service-card linked">
        {content}
      </Link>
    );
  }

  return (
    <div className="card service-card">
      {content}
    </div>
  );
};

export default ServiceCard;
