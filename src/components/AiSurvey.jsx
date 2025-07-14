import React from "react";

export default function AiSurvey() {
  const steps = [
    {
      title: "Step 1: Capture",
      description: "Customers take photos or videos of their rooms and items."
    },
    {
      title: "Step 2: AI Analyze",
      description: "Our AI detects objects and generates an instant inventory."
    },
    {
      title: "Step 3: Quote",
      description: "You receive a ready-made summary to prepare a fast, accurate quote."
    }
  ];

  return (
    <section id="survey" className="bg-gradient-to-b from-purple-700 to-purple-900 text-white py-20">
      <h2 className="text-3xl font-bold text-center mb-10">How Our AI Survey Works</h2>
      <div className="flex flex-col md:flex-row justify-center gap-6 max-w-5xl mx-auto">
        {steps.map((step, index) => (
          <div key={index} className="bg-purple-600 rounded-lg p-6 flex-1 shadow-lg">
            <h3 className="font-bold mb-2">{step.title}</h3>
            <p>{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
