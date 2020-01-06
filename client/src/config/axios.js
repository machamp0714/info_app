import axios from "axios";

export const request = axios.create({
  xsrfCookieName: "CSRF_TOKEN",
  xsrfHeaderName: "X-CSRF-Token",
  withCredentials: true,
  baseURL: process.env.REACT_APP_API_HOST
});

export const client = axios.create({
  baseURL: process.env.REACT_APP_API_HOST
});
