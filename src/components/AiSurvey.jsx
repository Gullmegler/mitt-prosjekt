import React from "react";
import { CameraIcon, CpuIcon, FileTextIcon } from "lucide-react";

export default function AiSurvey() {
  const steps = [
    {
      title: "Step 1: Capture",
      description: "Customers take photos or videos of their rooms and items.",
      icon: <CameraIcon className="h-10 w-10 text-purple-500" />,
    },
    {
      title: "Step 2: AI Analyze",
      description: "Our AI detects objects and generates an instant inventory.",
      icon: <CpuIcon className="h-10 w-10 text-purple-500" />,
    },
    {
      title: "Step 3: Quote",
      description: "You receive a ready-made summary to prepare a fast, accurate quote.",
      icon: <FileTextIcon className="h-10 w-10 text-purple-500" />,
    },
  ];

  return (
    <section
      id="survey"
      className="bg-gradient-to-b from-[#0d0d1a] to-[#111144] text-white py-20"
    >
      <h2 className="text-3xl font-bold text-center mb-12">How Our AI Survey Works</h2>
      <div className="flex flex-col md:flex-row justify-center gap-8 max-w-6xl mx-auto px-4">
        {steps.map((step, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center bg-[#1a1a2e] rounded-2xl p-6 shadow-xl hover:-translate-y-2 transition-transform border border-transparent hover:border-purple-600"
          >
            {step.icon}
            <h3 className="font-semibold mt-4 mb-2 text-purple-400">{step.title}</h3>
            <p className="text-gray-300">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
