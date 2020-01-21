import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AddIcon from "@material-ui/icons/Add";
import MenuIcon from "@material-ui/icons/Menu";

const iconStyle = {
  color: "#24292e",
  fontSize: 20,
  "&:hover": {
    path: {
      color: "#11CDEF"
    }
  }
};

const ColumnDetails = ({ column }) => {
  return (
    <li className="column-box">
      <div className="column-header">
        <div className="column-name">{column.name}</div>
        <div className="column-menu">
          <button type="button" className="column-menu-button">
            <AddIcon style={iconStyle} />
          </button>
          <button type="button" className="column-menu-button">
            <MenuIcon style={iconStyle} />
          </button>
        </div>
      </div>
    </li>
  );
};

export default ColumnDetails;
