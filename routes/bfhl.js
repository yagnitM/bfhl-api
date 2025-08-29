const express = require('express');
const router = express.Router();
const bfhlController = require('../controllers/bfhlController');

router.post('/bfhl', bfhlController.processData);

router.get('/bfhl', (req, res) => {
  res.status(200).json({
    operation_code: 1
  });
});

module.exports = router;
