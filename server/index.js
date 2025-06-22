const express = require('express');
const cors = require('cors');
const multer = require('multer');

const app = express();
const port = 4000;

app.use(cors());
app.use(express.json({ limit: '10mb' }));

// Test-endepunkt
app.get('/', (req, res) => {
  res.send('✅ Serveren kjører!');
});

// POST-endepunkt
app.post('/api/analyze', (req, res) => {
  const { imageBase64 } = req.body;

  if (!imageBase64) {
    return res.status(400).json({ error: 'Bilde mangler' });
  }

  // Her kan du legge til bildeanalyse senere
  console.log('Mottok bilde');

  res.json({
    result: 'Analyse gjennomført',
    timestamp: new Date().toISOString(),
  });
});

app.listen(port, () => {
  console.log(`✅ Serveren kjører på http://localhost:${port}`);
});
