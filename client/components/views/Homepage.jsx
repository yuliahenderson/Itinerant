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
    }
    this.handleHomePageView = this.handleHomePageView.bind(this);
    this.handleMyAccountView = this.handleMyAccountView.bind(this);
  }
  handleHomePageView() {
    this.setState({
      HomePageView: true,
      MyAccountView: false,
    })
  }
 handleMyAccountView() {
  this.setState({
    HomePageView: false,
    MyAccountView: true,
  })
}
render() {
  return(
    <div>
      {this.state.HomePageView ?
        <HomePageView
          handleMyAccountView = {this.handleMyAccountView}
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
