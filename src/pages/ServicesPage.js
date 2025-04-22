import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// Import diagrams
import wastewaterDiagram from '../assets/diagrams/wastewater-process.svg';
import catchmentDiagram from '../assets/diagrams/catchment-model.svg';
import processDiagram from '../assets/diagrams/process-optimization.svg';

const ServicesPage = () => {
  const [services, setServices] = useState(null);

  useEffect(() => {
    // Fetch the services data
    const fetchServices = async () => {
      try {
        // In a real application, this would be an API call
        // For this demo, we're importing the JSON directly
        const data = await import('../data/services.json');
        setServices(data.default);
      } catch (error) {
        console.error('Error loading services data:', error);
      }
    };

    fetchServices();
  }, []);

  // Function to get the correct diagram for a category
  const getCategoryDiagram = (categoryId) => {
    switch(categoryId) {
      case 'wastewater':
        return wastewaterDiagram;
      case 'catchment':
        return catchmentDiagram;
      case 'processing':
        return processDiagram;
      default:
        return null;
    }
  };

  // Function to get the icon path for a category
  const getCategoryIcon = (iconName) => {
    try {
      return require(`../assets/icons/${iconName}`);
    } catch (error) {
      return null;
    }
  };

  if (!services) {
    return <div className="services-container">Loading services...</div>;
  }

  return (
    <div className="services-page">
      <section className="page-header">
        <h1>Consultancy Services</h1>
        <p>Comprehensive environmental engineering solutions backed by research and practical experience</p>
      </section>

      <div className="services-container">
        {services.categories.map(category => (
          <section className="service-category" key={category.id}>
            <h2>
              {category.icon && <img src={require(`../assets/icons/${category.icon}`)} alt="" width="30" height="30" style={{ marginRight: '10px', verticalAlign: 'middle' }} />}
              {category.title}
            </h2>
            
            {/* Add diagrams for categories that have them */}
            {category.diagram && (
              <div className="diagram-container">
                <img src={getCategoryDiagram(category.id)} alt={`${category.title} diagram`} />
                <p className="diagram-caption">Figure: {category.title} Process Flow</p>
              </div>
            )}
            
            {/* Services Grid or Full Width Service */}
            {category.id === 'reticulation' ? (
              // Special layout for reticulation services
              <div className="full-width-service">
                {category.services.map(service => (
                  <div key={service.id}>
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                    
                    <div className="process-steps">
                      {service.steps.map(step => (
                        <div className="process-step" key={step.number}>
                          <span className="step-number">{step.number}</span>
                          <h4>{step.title}</h4>
                          <p>{step.description}</p>
                        </div>
                      ))}
                    </div>
                    
                    <h4 style={{ marginTop: '1.5rem' }}>Services Include:</h4>
                    <ul>
                      {service.serviceItems.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            ) : (
              // Standard layout for other service categories
              <div className="service-grid">
                {category.services.map(service => (
                  <div className="service-card" key={service.id}>
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                    
                    {/* Render systems if they exist */}
                    {service.systems && service.systems.map((system, index) => (
                      <div key={index}>
                        <h4>{system.title}</h4>
                        <ul>
                          {system.items && Array.isArray(system.items) ? (
                            system.items.map((item, itemIndex) => (
                              <li key={itemIndex}>
                                {typeof item === 'string' ? (
                                  item
                                ) : (
                                  <><strong>{item.name}:</strong> {item.description}</>
                                )}
                              </li>
                            ))
                          ) : null}
                        </ul>
                      </div>
                    ))}
                    
                    {/* Render approaches if they exist */}
                    {service.approaches && (
                      <div>
                        <h4>Modeling Approaches:</h4>
                        <ul>
                          {service.approaches.map((approach, index) => (
                            <li key={index}><strong>{approach.name}:</strong> {approach.description}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                    
                    {/* Render service items for integrated management */}
                    {service.serviceItems && (
                      <div>
                        <h4>Services Include:</h4>
                        <ul>
                          {service.serviceItems.map((item, index) => (
                            <li key={index}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                    
                    {/* Render specialized services for process optimization */}
                    {service.services && (
                      <div>
                        <h4>Optimization Services:</h4>
                        <ul>
                          {service.services.map((item, index) => (
                            <li key={index}><strong>{item.name}:</strong> {item.description}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                    
                    {/* Add note if it exists */}
                    {service.note && (
                      <p style={{ fontStyle: 'italic', marginTop: '1rem', fontSize: '0.9rem' }}>
                        {service.note}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            )}
          </section>
        ))}
        
        {/* Call to Action */}
        <section className="contact-cta">
          <h2>Ready to Discuss Your Project?</h2>
          <p>Whether you're looking to optimize an existing system or design something new, I'm here to help with innovative, sustainable solutions tailored to your specific needs.</p>
          <Link to="/contact" className="btn primary-btn">Contact for Consultation</Link>
        </section>
      </div>
    </div>
  );
};

export default ServicesPage;
