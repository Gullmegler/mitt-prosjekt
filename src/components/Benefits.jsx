import React from "react";
import surveyAgent from "/public/survey-agent.png"; // Sjekk korrekt importvei

export default function Benefits() {
  return (
    <section className="bg-[#fff5e9] text-black py-20 px-6 flex flex-col md:flex-row items-center justify-between gap-8">
      <div className="md:w-1/2">
        <h2 className="text-4xl font-extrabold mb-6">Why Use AI Removals CRM</h2>
        <ul className="space-y-4 text-lg">
          <li>Dashboard with full control and real-time overview</li>
          <li>CRM calendar with all job details — no extra clicks</li>
          <li>AI advice with smart task reminders</li>
          <li>AI-integrated video & photo surveys that impress customers</li>
          <li>Boost number of surveys by 60%</li>
        </ul>
      </div>
      <div className="md:w-1/2">
        <img src={surveyAgent} alt="Survey Agent" className="rounded-lg shadow-lg" />
      </div>
    </section>
  );
}
