import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const IconButton = ({ icon, handleClick }) => {
  return (
    <button onClick={handleClick} className={"sns-icon-button " + icon}>
      <FontAwesomeIcon icon={["fab", icon]} />
      <span className="button-text">{icon}</span>
    </button>
  );
};

export default IconButton;
