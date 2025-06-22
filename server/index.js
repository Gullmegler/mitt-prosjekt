const express = require("express");
const cors = require("cors");
const multer = require("multer");
const FormData = require("form-data");

const app = express();
const port = 4000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server is running.");
});

app.post("/api/analyze", (req, res) => {
  const { imageBase64 } = req.body;

  if (!imageBase64) {
    return res.status(400).json({ error: "Missing imageBase64 in request body" });
  }

  // Simulert analyse – her kan du bruke en AI-funksjon senere
  console.log("Received image for analysis");
  res.json({
    message: "Image received and processed.",
    result: {
      detectedItems: ["Box", "Chair", "Lamp"]
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
