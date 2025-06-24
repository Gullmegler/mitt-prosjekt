const express = require('express');
const cors = require('cors');
const multer = require('multer');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;

// Konfigurer CORS for å tillate frontend
const corsOptions = {
  origin: 'https://airemovals.co.uk',
  methods: ['GET', 'POST'],
  credentials: true
};
app.use(cors(corsOptions));

// For parsing multipart/form-data
const storage = multer.memoryStorage();
const upload = multer({ storage });

app.get('/', (req, res) => {
  res.send('Serveren kjører 🚀');
});

// API-endepunkt for bildeanalyse
app.post('/api/analyze', upload.single('image'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: 'Ingen fil ble lastet opp.' });
    }

    // Dummy analyse – dette kan erstattes med AI-modell
    const fakeAnalysis = {
      item: 'Piano',
      estimatedWeightKg: 200,
      volumeM3: 1.5,
      confidence: 0.92
    };

    res.json({ success: true, result: fakeAnalysis });
  } catch (err) {
    console.error('Analysefeil:', err);
    res.status(500).json({ message: 'Noe gikk galt under analysen.' });
  }
});

// Start serveren
app.listen(PORT, () => {
  console.log(`🚀 Server kjører på port ${PORT}`);
});
