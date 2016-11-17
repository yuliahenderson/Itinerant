import React from 'react';
import request from 'superagent';
import cookie from 'react-cookie';
import Login from './users/Login.jsx';
import Homepage from './Homepage.jsx';
import MyAccount from './users/MyAccount.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      flights: [],
      myAccountView: false,
    };
    this.updateAuth = this.updateAuth.bind(this);
    this.logIn = this.logIn.bind(this);
    this.signUp = this.signUp.bind(this);
    this.signOut = this.signOut.bind(this);
    this.myAccount = this.myAccount.bind(this);
  }
  componentDidMount() {
    this.updateAuth();
    if (cookie.load('token')) {
      this.getCurrentUserFlights();
    }
  }
  updateAuth() {
    this.setState({
      token: cookie.load('token'),
    });
  }
  // getCurrentUserFlights() {
  //   request.get('/api/flights')
  //          .then((response) => {
  //            const flights = response.body;
  //            this.setState({ flights });
  //            console.log(response)
  //          })
  //          .catch(() => {
  //            this.updateAuth();
  //          });
  // }
  logIn(userDetails) {
    request.post('/api/login')
          .send(userDetails)
         .then(() => {
           this.updateAuth();
           this.getCurrentUserFlights();
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
  signOut() {
    request.post('/api/signout')
           .then(() => this.updateAuth());
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
            <MyAccount
                    myAccount = {this.state.myAccountView}
                    flights = {this.state.flights}
                    updateAuth={this.updateAuth}
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
          signUp={this.signUp}
          logIn={this.logIn}
         />
        <section id="about_us">
          <h1>WHY ITINERANT</h1>
          <p className="text_about"> Plan a spontaneous vacation! Destination? Unknown! Simply tell us where you are and how much you've got to spend,
          and we will tell you where you can go based on your budget. </p>
        </section>
        <footer>
        </footer>
        </div>
      );
    }
    return (
      <div>
        {userDisplayElement}
        {console.log(this.state.flights)}
      </div>
    );
  }
}

export default App;
