import React from "react";
import { makeStyles } from "@material-ui/styles";
import Button from "@material-ui/core/Button";

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

  return (
    <div className="center-content">
      <div className="column-description">
        <p>このワークスペースにはカラムがありません。</p>
      </div>
      <Button className={classes.button} variant="contained">
        Add Column
      </Button>
    </div>
  );
};

export default AddColumn;
