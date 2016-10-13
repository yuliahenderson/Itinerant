import React from 'react'
import request from 'superagent';
import cookie from 'react-cookie';
import MyAccountView from './MyAccountView.jsx';
import Login from '../users/Login.jsx';

class FlightView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      heartButton: false,
      flights: [],
      logIn: false,
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
    console.log(this.props.departureAirport, this.props.arrivalAirport)
    request.post(`api/flights/${this.props.departureAirport}/${this.props.arrivalAirport}/${this.props.departureTime}`)
           .then((response) => {
             const flights = response.body;
             this.setState({ flights });
           })
           .catch(() => {
             this.setState ({
              logIn: true,
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
        {this.state.logIn ? }

      </div>
    )
  }
}
export default FlightView;
