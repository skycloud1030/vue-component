import AbortController from "./abortController.js";
import AuthService from "./authService.js";
import router from "../routes/index.js";
import _ from "lodash";

export default class API {
  constructor() {
    this.Auth = new AuthService();
  }
  getLogs = ({ dateTag, severity } = {}) => {
    return this.RESTfulCall(`/v1/logs`);
  };
  deleteAPI = (url) => {
    const option = { method: "delete" };
    return this.RESTfulCall(url, option);
  };
  putAPI = (url, params) => {
    const option = {
      method: "put",
      body: JSON.stringify(params),
    };
    return this.RESTfulCall(url, option);
  };
  postAPI = (url, params) => {
    const option = {
      method: "post",
      body: JSON.stringify(params),
    };
    return this.RESTfulCall(url, option);
  };
  formAPI = (url, file) => {
    const formData = new FormData();
    formData.append("file", file);
    const option = {
      method: "post",
      body: formData,
      headers: {},
    };
    return this.RESTfulCall(url, option);
  };
  RESTfulCall = (url, options) => {
    const fet = AbortController(
      this.Auth.fetch(`/api${url}`, options)
        .then((data) => {
          return new Promise((resolve) => {
            setTimeout(() => {
              resolve(data);
            }, 100);
          });
        })
        .catch((e) => {
          if (e.code === 403) {
            router.push("/logout");
          }
          return Promise.reject(e);
        })
    );
    return fet;
  };
}
