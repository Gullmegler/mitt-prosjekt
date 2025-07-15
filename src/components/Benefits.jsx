import React from "react";

const Benefits = () => {
  return (
    <section id="benefits" className="bg-[#5648b1] text-white py-20">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8 px-6">
        <div className="flex-1">
          <h2 className="text-3xl font-bold mb-6">Why Use AI Removals CRM</h2>
          <ul className="space-y-4">
            <li>💜 Dashboard with full control and real-time overview</li>
            <li>💜 CRM calendar with all job details — no extra clicks</li>
            <li>💜 AI advice with smart task reminders</li>
            <li>💜 AI-integrated video & photo surveys that impress customers</li>
            <li>💜 Boost number of surveys by 60%</li>
          </ul>
        </div>
        <div className="flex-1">
          <img src="/survey-agent.png" alt="Mover agent" className="w-full max-w-xs mx-auto" />
        </div>
      </div>
    </section>
  );
};

export default Benefits;
