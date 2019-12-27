import React from "react";
import { Redirect } from "react-router-dom";

const LocalStorage = ({ headers, user }) => {
  localStorage.setItem("access-token", headers["access-token"]);
  localStorage.setItem("client", headers["client"]);
  localStorage.setItem("uid", headers["uid"]);
  localStorage.setItem("user", JSON.stringify(user));

  return <Redirect to={"/" + user.name} />;
};

export default LocalStorage;
