import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Container from "@material-ui/core/Container";
import SignedinLinks from "../Layout/SignedinLinks";

const useStyles = makeStyles(theme => ({
  appBar: {
    height: 70,
    backgroundColor: "#172b4d",
    boxShadow: "none",
    position: "static"
  },
  navItem: {
    paddingRight: 30
  },
  container: {
    marginTop: 30
  }
}));

const AccountSettings = ({ user, children }) => {
  const classes = useStyles();

  return (
    <div id="account-settings">
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar className={classes.navItem}>
          <SignedinLinks user={user} />
        </Toolbar>
      </AppBar>
      <Container className={classes.container} maxWidth="md">
        <div className="account-content">
          <div className="account-sidebar">
            <nav className="account-menu">
              <h3 className="account-heading">Account Settings</h3>
              <Link to={"/" + user.name} className="account-link non-active">
                Dashboard
              </Link>
              <a className="account-link non-active">Profile</a>
              <a className="account-link active">Your Workspaces</a>
              <a className="account-link non-active">Settings</a>
            </nav>
          </div>
          <div className="account-rightbar">{children}</div>
        </div>
      </Container>
    </div>
  );
};

export default AccountSettings;
