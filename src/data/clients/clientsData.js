// RMES - Client Management Data
export const clientCategories = {
  MUNICIPAL: 'municipal-water-councils',
  DAIRY: 'dairy-food-processing', 
  INDUSTRIAL: 'industrial-manufacturing',
  BIOTECH: 'biotechnology-pharmaceutical',
  AGRICULTURAL: 'agricultural-processing',
  RESEARCH: 'research-development'
};

export const clientsData = [
  {
    id: 'client-001',
    name: 'Auckland Council',
    category: clientCategories.MUNICIPAL,
    logo: '/assets/clients/auckland-council-logo.png',
    industry: 'Municipal Water Treatment',
    location: 'Auckland, New Zealand',
    projectValue: '$2.5M NZD',
    startDate: '2023-03-15',
    status: 'Active',
    services: ['Water Treatment Design', 'Regulatory Compliance', 'Process Optimization'],
    keyMetrics: {
      capacityImprovement: '35%',
      costSavings: '$450K annually',
      complianceRating: '100%',
      populationServed: '125,000+'
    },
    testimonial: {
      quote: "RMES delivered exceptional water treatment solutions that exceed all regulatory requirements while achieving significant cost savings.",
      author: "Sarah Mitchell",
      position: "Senior Water Engineer",
      rating: 5
    },
    projectSummary: "Complete upgrade of Waitakere water treatment facility including advanced membrane filtration, UV disinfection, and SCADA automation systems.",
    confidentiality: 'public' // public, restricted, confidential
  },
  {
    id: 'client-002', 
    name: 'Fonterra Co-operative Group',
    category: clientCategories.DAIRY,
    logo: '/assets/clients/fonterra-logo.png',
    industry: 'Dairy Processing',
    location: 'Hamilton, New Zealand',
    projectValue: '$1.8M NZD',
    startDate: '2023-01-20',
    status: 'Completed',
    services: ['Process Engineering', 'Waste Treatment', 'Energy Optimization'],
    keyMetrics: {
      yieldImprovement: '18%',
      wasteReduction: '40%',
      energySavings: '25%',
      productionIncrease: '2.2M L/day'
    },
    testimonial: {
      quote: "Outstanding technical expertise and project delivery. RMES helped us achieve record milk powder yields while significantly reducing our environmental footprint.",
      author: "David Thompson",
      position: "Process Engineering Manager", 
      rating: 5
    },
    projectSummary: "Advanced spray drying optimization, CIP system redesign, and integrated wastewater treatment facility for major dairy processing plant.",
    confidentiality: 'public'
  },
  {
    id: 'client-003',
    name: 'Canterbury Regional Council',
    category: clientCategories.MUNICIPAL,
    logo: '/assets/clients/canterbury-council-logo.png', 
    industry: 'Environmental Compliance',
    location: 'Christchurch, New Zealand',
    projectValue: '$950K NZD',
    startDate: '2022-11-10',
    status: 'Active',
    services: ['Regulatory Compliance', 'Environmental Monitoring', 'WSUD Design'],
    keyMetrics: {
      complianceRate: '100%',
      wetlandArea: '15 hectares',
      runoffReduction: '60%',
      biodiversityIncrease: '40%'
    },
    testimonial: {
      quote: "RMES's innovative WSUD solutions have transformed our stormwater management approach, achieving both environmental and cost benefits.",
      author: "Lisa Chen",
      position: "Senior Environmental Engineer",
      rating: 5
    },
    projectSummary: "Regional stormwater management strategy implementation including constructed wetlands, bioretention systems, and monitoring infrastructure.",
    confidentiality: 'public'
  },
  {
    id: 'client-004',
    name: 'Zespri International',
    category: clientCategories.AGRICULTURAL,
    logo: '/assets/clients/zespri-logo.png',
    industry: 'Agricultural Processing',
    location: 'Tauranga, New Zealand', 
    projectValue: '$720K NZD',
    startDate: '2023-05-08',
    status: 'Active',
    services: ['Food Processing', 'Quality Control', 'Automation'],
    keyMetrics: {
      processingEfficiency: '22%',
      qualityImprovement: '15%',
      wastereduction: '35%',
      throughputIncrease: '500 tonnes/day'
    },
    testimonial: {
      quote: "The automated sorting and processing systems designed by RMES have revolutionized our kiwifruit packaging operations.",
      author: "Mark Williams", 
      position: "Operations Director",
      rating: 5
    },
    projectSummary: "Automated kiwifruit sorting, washing, and packaging line with integrated quality control systems and waste minimization protocols.",
    confidentiality: 'public'
  },
  {
    id: 'client-005',
    name: 'Douglas Pharmaceuticals',
    category: clientCategories.BIOTECH,
    logo: '/assets/clients/douglas-pharma-logo.png',
    industry: 'Pharmaceutical Manufacturing', 
    location: 'Auckland, New Zealand',
    projectValue: '$1.2M NZD',
    startDate: '2023-02-14',
    status: 'Completed',
    services: ['Bioreactor Design', 'GMP Compliance', 'Process Validation'],
    keyMetrics: {
      productionIncrease: '40%',
      qualityCompliance: '100%',
      cycleTimeReduction: '30%',
      costPerBatch: '20% reduction'
    },
    testimonial: {
      quote: "RMES's bioreactor design and validation expertise was instrumental in our successful FDA approval process.",
      author: "Dr. Jennifer Lee",
      position: "Head of Manufacturing",
      rating: 5
    },
    projectSummary: "Design and installation of GMP-compliant bioreactor systems for pharmaceutical production with full process validation and regulatory documentation.",
    confidentiality: 'restricted' // Some details may be confidential due to FDA/pharmaceutical regulations
  }
];

// Client statistics for dashboard
export const clientStats = {
  totalClients: clientsData.length,
  activeProjects: clientsData.filter(client => client.status === 'Active').length,
  completedProjects: clientsData.filter(client => client.status === 'Completed').length,
  totalProjectValue: clientsData.reduce((sum, client) => {
    const value = parseFloat(client.projectValue.replace(/[$,MK\s]/g, ''));
    return sum + (client.projectValue.includes('M') ? value * 1000000 : value * 1000);
  }, 0),
  averageRating: clientsData.reduce((sum, client) => sum + (client.testimonial?.rating || 0), 0) / clientsData.length,
  industriesCovered: [...new Set(clientsData.map(client => client.industry))].length
};

// Filter and search functions
export const filterClientsByCategory = (category) => {
  return clientsData.filter(client => client.category === category);
};

export const filterClientsByStatus = (status) => {
  return clientsData.filter(client => client.status === status);
};

export const searchClients = (searchTerm) => {
  const term = searchTerm.toLowerCase();
  return clientsData.filter(client => 
    client.name.toLowerCase().includes(term) ||
    client.industry.toLowerCase().includes(term) ||
    client.services.some(service => service.toLowerCase().includes(term))
  );
};