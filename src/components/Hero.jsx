import React from "react";

export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-purple-700 to-purple-900 text-white py-24 text-center">
      <h1 className="text-4xl md:text-5xl font-bold mb-4">
        Best AI-powered CRM for Removal Companies 2025
      </h1>
      <p className="text-lg md:text-xl mb-6 max-w-3xl mx-auto">
        Grow your removal company with our tailored AI CRM — streamline tasks, automate surveys, and boost efficiency.
      </p>
      <div className="flex justify-center gap-2">
        <input
          type="email"
          placeholder="Enter your email"
          className="px-4 py-2 rounded text-black"
        />
        <button
          onClick={() => window.location.href = "/signup"}
          className="bg-pink-500 hover:bg-pink-600 text-white px-5 py-2 rounded"
        >
          Sign Up CRM
        </button>
      </div>
    </section>
  );
}
