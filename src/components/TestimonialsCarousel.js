import React, { useState, useEffect } from 'react';
import { 
  FaChevronLeft, 
  FaChevronRight, 
  FaStar, 
  FaQuoteLeft,
  FaIndustry,
  FaMapMarkerAlt,
  FaAward,
  FaFilter
} from 'react-icons/fa';

const TestimonialsCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [filter, setFilter] = useState('all');

  const testimonials = [];

  const filterOptions = [
    { value: 'all', label: 'All Projects', count: testimonials.length },
    { value: 'water-treatment', label: 'Water Treatment', count: testimonials.filter(t => t.serviceCategory === 'water-treatment').length },
    { value: 'biological', label: 'Biological Processes', count: testimonials.filter(t => t.serviceCategory === 'biological').length },
    { value: 'chemical', label: 'Chemical Process', count: testimonials.filter(t => t.serviceCategory === 'chemical').length },
    { value: 'food', label: 'Food Engineering', count: testimonials.filter(t => t.serviceCategory === 'food').length }
  ];

  const filteredTestimonials = filter === 'all' 
    ? testimonials 
    : testimonials.filter(t => t.serviceCategory === filter);

  useEffect(() => {
    if (isAutoPlaying && filteredTestimonials.length > 1) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % filteredTestimonials.length);
      }, 6000);
      return () => clearInterval(interval);
    }
  }, [filteredTestimonials.length, isAutoPlaying]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % filteredTestimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + filteredTestimonials.length) % filteredTestimonials.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  if (filteredTestimonials.length === 0) {
    return (
      <section className="section" style={{ backgroundColor: '#f8fafc' }}>
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Client Testimonials</h2>
            <p className="section-description">
              Testimonials from our valued clients will be displayed here.
            </p>
          </div>
          <div style={{
            background: 'white',
            borderRadius: '12px',
            boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
            padding: '3rem',
            textAlign: 'center',
            color: 'var(--text-medium)'
          }}>
            <FaQuoteLeft style={{ fontSize: '3rem', color: '#e2e8f0', marginBottom: '1rem' }} />
            <p>Client testimonials will be added as projects are completed.</p>
          </div>
        </div>
      </section>
    );
  }

  const currentTestimonial = filteredTestimonials[currentSlide];

  return (
    <section className="section" style={{ backgroundColor: '#f8fafc' }}>
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">What Our Kiwi Clients Say</h2>
          <p className="section-description">
            Real results from real New Zealand projects - delivering engineering excellence across Aotearoa
          </p>
        </div>

        {/* Filter Tabs */}
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          marginBottom: '3rem',
          flexWrap: 'wrap',
          gap: '0.5rem'
        }}>
          {filterOptions.map((option) => (
            <button
              key={option.value}
              onClick={() => {
                setFilter(option.value);
                setCurrentSlide(0);
              }}
              style={{
                background: filter === option.value 
                  ? 'linear-gradient(135deg, var(--accent-teal) 0%, var(--primary-blue) 100%)'
                  : 'white',
                color: filter === option.value ? 'white' : 'var(--text-medium)',
                border: filter === option.value ? 'none' : '2px solid #e2e8f0',
                padding: '0.75rem 1.5rem',
                borderRadius: '25px',
                cursor: 'pointer',
                fontSize: '0.9rem',
                fontWeight: '600',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                transition: 'all 0.3s ease'
              }}
              onMouseOver={(e) => {
                if (filter !== option.value) {
                  e.target.style.borderColor = 'var(--accent-teal)';
                  e.target.style.color = 'var(--accent-teal)';
                }
              }}
              onMouseOut={(e) => {
                if (filter !== option.value) {
                  e.target.style.borderColor = '#e2e8f0';
                  e.target.style.color = 'var(--text-medium)';
                }
              }}
            >
              <FaFilter style={{ fontSize: '0.8rem' }} />
              {option.label} ({option.count})
            </button>
          ))}
        </div>

        {/* Main Testimonial Display */}
        <div style={{ position: 'relative', overflow: 'hidden' }}>
          <div 
            style={{
              background: 'white',
              borderRadius: '12px',
              boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
              padding: '3rem',
              position: 'relative',
              minHeight: '500px'
            }}
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            {/* Quote Icon */}
            <FaQuoteLeft 
              style={{ 
                position: 'absolute',
                top: '2rem',
                right: '2rem',
                fontSize: '3rem',
                color: '#e2e8f0',
                opacity: 0.5
              }} 
            />

            <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '3rem', alignItems: 'start' }}>
              {/* Main Content */}
              <div>
                {/* Rating */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                  {[...Array(currentTestimonial.rating)].map((_, i) => (
                    <FaStar key={i} style={{ color: '#fbbf24', fontSize: '1.2rem' }} />
                  ))}
                  <span style={{ 
                    marginLeft: '0.5rem', 
                    color: 'var(--text-medium)', 
                    fontSize: '0.9rem',
                    fontWeight: '600'
                  }}>
                    {currentTestimonial.rating}/5 Rating
                  </span>
                </div>

                {/* Testimonial Text */}
                <blockquote style={{ 
                  fontSize: '1.25rem', 
                  lineHeight: '1.8', 
                  color: 'var(--text-dark)',
                  margin: '0 0 2rem 0',
                  fontStyle: 'italic'
                }}>
                  "{currentTestimonial.testimonial}"
                </blockquote>

                {/* Client Info */}
                <div style={{ marginBottom: '2rem' }}>
                  <div style={{ 
                    fontSize: '1.1rem', 
                    fontWeight: '700', 
                    color: 'var(--text-dark)',
                    marginBottom: '0.25rem'
                  }}>
                    {currentTestimonial.clientName}
                  </div>
                  <div style={{ 
                    color: 'var(--accent-teal)', 
                    fontWeight: '600',
                    marginBottom: '0.5rem'
                  }}>
                    {currentTestimonial.organization}
                  </div>
                  <div style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '0.5rem',
                    color: 'var(--text-medium)',
                    fontSize: '0.9rem'
                  }}>
                    <FaMapMarkerAlt />
                    {currentTestimonial.location}
                  </div>
                </div>

                {/* Project Outcome */}
                <div style={{ 
                  background: 'linear-gradient(135deg, #dcfce7 0%, #bbf7d0 100%)',
                  padding: '1rem 1.5rem',
                  borderRadius: '8px',
                  borderLeft: '4px solid #22c55e'
                }}>
                  <div style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '0.5rem',
                    marginBottom: '0.5rem'
                  }}>
                    <FaAward style={{ color: '#16a34a' }} />
                    <span style={{ fontWeight: '600', color: '#16a34a' }}>Project Result</span>
                  </div>
                  <div style={{ color: '#166534', fontWeight: '600', fontSize: '1.1rem' }}>
                    {currentTestimonial.outcome}
                  </div>
                </div>
              </div>

              {/* Side Panel */}
              <div>
                {/* Project Details */}
                <div style={{ 
                  background: '#f8fafc',
                  padding: '1.5rem',
                  borderRadius: '8px',
                  marginBottom: '1.5rem'
                }}>
                  <h4 style={{ 
                    color: 'var(--text-dark)', 
                    marginTop: 0,
                    marginBottom: '1rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                  }}>
                    <FaIndustry style={{ color: 'var(--accent-teal)' }} />
                    Project Details
                  </h4>
                  <div style={{ fontSize: '0.9rem', color: 'var(--text-medium)', marginBottom: '1rem' }}>
                    {currentTestimonial.projectDetails}
                  </div>
                  <div style={{ 
                    fontSize: '0.8rem', 
                    color: 'var(--text-light)',
                    display: 'flex',
                    justifyContent: 'space-between'
                  }}>
                    <span>Service: {currentTestimonial.projectType}</span>
                    <span>Completed: {currentTestimonial.completionYear}</span>
                  </div>
                </div>

                {/* Certifications */}
                <div>
                  <h4 style={{ 
                    color: 'var(--text-dark)', 
                    marginTop: 0,
                    marginBottom: '1rem',
                    fontSize: '1rem'
                  }}>
                    Compliance & Standards
                  </h4>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    {currentTestimonial.certifications.map((cert, index) => (
                      <div 
                        key={index}
                        style={{
                          background: 'white',
                          border: '1px solid #e2e8f0',
                          padding: '0.5rem 0.75rem',
                          borderRadius: '6px',
                          fontSize: '0.85rem',
                          color: 'var(--text-medium)',
                          textAlign: 'center'
                        }}
                      >
                        {cert}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          {filteredTestimonials.length > 1 && (
            <>
              <button
                onClick={prevSlide}
                style={{
                  position: 'absolute',
                  left: '1rem',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: 'rgba(255, 255, 255, 0.9)',
                  border: 'none',
                  borderRadius: '50%',
                  width: '50px',
                  height: '50px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
                  fontSize: '1.2rem',
                  color: 'var(--accent-teal)',
                  transition: 'all 0.2s ease'
                }}
                onMouseOver={(e) => {
                  e.target.style.background = 'var(--accent-teal)';
                  e.target.style.color = 'white';
                }}
                onMouseOut={(e) => {
                  e.target.style.background = 'rgba(255, 255, 255, 0.9)';
                  e.target.style.color = 'var(--accent-teal)';
                }}
              >
                <FaChevronLeft />
              </button>

              <button
                onClick={nextSlide}
                style={{
                  position: 'absolute',
                  right: '1rem',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: 'rgba(255, 255, 255, 0.9)',
                  border: 'none',
                  borderRadius: '50%',
                  width: '50px',
                  height: '50px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
                  fontSize: '1.2rem',
                  color: 'var(--accent-teal)',
                  transition: 'all 0.2s ease'
                }}
                onMouseOver={(e) => {
                  e.target.style.background = 'var(--accent-teal)';
                  e.target.style.color = 'white';
                }}
                onMouseOut={(e) => {
                  e.target.style.background = 'rgba(255, 255, 255, 0.9)';
                  e.target.style.color = 'var(--accent-teal)';
                }}
              >
                <FaChevronRight />
              </button>
            </>
          )}
        </div>

        {/* Dots Navigation */}
        {filteredTestimonials.length > 1 && (
          <div style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            gap: '0.75rem', 
            marginTop: '2rem' 
          }}>
            {filteredTestimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                style={{
                  width: '12px',
                  height: '12px',
                  borderRadius: '50%',
                  border: 'none',
                  background: currentSlide === index 
                    ? 'var(--accent-teal)' 
                    : '#e2e8f0',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        )}

        {/* Auto-play indicator */}
        {filteredTestimonials.length > 1 && (
          <div style={{ 
            textAlign: 'center', 
            marginTop: '1rem',
            fontSize: '0.8rem',
            color: 'var(--text-light)'
          }}>
            {isAutoPlaying ? 'Auto-playing • Hover to pause' : 'Auto-play paused • Leave to resume'}
          </div>
        )}
      </div>
    </section>
  );
};

export default TestimonialsCarousel;