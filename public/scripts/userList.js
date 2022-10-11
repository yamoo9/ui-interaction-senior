export const DUMMY_USER_LIST = [
  {
    id: 1,
    name: 'yamoo9',
    email: 'yamoo9@euid.dev',
    website: 'euid.dev',
  },
  {
    id: 2,
    name: 'sujin',
    email: 'sujin@daum.net',
    website: 'sujin.daum.tv',
  },
];

const createSpinner = (size = 100, loadingMessage = '데이터 로딩 중...') => {
  return /* html */ `
    <firgure class="spinner">
      <svg role="none" xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" preserveAspectRatio="xMidYMid">
        <defs>
          <mask id="ldio-kib455rdyv-mask">
            <circle cx="50" cy="50" r="45" fill="#fff"></circle>
          </mask>
        </defs>
        <circle cx="50" cy="50" r="45" fill="#efba8f"></circle>
        <path d="M 36.564971157455595 42.435028842544405 L 63.435028842544405 15.564971157455597 L 163.4350288425444 115.5649711574556 L 136.5649711574556 142.4350288425444 Z" fill="#e17c2b" mask="url(#ldio-kib455rdyv-mask)">
          <animate attributeName="d" dur="1.5384615384615383s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" values="M 36.564971157455595 42.435028842544405 L 63.435028842544405 15.564971157455597 L 163.4350288425444 115.5649711574556 L 136.5649711574556 142.4350288425444 Z;M 36.564971157455595 84.4350288425444 L 63.435028842544405 57.564971157455595 L 163.4350288425444 157.5649711574556 L 136.5649711574556 184.4350288425444 Z;M 36.564971157455595 42.435028842544405 L 63.435028842544405 15.564971157455597 L 163.4350288425444 115.5649711574556 L 136.5649711574556 142.4350288425444 Z" keySplines="0.45 0 0.9 0.55;0 0.45 0.55 0.9"></animate>
        </path>
        <circle cx="50" cy="29" r="19" fill="#ffffff">
          <animate attributeName="cy" dur="1.5384615384615383s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" values="29;71;29" keySplines="0.45 0 0.9 0.55;0 0.45 0.55 0.9"></animate>
        </circle>
      </svg>
      <figcaption>${loadingMessage}</figcaption>
    </firgure>
  `;
};

const createEmptyCard = () => {
  return /* html */ `
    <article class="user-card user-card-empty">
      표시할 데이터가 존재하지 않습니다. 😭
    </article>
  `;
};

const createErrorCard = (
  errorMessage = '🚨 알 수 없는 오류가 발생했습니다.'
) => {
  return /* html */ `
    <article class="user-card user-card-error">
      ${errorMessage}
    </article>
  `;
};

const createUserCard = ({
  id = '',
  name = '',
  email = '',
  website = '',
} = {}) => {
  return /* html */ `
    <article class="user-card" data-index="user-${id}">
      <h3 class="user-name">${name}</h3>
      <div class="user-resouce-info">
        <a class="user-email" href="mailto:${email}">${email}</a>
        <a class="user-website" href="http://${website}" target="_blank" rel="noopener noreferer">${website}</a>
      </div>
    </article>
  `;
};

const renderUserCard = (
  functionType = createUserCard,
  userData = {},
  target = null
) => {
  target?.insertAdjacentHTML('beforeend', functionType(userData));
  // target?.insertAdjacentHTML('beforeend', functionType.call(this, userData));
};

export const renderSpinner = (target = null) => {
  target.insertAdjacentHTML('beforeend', createSpinner());
};

export const removeSpinner = (target = null, spinnerSelector = '.spinner') => {
  target.querySelector(spinnerSelector).remove();
};

const displayErrorCard = (errorMessage) => {
  return renderUserCard(
    createErrorCard.bind(this, errorMessage),
    null,
    targetElement
  );
};

export const renderUserList = (
  userList = [],
  targetElement = null,
  error = null
) => {
  if (!targetElement || targetElement.nodeType !== document.ELEMENT_NODE) {
    return displayErrorCard('targetEelement는 요소노드가 아닙니다.');
  }

  if (error) {
    return displayErrorCard(error.message);
  }

  if (!Array.isArray(userList)) {
    return displayErrorCard('userList 인자는 배열 타입이어야 합니다.');
  }

  if (userList.length === 0) {
    renderUserCard(createEmptyCard, null, targetElement);
  } else {
    userList.forEach((userData) =>
      renderUserCard(createUserCard, userData, targetElement)
    );
  }

  return targetElement;
};
