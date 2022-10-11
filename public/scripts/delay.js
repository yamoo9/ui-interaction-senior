// CALLBACK API
// delay(callback, timeout);

// export function delay(callback, timeout = 1000) {
//   setTimeout(() => callback?.(), timeout);
// }

/* -------------------------------------------------------------------------- */

// PROMISE API
// delay(timeout).then(callback);

export function delay(timeout = 1000, shouldReject = false) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // ternary operator
      !shouldReject
        ? resolve()
        : reject({ message: '알 수 없는 오류가 발생했습니다.' });

      // condition statement
      // if (!shouldReject) {
      //   resolve();
      // } else {
      //   reject({ message: '알 수 없는 오류가 발생했습니다.' });
      // }
    }, timeout);
  });
}
