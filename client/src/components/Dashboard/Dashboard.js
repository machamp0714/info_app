import React, { useEffect, useState } from "react";
import SignedinNavbar from "../Layout/SignedinNavbar";
import Sidebar from "./Sidebar";
import AddWorkspace from "./AddWorkspace";
import ProgressBar from "../Layout/ProgressBar";

const Dashboard = ({ workspaces, isLoading, getWorkspaces }) => {
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    const headers = {
      "access-token": localStorage.getItem("access-token"),
      client: localStorage.getItem("client"),
      uid: localStorage.getItem("uid")
    };
    getWorkspaces(headers);
  }, [getWorkspaces]);

  return (
    <div>
      <SignedinNavbar
        open={open}
        handleDrawerOpen={handleDrawerOpen}
        workspaces={workspaces}
        isLoading={isLoading}
      />
      <Sidebar open={open} handleDrawerClose={handleDrawerClose} />
      {isLoading ? <ProgressBar /> : <AddWorkspace />}
    </div>
  );
};

export default Dashboard;
