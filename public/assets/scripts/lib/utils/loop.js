import { isFunction, isNumber } from './typeOf.js';
import { throwTypeError } from './throwError.js';

export const loop = (callback, repeatCount = 10) => {
  if (!isFunction(callback)) {
    throwTypeError('callback 인자는 함수 유형이어야 합니다.');
  }
  if (!isNumber(repeatCount)) {
    throwTypeError('repeatCount 인자는 숫자 유형이어야 합니다.');
  }

  Array(repeatCount).fill(null).forEach(callback);
};
