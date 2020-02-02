import React, { useState } from "react";
import StandardModal from "../Shared/StandardModal";
import ColumnDetails from "../../containers/Column/ColumnDetails";
import AddIcon from "@material-ui/icons/Add";

const ColumnList = ({
  workspace,
  columns,
  open,
  handleClose,
  handleClickOpen,
  createColumn
}) => {
  const [name, setName] = useState("");

  const handleChange = e => {
    setName(e.target.value);
  };

  const handleClick = () => {
    const params = {
      name: name
    };
    createColumn(workspace.id, params);
    setName("");
    handleClose();
  };

  const handleSubmit = e => {
    const params = {
      name: name
    };
    createColumn(workspace.id, params);
    setName("");
    e.preventDefault();
    handleClose();
  };

  return (
    <div className="column-dashboard">
      <ul className="column-list d-flex">
        {columns.map(column => {
          return <ColumnDetails key={column.id} column={column} />;
        })}
      </ul>
      <div className="add-column-body">
        <button
          type="button"
          onClick={handleClickOpen}
          className="add-column-button"
        >
          <AddIcon style={{ fontSize: 16 }} />
          <span className="column-button-value">Add Column</span>
        </button>
        <StandardModal
          open={open}
          name={name}
          title="Add Column"
          placeholder="Enter column name"
          handleChange={handleChange}
          handleClick={handleClick}
          handleSubmit={handleSubmit}
          handleClose={handleClose}
        />
      </div>
    </div>
  );
};

export default ColumnList;
