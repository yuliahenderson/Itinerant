import React from 'react'
import request from 'superagent';
import cookie from 'react-cookie';
import MyAccount from '../users/MyAccount.jsx';
import FlightLogin from '../users/FlightLogin.jsx';

class FlightView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      heartButton: false,
      logInChecker: false,
      returnFlight: false,
      dateto: '',
      dateBack: '',
      token: '',
    }
    this.handleClick = this.handleClick.bind(this);
    this.loginCheck = this.loginCheck.bind(this);
    this.saveCurrentUserFlights = this.saveCurrentUserFlights.bind(this);
    this.updateAuth = this.updateAuth.bind(this);
    this.returnTrip = this.returnTrip.bind(this);
  }
  componentDidMount() {
    this.setState({
        returnFlight: this.props.returnFlight,
        dateto: this.props.dateto,
        dateBack: this.props.dateBack
    })
  }
  handleClick() {
    this.setState ({
       heartButton: true,
    })
  }
  loginCheck() {
    this.setState({ logInChecker: false });
    if (this.state.token == '') {
      this.setState({ heartButton: false });
    }
  }
  saveCurrentUserFlights() {
    this.handleClick();
    request.post(`api/flights/${this.props.departureAirport}/${this.props.arrivalAirport}/${this.state.dateto}`)
           .then((response) => {
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
  returnTrip() {
    this.setState({returnFlight: this.props.returnFlight})
    this.props.httpGetReturnFlights(this.state.dateBack, this.props.arrivalAirport, this.props.departureAirport)
  }
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
      {this.state.logInChecker ? <FlightLogin logIn={this.props.logIn} signUp={this.props.signUp} loginCheck={this.loginCheck} /> : false }
      {this.state.returnFlight ? false : <button className="btnReturnTrip" onClick={this.returnTrip}> Return Trip </button>}

      </div>
    )
  }
}
export default FlightView;
