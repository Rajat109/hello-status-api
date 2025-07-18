const express = require('express');
require('dotenv').config();
const app = express();

app.get('/status', (req, res) => {
  res.json({
    status: 'All systems go!',
    env: process.env.APP_ENV || 'development',
    version: process.env.APP_VERSION || '0.0.1',
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
