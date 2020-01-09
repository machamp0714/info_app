import React, { useEffect } from "react";
import Sidebar from "./Sidebar";
import CreateWorkspace from "../../containers/Workspace/CreateWorkspace";

const Dashboard = ({ workspaces, isLoading, getWorkspaces }) => {
  useEffect(() => {
    getWorkspaces();
  }, []);
  if (isLoading) {
    return <div>isLoading</div>;
  }
  return (
    <div>
      <Sidebar />
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
