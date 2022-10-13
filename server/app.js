const http = require('http');
const PORT = process.env.PORT ?? 3000;
const albums = require('./albums.json');

const server = http.createServer((req, res) => {
  // 요청
  // 경로 '/'
  // 루팅(Routing)

  if (req.url === '/') {
    // 응답
    res
      .writeHead(200, 'ok', { 'Content-Type': 'text/plain; charset=utf-8' })
      .end('Hello Node.js Http Server');
  }

  if (req.url === '/api/albums') {
    res
      .writeHead(200, 'ok', {
        'Content-Type': 'application/json; charset=utf-8',
      })
      .end(JSON.stringify(albums));
  }
});

server.listen(PORT, () =>
  console.log(`http://localhost:${PORT} 서버 구동 중...`)
);
