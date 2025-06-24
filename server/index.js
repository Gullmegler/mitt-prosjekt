const express = require('express');
const cors = require('cors');
const multer = require('multer');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const port = process.env.PORT || 8080;

// CORS-konfigurasjon for å tillate frontend-domene
const corsOptions = {
  origin: 'https://airemovals.co.uk',
  methods: ['GET', 'POST'],
  credentials: true,
};

app.use(cors(corsOptions));

// Konfigurer multer for å håndtere filopplastinger
const storage = multer.memoryStorage();
const upload = multer({ storage });

// Test-endepunkt
app.get('/', (req, res) => {
  res.send('Server kjører!');
});

// AI-analyse-endepunkt
app.post('/api/analyze', upload.single('image'), async (req, res) => {
  try {
    const imageBuffer = req.file?.buffer;

    if (!imageBuffer) {
      return res.status(400).json({ error: 'Ingen bildefil lastet opp' });
    }

    // Her kunne AI-bildeanalyse blitt gjort
    // Dummy respons for nå
    const dummyResult = {
      success: true,
      message: 'Analyse fullført',
      data: {
        estimatedWeightKg: 42,
        category: 'Furniture',
      },
    };

    res.json(dummyResult);
  } catch (err) {
    console.error('Feil under analyse:', err);
    res.status(500).json({ error: 'Noe gikk galt under analysen' });
  }
});

app.listen(port, () => {
  console.log(`🚀 Server kjører på port ${port}`);
});
