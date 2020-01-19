import axios from "axios";

const getToken = () => {
  const accessToken = localStorage.getItem("access-token");
  const client = localStorage.getItem("client");
  const uid = localStorage.getItem("uid");

  if (accessToken && client && uid) {
    return {
      "access-token": accessToken,
      client: client,
      uid: uid
    };
  }
  return null;
};

export const secureHTTP = axios.create({
  xsrfCookieName: "CSRF_TOKEN",
  xsrfHeaderName: "X-CSRF-Token",
  withCredentials: true,
  baseURL: process.env.REACT_APP_API_HOST
});

secureHTTP.interceptors.request.use(config => {
  const authToken = getToken();

  if (authToken) {
    config.headers = authToken;
  }
  return config;
});

export const http = axios.create({
  baseURL: process.env.REACT_APP_API_HOST
});

http.interceptors.request.use(config => {
  const authToken = getToken();

  if (authToken) {
    config.headers = authToken;
  }
  return config;
});
