import React from "react";
import ColumnDetails from "./ColumnDetails";
import AddIcon from "@material-ui/icons/Add";

const ColumnList = ({ columns }) => {
  return (
    <div className="column-dashboard">
      <ul className="column-list">
        {columns.map(column => {
          return <ColumnDetails key={column.id} column={column} />;
        })}
      </ul>
      <div className="add-column-body">
        <button type="button" className="add-column-button">
          <AddIcon style={{ fontSize: 16 }} />
          <span className="column-button-value">Add Column</span>
        </button>
      </div>
    </div>
  );
};

export default ColumnList;
