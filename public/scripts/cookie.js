export const getCookie = (key) => {
  if (key) {
    let cookie = decodeURIComponent(document.cookie);
    cookie = cookie.split(';').map((keyValue) => keyValue.trim().split('='));
    cookie = Object.fromEntries(cookie);
    return cookie[key];
  }
};

export const setCookie = (key, value, options = {}) => {
  if (typeof key === 'string' && (value || value.trim() === '')) {
    let updateCookie = `${key}=${encodeURIComponent(value)};`;

    for (let [key, value] of Object.entries(options)) {
      if (value) {
        updateCookie += `${key}=${value};`;
      }
    }

    document.cookie = updateCookie;
  } else {
    throw new TypeError('저장할 쿠키의 키:값이 필요합니다.');
  }
};

export const deleteCookie = (key) => {
  setCookie(key, '', { 'max-age': -1 });
};
