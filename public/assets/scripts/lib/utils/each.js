import { throwTypeError } from './throwError.js';
import { isArray, isObject, isFunction } from './typeOf.js';

export function each(arrayOrObject, callback) {
  if (!isFunction(callback)) {
    throwTypeError('두번째 인자의 유형은 함수만 허용합니다.');
  }

  if (isArray(arrayOrObject)) {
    return arrayOrObject.map(callback);
  }

  if (isObject(arrayOrObject)) {
    return Object.entries(arrayOrObject).map(callback);
  }

  throwTypeError('첫번째 인자의 유형은 배열 또는 객체만 허용합니다.');
}
