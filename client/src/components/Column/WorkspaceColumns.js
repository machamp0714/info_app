import React, { useState, useEffect } from "react";
import AddColumn from "./AddColumn";
import ColumnList from "./ColumnList";

const WorkspaceColumns = ({
  columns,
  isLoading,
  getColumns,
  createColumn,
  workspace
}) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    getColumns(workspace.id);
  }, [getColumns, workspace.id]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      {isLoading ? (
        <></>
      ) : (
        [
          columns.length > 0 ? (
            <ColumnList
              workspace={workspace}
              columns={columns}
              open={open}
              handleClose={handleClose}
              handleClickOpen={handleClickOpen}
              createColumn={createColumn}
            />
          ) : (
            <AddColumn
              workspace={workspace}
              open={open}
              handleClose={handleClose}
              handleClickOpen={handleClickOpen}
              createColumn={createColumn}
            />
          )
        ]
      )}
    </>
  );
};

export default WorkspaceColumns;
