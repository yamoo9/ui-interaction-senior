import { fetchData } from './scripts/fetchData.js';
import { delay } from './scripts/delay.js';
import {
  renderUserList,
  renderSpinner,
  removeSpinner,
} from './scripts/userList.js';

const ENDPOINT = 'https://jsonplaceholder.typicode.com/users';
const userCardListElement = document.querySelector('.user-card-list');

function rendingUserListPage() {
  renderSpinner(userCardListElement);

  // TODO
  // [x] delay 유티릴티 함수 작성
  // [ ] fetchData API 변경 (Callback → Promise)

  // BEFORE
  // CALLBACK API
  fetchData.get(
    ENDPOINT,
    (data) => {
      delay(1000).then(() => {
        removeSpinner(userCardListElement);
        renderUserList(data, userCardListElement);
      });
      // setTimeout(() => {
      //   removeSpinner(userCardListElement);
      //   renderUserList(data, userCardListElement);
      // }, 1000);
    },
    (error) => {
      removeSpinner(userCardListElement);
      console.error(error);
    }
  );

  // AFTER
  // PROMISE API
  // fetchData
  //   .get(ENDPOINT)
  //   .then((data) => {
  //     delay(1000).then(renderUserList(data, userCardListElement));
  //   })
  //   .catch((error) => {
  //     console.error(error);
  //   })
  //   .finally(() => {
  //     removeSpinner(userCardListElement);
  //   });
}

rendingUserListPage();
