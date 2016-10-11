import React from 'react';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import Homepage from '../client/components/users/Homepage.jsx';


const Routes = () => {
  return(
    <Router history={hashHistory}>
      <Route path="/" component={Homepage} />
    </Router>
  );
};

export default Routes;
