import React, { useEffect } from "react";
import AddColumn from "../../containers/Column/AddColumn";

const WorkspaceColumns = ({ columns, getColumns, workspace }) => {
  useEffect(() => {
    getColumns(workspace.id);
  }, [getColumns, workspace.id]);

  const columnsExist = () => {
    return workspace.columns.length > 0;
  };

  return (
    <div className="center-content">
      {columnsExist() ? (
        <div>columns</div>
      ) : (
        <AddColumn workspace={workspace} />
      )}
    </div>
  );
};

export default WorkspaceColumns;
