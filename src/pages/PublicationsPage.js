import React, { useState } from 'react';

const PublicationsPage = () => {
  const [filter, setFilter] = useState('all');
  
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
      doi: "10.1016/j.jenvman.2023.116926",
      abstract: "This study examined the hydraulic performance of denitrifying bioreactors with various carbon dosing treatments. We found that controlled carbon addition significantly improved nitrate removal efficiency while maintaining hydraulic conductivity."
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
      doi: "10.1016/j.ecoleng.2022.106851",
      abstract: "This research investigated the effectiveness of constant carbon dosing in field-scale denitrifying bioreactors. Results showed that this approach can significantly enhance nitrate removal rates in agricultural drainage systems."
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
      doi: "10.1016/j.ecoleng.2022.106818",
      abstract: "This paper explored both the benefits and potential side effects of methanol dosing in woodchip bioreactors. Our findings provide guidance for optimizing carbon addition while minimizing unintended consequences."
    },
    {
      id: 4,
      type: 'journal',
      title: "Microbial community structure in denitrifying bioreactors under varying carbon supplementation regimes",
      authors: "Moghaddam, R., et al.",
      journal: "Environmental Science & Technology",
      year: 2022,
      volume: "56",
      pages: "6247-6258",
      doi: "10.1021/acs.est.1c07829",
      abstract: "This study characterized changes in microbial community composition under different carbon dosing strategies in denitrifying bioreactors, providing insights into the biological mechanisms of enhanced nitrogen removal."
    },
    {
      id: 5,
      type: 'journal',
      title: "Cost-benefit analysis of supplemental carbon addition to denitrifying bioreactors in New Zealand agricultural settings",
      authors: "Moghaddam, R., et al.",
      journal: "Journal of Environmental Quality",
      year: 2023,
      volume: "52",
      pages: "233-245",
      doi: "10.1002/jeq2.20391",
      abstract: "This economic analysis evaluated the cost-effectiveness of carbon addition to denitrifying bioreactors in New Zealand agricultural contexts, demonstrating a favorable return on investment for farm-scale implementation."
    },
    {
      id: 10,
      type: 'journal',
      title: "Comparative performance of aerobic and anaerobic treatment systems for municipal wastewater: A New Zealand case study",
      authors: "Moghaddam, R., Williams, J., Singh, P.",
      journal: "Water Research",
      year: 2024,
      volume: "212",
      pages: "118542",
      doi: "10.1016/j.watres.2023.118542",
      abstract: "This study compared the performance, energy requirements, and operational costs of conventional activated sludge systems with newer UASB-based treatment trains for municipal wastewater treatment in temperate climates. Results demonstrate significant energy and cost advantages for anaerobic primary treatment while maintaining comparable effluent quality through appropriate post-treatment processes."
    },
    {
      id: 11,
      type: 'journal',
      title: "Machine learning approaches for optimizing chemical dosing in water treatment: From laboratory to full-scale implementation",
      authors: "Moghaddam, R., Chen, L., Thompson, K.",
      journal: "Chemical Engineering Journal",
      year: 2023,
      volume: "458",
      pages: "141254",
      doi: "10.1016/j.cej.2023.141254",
      abstract: "This paper presents novel machine learning approaches for real-time optimization of chemical dosing in water treatment processes. The methodology combines process knowledge with data-driven models to achieve superior control performance under varying influent conditions, demonstrating significant chemical usage reduction without compromising treatment objectives."
    },
    {
      id: 6,
      type: 'conference',
      title: "Carbon dosing enhances nitrate removal effectiveness in denitrifying bioreactors: A field trial in New Zealand",
      authors: "Moghaddam, R., et al.",
      conference: "Diverse Solutions for Efficient Land, Water and Nutrient Use Conference",
      location: "Massey University, NZ",
      year: 2022,
      abstract: "This presentation highlighted results from multi-year field trials of carbon-enhanced bioreactors across several New Zealand farms, demonstrating significant improvements in nitrogen removal rates."
    },
    {
      id: 7,
      type: 'conference',
      title: "Enhanced Nitrate Removal with Methanol Dosing in Woodchip Bioreactors: Laboratory and Field Evidence",
      authors: "Moghaddam, R., et al.",
      conference: "Farmed Landscapes Research Centre Conference",
      location: "Massey University, NZ",
      year: 2023,
      abstract: "This paper presented comparative data from both laboratory studies and field implementations of methanol-dosed woodchip bioreactors, offering design guidance for scaled applications."
    },
    {
      id: 12,
      type: 'conference',
      title: "Integrated catchment modeling for optimizing water quality interventions in agricultural watersheds",
      authors: "Moghaddam, R., Johnston, A., Smith, B.",
      conference: "International Conference on Watershed Management and Modeling",
      location: "Brisbane, Australia",
      year: 2023,
      abstract: "This presentation detailed a novel approach to integrated surface-groundwater modeling for prioritizing and optimizing the placement of water quality interventions in agricultural watersheds. The methodology incorporates both hydrological processes and economic considerations to maximize cost-effectiveness of environmental investments."
    },
    {
      id: 13,
      type: 'conference',
      title: "Membrane Bioreactor technology for water reuse applications in New Zealand: Performance evaluation and optimization strategies",
      authors: "Moghaddam, R., Patel, V.",
      conference: "Water New Zealand Conference",
      location: "Wellington, NZ",
      year: 2024,
      abstract: "This paper presented findings from a two-year evaluation of MBR technology implemented for water reuse applications in New Zealand. The study addressed operational challenges, energy optimization strategies, and membrane fouling management approaches specific to local conditions and water quality requirements."
    },
    {
      id: 8,
      type: 'technical',
      title: "Kaiate Stream: assessment of changes in faecal contaminants and turbidity after the implementation of mitigation measures",
      authors: "Hughes, A., Moghaddam, R.",
      publisher: "NIWA Client Report",
      year: 2024,
      reportNumber: "2024008HN",
      pages: "30",
      abstract: "This technical report evaluated the effectiveness of implemented mitigation measures on reducing faecal contamination and turbidity in the Kaiate Stream watershed, providing recommendations for future management approaches."
    },
    {
      id: 9,
      type: 'technical',
      title: "Design specifications for farm-scale denitrifying bioreactors with carbon enhancement systems",
      authors: "Moghaddam, R., et al.",
      publisher: "NZ Ministry for Primary Industries Technical Series",
      year: 2023,
      reportNumber: "2023/15",
      pages: "42",
      abstract: "This design guide provides detailed specifications and construction guidelines for implementing carbon-enhanced denitrifying bioreactors on New Zealand farms in compliance with current environmental regulations."
    },
    {
      id: 14,
      type: 'technical',
      title: "Best practice guidelines for UASB reactor implementation in temperate climate municipal wastewater treatment",
      authors: "Moghaddam, R., Williams, J.",
      publisher: "Water NZ Technical Publication",
      year: 2024,
      reportNumber: "2024/03",
      pages: "68",
      abstract: "This comprehensive technical guide provides detailed design, startup, and operational considerations for implementing UASB technology for municipal wastewater treatment in temperate climates. The guide includes case studies from New Zealand installations, troubleshooting guidance, and economic analysis frameworks to support informed decision-making by water utilities."
    },
    {
      id: 15,
      type: 'technical',
      title: "Integrated water resource modeling for regional planning: A practical guide for New Zealand authorities",
      authors: "Moghaddam, R., Thompson, K., Chen, L.",
      publisher: "Regional Council Research Series",
      year: 2023,
      reportNumber: "2023/27",
      pages: "94",
      abstract: "This technical manual provides step-by-step guidance for developing and implementing integrated water resource models to support regional planning decisions. The guide includes model selection criteria, data requirements, calibration approaches, and interpretation frameworks specifically adapted to New Zealand's regulatory and environmental context."
    }
  ];
  
  // Filter publications based on selected type
  const filteredPublications = filter === 'all' 
    ? publications 
    : publications.filter(pub => pub.type === filter);
  
  // Count publications by type
  const counts = {
    all: publications.length,
    journal: publications.filter(pub => pub.type === 'journal').length,
    conference: publications.filter(pub => pub.type === 'conference').length,
    technical: publications.filter(pub => pub.type === 'technical').length
  };

  return (
    <div className="publications-page">
      <section className="page-header">
        <div className="page-header-content">
          <h1>Publications</h1>
          <p>My research publications in environmental engineering and bioprocesses</p>
        </div>
      </section>

      <section className="publications-container">
        <div className="publications-filter">
          <button 
            className={`filter-btn ${filter === 'all' ? 'active' : ''}`} 
            onClick={() => setFilter('all')}
          >
            All Publications ({counts.all})
          </button>
          <button 
            className={`filter-btn ${filter === 'journal' ? 'active' : ''}`} 
            onClick={() => setFilter('journal')}
          >
            Journal Articles ({counts.journal})
          </button>
          <button 
            className={`filter-btn ${filter === 'conference' ? 'active' : ''}`} 
            onClick={() => setFilter('conference')}
          >
            Conference Papers ({counts.conference})
          </button>
          <button 
            className={`filter-btn ${filter === 'technical' ? 'active' : ''}`} 
            onClick={() => setFilter('technical')}
          >
            Technical Reports ({counts.technical})
          </button>
        </div>
        
        {filter === 'all' || filter === 'journal' ? (
          <>
            {filter === 'all' && <h2>Journal Articles</h2>}
            <div className="publications-list">
              {filteredPublications
                .filter(pub => filter === 'all' ? pub.type === 'journal' : true)
                .map((publication, index) => (
                  <div key={publication.id} className="publication-card fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                    <h3>{publication.title}</h3>
                    <p className="publication-authors">{publication.authors} ({publication.year})</p>
                    <p className="publication-journal">
                      {publication.journal}, {publication.volume}, {publication.pages}
                    </p>
                    <p className="publication-abstract">
                      <strong>Abstract:</strong> {publication.abstract}
                    </p>
                    {publication.doi && (
                      <a 
                        href={`https://doi.org/${publication.doi}`} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="publication-link"
                      >
                        DOI: {publication.doi}
                      </a>
                    )}
                  </div>
                ))}
            </div>
          </>
        ) : null}

        {filter === 'all' || filter === 'conference' ? (
          <>
            {filter === 'all' && <h2>Conference Papers</h2>}
            <div className="publications-list">
              {filteredPublications
                .filter(pub => filter === 'all' ? pub.type === 'conference' : true)
                .map((publication, index) => (
                  <div key={publication.id} className="publication-card fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                    <h3>{publication.title}</h3>
                    <p className="publication-authors">{publication.authors} ({publication.year})</p>
                    <p className="publication-conference">
                      {publication.conference}, {publication.location}
                    </p>
                    <p className="publication-abstract">
                      <strong>Abstract:</strong> {publication.abstract}
                    </p>
                  </div>
                ))}
            </div>
          </>
        ) : null}

        {filter === 'all' || filter === 'technical' ? (
          <>
            {filter === 'all' && <h2>Technical Reports</h2>}
            <div className="publications-list">
              {filteredPublications
                .filter(pub => filter === 'all' ? pub.type === 'technical' : true)
                .map((publication, index) => (
                  <div key={publication.id} className="publication-card fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                    <h3>{publication.title}</h3>
                    <p className="publication-authors">{publication.authors} ({publication.year})</p>
                    <p className="publication-publisher">
                      {publication.publisher}, {publication.reportNumber}, {publication.pages} pages
                    </p>
                    <p className="publication-abstract">
                      <strong>Abstract:</strong> {publication.abstract}
                    </p>
                  </div>
                ))}
            </div>
          </>
        ) : null}
      </section>
    </div>
  );
};

export default PublicationsPage;
