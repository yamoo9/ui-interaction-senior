import { getAlbums, setAlbum } from './store/index.js';

getAlbums().then(renderAlbumsList).catch(renderErrorPage);

function renderAlbumsList(albums) {
  const albumsList = document.querySelector('.albums-list');
  albumsList.innerHTML = '';
  albums.forEach((album) =>
    albumsList?.insertAdjacentHTML('beforeend', createAlbumItem(album))
  );
}

function createAlbumItem(album) {
  const { cover, title, artist, id } = album;
  return /* html */ `
    <li data-album-id=${id}>
      <figure class="album">
        <img src="${cover.src}" alt="${title}" height="${cover.size}" />
        <figcaption>${artist}</figcaption>
      </figure>
    </li>
  `;
}

function renderErrorPage(error) {
  console.error(error.message);
}

const addAlbumForm = document.querySelector('.add-album');

addAlbumForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  const inputs = Array.from(e.target.querySelectorAll('input'));
  let newAlbum = Object.fromEntries(
    inputs.map(({ name, value }) => [name, value])
  );

  const savedAlbum = await setAlbum(newAlbum);

  console.log('앨범 저장 후...', savedAlbum);
});
