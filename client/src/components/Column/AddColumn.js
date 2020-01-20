import React, { useState } from "react";
import { makeStyles } from "@material-ui/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import Textfield from "@material-ui/core/TextField";

const useStyles = makeStyles(theme => ({
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

const AddColumn = () => {
  const classes = useStyles();

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
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
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="dialog-title">Add Column</DialogTitle>
        <DialogContent>
          <Textfield
            autoFocus
            margin="dense"
            id="name"
            label="column name"
            type="text"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            cancel
          </Button>
          <Button color="primary">Add Column</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AddColumn;
