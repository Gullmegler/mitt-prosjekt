const express = require("express");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 4000;

// Middleware
app.use(cors());
app.use(express.json({ limit: "20mb" }));

// Test-endepunkt
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
