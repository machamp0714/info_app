import React, { useEffect, useState } from "react";
import SignedinNavbar from "../Layout/SignedinNavbar";
import Sidebar from "./Sidebar";
import AddWorkspace from "./AddWorkspace";

const Dashboard = ({ workspaces, isLoading, getWorkspaces }) => {
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

  if (isLoading) {
    return <div>isLoading</div>;
  }
  return (
    <div>
      <SignedinNavbar
        open={open}
        handleDrawerOpen={handleDrawerOpen}
        workspaces={workspaces}
      />
      <Sidebar open={open} handleDrawerClose={handleDrawerClose} />
      <AddWorkspace />
    </div>
  );
};

export default Dashboard;
