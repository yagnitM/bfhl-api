const { processInputData } = require('../utils/dataProcessor');

const processData = async (req, res) => {
  try {
    const { data } = req.body;
    if (!data || !Array.isArray(data)) {
      return res.status(400).json({
        is_success: false,
        message: 'Invalid input: data should be an array'
      });
    }

    const result = processInputData(data);

    res.status(200).json({
      is_success: true,
      user_id: "yagnit_mahajan", 
      email: "yagnit.mahajan2022@vitstudent.ac.in", 
      roll_number: "22BCE2588", 
      ...result
    });

  } catch (error) {
    console.error('Error processing data:', error);
    res.status(500).json({
      is_success: false,
      message: 'Internal server error'
    });
  }
};

module.exports = {
  processData
};
