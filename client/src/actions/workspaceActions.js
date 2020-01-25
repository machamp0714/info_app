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

const deleteSuccess = workspace_id => ({
  type: "DELETE_WORKSPACE_SUCCESS",
  payload: workspace_id
});

const deleteError = error => ({
  type: "DELETE_WORKSPACE_ERROR",
  payload: error.response.error
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

export const deleteWorkspace = workspace_id => {
  return dispatch => {
    secureHTTP
      .delete(`/api/workspaces/${workspace_id}`)
      .then(() => dispatch(deleteSuccess(workspace_id)))
      .catch(error => dispatch(deleteError(error)));
  };
};
