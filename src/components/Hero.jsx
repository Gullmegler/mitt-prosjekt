import React from "react";

export default function Hero() {
  return (
    <section
      className="w-full py-20 flex flex-col items-center text-center"
      style={{
        background: "radial-gradient(circle at top center, #0d1117 0%, #0d1117 30%, #161b22 100%)",
      }}
    >
      <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
        AI-Powered CRM for Removals
      </h1>
      <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl">
        Streamline your removals business with advanced AI surveys, instant object detection, and seamless CRM automation.
      </p>
      <button
        className="px-6 py-3 rounded-md font-semibold text-white bg-gradient-to-r from-pink-500 to-purple-600 hover:from-purple-600 hover:to-pink-500 transition"
      >
        Get Started
      </button>
    </section>
  );
}
