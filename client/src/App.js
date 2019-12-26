import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import RedirectDashboard from "./components/Auth/RedirectDashboard";
import Top from "./containers/Auth/Top";
import Signin from "./containers/Auth/Signin";
import Signup from "./containers/Auth/Signup";
import Dashboard from "./components/Dashboard/Dashboard";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";

library.add(fab, fas, far);

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route
          exact
          path="/"
          render={() => <RedirectDashboard WrappedComponent={Top} />}
        />
        <Route
          path="/signin"
          render={() => <RedirectDashboard WrappedComponent={Signin} />}
        />
        <Route
          path="/signup"
          render={() => <RedirectDashboard WrappedComponent={Signup} />}
        />
        <Route path="/:id" component={Dashboard} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
