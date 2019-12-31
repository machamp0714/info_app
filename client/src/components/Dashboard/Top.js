import React, { useState } from "react";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import TextInputWithIcon from "../Form/textInputWithIcon";
import Navbar from "../Layout/Navbar";
import PrimaryButton from "../Button/PrimaryButton";
import LocalStorage from "../Auth/LocalStorage";
import IconButton from "../Button/IconButton";
import axios from "axios";

const personIcon = <PersonOutlineIcon className="icon" />;
const mailIcon = <MailOutlineIcon className="icon" />;
const pwIcon = <LockOutlinedIcon className="icon" />;

const Top = ({ headers, user, loggedIn, signup }) => {
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
    axios
      .get("http://localhost:3001/api/github_oauth_url")
      .then(response => {
        const loginWindow = openLoginWindow(response.data.url);
        loginWindow.focus();
      })
      .catch(error => {
        console.log(error);
      });
  };

  const openLoginWindow = url => {
    const width = 500;
    const height = 600;
    const windowX = (window.screen.width - width) / 2;
    const windowY = (window.screen.height - height) / 2;
    const title = "ログイン - Githubアカウント";
    window.open(
      url,
      title,
      `top=${windowY},left=${windowX},width=${width},height=${height}`
    );
  };

  if (loggedIn) {
    return <LocalStorage headers={headers} user={user} />;
  }

  return (
    <div>
      <Navbar />
      <div className="top-container">
        <div className="top-form-content top-form-content-h ml-auto">
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
                  <PrimaryButton value="sign up" />
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
