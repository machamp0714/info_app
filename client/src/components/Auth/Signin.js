import React, { useState } from "react";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import TextInputWithIcon from "../Form/textInputWithIcon";
import Navbar from "../Layout/Navbar";
import PrimaryButton from "../Button/PrimaryButton";
import LocalStorage from "../Auth/LocalStorage";
import IconButton from "../Button/IconButton";

const mailIcon = <MailOutlineIcon className="icon" />;
const pwIcon = <LockOutlinedIcon className="icon" />;

const Signin = ({ user, headers, loggedIn, signin, getOAuthUrl }) => {
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

  const handleClick = () => {
    getOAuthUrl();
  };

  if (loggedIn) {
    return <LocalStorage headers={headers} user={user} />;
  }

  return (
    <div>
      <Navbar />
      <div className="top-container">
        <div className="top-form-content signin-form-content-h m-auto">
          <div className="sns-login-content">
            <IconButton handleClick={handleClick} icon="github" />
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
    </div>
  );
};

export default Signin;
