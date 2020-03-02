import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(() => ({
  submit: {
    backgroundColor: "#11CDEF",
    color: "#FFFFFF",
    boxShadow: "none",
    "&:hover": {
      backgroundColor: "#11CDEF",
      boxShadow: "none"
    },
    "&.MuiButton-contained.Mui-disabled": {
      backgroundColor: "#96EFFF",
      color: "#fff"
    }
  }
}));

const SubmitButton = ({ handleClick, canSubmit, value }) => {
  const classes = useStyles();

  return (
    <Button
      type="submit"
      onClick={handleClick}
      variant="contained"
      className={classes.submit}
      disabled={canSubmit()}
    >
      {value}
    </Button>
  );
};

export default SubmitButton;
