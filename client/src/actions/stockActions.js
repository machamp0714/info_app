import { http } from "../config/axios";
import { openWindow } from "../utils/actions";

const getURLError = error => ({
  type: "GET_URL_ERROR",
  payload: error
});

export const getAuthorizeURL = () => {
  return dispatch => {
    http
      .get("/api/qiita_token")
      .then(response => {
        const window = openWindow(response.data, "Qiita");
        window.focus();
      })
      .catch(error => dispatch(getURLError(error)));
  };
};
