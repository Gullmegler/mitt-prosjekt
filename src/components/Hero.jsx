import React from "react";

export default function Hero() {
  return (
    <section className="bg-github text-white px-4 py-20 text-center">
      <h1 className="text-4xl md:text-5xl font-bold mb-4">
        Best AI-powered CRM for Removal Company 2025
      </h1>
      <p className="text-lg mb-6">
        Optimize your workflows, automate surveys, and grow your removal company with our specialized CRM solution.
      </p>
      <form className="flex flex-col sm:flex-row justify-center items-center gap-2 mb-8">
        <input
          type="email"
          placeholder="Enter your email"
          className="px-4 py-2 rounded border w-64 text-black"
        />
        <button type="submit" className="bg-primary text-white px-4 py-2 rounded">
          Sign Up
        </button>
        <button type="button" className="border border-primary text-primary px-4 py-2 rounded">
          Try AI Survey
        </button>
      </form>
      <div className="flex justify-center">
        <img src="/removals-company.png" alt="Removals CRM" className="max-w-md w-full" />
      </div>
    </section>
  );
}
