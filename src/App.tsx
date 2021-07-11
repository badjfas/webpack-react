import React from "react";
import { Switch, BrowserRouter, Route } from "react-router-dom";
import Home from "./pages/Home";
const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact={true} path="/" component={Home} />
      <Route exact={true} path="/a" component={Home} />
    </Switch>
  </BrowserRouter>
);
export default App;