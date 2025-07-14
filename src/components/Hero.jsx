import React from "react";

export default function Hero() {
  const removalsImage = process.env.PUBLIC_URL + "/removals-company.png";

  return (
    <section className="text-center py-16 px-4">
      <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
        Sign Up for AI Removals CRM
      </h1>
      <p className="text-lg text-gray-200 max-w-2xl mx-auto mb-8">
        Join the best AI-powered CRM for removals companies in 2025. Streamline surveys, manage crews, and grow faster.
      </p>
      <div className="flex flex-col md:flex-row justify-center items-center gap-2 mb-8">
        <input
          type="email"
          placeholder="Enter your email"
          className="px-4 py-2 rounded bg-white text-black w-64"
        />
        <button className="px-6 py-2 rounded bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold">
          Sign up for CRM
        </button>
        <button className="px-6 py-2 rounded border border-white text-white font-semibold">
          Try AI Survey
        </button>
      </div>
      <img
        src={removalsImage}
        alt="Removals company illustration"
        className="mx-auto mt-8 max-w-md w-full rounded-lg shadow-lg"
      />
    </section>
  );
}
