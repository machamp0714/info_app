import React, { useContext } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import WorkspaceItem from "../../containers/Drawer/WorkspaceItem";
import Drawer from "@material-ui/core/Drawer";
import IconButton from "@material-ui/core/IconButton";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import DashboardContext from "../../contexts/DashboardContext";
import clsx from "clsx";
import qiitaIcon from "../../images/qiita.png";

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
  const {
    open,
    clickedWorkspace,
    handleDrawerClose,
    handleWorkspaceClick
  } = useContext(DashboardContext);

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
      {clickedWorkspace ? (
        <WorkspaceItem />
      ) : (
        <ul className="mt-1">
          <li
            onClick={handleWorkspaceClick}
            className={clsx("sidebar-item d-flex mb-2", {
              "sidebar-item-open": open
            })}
          >
            <img
              src={qiitaIcon}
              className="sidebar-icon"
              alt="workspace icon"
            />
            {open && <div className="sidebar-item-content">Workspace</div>}
          </li>
          <li
            className={clsx("sidebar-item d-flex mb-2", {
              "sidebar-item-open": open
            })}
          >
            <img
              src={qiitaIcon}
              className="sidebar-icon"
              alt="workspace icon"
            />
            {open && <div className="sidebar-item-content">Qiita</div>}
          </li>
          <li
            className={clsx("sidebar-item d-flex mb-2", {
              "sidebar-item-open": open
            })}
          >
            <img
              src={qiitaIcon}
              className="sidebar-icon"
              alt="workspace icon"
            />
            {open && <div className="sidebar-item-content">Evernote</div>}
          </li>
          <li
            className={clsx("sidebar-item d-flex mb-2", {
              "sidebar-item-open": open
            })}
          >
            <img
              src={qiitaIcon}
              className="sidebar-icon"
              alt="workspace icon"
            />
            {open && (
              <div className="sidebar-item-content">はてなブックマーク</div>
            )}
          </li>
        </ul>
      )}
    </Drawer>
  );
};

export default Sidebar;
