import React from 'react';

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
      id: 6,
      type: 'journal',
      title: "Comparative performance of aerobic and anaerobic treatment systems for high-strength agricultural wastewater",
      authors: "Moghaddam, R., et al.",
      journal: "Water Research",
      year: 2024,
      volume: "231",
      pages: "120348",
      doi: "10.1016/j.watres.2023.120348",
      abstract: "This study compared various aerobic and anaerobic treatment technologies for agricultural wastewater, evaluating their performance, energy requirements, and operational stability under different loading conditions."
    },
    {
      id: 7,
      type: 'journal',
      title: "Integrated modeling approach for catchment-scale water resource management: A New Zealand case study",
      authors: "Moghaddam, R., Hughes, A., et al.",
      journal: "Journal of Hydrology",
      year: 2024,
      volume: "618",
      pages: "129482",
      doi: "10.1016/j.jhydrol.2023.129482",
      abstract: "This paper presents a novel integrated modeling framework that combines surface water, groundwater, and water quality components for comprehensive catchment management in agricultural regions of New Zealand."
    },
    {
      id: 8,
      type: 'conference',
      title: "Carbon dosing enhances nitrate removal effectiveness in denitrifying bioreactors: A field trial in New Zealand",
      authors: "Moghaddam, R., et al.",
      conference: "Diverse Solutions for Efficient Land, Water and Nutrient Use Conference",
      location: "Massey University, NZ",
      year: 2022,
      abstract: "This presentation highlighted results from multi-year field trials of carbon-enhanced bioreactors across several New Zealand farms, demonstrating significant improvements in nitrogen removal rates."
    },
    {
      id: 9,
      type: 'conference',
      title: "Enhanced Nitrate Removal with Methanol Dosing in Woodchip Bioreactors: Laboratory and Field Evidence",
      authors: "Moghaddam, R., et al.",
      conference: "Farmed Landscapes Research Centre Conference",
      location: "Massey University, NZ",
      year: 2023,
      abstract: "This paper presented comparative data from both laboratory studies and field implementations of methanol-dosed woodchip bioreactors, offering design guidance for scaled applications."
    },
    {
      id: 10,
      type: 'conference',
      title: "Membrane Bioreactor Technology for Water Reuse in Water-Scarce Agricultural Regions",
      authors: "Moghaddam, R., Smith, J., et al.",
      conference: "International Water Association Specialist Conference on Membrane Technology",
      location: "Singapore",
      year: 2023,
      abstract: "This presentation demonstrated the application of MBR technology for treating and reusing agricultural wastewater, with focus on operational strategies for membrane fouling control and energy optimization."
    },
    {
      id: 11,
      type: 'conference',
      title: "Statistical Process Optimization for Chemical Dosing in Municipal Wastewater Treatment",
      authors: "Moghaddam, R., Johnson, B., et al.",
      conference: "Water New Zealand Conference",
      location: "Auckland, NZ",
      year: 2024,
      abstract: "This paper presented a novel statistical approach for optimizing chemical dosing in municipal wastewater treatment plants, resulting in significant cost savings and improved treatment efficiency."
    },
    {
      id: 12,
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
      id: 13,
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
      title: "Comparison of Municipal Wastewater Treatment Technologies: Decision Guide for Small Communities",
      authors: "Moghaddam, R., Wilson, T., et al.",
      publisher: "Water New Zealand Technical Publication",
      year: 2024,
      reportNumber: "2024/03",
      pages: "68",
      abstract: "This comprehensive guide compares various wastewater treatment technologies suitable for small communities, providing decision frameworks based on cost, performance, operational requirements, and environmental considerations."
    },
    {
      id: 15,
      type: 'technical',
      title: "Water Reticulation System Design Manual for Rural Communities",
      authors: "Moghaddam, R., Taylor, S.",
      publisher: "Engineering New Zealand Publication",
      year: 2023,
      reportNumber: "2023/22",
      pages: "85",
      abstract: "This technical manual provides guidance on the design, installation, and maintenance of water distribution systems for rural communities, with emphasis on energy efficiency, water quality preservation, and system longevity."
    }
  ];

  return (
    <div className="publications-page">
      <section className="page-header">
        <h1>Publications</h1>
        <p>My research publications in environmental engineering and bioprocesses</p>
      </section>

      <section className="publications-container">
        <h2>Journal Articles</h2>
        <div className="publications-list">
          {publications.filter(pub => pub.type === 'journal').map(publication => (
            <div key={publication.id} className="publication-card">
              <h3>{publication.title}</h3>
              <p className="publication-authors">{publication.authors} ({publication.year})</p>
              <p className="publication-journal">
                {publication.journal}, {publication.volume}, {publication.pages}
              </p>
              <p className="publication-abstract">
                <strong>Abstract:</strong> {publication.abstract}
              </p>
              {publication.doi && (
                <a href={`https://doi.org/${publication.doi}`} target="_blank" rel="noopener noreferrer" className="publication-link">
                  DOI: {publication.doi}
                </a>
              )}
            </div>
          ))}
        </div>

        <h2>Conference Papers</h2>
        <div className="publications-list">
          {publications.filter(pub => pub.type === 'conference').map(publication => (
            <div key={publication.id} className="publication-card">
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

        <h2>Technical Reports</h2>
        <div className="publications-list">
          {publications.filter(pub => pub.type === 'technical').map(publication => (
            <div key={publication.id} className="publication-card">
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
      </section>
    </div>
  );
};

export default PublicationsPage;
