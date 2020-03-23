import React, { useContext } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import WorkspaceItem from "../../containers/Drawer/WorkspaceItem";
import SidebarTask from "./SidebarTask";
import DrawerMenu from "./DrawerMenu";
import Drawer from "@material-ui/core/Drawer";
import IconButton from "@material-ui/core/IconButton";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import DashboardContext from "../../contexts/DashboardContext";
import clsx from "clsx";

const drawerWidth = 400;

const useStyles = makeStyles(theme => ({
  content: {
    marginRight: "auto"
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9) + 1
    }
  },
  toolbar: {
    display: "flex",
    height: 70,
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar
  }
}));

const Sidebar = () => {
  const classes = useStyles();
  const theme = useTheme();
  const { open, drawerTask, workspacesOpen, handleDrawerClose } = useContext(
    DashboardContext
  );

  return (
    <Drawer
      variant="permanent"
      className={clsx(classes.drawer, {
        [classes.drawerOpen]: open,
        [classes.drawerClose]: !open
      })}
      classes={{
        paper: clsx({
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open
        })
      }}
    >
      <div className={classes.toolbar}>
        <Typography variant="h5" className={classes.content}>
          Dashboard
        </Typography>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === "rtl" ? (
            <ChevronRightIcon />
          ) : (
            <ChevronLeftIcon />
          )}
        </IconButton>
      </div>
      <Divider />
      {workspacesOpen && <WorkspaceItem />}
      {drawerTask !== null && <SidebarTask />}
      {!workspacesOpen && drawerTask === null && <DrawerMenu />}
    </Drawer>
  );
};

export default Sidebar;
