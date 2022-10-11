// CALLBACK API
// delay(callback, timeout);

// export function delay(callback, timeout = 1000) {
//   setTimeout(() => callback?.(), timeout);
// }

/* -------------------------------------------------------------------------- */

// PROMISE API
// delay(timeout[, options]).then(callback);
// options = { data?: null, shouldReject?: false, errorMessage?: '...' }

export function delay(
  timeout = 1000,
  {
    data = null,
    shouldReject = false,
    errorMessage = '알 수 없는 오류가 발생했습니다.',
  } = {}
) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      !shouldReject ? resolve(data) : reject({ message: errorMessage });
    }, timeout);
  });
}
