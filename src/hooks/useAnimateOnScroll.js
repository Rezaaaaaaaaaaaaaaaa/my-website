import { useEffect, useState } from 'react';

// This custom hook handles the animation on scroll for components
export const useAnimateOnScroll = (threshold = 0.2) => {
  const [animatedElements, setAnimatedElements] = useState({});

  useEffect(() => {
    // Add scroll animation observer
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setAnimatedElements(prev => ({
            ...prev,
            [entry.target.id]: true
          }));
        }
      });
    }, { threshold });
    
    // Observe sections
    const sections = document.querySelectorAll('.animate-on-scroll');
    sections.forEach(section => {
      observer.observe(section);
    });
    
    return () => {
      sections.forEach(section => {
        observer.unobserve(section);
      });
    };
  }, [threshold]);

  return animatedElements;
};

export default useAnimateOnScroll;
