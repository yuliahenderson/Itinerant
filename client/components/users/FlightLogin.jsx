import React, { Component } from 'react';
import RegisterView from '../views/RegisterView.jsx';
import LoginView from '../views/LoginView.jsx';
import LoginModal from '../views/LoginModal.jsx';

const propTypes = {
  logIn: React.PropTypes.func.isRequired,
  signUp: React.PropTypes.func.isRequired,
  loginCheck: React.PropTypes.func,
};

class FlightLogin extends Component {
  constructor(props) {
   super(props);
   this.state = {
     modalOpen: false,
     buttonText: '',
   };
   this.openModalLogin = this.openModalLogin.bind(this);
   this.openModalSignup = this.openModalSignup.bind(this);
   this.closeModal = this.closeModal.bind(this);
  }
  openModalLogin() {
   this.setState({
     modalOpen: true,
     buttonText: 'login',
   });
 }
 openModalSignup() {
   this.setState({
     modalOpen: true,
     buttonText: 'signUp',
   });
 }
 closeModal() {
   this.setState({
     modalOpen: false,
     buttonText: 'login',
   });
   this.props.loginCheck();
 }

 render() {
   return (
     <div>
       <div id="login-modal">
         <div id="show-login">
           {this.state.modalOpen ?
              <LoginModal
                closeModal={this.closeModal}
                logIn={this.props.logIn}
                signUp={this.props.signUp}
                buttonText={this.state.buttonText}
            /> : false }
            <div id="flightLogin">
              <LoginView openModal={this.openModalLogin}  />
              <RegisterView openModal={this.openModalSignup} />
            </div>
          </div>
        </div>
     </div>
   );
  }
}

FlightLogin.propTypes = propTypes;

export default FlightLogin;
