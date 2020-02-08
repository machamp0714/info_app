import React, { useState, useEffect, useContext } from "react";
import AddColumn from "./AddColumn";
import ColumnList from "./ColumnList";
import DashboardContext from "../../contexts/DashboardContext";

const WorkspaceColumns = ({ columns, isLoading, getColumns, createColumn }) => {
  const [open, setOpen] = useState(false);
  const { workspace } = useContext(DashboardContext);

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
              key={workspace.id}
              workspace={workspace}
              columns={columns}
              open={open}
              handleClose={handleClose}
              handleClickOpen={handleClickOpen}
              createColumn={createColumn}
            />
          ) : (
            <AddColumn
              key={workspace.id}
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
