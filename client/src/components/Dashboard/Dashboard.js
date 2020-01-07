import React from "react";
import Sidebar from "./Sidebar";
import SearchSubmit from "../Form/SearchSubmit";

const Dashboard = () => {
  return (
    <div>
      <Sidebar />
      <div className="none-workspace">
        <div className="workspace-description">
          <p>まだworkspaceがありません。</p>
          <p>まずはworkspaceを作成しましょう！</p>
        </div>
        <SearchSubmit />
      </div>
    </div>
  );
};

export default Dashboard;
