import { secureHTTP, http } from "../config/axios";

const requestLoading = () => ({
  type: "GET_LOADING"
});

const getSuccess = response => ({
  type: "GET_SUCCESS",
  payload: response.data
});

const getError = error => ({
  type: "GET_ERROR",
  payload: error
});

const createSuccess = response => ({
  type: "CREATE_SUCCESS",
  payload: response.data
});

const createError = error => ({
  type: "CREATE_ERROR",
  payload: error
});

export const createWorkspace = param => {
  return dispatch => {
    secureHTTP
      .post("/api/workspaces", param)
      .then(response => dispatch(createSuccess(response)))
      .catch(error => dispatch(createError(error.response.data.errors)));
  };
};

export const getWorkspaces = () => {
  return dispatch => {
    dispatch(requestLoading());
    http
      .get("/api/workspaces")
      .then(response => dispatch(getSuccess(response)))
      .catch(error => dispatch(getError(error)));
  };
};
