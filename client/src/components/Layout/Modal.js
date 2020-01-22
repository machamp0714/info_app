import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";

const useStyles = makeStyles(theme => ({
  dialog: {
    "& .MuiDialog-paperWidthSm": {
      minWidth: 500,
      backgroundColor: "#F7FAFC"
    }
  }
}));

const Modal = ({ open, handleClose, children }) => {
  const classes = useStyles();

  return (
    <Dialog
      className={classes.dialog}
      open={open}
      onClose={handleClose}
      aria-labelledby="form-dialog-title"
    >
      {children}
    </Dialog>
  );
};

export default Modal;
