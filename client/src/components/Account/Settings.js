import React from "react";
import AccountSettings from "../Account/AccountSettings";

const Settings = ({ user }) => {
  return (
    <AccountSettings user={user}>
      <div>settings</div>
    </AccountSettings>
  );
};

export default Settings;
