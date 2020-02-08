import React, { useEffect, useState } from "react";
import SignedinNavbar from "../Layout/SignedinNavbar";
import Sidebar from "./Sidebar";
import AddWorkspace from "./AddWorkspace";
import WorkspaceColumns from "../../containers/Column/WorkspaceColumns";
import ProgressBar from "../Layout/ProgressBar";
import DashboardContext from "../../contexts/DashboardContext";

const Dashboard = ({ workspaces, isLoading, user, getWorkspaces }) => {
  const [open, setOpen] = useState(false);
  const [workspace, setWorkspace] = useState(null);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleSelectWorkspace = e => {
    setWorkspace(e.target.value);
  };

  useEffect(() => {
    getWorkspaces();
  }, [getWorkspaces]);

  useEffect(() => {
    if (workspaces.length > 0) {
      setWorkspace(workspaces[0]);
    }
  }, [workspaces]);

  const value = {
    open,
    workspaces,
    workspace,
    isLoading,
    user,
    handleDrawerOpen,
    handleDrawerClose,
    handleSelectWorkspace
  };

  return (
    <DashboardContext.Provider value={value}>
      <div id="dashboard">
        <SignedinNavbar />
        <Sidebar open={open} handleDrawerClose={handleDrawerClose} />
        {isLoading ? (
          <div className="center-content">
            <ProgressBar disableShrink />
          </div>
        ) : (
          [
            workspaces.length === 0 ? (
              <AddWorkspace />
            ) : (
              [workspace !== null && <WorkspaceColumns key={workspace.id} />]
            )
          ]
        )}
      </div>
    </DashboardContext.Provider>
  );
};

export default Dashboard;
