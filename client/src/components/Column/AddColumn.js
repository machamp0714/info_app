import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import Typography from "@material-ui/core/Typography";
import DialogContent from "@material-ui/core/DialogContent";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
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
  dialog: {
    "& .MuiDialog-paperWidthSm": {
      minWidth: 500,
      backgroundColor: "#F7FAFC"
    }
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

const AddColumn = ({ createColumn }) => {
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
        className={classes.dialog}
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <MuiDialogTitle disableTypography className={classes.title}>
          <Typography variant="h6">Add Column</Typography>
          <IconButton className={classes.closeButton} onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </MuiDialogTitle>
        <Divider />
        <DialogContent>
          <Paper className={classes.paper}>
            <InputBase
              className={classes.input}
              id="name"
              value={value}
              palaceholder="Enter column name"
              autoFocus
            />
          </Paper>
        </DialogContent>
        <div className="center m-tb">
          <Button className={classes.button}>Add Column</Button>
        </div>
      </Dialog>
    </div>
  );
};

export default AddColumn;
