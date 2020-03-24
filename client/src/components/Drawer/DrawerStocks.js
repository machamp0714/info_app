import React, { useEffect, useContext } from "react";
import StocksDetails from "./StockDetails";
import DashboardContext from "../../contexts/DashboardContext";

const DrawerStocks = ({ isLoading, stocks, getStocks }) => {
  const { handleStocksBack } = useContext(DashboardContext);

  useEffect(() => {
    getStocks();
  }, [getStocks]);

  return (
    <>
      {isLoading ? (
        <div>loading</div>
      ) : (
        <ul className="mb-1 p-1 overflow-y">
          <span
            onClick={handleStocksBack}
            className="text-gray under-decoration mb-1 d-inline-block back-link"
          >
            Back
          </span>
          {stocks.map(stock => (
            <StocksDetails key={stock.id} stock={stock} />
          ))}
        </ul>
      )}
    </>
  );
};

export default DrawerStocks;
