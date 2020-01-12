import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  button: {
    width: "120px",
    height: "40px",
    backgroundColor: "#11CDEF",
    color: "#FFFFFF",
    boxShadow: "none",
    "&:hover": {
      backgroundColor: "#11CDEF",
      boxShadow: "none"
    }
  }
}));

const PrimaryButton = ({ value }) => {
  const classes = useStyles();
  return (
    <Button type="submit" variant="contained" className={classes.button}>
      {value}
    </Button>
  );
};

export default PrimaryButton;
