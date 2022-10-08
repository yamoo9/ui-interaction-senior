import { fetchData } from './scripts/fetchData.js';

const callButton = document.querySelector('.button');
const printArea = document.querySelector('.print code');

const printAlbums = (albumsString) => {
  printArea.textContent = albumsString;
};

const handleRequestAlbums = () => {
  // fetchData({
  //   url: '/api/albums.json',
  //   onSuccess(data) {
  //     console.log(data);
  //   },
  //   onFail(error) {
  //     console.error(error.message);
  //   },
  // });
  //

  // fetchData.get('/api/albums.json', (data) => console.log(data));

  const newPostData = {
    id: 11,
    name: 'yamoo9',
    username: 'Jee Hoon',
    email: 'yamoo9@euild.dev',
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
  };

  fetchData.post(
    'https://jsonplaceholder.typicode.com/users',
    newPostData,
    (data) => console.log(data),
    (error) => console.error(error.message)
  );

  const editPostData = {
    name: '에브린 하월드',
    username: '안토니',
  };

  fetchData.put(
    'https://jsonplaceholder.typicode.com/users/2',
    editPostData,
    (data) => console.log(data),
    (error) => console.error(error.message)
  );

  fetchData.delete(
    'https://jsonplaceholder.typicode.com/users/1',
    (data) => console.log(data),
    (error) => console.error(error.message)
  );
};

callButton.addEventListener('click', handleRequestAlbums);
