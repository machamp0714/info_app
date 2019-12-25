import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import InputBase from "@material-ui/core/InputBase";
import Button from "@material-ui/core/Button";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  icon: {
    "&:hover": {
      backgroundColor: "#FFFFFF"
    }
  },
  button: {
    width: "120px",
    height: "40px",
    backgroundColor: "#172b4d",
    color: "#FFFFFF",
    boxShadow: "none",
    "&:hover": {
      backgroundColor: "#172b4d",
      boxShadow: "none"
    }
  }
}));

const Top = () => {
  const classes = useStyles();

  return (
    <div>
      <div className="header">
        <div className="header-content">
          <ul className="header-menu">
            <li className="header-item">Sign up</li>
            <li className="header-item">Sign in</li>
          </ul>
        </div>
      </div>
      <div className="top-container">
        <div className="top-form-container">
          <div className="sns-signin">
            <button className="sns-icon-button github">
              <FontAwesomeIcon icon={["fab", "github"]} />
            </button>
            <button className="sns-icon-button twitter">
              <FontAwesomeIcon icon={["fab", "twitter"]} />
            </button>
            <button className="sns-icon-button google">
              <FontAwesomeIcon icon={["fab", "google"]} />
            </button>
          </div>
          <div className="divider"></div>
          <div className="form-content">
            <div className="description-text">or</div>
            <div className="login-form-container">
              <div className="paper-box">
                <IconButton className="form-icon">
                  <PersonOutlineIcon className="icon" />
                </IconButton>
                <InputBase className="auth-text-form" placeholder="Name" />
              </div>
              <div className="paper-box">
                <IconButton className="form-icon">
                  <MailOutlineIcon className="icon" />
                </IconButton>
                <InputBase
                  type="email"
                  className="auth-text-form"
                  placeholder="Email"
                />
              </div>
              <div className="paper-box">
                <IconButton className="form-icon">
                  <LockOutlinedIcon className="icon" />
                </IconButton>
                <InputBase
                  type="password"
                  className="auth-text-form"
                  placeholder="Password"
                />
              </div>
            </div>
            <div className="submit">
              <Button className={classes.button} variant="contained">
                Sign up
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Top;
