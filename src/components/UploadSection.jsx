import React, { useState } from "react";
import jsPDF from "jspdf";

export default function UploadSection() {
  const [file, setFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [predictions, setPredictions] = useState([]);
  const [analyzed, setAnalyzed] = useState(false);

  const handleFileChange = (e) => {
    const uploadedFile = e.target.files[0];
    setFile(uploadedFile);
    setPreviewUrl(URL.createObjectURL(uploadedFile));
    analyze(uploadedFile);
  };

  const analyze = async (imageFile) => {
    const formData = new FormData();
    formData.append("image", imageFile);

    try {
      const response = await fetch("https://detect.roboflow.com/airemovalsdetector/2", {
        method: "POST",
        headers: {
          Authorization: "Bearer rf_nqzS3THsPZUWoY9eLq0McupeZJ33",
        },
        body: formData,
      });

      const result = await response.json();
      setPredictions(result.predictions || []);
      setAnalyzed(true);
    } catch (error) {
      console.error("Error analyzing image:", error);
    }
  };

  const downloadReport = () => {
    const doc = new jsPDF();
    doc.setFontSize(16);
    doc.text("AI Removals CRM Report", 20, 20);
    doc.setFontSize(12);
    doc.text(`Detected Items: ${predictions.length}`, 20, 40);
    doc.text(`Supply Estimate: ${predictions.length * 3}`, 20, 50);
    doc.text(`Summary: Detected ${predictions.length} object(s)`, 20, 60);
    doc.text("Item List:", 20, 80);

    predictions.forEach((p, i) => {
      doc.text(`- ${p.class}`, 25, 90 + i * 10);
    });

    doc.save("AI-Removals-Report.pdf");
  };

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-2xl font-semibold text-center mb-4">Upload an Image or Video</h2>
        <div className="flex flex-col items-center space-y-4">
          <input
            type="file"
            accept="image/*,video/*"
            onChange={handleFileChange}
            className="mb-4"
          />

          {analyzed && (
            <div className="flex flex-col sm:flex-row justify-center gap-4 w-full">
              <div className="bg-white border rounded-lg p-4 flex-1 text-center">
                <h3 className="font-bold">Detected Items</h3>
                <p>{predictions.length}</p>
              </div>
              <div className="bg-white border rounded-lg p-4 flex-1 text-center">
                <h3 className="font-bold">Supply Estimate</h3>
                <p>{predictions.length * 3}</p>
              </div>
              <div className="bg-white border rounded-lg p-4 flex-1 text-center">
                <h3 className="font-bold">Summary</h3>
                <p>
                  {predictions.length > 0
                    ? `Detected ${predictions.length} object(s)`
                    : "No objects detected"}
                </p>
              </div>
            </div>
          )}

          {analyzed && (
            <div className="flex gap-4 mt-4">
              <button
                className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
                onClick={() => alert("CRM integration coming soon")}
              >
                Add to CRM
              </button>
              <button
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                onClick={downloadReport}
              >
                Download Report
              </button>
            </div>
          )}

          {previewUrl && (
            <div className="mt-6">
              <h4 className="text-center font-medium mb-2">Preview</h4>
              {file.type.startsWith("video") ? (
                <video controls width="480" src={previewUrl} />
              ) : (
                <img src={previewUrl} alt="preview" className="w-80 rounded shadow" />
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
