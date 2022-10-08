// JavaScript 데이터 타입 8가지

// null
// undefined
// number
// bigint
// string
// boolean
// symbol
// object types
// array
// function
// object

export function fetchData({
  url = null,
  method = 'GET',
  body = null,
  onSuccess = null,
  onFail = null,
} = {}) {
  if (!url) {
    throw new TypeError('서버와 요청할 url 인자는 반드시 필요합니다.');
  }

  const xhr = new XMLHttpRequest();

  xhr.open(method, url);

  xhr.addEventListener('readystatechange', () => {
    const { status, readyState, response } = xhr;

    if (status >= 200 || status < 400) {
      if (readyState === 4) {
        onSuccess?.(JSON.parse(response));
      }
    } else {
      onFail?.({ message: '네트워크 통신에 장애가 있습니다.' });
    }
  });

  xhr.send(body);
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
