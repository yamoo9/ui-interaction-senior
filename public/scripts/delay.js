// CALLBACK API
// delay(callback, timeout);

// export function delay(callback, timeout = 1000) {
//   setTimeout(() => callback?.(), timeout);
// }

/* -------------------------------------------------------------------------- */

// PROMISE API
// delay(timeout[, options]).then(callback);
// options = { data?: null, shouldReject?: false, errorMessage?: '...' }

const defaultOptions = {
  timeout: 1000,
  data: null,
  shouldReject: false,
  errorMessage: '알 수 없는 오류가 발생했습니다.',
};

export function delay(options) {
  // 객체 복사
  let config = { ...defaultOptions };

  if (typeof options === 'number') {
    config.timeout = options;
  }

  if (options && typeof options === 'object' && !Array.isArray(options)) {
    // 객체 합성
    config = { ...config, ...options };
  }

  const { timeout, data, shouldReject, errorMessage } = config;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      !shouldReject ? resolve(data) : reject({ message: errorMessage });
    }, timeout);
  });
}
