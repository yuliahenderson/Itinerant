import React from 'react';
import FlightSearch from './FlightsSearch.jsx';
import FlightApi from './FlightApi.jsx';


const ResultsView = () => {
  return(
    <div className="searchResults">
      <p className="welcomeMessage"> The trips we found for you: </p>
      <FlightApi />
    </div>
  );
 }

export default ResultsView;
