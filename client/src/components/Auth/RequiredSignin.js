import React from "react";
import { Redirect } from "react-router-dom";

const RequiredSignin = ({ WrappedComponent }) => {
  const user = JSON.parse(localStorage.getItem("user"));
  if (!user) {
    return <Redirect to="/signin" />;
  }

  return <WrappedComponent />;
};

export default RequiredSignin;