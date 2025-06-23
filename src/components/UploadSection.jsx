import React, { useState } from "react";

function UploadSection() {
  const [image, setImage] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setImage(reader.result);
      setResult(null); // reset result
      setError("");
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = async () => {
    if (!image) return;
    setLoading(true);
    setError("");
    try {
      const response = await fetch("http://localhost:4000/api/analyze", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ imageBase64: image }),
      });
      const data = await response.json();
      setResult(data.result); // forventet format: { objects: [], text: [], logos: [] }
    } catch (err) {
      setError("Noe gikk galt under analysen.");
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
      {image && (
        <div className="mb-4">
          <img
            src={image}
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
