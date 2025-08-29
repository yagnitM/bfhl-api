const errorHandler = (err, req, res, next) => {
  console.error('Error:', err);

  if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
    return res.status(400).json({
      is_success: false,
      message: 'Invalid JSON format'
    });
  }

  res.status(500).json({
    is_success: false,
    message: 'Internal server error'
  });
};

module.exports = errorHandler;
