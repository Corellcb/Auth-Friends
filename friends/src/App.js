import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import PrivateRoute from './components/PrivateRoute';
import Friends from './components/Friends';
import Login from './components/Login';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Friends</h1>
        <Switch>
          <PrivateRoute path="/protected" component={Friends} />
          {/* <PrivateRoute path="/dashboard" component={Dashboard} /> */}
          <Route path='/login' component={Login} />
          <Route component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App; // { username: 'Lambda School', password: 'i<3Lambd4' }
