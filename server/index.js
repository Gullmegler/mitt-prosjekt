import express from "express";
import cors from "cors";
import multer from "multer";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// Setup __dirname since we are using ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3001;

// Lag "uploads"-mappe hvis den ikke finnes
const uploadsDir = path.join(__dirname, "uploads");
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir);
}

// Konfigurer Multer for filopplasting
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, uploadsDir),
  filename: (req, file, cb) => cb(null, `${Date.now()}-${file.originalname}`),
});
const upload = multer({ storage });

// CORS-konfigurasjon
app.use(cors({
  origin: ["http://localhost:3000", "https://airemovals.co.uk"]
}));
app.use(express.json());

// GET / route for helsesjekk
app.get("/", (req, res) => {
  res.send("Backend API kjører");
});

// POST /api/analyze – Simulert analyse
app.post("/api/analyze", upload.single("file"), (req, res) => {
  try {
    const file = req.file;
    if (!file) {
      return res.status(400).json({ error: "Ingen fil mottatt" });
    }

    // Her kan du koble til faktisk analyse senere
    res.json({
      message: "Analyse fullført",
      filename: file.originalname,
      path: file.path
    });
  } catch (error) {
    console.error("Feil under analyse:", error);
    res.status(500).json({ error: "Analysefeil" });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server kjører på http://localhost:${PORT}`);
});
