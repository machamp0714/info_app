import React from "react";
import CreateWorkspace from "../../containers/Workspace/CreateWorkspace";

const AddWorkspace = () => {
  return (
    <div className="center-content">
      <div className="center">
        <p>まだワークスペースがありません。</p>
        <p>まずはワークスペースを作成しましょう！</p>
      </div>
      <CreateWorkspace />
    </div>
  );
};

export default AddWorkspace;
