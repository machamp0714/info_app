import React from "react";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import MenuList from "@material-ui/core/MenuList";

const DropDownMenu = ({ open, anchorEl, handleClose, children }) => {
  return (
    <Popper
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
