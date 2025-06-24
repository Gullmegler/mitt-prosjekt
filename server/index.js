const express = require('express');
const cors = require('cors');
const multer = require('multer');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const port = process.env.PORT || 8080;

// CORS-konfigurasjon for å tillate frontend-domenet
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
    const imageBuffer = req.file.buffer;

    // Dummyrespons – her kan du koble til f.eks. AI-tjeneste
    const result = {
      message: 'Bilde mottatt og analysert!',
      size: imageBuffer.length,
      timestamp: new Date(),
    };

    res.json(result);
  } catch (error) {
    console.error('Feil under bildeanalyse:', error);
    res.status(500).json({ error: 'Analyse mislyktes.' });
  }
});

app.listen(port, () => {
  console.log(`🚀 Server kjører på port ${port}`);
});
