import React from 'react';
import FlightSearch from './FlightsSearch.jsx';

class HomePageView extends React.Component {
  render() {
  return(
    <div>
      <div id="main">
       <FlightSearch  handleResultsView = {this.props.handleResultsView} />
      </div>
    </div>
  );
 }
}

export default HomePageView;
