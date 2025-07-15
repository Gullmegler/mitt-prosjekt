import React from "react";

export default function AiSurvey() {
  const steps = [
    {
      title: "Step 1: Capture",
      description: "Customers take photos or videos of their rooms and items.",
    },
    {
      title: "Step 2: AI Analyze",
      description: "Our AI detects objects and generates an instant inventory.",
    },
    {
      title: "Step 3: Quote",
      description: "You receive a ready-made summary to prepare a fast, accurate quote.",
    },
  ];

  return (
    <section
      id="survey"
      className="bg-gradient-to-b from-[#0d0d1a] to-[#111144] text-white py-20"
    >
      <h2 className="text-3xl font-bold text-center mb-12">How Our AI Survey Works</h2>
      <div className="flex flex-col md:flex-row justify-center gap-6 max-w-6xl mx-auto px-4">
        {steps.map((step, index) => (
          <div
            key={index}
            className="flex-1 bg-[#1a1a2e] border border-purple-600 rounded-xl p-6 shadow-lg hover:scale-105 transition-transform"
          >
            <h3 className="font-bold mb-2 text-purple-400">{step.title}</h3>
            <p className="text-gray-300">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
