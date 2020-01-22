import React, { useState, useEffect } from "react";
import AddColumn from "../../containers/Column/AddColumn";
import ColumnList from "./ColumnList";

const WorkspaceColumns = ({ columns, getColumns, workspace }) => {
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
    return <ColumnList columns={columns} />;
  } else {
    return (
      <AddColumn
        workspace={workspace}
        open={open}
        handleClose={handleClose}
        handleClickOpen={handleClickOpen}
      />
    );
  }
};

export default WorkspaceColumns;
