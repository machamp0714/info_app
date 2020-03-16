import { http } from "../config/axios";

const getURLError = error => ({
  type: "GET_URL_ERROR",
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
