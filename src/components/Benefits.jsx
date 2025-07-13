import React from "react";

export default function Benefits() {
  return (
    <section className="bg-[#fff7d6] py-20 px-6 flex flex-col md:flex-row items-center justify-center">
      <div className="md:w-1/2 mb-8 md:mb-0 md:mr-12">
        <h2 className="text-3xl font-bold mb-6">Why Use AI Removals CRM</h2>
        <ul className="list-disc pl-5 space-y-2 text-gray-800">
          <li>Dashboard with full control and real-time overview</li>
          <li>CRM calendar with all job details — no extra clicks</li>
          <li>AI advice with smart task reminders</li>
          <li>AI-integrated video & photo surveys that impress customers</li>
          <li>Boost number of surveys by 60%</li>
        </ul>
      </div>
      <div className="md:w-1/2 flex justify-center">
        <img
          src="/survey-agent.png"
          alt="Survey Agent"
          className="rounded shadow-lg max-w-full h-auto"
        />
      </div>
    </section>
  );
}
