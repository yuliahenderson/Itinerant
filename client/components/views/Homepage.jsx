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
      ResultsView: false,
    }
    this.handleHomePageView = this.handleHomePageView.bind(this);
    this.handleMyAccountView = this.handleMyAccountView.bind(this);
    this.handleResultsView = this.handleResultsView.bind(this);
  }
  handleHomePageView() {
    this.setState({
      HomePageView: true,
      MyAccountView: false,
      ResultsView: false,
    })
  }
 handleMyAccountView() {
  this.setState({
    HomePageView: false,
    MyAccountView: true,
    ResultsView: false,
  })
}
handleResultsView() {
  console.log(this.state.HomePageView)
  this.setState({
  HomePageView: false,
  MyAccountView: false,
  ResultsView: true,
  })
}
render() {
  return(
    <div>
      {this.state.HomePageView ?
        <HomePageView
          handleMyAccountView = {this.handleMyAccountView}
          handleResultsView = {this.handleResultsView}
        /> : false}
      {this.state.MyAccountView ?
        <MyAccountView
          handleHomePageView = {this.handleHomePageView}
          handleResultsView = {this.handleResultsView}
          trips = {this.state.trips}
          sendTrip = {this.sendTrip}
        /> : false}
      {this.state.ResultsView ?
        <ResultsView
          handleMyAccountView = {this.handleMyAccountView}
          handleHomePageView = {this.handleHomePageView}
        /> : false}
    </div>
  );
 }
}

Homepage.propTypes = propTypes;
export default Homepage;
