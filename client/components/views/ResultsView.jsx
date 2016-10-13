import React from 'react';
import FlightSearch from './FlightsSearch.jsx';
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
    <div>
      <p> Hi, you are viewing your results page! </p>
      <FlightApi />
    </div>
  );
 }

 ResultsView.propTypes = propTypes;

export default ResultsView;
