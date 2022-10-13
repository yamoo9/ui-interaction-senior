import { getAlbums } from './store/index.js';

let albums = [];

getAlbums().then(renderAlbumsList);

function renderAlbumsList(albums) {
  console.log(albums);
}
