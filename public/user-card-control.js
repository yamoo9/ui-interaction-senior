const userListData = [
  // {
  //   id: 1,
  //   name: 'yamoo9',
  //   email: 'yamoo9@euid.dev',
  //   website: 'euid.dev',
  // },
  // {
  //   id: 2,
  //   name: 'sujin',
  //   email: 'sujin@daum.net',
  //   website: 'sujin.daum.tv',
  // },
];

const renderUserList = (userList, targetElement = null) => {
  if (!targetElement || targetElement.nodeType !== document.ELEMENT_NODE) {
    return console.error('targetEelement는 요소노드가 아닙니다.');
  }

  userList.forEach((userData) =>
    targetElement?.insertAdjacentHTML('beforeend', createUserCard(userData))
  );

  return targetElement;
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

const userListElement = renderUserList(
  userListData,
  document.querySelector('.user-card-list')
);

console.log(userListElement);
