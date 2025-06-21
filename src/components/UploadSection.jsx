import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import jsPDF from "jspdf";

export default function UploadSection() {
  const [fromAddress, setFromAddress] = useState("");
  const [toAddress, setToAddress] = useState("");
  const [distance, setDistance] = useState(null);
  const [duration, setDuration] = useState(null);
  const [loading, setLoading] = useState(false);
  const [aiData, setAiData] = useState(null);

  const handleDistanceCalculation = async () => {
    const apiKey = "AIzaSyCkl0wNrmaEdlGLB6Rdxv6KhE2P5LGFRg8";
    const url = `https://maps.googleapis.com/maps/api/distancematrix/json?units=metric&origins=${encodeURIComponent(
      fromAddress
    )}&destinations=${encodeURIComponent(toAddress)}&key=${apiKey}`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      if (data.rows[0].elements[0].status === "OK") {
        setDistance(data.rows[0].elements[0].distance.text);
        setDuration(data.rows[0].elements[0].duration.text);
      } else {
        alert("Distance calculation failed.");
      }
    } catch (error) {
      console.error("Error fetching distance:", error);
    }
  };

  const handleUpload = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    setLoading(true);
    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch(
        "https://infer.roboflow.com/removal-vision-model/2?api_key=rf_nqzS3THsPZUWoY9eLq0McupeZJ33",
        {
          method: "POST",
          body: formData
        }
      );

      const result = await response.json();
      const detected = result.predictions.map((p) => p.class);

      const summary = {
        volume: "~700 ft³",
        truckSize: "22 ft",
        staff: 3
      };

      const supplies = {
        smallBoxes: 25,
        largeBoxes: 18,
        wardrobeBoxes: 6,
        blankets: 12,
        bubbleWrap: 4
      };

      const rooms = {
        detected: detected.slice(0, 10) // mock grouping
      };

      setAiData({ summary, supplies, rooms });
    } catch (err) {
      console.error("Upload error:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleDownload = () => {
    const doc = new jsPDF();
    doc.setFontSize(16);
    doc.text("AI Survey Report", 20, 20);
    doc.setFontSize(12);

    if (aiData) {
      doc.text("\nObjects Detected:", 20, 30);
      let y = 38;
      doc.text(`- ${aiData.rooms.detected.join(", ")}`, 30, y);
      y += 8;

      doc.text("\nSupply Estimate:", 20, y);
      y += 8;
      Object.entries(aiData.supplies).forEach(([key, value]) => {
        doc.text(`- ${key.replace(/([A-Z])/g, " $1")}: ${value}`, 30, y);
        y += 8;
      });

      doc.text("\nSummary:", 20, y);
      y += 8;
      doc.text(`- Volume: ${aiData.summary.volume}`, 30, y);
      y += 8;
      doc.text(`- Truck Size: ${aiData.summary.truckSize}`, 30, y);
      y += 8;
      doc.text(`- Staff Needed: ${aiData.summary.staff}`, 30, y);
      y += 8;
    }

    doc.text(`- Distance: ${distance || "Not calculated"}`, 30, y);
    y += 8;
    doc.text(`- Estimated Time: ${duration || "Not calculated"}`, 30, y);

    doc.save("ai-survey-report.pdf");
  };

  return (
    <section className="py-12 px-4 md:px-8 bg-gray-50">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">AI Analysis</h2>
        <p className="text-gray-600 mb-6">
          Upload a video, image or PDF. Our AI detects furniture, appliances and estimates supplies automatically.
        </p>

        <input
          type="file"
          accept="image/*,video/*"
          onChange={handleUpload}
          className="mb-4 block mx-auto"
        />

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Button disabled className="w-full sm:w-auto" variant="outline">
            Add to CRM (coming)
          </Button>
          <Button className="w-full sm:w-auto" variant="secondary" onClick={handleDownload}>
            Download Report
          </Button>
        </div>

        <div className="mb-8 grid md:grid-cols-2 gap-4 text-left">
          <div>
            <label className="block text-sm font-medium text-gray-700">From Address</label>
            <input
              type="text"
              className="mt-1 w-full p-2 border border-gray-300 rounded-md"
              value={fromAddress}
              onChange={(e) => setFromAddress(e.target.value)}
              placeholder="e.g. 123 Baker Street, London"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">To Address</label>
            <input
              type="text"
              className="mt-1 w-full p-2 border border-gray-300 rounded-md"
              value={toAddress}
              onChange={(e) => setToAddress(e.target.value)}
              placeholder="e.g. 456 Oxford Road, Manchester"
            />
          </div>
        </div>
        <Button onClick={handleDistanceCalculation} className="mb-6">Calculate Distance</Button>

        {aiData && (
          <div className="grid gap-6 md:grid-cols-3">
            <Card className="bg-white shadow-md rounded-2xl p-4">
              <CardContent>
                <h3 className="text-xl font-semibold mb-2">Supply Estimate</h3>
                <ul className="text-left text-sm text-gray-700 list-disc list-inside">
                  <li>{aiData.supplies.smallBoxes}x Small Boxes</li>
                  <li>{aiData.supplies.largeBoxes}x Large Boxes</li>
                  <li>{aiData.supplies.wardrobeBoxes}x Wardrobe Boxes</li>
                  <li>{aiData.supplies.blankets}x Moving Blankets</li>
                  <li>{aiData.supplies.bubbleWrap}x Bubble Wrap Rolls</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-md rounded-2xl p-4">
              <CardContent>
                <h3 className="text-xl font-semibold mb-2">Objects Detected</h3>
                <ul className="text-left text-sm text-gray-700 list-disc list-inside">
                  {aiData.rooms.detected.slice(0, 5).map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
                {aiData.rooms.detected.length > 5 && (
                  <a href="#" className="text-blue-600 text-sm mt-2 inline-block">See more</a>
                )}
              </CardContent>
            </Card>

            <Card className="bg-white shadow-md rounded-2xl p-4">
              <CardContent>
                <h3 className="text-xl font-semibold mb-2">Summary</h3>
                <ul className="text-left text-sm text-gray-700 list-disc list-inside">
                  <li>Volume: {aiData.summary.volume}</li>
                  <li>Truck Size: {aiData.summary.truckSize}</li>
                  <li>Staff Needed: {aiData.summary.staff}</li>
                  <li>Distance: {distance || "Not calculated"}</li>
                  <li>Estimated Time: {duration || "Not calculated"}</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </section>
  );
}
