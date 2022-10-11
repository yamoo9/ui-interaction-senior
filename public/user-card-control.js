import { delay } from './scripts/delay.js';
import {
  renderUserList,
  renderSpinner,
  removeSpinner,
} from './scripts/userList.js';

const ENDPOINT = '//jsonplaceholder.typicode.com/users';
const userCardList = document.querySelector('.user-card-list');

function rendingUserListPage() {
  renderSpinner(userCardList);

  fetch(ENDPOINT)
    .then((response) => response.json())
    .then((json) => delay({ data: json }))
    .then((data) => {
      removeSpinner(userCardList);
      renderUserList(data, userCardList);
    })
    .catch((error) => {
      removeSpinner(userCardList);
      renderUserList(data, userCardList, error);
    });
}

rendingUserListPage();
