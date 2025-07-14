import React from "react";

export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-primaryDark to-primaryLight text-white flex flex-col items-center py-20 px-4 text-center">
      <h1 className="text-4xl md:text-5xl font-bold mb-4">
        Best AI-powered CRM for Removal Company 2025
      </h1>
      <p className="text-lg mb-6 max-w-2xl">
        Optimize your workflows, automate surveys, and grow your removal company with our specialized CRM solution.
      </p>
      <div className="flex flex-col md:flex-row items-center gap-2 mb-10">
        <input
          type="email"
          placeholder="Enter your email"
          className="px-4 py-2 rounded w-64 text-black"
        />
        <button className="bg-orange text-white px-4 py-2 rounded">Sign Up</button>
        <button className="border border-orange text-orange px-4 py-2 rounded">
          Try AI Survey
        </button>
      </div>
      <img
        src="/removals-company.png"
        alt="CRM Illustration"
        className="w-full max-w-md"
      />
    </section>
  );
}
