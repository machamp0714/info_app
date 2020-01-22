import React, { useState, useEffect } from "react";
import AddColumn from "./AddColumn";
import ColumnList from "./ColumnList";

const WorkspaceColumns = ({ columns, getColumns, createColumn, workspace }) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    getColumns(workspace.id);
  }, [getColumns, workspace.id]);

  const columnsExist = () => {
    return workspace.columns.length > 0;
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  if (columnsExist()) {
    return (
      <ColumnList
        workspace={workspace}
        columns={columns}
        open={open}
        handleClose={handleClose}
        handleClickOpen={handleClickOpen}
        createColumn={createColumn}
      />
    );
  } else {
    return (
      <AddColumn
        workspace={workspace}
        open={open}
        handleClose={handleClose}
        handleClickOpen={handleClickOpen}
        createColumn={createColumn}
      />
    );
  }
};

export default WorkspaceColumns;
