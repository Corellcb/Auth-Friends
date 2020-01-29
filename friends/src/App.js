//essentials
import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
//components
import Dashboard from "./components/dashboard";
import Signin from "./components/Signin";
import PrivateRoute from "./components/PrivateRoute";
import AddFriends from "./components/addFriends";

function App() {

  return (
    <Router>
      <div className="App">
        <nav className="nav">
          <div className="nav-links">
            <Link to="/signin">Sign In</Link>
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/addfriends">Add Friends</Link>
          </div>
        </nav>
        <Switch>
          <PrivateRoute path="/dashboard" component={Dashboard} />
          <PrivateRoute path="/addfriends" component={AddFriends} />
          <Route path="/login" component={Signin} />
          <Route component={Signin} />
        </Switch>
      </div>
    </Router>
  );
}

export default App; // { username: 'Lambda School', password: 'i<3Lambd4' }