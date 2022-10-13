import { loadStorage, saveStorage } from '../scripts/storage.js';
import albums from '../api/albums.json' assert { type: 'json' };

const STORAGE_KEY = '@store/albums';

async function getAlbums() {
  const storage = await loadStorage(STORAGE_KEY);
  if (!storage) {
    await saveStorage(STORAGE_KEY, albums);
  }
  return storage;
}

export default getAlbums;
