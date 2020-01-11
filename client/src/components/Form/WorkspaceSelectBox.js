import React, { useState } from "react";
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

const WorkspaceSelectBox = ({ workspaces }) => {
  const [value, setValue] = useState(workspaces[0]);

  const handleChange = e => {
    setValue(e.target.value);
  };

  return (
    <CssTextField
      id="workspaces"
      select
      value={value}
      onChange={handleChange}
      variant="filled"
    >
      {workspaces.map(item => (
        <MenuItem key={item.id} value={item}>
          {item.name}
        </MenuItem>
      ))}
    </CssTextField>
  );
};

export default WorkspaceSelectBox;
