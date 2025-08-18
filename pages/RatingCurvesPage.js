import React from 'react';
import './DataAnalysis.css';

const RatingCurvesPage = () => {
  return (
    <div className="data-analysis">
      <h1>Rating Curves Analysis</h1>
      <img src="https://source.unsplash.com/random/800x600/?rating-curves" alt="Rating Curves" />
      <p>
        This page presents data analysis approaches using rating curves, which are essential in hydrological and environmental studies for assessing flow characteristics.
      </p>
    </div>
  );
};

export default RatingCurvesPage;
