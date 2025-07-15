import React from "react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="bg-gradient-to-b from-[#111144] to-[#292973] text-white text-center py-20 relative"
    >
      <h1 className="text-4xl md:text-5xl font-bold mb-4">
        Best AI-powered CRM for Removal Company 2025
      </h1>
      <p className="max-w-xl mx-auto mb-8">
        Optimize your workflows, automate surveys, and grow your removal company with our specialized CRM solution.
      </p>
      <div className="flex justify-center gap-2 mb-8 flex-wrap">
        <input
          type="email"
          placeholder="Enter your email"
          className="px-4 py-2 rounded text-black w-64"
        />
        <button className="bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded text-white transition">
          Sign Up
        </button>
        <button className="border border-white px-4 py-2 rounded hover:bg-white hover:text-[#111144] transition">
          Try AI Survey
        </button>
      </div>
      <img
        src="/removals-company.png"
        alt="Removals Company"
        className="mx-auto mt-8 w-72 md:w-96"
      />
      <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-b from-transparent to-[#292973]" />
    </section>
  );
}
