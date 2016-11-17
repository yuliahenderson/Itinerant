import React from 'react';

const propTypes = {
 openModal: React.PropTypes.func,
};

class RegisterView extends React.Component {
  render() {
   return (
     <div className="register-link">
       <button className="register" onClick={this.props.openModal} >
        Register
      </button>
     </div>
   );
 }
};

RegisterView.propTypes = propTypes;

export default RegisterView;
