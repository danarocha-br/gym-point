import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import Dashboard from '~/pages/Dashboard';
import Login from '~/pages/Login';
import Profile from '~/pages/Profile';

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Login} />
      <Route path="/dashboard" component={Dashboard} isPrivate />
      <Route path="/profile" component={Profile} isPrivate />
      <Route path="/" component={() => <h1>404</h1>} />
    </Switch>
  );
}

export default Routes;
