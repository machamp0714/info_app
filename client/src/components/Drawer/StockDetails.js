import React from "react";

const StockDetails = ({ stock }) => {
  return (
    <li className="item-card drag-item mb-1">
      <div className="d-flex flex-row">
        <div className="flex-auto min-width-0 position-relative">
          <div className="pl-5 p-1">
            <div className="mr-4 d-flex align-content-between flex-column">
              <div className="workspace-content">
                <p className="mb-1">{stock.title}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

export default StockDetails;
