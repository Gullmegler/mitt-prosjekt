import React from "react";

export default function Prices() {
  const plans = [
    {
      name: "Starter",
      description: "Perfect for small teams starting out.",
    },
    {
      name: "Professional",
      description: "Best choice for growing removal companies.",
    },
    {
      name: "Enterprise",
      description: "Full control & advanced AI integrations.",
    },
  ];

  return (
    <section
      id="pricing"
      className="bg-gradient-to-b from-[#0d0d1a] to-[#111144] text-white py-20"
    >
      <h2 className="text-3xl font-bold text-center mb-12">Our Pricing Plans</h2>
      <div className="flex flex-col md:flex-row justify-center gap-6 max-w-6xl mx-auto px-4">
        {plans.map((plan, index) => (
          <div
            key={index}
            className="bg-[#1a1a2e] border border-purple-600 rounded-xl p-6 text-center shadow-lg hover:scale-105 transition-transform"
          >
            <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
            <p className="mb-6 text-gray-300">{plan.description}</p>
            <button className="bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-6 rounded-full transition">
              Choose
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
