import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import InputBase from "@material-ui/core/InputBase";
import clsx from "clsx";

const useStyles = makeStyles(theme => ({
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

const TextInputWithIcon = ({
  icon,
  id,
  placeholder,
  type,
  handleChange,
  error
}) => {
  const classes = useStyles();

  return (
    <div className={clsx("paper-box", { ["mb-4"]: !error })}>
      <IconButton className={classes.button}>{icon}</IconButton>
      <InputBase
        id={id}
        type={type}
        className="auth-text-field"
        placeholder={placeholder}
        onChange={handleChange}
        autoComplete="off"
      />
    </div>
  );
};

export default TextInputWithIcon;
