import React, { useEffect, useState } from "react";
import SignedinNavbar from "../Layout/SignedinNavbar";
import Sidebar from "./Sidebar";
import AddWorkspace from "./AddWorkspace";
import AddColumn from "../Column/AddColumn";
import ProgressBar from "../Layout/ProgressBar";

const Dashboard = ({ workspaces, isLoading, user, getWorkspaces }) => {
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    getWorkspaces();
  }, [getWorkspaces]);

  return (
    <div>
      <SignedinNavbar
        open={open}
        handleDrawerOpen={handleDrawerOpen}
        workspaces={workspaces}
        isLoading={isLoading}
        user={user}
      />
      <Sidebar open={open} handleDrawerClose={handleDrawerClose} />
      {isLoading ? <ProgressBar /> : <AddWorkspace />}
      <AddColumn />
    </div>
  );
};

export default Dashboard;
