import React, { useEffect, useRef } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import RequiredSignin from "./containers/Auth/RequiredSignin";
import Top from "./containers/Auth/Top";
import Signin from "./containers/Auth/Signin";
import Signup from "./containers/Auth/Signup";
import Dashboard from "./containers/Workspace/Dashboard";
import Profile from "./components/Account/Profile";
import Settings from "./containers/Account/Settings";
import YourWorkspaces from "./containers/Account/YourWorkspaces";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { checkAsync } from "./actions/stockActions";
import { connect } from "react-redux";
import { http } from "./config/axios";

library.add(fab, fas, far);

const App = ({ isAsync, checkAsync }) => {
  console.log(isAsync);
  const intervalRef = useRef();

  useEffect(() => {
    http.get("/csrf_token", { withCredentials: true });

    let jobId;
    document.cookie.split(";").forEach(name => {
      if (name.indexOf("job_id") !== -1) {
        jobId = parseInt(name.split("=")[1], 10);
      }
    });

    if (jobId !== undefined) {
      intervalRef.current = setInterval(() => {
        checkAsync(jobId);
      }, 1000);
    }

    return () => {
      clearInterval(intervalRef.current);
    };
  });

  if (isAsync === "success") {
    clearInterval(intervalRef.current);

    document.cookie = "job_id=; domain=localhost; path=/; max-age=0";
  }

  if (isAsync === "failed") {
    clearInterval(intervalRef.current);

    document.cookie = "job_id=; domain=localhost; path=/; max-age=0";
  }

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

const mapStateToProps = state => ({
  isAsync: state.stock.isAsync
});

const mapDispatchToProps = dispatch => ({
  checkAsync: jobId => dispatch(checkAsync(jobId))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
