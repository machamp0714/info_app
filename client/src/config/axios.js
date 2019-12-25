import axios from "axios";

const request = axios.create({
  xsrfCookieName: "CSRF_TOKEN",
  xsrfHeaderName: "X-CSRF-Token",
  withCredentials: true
});

export default request;
