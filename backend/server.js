const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 8080;

// 미들웨어: 모든 origin에서 요청 허용 (file:// 로 열린 frontend도 허용됨)
app.use(cors());
app.use(express.json());

// 라우트 등록
app.use('/', require('./routes'));

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
