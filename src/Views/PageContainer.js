import React from "react";
import { Switch, Route } from "react-router-dom";

import { Routes } from "../Routes";

function PageConatiner() {
  return (
    <div>
      <Switch>
        {Routes.map((route, index) => (
          <Route path={route.path} component={route.page} key={index} />
        ))}
      </Switch>
    </div>
  );
}

export default PageConatiner;
