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
  patch: 'PATCH',
  delete: 'DELETE',
};

const defaultConfig = {
  method: HTTP_METHODS.get,
  body: null,
  mode: 'cors',
  cache: 'default',
  redirect: 'follow',
  referrerPolicy: 'no-referrer-when-downgrade',
  credentials: 'same-origin',
};

export const y9 = async (options) => {
  const { url, ...restConfig } = {
    ...defaultConfig,
    ...options,
    headers: { ...(defaultConfig.headers ?? {}), ...(options.headers ?? {}) },
  };

  const response = await fetch(url, restConfig);

  if (response.ok) {
    response.data = await response.json();
  }

  return response;
};

y9.get = async (url, options) => {
  return await y9({ url, ...options });
};

y9.post = async (url, body, options) => {
  return await y9({
    url,
    method: HTTP_METHODS.post,
    body: JSON.stringify(body),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
    ...options,
  });
};

y9.put = async (url, body, options) => {
  return await y9({
    url,
    method: HTTP_METHODS.put,
    body: JSON.stringify(body),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
    ...options,
  });
};

y9.patch = async (url, body, options) => {
  return await y9({
    url,
    method: HTTP_METHODS.patch,
    body: JSON.stringify(body),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
    ...options,
  });
};

y9.delete = async (url, options) => {
  return await y9({
    url,
    method: HTTP_METHODS.delete,
    ...options,
  });
};
