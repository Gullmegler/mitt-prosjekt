const express = require("express");
const cors = require("cors");
const multer = require("multer");

const app = express();
const PORT = process.env.PORT || 4000;
const upload = multer();

app.use(cors());
app.use(express.json({ limit: "20mb" }));

// Helse-sjekk
app.get("/", (req, res) => {
  res.send("Server is running.");
});

// Endepunkt for analyse
app.post("/api/analyze", upload.none(), (req, res) => {
  const { imageBase64 } = req.body;

  if (!imageBase64) {
    return res.status(400).json({ error: "Missing imageBase64" });
  }

  console.log("✅ Image received for analysis");

  // Dummy respons
  const dummyResult = ["Sofa", "Chair", "Lamp"];
  res.status(200).json({
    message: "Image processed",
    result: dummyResult,
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});

