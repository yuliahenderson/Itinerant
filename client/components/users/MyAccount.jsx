import React from 'react';
import request from 'superagent';
import cookie from 'react-cookie';
import SavedFlights from './SavedFlights.jsx';

class MyAccount extends React.Component {
  render(){
    return(
      <div>
        <p className="welcomeMessage">My Saved Flights</p>
        <SavedFlights updateAuth={this.props.updateAuth} flights={this.props.flights} />
      </div>
    )
  }
 }

export default MyAccount;
