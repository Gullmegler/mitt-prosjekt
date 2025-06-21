import React, { useState } from "react";

const UploadSection = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
    setPreviewUrl(URL.createObjectURL(file));
    setResult(null);
  };

  const handleUpload = async () => {
    if (!selectedFile) return;
    setLoading(true);

    const formData = new FormData();
    formData.append("image", selectedFile);

    try {
      const response = await fetch("https://detect.roboflow.com/airemovalsdetector/detect-count-and-visualize", {
        method: "POST",
        headers: {
          Authorization: "Bearer rf_nqzS3THsPZUWoY9eLq0McupeZJ33",
        },
        body: formData,
      });

      const data = await response.json();
      setResult(data);
    } catch (error) {
      console.error("Feil under opplasting:", error);
    }

    setLoading(false);
  };

  return (
    <div className="p-4 max-w-xl mx-auto">
      <div className="bg-white shadow-md rounded-xl p-6 space-y-4">
        <h2 className="text-2xl font-semibold text-gray-800">Last opp bilde eller video</h2>

        <input
          type="file"
          accept="image/*,video/*"
          onChange={handleFileChange}
          className="block w-full text-sm text-gray-600 file:mr-4 file:py-2 file:px-4 file:border-0 file:rounded-md file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
        />

        {previewUrl && (
          <img src={previewUrl} alt="Preview" className="rounded-lg w-full max-h-64 object-contain" />
        )}

        <button
          onClick={handleUpload}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition disabled:opacity-50"
          disabled={loading}
        >
          {loading ? "Laster opp..." : "Analyser bilde"}
        </button>

        {result && (
          <div className="mt-4">
            <h3 className="text-lg font-semibold mb-2">Resultat:</h3>
            <pre className="bg-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
              {JSON.stringify(result, null, 2)}
            </pre>
          </div>
        )}
      </div>
    </div>
  );
};

export default UploadSection;
