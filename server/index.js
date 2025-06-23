// server/index.js
const express = require('express');
const cors = require('cors');
const multer = require('multer');

const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

// Eksempel-rute
app.get('/api/ping', (req, res) => {
  res.json({ message: 'Server is live!' });
});

app.listen(port, () => {
  console.log(`Backend server running on port ${port}`);
});
