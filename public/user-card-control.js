import { fetchData } from './scripts/fetchData.js';
import {
  renderUserList,
  renderSpinner,
  removeSpinner,
} from './scripts/userList.js';

const ENDPOINT = 'https://jsonplaceholder.typicode.com/users';
const userCardListElement = document.querySelector('.user-card-list');

function rendingUserListPage() {
  renderSpinner(userCardListElement);

  fetchData.get(
    ENDPOINT,
    (data) => {
      setTimeout(() => {
        removeSpinner(userCardListElement);
        renderUserList(data, userCardListElement);
      }, 1000);
    },
    (error) => {
      console.error(error);
    }
  );
}

rendingUserListPage();
