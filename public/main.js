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

  fetchData.get('/api/albums.json', (data) => console.log(data));

  // fetchData.post(...);
  // fetchData.put(...);
  // fetchData.delete(...);
};

callButton.addEventListener('click', handleRequestAlbums);
