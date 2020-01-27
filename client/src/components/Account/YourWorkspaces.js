import React, { useEffect } from "react";
import AccountSettings from "./AccountSettings";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";

const iconStyle = {
  color: "#4E545A",
  fontSize: 20,
  "&:hover": {
    path: {
      color: "#11CDEF"
    }
  }
};

const YourWorkspaces = ({
  user,
  workspaces,
  getWorkspaces,
  deleteWorkspace
}) => {
  useEffect(() => {
    getWorkspaces();
  }, [getWorkspaces]);

  const handleDeleteClick = workspace_id => {
    deleteWorkspace(workspace_id);
  };

  return (
    <AccountSettings user={user}>
      <ul className="workspace-list">
        {workspaces.map(workspace => (
          <li className="your-workspace" key={workspace.id}>
            <div className="workspace-info">
              <span className="workspace-name">{workspace.name}</span>
            </div>
            <div className="workspace-meta">
              <button className="button-none column-menu-button" type="button">
                <EditIcon style={iconStyle} />
              </button>
              <button
                className="button-none column-menu-button"
                type="button"
                onClick={() => handleDeleteClick(workspace.id)}
              >
                <DeleteIcon style={iconStyle} />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </AccountSettings>
  );
};

export default YourWorkspaces;
