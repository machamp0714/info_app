import React from "react";
import AccountSettings from "../Account/AccountSettings";

const Settings = ({ user, getAuthorizeURL }) => {
  const handleClick = () => {
    getAuthorizeURL();
  };

  return (
    <AccountSettings user={user}>
      <button onClick={handleClick}>Qiitaと連携</button>
    </AccountSettings>
  );
};

export default Settings;
