import React, { useState, useRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ColumnModal from "./ColumnModal";
import DropDownMenu from "../Shared/DropDownMenu";

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
        className="column-menu-button button-none"
      >
        <MenuIcon style={iconStyle} />
      </button>
      <DropDownMenu
        open={open}
        anchorEl={anchorRef.current}
        handleClose={handleClose}
      >
        <MenuItem className={classes.item} onClick={handleModalOpen}>
          Edit Column
        </MenuItem>
        <MenuItem className={classes.item} onClick={handleDeleteClick}>
          Delete Column
        </MenuItem>
      </DropDownMenu>
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
