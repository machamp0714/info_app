import React from "react";
import { Redirect } from "react-router-dom";

const Dashboard = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  if (!user) {
    return <Redirect to="/signin" />;
  }

  return <div>Dashboard</div>;
};

export default Dashboard;
