import React from "react";

export default function Hero() {
  return (
    <section
      className="w-full pt-32 pb-20 flex flex-col items-center text-center"
      style={{
        background: "linear-gradient(180deg, #E2D5FF 0%, #6A58D3 50%, #1D1B4F 100%)",
      }}
    >
      <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
        Sign Up for CRM
      </h1>
      <p className="text-white text-lg max-w-2xl mb-8">
        Join the most advanced AI-powered CRM for removals. Streamline your surveys and boost efficiency.
      </p>

      <div className="w-full max-w-2xl flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4">
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full md:flex-1 px-4 py-3 rounded-md border border-gray-300 focus:outline-none text-black bg-white"
        />
        <a
          href="/signup"
          className="bg-pink-500 hover:bg-pink-600 text-white font-semibold px-6 py-3 rounded-md transition"
        >
          Sign up for AI Removals CRM
        </a>
      </div>

      <a
        href="https://aisurvey.airemovals.co.uk"
        className="mt-4 border border-white text-white px-6 py-3 rounded-md hover:bg-white hover:text-black transition"
      >
        Try AI Survey
      </a>
    </section>
  );
}
