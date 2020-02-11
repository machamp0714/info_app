import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import MenuList from "@material-ui/core/MenuList";

const useStyles = makeStyles(() => ({
  root: {
    zIndex: 9999
  }
}));

const DropDownMenu = ({ open, anchorEl, handleClose, children }) => {
  const classes = useStyles();

  return (
    <Popper
      className={classes.root}
      open={open}
      anchorEl={anchorEl}
      placement="bottom-end"
      role={undefined}
    >
      <Paper>
        <ClickAwayListener onClickAway={handleClose}>
          <MenuList autoFocusItem={open}>{children}</MenuList>
        </ClickAwayListener>
      </Paper>
    </Popper>
  );
};

export default DropDownMenu;
