import React from "react";

export default function Benefits() {
  return (
    <section className="bg-primaryDark text-white py-20 px-4 flex flex-col md:flex-row items-center justify-center gap-8">
      <div className="max-w-lg">
        <h2 className="text-3xl font-bold mb-6">Why Use AI Removals CRM</h2>
        <ul className="space-y-4 text-left">
          <li className="flex items-start">
            <span className="text-orange mr-2">✔</span>
            Dashboard with full control and real-time overview
          </li>
          <li className="flex items-start">
            <span className="text-orange mr-2">✔</span>
            CRM calendar with all job details — no extra clicks
          </li>
          <li className="flex items-start">
            <span className="text-orange mr-2">✔</span>
            AI advice with smart task reminders
          </li>
          <li className="flex items-start">
            <span className="text-orange mr-2">✔</span>
            AI-integrated video & photo surveys that impress customers
          </li>
          <li className="flex items-start">
            <span className="text-orange mr-2">✔</span>
            Boost number of surveys by 60%
          </li>
        </ul>
      </div>
      <img
        src="/survey-agent.png"
        alt="Survey Agent"
        className="w-full max-w-sm"
      />
    </section>
  );
}
