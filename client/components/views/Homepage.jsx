import React from 'react';
import { Link } from 'react-router';
import FlightSearch from './FlightsSearch.jsx';
import HomePageView from './HomePageView.jsx';
import MyAccountView from './MyAccountView.jsx';
import ResultsView from './ResultsView.jsx';

const propTypes = {
  children: React.PropTypes.element,
}

class Homepage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
      HomePageView: true,
      MyAccountView: false,
      FlightView: false,
      ResultsView: false,
    }
    this.handleHomePageView = this.handleHomePageView.bind(this);
    this.handleMyAccountView = this.handleMyAccountView.bind(this);
    this.handleFlightView = this.handleFlightView.bind(this);
    this.handleResultsView = this.handleResultsView.bind(this);
  }
  handleHomePageView() {
    this.setState({
      HomePageView: true,
      MyAccountView: false,
      FlightView: false,
      ResultsView: false,
    })
  }
 handleMyAccountView() {
   this.setState({
     HomePageView: false,
     MyAccountView: true,
     FlightView: false,
     ResultsView: false,
  })
}
 handleFlightView() {
   this.setState({
     FlightView: true,
     MyAccountView: false,
     HomePageView: false,
     ResultsView: false,
  })
 }
  handleResultsView() {
   this.setState({
     FlightView: false,
     MyAccountView: false,
     HomePageView: false,
     ResultsView: true,
  })
 }
render() {
  return(
    <div>
      {this.state.HomePageView ?
        <HomePageView
          handleMyAccountView = {this.handleMyAccountView} handleFlightView = {this.handleFlightView}
        /> : false}
      {this.state.MyAccountView ?
        <MyAccountView
          handleHomePageView = {this.handleHomePageView}
          trips = {this.state.trips}
          sendTrip = {this.sendTrip}
        /> : false}

    </div>
  );
 }
}

Homepage.propTypes = propTypes;
export default Homepage;
