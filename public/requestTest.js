import { HTTP_METHODS, y9 } from './scripts/y9.js';

const ENDPOINT = '//jsonplaceholder.typicode.com/users';
const buttonGroup = document.querySelector('.buttonGroup');

// 이벤트 위임
buttonGroup.addEventListener('click', async (e) => {
  // event.currentTarget은 이벤트가 현재(직접) 연결된 객체
  // event.target은 이벤트가 전파된 대상 객체
  // console.log(e.target.getAttribute('data-method'));

  switch (e.target.dataset.method) {
    case HTTP_METHODS.post:
      y9.post(ENDPOINT, {
        id: 11,
        name: 'yamoo9',
        username: 'jee hoon',
        email: 'yamoo9@euid.dev',
        address: {
          street: 'Kulas Light',
          suite: 'Apt. 556',
          city: 'Gwenborough',
          zipcode: '92998-3874',
          geo: {
            lat: '-37.3159',
            lng: '81.1496',
          },
        },
        phone: '1-770-736-8031 x56442',
        website: 'hildegard.org',
        company: {
          name: 'Romaguera-Crona',
          catchPhrase: 'Multi-layered client-server neural-net',
          bs: 'harness real-time e-markets',
        },
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
    case HTTP_METHODS.delete:
      y9.delete(`${ENDPOINT}/4`)
        .then((response) => console.log(response))
        .catch((error) => console.error(error.message));
  }
});
