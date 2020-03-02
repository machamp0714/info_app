import { secureHTTP } from "../config/axios";

const getOgpLoading = () => ({
  type: "GET_OGP_LOADING"
});

const getOgpSuccess = response => ({
  type: "GET_OGP_SUCCESS",
  payload: response.data
});

const getOgpError = error => ({
  type: "GET_OGP_ERROR",
  payload: error.response.data
});

export const getOgp = url => {
  return dispatch => {
    dispatch(getOgpLoading());
    secureHTTP
      .post("/api/ogp", { url: url })
      .then(response => dispatch(getOgpSuccess(response)))
      .catch(error => dispatch(getOgpError(error)));
  };
};
