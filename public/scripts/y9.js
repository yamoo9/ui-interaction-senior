/* -------------------------------------------------------------------------- */
/* Fetch API Wrapping Utils                                                   */
/* -------------------------------------------------------------------------- */
/* 지원 HTTP METHODS : GET, POST, PUT, DELETE                                   */
/* 참고 : https://mzl.la/3ECsevT                                                */
/* -------------------------------------------------------------------------- */

const HTTP_METHODS = {
  get: 'GET',
  post: 'POST',
  put: 'PUT',
  delete: 'DELETE',
};

const defaultConfig = {
  method: HTTP_METHODS.get,
  body: null,
  // [fetch api options: default value]
  // mode: 'cors',
  // cache: 'default',
  // redirect: 'follow',
  // referrerPolicy: 'no-referrer-when-downgrade',
  // credentials: 'same-origin',
  // headers: {
  //   'Content-Type': 'application/json',
  // },
};

export const y9 = (options) => {};

y9.get = (url, options) => {};
y9.post = (url, body, options) => {};
y9.put = (url, body, options) => {};
y9.delete = (url, options) => {};
