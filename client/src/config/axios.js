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

export const request = axios.create({
  xsrfCookieName: "CSRF_TOKEN",
  xsrfHeaderName: "X-CSRF-Token",
  withCredentials: true,
  baseURL: process.env.REACT_APP_API_HOST
});

request.interceptors.request.use(config => {
  const authToken = getToken();

  if (authToken) {
    config.headers = authToken;
  }
  return config;
});

export const client = axios.create({
  baseURL: process.env.REACT_APP_API_HOST
});

client.interceptors.request.use(config => {
  const authToken = getToken();

  if (authToken) {
    return authToken;
  }
  return config;
});

export const instance = axios.create({
  baseURL: process.env.REACT_APP_API_HOST
});
