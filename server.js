const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const bfhlRoutes = require('./routes/bfhl');
const errorHandler = require('./middleware/errorHandler');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(helmet());
app.use(cors());
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));

app.use('/', bfhlRoutes);

app.use(errorHandler);

app.use('*', (req, res) => {
  res.status(404).json({
    is_success: false,
    message: 'Route not found'
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;