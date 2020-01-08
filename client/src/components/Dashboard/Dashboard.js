import React from "react";
import Sidebar from "./Sidebar";
import CreateWorkspace from "../../containers/Workspace/CreateWorkspace";

const Dashboard = () => {
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
