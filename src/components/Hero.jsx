import React from "react";

export default function Hero() {
  return (
    <section
      className="text-center py-20 px-4"
      style={{
        background: "radial-gradient(circle at bottom center, #E2D5FF 0%, #6A58D3 40%, #1D1B4F 100%)",
        color: "white",
      }}
    >
      <h1 className="text-4xl md:text-5xl font-bold mb-4">
        Sign Up for CRM
      </h1>
      <p className="text-lg md:text-xl mb-6">
        Join the most advanced AI-powered CRM for removals. Streamline your surveys and boost efficiency.
      </p>
      <div className="flex flex-col md:flex-row justify-center gap-2 mb-8">
        <input
          type="email"
          placeholder="Enter your email"
          className="px-4 py-2 rounded-md text-black w-full md:w-64"
        />
        <a
          href="/signup"
          className="px-6 py-2 rounded-md bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold hover:opacity-90 text-center"
        >
          Sign Up for CRM
        </a>
      </div>
      <a
        href="https://aisurvey.airemovals.co.uk"
        className="px-6 py-2 rounded-md border border-white text-white hover:bg-white hover:text-black transition"
      >
        Try AI Survey
      </a>
      <div className="mt-10 flex justify-center">
        <img
          src="/removals-company.png"
          alt="CRM illustration"
          className="w-full max-w-3xl"
        />
      </div>
    </section>
  );
}
