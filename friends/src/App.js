import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import Login from './components/Login';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Friends</h1>
        <Switch>
          <Route path='/login' />
          <Route component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App; // { username: 'Lambda School', password: 'i<3Lambd4' }
