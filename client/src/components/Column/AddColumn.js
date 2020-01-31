import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import StandardModal from "../Shared/StandardModal";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500]
  },
  paper: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: 400,
    height: 45,
    margin: "20px auto 0"
  },
  input: {
    color: "#172b4d",
    marginLeft: theme.spacing(1),
    flex: 1
  },
  title: {
    padding: 16,
    color: "#4D4F5C",
    margin: 0
  },
  button: {
    width: 125,
    height: 40,
    backgroundColor: "#11CDEF",
    color: "#FFFFFF",
    boxShadow: "none",
    "&:hover": {
      backgroundColor: "#11CDEF",
      boxShadow: "none"
    }
  }
}));

const AddColumn = ({
  workspace,
  createColumn,
  open,
  handleClose,
  handleClickOpen
}) => {
  const classes = useStyles();
  const [name, setName] = useState("");

  const handleChange = e => {
    setName(e.target.value);
  };

  const handleClick = () => {
    const params = {
      name: name
    };
    createColumn(workspace.id, params);
    handleClose();
    setName("");
  };

  const handleSubmit = e => {
    const params = {
      name: name
    };
    createColumn(workspace.id, params);
    setName("");
    handleClose();
    e.preventDefault();
  };

  return (
    <div className="center-content">
      <div className="column-description">
        <p>このワークスペースにはカラムがありません。</p>
      </div>
      <Button
        onClick={handleClickOpen}
        className={classes.button}
        variant="contained"
      >
        Add Column
      </Button>
      <StandardModal
        open={open}
        name={name}
        title="Add Column"
        placeholder="Enter column name"
        handleChange={handleChange}
        handleClick={handleClick}
        handleSubmit={handleSubmit}
        handleClose={handleClose}
      />
    </div>
  );
};

export default AddColumn;
