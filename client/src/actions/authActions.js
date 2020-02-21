import { secureHTTP, http } from "../config/axios";
import { openWindow } from "../utils/actions";

const getUserLoading = () => ({
  type: "GET_USER_LOADING"
});

const getUserSuccess = response => ({
  type: "GET_USER_SUCCESS",
  payload: response
});

const getUserError = error => ({
  type: "GET_USER_ERROR",
  payload: error
});

const signupSuccess = response => ({
  type: "SIGNUP_SUCCESS",
  payload: response.data,
  meta: response.headers
});

const signupError = error => ({
  type: "SIGNUP_ERROR",
  payload: error
});

const signinSuccess = response => ({
  type: "SIGNIN_SUCCESS",
  payload: response.data,
  meta: response.headers
});

const signinError = error => ({
  type: "SIGNIN_ERROR",
  payload: error
});

export const getUser = () => {
  return dispatch => {
    dispatch(getUserLoading());
    http
      .get("/api/current_user")
      .then(response => dispatch(getUserSuccess(response.data)))
      .catch(error => dispatch(getUserError(error)));
  };
};

export const signup = values => {
  return dispatch => {
    secureHTTP
      .post("/api/auth", values)
      .then(response => {
        dispatch(signupSuccess(response));
      })
      .catch(error => {
        dispatch(signupError(error.response.data.errors));
      });
  };
};

export const signin = values => {
  return dispatch => {
    secureHTTP
      .post("/api/auth/sign_in", values)
      .then(response => {
        dispatch(signinSuccess(response));
      })
      .catch(error => {
        dispatch(signinError(error.response.data));
      });
  };
};

export const signout = () => {
  return dispatch => {
    secureHTTP
      .delete("/api/auth/sign_out")
      .then(response => {
        dispatch({ type: "SIGNOUT_SUCCESS" });
      })
      .catch(error => {
        dispatch({ type: "SIGNOUT_ERROR" });
      });
  };
};

export const getOAuthUrl = () => {
  http
    .get("/api/github_oauth_url")
    .then(response => {
      const loginWindow = openWindow(response.data.url, "Github");
      loginWindow.focus();
    })
    .catch(error => {
      console.log(error);
    });
};
