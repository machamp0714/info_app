import React, { useState, useEffect } from "react";
import AddIcon from "@material-ui/icons/Add";
import AddTask from "../../containers/Task/AddTask";
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

const ColumnDetails = ({ column, tasks, getTasks }) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    getTasks(column.id);
  }, [getTasks]);

  const handleToggle = () => {
    setOpen(prevOpen => !prevOpen);
  };

  return (
    <li className="column-box">
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
      <div className="task-list">
        {tasks.map(task => (
          <div key={task.id}>{task.content}</div>
        ))}
      </div>
    </li>
  );
};

export default ColumnDetails;
