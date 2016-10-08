import React from 'react';
import cookie from 'react-cookie';
import request from 'superagent';

class Dashboard extends React.Component {
  constructor(){
    super();
    this.state = { loggedIn : true };
    this.signOut = this.signOut.bind(this);
  }

  signOut() {
    request.post('/api/signout')
           .then(() => {
             this.updateAuth();
             this.setState({ loggedIn: false });
           });
  }
  render() {
    return (
      <div>
       <p>hello from dashboard</p>
      </div>
      )
  }
}

export default Dashboard;
