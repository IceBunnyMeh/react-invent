import React from "react";
import "./styles.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import BaseContainer from "./Views/BaseContainer";
import Login from "./Login/Login";

export default function App() {
  return (
    <div className="App">
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/login" exact>
            <Login />
          </Route>
          <Route path="/">
            <BaseContainer />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
