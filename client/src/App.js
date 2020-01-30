import React, { useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import RequiredSignin from "./containers/Auth/RequiredSignin";
import Top from "./containers/Auth/Top";
import Signin from "./containers/Auth/Signin";
import Signup from "./containers/Auth/Signup";
import Dashboard from "./containers/Workspace/Dashboard";
import Profile from "./components/Account/Profile";
import Settings from "./components/Account/Settings";
import YourWorkspaces from "./containers/Account/YourWorkspaces";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { http } from "./config/axios";

library.add(fab, fas, far);

const App = () => {
  useEffect(() => {
    http.get("/csrf_token", { withCredentials: true });
  });

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Top} />
        <Route path="/signin" component={Signin} />
        <Route path="/signup" component={Signup} />
        <Route
          path="/:id/profile"
          render={() => <RequiredSignin WrappedComponent={Profile} />}
        />
        <Route
          path="/:id/workspaces"
          render={() => <RequiredSignin WrappedComponent={YourWorkspaces} />}
        />
        <Route
          path="/:id/settings"
          render={() => <RequiredSignin WrappedComponent={Settings} />}
        />
        <Route
          path="/:id"
          render={() => <RequiredSignin WrappedComponent={Dashboard} />}
        />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
