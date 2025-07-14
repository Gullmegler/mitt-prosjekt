import React from "react";

export default function Hero() {
  return (
    <div className="flex flex-col items-center justify-center text-center py-32">
      <h1 className="text-4xl md:text-6xl font-bold mb-4">Sign Up for CRM</h1>
      <p className="text-lg md:text-xl mb-8">
        Join the most advanced AI-powered CRM for removals. Streamline your surveys and boost efficiency.
      </p>
      <div className="flex flex-col md:flex-row items-center gap-4 w-full max-w-md">
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full px-4 py-2 rounded-md bg-white text-black focus:outline-none"
        />
        <button className="bg-gradient-to-r from-pink-500 to-purple-500 px-6 py-2 rounded-md font-semibold text-white">
          Sign up for AI Removals CRM
        </button>
      </div>
      <button
        className="mt-4 border border-white px-6 py-2 rounded-md font-medium hover:bg-white hover:text-black transition"
        onClick={() => window.location.href = "https://aisurvey.airemovals.co.uk"}
      >
        Try AI Survey
      </button>
    </div>
  );
}
