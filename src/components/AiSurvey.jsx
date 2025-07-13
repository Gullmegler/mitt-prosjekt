import React from "react";

export default function AiSurvey() {
  return (
    <section id="aisurvey" className="bg-white py-12">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">How Our AI Survey Works</h2>
        <p className="mb-6">
          Our AI-driven survey helps your customers quickly and easily document their items before the move.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-gray-100 rounded shadow">
            <h3 className="text-xl font-semibold mb-2">Step 1: Capture</h3>
            <p>Customers take photos or videos of their rooms and items.</p>
          </div>
          <div className="p-6 bg-gray-100 rounded shadow">
            <h3 className="text-xl font-semibold mb-2">Step 2: AI Analyze</h3>
            <p>Our AI detects objects and generates an instant inventory.</p>
          </div>
          <div className="p-6 bg-gray-100 rounded shadow">
            <h3 className="text-xl font-semibold mb-2">Step 3: Quote</h3>
            <p>You receive a ready-made summary to prepare a fast, accurate quote.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
