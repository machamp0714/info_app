import { http, secureHTTP } from "../config/axios";
import { createColumn } from "./columnAction";

const getSuccess = response => ({
  type: "GET_TASKS_SUCCESS",
  payload: response.data
});

const getError = error => ({
  type: "GET_TASKS_ERROR",
  payload: error.response.data
});

const createSuccess = response => ({
  type: "CREATE_TASK_SUCCESS",
  payload: response.data
});

const createError = error => ({
  type: "CREATE_TASK_ERROR",
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

export const createTask = (column_id, params) => {
  return dispatch => {
    secureHTTP
      .post(`/api/columns/${column_id}/tasks`, params)
      .then(response => dispatch(createSuccess(response)))
      .catch(error => dispatch(createError(error)));
  };
};
