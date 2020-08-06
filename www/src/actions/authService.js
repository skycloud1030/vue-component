const headers = {
  Accept: "application/json",
  "Content-Type": "application/json"
};

export default class AuthService {
  constructor() {}
  login = (account, password) => {
    return fetch(`/api/v1/login`, {
      headers,
      method: "POST",
      credentials: "same-origin",
      body: JSON.stringify({ account, password })
    }).then(this._checkStatus);
  };
  loggedIn() {
    return fetch(`/api/v1/loginCheck`, {
      method: "Get",
      credentials: "same-origin"
    }).then(res => {
      return res.status === 200 ? true : false;
    });
  }
  logout() {
    fetch(`/api/v1/logout`, {
      method: "Get",
      credentials: "same-origin"
    });
  }
  fetch = (url, options) => {
    const headers = {
      Accept: "application/json",
      "Content-Type": "application/json"
    };
    return fetch(url, {
      headers,
      credentials: "same-origin",
      ...options
    })
      .then(this._checkStatus)
      .catch(e => Promise.reject(e));
  };
  _checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
      return new Promise((resolve, reject) => {
        response
          .json()
          .then(data => {
            resolve(data);
          })
          .catch(() => {
            reject({ message: "fetch url error!!" });
          });
      });
    } else {
      return new Promise((_resolve, reject) => {
        response
          .json()
          .then(data => {
            const message = data.message;
            reject({ code: response.status, message });
          })
          .catch(() => {
            reject({ code: response.status, message: "fetch url error!!" });
          });
      });
    }
  }
}
