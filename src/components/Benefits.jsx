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
    <section className="flex flex-col md:flex-row items-center justify-between gap-10 p-10 bg-background">
      <div className="flex-1">
        <h2 className="text-3xl font-bold mb-4">Why Use AI Removals CRM</h2>
        <ul className="space-y-3">
          {benefits.map((item, idx) => (
            <li key={idx} className="flex items-center">
              <span className="bg-primary rounded-full w-6 h-6 flex items-center justify-center text-white mr-3">
                ✓
              </span>
              {item}
            </li>
          ))}
        </ul>
      </div>
      <img
        src={surveyImage}
        alt="Survey Agent"
        className="flex-1 max-w-md rounded shadow"
      />
    </section>
  );
}
