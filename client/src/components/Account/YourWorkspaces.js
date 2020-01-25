import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import SignedinLinks from "../Layout/SignedinLinks";

const useStyles = makeStyles(theme => ({
  appBar: {
    height: 70,
    backgroundColor: "#172b4d",
    boxShadow: "none"
  },
  navItem: {
    paddingRight: 30
  }
}));

const YourWorkspaces = ({ user }) => {
  const classes = useStyles();

  return (
    <div className="account-settings">
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar className={classes.navItem}>
          <SignedinLinks user={user} />
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default YourWorkspaces;
