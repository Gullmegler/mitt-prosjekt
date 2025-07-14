import React from "react";

export default function Benefits() {
  return (
    <section className="bg-github text-white flex flex-col md:flex-row items-center px-6 py-16">
      <div className="flex-1">
        <h2 className="text-3xl font-bold mb-6">Why Use AI Removals CRM</h2>
        <ul className="space-y-4">
          <li className="flex items-start">
            <span className="bg-green-600 text-white rounded-full p-1 mr-3 mt-1">✔</span>
            Dashboard with full control and real-time overview
          </li>
          <li className="flex items-start">
            <span className="bg-green-600 text-white rounded-full p-1 mr-3 mt-1">✔</span>
            CRM calendar with all job details — no extra clicks
          </li>
          <li className="flex items-start">
            <span className="bg-green-600 text-white rounded-full p-1 mr-3 mt-1">✔</span>
            AI advice with smart task reminders
          </li>
          <li className="flex items-start">
            <span className="bg-green-600 text-white rounded-full p-1 mr-3 mt-1">✔</span>
            AI-integrated video & photo surveys that impress customers
          </li>
          <li className="flex items-start">
            <span className="bg-green-600 text-white rounded-full p-1 mr-3 mt-1">✔</span>
            Boost number of surveys by 60%
          </li>
        </ul>
      </div>
      <div className="flex-1 mt-10 md:mt-0 md:ml-10">
        <img
          src="/survey-agent.png"
          alt="Survey agent"
          className="w-full max-w-md mx-auto"
        />
      </div>
    </section>
  );
}
