import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const IconButton = ({ icon }) => {
  return (
    <button className={"sns-icon-button" + " " + icon}>
      <FontAwesomeIcon icon={["fab", icon]} />
      <span className="button-text">{icon}</span>
    </button>
  );
};

export default IconButton;
