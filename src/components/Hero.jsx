import React from "react";

export default function Hero() {
  return (
    <section
      className="w-full py-20 flex flex-col items-center text-center"
      style={{
        background: "radial-gradient(circle at top center, #0d1117 0%, #0d1117 30%, #161b22 100%)",
      }}
    >
      <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
        Sign Up for AI Removals CRM
      </h1>
      <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl">
        Join the most advanced AI-powered CRM for removals. Streamline your surveys and boost efficiency.
      </p>

      <form className="flex flex-col md:flex-row items-center w-full max-w-md gap-3">
        <input
          type="email"
          placeholder="Enter your email"
          className="flex-1 px-4 py-3 rounded-md bg-gray-800 text-white placeholder-gray-400 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-600"
        />
        <a
          href="/signup"
          className="w-full md:w-auto px-6 py-3 rounded-md text-center font-semibold text-white bg-green-600 hover:bg-green-700 transition"
        >
          Sign up for AI Removals CRM
        </a>
      </form>

      <a
        href="https://aisurvey.airemovals.co.uk"
        className="mt-4 px-6 py-3 border border-white text-white rounded-md hover:bg-white hover:text-black transition"
      >
        Try AI Survey
      </a>
    </section>
  );
}
