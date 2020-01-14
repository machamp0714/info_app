import React from "react";
import InputBase from "@material-ui/core/InputBase";
import clsx from "clsx";

const TextInputWithIcon = ({
  icon,
  id,
  placeholder,
  type,
  handleChange,
  error
}) => {
  return (
    <div className={clsx("paper-box", { "mb-4": !error })}>
      <div className="icon-box">{icon}</div>
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
