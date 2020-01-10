import React from "react";
import CreateWorkspace from "../../containers/Workspace/CreateWorkspace";

const AddWorkspace = () => {
  return (
    <div className="center">
      <div className="workspace-description">
        <p>まだworkspaceがありません。</p>
        <p>まずはworkspaceを作成しましょう！</p>
      </div>
      <CreateWorkspace />
    </div>
  );
};

export default AddWorkspace;
