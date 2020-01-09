import React, { useState } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import SignedinLinks from "./SignedinLinks";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";

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

const CssTextField = withStyles({
  root: {
    backgroundColor: "#fff",
    borderRadius: 4,
    minWidth: 250,
    "& .MuiFilledInput-root": {
      backgroundColor: "#fff",
      borderRadius: 4,
      "&:hover": {
        backgroundColor: "#fff"
      }
    },
    "& .MuiFilledInput-input": {
      padding: 12
    },
    "& .MuiFilledInput-underline": {
      "&:before": {
        borderBottom: "none"
      },
      "&:after": {
        borderBottom: "none"
      }
    },
    "& .MuiSelect-select": {
      "&:focus": {
        backgroundColor: "#fff",
        borderRadius: 4
      }
    }
  }
})(TextField);

const SignedinNavbar = ({ workspaces, open, handleDrawerOpen }) => {
  const classes = useStyles();
  const [value, setValue] = useState(workspaces[0]);

  const handleChange = e => {
    setValue(e.target.value);
  };

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
        <CssTextField
          id="workspaces"
          select
          value={value}
          onChange={handleChange}
          variant="filled"
        >
          {workspaces.map(item => (
            <MenuItem key={item.id} value={item}>
              {item.name}
            </MenuItem>
          ))}
        </CssTextField>
        <SignedinLinks />
      </Toolbar>
    </AppBar>
  );
};

export default SignedinNavbar;
