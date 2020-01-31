import React from "react";
import AccountSettings from "../Account/AccountSettings";

const Profile = ({ user }) => {
  return (
    <AccountSettings user={user}>
      <div>profile</div>
    </AccountSettings>
  );
};

export default Profile;
