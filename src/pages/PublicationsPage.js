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
      pages: "116926"
    },
    {
      id: 2,
      type: 'journal',
      title: "Constant carbon dosing of a pilot-scale denitrifying bioreactor to improve nitrate removal from agricultural tile drainage",
      authors: "Moghaddam, R., et al.",
      journal: "Ecological Engineering",
      year: 2023,
      volume: "187",
      pages: "106851"
    },
    {
      id: 3,
      type: 'journal',
      title: "Enhanced nitrate removal and side effects of methanol dosing in denitrifying bioreactors",
      authors: "Moghaddam, R., et al.",
      journal: "Ecological Engineering",
      year: 2022,
      volume: "185",
      pages: "106818"
    },
    {
      id: 6,
      type: 'conference',
      title: "Carbon dosing enhances nitrate removal effectiveness in denitrifying bioreactors: A field trial in New Zealand",
      authors: "Moghaddam, R., et al.",
      conference: "Diverse Solutions for Efficient Land, Water and Nutrient Use Conference",
      location: "Massey University, NZ",
      year: 2022
    },
    {
      id: 8,
      type: 'technical',
      title: "Kaiate Stream: assessment of changes in faecal contaminants and turbidity after the implementation of mitigation measures",
      authors: "Hughes, A., Moghaddam, R.",
      publisher: "NIWA Client Report",
      year: 2024,
      reportNumber: "2024008HN"
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
                {publication.publisher}, {publication.reportNumber}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default PublicationsPage;
