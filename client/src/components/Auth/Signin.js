import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import Validation from "../../utils/validates";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import TextInputWithIcon from "../Form/textInputWithIcon";
import Navbar from "../Layout/Navbar";
import PrimaryButton from "../Button/PrimaryButton";
import IconButton from "../Button/IconButton";
import bg from "../../images/background.png";

const mailIcon = <MailOutlineIcon className="icon" />;
const pwIcon = <LockOutlinedIcon className="icon" />;

const Signin = ({ user, headers, loggedIn, errors, signin, getOAuthUrl }) => {
  const [values, setValues] = useState({
    email: "",
    password: ""
  });

  const [messages, setMessages] = useState({
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

    signin(values);
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
    localStorage.setItem("access-token", headers["access-token"]);
    localStorage.setItem("client", headers["client"]);
    localStorage.setItem("uid", headers["uid"]);

    return <Redirect to={"/" + user.name} />;
  }

  return (
    <div style={style}>
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
              <div className="error-message">
                {errors.length > 0 &&
                  errors[0].status === 401 &&
                  errors[0].message}
              </div>
              <form onSubmit={handleSubmit}>
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
                  <PrimaryButton canSubmit={canSubmit} value="Sign in" />
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
