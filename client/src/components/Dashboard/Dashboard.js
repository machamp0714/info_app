import React, { useEffect, useState } from "react";
import SignedinNavbar from "../Layout/SignedinNavbar";
import Sidebar from "./Sidebar";
import CreateWorkspace from "../../containers/Workspace/CreateWorkspace";

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
  }, []);

  if (isLoading) {
    return <div>isLoading</div>;
  }
  return (
    <div>
      <SignedinNavbar open={open} handleDrawerOpen={handleDrawerOpen} />
      <Sidebar open={open} handleDrawerClose={handleDrawerClose} />
      <div className="none-workspace">
        <div className="workspace-description">
          <p>まだworkspaceがありません。</p>
          <p>まずはworkspaceを作成しましょう！</p>
        </div>
        <CreateWorkspace />
      </div>
    </div>
  );
};

export default Dashboard;
