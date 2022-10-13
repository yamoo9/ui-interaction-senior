const express = require('express');
const PORT = process.env.PORT ?? 5000;

const app = express();

app.set('views', './views');
app.set('view engine', 'ejs');

app.get('/', (req, res, next) => {
  res.render('index', {
    title: '헬로!!!',
  });
});

// app.use(express.static('public'));

app.listen(PORT, () => console.log(`http://localhost:${PORT} 서버 구동 중...`));
