import React from "react";
import { withStyles } from "@material-ui/styles";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";

const CssTextField = withStyles({
  root: {
    backgroundColor: "#fff",
    borderRadius: 4,
    minWidth: 250,
    "& .MuiFilledInput-root": {
      backgroundColor: "#fff",
      borderRadius: 4,
      "&:hover": {
        backgroundColor: "#fff"
      }
    },
    "& .MuiFilledInput-input": {
      padding: 12
    },
    "& .MuiFilledInput-underline": {
      "&:before": {
        borderBottom: "none"
      },
      "&:after": {
        borderBottom: "none"
      }
    },
    "& .MuiSelect-select": {
      "&:focus": {
        backgroundColor: "#fff",
        borderRadius: 4
      }
    }
  }
})(TextField);

const WorkspaceSelectBox = ({
  workspaces,
  workspace,
  handleSelectWorkspace
}) => {
  return (
    <CssTextField
      id="workspaces"
      select
      value={workspace}
      onChange={handleSelectWorkspace}
      variant="filled"
    >
      {workspaces.map(workspace => (
        <MenuItem key={workspace.id} value={workspace}>
          {workspace.name}
        </MenuItem>
      ))}
    </CssTextField>
  );
};

export default WorkspaceSelectBox;
