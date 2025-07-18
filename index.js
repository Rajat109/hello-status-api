const express = require('express');
require('dotenv').config();
const app = express();
const os = require('os');

app.get('/status', (req, res) => {
  res.json({
    status: 'All systems go!',
    env: process.env.APP_ENV || 'development',
    version: process.env.APP_VERSION || '0.0.1',
    uptime: process.uptime().toFixed(2) + ' seconds',
    timestamp: new Date().toISOString(),
    hostname: os.hostname()
  });
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
