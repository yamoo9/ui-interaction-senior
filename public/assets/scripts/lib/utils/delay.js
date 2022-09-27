import { isNumber } from './typeOf.js';

export const delay = (timeout = 1000) => {
  if (!isNumber(timeout)) {
    throwTypeError('timeout 인자는 숫자 유형이어야 합니다.');
  }
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
};
