import React, { useContext } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import IconButton from "@material-ui/core/IconButton";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
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
  },
  input: {
    width: 330,
    paddingLeft: 10
  },
  button: {
    transition: "none",
    "&:hover": {
      borderRadius: 0,
      backgroundColor: "#172b4d",
      "& .MuiSvgIcon-root": {
        color: "#fff"
      }
    }
  },
  icon: {
    color: "#172b4d"
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

  const handleSubmit = e => {
    e.preventDefault();
  };

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
        <div className="mt-1 p-1">
          <form onSubmit={handleSubmit} className="d-flex form-group">
            <InputBase
              autoFocus
              className={classes.input}
              placeholder="Create Workspace"
            />
            <IconButton className={classes.button} type="submit">
              <PlayArrowIcon className={classes.icon} />
            </IconButton>
          </form>
        </div>
      ) : (
        <ul className="mt-1">
          <li
            onClick={handleWorkspaceClick}
            className="sidebar-item d-flex mb-2"
          >
            <img
              src={qiitaIcon}
              className="sidebar-icon"
              alt="workspace icon"
            />
            {open && <div className="sidebar-item-content">Workspace</div>}
          </li>
          <li className="sidebar-item d-flex mb-2">
            <img
              src={qiitaIcon}
              className="sidebar-icon"
              alt="workspace icon"
            />
            {open && <div className="sidebar-item-content">Qiita</div>}
          </li>
          <li className="sidebar-item d-flex mb-2">
            <img
              src={qiitaIcon}
              className="sidebar-icon"
              alt="workspace icon"
            />
            {open && <div className="sidebar-item-content">Evernote</div>}
          </li>
          <li className="sidebar-item d-flex mb-2">
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
