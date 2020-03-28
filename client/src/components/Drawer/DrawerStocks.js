import React, { useState, useEffect, useContext } from "react";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import StocksDetails from "./StockDetails";
import ProgressBar from "../Layout/ProgressBar";
import DashboardContext from "../../contexts/DashboardContext";
import { http } from "../../config/axios";

const DrawerStocks = () => {
  const { handleStocksBack } = useContext(DashboardContext);

  const [stocks, setStocks] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [pagination, setPagination] = useState({
    currentPage: 1,
    nextPage: null,
    prevPage: null,
    totalCount: null,
    totalPages: null
  });

  const { currentPage, nextPage, prevPage, totalCount, totalPages } = pagination;

  useEffect(() => {
    const getStocks = async () => {
      const response = await http.get(`/api/qiita_stocks?page=${currentPage}`);

      setStocks(response.data.qiita_stocks);
      setLoading(false);
      setPagination({
        currentPage: response.data.meta.pagination.current_page,
        nextPage: response.data.meta.pagination.next_page,
        prevPage: response.data.meta.pagination.prev_page,
        totalCount: response.data.meta.pagination.total_count,
        totalPages: response.data.meta.pagination.total_pages
      });
    };

    getStocks();
  }, [currentPage]);

  const handlePrevButtonClick = () => {
    setPagination({ ...pagination, currentPage: currentPage - 1 });
  };

  const handleNextButtonClick = () => {
    setPagination({ ...pagination, currentPage: currentPage + 1 });
  };

  const hasNextPage = () => {
    return nextPage === null;
  };

  const hasPrevPage = () => {
    return prevPage === null;
  };

  const fetchResult = () => {
    const total = `${totalCount}件中`;
    if (totalCount <= 20) {
      return `${total} 1~${totalCount} のストックを表示しています`;
    } else {
      if (currentPage === 1) {
        return `${total} 1~20 のストックを表示しています`;
      } else if (currentPage === totalPages) {
        return `${total} ${totalCount - stocks.length + 1}~${totalCount} のストックを表示しています`
      } else {
        const start = (currentPage - 1) * 20 + 1;
        const end = start + 20 - 1;

        return `${total} ${start}~${end} のストックを表示しています`;
      }
    }
  };

  return (
    <>
      {isLoading ? (
        <div className="mt-2 center">
          <ProgressBar />
        </div>
      ) : (
        <div className="d-flex flex-column footer-height">
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
          <div className="pagination">
            <div className="text-gray fetch-result">{fetchResult()}</div>
            <div className="pagi-navigate">
              <button
                onClick={handlePrevButtonClick}
                disabled={hasPrevPage()}
                className="prev-button button-none"
              >
                <NavigateBeforeIcon />
              </button>
              <button
                onClick={handleNextButtonClick}
                disabled={hasNextPage()}
                className="next-button button-none"
              >
                <NavigateNextIcon />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DrawerStocks;
