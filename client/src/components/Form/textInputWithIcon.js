import React from "react";
import IconButton from "@material-ui/core/IconButton";
import InputBase from "@material-ui/core/InputBase";

const TextInputWithIcon = ({ icon, id, placeholder, type, handleChange }) => {
  return (
    <div className="paper-box">
      <IconButton className="form-icon">{icon}</IconButton>
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
