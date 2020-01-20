import React, { useEffect, useState } from "react";
import SignedinNavbar from "../Layout/SignedinNavbar";
import Sidebar from "./Sidebar";
import AddWorkspace from "./AddWorkspace";
import WorkspaceColumns from "../../containers/Column/WorkspaceColumns";
import ProgressBar from "../Layout/ProgressBar";
import { http } from "../../config/axios";

const Dashboard = ({ workspaces, isLoading, user, getWorkspaces }) => {
  const [open, setOpen] = useState(false);
  const [workspace, setWorkspace] = useState(null);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    getWorkspaces();
  }, [getWorkspaces]);

  useEffect(() => {
    const getDefaultWorkspace = async () => {
      const result = await http.get("/api/default_workspace");
      setWorkspace(result.data);
    };

    getDefaultWorkspace();
  }, [workspaces]);

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
