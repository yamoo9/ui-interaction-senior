import { each, isObject, isString, throwTypeError } from '../utils/index.js';
import { attr } from './attr.js';
import { isElement, isHTML_string } from './typeCheck.js';

export function create(type, attributes = null, ...chidren) {
  if (!isString(type)) {
    throwTypeError('type 인자는 HTML 요소의 이름(문자) 값만 허용합니다.');
  }

  const element = document.createElement(type);

  if (isObject(attributes)) {
    attr(element, attributes);
  }

  // insert children
  // need insert utils

  chidren.forEach((child) => {
    if (isHTML_string(child)) {
      element.insertAdjacentHTML('beforend', child);
    }

    if (isElement(child)) {
      element.insertAdjacentElement('beforend', child);
    }
  });

  return element;
}
