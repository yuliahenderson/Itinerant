import React from 'react';
import LoginViewModal from './LoginViewModal.jsx';

const propTypes = {
 openModal: React.PropTypes.func,
};

class LoginView extends React.Component {
  render() {
   return (
     <div>
       <button onClick={this.props.openModal} className="login floatRight">Login</button>
     </div>
   );
 }
};

LoginView.propTypes = propTypes;

export default LoginView;
