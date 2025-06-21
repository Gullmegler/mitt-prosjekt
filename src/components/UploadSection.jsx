import React, { useState } from "react";

export default function UploadSection() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [predictions, setPredictions] = useState([]);
  const [labelList, setLabelList] = useState([]);
  const [outputImage, setOutputImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
    setPredictions([]);
    setLabelList([]);
    setOutputImage(null);
  };

  const handleUpload = async () => {
    if (!selectedFile) return;
    setLoading(true);

    const reader = new FileReader();
    reader.onloadend = async () => {
      const base64Data = reader.result.split(",")[1];

      try {
        const response = await fetch("https://detect.roboflow.com/airemovalsdetector/detect-count-and-visualize", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer rf_nqzS3THsPZUWoY9eLq0McupeZJ33",
          },
          body: JSON.stringify({
            inputs: [
              {
                type: selectedFile.type.startsWith("video/") ? "InferenceVideo" : "InferenceImage",
                name: "image",
                data: base64Data,
              },
            ],
          }),
        });

        const result = await response.json();
        setPredictions(result.predictions || []);
        setOutputImage(result.output_image || null);
        setLabelList((result.predictions || []).map((p) => p.class));
      } catch (error) {
        console.error("Error analyzing file:", error);
      } finally {
        setLoading(false);
      }
    };

    reader.readAsDataURL(selectedFile);
  };

  return (
    <div className="py-12 px-4 text-center bg-white">
      <h2 className="text-2xl font-bold mb-4">Upload an Image or Video</h2>
      <input
        type="file"
        accept="image/*,video/*"
        onChange={handleFileChange}
        className="mb-4"
      />
      <br />
      <button
        onClick={handleUpload}
        disabled={!selectedFile || loading}
        className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
      >
        {loading ? "Analyzing..." : "Analyze File"}
      </button>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="border p-4 rounded shadow">
          <h3 className="font-semibold mb-2">Prediction Count</h3>
          <p>{predictions.length}</p>
        </div>
        <div className="border p-4 rounded shadow">
          <h3 className="font-semibold mb-2">Detected Labels</h3>
          <ul className="text-sm">
            {labelList.map((label, index) => (
              <li key={index}>{label}</li>
            ))}
          </ul>
        </div>
        <div className="border p-4 rounded shadow">
          <h3 className="font-semibold mb-2">Preview</h3>
          {outputImage ? (
            <img
              src={`data:image/jpeg;base64,${outputImage}`}
              alt="Analyzed Output"
              className="mx-auto max-w-full"
            />
          ) : (
            <p>No preview available.</p>
          )}
        </div>
      </div>
    </div>
  );
}
