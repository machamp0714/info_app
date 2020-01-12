import React, { useState } from "react";
import Validation from "../../hooks/validates";
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
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: ""
  });

  const [messages, setMessages] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleChange = e => {
    const key = e.target.id;
    const value = e.target.value;
    setValues({
      ...values,
      [key]: value
    });
    setMessages({
      ...messages,
      [key]: Validation.formValidates(key, value)
    });
  };

  const handleSubmit = e => {
    e.preventDefault();

    signup(values);
  };

  const canSubmit = () => {
    const errorAttributes = Object.values(messages);
    const validAttributes = Object.values(values);

    const errorExist = errorAttributes.some(e => e !== "");
    const valueExist = validAttributes.some(e => e === "");

    return valueExist || errorExist;
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
                  error={messages.name}
                />
                <div className="error-message">{messages.name}</div>
                <TextInputWithIcon
                  icon={mailIcon}
                  id="email"
                  type="text"
                  placeholder="Email"
                  handleChange={handleChange}
                  error={messages.email}
                />
                <div className="error-message">{messages.email}</div>
                <TextInputWithIcon
                  icon={pwIcon}
                  id="password"
                  type="password"
                  placeholder="Password"
                  handleChange={handleChange}
                  error={messages.password}
                />
                <div className="error-message">{messages.password}</div>
                <div className="center">
                  <PrimaryButton canSubmit={canSubmit} value="Sign up" />
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
