import { http, secureHTTP } from "../config/axios";

const getSuccess = response => ({
  type: "GET_TASKS_SUCCESS",
  payload: response.data
});

const getError = error => ({
  type: "GET_TASKS_ERROR",
  payload: error.response.data
});

export const getTasks = column_id => {
  return dispatch => {
    http
      .get(`/api/columns/${column_id}/tasks`)
      .then(response => dispatch(getSuccess(response)))
      .catch(error => dispatch(getError(error)));
  };
};
