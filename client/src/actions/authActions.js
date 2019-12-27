import request from "../config/axios";
import axios from "axios";

export const signup = values => {
  return dispatch => {
    request
      .post("http://localhost:3001/api/auth", values)
      .then(response => {
        dispatch({
          type: "SIGNUP_SUCCESS",
          payload: response.data,
          meta: response.headers
        });
      })
      .catch(error => {
        dispatch({ type: "SIGNUP_ERROR", error: error });
      });
  };
};

export const signin = values => {
  return dispatch => {
    request
      .post("http://localhost:3001/api/auth/sign_in", values)
      .then(response => {
        dispatch({
          type: "SIGNIN_SUCCESS",
          payload: response.data,
          meta: response.headers
        });
      })
      .catch(error => {
        dispatch({ type: "SIGNIN_ERROR", error: error });
      });
  };
};
