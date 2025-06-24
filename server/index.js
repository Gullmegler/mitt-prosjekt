const express = require('express');
const cors = require('cors');
const multer = require('multer');
const path = require('path');
require('dotenv').config();

const app = express();

// Multer setup for file uploads
const storage = multer.memoryStorage();
const upload = multer({ storage });

// CORS config – allow only specific origin
const corsOptions = {
  origin: 'https://airemovals.co.uk', // Replace with frontend domain
  methods: ['GET', 'POST'],
  credentials: true,
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));

// Health check endpoint
app.get('/', (req, res) => {
  res.send('Serveren kjører 🚀');
});

// Image analysis endpoint
app.post('/api/analyze', upload.single('image'), (req, res) => {
  try {
    const image = req.file;

    if (!image) {
      return res.status(400).json({ error: 'Ingen bilde ble lastet opp.' });
    }

    console.log(`Mottok fil: ${image.originalname} (${image.size} bytes)`);

    // Dummy AI-analyse svar
    const result = {
      aiSummary: 'Dette er en eksempel-analyse av bildet.',
      detectedIssues: ['Skygge', 'Lav kontrast'],
      recommendation: 'Ta bildet med jevnere lys og høyere oppløsning.',
    };

    res.json(result);
  } catch (error) {
    console.error('Feil i /api/analyze:', error);
    res.status(500).json({ error: 'Noe gikk galt på serveren.' });
  }
});

// Start server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`✅ Server kjører på port ${PORT}`);
});
