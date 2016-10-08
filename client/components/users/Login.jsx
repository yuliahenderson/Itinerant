mport React, { Component } from 'react';
import LoginView from './LoginView.jsx';
import LoginViewModal from './LoginViewModal.jsx';

class Login extends Component {
 constructor(props) {
   super(props);
   this.state = {
     modalOpen: false,
   };
   this.openModal = this.openModal.bind(this);
   this.closeModal = this.closeModal.bind(this);
 }

 openModal() {
   this.setState({
     modalOpen: true,
   });
 }
 closeModal() {
   this.setState({
     modalOpen: false,
   });
 }

 render() {
   return (
     <div>
       <LoginView
         openModal={this.openModal}
       />
       { this.state.modalOpen ? <LoginViewModal closeModal={this.closeModal} /> : false }
     </div>
   );
 }
}

