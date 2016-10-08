import React from 'react';
import request from 'superagent';
import cookie from 'react-cookie';
import UserForm from './users/UserForm.jsx';
import TripList from './trips/TripList.jsx';
import TripForm from './trips/TripForm.jsx';

const propTypes = {};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { trips: [] };
    this.logIn = this.logIn.bind(this);
    this.signUp = this.signUp.bind(this);
    this.signOut = this.signOut.bind(this);
    this.sendTrip = this.sendTrip.bind(this);
  }
  componentDidMount() {
    this.updateAuth();
    if (cookie.load('token')) {
      this.getCurrentUserTrips();
    }
  }
  getCurrentUserTrips() {
    request.get('/api/trips')
           .then((response) => {
             const trips = response.body;
             this.setState({ trips });
           })
           .catch(() => {
             this.updateAuth();
           });
  }
  sendTrip({ body }) {
    request.post('/api/trips')
           .send({ body })
           .then(() => {
             this.getCurrentUserTrips();
           });
  }
  signOut() {
    request.post('/api/signout')
           .then(() => this.updateAuth());
  }
  updateAuth() {
    this.setState({
      token: cookie.load('token'),
    });
  }
  logIn(userDetails) {
    request.post('/api/login')
          .send(userDetails)
         .then(() => {
           this.updateAuth();
           this.getCurrentUserTrips();
         });
  }
  signUp(userDetails) {
    request.post('/api/signup')
          .send(userDetails)
          .then(() => {
            this.updateAuth();
            this.getCurrentUserTrips();
          });
  }
  render() {
    let userDisplayElement;
    if (this.state.token) {
      userDisplayElement = (
        <div>
          <button onClick={this.signOut} >Log-Out!</button>
          <TripForm sendTrip={this.sendTrip} />
          <TripList trips={this.state.trips} />
        </div>
      );
    } else {
      userDisplayElement = (
        <div>
          <UserForm handleSubmit={this.signUp} buttonText="Sign-Up" />
          <UserForm handleSubmit={this.logIn} buttonText="Log-In" />
        </div>
      );
    }
    return (
      <div>
        {userDisplayElement}
      </div>
    );
  }
}

App.propTypes = propTypes;

export default App;
