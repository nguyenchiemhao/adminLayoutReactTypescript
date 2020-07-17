import React from "react";
import { Route, Switch } from "react-router-dom";
import Login from "../login/Login";

export default function GeneralRouter() {
  return (
    <Switch>
      <Route path='/login'>
        <Login />
      </Route>
      <Route path='/' exact>
        <div>homepage</div>
      </Route>
    </Switch>
  );
}
