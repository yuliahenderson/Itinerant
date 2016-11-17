import React from 'react';
import request from 'superagent';
import cookie from 'react-cookie';
import SavedFlights from './SavedFlights.jsx';

class MyAccount extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      flights: [],
    }
  }
  componentDidMount() {
  if (cookie.load('token')) {
    this.getCurrentUserFlights();
  }
}
  getCurrentUserFlights() {
    request.get('/api/flights')
           .then((response) => {
             console.log('response ', response);
             const flights = response.body;
             this.setState({ flights });
           })
           .catch(() => {
             console.log('error')
           });
  }
  render(){
    return(
      <div>
        <p className="welcomeMessage">My Saved Flights</p>
        <SavedFlights flights={this.state.flights} updateAuth={this.props.updateAuth} />
      </div>
    )
  }
 }

export default MyAccount;
