import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import User from '../pages/User';
import NotFound from '../pages/NotFound';

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/users/:username" component={User} />
      <Route path="/notFound" component={NotFound} />
    </Switch>
  );
}

export default Routes;
