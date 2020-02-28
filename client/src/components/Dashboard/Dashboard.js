import React, { useEffect, useState } from "react";
import SignedinNavbar from "../Layout/SignedinNavbar";
import Sidebar from "../Drawer/Sidebar";
import AddWorkspace from "./AddWorkspace";
import WorkspaceColumns from "../../containers/Column/WorkspaceColumns";
import ProgressBar from "../Layout/ProgressBar";
import DashboardContext from "../../contexts/DashboardContext";

const Dashboard = ({ workspaces, isLoading, user, getWorkspaces }) => {
  const [open, setOpen] = useState(false);
  const [drawerTask, setDrawerTask] = useState(null);
  const [clickedWorkspace, setClickedWorkspace] = useState(false);
  const [workspace, setWorkspace] = useState(null);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
    if (clickedWorkspace) {
      setClickedWorkspace(false);
    }
    if (drawerTask !== null) {
      setDrawerTask(null);
    }
  };

  const handleSelectWorkspace = e => {
    setWorkspace(e.target.value);
  };

  const handleWorkspaceClick = () => {
    setOpen(true);
    setClickedWorkspace(true);
  };

  const handleWorkspaceBack = () => {
    setClickedWorkspace(false);
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
    drawerTask,
    clickedWorkspace,
    handleDrawerOpen,
    handleDrawerClose,
    handleSelectWorkspace,
    handleWorkspaceClick,
    handleWorkspaceBack,
    setDrawerTask,
    setOpen
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
