import React from "react";
import { CheckCircle } from "lucide-react"; // Du kan bruke hvilket som helst ikon-bibliotek

export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-purple-700 to-purple-900 text-white py-20 text-center">
      <h1 className="text-4xl md:text-5xl font-bold mb-4">
        Best AI-powered CRM for Removal Companies 2025
      </h1>
      <p className="text-lg md:text-xl mb-6 max-w-3xl mx-auto">
        Grow your removal company with our tailored AI CRM — streamline tasks, automate surveys, and boost efficiency.
      </p>
      <div className="flex justify-center gap-2">
        <input
          type="email"
          placeholder="Enter your email"
          className="px-4 py-2 rounded text-black"
        />
        <button
          onClick={() => window.location.href = "/signup"}
          className="bg-pink-500 hover:bg-pink-600 text-white px-5 py-2 rounded"
        >
          Sign Up CRM
        </button>
      </div>
    </section>
  );
}

export function Navbar() {
  return (
    <nav className="bg-gradient-to-b from-purple-700 to-purple-900 text-white py-4 px-6 flex justify-between items-center fixed w-full z-10">
      <a href="https://airemovals.co.uk" className="font-bold text-lg">AI REMOVALS</a>
      <div className="space-x-4">
        <a href="#benefits" className="hover:underline">Benefits</a>
        <a href="#prices" className="hover:underline">Prices</a>
        <a href="#faq" className="hover:underline">FAQ</a>
        <a href="#contact" className="hover:underline">Contact</a>
        <a href="/signup" className="bg-pink-500 hover:bg-pink-600 px-3 py-1 rounded">Sign Up CRM</a>
      </div>
    </nav>
  );
}

export function Benefits() {
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

export function AiSurvey() {
  const steps = [
    {
      title: "Step 1: Capture",
      description: "Customers take photos or videos of their rooms and items."
    },
    {
      title: "Step 2: AI Analyze",
      description: "Our AI detects objects and generates an instant inventory."
    },
    {
      title: "Step 3: Quote",
      description: "You receive a ready-made summary to prepare a fast, accurate quote."
    }
  ];

  return (
    <section id="survey" className="bg-gradient-to-b from-purple-700 to-purple-900 text-white py-20">
      <h2 className="text-3xl font-bold text-center mb-10">How Our AI Survey Works</h2>
      <div className="flex flex-col md:flex-row justify-center gap-6 max-w-5xl mx-auto">
        {steps.map((step, index) => (
          <div key={index} className="bg-purple-600 rounded-lg p-6 flex-1 shadow-lg">
            <h3 className="font-bold mb-2">{step.title}</h3>
            <p>{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
