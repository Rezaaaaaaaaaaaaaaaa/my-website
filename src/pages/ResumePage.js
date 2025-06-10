import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FaGraduationCap, 
  FaBriefcase, 
  FaCertificate, 
  FaTools, 
  FaLanguage,
  FaDownload,
  FaLinkedin,
  FaGoogleScholar,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope
} from 'react-icons/fa';

const ResumePage = () => {
  return (
    <div className="resume-page">
      <section className="page-header enhanced-header">
        <div className="header-content">
          <h1>Professional Resume</h1>
          <p>Comprehensive background in environmental engineering, water systems, and sustainable solutions</p>
          <div className="header-contact">
            <div className="contact-item">
              <FaEnvelope />
              <span>reza.moghaddam@niwa.co.nz</span>
            </div>
            <div className="contact-item">
              <FaPhone />
              <span>+64 21 0805 2489</span>
            </div>
            <div className="contact-item">
              <FaMapMarkerAlt />
              <span>New Zealand Resident</span>
            </div>
          </div>
        </div>
      </section>

      <div className="resume-container">
        {/* Professional Experience Section */}
        <section className="resume-section modern-section">
          <div className="section-header">
            <FaBriefcase className="section-icon" />
            <h2>Professional Experience</h2>
          </div>
          
          <div className="timeline">
            <div className="experience-item enhanced-card">
              <div className="experience-header">
                <div className="experience-title">
                  <h3>Environmental Engineer</h3>
                  <p className="experience-company">National Institute of Water and Atmospheric Research (NIWA)</p>
                  <p className="experience-location">New Zealand</p>
                </div>
                <div className="experience-date">
                  <span>Mar 2023 - Present</span>
                </div>
              </div>
              <div className="experience-content">
                <ul className="experience-responsibilities">
                  <li>Spearhead development of innovative Aquatic Mitigation Systems compliant with NES-F regulations</li>
                  <li>Conduct comprehensive economic analyses of constructed wetlands and woodchip bioreactors</li>
                  <li>Lead multidisciplinary teams in MBIE endeavor fund grant applications with detailed financial projections</li>
                  <li>Ensure compliance with RMA requirements in environmental assessments</li>
                  <li>Conduct catchment studies following NPS-FM 2020 guidelines with economic feasibility assessments</li>
                  <li>Experience in catchment water quality and quantity modeling including CLUES model calibration</li>
                  <li>Proficient in hydrological modeling using HEC-HMS, HEC-RAS, and groundwater modeling</li>
                </ul>
                <div className="achievements">
                  <h4>Key Achievements:</h4>
                  <ul>
                    <li>Authored high-impact technical reports influencing national environmental policy</li>
                    <li>Developed novel prediction models improving system efficiency by 30%</li>
                    <li>Created comprehensive lifecycle cost analysis framework for mitigation systems</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="experience-item enhanced-card">
              <div className="experience-header">
                <div className="experience-title">
                  <h3>Water Engineer</h3>
                  <p className="experience-company">Williamson Water and Land Advisory</p>
                  <p className="experience-location">New Zealand</p>
                </div>
                <div className="experience-date">
                  <span>Sep 2022 - Dec 2022</span>
                </div>
              </div>
              <div className="experience-content">
                <ul className="experience-responsibilities">
                  <li>Designed water and wastewater systems compliant with Drinking Water Standards NZ</li>
                  <li>Developed client proposals incorporating comprehensive cost-benefit analyses</li>
                  <li>Conducted economic feasibility studies for water infrastructure projects</li>
                </ul>
              </div>
            </div>
            
            <div className="experience-item enhanced-card">
              <div className="experience-header">
                <div className="experience-title">
                  <h3>Chemical Engineer</h3>
                  <p className="experience-company">Bidestan Alcohol and Foodstuff Co</p>
                  <p className="experience-location">Iran</p>
                </div>
                <div className="experience-date">
                  <span>2016 - 2019</span>
                </div>
              </div>
              <div className="experience-content">
                <ul className="experience-responsibilities">
                  <li>Optimized bioethanol production processes achieving 25% yield increase</li>
                  <li>Designed and implemented advanced wastewater treatment systems</li>
                  <li>Led process improvement initiatives resulting in significant cost reductions</li>
                </ul>
                <div className="achievements">
                  <h4>Key Achievements:</h4>
                  <ul>
                    <li>Pioneered novel rotary drum dryer design for waste repurposing</li>
                    <li>Reduced operational costs by 30% through process optimization</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Education Section */}
        <section className="resume-section modern-section">
          <div className="section-header">
            <FaGraduationCap className="section-icon" />
            <h2>Education</h2>
          </div>
          
          <div className="education-timeline">
            <div className="education-item enhanced-card">
              <div className="education-header">
                <div className="education-title">
                  <h3>PhD in Environmental Engineering</h3>
                  <p className="education-institution">University of Waikato, New Zealand</p>
                </div>
                <div className="education-date">
                  <span>2019 - 2022</span>
                </div>
              </div>
              <div className="education-content">
                <p><strong>Thesis:</strong> "Enhanced Nitrate Removal via Carbon Dosing in Woodchip Bioreactors"</p>
                <p><strong>Focus:</strong> Cost-effective solutions for agricultural water treatment</p>
                <div className="education-achievements">
                  <ul>
                    <li>Published 3 peer-reviewed articles in high-impact journals</li>
                    <li>Awarded university research excellence scholarship</li>
                    <li>Developed innovative carbon dosing methodology</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="education-item enhanced-card">
              <div className="education-header">
                <div className="education-title">
                  <h3>MSc in Chemical Engineering</h3>
                  <p className="education-institution">Sahand University of Technology, Iran</p>
                </div>
                <div className="education-date">
                  <span>2015 - 2017</span>
                </div>
              </div>
              <div className="education-content">
                <p><strong>Thesis:</strong> "Optimizing Bioethanol Production in Fed-Batch Bioreactors"</p>
                <div className="education-achievements">
                  <ul>
                    <li>Achieved 20% improvement in bioethanol production efficiency</li>
                    <li>Specialized in bioprocess engineering and optimization</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="education-item enhanced-card">
              <div className="education-header">
                <div className="education-title">
                  <h3>BSc in Chemical Engineering</h3>
                  <p className="education-institution">University of Zanjan, Iran</p>
                </div>
                <div className="education-date">
                  <span>2011 - 2015</span>
                </div>
              </div>
              <div className="education-content">
                <p>Foundation in chemical engineering principles with focus on process design and optimization</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Key Competencies Section */}
        <section className="resume-section modern-section">
          <div className="section-header">
            <FaTools className="section-icon" />
            <h2>Key Competencies</h2>
          </div>
          
          <div className="competencies-grid">
            <div className="competency-category enhanced-card">
              <h3>Environmental Systems Modeling</h3>
              <ul className="competency-list">
                <li>Integrated watershed modeling and simulation</li>
                <li>Advanced hydraulic and hydrologic analysis</li>
                <li>Predictive environmental quality assessment</li>
                <li>Digital twin development for water systems</li>
              </ul>
            </div>
            
            <div className="competency-category enhanced-card">
              <h3>Sustainable Engineering</h3>
              <ul className="competency-list">
                <li>Nature-based solution development</li>
                <li>Green infrastructure implementation</li>
                <li>Ecological engineering approaches</li>
                <li>Resilient system design for climate adaptation</li>
              </ul>
            </div>
            
            <div className="competency-category enhanced-card">
              <h3>Water Treatment Technology</h3>
              <ul className="competency-list">
                <li>Treatment system design and optimization</li>
                <li>Innovative contaminant removal strategies</li>
                <li>Water quality management frameworks</li>
                <li>Decentralized treatment solutions</li>
              </ul>
            </div>
            
            <div className="competency-category enhanced-card">
              <h3>Process Engineering</h3>
              <ul className="competency-list">
                <li>Bioprocess engineering and optimization</li>
                <li>Resource recovery system development</li>
                <li>Industrial ecology implementation</li>
                <li>Circular economy approaches</li>
              </ul>
            </div>
            
            <div className="competency-category enhanced-card">
              <h3>Geospatial Analysis</h3>
              <ul className="competency-list">
                <li>Environmental spatial modeling</li>
                <li>Multi-dimensional data visualization</li>
                <li>Land-water interaction analysis</li>
                <li>Terrain and hydrologic feature characterization</li>
              </ul>
            </div>
            
            <div className="competency-category enhanced-card">
              <h3>Technical Expertise</h3>
              <ul className="competency-list">
                <li>Data science for environmental applications</li>
                <li>Research methodology and experimental design</li>
                <li>Environmental regulatory framework navigation</li>
                <li>Indigenous environmental management principles</li>
              </ul>
            </div>
          </div>
        </section>
        
        {/* Technical Tools Section */}
        <section className="resume-section modern-section">
          <div className="section-header">
            <FaCertificate className="section-icon" />
            <h2>Technical Tools & Software</h2>
          </div>
          
          <div className="tools-grid">
            <div className="tools-category enhanced-card">
              <h3>Modeling Software</h3>
              <div className="tools-list">
                <div className="tool-subcategory">
                  <h4>Stormwater Management</h4>
                  <div className="technology-badges">
                    <span className="tech-badge">SWMM</span>
                    <span className="tech-badge">pySWMM</span>
                  </div>
                </div>
                <div className="tool-subcategory">
                  <h4>Water Distribution</h4>
                  <div className="technology-badges">
                    <span className="tech-badge">EPANET</span>
                  </div>
                </div>
                <div className="tool-subcategory">
                  <h4>River Analysis</h4>
                  <div className="technology-badges">
                    <span className="tech-badge">HEC-RAS</span>
                  </div>
                </div>
                <div className="tool-subcategory">
                  <h4>Groundwater Modeling</h4>
                  <div className="technology-badges">
                    <span className="tech-badge">MODFLOW</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="tools-category enhanced-card">
              <h3>Data Analysis & Programming</h3>
              <div className="tools-list">
                <div className="tool-subcategory">
                  <h4>Python Ecosystem</h4>
                  <div className="technology-badges">
                    <span className="tech-badge">Pandas</span>
                    <span className="tech-badge">NumPy</span>
                    <span className="tech-badge">Matplotlib</span>
                    <span className="tech-badge">SciPy</span>
                  </div>
                </div>
                <div className="tool-subcategory">
                  <h4>Statistical Computing</h4>
                  <div className="technology-badges">
                    <span className="tech-badge">R</span>
                  </div>
                </div>
                <div className="tool-subcategory">
                  <h4>Spatial Analysis</h4>
                  <div className="technology-badges">
                    <span className="tech-badge">QGIS</span>
                    <span className="tech-badge">ArcGIS</span>
                  </div>
                </div>
                <div className="tool-subcategory">
                  <h4>Engineering Analysis</h4>
                  <div className="technology-badges">
                    <span class="tech-badge">Matlab</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Professional Development Section */}
        <section className="resume-section modern-section">
          <div className="section-header">
            <FaCertificate className="section-icon" />
            <h2>Professional Development & Affiliations</h2>
          </div>
          
          <div className="development-grid">
            <div className="development-item enhanced-card">
              <h3>Professional Affiliations</h3>
              <ul className="development-list">
                <li>Member, Engineering New Zealand</li>
                <li>Pursuing Chartered Professional Engineer (CPEng) status</li>
                <li>Active participant in international water quality forums</li>
              </ul>
            </div>
          </div>
        </section>
        
        {/* Languages Section */}
        <section className="resume-section modern-section">
          <div className="section-header">
            <FaLanguage className="section-icon" />
            <h2>Languages</h2>
          </div>
          
          <div className="languages-grid">
            <div className="language-item enhanced-card">
              <h3>English</h3>
              <p>Professional proficiency</p>
              <div className="proficiency-bar">
                <div className="proficiency-fill" style={{width: '95%'}}></div>
              </div>
            </div>
            
            <div className="language-item enhanced-card">
              <h3>Persian</h3>
              <p>Native proficiency</p>
              <div className="proficiency-bar">
                <div className="proficiency-fill" style={{width: '100%'}}></div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Publications Preview */}
        <section className="resume-section modern-section">
          <div className="section-header">
            <h2>Selected Publications</h2>
          </div>
          
          <div className="publications-preview">
            <div className="publication-item enhanced-card">
              <h4>Flow analysis and hydraulic performance of denitrifying bioreactors under different carbon dosing treatments</h4>
              <p><strong>Journal of Environmental Management</strong>, 328, 116926 (2023)</p>
            </div>
            
            <div className="publication-item enhanced-card">
              <h4>Constant carbon dosing of a pilot-scale denitrifying bioreactor to improve nitrate removal from agricultural tile drainage</h4>
              <p><strong>Ecological Engineering</strong>, 187, 106851 (2023)</p>
            </div>
            
            <div className="publication-item enhanced-card">
              <h4>Enhanced nitrate removal and side effects of methanol dosing in denitrifying bioreactors</h4>
              <p><strong>Ecological Engineering</strong>, 185, 106818 (2022)</p>
            </div>
          </div>
          
          <div className="section-cta">
            <Link to="/publications" className="btn primary-btn enhanced-btn">View All Publications</Link>
          </div>
        </section>
        
        {/* Professional Links */}
        <section className="resume-section modern-section">
          <div className="section-header">
            <h2>Professional Links</h2>
          </div>
          
          <div className="professional-links">
            <a href="https://nz.linkedin.com/in/reza-moghaddam" target="_blank" rel="noopener noreferrer" className="professional-link enhanced-card">
              <FaLinkedin className="link-icon" />
              <div>
                <h4>LinkedIn Profile</h4>
                <p>Professional network and experience</p>
              </div>
            </a>
            
            <a href="https://scholar.google.com/citations" target="_blank" rel="noopener noreferrer" className="professional-link enhanced-card">
              <FaGoogleScholar className="link-icon" />
              <div>
                <h4>Google Scholar</h4>
                <p>Research publications and citations</p>
              </div>
            </a>
            
            <a href="https://niwa.co.nz/staff-profile" target="_blank" rel="noopener noreferrer" className="professional-link enhanced-card">
              <FaGlobe className="link-icon" />
              <div>
                <h4>NIWA Profile</h4>
                <p>Current institutional affiliation</p>
              </div>
            </a>
          </div>
        </section>
        
        {/* Download Resume */}
        <div className="resume-download enhanced-cta">
          <div className="cta-content">
            <FaDownload className="download-icon" />
            <h3>Download Complete Resume</h3>
            <p>Get a comprehensive PDF version of my professional background and qualifications</p>
            <a href="/resume.pdf" className="btn primary-btn enhanced-btn" download>
              <FaDownload />
              Download PDF Resume
            </a>
          </div>
        </div>
        
        {/* Contact CTA */}
        <div className="consulting-cta enhanced-cta">
          <div className="cta-content">
            <h3>Ready to Collaborate?</h3>
            <p>
              If you're looking for expertise in environmental engineering, water systems, or sustainable technology solutions, 
              I'd be happy to discuss how my experience and skills can contribute to your projects and objectives.
            </p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn primary-btn enhanced-btn">Get in Touch</Link>
              <Link to="/consulting" className="btn secondary-btn enhanced-btn">View Services</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumePage;
