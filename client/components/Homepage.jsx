import React from 'react';
import { Link } from 'react-router';
import MyAccount from './users/MyAccount.jsx';
import FlightSearch from './flights/FlightSearch.jsx';

const propTypes = {
  children: React.PropTypes.element,
  signUp:  React.PropTypes.func,
  logIn: React.PropTypes.func,
  flights: React.PropTypes.array,
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
        <FlightSearch
          signUp={this.props.signUp}
          logIn={this.props.logIn}
        /> : false}
      {this.state.MyAccountView ?
        <MyAccount
          handleHomePageView = {this.handleHomePageView}
          updateAuth = {this.props.updateAuth}
          flights = {this.props.flights}
        /> : false}
    </div>
  );
 }
}

Homepage.propTypes = propTypes;

export default Homepage;
