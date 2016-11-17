import React from 'react';

const propTypes = {
  logIn: React.PropTypes.func,
  signUp: React.PropTypes.func,
  buttonText: React.PropTypes.string,
  closeModal: React.PropTypes.func,
};
class UserForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: '', password: '' };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleInputChange(e) {
    const target = e.target;
    const name = target.getAttribute('name');
    const value = target.value;
    const updated = {};
    updated[name] = value;
    this.setState(updated);
  }
  handleSubmit(e) {
    e.preventDefault();
    if (this.props.buttonText=="signUp") {
      this.props.signUp(this.state);
    } else {
      this.props.logIn(this.state);
    }
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
        <h2 id="close" onClick={this.props.closeModal}>x</h2>
          <input
            className="email_password"
            type="text"
            name="email"
            value={this.state.email}
            placeholder="email"
            onChange={this.handleInputChange}
          />
          <input
            className="email_password"
            type="password"
            name="password"
            value={this.state.password}
            placeholder="password"
            onChange={this.handleInputChange}
          /><br />
          <input id="submit_button" type="submit" value="SUBMIT" />
        </form>
      </div>
    );
  }
}

UserForm.propTypes = propTypes;

export default UserForm;
