const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).json({
    message: `${req.method} - Request received!`,
    success: true,
  });
});

module.exports = router;
