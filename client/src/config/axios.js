import axios from "axios";

export const request = axios.create({
  xsrfCookieName: "CSRF_TOKEN",
  xsrfHeaderName: "X-CSRF-Token",
  withCredentials: true,
  baseURL: process.env.REACT_APP_API_HOST,
  headers: {
    "access-token": localStorage.getItem("access-token") || null,
    client: localStorage.getItem("client") || null,
    uid: localStorage.getItem("uid") || null
  }
});

export const client = axios.create({
  baseURL: process.env.REACT_APP_API_HOST,
  headers: {
    "access-token": localStorage.getItem("access-token") || null,
    client: localStorage.getItem("client") || null,
    uid: localStorage.getItem("uid") || null
  }
});

export const instance = axios.create({
  baseURL: process.env.REACT_APP_API_HOST
});
