import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from '../Layout/Layout';
import Home from '../Home';
import DrumMachine from '../DrumMachine/DrumMachine';
import NotFound from '../common/NotFound';

const Routes = () => (
  <Layout>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/drum-machine" component={DrumMachine} />
      <Route component={NotFound} />
    </Switch>
  </Layout>
);

export default Routes;
