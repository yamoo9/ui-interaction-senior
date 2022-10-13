const express = require('express');
const PORT = process.env.PORT ?? 5000;

const app = express();

app.get('/', (req, res, next) => {
  res.writeHead(200, 'ok', {
    'Content-Type': 'text/html; charset=UTF-8',
  }).end(/* html */ `
    <!DOCTYPE html>
      <html lang="ko-KR">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>헬로! 익스프레스</title>
      </head>
      <body>
        <h1>헬로~~ 웹 서버 애플리케이션</h1>
      </body>
    </html>
  `);
});

app.listen(PORT, () => console.log(`http://localhost:${PORT} 서버 구동 중...`));
