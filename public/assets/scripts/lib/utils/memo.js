import { throwTypeError } from './throwError.js';
import { isFunction, isString } from './typeOf.js';

export const memo = (() => {
  const cache = {};
  return (memoized, key, showLog = false) => {
    if (!isFunction(memoized)) {
      throwTypeError('memoized 인자는 함수 유형이어야 합니다.');
    }
    if (!isString(key)) {
      throwTypeError('key 인자는 문자 유형이어야 합니다.');
    }

    if (cache[key]) {
      return cache[key];
    } else {
      showLog && console.log(`cached: ${key}`);
      return (cache[key] = memoized());
    }
  };
})();
