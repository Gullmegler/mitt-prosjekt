import React from "react";

export default function Benefits() {
  return (
    <section id="benefits" className="py-20 flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-4">
      <div className="text-white md:w-1/2">
        <h2 className="text-3xl font-bold mb-4">Why Use AI Removals CRM</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>Dashboard with full control and real-time overview</li>
          <li>CRM calendar with all job details — no extra clicks</li>
          <li>AI advice with smart task reminders</li>
          <li>AI-integrated video & photo surveys that impress customers</li>
          <li>Boost number of surveys by 60%</li>
        </ul>
      </div>
      <div className="md:w-1/2 flex justify-center mt-10 md:mt-0">
        <img
          src="/removals-company.png"
          alt="Removals Company"
          className="rounded-lg shadow-lg w-3/4 object-contain"
        />
      </div>
    </section>
  );
}
