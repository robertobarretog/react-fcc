import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from '../Layout/Layout';
import Home from '../Home';
import DrumMachine from '../DrumMachine/DrumMachine';
import Calculator from '../Calculator/Calculator';
import PomodoroClock from '../Pomodoro/PomodoroClock';
import NotFound from '../common/NotFound';

const Routes = () => (
  <Layout>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/drum-machine" component={DrumMachine} />
      <Route path="/calculator" component={Calculator} />
      <Route path="/pomodoro" component={PomodoroClock} />
      <Route component={NotFound} />
    </Switch>
  </Layout>
);

export default Routes;
