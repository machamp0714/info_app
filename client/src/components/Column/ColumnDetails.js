import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import AddTask from "../../containers/Task/AddTask";
import ColumnMenu from "../../containers/Column/ColumnMenu";
import TaskList from "../../containers/Task/TaskList";

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
  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen(prevOpen => !prevOpen);
  };

  return (
    <li className="column-box d-flex flex-column flex-auto">
      <div className="column-header">
        <div className="column-name">{column.name}</div>
        <div className="column-menu">
          <button
            onClick={handleToggle}
            type="button"
            className="column-menu-button button-none"
          >
            <AddIcon style={iconStyle} />
          </button>
          <ColumnMenu column={column} />
        </div>
      </div>
      {open && <AddTask column={column} handleToggle={handleToggle} />}
      <TaskList column={column} />
    </li>
  );
};

export default ColumnDetails;
