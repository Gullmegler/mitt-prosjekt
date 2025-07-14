import React from "react";

export default function Hero() {
  return (
    <section
      className="flex flex-col items-center justify-center text-center px-4 py-24"
      style={{
        background: "radial-gradient(circle at bottom center, #E2D5FF 0%, #6A58D3 40%, #1D1B4F 100%)",
      }}
    >
      <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
        The Best AI-Powered CRM for Removals Companies in 2025
      </h1>
      <p className="text-lg md:text-xl text-white mb-8 max-w-2xl">
        Automate surveys, manage bookings, and scale your removals business with our powerful AI CRM solution for 2025.
      </p>
      <div className="flex flex-col md:flex-row gap-4 w-full max-w-lg">
        <input
          type="email"
          placeholder="Enter your email"
          className="flex-1 px-4 py-3 rounded-md bg-white text-black placeholder-gray-600 focus:outline-none"
        />
        <button
          className="px-6 py-3 rounded-md font-medium bg-gradient-to-r from-pink-500 to-purple-500 text-white"
          onClick={() => window.location.href = "/signup"}
        >
          Sign up for CRM
        </button>
      </div>
      <button
        className="mt-4 px-6 py-3 rounded-md border border-white text-white hover:bg-white hover:text-black transition"
        onClick={() => window.location.href = "https://aisurvey.airemovals.co.uk"}
      >
        Try AI Survey
      </button>
      <img
        src="/removals-company.png"
        alt="CRM illustration"
        className="w-full max-w-3xl mt-12"
      />
    </section>
  );
}
