import React, { useState, useRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import DropDownMenu from "../Shared/DropDownMenu";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import MenuItem from "@material-ui/core/MenuItem";

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

const TaskMenu = () => {
  const classes = useStyles();

  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
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
        <MenuItem className={classes.item}>Edit Task</MenuItem>
        <MenuItem className={classes.item}>Delete Task</MenuItem>
      </DropDownMenu>
    </details>
  );
};

export default TaskMenu;
