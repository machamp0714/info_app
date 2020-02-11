import React, { useState, useRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import DropDownMenu from "../Shared/DropDownMenu";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import MenuItem from "@material-ui/core/MenuItem";
import StandardModal from "../../components/Shared/StandardModal";

const iconStyle = {
  color: "#6a737d",
  fontSize: 18
};

const useStyles = makeStyles(() => ({
  item: {
    fontSize: 14,
    paddingLeft: 10,
    paddingRight: 10
  }
}));

const WorkspaceMenu = ({ workspace, editWorkspace, deleteWorkspace }) => {
  const classes = useStyles();
  const [name, setName] = useState(workspace.name);
  const [open, setOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const anchorRef = useRef(null);

  const handleChange = e => {
    setName(e.target.value);
  };

  const handleClick = () => {
    const param = {
      workspace: {
        name: name
      }
    };
    editWorkspace(workspace.id, param);
    handleCloseModal();
  };

  const handleSubmit = e => {
    e.preventDefault();
    const param = {
      workspace: {
        name: name
      }
    };
    editWorkspace(workspace.id, param);
    handleCloseModal();
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpenModal = () => {
    setModalOpen(true);
    handleClose();
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleDeleteClick = () => {
    deleteWorkspace(workspace.id);
    setOpen(false);
  };

  return (
    <details className="position-static outline-none">
      <summary
        onClick={handleOpen}
        ref={anchorRef}
        className="task-menu position-absolute right-0 top-0 outline-none"
      >
        <MoreHorizIcon style={iconStyle} />
      </summary>
      <DropDownMenu
        open={open}
        anchorEl={anchorRef.current}
        handleClose={handleClose}
      >
        <MenuItem onClick={handleOpenModal} className={classes.item}>
          Edit Workspace
        </MenuItem>
        <MenuItem onClick={handleDeleteClick} className={classes.item}>
          Delete Workspace
        </MenuItem>
      </DropDownMenu>
      <StandardModal
        name={name}
        open={modalOpen}
        title="Edit Workspace"
        placeholder="Enter workspace name"
        handleClose={handleCloseModal}
        handleChange={handleChange}
        handleClick={handleClick}
        handleSubmit={handleSubmit}
      />
    </details>
  );
};

export default WorkspaceMenu;
