import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';

const BackToTop = ({ 
  showAfter = 300, 
  scrollBehavior = 'smooth',
  position = 'bottom-right',
  size = 'medium'
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > showAfter) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, [showAfter]);

  const scrollToTop = () => {
    setIsAnimating(true);
    
    if (scrollBehavior === 'smooth' && 'scrollTo' in window) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
      
      // Reset animation after scroll completes
      setTimeout(() => setIsAnimating(false), 800);
    } else {
      // Fallback for browsers that don't support smooth scrolling
      window.scrollTo(0, 0);
      setIsAnimating(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      scrollToTop();
    }
  };

  const positions = {
    'bottom-right': { bottom: '2rem', right: '2rem' },
    'bottom-left': { bottom: '2rem', left: '2rem' },
    'bottom-center': { bottom: '2rem', left: '50%', transform: 'translateX(-50%)' }
  };

  const sizes = {
    small: { width: '40px', height: '40px', fontSize: '1rem' },
    medium: { width: '50px', height: '50px', fontSize: '1.2rem' },
    large: { width: '60px', height: '60px', fontSize: '1.5rem' }
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      onKeyDown={handleKeyDown}
      style={{
        position: 'fixed',
        ...positions[position],
        ...sizes[size],
        background: 'linear-gradient(135deg, var(--accent-teal) 0%, var(--primary-blue) 100%)',
        color: 'white',
        border: 'none',
        borderRadius: '50%',
        cursor: 'pointer',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 999,
        transition: 'all 0.3s ease',
        opacity: isVisible ? 1 : 0,
        transform: `${positions[position].transform || ''} ${isAnimating ? 'scale(0.9) rotate(360deg)' : 'scale(1) rotate(0deg)'}`,
        animation: isVisible ? 'fadeInUp 0.3s ease' : 'fadeOutDown 0.3s ease'
      }}
      onMouseOver={(e) => {
        e.target.style.transform = `${positions[position].transform || ''} scale(1.1) translateY(-2px)`;
        e.target.style.boxShadow = '0 6px 20px rgba(0, 0, 0, 0.25)';
      }}
      onMouseOut={(e) => {
        e.target.style.transform = `${positions[position].transform || ''} scale(1) translateY(0px)`;
        e.target.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
      }}
      onFocus={(e) => {
        e.target.style.outline = '3px solid rgba(99, 179, 237, 0.5)';
        e.target.style.outlineOffset = '2px';
      }}
      onBlur={(e) => {
        e.target.style.outline = 'none';
        e.target.style.outlineOffset = '0';
      }}
      aria-label="Scroll back to top"
      title="Back to Top"
    >
      <FaArrowUp style={{ 
        transition: 'transform 0.3s ease',
        transform: isAnimating ? 'translateY(-2px)' : 'translateY(0)'
      }} />
      
      {/* Add required CSS animations if not present */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px) scale(0.8);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        
        @keyframes fadeOutDown {
          from {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
          to {
            opacity: 0;
            transform: translateY(20px) scale(0.8);
          }
        }
      `}</style>
    </button>
  );
};

export default BackToTop;