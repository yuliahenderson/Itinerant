import React, { Component } from 'react';
import RegisterView from '../views/RegisterView.jsx';
import LoginView from '../views/LoginView.jsx';
import LoginModal from '../views/LoginModal.jsx';

const propTypes = {
  logIn: React.PropTypes.func,
  signUp: React.PropTypes.func,
};

class Login extends Component {
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
     buttonText: 'logIn',
   });
 }

 render() {
   return (
     <div>
       <LoginView
         openModal={this.openModalLogin}
       />
       <RegisterView
         openModal={this.openModalSignup}
       />
       { this.state.modalOpen ?
         <LoginModal
            closeModal={this.closeModal}
            logIn={this.props.logIn}
            signUp={this.props.signUp}
            buttonText={this.state.buttonText}
          /> : false }
     </div>
   );
 }
}

Login.propTypes = propTypes;

export default Login;
