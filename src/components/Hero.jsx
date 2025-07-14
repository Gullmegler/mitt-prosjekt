import React from "react";

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center text-center py-20">
      <h1 className="text-4xl md:text-5xl font-bold text-white">
        Sign Up for AI Removals CRM
      </h1>
      <p className="mt-4 text-lg text-white max-w-2xl">
        Join the most advanced AI-powered CRM for removals. Streamline your surveys and boost efficiency.
      </p>
      
      <div className="flex flex-col md:flex-row gap-4 mt-8 w-full max-w-2xl">
        <input
          type="email"
          placeholder="Enter your email"
          className="px-4 py-2 bg-white text-black rounded-md flex-1 focus:outline-none"
        />
        <a
          href="/signup"
          className="px-6 py-2 rounded-md bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold hover:opacity-90 transition whitespace-nowrap"
        >
          Sign up for AI Removals CRM
        </a>
      </div>

      <a
        href="https://aisurvey.airemovals.co.uk"
        className="mt-4 px-6 py-2 rounded-md border border-white text-white font-semibold hover:bg-white hover:text-black transition"
      >
        Try AI Survey
      </a>
    </section>
  );
}
