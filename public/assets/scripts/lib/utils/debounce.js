export const debounce = (callback, timeout = 300) => {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(callback.bind(this, ...args), timeout);
  };
};
