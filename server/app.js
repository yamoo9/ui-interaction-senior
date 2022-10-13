const express = require('express');
const cors = require('cors');
const PORT = process.env.PORT ?? 5000;

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));

// ROUTING
app.use('/api/albums', require('./routes/albums'));

app.listen(PORT, () => console.log(`http://localhost:${PORT} 서버 구동 중...`));
