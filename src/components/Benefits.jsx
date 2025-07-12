import React from "react";

export default function Benefits() {
  return (
    <section className="bg-[#fef3c7] text-gray-900 py-20 px-6 flex flex-col md:flex-row items-center gap-12">
      <div className="flex-1">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6">Why Use AI Removals CRM</h2>
        <ul className="text-lg space-y-3">
          <li>Dashboard with full control and real-time overview</li>
          <li>CRM calendar with all job details — no extra clicks</li>
          <li>AI advice with smart task reminders</li>
          <li>AI-integrated video & photo surveys that impress customers</li>
          <li>Boost number of surveys by 60%</li>
        </ul>
      </div>
      <div className="flex-1 flex justify-center">
        <img
          src="/survey-agent.png"
          alt="Survey agent"
          className="w-full max-w-md rounded-lg shadow-xl"
        />
      </div>
    </section>
  );
}
