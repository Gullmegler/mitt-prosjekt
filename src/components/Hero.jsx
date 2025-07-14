import React from "react";

export default function Hero() {
  return (
    <section
      className="text-center py-20 px-4"
      style={{
        background: "radial-gradient(circle at bottom center, #E2D5FF 0%, #6A58D3 40%, #1D1B4F 100%)",
      }}
    >
      <h1 className="text-4xl md:text-6xl font-bold text-white">
        AI-Powered CRM for Removals Companies 2025
      </h1>
      <p className="mt-4 text-lg md:text-xl text-white max-w-2xl mx-auto">
        Grow your removals company with advanced AI surveys, instant object detection,
        and seamless CRM automation — the smart way to manage moves.
      </p>
      <form className="mt-8 flex flex-col md:flex-row justify-center gap-4">
        <input
          type="email"
          placeholder="Enter your email"
          className="px-4 py-2 rounded-md text-black w-full md:w-auto"
        />
        <button
          type="submit"
          className="px-6 py-2 rounded-md bg-gradient-to-r from-pink-500 to-purple-500 text-white font-medium"
        >
          Sign up for CRM
        </button>
        <a
          href="https://aisurvey.airemovals.co.uk"
          className="px-6 py-2 rounded-md border border-white text-white font-medium hover:bg-white hover:text-black transition"
        >
          Try AI Survey
        </a>
      </form>
      <img
        src="/removals-company.png"
        alt="CRM illustration"
        className="w-full max-w-3xl mx-auto mt-12"
      />
    </section>
  );
}
