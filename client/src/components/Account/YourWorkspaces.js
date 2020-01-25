import React from "react";
import AccountSettings from "./AccountSettings";

const YourWorkspaces = ({ user }) => {
  return (
    <AccountSettings user={user}>
      <div>workspaces</div>
    </AccountSettings>
  );
};

export default YourWorkspaces;
