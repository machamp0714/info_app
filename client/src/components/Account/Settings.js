import React from "react";
import AccountSettings from "../Account/AccountSettings";

const Settings = ({ user, url, getAuthorizeURL }) => {
  const handleClick = () => {
    getAuthorizeURL();
  };

  if (url !== "") {
    window.location.href = url;
  }

  return (
    <AccountSettings user={user}>
      <div onClick={handleClick}>Qiitaと連携</div>
    </AccountSettings>
  );
};

export default Settings;
