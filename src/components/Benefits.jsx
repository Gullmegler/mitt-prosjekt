import React from "react";
import surveyAgent from "/public/survey-agent.png";

export default function Benefits() {
  return (
    <section className="bg-github text-white px-4 py-20 flex flex-col md:flex-row items-center justify-between">
      <ul className="mb-8 md:mb-0 md:w-1/2">
        <h2 className="text-2xl font-bold mb-4">Why Use AI Removals CRM</h2>
        {[
          "Dashboard with full control and real-time overview",
          "CRM calendar with all job details — no extra clicks",
          "AI advice with smart task reminders",
          "AI-integrated video & photo surveys that impress customers",
          "Boost number of surveys by 60%",
        ].map((text, index) => (
          <li key={index} className="flex items-center mb-2">
            <span className="inline-flex justify-center items-center w-6 h-6 rounded-full bg-primary text-white mr-2">
              ✓
            </span>
            {text}
          </li>
        ))}
      </ul>
      <img src={surveyAgent} alt="Survey Agent" className="md:w-1/2 max-w-xs" />
    </section>
  );
}
