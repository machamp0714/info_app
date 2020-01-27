import React, { useEffect } from "react";
import AccountSettings from "./AccountSettings";

const YourWorkspaces = ({ user, workspaces, getWorkspaces }) => {
  useEffect(() => {
    getWorkspaces();
  }, [getWorkspaces]);

  console.log(workspaces);

  return (
    <AccountSettings user={user}>
      <ul className="workspace-list">
        {workspaces.map(workspace => (
          <li key={workspace.id}>{workspace.name}</li>
        ))}
      </ul>
    </AccountSettings>
  );
};

export default YourWorkspaces;
