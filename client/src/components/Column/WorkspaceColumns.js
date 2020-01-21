import React, { useEffect } from "react";
import AddColumn from "../../containers/Column/AddColumn";
import ColumnList from "./ColumnList";

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
        <ColumnList columns={columns} />
      ) : (
        <AddColumn workspace={workspace} />
      )}
    </div>
  );
};

export default WorkspaceColumns;
