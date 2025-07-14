import React from "react";

export default function AiSurvey() {
  return (
    <section
      id="aisurvey"
      className="py-20 flex justify-center px-4"
      style={{
        background: "linear-gradient(180deg, #E2D5FF 0%, #6A58D3 50%, #1D1B4F 100%)",
      }}
    >
      <div className="bg-white/10 backdrop-blur-lg p-8 rounded-xl max-w-lg w-full text-white shadow-2xl text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">
          How Our AI Survey Works
        </h2>
        <p className="text-gray-300 mb-8">
          Our AI-driven survey helps your customers quickly and easily document their items before the move.
        </p>

        <div className="space-y-6 text-left">
          <div className="bg-white/10 rounded-xl p-4">
            <h3 className="font-semibold text-white mb-1">Step 1: Capture</h3>
            <p className="text-gray-300">
              Customers take photos or videos of their rooms and items.
            </p>
          </div>
          <div className="bg-white/10 rounded-xl p-4">
            <h3 className="font-semibold text-white mb-1">Step 2: AI Analyze</h3>
            <p className="text-gray-300">
              Our AI detects objects and generates an instant inventory.
            </p>
          </div>
          <div className="bg-white/10 rounded-xl p-4">
            <h3 className="font-semibold text-white mb-1">Step 3: Quote</h3>
            <p className="text-gray-300">
              You receive a ready-made summary to prepare a fast, accurate quote.
            </p>
          </div>
        </div>

        <a
          href="https://aisurvey.airemovals.co.uk"
          className="mt-8 inline-block bg-pink-500 hover:bg-pink-600 text-white font-semibold px-6 py-3 rounded transition"
        >
          Try AI Survey
        </a>
      </div>
    </section>
  );
}
