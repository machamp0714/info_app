import React, { useState } from "react";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import StandardModal from "../Shared/StandardModal";

const iconStyle = {
  color: "#4E545A",
  fontSize: 20,
  "&:hover": {
    path: {
      color: "#11CDEF"
    }
  }
};

const WorkspaceMenu = ({ workspace, editWorkspace, deleteWorkspace }) => {
  const [name, setName] = useState(workspace.name);
  const [open, setOpen] = useState(false);

  const handleDeleteClick = workspace_id => {
    deleteWorkspace(workspace_id);
  };

  const handleOpenModal = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = e => {
    setName(e.target.value);
  };

  const handleClick = () => {
    editWorkspace(workspace.id, { name: name });
    setOpen(false);
  };

  const handleSubmit = e => {
    editWorkspace(workspace.id, { name: name });
    setOpen(false);
    e.preventDefault();
  };

  return (
    <div className="workspace-meta">
      <button
        onClick={handleOpenModal}
        className="button-none column-menu-button"
        type="button"
      >
        <EditIcon style={iconStyle} />
      </button>
      <StandardModal
        name={name}
        open={open}
        title="Edit Workspace"
        placeholder="Enter workspace name"
        handleClose={handleClose}
        handleChange={handleChange}
        handleClick={handleClick}
        handleSubmit={handleSubmit}
      />
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
