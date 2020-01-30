import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AccountSettings from "./AccountSettings";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  button: {
    height: "40px",
    backgroundColor: "#11CDEF",
    color: "#FFFFFF",
    boxShadow: "none",
    marginLeft: "auto",
    "&:hover": {
      backgroundColor: "#11CDEF",
      boxShadow: "none"
    }
  }
}));

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
  const classes = useStyles();

  useEffect(() => {
    getWorkspaces();
  }, [getWorkspaces]);

  const handleDeleteClick = workspace_id => {
    deleteWorkspace(workspace_id);
  };

  return (
    <AccountSettings user={user}>
      <div className="d-flex mb-2">
        <Button className={classes.button} variant="contained">
          New Workspace
        </Button>
      </div>
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
