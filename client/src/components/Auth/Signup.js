import React, { useState } from "react";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import TextInputWithIcon from "../Form/textInputWithIcon";
import Navbar from "../Layout/Navbar";
import PrimaryButton from "../Button/PrimaryButton";
import LocalStorage from "./LocalStorage";
import IconButton from "../Button/IconButton";
import bg from "../../images/background.png";

const personIcon = <PersonOutlineIcon className="icon" />;
const mailIcon = <MailOutlineIcon className="icon" />;
const pwIcon = <LockOutlinedIcon className="icon" />;

const Signup = ({ user, headers, loggedIn, signup, getOAuthUrl }) => {
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

  const handleClick = () => {
    getOAuthUrl();
  };

  const style = {
    backgroundImage: `url(${bg})`,
    height: "100vh"
  };

  if (loggedIn) {
    return <LocalStorage headers={headers} user={user} />;
  }

  return (
    <div style={style}>
      <Navbar />
      <div className="top-container">
        <div className="top-form-content top-form-content-h m-auto">
          <div className="sns-login-content">
            <IconButton handleClick={handleClick} icon="github" />
          </div>
          <div className="divider"></div>
          <div className="form-content">
            <div className="description-text center">or</div>
            <div className="login-form-body">
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
                  <PrimaryButton value="Sign up" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
