import React from "react";
import Image from "next/image";
import surveyAgent from "../assets/surveyAgent.png";

export default function Benefits() {
  return (
    <section id="benefits" className="bg-gradient-to-r from-purple-600 to-pink-500 py-12">
      <div className="max-w-6xl mx-auto px-4 text-white">
        <h2 className="text-3xl font-bold mb-6">Why Use AI Removals CRM</h2>
        <ul className="list-disc ml-6 space-y-2">
          <li>Dashboard with full control and real-time overview</li>
          <li>CRM calendar with all job details — no extra clicks</li>
          <li>AI advice with smart task reminders</li>
          <li>AI-integrated video & photo surveys that impress customers</li>
          <li>Boost number of surveys by 60%</li>
        </ul>
        <div className="mt-8 flex justify-center">
          <Image src={surveyAgent} alt="Survey Agent" className="rounded-lg shadow-lg w-1/2 object-contain" priority />
        </div>
      </div>
    </section>
  );
}
