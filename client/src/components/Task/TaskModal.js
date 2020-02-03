import React, { useState, useRef, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "../Layout/Modal";
import Button from "@material-ui/core/Button";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles(theme => ({
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500]
  },
  title: {
    padding: 16,
    color: "#4D4F5C",
    margin: 0
  },
  button: {
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

const TaskModal = ({ task, open, handleClose }) => {
  const classes = useStyles();

  const [content, setContent] = useState(task.content);

  const canSubmit = () => {
    if (content.length === 0) {
      return true;
    } else {
      return false;
    }
  };

  const handleChange = e => {
    setContent(e.target.value);
  };

  return (
    <Modal open={open} handleClose={handleClose}>
      <MuiDialogTitle disableTypography className={classes.title}>
        <Typography variant="h6">Edit Task</Typography>
        <IconButton className={classes.closeButton} onClick={handleClose}>
          <CloseIcon />
        </IconButton>
      </MuiDialogTitle>
      <Divider />
      <div className="modal-content">
        <form>
          <textarea
            type="text"
            name="content"
            id="content"
            autoFocus
            value={content}
            onChange={handleChange}
            className="textarea-input full-width"
            placeholder="Enter task content"
            rows="6"
          ></textarea>
        </form>
        <div className="mt-1">
          <Button
            variant="contained"
            disabled={canSubmit()}
            className={classes.button}
          >
            Update
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default TaskModal;
