import React from 'react';
import FlightApi from './FlightApi.jsx';

const propTypes = {
  travelFrom: React.PropTypes.string,
  moneyToSpend: React.PropTypes.currency,
  dateTo: React.PropTypes.string,
  dateBack: React.PropTypes.string,
  handleSearch: React.PropTypes.func,
};

const ResultsView = () => {
  return(
    <div className="searchResults">
      <p className="welcomeMessage"> The trips we found for you: </p>
      <FlightApi />
    </div>
  );
 }

 ResultsView.propTypes = propTypes;

export default ResultsView;
