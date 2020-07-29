import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import './media.css';

import Routes from './components/Routing/Routes';

const App = () => (
  <Router>
    <Routes />
  </Router>
);

export default App;
