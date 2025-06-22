const express = require('express');
const cors = require('cors');
const multer = require('multer');
const fs = require('fs');
const path = require('path');
const FormData = require('form-data');
const fetch = require('node-fetch');

const app = express();
const port = 4000;

app.use(cors());
app.use(express.json({ limit: '50mb' }));

app.post('/api/analyze', async (req, res) => {
  try {
    const { imageBase64 } = req.body;

    if (!imageBase64) {
      return res.status(400).json({ error: 'No image data provided' });
    }

    const matches = imageBase64.match(/^data:(.+);base64,(.+)$/);
    if (!matches || matches.length !== 3) {
      return res.status(400).json({ error: 'Invalid base64 string' });
    }

    const mimeType = matches[1];
    const base64Data = matches[2];
    const buffer = Buffer.from(base64Data, 'base64');
    const tempFilePath = path.join(__dirname, 'temp_upload');
    const filename = `upload_${Date.now()}.${mimeType.split('/')[1]}`;
    const filepath = path.join(tempFilePath, filename);

    fs.mkdirSync(tempFilePath, { recursive: true });
    fs.writeFileSync(filepath, buffer);

    const form = new FormData();
    form.append('file', fs.createReadStream(filepath));

    const response = await fetch('https://detect.roboflow.com/removals-new/4?api_key=YOUR_API_KEY', {
      method: 'POST',
      body: form,
    });

    const data = await response.json();
    fs.unlinkSync(filepath); // rydder opp midlertidig fil

    res.json(data);
  } catch (error) {
    console.error('Error in /api/analyze:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
