import React from "react";

export default function Benefits() {
  return (
    <section
      id="benefits"
      className="bg-[#292973] text-white py-20 px-4 relative"
    >
      <h2 className="text-3xl font-bold text-center mb-8">
        Why Use AI Removals CRM
      </h2>
      <div className="max-w-4xl mx-auto space-y-4 text-left">
        <p>💜 Dashboard with full control and real-time overview</p>
        <p>💜 CRM calendar with all job details — no extra clicks</p>
        <p>💜 AI advice with smart task reminders</p>
        <p>💜 AI-integrated video & photo surveys that impress customers</p>
      </div>
      <img
        src="/survey-agent.png"
        alt="Mover Agent"
        className="mx-auto mt-12 w-64 md:w-80"
      />
    </section>
  );
}
