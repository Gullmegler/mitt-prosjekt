import React from "react";
import agentImg from "../public/survey-agent.png";

export default function Benefits() {
  return (
    <section id="benefits" className="bg-githubBlue text-white py-20 flex flex-col md:flex-row items-center justify-center px-6">
      <div className="md:w-1/2 md:pr-12 mb-10 md:mb-0 text-left">
        <h2 className="text-3xl font-bold mb-6">Why Use AI Removals CRM</h2>
        <ul className="space-y-4">
          <li className="flex items-center">
            <span className="text-orange mr-2">✔</span>
            Dashboard with full control and real-time overview
          </li>
          <li className="flex items-center">
            <span className="text-orange mr-2">✔</span>
            CRM calendar with all job details — no extra clicks
          </li>
          <li className="flex items-center">
            <span className="text-orange mr-2">✔</span>
            AI advice with smart task reminders
          </li>
          <li className="flex items-center">
            <span className="text-orange mr-2">✔</span>
            AI-integrated video & photo surveys that impress customers
          </li>
          <li className="flex items-center">
            <span className="text-orange mr-2">✔</span>
            Boost number of surveys by 60%
          </li>
        </ul>
      </div>
      <div className="md:w-1/2 flex justify-center">
        <img
          src={agentImg}
          alt="Survey agent"
          className="max-w-xs md:max-w-md"
        />
      </div>
    </section>
  );
}
