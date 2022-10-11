import { delay } from './scripts/delay.js';
import {
  renderUserList,
  renderSpinner,
  removeSpinner,
} from './scripts/userList.js';

const ENDPOINT = '//jsonplaceholder.typicode.com/users';
const userCardList = document.querySelector('.user-card-list');

// Promise API
// function rendingUserListPage() {
//   renderSpinner(userCardList);

//   fetch(ENDPOINT)
//     .then((response) => response.json())
//     .then((json) => delay({ data: json }))
//     .then((data) => {
//       removeSpinner(userCardList);
//       renderUserList(data, userCardList);
//     })
//     .catch((error) => {
//       removeSpinner(userCardList);
//       renderUserList(data, userCardList, error);
//     });
// }

// Asyncronous Function
async function rendingUserListPage() {
  renderSpinner(userCardList);

  // const response = await fetch(ENDPOINT);
  // if (!response.ok) {
  //   // catch error
  // }

  try {
    const response = await fetch(ENDPOINT);

    console.log(response);

    const data = await response.json();
    // const data = await (await fetch(ENDPOINT)).json();

    // await delay(1500);
    // removeSpinner(userCardList);
    renderUserList(data, userCardList);
  } catch (error) {
    renderUserList(data, userCardList, error);
  } finally {
    removeSpinner(userCardList);
  }
}

rendingUserListPage();
