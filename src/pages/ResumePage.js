import React from 'react';
import { Link } from 'react-router-dom';

const ResumePage = () => {
  return (
    <div className="resume-page">
      <section className="page-header">
        <h1>Professional Resume</h1>
        <p>Experience, education, and qualifications in environmental engineering</p>
      </section>

      <div className="resume-container">
        {/* Professional Experience Section */}
        <section className="resume-section">
          <h2>Professional Experience</h2>
          
          <div className="experience-item">
            <div className="experience-header">
              <h3>Environmental Engineer</h3>
              <p className="experience-company">National Institute of Water and Atmospheric Research (NIWA), New Zealand</p>
              <p className="experience-date">March 2023 - Present</p>
            </div>
            <ul className="experience-responsibilities">
              <li>Spearhead development of innovative Aquatic Mitigation Systems, compliant with NES-F regulations</li>
              <li>Conducted comprehensive economic analyses of constructed wetlands and woodchip bioreactors, including capital costs, operational expenses, and long-term maintenance requirements</li>
              <li>Developed cost-benefit models for various mitigation systems, incorporating factors such as land value, construction costs, and treatment efficiency</li>
              <li>Lead multidisciplinary teams in MBIE endeavor fund grant applications, including detailed financial projections</li>
              <li>Ensure compliance with RMA requirements in environmental assessments</li>
              <li>Conducted catchment studies following NPS-FM 2020 guidelines, including economic feasibility assessments</li>
              <li>Experience in catchment water quality and quantity modeling at NIWA, including CLUES model calibration, and am familiar with hydrological modeling using HEC-HMS, HEC-RAS, and groundwater modeling</li>
            </ul>
            <div className="experience-achievements">
              <h4>Key Achievements:</h4>
              <ul>
                <li>Authored high-impact technical reports influencing national environmental policy and funding allocation</li>
                <li>Developed novel prediction models improving system efficiency by 30% while reducing operational costs</li>
                <li>Created comprehensive lifecycle cost analysis framework for mitigation systems</li>
              </ul>
            </div>
          </div>
          
          <div className="experience-item">
            <div className="experience-header">
              <h3>Environmental Engineer</h3>
              <p className="experience-company">Williamson Water and Land Advisory, New Zealand</p>
              <p className="experience-date">Sep 2022 - Dec 2022</p>
            </div>
            <ul className="experience-responsibilities">
              <li>Designed water and wastewater systems compliant with Drinking Water Standards NZ</li>
              <li>Developed client proposals incorporating comprehensive cost-benefit analyses</li>
              <li>Conducted economic feasibility studies for water infrastructure projects</li>
            </ul>
          </div>
          
          <div className="experience-item">
            <div className="experience-header">
              <h3>Chemical Engineer</h3>
              <p className="experience-company">Bidestan Alcohol and Foodstuff Co, Iran</p>
              <p className="experience-date">2016 - 2019</p>
            </div>
            <ul className="experience-responsibilities">
              <li>Optimized bioethanol production processes, achieving 25% yield increase</li>
              <li>Designed and implemented advanced wastewater treatment systems</li>
            </ul>
            <div className="experience-achievements">
              <h4>Key Achievements:</h4>
              <ul>
                <li>Pioneered novel rotary drum dryer design for waste repurposing</li>
                <li>Reduced operational costs by 30% through process optimization</li>
              </ul>
            </div>
          </div>
        </section>
        
        {/* Education Section */}
        <section className="resume-section">
          <h2>Education</h2>
          
          <div className="education-item">
            <div className="education-header">
              <h3>PhD in Environmental Engineering</h3>
              <p className="education-institution">University of Waikato, New Zealand</p>
              <p className="education-date">2019 - 2022</p>
            </div>
            <div className="education-details">
              <p><strong>Thesis:</strong> "Enhanced Nitrate Removal via Carbon Dosing in Woodchip Bioreactors"</p>
              <p><strong>Focus:</strong> Cost-effective solutions for agricultural water treatment</p>
              <ul className="education-achievements">
                <li>Published 3 peer-reviewed articles in high-impact journals</li>
                <li>Awarded university research excellence scholarship</li>
              </ul>
            </div>
          </div>
          
          <div className="education-item">
            <div className="education-header">
              <h3>MSc in Chemical Engineering</h3>
              <p className="education-institution">Sahand University of Technology, Iran</p>
              <p className="education-date">2015 - 2017</p>
            </div>
            <div className="education-details">
              <p><strong>Thesis:</strong> "Optimizing Bioethanol Production in Fed-Batch Bioreactors"</p>
              <ul className="education-achievements">
                <li>Achieved 20% improvement in bioethanol production efficiency</li>
              </ul>
            </div>
          </div>
          
          <div className="education-item">
            <div className="education-header">
              <h3>BSc in Chemical Engineering</h3>
              <p className="education-institution">University of Zanjan, Iran</p>
              <p className="education-date">2011 - 2015</p>
            </div>
          </div>
        </section>
        
        {/* Skills Section */}
        <section className="resume-section">
          <h2>Core Competencies & Technical Expertise</h2>
          
          <div className="skills-container">
            <div className="skills-category">
              <h3>Core Competencies</h3>
              <ul className="skills-list">
                <li>Advanced data analysis & modeling</li>
                <li>Environmental impact assessment</li>
                <li>Economic feasibility analysis</li>
                <li>Sustainable technology design</li>
                <li>Project management & leadership</li>
                <li>Research & development</li>
              </ul>
            </div>
            
            <div className="skills-category">
              <h3>Engineering & Analysis</h3>
              <ul className="skills-list">
                <li>Advanced (Bio)process Engineering</li>
                <li>Environmental Impact Assessment</li>
                <li>Life Cycle Assessment (LCA)</li>
                <li>Techno-Economic Analysis</li>
                <li>Risk Assessment & Management</li>
                <li>Cost-Benefit Analysis</li>
                <li>RMA Assessment of Effects</li>
              </ul>
            </div>
            
            <div className="skills-category">
              <h3>Software & Tools</h3>
              <ul className="skills-list">
                <li>Python, R (Data Analysis)</li>
                <li>Machine Learning Frameworks</li>
                <li>FreeCAD (3D Modeling)</li>
                <li>QGIS (Geospatial Analysis)</li>
                <li>EPANET (Water Distribution)</li>
                <li>Microsoft Office</li>
                <li>LaTeX</li>
              </ul>
            </div>
            
            <div className="skills-category">
              <h3>Regulatory Knowledge</h3>
              <ul className="skills-list">
                <li>Resource Management Act 1991 (RMA) and amendments</li>
                <li>National Environmental Standards for Freshwater (NES-F)</li>
                <li>National Policy Statement for Freshwater Management 2020 (NPS-FM)</li>
                <li>Health and Safety at Work Act 2015 (HSWA)</li>
                <li>Regional and District Plan requirements</li>
                <li>Te Mana o te Wai framework implementation</li>
                <li>Climate Change Response Act 2002 and amendments</li>
              </ul>
            </div>
          </div>
        </section>
        
        {/* Publications Section */}
        <section className="resume-section">
          <h2>Selected Publications</h2>
          
          <div className="publications-container">
            <h3>Journal Articles</h3>
            <ol className="publications-list">
              <li>Moghaddam, R., et al. (2023). "Flow analysis and hydraulic performance of denitrifying bioreactors under different carbon dosing treatments." Journal of Environmental Management, 328, 116926.</li>
              <li>Moghaddam, R., et al. (2023). "Constant carbon dosing of a pilot-scale denitrifying bioreactor to improve nitrate removal from agricultural tile drainage." Ecological Engineering, 187, 106851.</li>
              <li>Moghaddam, R., et al. (2022). "Enhanced nitrate removal and side effects of methanol dosing in denitrifying bioreactors." Ecological Engineering, 185, 106818.</li>
              <li>Moghaddam, R., et al. (2019). "Optimization of submerged fermentation conditions to overproduce bioethanol using two industrial and traditional Saccharomyces cerevisiae strains." Green Processing and Synthesis, 8(1), 157-162.</li>
              <li>Moghaddam, R., et al. (2018). "Screening of the five different wild, traditional and industrial Saccharomyces cerevisiae strains to overproduce bioethanol in the batch submerged fermentation." Zeitschrift für Naturforschung C, 73(9-10), 361-366.</li>
            </ol>
            
            <h3>Conference Papers</h3>
            <ul className="publications-list">
              <li>Moghaddam, R., et al. (2022). "Carbon dosing enhances nitrate removal effectiveness in denitrifying bioreactors: A field trial in New Zealand." Diverse Solutions for Efficient Land, Water and Nutrient Use Conference, Massey University, NZ.</li>
              <li>Moghaddam, R., et al. (2023). "Enhanced Nitrate Removal with Methanol Dosing in Woodchip Bioreactors: Laboratory and Field Evidence." Farmed Landscapes Research Centre Conference, Massey University, NZ.</li>
            </ul>
            
            <h3>Technical Reports</h3>
            <ul className="publications-list">
              <li>Hughes, A., Moghaddam, R. (2024). "Kaiate Stream: assessment of changes in faecal contaminants and turbidity after the implementation of mitigation measures." NIWA Client Report, 2024008HN: 30.</li>
              <li>Stott, R., Wood, D., Moghaddam, R. (2023). "New Plymouth WWTP: wastewater characterisation and assessment of microbiological effects." NIWA Client Report, 2023366HN: 56.</li>
              <li>Hudson, N., Semadeni-Davies, A., Moghaddam, R. (2023). "Estimation of contaminant losses Mill Creek catchment, Lake Hayes." Prepared for Otago Regional Council, June 2023.</li>
            </ul>
            
            <h3>PhD Thesis</h3>
            <ul className="publications-list">
              <li>Moghaddam, R. (2023). "Carbon Dosing of Denitrifying Bioreactors to Remove Nitrate from Agricultural Drainage." DOI:10.13140/RG.2.2.30515.09760</li>
            </ul>
          </div>
        </section>
        
        {/* Professional Development Section */}
        <section className="resume-section">
          <h2>Professional Development & Recognition</h2>
          
          <ul className="professional-development-list">
            <li>Washington Accord Recognition - Engineering Knowledge Assessment 2024</li>
            <li>Project Management Certification 2023</li>
            <li>Member, Engineering New Zealand</li>
            <li>Pursuing Chartered Professional Engineer (CPEng) status</li>
          </ul>
        </section>
        
        {/* Languages Section */}
        <section className="resume-section">
          <h2>Languages</h2>
          
          <ul className="languages-list">
            <li><strong>English:</strong> Professional working proficiency</li>
            <li><strong>Persian:</strong> Native proficiency</li>
          </ul>
        </section>
        
        {/* Download Resume */}
        <div className="resume-download">
          <h3>Need a printable version?</h3>
          <p>You can download my complete resume as a PDF for your records.</p>
          <a href="/download-resume" className="btn primary-btn">Download Resume (PDF)</a>
        </div>
        
        {/* Contact CTA */}
        <div className="consulting-cta">
          <h3>Interested in Working Together?</h3>
          <p>If you're looking for expertise in environmental engineering, water treatment, or bioprocess optimization, I'd be happy to discuss how I can contribute to your projects.</p>
          <Link to="/contact" className="btn primary-btn">Get in Touch</Link>
        </div>
      </div>
    </div>
  );
};

export default ResumePage;
