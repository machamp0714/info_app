import { secureHTTP, http } from "../config/axios";

const getColumnsSuccess = response => ({
  type: "GET_COLUMNS_SUCCESS",
  payload: response.data
});

const getColumnsError = error => ({
  type: "GET_COLUMNS_ERROR",
  payload: error.response.data
});

const createSuccess = response => ({
  type: "CREATE_SUCCESS",
  payload: response.data
});

const createError = error => ({
  type: "CRAEAT_ERROR",
  payload: error.response.data
});

export const getColumns = workspace_id => {
  return dispatch => {
    http
      .get(`/api/workspaces/${workspace_id}/columns`)
      .then(response => dispatch(getColumnsSuccess(response)))
      .catch(error => dispatch(getColumnsError(error)));
  };
};

export const createColumn = (workspace_id, params) => {
  return dispatch => {
    secureHTTP
      .post(`/api/workspaces/${workspace_id}/columns`, params)
      .then(response => dispatch(createSuccess(response)))
      .catch(error => dispatch(createError(error)));
  };
};
