import React from "react";

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center text-center px-4 py-20 md:py-32">
      <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
        The Best AI-Powered CRM for Removals Companies in 2025
      </h1>
      <p className="text-lg md:text-xl text-white max-w-2xl mb-8">
        Join the tailored AI-powered CRM built to simplify surveys, manage bookings, and help your removals company grow faster in 2025.
      </p>
      <div className="flex flex-col md:flex-row items-center gap-4">
        <input
          type="email"
          placeholder="Enter your email"
          className="px-4 py-2 rounded-md text-black w-64"
        />
        <button className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-2 rounded-md transition">
          Sign Up CRM
        </button>
      </div>
      <button className="border mt-4 border-white text-white px-6 py-2 rounded-md hover:bg-white hover:text-black transition">
        Try AI Survey
      </button>

      <div className="absolute inset-0 -z-10 overflow-hidden">
        <img
          src="/removals-company.png"
          alt="Removals Company"
          className="object-cover w-full h-full opacity-80"
        />
      </div>
    </section>
  );
}
