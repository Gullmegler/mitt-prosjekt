import React from "react";

export default function Benefits() {
  return (
    <section
      id="benefits"
      className="bg-[#292973] text-white py-20 px-4 relative"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 bg-[#333388] rounded-2xl p-8 shadow-lg">
        <div className="flex-1 space-y-4">
          <h2 className="text-3xl font-bold mb-4">Why Use AI Removals CRM</h2>
          <p>💜 Dashboard with full control and real-time overview</p>
          <p>💜 CRM calendar with all job details — no extra clicks</p>
          <p>💜 AI advice with smart task reminders</p>
          <p>💜 AI-integrated video & photo surveys that impress customers</p>
        </div>
        <div className="flex-1 flex justify-center">
          <img
            src="/survey-agent.png"
            alt="Survey Agent"
            className="w-72 md:w-80 rounded-lg"
          />
        </div>
      </div>
    </section>
  );
}
