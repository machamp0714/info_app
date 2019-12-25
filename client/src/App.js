import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Signup from "./containers/Auth/Signup";
import Signin from "./components/Auth/Signin";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";

library.add(fab, fas, far);

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Signup} />
        <Route path="/signin" component={Signin} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
