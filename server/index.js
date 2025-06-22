const express = require('express');
const cors = require('cors');
const multer = require('multer');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 4000;

app.use(cors());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true }));

// Konfigurer multer for filopplasting
const upload = multer({ dest: 'uploads/' });

// Enkelt test-endepunkt
app.get('/', (req, res) => {
  res.send('Serveren kjører!');
});

// Endepunkt for å ta imot bilde eller video og returnere dummy analyse
app.post('/api/analyze', upload.single('file'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: 'Ingen fil lastet opp' });
  }

  // Eksempel på dummy data som sendes tilbake
  const result = {
    message: 'Fil mottatt',
    filename: req.file.originalname,
    mimetype: req.file.mimetype,
    sizeKB: Math.round(req.file.size / 1024),
    analysis: {
      objectsDetected: 3,
      labels: ['sofa', 'table', 'plant'],
      confidence: [0.92, 0.88, 0.79],
    }
  };

  res.json(result);
});

// Start serveren
app.listen(port, () => {
  console.log(`✅ Serveren kjører på http://localhost:${port}`);
});
