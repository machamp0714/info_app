import { request, client } from "../config/axios";

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
  type: "SIGNIN_SUCCESS",
  payload: error
});

export const signup = values => {
  return dispatch => {
    request
      .post("/api/auth", values)
      .then(response => {
        dispatch(signupSuccess(response));
      })
      .catch(error => {
        dispatch(signupError(error));
      });
  };
};

export const signin = values => {
  return dispatch => {
    request
      .post("/api/auth/sign_in", values)
      .then(response => {
        dispatch(signinSuccess(response));
      })
      .catch(error => {
        dispatch(signinError(error));
      });
  };
};

export const signout = () => {
  return dispatch => {
    request
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
  client
    .get("/api/github_oauth_url")
    .then(response => {
      const loginWindow = openLoginWindow(response.data.url);
      loginWindow.focus();
    })
    .catch(error => {
      console.log(error);
    });
};

const openLoginWindow = url => {
  const width = 500;
  const height = 600;
  const windowX = (window.screen.width - width) / 2;
  const windowY = (window.screen.height - height) / 2;
  const title = "ログイン - Githubアカウント";
  window.open(
    url,
    title,
    `top=${windowY},left=${windowX},width=${width},height=${height}`
  );
};
