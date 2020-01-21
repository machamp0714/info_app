import React, { useEffect } from "react";
import AddColumn from "../../containers/Column/AddColumn";

const WorkspaceColumns = ({ columns, getColumns, workspace }) => {
  useEffect(() => {
    getColumns(workspace.id);
  }, [getColumns, workspace.id]);

  return (
    <div className="center-content">
      {columns.length > 0 ? (
        <div>columns</div>
      ) : (
        <AddColumn workspace={workspace} />
      )}
    </div>
  );
};

export default WorkspaceColumns;
