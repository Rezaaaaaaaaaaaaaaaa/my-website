// RMES - News & Media Data
export const newsCategories = {
  COMPANY_NEWS: 'company-news',
  PROJECT_UPDATES: 'project-updates',
  INDUSTRY_INSIGHTS: 'industry-insights',
  AWARDS: 'awards-recognition',
  TECHNICAL_ARTICLES: 'technical-articles',
  PRESS_RELEASES: 'press-releases',
  EVENTS: 'events-conferences'
};

export const newsData = [
  {
    id: 'news-001',
    title: 'RMES Wins Excellence in Water Engineering Award 2024',
    category: newsCategories.AWARDS,
    publishDate: '2024-10-15',
    author: 'RMES Communications Team',
    featured: true,
    excerpt: 'RMES receives prestigious Water New Zealand Excellence Award for the Auckland Advanced Water Treatment Facility project.',
    content: `
      <p>RMES is proud to announce that we have been awarded the prestigious "Excellence in Water Engineering Award" by Water New Zealand for our outstanding work on the Auckland Advanced Water Treatment Facility project.</p>
      
      <p>The project, completed in September 2024, involved the complete upgrade and expansion of the Waitakere water treatment facility, serving over 125,000 Auckland residents. The facility now features:</p>
      
      <ul>
        <li>Advanced membrane bioreactor (MBR) technology achieving 99.9% pathogen removal</li>
        <li>Energy-efficient UV disinfection systems</li>
        <li>Intelligent SCADA automation reducing operational costs by 28%</li>
        <li>Seismic-resistant design meeting Auckland's geological requirements</li>
      </ul>
      
      <p>"This award recognizes not just technical excellence, but our commitment to sustainable water treatment solutions that protect New Zealand's precious water resources," said Dr. Reza Moghaddam, Managing Director of RMES.</p>
      
      <p>The project delivered exceptional results including 35% capacity increase, $450K annual operational savings, and 100% regulatory compliance, setting new standards for municipal water treatment in New Zealand.</p>
    `,
    image: '/assets/news/water-engineering-award-2024.jpg',
    images: [
      '/assets/news/award-ceremony-2024.jpg',
      '/assets/news/auckland-facility-completion.jpg'
    ],
    tags: ['awards', 'water-treatment', 'auckland', 'innovation'],
    readTime: '3 min read',
    views: 1250,
    status: 'published'
  },
  {
    id: 'news-002',
    title: 'RMES Expands Operations with New Christchurch Regional Office',
    category: newsCategories.COMPANY_NEWS,
    publishDate: '2024-09-20',
    author: 'Dr. Reza Moghaddam',
    featured: true,
    excerpt: 'Opening of new regional office strengthens RMES presence in South Island engineering markets.',
    content: `
      <p>RMES is excited to announce the opening of our new regional office in Christchurch, marking a significant milestone in our expansion across New Zealand.</p>
      
      <p>Located at 456 Innovation Street in the heart of Christchurch's engineering district, the new office will serve as our South Island headquarters, supporting our growing portfolio of projects throughout Canterbury, Otago, and Southland regions.</p>
      
      <blockquote>
        <p>"The South Island presents tremendous opportunities for sustainable engineering solutions, particularly in agricultural processing, municipal infrastructure, and environmental compliance," said Dr. Reza Moghaddam, Managing Director.</p>
      </blockquote>
      
      <p>The Christchurch office will focus on:</p>
      <ul>
        <li>Agricultural and dairy processing engineering</li>
        <li>Municipal water and wastewater systems</li>
        <li>Environmental compliance and WSUD solutions</li>
        <li>Post-earthquake infrastructure resilience projects</li>
      </ul>
      
      <p>We're actively recruiting local engineering talent and look forward to contributing to Canterbury's continued recovery and growth.</p>
    `,
    image: '/assets/news/christchurch-office-opening.jpg',
    tags: ['expansion', 'christchurch', 'south-island', 'growth'],
    readTime: '2 min read',
    views: 980,
    status: 'published'
  },
  {
    id: 'news-003',
    title: 'New Regulations: Understanding the National Environmental Standards for Freshwater',
    category: newsCategories.TECHNICAL_ARTICLES,
    publishDate: '2024-08-30',
    author: 'Sarah Chen, Senior Water Treatment Engineer',
    featured: false,
    excerpt: 'Comprehensive guide to NES-FW compliance requirements and practical implementation strategies for New Zealand businesses.',
    content: `
      <p>The National Environmental Standards for Freshwater Management (NES-FW) introduced significant changes to how New Zealand businesses must manage freshwater resources. This article provides practical guidance for compliance.</p>
      
      <h3>Key Requirements</h3>
      <p>The NES-FW establishes mandatory requirements for:</p>
      <ul>
        <li>Synthetic nitrogen fertilizer application limits</li>
        <li>Intensive winter grazing controls</li>
        <li>Wetland protection and restoration</li>
        <li>Farm environment planning</li>
      </ul>
      
      <h3>Compliance Strategies</h3>
      <p>RMES recommends a proactive approach to NES-FW compliance:</p>
      <ol>
        <li><strong>Early Assessment:</strong> Conduct comprehensive baseline assessments</li>
        <li><strong>Integrated Planning:</strong> Develop integrated farm environment plans</li>
        <li><strong>Technology Solutions:</strong> Implement precision application systems</li>
        <li><strong>Monitoring Systems:</strong> Establish robust monitoring and reporting protocols</li>
      </ol>
      
      <p>Our experience with 15+ NES-FW compliance projects shows that early engagement and systematic planning reduce compliance costs by up to 40% while delivering better environmental outcomes.</p>
    `,
    image: '/assets/news/nes-fw-compliance-guide.jpg',
    tags: ['regulation', 'freshwater', 'compliance', 'environment'],
    readTime: '5 min read',
    views: 1560,
    status: 'published'
  },
  {
    id: 'news-004',
    title: 'RMES Partners with University of Auckland for Groundbreaking Water Research',
    category: newsCategories.COMPANY_NEWS,
    publishDate: '2024-07-12',
    author: 'RMES Communications Team',
    featured: false,
    excerpt: 'Three-year research collaboration to develop next-generation membrane technologies for water treatment applications.',
    content: `
      <p>RMES has entered into a strategic research partnership with the University of Auckland's Department of Chemical and Materials Engineering to advance membrane technology research for water treatment applications.</p>
      
      <p>The three-year collaboration, funded jointly by RMES and the Ministry of Business, Innovation and Employment (MBIE), will focus on:</p>
      
      <ul>
        <li>Advanced membrane materials for improved contaminant removal</li>
        <li>Energy-efficient membrane processes</li>
        <li>Fouling-resistant membrane designs</li>
        <li>Smart monitoring systems for membrane performance</li>
      </ul>
      
      <p>Dr. Reza Moghaddam will serve as Industry Supervisor for two PhD students working on the project, ensuring direct knowledge transfer between academic research and practical applications.</p>
      
      <blockquote>
        <p>"This partnership represents our commitment to innovation and advancing New Zealand's water treatment capabilities through world-class research," noted Dr. Moghaddam.</p>
      </blockquote>
      
      <p>The research outcomes are expected to benefit municipal and industrial water treatment facilities throughout New Zealand and the Pacific region.</p>
    `,
    image: '/assets/news/university-partnership-2024.jpg',
    tags: ['research', 'partnership', 'innovation', 'university'],
    readTime: '3 min read', 
    views: 742,
    status: 'published'
  },
  {
    id: 'news-005',
    title: 'Upcoming: RMES Technical Seminar Series - Advanced Process Control',
    category: newsCategories.EVENTS,
    publishDate: '2024-11-01',
    eventDate: '2024-11-15',
    author: 'RMES Events Team',
    featured: false,
    excerpt: 'Join our technical seminar on implementing advanced process control systems for improved efficiency and reliability.',
    content: `
      <p>RMES invites engineering professionals to attend our upcoming technical seminar on "Advanced Process Control: Implementation Strategies for New Zealand Industries."</p>
      
      <h3>Event Details</h3>
      <ul>
        <li><strong>Date:</strong> November 15, 2024</li>
        <li><strong>Time:</strong> 1:00 PM - 4:00 PM</li>
        <li><strong>Location:</strong> RMES Auckland Office, 123 Engineering Drive</li>
        <li><strong>Cost:</strong> Complimentary (registration required)</li>
      </ul>
      
      <h3>Agenda</h3>
      <ul>
        <li>1:00-1:30 PM: Registration and networking</li>
        <li>1:30-2:30 PM: Advanced Process Control Fundamentals</li>
        <li>2:30-3:00 PM: Case Study: Fonterra Optimization Project</li>
        <li>3:00-3:15 PM: Break</li>
        <li>3:15-4:00 PM: Implementation Best Practices and Q&A</li>
      </ul>
      
      <p>Presenting team includes Dr. Reza Moghaddam and James Mitchell, our Process Control Specialist. CPD points available for attending engineers.</p>
      
      <p><strong>Register now:</strong> Limited spaces available. Contact events@rmes.co.nz or call +64 9 123 4567</p>
    `,
    image: '/assets/news/technical-seminar-apc.jpg',
    tags: ['seminar', 'education', 'process-control', 'networking'],
    readTime: '2 min read',
    views: 456,
    status: 'published'
  }
];

// Press releases and media contacts
export const pressReleases = [
  {
    id: 'press-001',
    title: 'RMES Secures $3.2M Contract for Major Dairy Processing Upgrade',
    date: '2024-10-20',
    location: 'Auckland, New Zealand',
    contact: {
      name: 'Dr. Reza Moghaddam',
      title: 'Managing Director',
      email: 'media@rmes.co.nz',
      phone: '+64 9 123 4567'
    },
    summary: 'Regional dairy cooperative selects RMES for comprehensive processing facility upgrade including waste treatment and energy recovery systems.'
  }
];

// Media resources
export const mediaResources = {
  logos: [
    {
      type: 'Primary Logo',
      formats: ['PNG', 'SVG', 'EPS'],
      path: '/assets/media/logos/'
    }
  ],
  photos: [
    {
      category: 'Team Photos',
      description: 'Professional headshots and team photos',
      count: 15,
      path: '/assets/media/photos/team/'
    },
    {
      category: 'Project Photos',
      description: 'High-resolution project and facility images',
      count: 45,
      path: '/assets/media/photos/projects/'
    }
  ],
  factSheet: {
    company: 'RMES (Reza Moghaddam Engineering Solutions)',
    established: '2019',
    employees: '12+',
    headquarters: 'Auckland, New Zealand',
    specialties: ['Water Treatment', 'Chemical Process Engineering', 'Environmental Compliance'],
    keyStats: {
      projectsCompleted: '200+',
      clientSatisfaction: '98%',
      safetyRecord: 'Zero LTI',
      totalProjectValue: '$25M+'
    }
  }
};

// Filter and search functions
export const filterNewsByCategory = (category) => {
  return newsData.filter(article => article.category === category);
};

export const getFeaturedNews = () => {
  return newsData.filter(article => article.featured);
};

export const searchNews = (searchTerm) => {
  const term = searchTerm.toLowerCase();
  return newsData.filter(article =>
    article.title.toLowerCase().includes(term) ||
    article.excerpt.toLowerCase().includes(term) ||
    article.tags.some(tag => tag.includes(term))
  );
};

export const getRecentNews = (limit = 5) => {
  return newsData
    .sort((a, b) => new Date(b.publishDate) - new Date(a.publishDate))
    .slice(0, limit);
};