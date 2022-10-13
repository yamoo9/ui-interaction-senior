const { Router } = require('express');
const router = Router();

let albums = require('../databases/albums.json');

// GET
router.get('/', (req, res, next) => {
  res
    .writeHead(200, 'ok', {
      'Content-Type': 'application/json; charset=UTF-8',
    })
    .end(JSON.stringify(albums));
});

// GET req.params.id
router.get('/:id', (req, res, next) => {
  let { id } = req.params;
  const findedAlbum = albums.find((album) => album.id === id);

  if (!findedAlbum) {
    res
      .writeHead(404, 'not found', {
        'Content-Type': 'application/json; charset=UTF-8',
      })
      .end({ message: '찾는 앨범이 없습니다.' });
  }

  res
    .writeHead(200, 'ok', {
      'Content-Type': 'application/json; charset=UTF-8',
    })
    .end(JSON.stringify(findedAlbum));
});

// POST
router.post('/', (req, res, next) => {
  const newAlbum = { id: `album_${'dikw'}`, ...req.body };

  albums = [...albums, newAlbum];

  res
    .writeHead(200, 'ok', {
      'Content-Type': 'application/json; charset=UTF-8',
    })
    .end(JSON.stringify(newAlbum));
});
// PUT
// PATCH
// DELTE

module.exports = router;
