import { getAlbums } from './store/index.js';

getAlbums().then(renderAlbumsList).catch(renderErrorPage);

function renderAlbumsList(albums) {
  console.log(albums);
}

function renderErrorPage(error) {
  console.error(error.message);
}
