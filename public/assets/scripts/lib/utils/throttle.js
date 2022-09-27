export const throttle = (callback, timeout = 300) => {
  let isWaiting = false;
  return (...params) => {
    if (!isWaiting) {
      callback.apply(this, params);
      isWaiting = true;
      setTimeout(() => {
        isWaiting = false;
      }, timeout);
    }
  };
};
