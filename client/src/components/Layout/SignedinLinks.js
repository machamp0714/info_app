import React, { useState } from "react";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Divider from "@material-ui/core/Divider";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";

const SignedinLinks = () => {
  const user = JSON.parse(localStorage.getItem("user")); // parse => 値をJSONとして解析し、jsオブジェクトを構築する
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

  return (
    <div>
      <div className="nav-profile" onClick={handleToggle} ref={anchorRef}>
        <div className="profile-image">
          <img
            className="avatar-small"
            width="35"
            height="35"
            src={user.image}
            alt={user.name}
          />
        </div>
        <span className="dropdown-caret"></span>
      </div>
      <Popper open={open} anchorEl={anchorRef.current}>
        <Paper>
          <ClickAwayListener onClickAway={handleClose}>
            <MenuList>
              <MenuItem onClick={handleClose}>Account</MenuItem>
              <MenuItem onClick={handleClose}>Setting</MenuItem>
              <Divider />
              <MenuItem onClick={handleClose}>Signout</MenuItem>
            </MenuList>
          </ClickAwayListener>
        </Paper>
      </Popper>
    </div>
  );
};

export default SignedinLinks;
