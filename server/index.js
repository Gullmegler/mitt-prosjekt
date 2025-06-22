const express = require("express");
const cors = require("cors");
const multer = require("multer");

const app = express();
const port = 4000;

app.use(cors());
app.use(express.json());

// Test-endepunkt
app.get("/", (req, res) => {
  res.send("Server is running.");
});

// API-endepunkt for bildeanalyse
app.post("/api/analyze", (req, res) => {
  const { imageBase64 } = req.body;

  if (!imageBase64) {
    return res.status(400).json({ error: "Missing imageBase64" });
  }

  // Simulert analyse
  console.log("Image received for analysis");
  res.json({
    message: "Image received and processed",
    result: {
      detectedItems: ["Sofa", "Table", "Lamp"]
    }
  });
});

// Start serveren
app.listen(port, () => {
  console.log(`✅ Server is running at http://localhost:${port}`);
});
