import React from "react";
import { Switch, 
  Route, 
  Link,
  useHistory } from "react-router-dom";

import AboutPage from "../Pages/About/AboutPage";
import HomePage from "../Pages/Home/HomePage";

function PageConatiner() {
  let history = useHistory();

  function handleClick() {
    history.push("/login");
  }

  return (
    <div>
      Page Container
      <button onClick={handleClick}>LOGIN</button>
      <nav>
        <ul>
          <li>
            <Link to="/">Home Page</Link>
          </li>
          <li>
            <Link to="/about">About Page</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route path="/about">
          <AboutPage />
        </Route>
        <Route path="/" component={HomePage} />
      </Switch>
    </div>
  );
}

export default PageConatiner;
