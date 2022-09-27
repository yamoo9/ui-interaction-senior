import { each, isObject, isString, throwTypeError } from '../utils/index.js';
import { attr } from './attr.js';

export function create(type, ...args) {
  if (!isString(type)) {
    throwTypeError('type 인자는 문자 유형이어야 합니다.');
  }

  const element = document.createElement(type);

  const [props, ...children] = args;

  if (isObject(props)) {
    each(props, ([prop, value]) => attr(prop, value));
  }

  if (children.length > 0) {
    children.forEach((child) => element.appendChild(child));
  }

  return element;
}
