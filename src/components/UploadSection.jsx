import React, { useState } from "react";

const UploadSection = () => {
  const [status, setStatus] = useState("");

  const handleUpload = () => {
    setStatus("Upload funksjon ikke implementert enda.");
  };

  return (
    <section id="upload" className="py-16 px-4 text-center bg-gray-100">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">Upload Section Placeholder</h2>
        <p>Her kan du legge til opplastingsfunksjonalitet senere.</p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6">
          <button
            className="bg-dark text-white px-6 py-3 rounded hover:bg-gray-800"
            onClick={handleUpload}
          >
            Add to CRM
          </button>
          <button className="bg-primary text-white px-6 py-3 rounded hover:bg-orange-600" disabled>
            Download Report
          </button>
        </div>
        {status && <p className="text-sm text-gray-600 mt-4">{status}</p>}
      </div>
    </section>
  );
};

export default UploadSection;

