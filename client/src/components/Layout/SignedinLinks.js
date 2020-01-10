import React, { useState } from "react";
import { makeStyles } from "@material-ui/styles";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Divider from "@material-ui/core/Divider";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import { Redirect } from "react-router-dom";

const useStyles = makeStyles(() => ({
  icon: {
    width: 40,
    height: 40,
    borderRadius: 3
  }
}));

const SignedinLinks = ({ logout, signout }) => {
  const user = JSON.parse(localStorage.getItem("user")); // parse => 値をJSONとして解析し、jsオブジェクトを構築する
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
    localStorage.removeItem("access-token");
    localStorage.removeItem("client");
    localStorage.removeItem("uid");
    localStorage.removeItem("user");
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
      <Popper open={open} anchorEl={anchorRef.current}>
        <Paper>
          <ClickAwayListener onClickAway={handleClose}>
            <MenuList>
              <MenuItem onClick={handleClose}>Account</MenuItem>
              <MenuItem onClick={handleClose}>Setting</MenuItem>
              <Divider />
              <MenuItem onClick={handleClick}>Signout</MenuItem>
            </MenuList>
          </ClickAwayListener>
        </Paper>
      </Popper>
    </div>
  );
};

export default SignedinLinks;
