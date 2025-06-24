const express = require('express');
const cors = require('cors');
const multer = require('multer');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8080;

// Bruk CORS og tillat frontend-domener
app.use(cors({
  origin: ['https://airemovals.co.uk', 'https://www.airemovals.co.uk']
}));

app.use(express.json());
app.use(express.static('public'));

const upload = multer({ dest: 'uploads/' });

app.post('/analyze', upload.single('pdf'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: 'Ingen fil lastet opp' });
  }

  // Simulert AI-analyse (dummy response)
  const analysis = {
    summary: "Dette er en oppsummering av PDF-innholdet.",
    categories: ["Flytting", "Pris", "Transport"],
    keywords: ["varebil", "2 mann", "startpris"]
  };

  // Slett midlertidig opplastet fil
  fs.unlinkSync(req.file.path);

  res.json(analysis);
});

app.listen(PORT, () => {
  console.log(`🚀 Serveren kjører på http://localhost:${PORT}`);
});
