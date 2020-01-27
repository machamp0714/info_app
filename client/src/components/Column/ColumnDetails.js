import React from "react";
import AddIcon from "@material-ui/icons/Add";
import ColumnMenu from "../../containers/Column/ColumnMenu";

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
          <button type="button" className="column-menu-button button-none">
            <AddIcon style={iconStyle} />
          </button>
          <ColumnMenu column={column} />
        </div>
      </div>
    </li>
  );
};

export default ColumnDetails;
