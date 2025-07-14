import React from "react";
import { CheckCircle } from "lucide-react";

export default function Benefits() {
  const benefits = [
    "Dashboard with full control and real-time overview",
    "CRM calendar with all job details — no extra clicks",
    "AI advice with smart task reminders",
    "AI-integrated video & photo surveys that impress customers",
    "Boost number of surveys by 60%"
  ];

  return (
    <section id="benefits" className="bg-purple-800 text-white py-20">
      <h2 className="text-3xl font-bold text-center mb-10">Why Use AI Removals CRM</h2>
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center">
        <div className="flex-1 space-y-4">
          {benefits.map((text, index) => (
            <div key={index} className="flex items-center">
              <div className="bg-pink-500 rounded-full p-1 mr-3">
                <CheckCircle className="text-white" size={20} />
              </div>
              <p>{text}</p>
            </div>
          ))}
        </div>
        <img
          src="/removals-company.png"
          alt="Removals Company"
          className="w-full md:w-1/2 mt-10 md:mt-0"
        />
      </div>
    </section>
  );
}
