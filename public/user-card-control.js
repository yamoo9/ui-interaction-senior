const userListData = [
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

const createEmptyCard = () => {
  return /* html */ `
    <article class="user-card user-card-empty">
      표시할 데이터가 존재하지 않습니다. 😭
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
  functionType = createUserCard, // 함수 참조
  userData = {},
  target = null
) => {
  target?.insertAdjacentHTML('beforeend', functionType(userData));
  // target?.insertAdjacentHTML('beforeend', functionType.call(this, userData));
};

const renderUserList = (userList = [], targetElement = null) => {
  if (!targetElement || targetElement.nodeType !== document.ELEMENT_NODE) {
    return console.error('targetEelement는 요소노드가 아닙니다.');
  }

  if (!Array.isArray(userList)) {
    return console.error('userList 인자는 배열 타입이어야 합니다.');
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

const userListElement = renderUserList(
  userListData,
  document.querySelector('.user-card-list')
);

console.log(userListElement);
