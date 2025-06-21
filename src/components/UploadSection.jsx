import React, { useState } from "react";

const UploadSection = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [result, setResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
    setResult(null);
  };

  const handleUpload = async () => {
    if (!selectedFile) return;

    setIsLoading(true);
    const formData = new FormData();
    formData.append("image", selectedFile);

    try {
      const response = await fetch("https://detect.roboflow.com/airemovalsdetector/detect", {
        method: "POST",
        headers: {
          Authorization: "Bearer rf_nqzS3THsPZUWoY9eLq0McupeZJ33",
        },
        body: formData,
      });

      const data = await response.json();
      setResult(data);
    } catch (error) {
      console.error("Upload error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <div className="mb-6">
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="block w-full text-sm text-gray-500
                     file:mr-4 file:py-2 file:px-4
                     file:rounded-md file:border-0
                     file:text-sm file:font-semibold
                     file:bg-blue-50 file:text-blue-700
                     hover:file:bg-blue-100"
        />
      </div>

      <button
        onClick={handleUpload}
        disabled={!selectedFile || isLoading}
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded disabled:opacity-50"
      >
        {isLoading ? "Laster opp..." : "Analyser bilde"}
      </button>

      {result && (
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="p-4 border rounded shadow">
            <h3 className="font-semibold mb-2">Prediksjoner</h3>
            <pre className="text-sm overflow-x-auto">{JSON.stringify(result.predictions, null, 2)}</pre>
          </div>
          <div className="p-4 border rounded shadow">
            <h3 className="font-semibold mb-2">Antall objekter</h3>
            <p>{result.predictions?.length ?? 0}</p>
          </div>
          <div className="p-4 border rounded shadow">
            <h3 className="font-semibold mb-2">Bilde</h3>
            {selectedFile && (
              <img
                src={URL.createObjectURL(selectedFile)}
                alt="Uploaded preview"
                className="w-full h-auto rounded"
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default UploadSection;
