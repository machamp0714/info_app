import React, { useState } from "react";
import { makeStyles } from "@material-ui/styles";
import Divider from "@material-ui/core/Divider";
import MenuItem from "@material-ui/core/MenuItem";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import { Redirect, Link } from "react-router-dom";
import DropDownMenu from "../Shared/DropDownMenu";

const useStyles = makeStyles(() => ({
  icon: {
    width: 40,
    height: 40,
    borderRadius: 3
  }
}));

const SignedinLinks = ({ logout, signout, user }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen(prevOpen => !prevOpen);
  };

  const handleClose = e => {
    if (anchorRef.current && anchorRef.current.contains(e.target)) {
      return;
    }

    setOpen(false);
  };

  const handleClick = () => {
    signout();
  };

  if (logout) {
    localStorage.clear();

    return <Redirect to="/" />;
  }

  return (
    <div className="profile">
      <div className="nav-profile" onClick={handleToggle} ref={anchorRef}>
        {user.image ? (
          <div className="profile-image">
            <img
              className="avatar-small"
              width="35"
              height="35"
              src={user.image}
              alt={user.name}
            />
          </div>
        ) : (
          <AccountBoxIcon style={{ fontSize: 35 }} className={classes.icon} />
        )}
        <span className="dropdown-caret"></span>
      </div>
      <DropDownMenu
        open={open}
        anchorEl={anchorRef.current}
        handleClose={handleClose}
      >
        <Link to={"/" + user.name}>
          <MenuItem onClick={handleClose}>Dashboard</MenuItem>
        </Link>
        <Link to={"/" + user.name + "/profile"}>
          <MenuItem onClick={handleClose}>Profile</MenuItem>
        </Link>
        <Link to={"/" + user.name + "/workspaces"}>
          <MenuItem onClick={handleClose}>Your Workspaces</MenuItem>
        </Link>
        <Link to={"/" + user.name + "/settings"}>
          <MenuItem onClick={handleClose}>Settings</MenuItem>
        </Link>
        <Divider />
        <MenuItem onClick={handleClick}>Signout</MenuItem>
      </DropDownMenu>
    </div>
  );
};

export default SignedinLinks;
