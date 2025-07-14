import React from "react";

export default function Benefits() {
  return (
    <section className="py-16 text-white">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h2 className="text-3xl font-bold mb-4">Why Use AI Removals CRM</h2>
          <ul className="list-disc list-inside space-y-2 text-lg">
            <li>Dashboard with full control and real-time overview</li>
            <li>CRM calendar with all job details — no extra clicks</li>
            <li>AI advice with smart task reminders</li>
            <li>AI-integrated video & photo surveys that impress customers</li>
            <li>Boost number of surveys by 60%</li>
          </ul>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <img
            src="/removals-company.png"
            alt="Removal Company CRM illustration"
            className="max-w-full rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
