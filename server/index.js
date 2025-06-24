const express = require("express");
const cors = require("cors");
const multer = require("multer");
const path = require("path");
const fs = require("fs");

const app = express();
const port = process.env.PORT || 4000;

// CORS config: tillat React-nettstedet i prod og localhost i dev
const allowedOrigins = [
  "https://airemovals.co.uk",
  "http://localhost:3000"
];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Ikke tillatt av CORS"));
    }
  }
}));

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadDir = "uploads";
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir);
    }
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    const timestamp = Date.now();
    const ext = path.extname(file.originalname);
    cb(null, `${file.fieldname}-${timestamp}${ext}`);
  }
});

const upload = multer({ storage });

app.post("/api/analyze", upload.single("image"), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: "Ingen fil ble lastet opp" });
  }

  // Her ville du normalt kalt på ML-modell eller ekstern analyse
  res.json({
    message: "Analyse mottatt",
    file: req.file.filename,
    size: req.file.size
  });
});

app.listen(port, () => {
  console.log(`Server kjører på port ${port}`);
});
