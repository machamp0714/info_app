import React, { useState, useRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
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

const useStyles = makeStyles(theme => ({
  item: {
    fontSize: 14,
    paddingLeft: 10,
    paddingRight: 10
  }
}));

const ColumnDetails = ({ column, deleteColumn }) => {
  const classes = useStyles();
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

  const handleDeleteClick = () => {
    deleteColumn(column.id);

    handleToggle();
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
          <Popper
            open={open}
            anchorEl={anchorRef.current}
            placement="bottom-end"
            role={undefined}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList autoFocusItem={open}>
                  <MenuItem className={classes.item} onClick={handleClose}>
                    Edit Column
                  </MenuItem>
                  <MenuItem
                    className={classes.item}
                    onClick={handleDeleteClick}
                  >
                    Delete Column
                  </MenuItem>
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
