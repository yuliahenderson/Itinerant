import UserForm from '../UserForm.jsx';

const propTypes = {
 closeModal: React.PropTypes.func
};

const LoginViewModal = ({ closeModal }) => {

 return (
  <div>
   <div id="login-modal">
     <div id="show-login">
       <UserForm closeModal={closeModal}/>
     </div>
    </div>
   </div>
 );
};

LoginViewModal.propTypes = propTypes;

export default LoginViewModal;
