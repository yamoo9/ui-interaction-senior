import { isFunction, throwTypeError } from '../utils/index.js';
import { isElement } from './typeCheck.js';

export function text(element, content = '') {
  if (!isElement(element)) {
    throwTypeError('element 인자는 요소 노드 유형이어야 합니다.');
  }

  if (isFunction(content)) {
    element.textContent = content(element.textContent);
  } else {
    element.textContent = content;
  }
}

export function html(element, htmlCode = '') {
  if (!isElement(element)) {
    throwTypeError('element 인자는 요소 노드 유형이어야 합니다.');
  }

  if (isFunction(htmlCode)) {
    element.innerHTML = htmlCode(element.innerHTML);
  } else {
    element.innerHTML = htmlCode;
  }
}
