import React from 'react';
import FlightSearch from './FlightsSearch.jsx';
import FlightApi from './FlightApi.jsx';


const ResultsView = () => {
  return(
    <div>
      <p> Hi, you are viewing your results page! </p>
      <FlightApi />
    </div>
  );
 }

export default ResultsView;
