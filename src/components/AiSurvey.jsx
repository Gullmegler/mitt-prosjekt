import React from "react";

export default function AiSurvey() {
  return (
    <section className="bg-github text-white py-16 px-4 flex justify-center">
      <div className="bg-gradient-to-b from-[#1f2937]/60 to-[#1f2937]/30 backdrop-blur-sm border border-gray-600 rounded-2xl shadow-xl max-w-lg w-full p-8 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">
          How Our AI Survey Works
        </h2>
        <p className="text-gray-300 mb-8">
          Our AI-driven survey helps your customers quickly and easily document their items before the move.
        </p>

        <div className="space-y-6 text-left">
          <div className="bg-[#ffffff0a] rounded-xl p-4 shadow-inner">
            <h3 className="font-semibold text-white mb-1">Step 1: Capture</h3>
            <p className="text-gray-400">
              Customers take photos or videos of their rooms and items.
            </p>
          </div>
          <div className="bg-[#ffffff0a] rounded-xl p-4 shadow-inner">
            <h3 className="font-semibold text-white mb-1">Step 2: AI Analyze</h3>
            <p className="text-gray-400">
              Our AI detects objects and generates an instant inventory.
            </p>
          </div>
          <div className="bg-[#ffffff0a] rounded-xl p-4 shadow-inner">
            <h3 className="font-semibold text-white mb-1">Step 3: Quote</h3>
            <p className="text-gray-400">
              You receive a ready-made summary to prepare a fast, accurate quote.
            </p>
          </div>
        </div>

        <button className="mt-8 bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded transition">
          Try AI Survey
        </button>
      </div>
    </section>
  );
}
