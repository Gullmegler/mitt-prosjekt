import React from "react";

export default function Benefits() {
  return (
    <section className="bg-primary text-white py-16 px-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between max-w-7xl">
        <div className="md:w-1/2 md:pr-10">
          <h2 className="text-3xl font-bold mb-6">Why Use AI Removals CRM</h2>
          <ul className="space-y-4">
            <li className="flex items-start">
              <span className="text-orange-500 mr-2">✔</span>
              Dashboard with full control and real-time overview
            </li>
            <li className="flex items-start">
              <span className="text-orange-500 mr-2">✔</span>
              CRM calendar with all job details — no extra clicks
            </li>
            <li className="flex items-start">
              <span className="text-orange-500 mr-2">✔</span>
              AI advice with smart task reminders
            </li>
            <li className="flex items-start">
              <span className="text-orange-500 mr-2">✔</span>
              AI-integrated video & photo surveys that impress customers
            </li>
            <li className="flex items-start">
              <span className="text-orange-500 mr-2">✔</span>
              Boost number of surveys by 60%
            </li>
          </ul>
        </div>
        <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
          <img
            src="/survey-agent.png"
            alt="Survey agent"
            className="max-w-xs md:max-w-sm"
          />
        </div>
      </div>
    </section>
  );
}
