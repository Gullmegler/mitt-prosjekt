import React from "react";

export default function Benefits() {
  const benefits = [
    "Dashboard with full control and real-time overview",
    "CRM calendar with all job details — no extra clicks",
    "AI advice with smart task reminders",
    "AI-integrated video & photo surveys that impress customers",
    "Boost number of surveys by 60%"
  ];

  return (
    <section className="flex flex-col md:flex-row items-center justify-between py-16 px-6 bg-[#0d1117] text-white">
      <div className="max-w-xl">
        <h2 className="text-3xl font-bold mb-6">Why Use AI Removals CRM</h2>
        <ul className="space-y-4">
          {benefits.map((point, idx) => (
            <li key={idx} className="flex items-center">
              <span className="bg-green-600 rounded-full w-6 h-6 flex items-center justify-center mr-3 text-white">✓</span>
              {point}
            </li>
          ))}
        </ul>
      </div>
      <img
        src="/survey-agent.png"
        alt="Survey Agent"
        className="w-full md:w-1/3 mt-8 md:mt-0 md:ml-12"
      />
    </section>
  );
}
