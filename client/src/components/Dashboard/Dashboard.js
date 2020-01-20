import React, { useEffect, useState } from "react";
import SignedinNavbar from "../Layout/SignedinNavbar";
import Sidebar from "./Sidebar";
import AddWorkspace from "./AddWorkspace";
import WorkspaceColumns from "../../containers/Column/WorkspaceColumns";
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
      {isLoading ? (
        <ProgressBar />
      ) : (
        [
          workspaces.length === 0 ? (
            <AddWorkspace />
          ) : (
            <WorkspaceColumns
              workspace={workspaces[0]}
              key={workspaces[0].id}
            />
          )
        ]
      )}
    </div>
  );
};

export default Dashboard;
