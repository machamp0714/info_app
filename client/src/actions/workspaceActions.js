import { request } from "../config/axios";

const createSuccess = response => ({
  type: "CREATE_SUCCESS",
  payload: response.data
});

const createError = error => ({
  type: "CREATE_ERROR",
  payload: error
});

export const createWorkspace = name => {
  return dispatch => {
    request
      .post("/api/workspaces", name)
      .then(response => dispatch(createSuccess(response)))
      .catch(error => dispatch(createError(error)));
  };
};
