import { request, client } from "../config/axios";

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
    request
      .post("/api/workspaces", param)
      .then(response => dispatch(createSuccess(response)))
      .catch(error => dispatch(createError(error)));
  };
};

export const getWorkspaces = () => {
  return dispatch => {
    client
      .get("/api/workspaces")
      .then(response => dispatch(getSuccess(response)))
      .catch(error => dispatch(getError(error)));
  };
};
