const express = require('express');
const cors = require('cors');
const multer = require('multer');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

// CORS for å tillate frontend-domenet
app.use(cors({ origin: '*' }));
app.use(express.json());

// Multer-oppsett for filopplasting
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// Helse-sjekk
app.get('/', (req, res) => {
  res.send('Server kjører OK');
});

// Analyse-endepunkt
app.post('/api/analyze', upload.single('image'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'Ingen bilde mottatt' });
    }

    // Dummy respons – erstatt senere med faktisk AI-analyse
    const result = {
      objects: ['sofa', 'bord', 'plante'],
      text: ['Velkommen hjem'],
      logos: ['IKEA']
    };

    console.log('Analyse fullført:', result);
    res.json(result);
  } catch (error) {
    console.error('Feil under analyse:', error);
    res.status(500).json({ error: 'Serverfeil under analyse' });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server kjører på port ${PORT}`);
});
