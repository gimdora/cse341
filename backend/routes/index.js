const express = require('express');
const router = express.Router();

router.use('/professional', require('./professional'));

// 루트 페이지 (테스트용)
router.get('/', (req, res) => {
  res.send('Welcome to my CSE341 API. Try GET /professional');
});

module.exports = router;
