import React, { useState } from 'react';
import axios from 'axios';

function UploadSection() {
  const [file, setFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (event) => {
    const uploadedFile = event.target.files[0];
    setFile(uploadedFile);
    setPreviewUrl(URL.createObjectURL(uploadedFile));
    setResult(null);
    setError(null);
  };

  const handleSubmit = async () => {
    if (!file) return;
    setLoading(true);
    setError(null);

    const formData = new FormData();
    formData.append('image', file);

    try {
      const response = await axios.post(
        'https://mitt-prosjekt-production.up.railway.app/api/analyze',
        formData,
        { headers: { 'Content-Type': 'multipart/form-data' } }
      );
      setResult(response.data);
    } catch (err) {
      console.error(err);
      setError('Noe gikk galt under analysen.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 max-w-xl mx-auto">
      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="block mb-4"
      />
      {previewUrl && (
        <div className="mb-4">
          <img
            src={previewUrl}
            alt="Preview"
            className="w-full max-h-64 object-contain border rounded"
          />
        </div>
      )}
      <button
        onClick={handleSubmit}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        disabled={loading}
      >
        {loading ? "Analyserer..." : "Analyze"}
      </button>

      {error && <p className="text-red-500 mt-4">{error}</p>}

      {result && (
        <div className="mt-6 space-y-4">
          <div>
            <h3 className="font-semibold text-lg">Detected Objects</h3>
            <ul className="list-disc ml-5">
              {result.objects?.map((item, i) => (
                <li key={`obj-${i}`}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-lg">Detected Text</h3>
            <ul className="list-disc ml-5">
              {result.text?.map((item, i) => (
                <li key={`text-${i}`}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-lg">Detected Logos</h3>
            <ul className="list-disc ml-5">
              {result.logos?.map((item, i) => (
                <li key={`logo-${i}`}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default UploadSection;
