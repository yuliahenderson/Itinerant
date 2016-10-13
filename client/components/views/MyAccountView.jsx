import React from 'react';
import FlightSearch from './FlightsSearch.jsx';
import TripList from '../trips/TripList.jsx';
import TripForm from '../trips/TripForm.jsx';
import request from 'superagent';


class MyAccountView extends React.Component {

  componentDidMount() {
    request.get(`api/flights/${this.props.departureAirport}/${this.props.arrivalAirport}/${this.props.departureTime}`)
  }
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
