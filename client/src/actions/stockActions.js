import { http } from "../config/axios";

const getURLSuccess = response => ({
  type: "GET_URL_SUCCESS",
  payload: response.data
});

const getURLError = error => ({
  type: "GET_URL_ERROR",
  payload: error.response.data
});

export const getAuthorizeURL = () => {
  return dispatch => {
    http
      .get("/api/qiita_token")
      .then(response => dispatch(getURLSuccess(response)))
      .catch(error => dispatch(getURLError(error)));
  };
};
