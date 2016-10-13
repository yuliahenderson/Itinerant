import React from 'react';
import FlightSearch from './FlightsSearch.jsx';
import TripList from '../trips/TripList.jsx';
import TripForm from '../trips/TripForm.jsx';


class MyAccountView extends React.Component {
  render(){
  return(
    <div>
      <p className="welcomeMessage">My Saved Trips</p>
      <TripForm sendTrip={this.props.sendTrip} />
      <TripList trips={this.props.trips} />
    </div>
  );
 }
}

export default MyAccountView;
