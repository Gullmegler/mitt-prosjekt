import React from "react";

const Benefits = () => {
  return (
    <section id="benefits" className="flex flex-col md:flex-row items-center justify-center gap-8">
      <div className="max-w-lg">
        <h2 className="text-3xl font-bold mb-6">Why Use AI Removals CRM</h2>
        <ul className="space-y-4">
          <li>✅ Dashboard with full control and real-time overview</li>
          <li>✅ CRM calendar with all job details — no extra clicks</li>
          <li>✅ AI advice with smart task reminders</li>
          <li>✅ AI-integrated video & photo surveys that impress customers</li>
          <li>✅ Boost number of surveys by 60%</li>
        </ul>
      </div>
      <div className="mt-10 md:mt-0 md:ml-12">
        <img src="/survey-agent.png" alt="Mover agent" className="w-full max-w-xs" />
      </div>
    </section>
  );
};

export default Benefits;
