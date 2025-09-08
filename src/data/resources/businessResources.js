// RMES - Business Development Resources
export const resourceTypes = {
  WHITEPAPER: 'whitepaper',
  CASE_STUDY: 'case-study',
  TECHNICAL_GUIDE: 'technical-guide',
  BROCHURE: 'brochure',
  PRESENTATION: 'presentation',
  CHECKLIST: 'checklist',
  CALCULATOR: 'calculator',
  WEBINAR: 'webinar'
};

export const industryFocus = {
  WATER_MUNICIPAL: 'Municipal Water Treatment',
  DAIRY_FOOD: 'Dairy & Food Processing',
  INDUSTRIAL: 'Industrial Manufacturing',
  ENVIRONMENTAL: 'Environmental Compliance',
  BIOTECH: 'Biotechnology & Pharmaceuticals'
};

export const businessResources = [
  {
    id: 'resource-001',
    title: 'Complete Guide to NZ Water Treatment Regulatory Compliance',
    type: resourceTypes.WHITEPAPER,
    industry: industryFocus.WATER_MUNICIPAL,
    description: 'Comprehensive 45-page guide covering all aspects of New Zealand water treatment regulations, compliance requirements, and best practices.',
    author: 'Dr. Reza Moghaddam & Sarah Chen',
    publishDate: '2024-09-15',
    pages: 45,
    downloadCount: 1247,
    featured: true,
    abstract: 'This whitepaper provides municipal water authorities and consulting engineers with essential guidance for navigating New Zealand\'s complex regulatory framework including DWSNZ, Health Act requirements, and regional plan compliance.',
    keyTopics: [
      'Drinking Water Standards NZ (DWSNZ) compliance',
      'Health Act 1956 requirements',
      'Regional council consent processes',
      'Monitoring and reporting obligations',
      'Risk management planning',
      'Emergency response protocols'
    ],
    downloadUrl: '/assets/resources/whitepapers/nz-water-compliance-guide-2024.pdf',
    fileSize: '8.2 MB',
    previewPages: 3,
    leadMagnet: true, // Requires contact info to download
    cta: 'Download Free Guide'
  },
  {
    id: 'resource-002', 
    title: 'Fonterra Processing Optimization: 18% Yield Improvement Case Study',
    type: resourceTypes.CASE_STUDY,
    industry: industryFocus.DAIRY_FOOD,
    description: 'Detailed case study examining how RMES achieved 18% yield improvement and $2.3M annual savings for major dairy processor.',
    author: 'RMES Engineering Team',
    publishDate: '2024-08-20',
    pages: 12,
    downloadCount: 892,
    featured: true,
    abstract: 'This case study demonstrates practical application of advanced spray drying optimization, integrated heat recovery, and process control improvements in a major dairy processing facility.',
    keyTopics: [
      'Spray drying process optimization',
      'Heat integration and recovery systems', 
      'Advanced process control implementation',
      'Waste treatment integration',
      'ROI analysis and project outcomes'
    ],
    downloadUrl: '/assets/resources/case-studies/fonterra-optimization-case-study.pdf',
    fileSize: '3.4 MB',
    previewPages: 2,
    leadMagnet: true,
    cta: 'Download Case Study',
    metrics: {
      yieldImprovement: '18%',
      costSavings: '$2.3M annually',
      paybackPeriod: '14 months',
      energyReduction: '25%'
    }
  },
  {
    id: 'resource-003',
    title: 'Industrial Water Treatment ROI Calculator',
    type: resourceTypes.CALCULATOR,
    industry: industryFocus.INDUSTRIAL,
    description: 'Interactive calculator to estimate ROI for industrial water treatment system upgrades and optimizations.',
    author: 'RMES Analytics Team',
    publishDate: '2024-10-01',
    downloadCount: 567,
    featured: false,
    abstract: 'Easy-to-use Excel-based calculator helping industrial facilities evaluate the financial benefits of water treatment improvements.',
    keyTopics: [
      'Operating cost analysis',
      'Capital expenditure planning',
      'Payback period calculation', 
      'Risk assessment factors',
      'Sensitivity analysis tools'
    ],
    downloadUrl: '/assets/resources/calculators/industrial-water-roi-calculator.xlsx',
    fileSize: '1.8 MB',
    leadMagnet: true,
    cta: 'Download Calculator'
  },
  {
    id: 'resource-004',
    title: 'RMES Engineering Capabilities Brochure 2024',
    type: resourceTypes.BROCHURE,
    industry: 'All Industries',
    description: 'Comprehensive overview of RMES services, team expertise, and project portfolio.',
    author: 'RMES Marketing Team',
    publishDate: '2024-07-01',
    pages: 16,
    downloadCount: 1456,
    featured: false,
    abstract: 'Professional brochure showcasing RMES capabilities across water treatment, chemical processing, and environmental engineering.',
    keyTopics: [
      'Company overview and history',
      'Service capabilities',
      'Team expertise and qualifications',
      'Project portfolio highlights',
      'Client testimonials'
    ],
    downloadUrl: '/assets/resources/brochures/rmes-capabilities-brochure-2024.pdf',
    fileSize: '4.7 MB',
    previewPages: 4,
    leadMagnet: false, // Free download
    cta: 'Download Brochure'
  },
  {
    id: 'resource-005',
    title: 'Membrane Technology Selection Guide for Water Treatment',
    type: resourceTypes.TECHNICAL_GUIDE,
    industry: industryFocus.WATER_MUNICIPAL,
    description: 'Technical guide for selecting appropriate membrane technologies for different water treatment applications.',
    author: 'Sarah Chen, Senior Water Treatment Engineer',
    publishDate: '2024-06-10',
    pages: 28,
    downloadCount: 734,
    featured: false,
    abstract: 'Practical guide comparing MF, UF, NF, and RO technologies with selection criteria, design considerations, and economic analysis.',
    keyTopics: [
      'Membrane technology overview',
      'Application-specific selection criteria',
      'Design and sizing considerations',
      'Operating and maintenance requirements',
      'Economic comparison framework'
    ],
    downloadUrl: '/assets/resources/guides/membrane-selection-guide.pdf',
    fileSize: '5.1 MB',
    previewPages: 3,
    leadMagnet: true,
    cta: 'Download Guide'
  },
  {
    id: 'resource-006',
    title: 'Process Safety Checklist for Chemical Engineering Projects',
    type: resourceTypes.CHECKLIST,
    industry: industryFocus.INDUSTRIAL,
    description: '15-point safety checklist covering all phases of chemical engineering project development.',
    author: 'Dr. Reza Moghaddam',
    publishDate: '2024-05-15',
    pages: 8,
    downloadCount: 423,
    featured: false,
    abstract: 'Comprehensive safety checklist based on international best practices and New Zealand regulatory requirements.',
    keyTopics: [
      'Design phase safety considerations',
      'HAZOP and risk assessment requirements',
      'Construction safety protocols',
      'Commissioning safety procedures',
      'Operational safety management'
    ],
    downloadUrl: '/assets/resources/checklists/process-safety-checklist.pdf',
    fileSize: '1.2 MB',
    previewPages: 2,
    leadMagnet: false,
    cta: 'Download Checklist'
  }
];

// Lead generation and marketing data
export const leadMagnets = businessResources.filter(resource => resource.leadMagnet);

export const marketingCampaigns = [
  {
    id: 'campaign-001',
    name: 'Water Treatment Compliance Campaign',
    startDate: '2024-09-01',
    endDate: '2024-12-31',
    targetAudience: 'Municipal Engineers, Council Staff',
    resources: ['resource-001', 'resource-005'],
    leadGoal: 200,
    currentLeads: 156,
    conversionRate: '12%',
    status: 'Active'
  },
  {
    id: 'campaign-002',
    name: 'Dairy Industry Optimization',
    startDate: '2024-08-15',
    endDate: '2025-02-15',
    targetAudience: 'Dairy Processors, Food Engineers',
    resources: ['resource-002', 'resource-003'],
    leadGoal: 150,
    currentLeads: 89,
    conversionRate: '18%',
    status: 'Active'
  }
];

// Business intelligence and analytics
export const businessMetrics = {
  resources: {
    totalDownloads: businessResources.reduce((sum, resource) => sum + resource.downloadCount, 0),
    mostPopular: businessResources.reduce((prev, current) => 
      prev.downloadCount > current.downloadCount ? prev : current
    ),
    leadConversionRate: '14.5%',
    avgDownloadsPerResource: Math.round(
      businessResources.reduce((sum, resource) => sum + resource.downloadCount, 0) / businessResources.length
    )
  },
  leads: {
    monthlyLeads: 145,
    qualifiedLeads: 52,
    salesConversion: '22%',
    avgTimeToConversion: '45 days'
  }
};

// Proposal and tender information
export const proposalTemplates = [
  {
    id: 'template-001',
    title: 'Municipal Water Treatment Proposal Template',
    description: 'Standard proposal format for municipal water treatment projects',
    sections: [
      'Executive Summary',
      'Technical Approach', 
      'Project Timeline',
      'Team and Experience',
      'Budget and Commercial Terms',
      'Risk Management',
      'References'
    ],
    lastUpdated: '2024-09-01'
  },
  {
    id: 'template-002', 
    title: 'Industrial Process Optimization Proposal',
    description: 'Template for industrial process improvement and optimization projects',
    sections: [
      'Current State Assessment',
      'Optimization Opportunities',
      'Technical Solution',
      'Implementation Plan',
      'Expected Benefits',
      'Investment and ROI',
      'Project Team'
    ],
    lastUpdated: '2024-08-15'
  }
];

// Partnership and supplier information
export const businessPartners = [
  {
    id: 'partner-001',
    name: 'Schneider Electric',
    type: 'Technology Partner',
    specialization: 'Automation and Control Systems',
    relationship: 'Authorized Systems Integrator',
    since: '2020'
  },
  {
    id: 'partner-002',
    name: 'Grundfos New Zealand',
    type: 'Equipment Supplier',
    specialization: 'Pump Systems and Water Technology',
    relationship: 'Preferred Partner',
    since: '2019'
  },
  {
    id: 'partner-003',
    name: 'University of Auckland',
    type: 'Research Partner',
    specialization: 'Advanced Materials and Process Research',
    relationship: 'Strategic Research Collaboration',
    since: '2024'
  }
];

// Export filter and search functions
export const filterResourcesByType = (type) => {
  return businessResources.filter(resource => resource.type === type);
};

export const filterResourcesByIndustry = (industry) => {
  return businessResources.filter(resource => resource.industry === industry);
};

export const getFeaturedResources = () => {
  return businessResources.filter(resource => resource.featured);
};

export const searchResources = (searchTerm) => {
  const term = searchTerm.toLowerCase();
  return businessResources.filter(resource =>
    resource.title.toLowerCase().includes(term) ||
    resource.description.toLowerCase().includes(term) ||
    resource.keyTopics.some(topic => topic.toLowerCase().includes(term))
  );
};