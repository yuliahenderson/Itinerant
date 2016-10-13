import React from 'react';
import FlightSearch from './FlightsSearch.jsx';

class HomePageView extends React.Component {
  render() {
  return(
    <div>
      <div>
       <FlightSearch handleResultsView = {this.props.handleResultsView} />
      </div>
    </div>
  );
 }
}

export default HomePageView;
