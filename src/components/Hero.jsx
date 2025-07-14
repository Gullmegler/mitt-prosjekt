import React from "react";

export default function Hero() {
  return (
    <section className="bg-github text-white flex flex-col items-center py-16 px-4">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
        Best AI-powered CRM for Removal Company 2025
      </h1>
      <p className="text-lg md:text-xl text-center mb-6">
        Optimize your workflows, automate surveys, and grow your removal company with our specialized CRM solution.
      </p>
      <div className="flex flex-col sm:flex-row gap-2 mb-8">
        <input
          type="email"
          placeholder="Enter your email"
          className="px-4 py-2 rounded text-black"
        />
        <button className="bg-green-600 text-white px-4 py-2 rounded">Sign Up</button>
        <button className="border border-white px-4 py-2 rounded">Try AI Survey</button>
      </div>
      <img
        src="/removals-company.png"
        alt="CRM Illustration"
        className="w-full max-w-md"
      />
    </section>
  );
}
