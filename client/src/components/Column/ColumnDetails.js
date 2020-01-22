import React, { useState, useRef } from "react";
import AddIcon from "@material-ui/icons/Add";
import MenuIcon from "@material-ui/icons/Menu";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";

const iconStyle = {
  color: "#24292e",
  fontSize: 20,
  "&:hover": {
    path: {
      color: "#11CDEF"
    }
  }
};

const ColumnDetails = ({ column }) => {
  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);

  const handleToggle = () => {
    setOpen(prevOpen => !prevOpen);
  };

  const handleClose = e => {
    if (anchorRef.current && anchorRef.current.contains(e.target)) {
      return;
    }
    setOpen(false);
  };

  return (
    <li className="column-box">
      <div className="column-header">
        <div className="column-name">{column.name}</div>
        <div className="column-menu">
          <button type="button" className="column-menu-button">
            <AddIcon style={iconStyle} />
          </button>
          <button
            ref={anchorRef}
            onClick={handleToggle}
            type="button"
            className="column-menu-button"
          >
            <MenuIcon style={iconStyle} />
          </button>
          <Popper open={open} anchorEl={anchorRef.current} role={undefined}>
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList autoFocusItem={open}>
                  <MenuItem onClick={handleClose}>Edit Column</MenuItem>
                  <MenuItem onClick={handleClose}>Delete Column</MenuItem>
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Popper>
        </div>
      </div>
    </li>
  );
};

export default ColumnDetails;
