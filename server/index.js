const express = require("express");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 4000;
const PORT = process.env.PORT || 4000;
 1d4b4eed (Oppdater backend index.js)

// Middleware
app.use(cors());
app.use(express.json({ limit: "20mb" }));

// Test-endepunkt
app.use(express.json({ limit: "10mb" }));

const upload = multer();

 1d4b4eed (Oppdater backend index.js)
app.get("/", (req, res) => {
  res.send("Server is running.");
});

// Analyse-endepunkt
app.post("/api/analyze", (req, res) => {
  const { imageBase64 } = req.body;

  if (!imageBase64) {
    return res.status(400).json({ error: "Missing imageBase64" });
  }

  console.log("✅ Image received for analysis");

  // Simulert respons
  res.json({
    message: "Image processed",
    result: {
      detectedItems: ["Sofa", "Chair", "Lamp"],
      estimate: 3 * 3, // eks: 3 objekter, 3 esker hver
    },
  });
});

// Start server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
app.post("/api/analyze", upload.none(), (req, res) => {
  const { imageBase64 } = req.body;

  if (!imageBase64) {
    return res.status(400).json({ error: "Missing imageBase64 field" });
  }

  // Dummy result – replace with real model inference
  const dummyResult = ["sofa", "lamp", "plant"];

  return res.status(200).json({
    message: "Image received",
    result: dummyResult,
  });
});

app.listen(PORT, () => {
  console.log(`✅ Server is running at http://localhost:${PORT}`);
});

 1d4b4eed (Oppdater backend index.js)
