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

  // TODO
  // [x] delay 유티릴티 함수 작성
  // [ ] fetchData API 변경 (Callback → Promise)

  // BEFORE
  // CALLBACK API
  // fetchData.get(
  //   ENDPOINT,
  //   (data) => {
  //     delay(1000).then(() => {
  //       removeSpinner(userCardList);
  //       renderUserList(data, userCardList);
  //     });
  //   },
  //   (error) => {
  //     removeSpinner(userCardList);
  //     console.error(error);
  //   }
  // );

  // AFTER 1.
  // PROMISE API
  // fetchPromise
  //   .get(ENDPOINT)
  //   .then((data) => {
  //     delay(1000).then(() => {
  //       removeSpinner(userCardList);
  //       renderUserList(data, userCardList);
  //     });
  //   })
  //   .catch((error) => {
  //     removeSpinner(userCardList);
  //     console.error(error.message);
  //   });
  // .finally(() => {
  //   removeSpinner(userCardList);
  // });

  // AFTER 1.1
  // PROMISE COMBINATION
  // fetchPromise
  //   .get(ENDPOINT)
  //   .then((data) => delay(500, { data }))
  //   .then((data) => delay(1500, { data }))
  //   .then((data) => delay(500, { data }))
  //   .then((data) => renderUserList(data, userCardList))
  //   .catch((error) => console.error(error))
  //   .finally(() => removeSpinner(userCardList));

  // NATIVE
  // FETCH API
  fetch(ENDPOINT)
    .then((response) => response.json())
    .then((json) => delay({ timeout: 2000, data: json }))
    .then((data) => {
      removeSpinner(userCardList);
      renderUserList(data, userCardList);
    })
    .catch((error) => {
      removeSpinner(userCardList);
      console.error(error.message);
    });
}

rendingUserListPage();
