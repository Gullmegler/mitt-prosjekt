import React from "react";
import Image from "next/image";
import crmImage from "../../public/removals-company.png"; // bruk korrekt sti

export default function Benefits() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between gap-10 py-24 max-w-6xl mx-auto px-4">
      <div className="flex-1">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Use AI Removals CRM</h2>
        <ul className="list-disc pl-5 space-y-2 text-lg">
          <li>Dashboard with full control and real-time overview</li>
          <li>CRM calendar with all job details — no extra clicks</li>
          <li>AI advice with smart task reminders</li>
          <li>AI-integrated video & photo surveys that impress customers</li>
          <li>Boost number of surveys by 60%</li>
        </ul>
      </div>
      <div className="flex-1 flex justify-center">
        <Image
          src={crmImage}
          alt="CRM Illustration"
          className="w-full max-w-md rounded-md"
        />
      </div>
    </section>
  );
}
