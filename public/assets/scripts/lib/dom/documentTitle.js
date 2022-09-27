import { isFunction } from '../utils/index.js';

const getDocumentTitle = () => document.title;

const setDocumentTitle = (content) => {
  document.title = content;
};

const INITIAL_DOCUMENT_TITLE = getDocumentTitle();

export const documentTitle = (content) => {
  if (!content) {
    return getDocumentTitle();
  } else {
    let willContent = content;
    if (isFunction(content)) {
      willContent = content(INITIAL_DOCUMENT_TITLE);
    }
    setDocumentTitle(willContent);
  }
};
