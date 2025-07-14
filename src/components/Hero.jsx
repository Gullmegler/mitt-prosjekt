import React from "react";

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center py-20 px-4 text-center">
      <h1 className="text-4xl font-bold text-white md:text-6xl">
        The most advanced AI-powered CRM for removals companies 2025
      </h1>
      <p className="mt-4 text-lg text-white md:text-xl">
        Join and boost your removals business with AI automation, seamless surveys, and smart CRM tools.
      </p>
      <div className="mt-8 flex flex-col md:flex-row items-center justify-center gap-4">
        <input
          type="email"
          placeholder="Enter your email"
          className="px-4 py-3 rounded-md bg-white text-black w-64"
        />
        <a href="/signup">
          <button className="px-6 py-3 bg-pink-500 text-white rounded-md hover:bg-pink-600">
            Sign Up CRM
          </button>
        </a>
      </div>
      <a href="https://aisurvey.airemovals.co.uk">
        <button className="mt-4 px-6 py-3 border border-white text-white rounded-md hover:bg-white hover:text-black">
          Try AI Survey
        </button>
      </a>
    </section>
  );
}
