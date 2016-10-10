import React from 'react';
// import { Link } from 'react-router';

const propTypes = {
  children: React.PropTypes.element.isRequired,
}
class Homepage extends React.Component {
 constructor() {
  super();
  this.state = {
    loggedIn: false,
  }
 }
 loggedInLinks() {
   if(!this.state.loggedIn) {
    return (
      <div className="login-register">
        <Link to="/login" id="login">Login | </Link>
        <Link to="/register" id="register">Register</Link>
      </div>
    );
   } else {
    return (
      <div className="sign-out">
        <Link to="/" onClick={this.signOut}>Sign Out</Link>
      </div>
    );
  }
 }
 render() {
  return(
    <div>
      <div id="nav">
      <logo>ITINERANT</logo>
      {
       this.loggedInLinks()
      }
      </div>
      <div id="main">
       {this.props.children}
      </div>
    </div>
  );
 }
}


Homepage.propTypes = propTypes;
export default Homepage;
