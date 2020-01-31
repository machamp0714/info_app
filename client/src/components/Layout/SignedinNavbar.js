import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import SignedinLinks from "../../containers/Auth/SignedinLinks";
import WorkspaceSelectBox from "../Workspace/WorkspaceSelectBox";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

const drawerWidth = 400;

const useStyles = makeStyles(theme => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    height: 70,
    backgroundColor: "#172b4d",
    boxShadow: "none",
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  navItem: {
    paddingRight: 30
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  menuButton: {
    marginRight: 36
  },
  hide: {
    display: "none"
  }
}));

const SignedinNavbar = ({
  workspaces,
  workspace,
  open,
  handleDrawerOpen,
  handleSelectWorkspace,
  isLoading,
  user
}) => {
  const classes = useStyles();

  return (
    <AppBar
      position="fixed"
      className={clsx(classes.appBar, {
        [classes.appBarShift]: open
      })}
    >
      <Toolbar className={classes.navItem}>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          className={clsx(classes.menuButton, {
            [classes.hide]: open
          })}
        >
          <MenuIcon />
        </IconButton>
        {!isLoading && workspaces.length > 0 && workspace !== null && (
          <WorkspaceSelectBox
            workspaces={workspaces}
            workspace={workspace}
            handleSelectWorkspace={handleSelectWorkspace}
          />
        )}
        <SignedinLinks user={user} />
      </Toolbar>
    </AppBar>
  );
};

export default SignedinNavbar;
