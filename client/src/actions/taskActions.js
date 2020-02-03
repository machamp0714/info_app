import { http, secureHTTP } from "../config/axios";

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

const deleteSuccess = task_id => ({
  type: "DELETE_TASK_SUCCESS",
  payload: task_id
});

const deleteError = error => ({
  type: "DELETE_TASK_ERROR",
  payload: error.response.error
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

export const deleteTask = task_id => {
  return dispatch => {
    secureHTTP
      .delete(`/api/tasks/${task_id}`)
      .then(() => dispatch(deleteSuccess(task_id)))
      .catch(error => dispatch(error));
  };
};
