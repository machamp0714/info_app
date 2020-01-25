import React, { useState, useRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import ColumnModal from "./ColumnModal";

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

const ColumnMenu = ({ column, editColumn, deleteColumn }) => {
  const classes = useStyles();

  const [open, setOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [name, setName] = useState(column.name);
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

  const handleModalOpen = () => {
    handleToggle();
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  const handleChange = e => {
    setName(e.target.value);
  };

  const handleEditClick = () => {
    const params = {
      name: name
    };
    editColumn(column.id, params);
    handleModalClose();
  };

  const handleSubmit = e => {
    const params = {
      name: name
    };
    editColumn(column.id, params);

    handleModalClose();
    e.preventDefault();
  };

  return (
    <div style={{ display: "inline-block" }}>
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
              <MenuItem className={classes.item} onClick={handleModalOpen}>
                Edit Column
              </MenuItem>
              <MenuItem className={classes.item} onClick={handleDeleteClick}>
                Delete Column
              </MenuItem>
            </MenuList>
          </ClickAwayListener>
        </Paper>
      </Popper>
      <ColumnModal
        open={modalOpen}
        name={name}
        title="Edit Column"
        handleChange={handleChange}
        handleClick={handleEditClick}
        handleSubmit={handleSubmit}
        handleClose={handleModalClose}
      />
    </div>
  );
};

export default ColumnMenu;
