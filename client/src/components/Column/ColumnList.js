import React from "react";
import ColumnDetails from "./ColumnDetails";

const ColumnList = ({ columns }) => {
  return (
    <div className="column-list">
      <ul>
        {columns.map(column => {
          return <ColumnDetails key={column.id} column={column} />;
        })}
      </ul>
    </div>
  );
};

export default ColumnList;
