import React from "react";

export default function Benefits() {
  return (
    <section id="benefits" className="bg-[#0d1117] py-12 text-white">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold mb-6">Why Use AI Removals CRM</h2>
          <ul className="list-disc ml-6 space-y-2">
            <li>Dashboard with full control and real-time overview</li>
            <li>CRM calendar with all job details — no extra clicks</li>
            <li>AI advice with smart task reminders</li>
            <li>AI-integrated video & photo surveys that impress customers</li>
            <li>Boost number of surveys by 60%</li>
          </ul>
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
          <img
            src="/removals-company.png"
            alt="Removals Company"
            className="rounded-lg shadow-lg w-full max-w-md object-contain"
          />
        </div>
      </div>
    </section>
  );
}
