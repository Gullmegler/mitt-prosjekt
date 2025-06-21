import React, { useState } from "react";

const Card = ({ children }) => (
  <div className="rounded-xl border bg-white p-4 shadow">{children}</div>
);

const CardContent = ({ children }) => (
  <div className="mt-2 text-sm text-gray-600">{children}</div>
);

const Button = ({ children, ...props }) => (
  <button
    className="mt-4 rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 disabled:opacity-50"
    {...props}
  >
    {children}
  </button>
);

export default function UploadSection() {
  const [file, setFile] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleUpload = async () => {
    if (!file) return;
    setLoading(true);
    const formData = new FormData();
    formData.append("image", file);

    try {
      const res = await fetch("/api/analyze", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      setResult(data);
    } catch (err) {
      console.error("Error uploading file", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="px-4 py-12 md:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Last opp bilde eller video
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          Vi analyserer innholdet og viser resultatene i rutene under.
        </p>
      </div>

      <div className="mt-8 flex flex-col items-center gap-4">
        <input
          type="file"
          accept="image/*,video/*"
          onChange={(e) => setFile(e.target.files[0])}
          className="w-full max-w-xs border p-2"
        />
        <Button onClick={handleUpload} disabled={loading}>
          {loading ? "Laster opp..." : "Analyser"}
        </Button>
      </div>

      {result && (
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          <Card>
            <h3 className="text-lg font-semibold">Prediksjoner</h3>
            <CardContent>
              <pre className="whitespace-pre-wrap text-sm">{JSON.stringify(result.predictions, null, 2)}</pre>
            </CardContent>
          </Card>
          <Card>
            <h3 className="text-lg font-semibold">Antall objekter</h3>
            <CardContent>{result.count_objects}</CardContent>
          </Card>
          <Card>
            <h3 className="text-lg font-semibold">Bilde med bokser</h3>
            <CardContent>
              {result.output_image ? (
                <img src={result.output_image} alt="Analysert" className="rounded" />
              ) : (
                "Ingen bilde tilgjengelig"
              )}
            </CardContent>
          </Card>
        </div>
      )}
    </section>
  );
}
