const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

// Serve static React files
app.use(express.static(path.join(__dirname, '../build')));

app.get('/api/ping', (req, res) => {
  res.json({ message: 'Backend is live' });
});

// Fallback til index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build/index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
