import { secureHTTP, http } from "../config/axios";

const getColumnsLoading = () => ({
  type: "GET_COLUMNS_LOADING"
});

const getColumnsSuccess = response => ({
  type: "GET_COLUMNS_SUCCESS",
  payload: response.data
});

const getColumnsError = error => ({
  type: "GET_COLUMNS_ERROR",
  payload: error.response.data
});

const createSuccess = response => ({
  type: "CREATE_COLUMN_SUCCESS",
  payload: response.data
});

const createError = error => ({
  type: "CRAEAT_COLUMN_ERROR",
  payload: error.response.data
});

const editSuccess = (response, column_id) => ({
  type: "EDIT_COLUMN_SUCCESS",
  payload: response.data,
  meta: column_id
});

const editError = error => ({
  type: "EDIT_COLUMN_ERROR",
  payload: error.response.data
});

const deleteSuccess = column_id => ({
  type: "DELETE_COLUMN_SUCCESS",
  payload: column_id
});

const deleteError = error => ({
  type: "DELETE_COLUMN_ERROR",
  payload: error.response.data
});

export const getColumns = workspace_id => {
  return dispatch => {
    dispatch(getColumnsLoading());
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

export const editColumn = (column_id, params) => {
  return dispatch => {
    secureHTTP
      .patch(`/api/columns/${column_id}`, params)
      .then(response => dispatch(editSuccess(response, column_id)))
      .catch(error => dispatch(editError(error)));
  };
};

export const deleteColumn = column_id => {
  return dispatch => {
    secureHTTP
      .delete(`/api/columns/${column_id}`)
      .then(response => dispatch(deleteSuccess(column_id)))
      .catch(error => dispatch(deleteError(error)));
  };
};
