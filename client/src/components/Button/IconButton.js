import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const IconButton = ({ icon, handleClick }) => {
  return (
    <div onClick={handleClick} className="paper-box sns-icon-button">
      <FontAwesomeIcon icon={["fab", icon]} size="lg" />
      <span className="button-text">Github</span>
    </div>
  );
};

export default IconButton;
