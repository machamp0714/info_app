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

export const getOAuthUrl = () => {
  axios
    .get("http://localhost:3001/api/github_oauth_url")
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
