import React, { useState, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import DashboardContext from "../../contexts/DashboardContext";

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
  const { handleWorkspaceBack } = useContext(DashboardContext);
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
    <div className="mt-1 p-1">
      <span
        onClick={handleWorkspaceBack}
        className="text-gray under-decoration mb-1 d-inline-block back-link"
      >
        Back
      </span>
      <form onSubmit={handleSubmit} className="d-flex form-group">
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
  );
};

export default WorkspaceItem;
