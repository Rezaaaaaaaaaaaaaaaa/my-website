// RMES - Project Portfolio Data
export const projectTypes = {
  WATER_TREATMENT: 'water-treatment',
  CHEMICAL_PROCESS: 'chemical-process', 
  BIOPROCESS: 'bioprocess-engineering',
  FOOD_DAIRY: 'food-dairy-processing',
  ENVIRONMENTAL: 'environmental-compliance',
  RESEARCH: 'research-development'
};

export const projectStatus = {
  PLANNING: 'planning',
  DESIGN: 'design',
  CONSTRUCTION: 'construction', 
  COMMISSIONING: 'commissioning',
  COMPLETED: 'completed',
  OPERATIONAL: 'operational'
};

export const projectsData = [
  {
    id: 'proj-001',
    title: 'Auckland Advanced Water Treatment Facility',
    type: projectTypes.WATER_TREATMENT,
    status: projectStatus.OPERATIONAL,
    client: 'Auckland Council',
    location: 'Waitakere, Auckland',
    duration: '18 months',
    projectValue: '$2.5M NZD',
    teamSize: 8,
    startDate: '2023-03-15',
    completionDate: '2024-09-15',
    images: [
      '/assets/projects/auckland-wtp-main.jpg',
      '/assets/projects/auckland-wtp-membrane.jpg', 
      '/assets/projects/auckland-wtp-control.jpg'
    ],
    technologies: [
      'Membrane Bioreactor (MBR)',
      'UV Disinfection',
      'SCADA Automation',
      'Advanced Process Control',
      'Energy Recovery Systems'
    ],
    scope: [
      'Process design and engineering',
      'Equipment procurement and installation', 
      'Automation and control systems',
      'Commissioning and startup',
      'Operator training and documentation',
      'Performance optimization'
    ],
    keyAchievements: {
      capacityIncrease: '35%',
      energyReduction: '28%',
      operationalSavings: '$450K annually',
      waterQuality: '99.9% pathogen removal',
      regulatoryCompliance: '100%'
    },
    challenges: [
      {
        challenge: 'Seismic design requirements for Auckland geology',
        solution: 'Advanced seismic isolation and flexible connections throughout facility'
      },
      {
        challenge: 'Minimal downtime during upgrade of existing facility',
        solution: 'Phased construction approach with temporary bypass systems'
      },
      {
        challenge: 'Meeting stringent discharge consent conditions',
        solution: 'Advanced treatment with real-time monitoring and automatic adjustments'
      }
    ],
    testimonial: {
      quote: "This project demonstrates RMES's exceptional ability to deliver complex infrastructure projects on time and within budget while exceeding all performance requirements.",
      author: "Sarah Mitchell",
      position: "Senior Water Engineer, Auckland Council"
    },
    awards: [
      {
        title: 'Excellence in Water Engineering',
        organization: 'Water New Zealand',
        year: 2024
      }
    ],
    sustainability: {
      carbonReduction: '40%',
      energyFromRenewables: '85%', 
      wasteRecovery: '95%',
      chemicalReduction: '30%'
    },
    confidentiality: 'public'
  },
  {
    id: 'proj-002',
    title: 'Fonterra Advanced Milk Powder Production Optimization',
    type: projectTypes.FOOD_DAIRY,
    status: projectStatus.COMPLETED,
    client: 'Fonterra Co-operative Group',
    location: 'Hamilton, Waikato',
    duration: '12 months',
    projectValue: '$1.8M NZD',
    teamSize: 6,
    startDate: '2023-01-20',
    completionDate: '2024-01-20',
    images: [
      '/assets/projects/fonterra-spray-dryer.jpg',
      '/assets/projects/fonterra-process-control.jpg',
      '/assets/projects/fonterra-waste-treatment.jpg'
    ],
    technologies: [
      'Advanced Spray Drying',
      'Heat Recovery Systems',
      'CIP Optimization',
      'Membrane Filtration',
      'Digital Twin Modeling'
    ],
    scope: [
      'Process flow optimization',
      'Spray dryer upgrade and control',
      'Heat recovery system design',
      'Waste treatment integration',
      'Quality control automation',
      'Performance monitoring systems'
    ],
    keyAchievements: {
      yieldIncrease: '18%',
      energySavings: '25%',
      wasteReduction: '40%',
      qualityImprovement: '12%',
      productionIncrease: '2.2M L/day capacity'
    },
    challenges: [
      {
        challenge: 'Maintaining production during upgrades',
        solution: 'Modular installation approach with minimal production interruption'
      },
      {
        challenge: 'Optimizing energy consumption across multiple process stages',
        solution: 'Integrated heat recovery network with advanced process control'
      }
    ],
    testimonial: {
      quote: "RMES delivered breakthrough improvements in our milk powder production efficiency while maintaining the highest quality standards.",
      author: "David Thompson", 
      position: "Process Engineering Manager, Fonterra"
    },
    sustainability: {
      energyReduction: '25%',
      waterRecovery: '60%',
      wasteReduction: '40%',
      carbonFootprint: '22% reduction'
    },
    confidentiality: 'public'
  },
  {
    id: 'proj-003',
    title: 'Canterbury Regional Stormwater Management System',
    type: projectTypes.ENVIRONMENTAL,
    status: projectStatus.OPERATIONAL,
    client: 'Canterbury Regional Council',
    location: 'Christchurch Region',
    duration: '24 months',
    projectValue: '$950K NZD',
    teamSize: 5,
    startDate: '2022-11-10',
    completionDate: '2024-11-10',
    images: [
      '/assets/projects/canterbury-wetland.jpg',
      '/assets/projects/canterbury-bioretention.jpg',
      '/assets/projects/canterbury-monitoring.jpg'
    ],
    technologies: [
      'Constructed Wetlands',
      'Bioretention Systems',
      'Permeable Pavement',
      'Smart Monitoring',
      'WSUD Design'
    ],
    scope: [
      'Regional stormwater strategy development',
      'Constructed wetland design',
      'Bioretention system installation',
      'Monitoring infrastructure',
      'Community education programs',
      'Performance assessment'
    ],
    keyAchievements: {
      runoffReduction: '60%',
      waterQualityImprovement: '80%',
      biodiversityIncrease: '40%',
      wetlandArea: '15 hectares created',
      floodRiskReduction: '45%'
    },
    challenges: [
      {
        challenge: 'Complex regulatory approvals across multiple jurisdictions',
        solution: 'Collaborative stakeholder engagement and integrated consent process'
      },
      {
        challenge: 'Designing for extreme weather events post-earthquakes',
        solution: 'Climate-resilient design with adaptive capacity for future conditions'
      }
    ],
    testimonial: {
      quote: "This innovative WSUD approach has set new standards for sustainable stormwater management in Canterbury.",
      author: "Lisa Chen",
      position: "Senior Environmental Engineer, Canterbury Regional Council"
    },
    awards: [
      {
        title: 'Environmental Excellence Award',
        organization: 'Engineering New Zealand',
        year: 2024
      }
    ],
    sustainability: {
      carbonSequestration: '500 tonnes CO2/year',
      nativeSpecies: '25 species reintroduced',
      waterRecycling: '100%',
      energyNeutral: 'Yes'
    },
    confidentiality: 'public'
  },
  {
    id: 'proj-004',
    title: 'Douglas Pharmaceuticals GMP Bioreactor System',
    type: projectTypes.BIOPROCESS,
    status: projectStatus.COMPLETED,
    client: 'Douglas Pharmaceuticals',
    location: 'Auckland',
    duration: '15 months',
    projectValue: '$1.2M NZD',
    teamSize: 4,
    startDate: '2023-02-14',
    completionDate: '2024-05-14',
    images: [
      '/assets/projects/douglas-bioreactor.jpg',
      '/assets/projects/douglas-control-room.jpg'
      // Some images may be restricted due to pharmaceutical confidentiality
    ],
    technologies: [
      'GMP-Compliant Bioreactors',
      'Sterile Processing',
      'Process Validation',
      'Quality Management Systems',
      'FDA Documentation'
    ],
    scope: [
      'Bioreactor system design',
      'GMP facility integration', 
      'Process validation protocols',
      'Regulatory documentation',
      'Staff training programs',
      'FDA submission support'
    ],
    keyAchievements: {
      productionIncrease: '40%',
      qualityCompliance: '100%',
      cycleTimeReduction: '30%',
      fdaApproval: 'Successful',
      costPerBatch: '20% reduction'
    },
    challenges: [
      {
        challenge: 'Meeting stringent FDA validation requirements',
        solution: 'Comprehensive validation protocols with extensive documentation'
      },
      {
        challenge: 'Sterile processing integration with existing facility',
        solution: 'Advanced contamination control and isolation systems'
      }
    ],
    testimonial: {
      quote: "RMES's expertise in pharmaceutical engineering was crucial for our FDA approval and production scale-up success.",
      author: "Dr. Jennifer Lee",
      position: "Head of Manufacturing, Douglas Pharmaceuticals"
    },
    sustainability: {
      wasteMinimization: '35%',
      energyEfficiency: '20% improvement',
      waterRecovery: '50%'
    },
    confidentiality: 'restricted' // Pharmaceutical projects may have confidential aspects
  }
];

// Project statistics
export const projectStats = {
  totalProjects: projectsData.length,
  activeProjects: projectsData.filter(p => p.status !== projectStatus.COMPLETED).length,
  completedProjects: projectsData.filter(p => p.status === projectStatus.COMPLETED).length,
  totalValue: projectsData.reduce((sum, project) => {
    const value = parseFloat(project.projectValue.replace(/[$,MK\s]/g, ''));
    return sum + (project.projectValue.includes('M') ? value * 1000000 : value * 1000);
  }, 0),
  averageDuration: projectsData.reduce((sum, project) => {
    const duration = parseInt(project.duration.split(' ')[0]);
    return sum + duration;
  }, 0) / projectsData.length,
  industriesCovered: [...new Set(projectsData.map(project => project.type))].length
};

// Filter functions
export const filterProjectsByType = (type) => {
  return projectsData.filter(project => project.type === type);
};

export const filterProjectsByStatus = (status) => {
  return projectsData.filter(project => project.status === status);
};

export const getProjectsByClient = (clientName) => {
  return projectsData.filter(project => 
    project.client.toLowerCase().includes(clientName.toLowerCase())
  );
};