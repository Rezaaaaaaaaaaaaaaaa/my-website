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
              Your trusted Kiwi partner for innovative environmental and process engineering 
              solutions that honour New Zealand's commitment to environmental excellence.
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
                Founded with a commitment to environmental stewardship and engineering excellence, 
                AquaTech Solutions NZ delivers world-class process engineering services designed 
                specifically for New Zealand's unique industrial landscape. From the pristine 
                waters of our fjords to the fertile plains of Canterbury, we understand the 
                responsibility of protecting Aotearoa's natural heritage while advancing industrial innovation.
              </p>
              <p>
                Our multidisciplinary team combines advanced technical knowledge with deep 
                understanding of New Zealand's regulatory environment and sustainability imperatives. 
                We serve as trusted partners across our nation's key industries - from dairy and 
                agriculture to marine processing and clean technology - ensuring every solution 
                delivers both commercial success and environmental responsibility.
              </p>
            </div>
            
            <div>
              <h2>Our Mission</h2>
              <p>
                To advance sustainable engineering practices that embody New Zealand's clean, green 
                values through innovative, scientifically-driven solutions. We are dedicated to 
                empowering Kiwi industries to achieve operational excellence while upholding our 
                nation's commitment to environmental stewardship - ensuring future generations 
                inherit the same pristine environment we cherish today.
              </p>
              
              <div className="mt-8">
                <h3>Key Focus Areas</h3>
                <ul>
                  <li className="mb-2">• Chemical and bioprocess engineering</li>
                  <li className="mb-2">• Environmental sustainability and compliance</li>
                  <li className="mb-2">• Dairy and food processing optimization</li>
                  <li className="mb-2">• Water treatment and marine solutions</li>
                  <li className="mb-2">• Agricultural technology advancement</li>
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
              <p>International expertise applied to New Zealand's unique environmental and regulatory landscape</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;