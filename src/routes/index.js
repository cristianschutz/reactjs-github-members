import React from "react";
import { Route, Router, Switch } from "react-router-dom";
import Home from "../pages/Home/";
import history from "../services/history";

const Routes = () => (
  <Router history={history}>
    <Switch>
      <Route path="/" exact component={Home} />

      <Route
        path="/:page"
        exact
        isPrivate
        render={routeProps => <Home {...routeProps} />}
      />
    </Switch>
  </Router>
);

export default Routes;
