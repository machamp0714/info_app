import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(() => ({
  cancel: {
    backgroundColor: "#A5A5AA",
    color: "#FFFFFF",
    boxShadow: "none",
    marginLeft: 10,
    "&:hover": {
      backgroundColor: "#A5A5AA",
      boxShadow: "none"
    }
  }
}));

const CancelButton = ({ handleClick }) => {
  const classes = useStyles();

  return (
    <Button
      variant="contained"
      className={classes.cancel}
      onClick={handleClick}
    >
      cancel
    </Button>
  );
};

export default CancelButton;
