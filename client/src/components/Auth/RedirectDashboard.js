import React from "react";
import { Redirect } from "react-router-dom";

const RedirectDashboard = ({ WrappedComponent }) => {
  const user = JSON.parse(localStorage.getItem("user"));
  if (user) {
    return <Redirect to={"/" + user.name} />;
  }

  return <WrappedComponent />;
};

export default RedirectDashboard;
