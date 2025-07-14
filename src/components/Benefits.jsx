import React from "react";
import surveyImage from "/public/survey-agent.png";

export default function Benefits() {
  const benefits = [
    "Dashboard with full control and real-time overview",
    "CRM calendar with all job details — no extra clicks",
    "AI advice with smart task reminders",
    "AI-integrated video & photo surveys that impress customers",
    "Boost number of surveys by 60%",
  ];

  return (
    <section id="benefits" className="flex flex-col md:flex-row items-center justify-between py-20 px-8 bg-gradient-to-b from-[#0d1117] to-[#161b22] text-white">
      <div className="md:w-1/2">
        <h2 className="text-3xl font-bold mb-6">Why Use AI Removals CRM</h2>
        <ul className="space-y-4">
          {benefits.map((item, index) => (
            <li key={index} className="flex items-center">
              <span className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3">✓</span>
              {item}
            </li>
          ))}
        </ul>
      </div>
      <img src={surveyImage} alt="Survey Agent" className="mt-10 md:mt-0 md:ml-10 max-w-xs" />
    </section>
  );
}
