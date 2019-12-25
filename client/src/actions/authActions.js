import request from "../config/axios";

export const signup = values => {
  return dispatch => {
    request
      .post("http://localhost:3001/api/auth", values)
      .then(response => {
        dispatch({ type: "SIGNUP_SUCCESS", user: response });
      })
      .catch(error => {
        dispatch({ type: "SIGNUP_ERROR", error: error });
      });
  };
};
