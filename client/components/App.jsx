import React from 'react';
import request from 'superagent';
import cookie from 'react-cookie';
import Login from './users/Login.jsx';
import UserForm from './users/UserForm.jsx';
import Homepage from './views/Homepage.jsx';
import MyAccountView from './views/MyAccountView.jsx';

const propTypes = {};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      trips: [],
      myAccountView: false,
    };
    this.logIn = this.logIn.bind(this);
    this.signUp = this.signUp.bind(this);
    this.signOut = this.signOut.bind(this);
    this.sendTrip = this.sendTrip.bind(this);
    this.myAccount = this.myAccount.bind(this);
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
           this.setState({
             myAccountView: false,
           })
         });
  }
  signUp(userDetails) {
    request.post('/api/signup')
          .send(userDetails)
          .then(() => {
            this.updateAuth();
            this.getCurrentUserTrips();
            this.setState({
              myAccountView: false,
            })
          });
  }
  myAccount() {
    this.setState({
      myAccountView: true,
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
              <div className="login-link">
                <h3 className="myAccount" onClick={this.myAccount}>My Account</h3>
              </div>
              <div className="register-link">
                <button className="logout" onClick={this.signOut}>LogOut</button>
              </div>
            </nav>
          </header>
          {this.state.myAccountView ?
            <MyAccountView
                    myAccount = {this.state.myAccountView}
                    trips = {this.state.trips}
                    sendTrip = {this.sendTrip }
            /> : <Homepage /> }
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
        <Homepage
          myAccount = {this.state.myAccount}
          trips = {this.state.trips}
          sendTrip = {this.sendTrip}
         />
        <section id="about_us">
          <h1>WHY ITINERANT</h1>
          <p className="text_about">Lorem Ipsum is simply dummy text of
          the printing and typesetting industry. Lorem Ipsum has been the
          industry's standard dummy text ever since the 1500s, when an
          unknown printer took a galley of type and scrambled it to make
          a type specimen book.</p>
        </section>
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
