// Format date to display in a readable format
export const formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', options);
};

// Calculate read time for blog posts (assuming average reading speed of 238 words per minute)
export const calculateReadTime = (content) => {
  const wordsPerMinute = 238;
  const words = content.trim().split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return minutes < 1 ? '1 min read' : `${minutes} min read`;
};

// Truncate text with ellipsis for previews
export const truncateText = (text, maxLength) => {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength).trim() + '...';
};

// Simple email validation
export const isValidEmail = (email) => {
  const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  return regex.test(email);
};

// Group publications by type
export const groupPublicationsByType = (publications) => {
  return publications.reduce((acc, publication) => {
    if (!acc[publication.type]) {
      acc[publication.type] = [];
    }
    acc[publication.type].push(publication);
    return acc;
  }, {});
};

// Filter projects by technology/method
export const filterProjectsByTechnology = (projects, technology) => {
  if (!technology || technology === 'All') return projects;
  return projects.filter(project => 
    project.technologies.includes(technology)
  );
};

// Get unique technologies from projects
export const getUniqueTechnologies = (projects) => {
  const technologies = new Set();
  technologies.add('All');
  
  projects.forEach(project => {
    project.technologies.forEach(tech => {
      technologies.add(tech);
    });
  });
  
  return Array.from(technologies);
};
