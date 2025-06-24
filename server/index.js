const express = require("express");
const cors = require("cors");
const multer = require("multer");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3001;

// Sørg for at uploads-mappen finnes
const uploadsDir = path.join(__dirname, "uploads");
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir);
}

// Konfigurer multer for filopplasting
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, uploadsDir),
  filename: (req, file, cb) => cb(null, `${Date.now()}-${file.originalname}`)
});
const upload = multer({ storage });

// Tillat frontend-domener
app.use(cors({
  origin: ["http://localhost:3000", "https://airemovals.co.uk", "https://www.airemovals.co.uk"]
}));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend API kjører");
});

app.post("/api/analyze", upload.single("file"), (req, res) => {
  try {
    const file = req.file;
    if (!file) {
      return res.status(400).json({ error: "Ingen fil mottatt" });
    }

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

app.listen(PORT, () => {
  console.log(`Server kjører på http://localhost:${PORT}`);
});
