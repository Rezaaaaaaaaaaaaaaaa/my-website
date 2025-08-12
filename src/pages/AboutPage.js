import React from 'react';
import { 
  FaGraduationCap, 
  FaIndustry, 
  FaAward, 
  FaUsers,
  FaGlobe,
  FaHandshake
} from 'react-icons/fa';

const AboutPage = () => {
  const values = [
    {
      icon: <FaAward />,
      title: "Excellence",
      description: "Committed to delivering the highest quality engineering solutions"
    },
    {
      icon: <FaHandshake />,
      title: "Integrity", 
      description: "Building trust through honest, transparent, and ethical practices"
    },
    {
      icon: <FaGlobe />,
      title: "Sustainability",
      description: "Promoting environmentally responsible engineering solutions"
    },
    {
      icon: <FaUsers />,
      title: "Collaboration",
      description: "Working closely with clients to achieve shared objectives"
    }
  ];

  return (
    <div>
      {/* Page Header */}
      <section className="hero" style={{padding: 'var(--space-16) 0'}}>
        <div className="container">
          <div className="hero-content">
            <h1>About AquaTech Solutions NZ</h1>
            <p className="description">
              Your trusted partner for innovative environmental and process engineering 
              solutions across New Zealand and beyond.
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="section">
        <div className="container">
          <div className="grid grid-cols-2" style={{gap: 'var(--space-12)'}}>
            <div>
              <h2>Our Story</h2>
              <p>
                AquaTech Solutions NZ was founded with a vision to provide world-class 
                environmental and process engineering services to New Zealand industries. 
                We specialize in chemical processes, bioprocess engineering, and sustainable 
                solutions that drive innovation while protecting our environment.
              </p>
              <p>
                Our team combines deep technical expertise with practical industry experience, 
                enabling us to deliver solutions that are both technically sound and 
                commercially viable. We work across diverse sectors including food processing, 
                water treatment, chemical manufacturing, and biotechnology.
              </p>
            </div>
            
            <div>
              <h2>Our Mission</h2>
              <p>
                To advance sustainable engineering practices through innovative solutions 
                that optimize industrial processes while minimizing environmental impact. 
                We are committed to helping New Zealand industries achieve their operational 
                goals through cutting-edge engineering expertise.
              </p>
              
              <div className="mt-8">
                <h3>Key Focus Areas</h3>
                <ul>
                  <li className="mb-2">• Chemical and bioprocess engineering</li>
                  <li className="mb-2">• Environmental sustainability</li>
                  <li className="mb-2">• Food processing optimization</li>
                  <li className="mb-2">• Water treatment solutions</li>
                  <li className="mb-2">• Research and development support</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section" style={{backgroundColor: 'var(--gray-100)'}}>
        <div className="container">
          <div className="section-header">
            <h2>Our Values</h2>
            <p className="section-description">
              The principles that guide our work and relationships
            </p>
          </div>
          
          <div className="grid grid-cols-2">
            {values.map((value, index) => (
              <div key={index} className="card">
                <div className="flex items-center gap-4 mb-4">
                  <div className="card-icon" style={{margin: 0, fontSize: '2rem'}}>
                    {value.icon}
                  </div>
                  <h3 style={{margin: 0}}>{value.title}</h3>
                </div>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>Our Expertise</h2>
          </div>
          
          <div className="grid grid-cols-3">
            <div className="card text-center">
              <FaGraduationCap className="card-icon" />
              <h3>Academic Excellence</h3>
              <p>Advanced degrees in chemical and environmental engineering with continuous professional development</p>
            </div>
            
            <div className="card text-center">
              <FaIndustry className="card-icon" />
              <h3>Industry Experience</h3>
              <p>Extensive hands-on experience across diverse industrial sectors and process environments</p>
            </div>
            
            <div className="card text-center">
              <FaGlobe className="card-icon" />
              <h3>Global Perspective</h3>
              <p>International experience combined with deep understanding of New Zealand's unique challenges</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;