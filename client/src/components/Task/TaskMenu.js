import React, { useState, useRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import DropDownMenu from "../Shared/DropDownMenu";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import MenuItem from "@material-ui/core/MenuItem";
import TaskModal from "./TaskModal";

const iconStyle = {
  color: "#6a737d",
  fontSize: 18
};

const useStyles = makeStyles(theme => ({
  item: {
    fontSize: 14,
    paddingLeft: 10,
    paddingRight: 10
  }
}));

const TaskMenu = ({ task, deleteTask }) => {
  const classes = useStyles();

  const [open, setOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const anchorRef = useRef(null);

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
    deleteTask(task.id);
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
          Edit Task
        </MenuItem>
        <MenuItem onClick={handleDeleteClick} className={classes.item}>
          Delete Task
        </MenuItem>
      </DropDownMenu>
      <TaskModal task={task} open={modalOpen} handleClose={handleCloseModal} />
    </details>
  );
};

export default TaskMenu;
