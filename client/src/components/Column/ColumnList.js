import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import ColumnDetails from "../../containers/Column/ColumnDetails";
import AddIcon from "@material-ui/icons/Add";
import Button from "@material-ui/core/Button";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import Typography from "@material-ui/core/Typography";
import DialogContent from "@material-ui/core/DialogContent";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Divider from "@material-ui/core/Divider";
import Modal from "../Layout/Modal";

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

const ColumnList = ({
  workspace,
  columns,
  open,
  handleClose,
  handleClickOpen,
  createColumn
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
    setName("");
    handleClose();
  };

  const handleSubmit = e => {
    const params = {
      name: name
    };
    createColumn(workspace.id, params);
    setName("");
    e.preventDefault();
    handleClose();
  };

  return (
    <div className="column-dashboard">
      <ul className="column-list">
        {columns.map(column => {
          return <ColumnDetails key={column.id} column={column} />;
        })}
      </ul>
      <div className="add-column-body">
        <button
          type="button"
          onClick={handleClickOpen}
          className="add-column-button"
        >
          <AddIcon style={{ fontSize: 16 }} />
          <span className="column-button-value">Add Column</span>
        </button>
        <Modal open={open} handleClose={handleClose}>
          <MuiDialogTitle disableTypography className={classes.title}>
            <Typography variant="h6">Add Column</Typography>
            <IconButton className={classes.closeButton} onClick={handleClose}>
              <CloseIcon />
            </IconButton>
          </MuiDialogTitle>
          <Divider />
          <DialogContent>
            <Paper
              onSubmit={handleSubmit}
              component="form"
              className={classes.paper}
            >
              <InputBase
                className={classes.input}
                id="name"
                value={name}
                palaceholder="Enter column name"
                autoFocus
                onChange={handleChange}
              />
            </Paper>
          </DialogContent>
          <div className="center m-tb">
            <Button className={classes.button} onClick={handleClick}>
              Add Column
            </Button>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default ColumnList;
