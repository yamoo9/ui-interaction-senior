import { isNumber, throwTypeError } from '../utils/index.js';
import { isElement, isHTML_string } from './typeCheck.js';
import { getNode } from './getNode.js';

function prependElement(element, insert) {
  if (!isElement(element)) {
    throwTypeError('element 인자는 요소 노드 유형이어야 합니다.');
  }
  if (!isElement(insert)) {
    throwTypeError('insert 인자는 요소 노드 유형이어야 합니다.');
  }

  element.insertAdjacentElement('beforebegin', insert);
}

function appendElement(element, insert) {
  if (!isElement(element)) {
    throwTypeError('element 인자는 요소 노드 유형이어야 합니다.');
  }
  if (!isElement(insert)) {
    throwTypeError('insert 인자는 요소 노드 유형이어야 합니다.');
  }

  element.insertAdjacentElement('afterend', insert);
}

function firstElement(element, insert) {
  if (!isElement(element)) {
    throwTypeError('element 인자는 요소 노드 유형이어야 합니다.');
  }
  if (!isElement(insert)) {
    throwTypeError('insert 인자는 요소 노드 유형이어야 합니다.');
  }

  element.insertAdjacentElement('afterbegin', insert);
}

function lastElement(element, insert) {
  if (!isElement(element)) {
    throwTypeError('element 인자는 요소 노드 유형이어야 합니다.');
  }
  if (!isElement(insert)) {
    throwTypeError('insert 인자는 요소 노드 유형이어야 합니다.');
  }

  element.insertAdjacentElement('beforeend', insert);
}

function prependHTML(element, insert) {
  if (!isElement(element)) {
    throwTypeError('element 인자는 요소 노드 유형이어야 합니다.');
  }
  if (!isElement(insert)) {
    throwTypeError('insert 인자는 요소 노드 유형이어야 합니다.');
  }

  element.insertAdjacentHTML('beforebegin', insert);
}

function appendHTML(element, insert) {
  if (!isElement(element)) {
    throwTypeError('element 인자는 요소 노드 유형이어야 합니다.');
  }
  if (!isElement(insert)) {
    throwTypeError('insert 인자는 요소 노드 유형이어야 합니다.');
  }

  element.insertAdjacentHTML('afterend', insert);
}

function firstHTML(element, insert) {
  if (!isElement(element)) {
    throwTypeError('element 인자는 요소 노드 유형이어야 합니다.');
  }
  if (!isElement(insert)) {
    throwTypeError('insert 인자는 요소 노드 유형이어야 합니다.');
  }

  element.insertAdjacentHTML('afterbegin', insert);
}

function lastHTML(element, insert) {
  if (!isElement(element)) {
    throwTypeError('element 인자는 요소 노드 유형이어야 합니다.');
  }
  if (!isElement(insert)) {
    throwTypeError('insert 인자는 요소 노드 유형이어야 합니다.');
  }

  element.insertAdjacentHTML('beforeend', insert);
}

export function prepend(element, insert) {
  if (isHTML_string(insert)) {
    prependHTML(element, insert);
  } else {
    prependElement(element, insert);
  }
}

export function append(element, insert) {
  if (isHTML_string(insert)) {
    appendHTML(element, insert);
  } else {
    appendElement(element, insert);
  }
}

export function before(...args) {
  prepend(...args);
}

export function after(...args) {
  append(...args);
}

export function first(element, insert) {
  if (isHTML_string(insert)) {
    firstHTML(element, insert);
  } else {
    firstElement(element, insert);
  }
}

export function last(element, insert) {
  if (isHTML_string(insert)) {
    lastHTML(element, insert);
  } else {
    lastElement(element, insert);
  }
}
