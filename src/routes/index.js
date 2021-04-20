import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import User from '../pages/User';

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/users/:username" component={User} />
    </Switch>
  );
}

export default Routes;
