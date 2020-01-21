import React from "react";
import ColumnDetails from "./ColumnDetails";

const ColumnList = ({ columns }) => {
  return (
    <ul>
      {columns.map(column => {
        return <ColumnDetails key={column.id} column={column} />;
      })}
    </ul>
  );
};

export default ColumnList;
