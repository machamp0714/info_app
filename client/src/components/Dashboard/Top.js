import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TextInputWithIcon from "../Form/textInputWithIcon";
import Navbar from "../Layout/Navbar";

const useStyles = makeStyles(theme => ({
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

const personIcon = <PersonOutlineIcon className="icon" />;
const mailIcon = <MailOutlineIcon className="icon" />;
const pwIcon = <LockOutlinedIcon className="icon" />;

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
      <Navbar />
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
            <div className="description-text center">or</div>
            <div className="login-form-container">
              <form onSubmit={handleSubmit}>
                <TextInputWithIcon
                  icon={personIcon}
                  id="name"
                  type="text"
                  placeholder="Name"
                  handleChange={handleChange}
                />
                <TextInputWithIcon
                  icon={mailIcon}
                  id="email"
                  type="email"
                  placeholder="Email"
                  handleChange={handleChange}
                />
                <TextInputWithIcon
                  icon={pwIcon}
                  id="password"
                  type="password"
                  placeholder="Password"
                  handleChange={handleChange}
                />
                <div className="center">
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

export default Top;
