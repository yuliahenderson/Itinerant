import React from 'react'
import request from 'superagent';
import cookie from 'react-cookie';
import MyAccountView from './MyAccountView.jsx';
import FlightLogin from '../users/FlightLogin.jsx';

class FlightView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      heartButton: false,
      flights: [],
      logInChecker: false,
    }
    this.handleClick = this.handleClick.bind(this);
    this.saveCurrentUserFlights = this.saveCurrentUserFlights.bind(this);
    this.updateAuth = this.updateAuth.bind(this);
    }

  componentDidMount() {

  }
  handleClick() {
    this.setState ({
       heartButton: true,
    })
  }
  saveCurrentUserFlights() {
    this.handleClick();

    request.post(`api/flights/${this.props.departureAirport}/${this.props.arrivalAirport}/${this.props.dateTo}`)
           .then((response) => {
             const flights = response.body;
             this.setState({ flights });
           })
           .catch(() => {
             this.setState ({
              logInChecker: true,
             })
             this.updateAuth();
           });
  }
  updateAuth() {
    this.setState({
      token: cookie.load('token'),
    });
  }

           //  {this.state.heartButton ? <MyAccountView
           // departureAirport = {this.props.departureAirport}
           // arrivalAirport = {this.props.arrivalAirport}
           // departureTime = {this.props.departureTime}
           // legId = {this.props.legId}
           //  /> : false }
  render() {
    return(
      <div>
      <div id="flightDetails" className="clearfix">
        <p className="airlineName"><a href={this.props.detailsURL} target="_blank">{this.props.airlineName}</a> </p>
        <p className="ticketPrice"> {this.props.totalFare} </p>
        <p className="tripDate"> {this.props.departureTime} - {this.props.arrivalTime} </p>
        <p className="destination"> {this.props.departureLocation} - {this.props.arrivalLocation} </p>
      </div>
         {this.state.heartButton ? <img className="heartButton" src="stylesheets/heart2.png" /> :
        <img className="heartButton" src="stylesheets/heart.png" onClick={this.saveCurrentUserFlights} /> }
        {this.state.logInChecker ? <FlightLogin login={this.logIn} signUp={this.signUp} /> : false }

      </div>
    )
  }
}
export default FlightView;
