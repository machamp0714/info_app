import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import IconButton from "@material-ui/core/IconButton";
import InputBase from "@material-ui/core/InputBase";
import Button from "@material-ui/core/Button";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { signup } from "../../actions/authActions";

const useStyles = makeStyles(() => ({
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

const Top = ({ signup }) => {
  const classes = useStyles();
  const [values, setState] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleChange = e => {
    setState({
      ...values,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();

    signup(values);
  };

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
              <form onSubmit={handleSubmit}>
                <div className="paper-box">
                  <IconButton className="form-icon">
                    <PersonOutlineIcon className="icon" />
                  </IconButton>
                  <InputBase
                    id="name"
                    className="auth-text-form"
                    placeholder="Name"
                    onChange={handleChange}
                  />
                </div>
                <div className="paper-box">
                  <IconButton className="form-icon">
                    <MailOutlineIcon className="icon" />
                  </IconButton>
                  <InputBase
                    id="email"
                    type="email"
                    className="auth-text-form"
                    placeholder="Email"
                    onChange={handleChange}
                  />
                </div>
                <div className="paper-box">
                  <IconButton className="form-icon">
                    <LockOutlinedIcon className="icon" />
                  </IconButton>
                  <InputBase
                    id="password"
                    type="password"
                    className="auth-text-form"
                    placeholder="Password"
                    onChange={handleChange}
                  />
                </div>
                <div className="submit">
                  <Button
                    type="submit"
                    className={classes.button}
                    variant="contained"
                  >
                    Sign up
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  signup: values => dispatch(signup(values))
});

export default connect(null, mapDispatchToProps)(Top);
