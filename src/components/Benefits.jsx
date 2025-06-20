import React from "react";

const Benefits = () => {
  return (
    <section id="benefits" className="bg-orange-100 py-16 px-4 md:px-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        <div className="md:w-1/2 space-y-6 text-gray-800">
          <h3 className="text-3xl md:text-4xl font-bold">Why Use AI Removals CRM</h3>
          <ul className="list-disc list-inside space-y-2 text-lg">
            <li>Dashboard with full control and real-time overview</li>
            <li>CRM calendar with all job details – no extra clicks</li>
            <li>AI Advice with smart task reminders</li>
            <li>AI-integrated video & photo surveys that impress customers</li>
            <li>Boost number of surveys by 60%</li>
          </ul>
        </div>
        <div className="md:w-1/2">
          <img src="/moving-company.png" alt="Moving company" className="w-full rounded shadow" />
        </div>
      </div>
    </section>
  );
};

export default Benefits;
