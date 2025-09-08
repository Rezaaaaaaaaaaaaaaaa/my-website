// RMES - Team & Company Information Data
export const teamRoles = {
  EXECUTIVE: 'executive',
  SENIOR_ENGINEER: 'senior-engineer',
  PROJECT_MANAGER: 'project-manager',
  ENGINEER: 'engineer',
  SPECIALIST: 'specialist',
  CONSULTANT: 'consultant',
  SUPPORT: 'support'
};

export const expertiseAreas = {
  WATER_TREATMENT: 'Water Treatment Engineering',
  CHEMICAL_PROCESS: 'Chemical Process Engineering', 
  BIOPROCESS: 'Bioprocess Engineering',
  ENVIRONMENTAL: 'Environmental Engineering',
  FOOD_SAFETY: 'Food Safety & Processing',
  PROJECT_MANAGEMENT: 'Project Management',
  REGULATORY: 'Regulatory Compliance',
  AUTOMATION: 'Process Automation',
  SUSTAINABILITY: 'Sustainability Engineering'
};

export const teamData = [
  {
    id: 'team-001',
    name: 'Dr. Reza Moghaddam',
    role: teamRoles.EXECUTIVE,
    position: 'Founder & Managing Director',
    department: 'Executive Leadership',
    email: 'reza.moghaddam@rmes.co.nz',
    phone: '+64 27 123 4567',
    linkedin: 'https://linkedin.com/in/reza-moghaddam-engineering',
    image: '/assets/team/reza-moghaddam.jpg',
    qualifications: [
      'PhD Chemical Engineering (University of Auckland)',
      'MEng Process Engineering (University of Canterbury)',
      'BEng Chemical Engineering (First Class Honours)',
      'Chartered Professional Engineer (CPEng)',
      'Professional Member IPENZ'
    ],
    expertise: [
      expertiseAreas.CHEMICAL_PROCESS,
      expertiseAreas.WATER_TREATMENT,
      expertiseAreas.PROJECT_MANAGEMENT,
      expertiseAreas.REGULATORY
    ],
    experience: '15+ years',
    bio: "Dr. Reza Moghaddam is the founder and driving force behind RMES. With over 15 years of experience in chemical and environmental engineering, he has led multimillion-dollar projects across New Zealand's water, dairy, and industrial sectors. His PhD research in advanced water treatment technologies and extensive industry experience make him a recognized expert in process optimization and regulatory compliance.",
    achievements: [
      'Led $25M+ in successful engineering projects',
      'Published 25+ peer-reviewed research papers', 
      'Zero safety incidents across 200+ projects',
      'Expert witness for Environment Court proceedings',
      'Guest lecturer at University of Auckland'
    ],
    certifications: [
      'Chartered Professional Engineer (CPEng)',
      'HAZOP Leader Certification', 
      'ISO 9001 Lead Auditor',
      'Project Management Professional (PMP)',
      'Water Safety Plan Facilitator'
    ],
    languages: ['English', 'Farsi', 'German'],
    availability: 'Full-time',
    status: 'Active'
  },
  {
    id: 'team-002',
    name: 'Sarah Chen',
    role: teamRoles.SENIOR_ENGINEER,
    position: 'Senior Water Treatment Engineer',
    department: 'Water & Environmental Engineering',
    email: 'sarah.chen@rmes.co.nz',
    phone: '+64 27 234 5678',
    linkedin: 'https://linkedin.com/in/sarah-chen-water-engineer',
    image: '/assets/team/sarah-chen.jpg',
    qualifications: [
      'MEng Environmental Engineering (University of Canterbury)',
      'BEng Civil Engineering (University of Auckland)',
      'Chartered Professional Engineer (CPEng)',
      'Water Safety Plan Specialist'
    ],
    expertise: [
      expertiseAreas.WATER_TREATMENT,
      expertiseAreas.ENVIRONMENTAL,
      expertiseAreas.REGULATORY,
      expertiseAreas.SUSTAINABILITY
    ],
    experience: '12 years',
    bio: "Sarah is our lead water treatment engineer with specialized expertise in membrane technologies and regulatory compliance. She has successfully delivered over 40 municipal and industrial water treatment projects, achieving 100% regulatory compliance record. Her innovative approach to sustainable water treatment has saved clients millions in operational costs.",
    achievements: [
      '100% regulatory compliance record across 40+ projects',
      'Designed systems serving 500,000+ residents',
      'Average 30% energy reduction in treatment facilities',
      'Expert in membrane bioreactor (MBR) technologies',
      'Led $15M+ in water infrastructure projects'
    ],
    certifications: [
      'Chartered Professional Engineer (CPEng)',
      'Water Safety Plan Facilitator',
      'Membrane Technology Specialist',
      'DWSNZ Assessment Certification',
      'Environmental Impact Assessment'
    ],
    languages: ['English', 'Mandarin'],
    availability: 'Full-time',
    status: 'Active'
  },
  {
    id: 'team-003',
    name: 'Michael Thompson',
    role: teamRoles.PROJECT_MANAGER,
    position: 'Senior Project Manager',
    department: 'Project Management Office',
    email: 'michael.thompson@rmes.co.nz',
    phone: '+64 27 345 6789',
    linkedin: 'https://linkedin.com/in/michael-thompson-pm',
    image: '/assets/team/michael-thompson.jpg',
    qualifications: [
      'MBA Project Management (Victoria University)',
      'BEng Mechanical Engineering (University of Canterbury)',
      'Project Management Professional (PMP)',
      'Prince2 Practitioner'
    ],
    expertise: [
      expertiseAreas.PROJECT_MANAGEMENT,
      expertiseAreas.REGULATORY,
      expertiseAreas.AUTOMATION
    ],
    experience: '10 years',
    bio: "Michael brings extensive project management expertise to RMES, having successfully delivered over $20M in engineering projects on time and within budget. His systematic approach to project delivery and stakeholder management ensures smooth execution of complex multi-disciplinary projects.",
    achievements: [
      'Delivered $20M+ in projects on-time and on-budget',
      '98% client satisfaction rating',
      'Zero lost-time injuries across managed projects',
      'Reduced average project delivery time by 15%',
      'Successfully managed teams up to 25 people'
    ],
    certifications: [
      'Project Management Professional (PMP)',
      'Prince2 Practitioner',
      'Agile Project Management',
      'Risk Management Certification',
      'Health & Safety Representative'
    ],
    languages: ['English'],
    availability: 'Full-time', 
    status: 'Active'
  },
  {
    id: 'team-004',
    name: 'Dr. Lisa Wang',
    role: teamRoles.SPECIALIST,
    position: 'Bioprocess Engineering Consultant',
    department: 'Biotechnology & Food Processing',
    email: 'lisa.wang@rmes.co.nz',
    phone: '+64 27 456 7890',
    linkedin: 'https://linkedin.com/in/dr-lisa-wang-bioprocess',
    image: '/assets/team/lisa-wang.jpg',
    qualifications: [
      'PhD Bioprocess Engineering (University of Auckland)',
      'MSc Biotechnology (University of Otago)',
      'BEng Chemical Engineering (University of Canterbury)'
    ],
    expertise: [
      expertiseAreas.BIOPROCESS,
      expertiseAreas.FOOD_SAFETY,
      expertiseAreas.REGULATORY
    ],
    experience: '8 years',
    bio: "Dr. Lisa Wang is our bioprocess engineering specialist with deep expertise in pharmaceutical and food processing applications. Her research background in fermentation technology and GMP compliance makes her invaluable for biotechnology projects requiring regulatory approval.",
    achievements: [
      'Designed 15+ bioreactor systems (lab to commercial scale)',
      '3 successful FDA submissions supported',
      'Average 40% yield improvement in fermentation processes',
      'Published 15+ papers in bioprocess engineering',
      'Expert in GMP facility design and validation'
    ],
    certifications: [
      'Biotechnology Process Validation',
      'GMP Facility Design Certification',
      'HACCP Implementation',
      'FDA Regulatory Affairs',
      'Fermentation Technology Specialist'
    ],
    languages: ['English', 'Mandarin'],
    availability: 'Consultant',
    status: 'Active'
  },
  {
    id: 'team-005',
    name: 'James Mitchell',
    role: teamRoles.ENGINEER,
    position: 'Process Control Engineer',
    department: 'Automation & Control Systems',
    email: 'james.mitchell@rmes.co.nz',
    phone: '+64 27 567 8901',
    linkedin: 'https://linkedin.com/in/james-mitchell-control',
    image: '/assets/team/james-mitchell.jpg',
    qualifications: [
      'MEng Control Systems Engineering (University of Auckland)',
      'BEng Electrical Engineering (University of Canterbury)',
      'Automation & Control Systems Specialist'
    ],
    expertise: [
      expertiseAreas.AUTOMATION,
      expertiseAreas.CHEMICAL_PROCESS,
      expertiseAreas.WATER_TREATMENT
    ],
    experience: '7 years',
    bio: "James specializes in process automation and control systems, bringing cutting-edge digital solutions to traditional engineering challenges. His expertise in SCADA, PLC programming, and advanced process control has improved operational efficiency across numerous client facilities.",
    achievements: [
      'Implemented 30+ SCADA/automation systems',
      'Average 25% improvement in process efficiency',
      'Reduced operational costs by $2M+ annually for clients',
      'Expert in predictive maintenance systems',
      'Digital twin modeling for process optimization'
    ],
    certifications: [
      'Certified Automation Professional (CAP)',
      'Siemens PLC Programming',
      'Wonderware SCADA Systems',
      'Cybersecurity for Industrial Control Systems',
      'Advanced Process Control'
    ],
    languages: ['English'],
    availability: 'Full-time',
    status: 'Active'
  }
];

// Company information and culture
export const companyInfo = {
  founded: '2019',
  headquarters: 'Auckland, New Zealand',
  employees: teamData.length,
  officeLocations: [
    {
      city: 'Auckland',
      address: '123 Engineering Drive, Auckland 1010',
      phone: '+64 9 123 4567',
      type: 'Head Office'
    },
    {
      city: 'Christchurch',
      address: '456 Innovation Street, Christchurch 8011', 
      phone: '+64 3 234 5678',
      type: 'Regional Office'
    }
  ],
  mission: "To deliver world-class process engineering solutions that drive innovation, ensure regulatory compliance, and protect New Zealand's environment for future generations.",
  vision: "To be New Zealand's most trusted partner for sustainable process engineering solutions.",
  values: [
    {
      title: 'Technical Excellence',
      description: 'We maintain the highest technical standards and continuously advance our expertise through research and professional development.'
    },
    {
      title: 'Environmental Stewardship',
      description: 'Every solution we design prioritizes environmental sustainability and contributes to New Zealand\'s clean, green future.'
    },
    {
      title: 'Client Partnership',
      description: 'We work collaboratively with our clients as trusted partners, ensuring their success through transparent communication and reliable delivery.'
    },
    {
      title: 'Safety First',
      description: 'Safety is never compromised. We maintain zero-harm workplaces and design inherently safe processes.'
    },
    {
      title: 'Innovation',
      description: 'We embrace new technologies and innovative approaches to solve complex engineering challenges efficiently and effectively.'
    }
  ]
};

// Team statistics
export const teamStats = {
  totalTeamMembers: teamData.length,
  avgExperience: teamData.reduce((sum, member) => {
    const years = parseInt(member.experience.split('+')[0] || member.experience.split(' ')[0]);
    return sum + years;
  }, 0) / teamData.length,
  phDQualified: teamData.filter(member => 
    member.qualifications.some(qual => qual.includes('PhD'))
  ).length,
  charteredEngineers: teamData.filter(member =>
    member.certifications?.some(cert => cert.includes('CPEng')) || 
    member.qualifications.some(qual => qual.includes('CPEng'))
  ).length,
  languagesSpoken: [...new Set(teamData.flatMap(member => member.languages))].length
};

// Filter functions
export const filterTeamByRole = (role) => {
  return teamData.filter(member => member.role === role);
};

export const filterTeamByExpertise = (expertise) => {
  return teamData.filter(member => 
    member.expertise.includes(expertise)
  );
};

export const getTeamMemberById = (id) => {
  return teamData.find(member => member.id === id);
};