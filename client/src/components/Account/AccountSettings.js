import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link, withRouter } from "react-router-dom";
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

const AccountSettings = withRouter(props => {
  const classes = useStyles();
  const { user, children } = props;
  const history = props.history.location.pathname;

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
              <Link
                to={"/" + user.name + "/profile"}
                className={
                  history.includes("profile")
                    ? "active account-link"
                    : "non-active account-link"
                }
              >
                Profile
              </Link>
              <Link
                to={"/" + user.name + "/workspaces"}
                className={
                  history.includes("workspaces")
                    ? "active account-link"
                    : "non-active account-link"
                }
              >
                Your Workspaces
              </Link>
              <Link
                to={"/" + user.name + "/settings"}
                className={
                  history.includes("settings")
                    ? "active account-link"
                    : "non-active account-link"
                }
              >
                Settings
              </Link>
            </nav>
          </div>
          <div className="account-rightbar">{children}</div>
        </div>
      </Container>
    </div>
  );
});

export default AccountSettings;
