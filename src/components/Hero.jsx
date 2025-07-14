import React from "react";
import removalsImage from "/public/removals-company.png";

export default function Hero() {
  return (
    <section className="bg-github text-white text-center px-4 py-20">
      <h1 className="text-4xl font-bold mb-4">
        Best AI-powered CRM for Removal Company 2025
      </h1>
      <p className="mb-6">
        Optimize your workflows, automate surveys, and grow your removal company with our specialized CRM solution.
      </p>
      <div className="flex justify-center gap-2 mb-6 flex-wrap">
        <input
          type="email"
          placeholder="Enter your email"
          className="px-4 py-2 rounded text-black"
        />
        <button className="bg-primary text-white px-4 py-2 rounded hover:bg-orange-600 transition">
          Sign Up
        </button>
        <button className="border border-white text-white px-4 py-2 rounded hover:bg-white hover:text-black transition">
          Try AI Survey
        </button>
      </div>
      <div className="flex justify-center">
        <img src={removalsImage} alt="Removals CRM" className="max-w-md w-full" />
      </div>
    </section>
  );
}
