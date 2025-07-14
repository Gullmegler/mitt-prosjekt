import React from "react";

export default function Hero() {
  return (
    <section className="text-center py-16 bg-[#0d1117] text-white">
      <h1 className="text-4xl md:text-5xl font-bold mb-4">
        Best AI-powered CRM for Removal Company 2025
      </h1>
      <p className="text-lg md:text-xl mb-6">
        Optimize your workflows, automate surveys, and grow your removal company with our specialized CRM solution.
      </p>
      <div className="flex flex-col sm:flex-row justify-center gap-4 mb-6">
        <input
          type="email"
          placeholder="Enter your email"
          className="px-4 py-2 rounded w-64 text-black"
        />
        <button className="bg-green-600 text-white px-4 py-2 rounded">Sign Up</button>
        <button className="border border-white px-4 py-2 rounded">Try AI Survey</button>
      </div>
      <img
        src="/removals-company.png"
        alt="Removals Company"
        className="mx-auto mt-8 max-h-96"
      />
    </section>
  );
}
