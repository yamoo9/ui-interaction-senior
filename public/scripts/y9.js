/* -------------------------------------------------------------------------- */
/* Fetch API Wrapping Utils                                                   */
/* -------------------------------------------------------------------------- */
/* 지원 HTTP METHODS : GET, POST, PUT, DELETE                                   */
/* 참고 : https://mzl.la/3ECsevT                                                */
/* -------------------------------------------------------------------------- */

export const HTTP_METHODS = {
  get: 'GET',
  post: 'POST',
  put: 'PUT',
  delete: 'DELETE',
};

const defaultConfig = {
  method: HTTP_METHODS.get,
  body: null,
  // mode: 'cors',
  // cache: 'default',
  // redirect: 'follow',
  // referrerPolicy: 'no-referrer-when-downgrade',
  // credentials: 'same-origin',
  // headers: {
  //   'Content-Type': 'application/json',
  // },
};

export const y9 = async (options) => {
  const { url, ...restConfig } = {
    ...defaultConfig,
    ...options,
    headers: { ...(defaultConfig.headers ?? {}), ...(options.headers ?? {}) },
  };

  console.log(restConfig);

  return await fetch(url, restConfig);
};

y9.get = async (url, options) => {
  const response = await y9({ url, ...options });
  return await response[response.ok ? 'json' : 'error']();
};

y9.post = async (url, body, options) => {
  const response = await y9({
    url,
    method: HTTP_METHODS.post,
    body: JSON.stringify(body),
    ...options,
  });

  return await response[response.ok ? 'json' : 'error']();
};

y9.put = async (url, body, options) => {
  const response = await y9({
    url,
    method: HTTP_METHODS.put,
    body: JSON.stringify(body),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
    ...options,
  });

  return await response[response.ok ? 'json' : 'error']();
};

y9.delete = async (url, options) => {
  const response = await y9({
    url,
    method: HTTP_METHODS.delete,
    ...options,
  });

  return await response[response.ok ? 'json' : 'error']();
};
