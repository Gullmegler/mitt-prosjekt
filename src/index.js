import express from "express";
import cors from "cors";
import fetch from "node-fetch";
import FormData from "form-data";

const app = express();
app.use(cors());
app.use(express.json({ limit: "10mb" }));

app.post("/api/analyze", async (req, res) => {
  try {
    const { imageBase64 } = req.body;

    const buffer = Buffer.from(imageBase64.split(",")[1], "base64");
    const formData = new FormData();
    formData.append("image", buffer, {
      filename: "upload.jpg",
      contentType: "image/jpeg",
    });

    const response = await fetch("https://detect.roboflow.com/airemovalsdetector/2", {
      method: "POST",
      headers: {
        Authorization: "Bearer rf_nqzS3THsPZUWoY9eLq0McupeZJ33",
      },
      body: formData,
    });

    const result = await response.json();
    res.json(result);
  } catch (err) {
    console.error("Analysis error:", err);
    res.status(500).json({ error: "Failed to analyze image." });
  }
});

app.listen(4000, () => console.log("✅ Express server running on http://localhost:4000"));
