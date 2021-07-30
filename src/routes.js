import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import Error from "./pages/404";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="*" component={Error} />
      </Switch>
    </BrowserRouter>
  );
}
