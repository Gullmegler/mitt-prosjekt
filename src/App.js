import React from "react";
import Image from "next/image";
import surveyAgent from "/public/survey-agent.png"; // Pass på at denne ligger i /public

export default function Benefits() {
  return (
    <section
      className="bg-gradient-to-r from-indigo-900 via-purple-900 to-black text-white py-20 px-6"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1">
          <h2 className="text-3xl font-bold mb-6">Why Use AI Removals CRM</h2>
          <ul className="space-y-4 text-lg">
            <li>Dashboard with full control and real-time overview</li>
            <li>CRM calendar with all job details — no extra clicks</li>
            <li>AI advice with smart task reminders</li>
            <li>AI-integrated video & photo surveys that impress customers</li>
            <li>Boost number of surveys by 60%</li>
          </ul>
        </div>
        <div className="flex-1">
          <Image
            src={surveyAgent}
            alt="Survey Agent"
            className="rounded-lg shadow-lg"
            priority
          />
        </div>
      </div>
    </section>
  );
}
