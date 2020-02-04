import React from "react";
import "./styles.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import BaseContainer from "./Views/BaseContainer";
import Login from "./Login/Login";

export default function App() {
  return (
    <div className="App">
      <Router>
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
