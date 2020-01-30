import React from "react";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";

const iconStyle = {
  color: "#4E545A",
  fontSize: 20,
  "&:hover": {
    path: {
      color: "#11CDEF"
    }
  }
};

const WorkspaceMenu = ({ workspace, deleteWorkspace }) => {
  const handleDeleteClick = workspace_id => {
    deleteWorkspace(workspace_id);
  };

  return (
    <div className="workspace-meta">
      <button className="button-none column-menu-button" type="button">
        <EditIcon style={iconStyle} />
      </button>
      <button
        className="button-none column-menu-button"
        type="button"
        onClick={() => handleDeleteClick(workspace.id)}
      >
        <DeleteIcon style={iconStyle} />
      </button>
    </div>
  );
};

export default WorkspaceMenu;
