import React, { useEffect, useState } from "react";
import SignedinNavbar from "../Layout/SignedinNavbar";
import Sidebar from "./Sidebar";
import AddWorkspace from "./AddWorkspace";
import WorkspaceColumns from "../../containers/Column/WorkspaceColumns";
import ProgressBar from "../Layout/ProgressBar";

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

  // useEffect(() => {
  //   const getDefaultWorkspace = async () => {
  //     const result = await http.get("/api/default_workspace");
  //     setWorkspace(result.data);
  //   };

  //   getDefaultWorkspace();
  // }, [workspaces]);

  useEffect(() => {
    if (workspaces.length > 0) {
      setWorkspace(workspaces[0]);
    }
  }, [workspaces]);

  return (
    <div id="dashboard">
      <SignedinNavbar
        open={open}
        handleDrawerOpen={handleDrawerOpen}
        workspaces={workspaces}
        workspace={workspace}
        handleSelectWorkspace={handleSelectWorkspace}
        isLoading={isLoading}
        user={user}
      />
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
            [
              workspace !== null && (
                <WorkspaceColumns workspace={workspace} key={workspace.id} />
              )
            ]
          )
        ]
      )}
    </div>
  );
};

export default Dashboard;
