import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { HomeScreen, DetailsScreen } from "./screens";

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route exact component={HomeScreen} path="/" />
      <Route exact component={DetailsScreen} path="/:productId" />
      <Redirect to="/" />
    </Switch>
  );
};

export default Routes;
