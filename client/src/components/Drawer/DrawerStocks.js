import React, { useEffect, useContext } from "react";
import StocksDetails from "./StockDetails";
import ProgressBar from "../Layout/ProgressBar";
import DashboardContext from "../../contexts/DashboardContext";

const DrawerStocks = ({ isLoading, stocks, getStocks }) => {
  const { handleStocksBack } = useContext(DashboardContext);

  useEffect(() => {
    getStocks();
  }, [getStocks]);

  return (
    <>
      {isLoading ? (
        <div className="mt-2 center">
          <ProgressBar />
        </div>
      ) : (
        <>
          <div className="pl-1 pr-1 mt-1">
            <span
              onClick={handleStocksBack}
              className="text-gray under-decoration mb-1 d-inline-block back-link"
            >
              Back
            </span>
          </div>
          <ul className="overflow-y pl-1 pr-1">
            {stocks.map(stock => (
              <StocksDetails key={stock.id} stock={stock} />
            ))}
          </ul>
        </>
      )}
    </>
  );
};

export default DrawerStocks;
