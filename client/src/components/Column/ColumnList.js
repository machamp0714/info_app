import React from "react";
import ColumnDetails from "./ColumnDetails";

const ColumnList = ({ columns }) => {
  return (
    <div className="column-dashboard">
      <ul className="column-list">
        {columns.map(column => {
          return <ColumnDetails key={column.id} column={column} />;
        })}
      </ul>
    </div>
  );
};

export default ColumnList;
