import React from "react";

export default function Benefits() {
  const points = [
    "Dashboard with full control and real-time overview",
    "CRM calendar with all job details — no extra clicks",
    "AI advice with smart task reminders",
    "AI-integrated video & photo surveys that impress customers",
    "Boost number of surveys by 60%",
  ];

  return (
    <section className="bg-gradient-to-b from-[#0d1117] to-[#161b22] text-white py-20">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold mb-6">Why Use AI Removals CRM</h2>
          <ul className="space-y-4">
            {points.map((point, index) => (
              <li key={index} className="flex items-start">
                <span className="bg-green-600 rounded-full text-white w-6 h-6 flex items-center justify-center mr-3">
                  ✓
                </span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
          <img
            src="/survey-agent.png"
            alt="Survey Agent"
            className="w-full max-w-sm"
          />
        </div>
      </div>
    </section>
  );
}
