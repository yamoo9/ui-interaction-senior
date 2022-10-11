import { y9 } from './scripts/y9.js';
import { delay } from './scripts/delay.js';
import {
  renderUserList,
  renderSpinner,
  removeSpinner,
} from './scripts/userList.js';

const ENDPOINT = '//jsonplaceholder.typicode.com/users';
const userCardList = document.querySelector('.user-card-list');

async function rendingUserListPage() {
  renderSpinner(userCardList);

  try {
    const data = await y9.get(ENDPOINT);
    renderUserList(data, userCardList);
  } catch (error) {
    renderUserList(data, userCardList, error);
  } finally {
    removeSpinner(userCardList);
  }
}

rendingUserListPage();
