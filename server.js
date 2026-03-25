/**
 * Production server for the React build.
 * Usage:
 *   npm run build
 *   npm run start:prod
 */
const express = require('express');
const path = require('path');
require('dotenv').config();

const app = express();
const buildPath = path.join(__dirname, 'build');

app.use(express.static(buildPath));

// SPA fallback
app.get('*', (_req, res) => {
  res.sendFile(path.join(buildPath, 'index.html'));
});

const PORT = Number(process.env.PORT) || 3050;

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log("App running on http://localhost:${PORT}`);
});
