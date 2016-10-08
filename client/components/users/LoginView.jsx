
import React from 'react';

const propTypes = {
 openModal: React.PropTypes.func.isRequired,
};

const LoginView = ({ openModal }) => {
 return (
   <div>
     <button onClick={openModal} className="login">Tell Us About Your Experience</button>
   </div>
 );
};

LoginView.propTypes = propTypes;

export default LoginView;


