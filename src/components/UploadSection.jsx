import React, { useState } from "react";

function UploadSection() {
  const [result, setResult] = useState(null);
  const [image, setImage] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setImage(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = async () => {
    if (!image) return;
    try {
      const response = await fetch("http://localhost:4000/api/analyze", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ imageBase64: image }),
      });
      const data = await response.json();
      setResult(data.result);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="p-4">
      <input type="file" accept="image/*" onChange={handleFileChange} />
      <button onClick={handleSubmit} className="mt-2 p-2 bg-blue-500 text-white rounded">
        Analyze
      </button>
      {result && (
        <div className="mt-4">
          <h3>Detected:</h3>
          <ul>
            {result.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default UploadSection;
