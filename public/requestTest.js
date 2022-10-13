import { HTTP_METHODS, y9 } from './scripts/y9.js';

const ENDPOINT = 'https://jsonplaceholder.typicode.com/users';
const buttonGroup = document.querySelector('.buttonGroup');

buttonGroup.addEventListener('click', async (e) => {
  switch (e.target.dataset.method) {
    case HTTP_METHODS.post:
      y9.post(ENDPOINT, {
        id: 11,
        name: 'yamoo9',
        username: 'jee hoon',
        email: 'yamoo9@euid.dev',
      })
        .then((response) => console.log(response))
        .catch((error) => console.error(error.message));
      break;

    case HTTP_METHODS.put:
      y9.put(`${ENDPOINT}/10`, {
        name: 'yamoo9',
      })
        .then((response) => console.log(response))
        .catch((error) => console.error(error.message));
      break;

    case HTTP_METHODS.patch:
      const response = await y9.patch(`${ENDPOINT}/6`, {
        name: 'yamoo9',
      });
      if (!response.ok) {
        console.error(response.status);
        console.error(response.statusText);
      }
      break;

    case HTTP_METHODS.delete:
      y9.delete(`${ENDPOINT}/4`)
        .then((response) => console.log(response))
        .catch((error) => console.error(error.message));
  }
});
