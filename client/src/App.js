import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Top from "./components/Dashboard/Top";
import Signin from "./components/Auth/Signin";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Top} />
        <Route path="/signin" component={Signin} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
