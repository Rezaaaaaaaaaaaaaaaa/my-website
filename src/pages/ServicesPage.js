import React from 'react';
import { servicesData, serviceCategories } from '../data/servicesData';
import ServiceCard from '../components/ServiceCard';
import './ProcessUnitPage.css'; // Reusing some styles for consistency

const ServicesPage = () => {
  const slugify = (text) => {
    return text.toString().toLowerCase()
      .replace(/\s+/g, '-')           // Replace spaces with -
      .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
      .replace(/\-\-+/g, '-')         // Replace multiple - with single -
      .replace(/^-+/, '')             // Trim - from start of text
      .replace(/-+$/, '');            // Trim - from end of text
  };

  const groupedServices = Object.values(serviceCategories).map(category => ({
    title: category,
    id: slugify(category),
    services: servicesData.filter(service => service.category === category)
  })).filter(group => group.services.length > 0);

  return (
    <div>
      <section className="hero" style={{ padding: 'var(--space-16) 0' }}>
        <div className="container">
          <div className="hero-content">
            <h1>Our Engineering Services</h1>
            <p className="description">
              Professional engineering consulting services delivering process optimization,
              regulatory compliance, and technical excellence across New Zealand's industrial sectors.
            </p>
          </div>
        </div>
      </section>

      {groupedServices.map(group => (
        <section key={group.title} id={group.id} className="section">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">{group.title}</h2>
            </div>
            <div className="grid grid-auto">
              {group.services.map(service => (
                <ServiceCard
                  key={service.id}
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                  link={service.link}
                />
              ))}
            </div>
          </div>
        </section>
      ))}
    </div>
  );
};

export default ServicesPage;