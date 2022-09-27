import { throwTypeError, isString } from '../utils/index.js';
import { isElement } from './typeCheck.js';
import { getNodeList } from './getNode.js';

export function addClass(element, ...classes) {
  if (!isElement(element)) {
    throwTypeError('element 인자는 문서 요소 노드 유형만 허용합니다.');
  }
  if (classes.length === 0) {
    throwTypeError('추가할 클래스 이름이 없습니다.');
  }

  classes = classes.filter((name) => isString(name));
  element.classList.add(...classes);
}

export function removeClass(element, ...classes) {
  if (!isElement(element)) {
    throwTypeError('element 인자는 문서 요소 노드 유형만 허용합니다.');
  }
  if (classes.length === 0) {
    throwTypeError('제거할 클래스 이름이 없습니다.');
  }

  classes = classes.filter((name) => isString(name));
  element.classList.remove(...classes);
}

export function hasClass(element, className) {
  if (!isElement(element)) {
    throwTypeError('element 인자는 문서 요소 노드 유형만 허용합니다.');
  }
  if (!isString(className)) {
    throwTypeError('className 인자는 문자 유형만 허용합니다.');
  }

  return element.classList.contains(className);
}

export function toggleClass(element, ...classes) {
  if (!isElement(element)) {
    throwTypeError('element 인자는 문서 요소 노드 유형만 허용합니다.');
  }
  if (classes.length === 0) {
    throwTypeError('토글할 클래스 이름이 없습니다.');
  }
  if (classes.length === 1) {
    element.classList.toggle(classes[0]);
  }
  if (classes.length > 1) {
    classes.forEach((className) => {
      hasClass(element, className)
        ? removeClass(element, className)
        : addClass(element, className);
    });
  }
}

export function radioClass(element, ...classes) {
  if (!isElement(element)) {
    throwTypeError('element 인자는 문서 요소 노드 유형만 허용합니다.');
  }
  if (classes.length === 0) {
    throwTypeError('라디오(radio) 처리할 클래스 이름이 없습니다.');
  }

  const { parentElement } = element;

  if (!parentElement) {
    throwTypeError('element의 부모 요소 노드가 존재하지 않습니다.');
  }

  let { children } = parentElement;
  children = Array.from(children);

  if (classes.length === 1) {
    let className = classes[0];
    const hasClassElements = getNodeList(`.${className}`, parentElement);
    hasClassElements.forEach((element) => removeClass(element, className));
    addClass(element, className);
  }

  if (classes.length > 1) {
    classes.forEach((className) => {
      const hasClassElements = getNodeList(`.${className}`, parentElement);
      hasClassElements.forEach((element) => removeClass(element, className));
    });
    addClass(element, ...classes);
  }
}
