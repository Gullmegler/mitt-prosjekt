// server/index.js
const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

app.get('/api/ping', (req, res) => {
  res.json({ message: 'Backend is running' });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
