import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import InputBase from "@material-ui/core/InputBase";

const useStyles = makeStyles(() => ({
  button: {
    "&:hover": {
      backgroundColor: "#FFFFFF",
      cursor: "default"
    },
    "&:focus": {
      backgroundColor: "#FFFFFF"
    }
  }
}));

const TextInputWithIcon = ({ icon, id, placeholder, type, handleChange }) => {
  const classes = useStyles();

  return (
    <div className="paper-box">
      <IconButton className={classes.button}>{icon}</IconButton>
      <InputBase
        id={id}
        type={type}
        className="auth-text-form"
        placeholder={placeholder}
        onChange={handleChange}
      />
    </div>
  );
};

export default TextInputWithIcon;
