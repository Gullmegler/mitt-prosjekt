import React from "react";

export default function Hero() {
  return (
    <section className="bg-[#0A0A2A] py-20 text-center px-4">
      <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
        Best AI-powered CRM for Removal Company 2025
      </h1>
      <p className="text-white mb-6 max-w-2xl mx-auto">
        Optimize your workflows, automate surveys, and grow your removal company with our specialized CRM solution.
      </p>
      <form
        className="relative max-w-md mx-auto w-full"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full rounded-full py-3 px-5 pr-32 text-black focus:outline-none"
          required
        />
        <button
          type="submit"
          className="absolute right-1 top-1 bottom-1 bg-orange-500 hover:bg-orange-600 text-white px-5 rounded-full"
        >
          Sign Up
        </button>
      </form>
      <a
        href="https://aisurvey.airemovals.co.uk"
        className="inline-block mt-4 border border-white text-white py-2 px-6 rounded-full hover:bg-white hover:text-[#0A0A2A] transition"
      >
        Try AI Survey
      </a>
      <div className="flex justify-center mt-6">
        <img
          src="/removals-company.png"
          alt="Removal Company"
          className="max-w-xs md:max-w-md"
        />
      </div>
    </section>
  );
}
