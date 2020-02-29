import React, { useState, useEffect, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import Divider from "@material-ui/core/Divider";
import DashboardContext from "../../contexts/DashboardContext";
import WorkspaceDetails from "../Workspace/WorkspaceDetails";

const useStyles = makeStyles(() => ({
  input: {
    width: 330,
    paddingLeft: 10
  },
  button: {
    transition: "none",
    "&:hover": {
      borderRadius: 0,
      backgroundColor: "#172b4d",
      "& .MuiSvgIcon-root": {
        color: "#fff"
      }
    }
  },
  icon: {
    color: "#172b4d"
  }
}));

const WorkspaceItem = ({ createWorkspace }) => {
  const classes = useStyles();
  const { workspaces, handleWorkspaceBack } = useContext(DashboardContext);
  const [name, setName] = useState("");

  const handleChange = e => {
    setName(e.target.value);
  };

  const handleSubmit = e => {
    const param = {
      workspace: {
        name: name
      }
    };
    createWorkspace(param);
    setName("");
    e.preventDefault();
  };

  return (
    <>
      <div className="mt-1 mb-1 p-1">
        <span
          onClick={handleWorkspaceBack}
          className="text-gray under-decoration mb-1 d-inline-block back-link"
        >
          Back
        </span>
        <form onSubmit={handleSubmit} className="d-flex  form-group">
          <InputBase
            autoFocus
            onChange={handleChange}
            value={name}
            className={classes.input}
            placeholder="Create Workspace"
          />
          <IconButton
            onClick={handleSubmit}
            className={classes.button}
            type="submit"
          >
            <PlayArrowIcon className={classes.icon} />
          </IconButton>
        </form>
      </div>
      <Divider />
      <div className="p-1">
        <div className="text-gray drawer-menu-head">workspaces</div>
        <ul className="mt-1">
          {workspaces.map(workspace => (
            <WorkspaceDetails key={workspace.id} workspace={workspace} />
          ))}
        </ul>
      </div>
    </>
  );
};

export default WorkspaceItem;
