import { http } from "../config/axios";

const getURLError = error => ({
  type: "GET_URL_ERROR",
  payload: error
});

const getIsAsync = response => ({
  type: "CHECK_ASYNC",
  payload: response.data.isAsync
});

const getIsAsyncError = error => ({
  type: "CHECK_ASYNC_ERROR",
  payload: error
});

const getStocksLoading = () => ({
  type: "GET_STOCKS_LOADING"
});

const getStocksSuccess = response => ({
  type: "GET_STOCKS_SUCCESS",
  payload: response.data.qiita_stocks,
  meta: response.data.meta.pagination
});

const getStocksError = error => ({
  type: "GET_STOCKS_ERROR",
  payload: error
});

export const getAuthorizeURL = () => {
  return dispatch => {
    http
      .get("/api/qiita_token")
      .then(response => {
        window.location.href = response.data;
      })
      .catch(error => dispatch(getURLError(error)));
  };
};

export const checkAsync = jobId => {
  return dispatch => {
    http
      .get(`/api/qiita_stocks/check_async?job_id=${jobId}`)
      .then(response => dispatch(getIsAsync(response)))
      .catch(error => dispatch(getIsAsyncError(error)));
  };
};

export const getStocks = () => {
  return dispatch => {
    dispatch(getStocksLoading());
    http
      .get("/api/qiita_stocks")
      .then(response => dispatch(getStocksSuccess(response)))
      .catch(error => dispatch(getStocksError(error)));
  };
};
