import React from 'react';
import request from 'superagent';
import cookie from 'react-cookie';
import Homepage from './users/Homepage.jsx';
import Login from './users/Login.jsx';
import UserForm from './users/UserForm.jsx';
import MyAccountView from './users/MyAccountView.jsx';

const propTypes = {};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { trips: [], myAccount: false, };
    this.logIn = this.logIn.bind(this);
    this.signUp = this.signUp.bind(this);
    this.signOut = this.signOut.bind(this);
    this.sendTrip = this.sendTrip.bind(this);
    this.myAccount = this.myAccount.bind(this);
    this.myAccountStart = this.myAccountStart.bind(this);
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
  myAccount() {
  this.setState({
    MyAccountView: true,
  })
}
  myAccountStart() {
  this.setState({
    MyAccountView: false,
  })
}

  render() {
    let userDisplayElement;
    if (this.state.token) {
      userDisplayElement = (
        <div>
          <header className="clearfix" id="navigation">
          <logo>ITINERANT</logo>
           <nav>
            <h3 className="myAccount" onClick={this.myAccount}>My Account</h3>
            <h3 className="logout" onClick={this.signOut}>LogOut</h3>
           </nav>
          </header>
          {this.myAccountStart}
          {this.myAccount ? <MyAccountView myAccount = {this.state.myAccount}
                    trips = {this.state.trips}
                    sendTrip = {this.sendTrip } /> : <Homepage /> }
         <footer>
         </footer>
         </div>
      );
    } else {
      userDisplayElement = (
        <div>
        <header className="clearfix" id="navigation">
        <logo>ITINERANT</logo>
        <nav>
        <Login signUp={this.signUp} logIn={this.logIn} />

        </nav>
        </header>
        <Homepage myAccount = {this.state.myAccount}
        trips = {this.state.trips}
        sendTrip = {this.sendTrip}
         />
        <footer>
        </footer>
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
