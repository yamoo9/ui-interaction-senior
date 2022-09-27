import { each, isObject, isString, throwTypeError } from '../utils/index.js';
import { isElement } from './typeCheck.js';

function getAttribute(element, attrName) {
  if (!isElement(element)) {
    throwTypeError('element 인자는 요소 노드 유형이여야 합니다.');
  }
  if (!isString(attrName)) {
    throwTypeError('attrName 인자는 문자 유형이어야 합니다.');
  }
  return element.getAttribute(attrName);
}

function setAttribute(element, attrName, value) {
  if (!isElement(element)) {
    throwTypeError('element 인자는 요소 노드 유형이여야 합니다.');
  }
  if (!isString(attrName)) {
    throwTypeError('attrName 인자는 문자 유형이어야 합니다.');
  }
  if (!value) {
    throwTypeError(
      'value 인자는 undefined 또는 null 유형을 허용하지 않습니다.'
    );
  }
  element.setAttribute(attrName, value);
}

export function attr(element, ...args) {
  let { length } = args;

  if (length === 1) {
    let [attrName] = args;
    if (isObject(attrName)) {
      each(attrName, ([attrName, value]) =>
        setAttribute(element, attrName, value)
      );
    }
    if (isString(attrName)) {
      return getAttribute(element, attrName);
    }
  }

  if (length > 1) {
    let [attrName, value] = args;
    setAttribute(element, attrName, value);
  }
}
