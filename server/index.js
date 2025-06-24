import express from 'express';
import cors from 'cors';
import multer from 'multer';

const app = express();
const port = process.env.PORT || 4000;

// Viktig: angi nøyaktig frontend-opprinnelse
app.use(cors({
  origin: 'https://airemovals.co.uk'
}));

// Body-parser / multer etc.
const upload = multer({ storage: multer.memoryStorage() });

app.post('/api/analyze', upload.single('image'), async (req, res) => {
  try {
    // Her kan du simulere et svar for testing:
    res.json({
      objects: ['sofa', 'table'],
      text: ['Hello'],
      logos: ['IKEA']
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server kjører på port ${port}`);
});
