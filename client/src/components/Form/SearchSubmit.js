import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import ArrowForwardIosOutlinedIcon from "@material-ui/icons/ArrowForwardIosOutlined";

const useStyles = makeStyles(theme => ({
  root: {
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
  icon: {
    color: "#172b4d"
  }
}));

const SearchSubmit = () => {
  const classes = useStyles();
  return (
    <Paper component="form" className={classes.root}>
      <InputBase className={classes.input} placeholder="workspace" />
      <IconButton type="submit" className={classes.icon}>
        <ArrowForwardIosOutlinedIcon />
      </IconButton>
    </Paper>
  );
};

export default SearchSubmit;
