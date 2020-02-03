import React from "react";
import { Switch, Route, Link } from "react-router-dom";

import AboutPage from "../Pages/About/AboutPage";
import HomePage from "../Pages/Home/HomePage";
import { Routes } from "../Routes";

function PageConatiner() {
  return (
    <div>
      <Switch>
        {Routes.map((route, index) => (
          <Route path={route.path} component={route.page} key={index} />
        ))}
        {/* <Route path="/about" component={AboutPage} /> */}
        {/* <Route path="/" component={HomePage} /> */}
      </Switch>
    </div>
  );
}

export default PageConatiner;
