export function fetchData({
  url = '',
  method = 'GET',
  headers = {
    'Content-Type': 'application/json',
  },
  body = null,
  onSuccess = null,
  onFail = null,
} = {}) {
  if (!url) {
    throw new TypeError('서버와 요청할 url 인자는 반드시 필요합니다.');
  }

  const xhr = new XMLHttpRequest();

  xhr.open(method, url);

  // Object.entries(headers).forEach(([key, value]) => {
  //   xhr.setRequestHeader(key, value);
  // });

  xhr.addEventListener('readystatechange', () => {
    const { status, readyState, response, error } = xhr;

    if (status >= 200 || status < 400) {
      if (readyState === 4) {
        onSuccess?.(JSON.parse(response));
      }
    } else {
      onFail?.(error);
    }
  });

  xhr.send(body ?? JSON.stringify(body));
}

fetchData.get = (url, onSuccess, onFail) => {
  fetchData({
    url,
    onSuccess,
    onFail,
  });
};

fetchData.post = (url, body, onSuccess, onFail) => {
  fetchData({
    method: 'POST',
    url,
    body,
    onSuccess,
    onFail,
  });
};

fetchData.put = (url, body, onSuccess, onFail) => {
  fetchData({
    method: 'PUT',
    url,
    body,
    onSuccess,
    onFail,
  });
};

fetchData.delete = (url, onSuccess, onFail) => {
  fetchData({
    method: 'DELETE',
    url,
    onSuccess,
    onFail,
  });
};

/* -------------------------------------------------------------------------- */
/* Promise API                                                                */
/* -------------------------------------------------------------------------- */

// AJAX (XMLHttpRequest: create, open, listen, send) 래핑
// fetchPromise → Promise<any>
// .then(onFulfilled)
// .catch(onRejected)
// .finally(onAlways)

const defaultOptions = {
  url: '',
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    // ...
  },
  body: null, // JSON.stringify() 메서드로 문자 값을 전달
};

// LOW LEVEL API
export const fetchPromise = (userOptions = {}) => {
  // 객체 합성(믹스인)
  // 구조 분해 할당
  const { url, method, body, headers } = Object.assign(
    {},
    defaultOptions,
    userOptions
  );

  // validation
  if (!url) {
    throw new TypeError('서버와 요청할 url 인자는 반드시 필요합니다.');
  }

  // create
  const xhr = new XMLHttpRequest();

  // open
  xhr.open(method, url);

  // set headers
  // Object.entries(headers).forEach(([key, value]) => {
  //   xhr.setRequestHeader(key, value);
  // });

  // send
  xhr.send(body ? JSON.stringify(body) : null);

  // return promise object
  return new Promise((resolve, reject) => {
    // listen
    xhr.addEventListener('readystatechange', (e) => {
      const { status, readyState, response, error } = xhr;
      if (status >= 200 || status < 400) {
        if (readyState === 4) {
          resolve(JSON.parse(response));
        }
      } else {
        reject(error);
      }
    });
  });
};

// HIGH LEVEL API

// CREATE
fetchPromise.post = (url, body) => {
  return fetchPromise({
    url,
    body,
    method: 'POST',
  });
};
// READ
fetchPromise.get = (url) => {
  return fetchPromise({ url });
};
// UPDATE
fetchPromise.put = (url, body) => {
  return fetchPromise({
    url,
    body,
    method: 'PUT',
  });
};
// DELETE
fetchPromise.delete = (url) => {
  return fetchPromise({
    url,
    method: 'DELETE',
  });
};
