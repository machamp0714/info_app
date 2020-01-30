import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AccountSettings from "./AccountSettings";
import Button from "@material-ui/core/Button";
import StandardModal from "../Shared/StandardModal";
import WorkspaceMenu from "../../containers/Account/WorkspaceMenu";

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

const YourWorkspaces = ({
  user,
  workspaces,
  getWorkspaces,
  createWorkspace
}) => {
  const classes = useStyles();

  const [name, setName] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    getWorkspaces();
  }, [getWorkspaces]);

  const handleOpenModal = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = e => {
    setName(e.target.value);
  };

  const clearState = () => {
    setName("");
    handleClose();
  };

  const handleClick = () => {
    createWorkspace({ name: name });
    clearState();
  };

  const handleSubmit = e => {
    createWorkspace({ name: name });
    clearState();
    e.preventDefault();
  };

  return (
    <AccountSettings user={user}>
      <div className="d-flex mb-2">
        <Button
          onClick={handleOpenModal}
          className={classes.button}
          variant="contained"
        >
          New Workspace
        </Button>
        <StandardModal
          name={name}
          open={open}
          title="Add Workspace"
          placeholder="Enter workspace name"
          handleClose={handleClose}
          handleChange={handleChange}
          handleClick={handleClick}
          handleSubmit={handleSubmit}
        />
      </div>
      <ul className="workspace-list">
        {workspaces.map(workspace => (
          <li className="your-workspace" key={workspace.id}>
            <div className="workspace-info">
              <span className="workspace-name">{workspace.name}</span>
            </div>
            <WorkspaceMenu workspace={workspace} />
          </li>
        ))}
      </ul>
    </AccountSettings>
  );
};

export default YourWorkspaces;
