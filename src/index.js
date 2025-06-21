import express from "express";
import cors from "cors";
import fetch from "node-fetch";
import FormData from "form-data";

const app = express();
app.use(cors());
app.use(express.json({ limit: "10mb" }));

app.post("/api/analyze", async (req, res) => {
  try {
    const { imageBase64, filename = "upload" } = req.body;

    const matches = imageBase64.match(/^data:(.+);base64,(.+)$/);
    if (!matches) {
      return res.status(400).json({ error: "Invalid base64 format." });
    }

    const mimeType = matches[1];
    const base64Data = matches[2];
    const extension = mimeType.split("/")[1];
    const buffer = Buffer.from(base64Data, "base64");

    const formData = new FormData();
    formData.append("image", buffer, {
      filename: `${filename}.${extension}`,
      contentType: mimeType,
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
    res.status(500).json({ error: "Failed to analyze media." });
  }
});

app.listen(4000, () => console.log("✅ Express server running on http://localhost:4000"));
