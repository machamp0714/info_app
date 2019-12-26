import React, { useState } from "react";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TextInputWithIcon from "../Form/textInputWithIcon";
import Navbar from "../Layout/Navbar";
import PrimaryButton from "../Button/PrimaryButton";
import { Redirect } from "react-router-dom";

const mailIcon = <MailOutlineIcon className="icon" />;
const pwIcon = <LockOutlinedIcon className="icon" />;

const Signin = ({ user, headers, loggedIn, signin }) => {
  const [values, setState] = useState({
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

    signin(values);
  };

  if (loggedIn) {
    localStorage.setItem("access-token", headers["access-token"]);
    localStorage.setItem("client", headers["client"]);
    localStorage.setItem("uid", headers["uid"]);
    localStorage.setItem("user", JSON.stringify(user));

    return <Redirect to={"/" + user.name} />;
  }

  return (
    <div>
      <Navbar />
      <div className="top-form-content m-auto">
        <div className="sns-login-content">
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
          <div className="login-form-body">
            <form onSubmit={handleSubmit}>
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
                <PrimaryButton value="Sign in" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
