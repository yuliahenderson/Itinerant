import React from 'react';

const propTypes = {
 openModal: React.PropTypes.func,
};

class LoginView extends React.Component {
  render() {
   return (
     <div className="login-link">
       <h3 onClick={this.props.openModal} className="login">Login</h3>
     </div>
   );
 }
};

LoginView.propTypes = propTypes;

export default LoginView;
