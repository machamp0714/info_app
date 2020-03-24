import React, { useEffect } from "react";
import StocksDetails from "./StockDetails";

const DrawerStocks = ({ isLoading, stocks, getStocks }) => {
  useEffect(() => {
    getStocks();
  }, [getStocks]);

  return (
    <>
      {isLoading ? (
        <div>loading</div>
      ) : (
        <ul className="mt-1 mb-1 p-1">
          {stocks.map(stock => (
            <StocksDetails key={stock.id} stock={stock} />
          ))}
        </ul>
      )}
    </>
  );
};

export default DrawerStocks;
