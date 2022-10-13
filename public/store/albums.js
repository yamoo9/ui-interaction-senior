import { loadStorage, saveStorage } from '../scripts/storage.js';
import albums from '../api/albums.json' assert { type: 'json' };

const STORAGE_KEY = '@store/albums';

export async function getAlbums() {
  let storage = await loadStorage(STORAGE_KEY);

  if (!storage) {
    console.log('@initial saved storage data');
    await saveStorage(STORAGE_KEY, albums);
    storage = await loadStorage(STORAGE_KEY);
  }

  return storage;
}

export async function setAlbum(newAlbum) {
  const albums = await loadStorage(STORAGE_KEY);
  albums.push(newAlbum);
  await saveStorage(STORAGE_KEY, albums);
  return newAlbum;
}
