import React from 'react';
import './PublicationsPage.css'; // Import page-specific styles
import { FaBook, FaExternalLinkAlt, FaQuoteLeft } from 'react-icons/fa';

const PublicationsPage = () => {
  const publications = [
    {
      id: 1,
      type: 'journal',
      title: "Flow analysis and hydraulic performance of denitrifying bioreactors under different carbon dosing treatments",
      authors: "Moghaddam, R., et al.",
      journal: "Journal of Environmental Management",
      year: 2023,
      volume: "328",
      pages: "116926",
      impactFactor: 8.9,
      doi: "10.1016/j.jenvman.2023.116926",
      abstract: "This study examined the hydraulic performance of denitrifying bioreactors with various carbon dosing treatments. Results demonstrated that controlled carbon addition significantly improved nitrate removal efficiency while maintaining optimal hydraulic conductivity.",
      keywords: ["Denitrifying bioreactors", "Carbon dosing", "Hydraulic performance", "Nitrate removal", "Agricultural drainage"]
    },
    {
      id: 2,
      type: 'journal',
      title: "Constant carbon dosing of a pilot-scale denitrifying bioreactor to improve nitrate removal from agricultural tile drainage",
      authors: "Moghaddam, R., et al.",
      journal: "Ecological Engineering",
      year: 2023,
      volume: "187",
      pages: "106851",
      impactFactor: 4.0,
      doi: "10.1016/j.ecoleng.2022.106851",
      abstract: "This research investigated the effectiveness of constant carbon dosing in field-scale denitrifying bioreactors. Results showed that this approach can significantly enhance nitrate removal rates in agricultural drainage systems while maintaining cost-effectiveness.",
      keywords: ["Pilot-scale", "Agricultural drainage", "Tile drainage", "Field implementation", "Water quality"]
    },
    {
      id: 3,
      type: 'journal',
      title: "Enhanced nitrate removal and side effects of methanol dosing in denitrifying bioreactors",
      authors: "Moghaddam, R., et al.",
      journal: "Ecological Engineering",
      year: 2022,
      volume: "185",
      pages: "106818",
      impactFactor: 4.0,
      doi: "10.1016/j.ecoleng.2022.106818",
      abstract: "This paper explored both the benefits and potential side effects of methanol dosing in woodchip bioreactors. Our findings provide guidance for optimizing carbon addition while minimizing unintended consequences.",
      keywords: ["Methanol dosing", "Side effects", "Optimization", "Environmental impacts", "Treatment efficiency"]
    },
    {
      id: 4,
      type: 'technical',
      title: "Application of a riparian planning tool to the Pokaiwhenua catchment: Prediction of water quality and ecological outcomes",
      authors: "Matheson, F., Semadeni-Davies, A., Moghaddam, R., et al.",
      publisher: "Prepared for DairyNZ",
      year: 2024,
      reportType: "Technical Report",
      abstract: "This technical report presents the application of advanced riparian planning tools to predict water quality improvements and ecological outcomes in the Pokaiwhenua catchment, demonstrating the effectiveness of strategic riparian management.",
      keywords: ["Riparian management", "Catchment modeling", "Water quality prediction", "Ecological outcomes", "Planning tools"]
    },
    {
      id: 5,
      type: 'technical',
      title: "Kaiate Stream: assessment of changes in faecal contaminants and turbidity after implementation of mitigation measures",
      authors: "Hughes, A., Moghaddam, R.",
      publisher: "NIWA Client Report",
      year: 2024,
      reportNumber: "2024008HN",
      abstract: "This comprehensive assessment evaluated the effectiveness of implemented mitigation measures on reducing faecal contamination and turbidity in the Kaiate Stream watershed, providing recommendations for future management approaches.",
      keywords: ["Water quality assessment", "Mitigation effectiveness", "Stream health", "Monitoring", "Management recommendations"]
    }
  ];

  const getImpactBadge = (impactFactor) => {
    if (impactFactor >= 8) return { class: 'high-impact', label: 'High Impact' };
    if (impactFactor >= 4) return { class: 'medium-impact', label: 'Medium Impact' };
    return { class: 'standard-impact', label: 'Standard' };
  };

  return (
    <div className="publications-page container"> {/* Added container class */}
      <section className="page-header enhanced-header">
        <div className="header-content">
          <h1>Research Publications</h1>
          <p>Contributing to the scientific understanding of environmental systems and sustainable technologies</p>
          <div className="header-stats">
            <div className="stat-item">
              <span className="stat-number">{publications.filter(p => p.type === 'journal').length}</span>
              <span className="stat-label">Journal Articles</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">{publications.filter(p => p.type === 'technical').length}</span>
              <span className="stat-label">Technical Reports</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">8.9</span>
              <span className="stat-label">Highest Impact Factor</span>
            </div>
          </div>
        </div>
      </section>

      <section className="publications-container"> {/* This could also take .container if needed, or rely on parent */}
        <div className="publications-intro page-section"> {/* Replaced modern-section with page-section */}
          <div className="section-header">
            <FaBook className="section-icon" />
            <h2>Published Research</h2>
            <p className="section-subtitle">Peer-reviewed articles and technical reports advancing environmental engineering knowledge</p>
          </div>
        </div>

        <div className="publications-list">
          {publications.map(publication => (
            <div key={publication.id} className="publication-card enhanced-card">
              <div className="publication-header">
                <div className="publication-meta">
                  <span className="publication-type">{publication.type === 'journal' ? 'Journal Article' : 'Technical Report'}</span>
                  {publication.impactFactor && (
                    <span className={`impact-badge ${getImpactBadge(publication.impactFactor).class}`}>
                      IF: {publication.impactFactor}
                    </span>
                  )}
                  <span className="publication-year">{publication.year}</span>
                </div>
                <h3 className="publication-title">{publication.title}</h3>
                <p className="publication-authors">{publication.authors}</p>
              </div>

              <div className="publication-details">
                {publication.journal ? (
                  <p className="publication-source">
                    <strong>{publication.journal}</strong>
                    {publication.volume && ` | Volume ${publication.volume}`}
                    {publication.pages && ` | Pages ${publication.pages}`}
                    {publication.impactFactor && ` | Impact Factor: ${publication.impactFactor}`}
                  </p>
                ) : (
                  <p className="publication-source">
                    <strong>{publication.publisher}</strong>
                    {publication.reportNumber && ` | Report No: ${publication.reportNumber}`}
                  </p>
                )}

                <div className="publication-abstract">
                  <FaQuoteLeft className="quote-icon" />
                  <p>{publication.abstract}</p>
                </div>

                <div className="publication-keywords">
                  <h4>Keywords:</h4>
                  <div className="keyword-tags">
                    {publication.keywords.map((keyword, index) => (
                      <span key={index} className="keyword-tag">{keyword}</span>
                    ))}
                  </div>
                </div>

                {publication.doi && (
                  <div className="publication-links">
                    <a
                      href={`https://doi.org/${publication.doi}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn secondary-btn publication-link" /* Using global button styles */
                    >
                      <FaExternalLinkAlt />
                      View Publication
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="publications-summary page-section"> {/* Replaced modern-section with page-section */}
          <div className="summary-content">
            <h3>Research Impact</h3>
            <p>
              My research focuses on developing innovative, practical solutions for environmental challenges,
              with particular emphasis on water treatment technologies and sustainable engineering approaches.
              The published work demonstrates significant contributions to the field of environmental engineering,
              with applications ranging from agricultural water management to advanced treatment systems.
            </p>
            <div className="research-themes">
              <div className="theme-item">
                <h4>Bioreactor Technology</h4>
                <p>Advanced biological treatment systems for water quality improvement</p>
              </div>
              <div className="theme-item">
                <h4>Carbon Enhancement</h4>
                <p>Innovative carbon dosing strategies for enhanced treatment performance</p>
              </div>
              <div className="theme-item">
                <h4>Catchment Management</h4>
                <p>Integrated approaches to watershed and water resource management</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PublicationsPage;
