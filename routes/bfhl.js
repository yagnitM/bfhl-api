const express = require('express');
const router = express.Router();
const bfhlController = require('../controllers/bfhlController');

router.get('/', (req, res) => {
  res.status(200).json({
    message: "BFHL API is running successfully!",
    status: "active",
    endpoints: {
      "GET /bfhl": "Returns operation code",
      "POST /bfhl": "Processes data array"
    }
  });
});

router.get('/bfhl', (req, res) => {
  res.status(200).json({
    operation_code: 1,
    message: "BFHL API GET endpoint is working!",
    user_id: "yagnit_mahajan", 
    email: "yagnit.mahajan2022@vitstudent.ac.in",        
    roll_number: "22BCE2588",       
    status: "success",
    instructions: "Use POST method with 'data' array to process information"
  });
});

router.post('/bfhl', bfhlController.processData);

module.exports = router;
